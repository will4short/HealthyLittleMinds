import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const encoder = new TextEncoder();

function json(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

async function sha256Hex(value: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", encoder.encode(value));
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function safeEqual(left: string, right: string): boolean {
  if (left.length !== right.length) return false;
  let difference = 0;
  for (let index = 0; index < left.length; index += 1) {
    difference |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }
  return difference === 0;
}

Deno.serve(async (request) => {
  if (request.method !== "POST") return json(405, { error: "method_not_allowed" });

  const apiKey = Deno.env.get("PAYHIP_API_KEY");
  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!apiKey || !supabaseUrl || !serviceRoleKey) return json(503, { error: "service_not_configured" });

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return json(400, { error: "invalid_json" });
  }

  const suppliedSignature = String(payload.signature || "").toLowerCase();
  const expectedSignature = await sha256Hex(apiKey);
  if (!safeEqual(suppliedSignature, expectedSignature)) return json(401, { error: "invalid_signature" });

  const eventType = String(payload.type || "");
  if (eventType !== "paid" && eventType !== "refunded") return json(200, { result: "ignored" });

  const items = Array.isArray(payload.items) ? payload.items : [];
  if (items.length === 0) return json(400, { error: "missing_items" });

  const client = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const results = [];
  for (const item of items) {
    const typedItem = item as Record<string, unknown>;
    const transactionId = String(payload.id || "");
    const productId = String(typedItem.product_id || "");
    const refundMarker = eventType === "refunded"
      ? String(payload.date_refunded || payload.amount_refunded || "unknown")
      : "sale";
    const externalEventId = `${eventType}:${transactionId}:${productId}:${refundMarker}`;

    const eventDate = eventType === "refunded"
      ? payload.date_refunded
      : payload.date;
    const { data, error } = await client.rpc("process_payhip_event", {
      event_payload: {
        type: eventType,
        id: transactionId,
        external_event_id: externalEventId,
        email: payload.email,
        currency: payload.currency,
        price: payload.price,
        amount_refunded: payload.amount_refunded,
        date: eventDate,
        product_id: productId,
      },
    });
    if (error) {
      console.error("Payhip event processing failed", { eventType, externalEventId, code: error.code });
      return json(500, { error: "processing_failed" });
    }
    results.push(data);
  }

  return json(200, { result: "accepted", items: results });
});
