(function () {
  "use strict";

  function configuredValue(value) {
    return typeof value === "string" && value.length > 0 && !/YOUR_|PROJECT_REF/.test(value);
  }

  function createClient() {
    var config = window.HLM_SUPABASE_CONFIG || {};
    if (!configuredValue(config.url) || !configuredValue(config.publishableKey)) {
      throw new Error("Healthy Little Minds account services are not configured.");
    }
    if (!window.supabase || typeof window.supabase.createClient !== "function") {
      throw new Error("The Supabase browser library did not load.");
    }

    return window.supabase.createClient(config.url, config.publishableKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    });
  }

  var client;
  window.HLMSupabase = {
    getClient: function () {
      if (!client) client = createClient();
      return client;
    }
  };
})();
