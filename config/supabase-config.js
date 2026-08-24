(function () {
  "use strict";

  // Browser-safe account configuration. Supabase publishable keys are designed
  // for public clients; authorization remains enforced by Row Level Security.
  // Never add a secret/service-role key or a third-party service credential.
  window.HLM_SUPABASE_CONFIG = Object.freeze({
    url: "https://qxsyhsnbkixwqjdouzql.supabase.co",
    publishableKey: "sb_publishable_rhAuxzyt6xqQ0CIUM5MJQA_nkQOq7j2"
  });
})();
