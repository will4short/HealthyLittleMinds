(function () {
  "use strict";

  // Adds one consistent row of trust links (About, Contact, Privacy, Terms) to
  // the bottom of public pages, without touching each page's own footer.
  // The Privacy Policy, Terms and Contact pages are English only, so on
  // translated pages those labels say so and the links declare hreflang="en".

  if (document.querySelector(".hlm-trust-footer")) return;

  var lang = (document.documentElement.lang || "en").toLowerCase();
  var key = lang.indexOf("ja") === 0 ? "ja"
    : lang.indexOf("ko") === 0 ? "ko"
    : lang.indexOf("zh-hant") === 0 || lang.indexOf("zh-tw") === 0 ? "zhTw"
    : lang.indexOf("zh") === 0 ? "zhCn"
    : "en";

  var prefixes = { en: "/", ja: "/ja/", ko: "/ko/", zhCn: "/zh-cn/", zhTw: "/zh-tw/" };

  var copy = {
    en: { label: "About and policies", about: "About the creator", contact: "Contact", privacy: "Privacy Policy", terms: "Terms and Conditions" },
    ja: { label: "概要とポリシー", about: "私について", contact: "お問い合わせ（英語）", privacy: "プライバシーポリシー（英語）", terms: "利用規約（英語）" },
    ko: { label: "소개 및 정책", about: "소개", contact: "문의하기 (영어)", privacy: "개인정보 처리방침 (영어)", terms: "이용 약관 (영어)" },
    zhCn: { label: "关于与政策", about: "关于我", contact: "联系我们（英文）", privacy: "隐私政策（英文）", terms: "条款与条件（英文）" },
    zhTw: { label: "關於與政策", about: "關於我", contact: "聯絡我們（英文）", privacy: "隱私權政策（英文）", terms: "條款與細則（英文）" }
  }[key];

  var links = [
    { href: prefixes[key] + "about_me.html", text: copy.about, english: false },
    { href: "/contact.html", text: copy.contact, english: key !== "en" },
    { href: "/privacy.html", text: copy.privacy, english: key !== "en" },
    { href: "/terms.html", text: copy.terms, english: key !== "en" }
  ];

  var style = document.createElement("style");
  style.id = "hlm-trust-footer-style";
  style.textContent =
    ".hlm-trust-footer{box-sizing:border-box;clear:both;width:100%;padding:1rem 1rem 1.5rem;background:#e6f4fa;border-top:1px solid rgba(37,78,112,.16);font-family:'DM Sans',system-ui,-apple-system,'Segoe UI',sans-serif;font-size:1rem;line-height:1.4;text-align:center}" +
    ".hlm-trust-footer ul{display:flex;flex-wrap:wrap;justify-content:center;gap:.25rem 1.25rem;margin:0;padding:0;list-style:none}" +
    ".hlm-trust-footer a{display:inline-flex;align-items:center;min-height:44px;padding:0 .25rem;color:#254e70;font-weight:700;text-decoration:underline;text-underline-offset:.15em}" +
    ".hlm-trust-footer a:hover{text-decoration-thickness:2px}" +
    ".hlm-trust-footer a:focus-visible{outline:3px solid #254e70;outline-offset:3px;border-radius:4px}" +
    "@media print{.hlm-trust-footer{display:none}}";
  document.head.appendChild(style);

  var nav = document.createElement("nav");
  nav.className = "hlm-trust-footer";
  nav.setAttribute("aria-label", copy.label);
  var list = document.createElement("ul");
  links.forEach(function (item) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.text;
    if (item.english) a.setAttribute("hreflang", "en");
    li.appendChild(a);
    list.appendChild(li);
  });
  nav.appendChild(list);
  document.body.appendChild(nav);

  window.HLMTrustFooter = { links: links };
})();
