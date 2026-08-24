(function () {
  "use strict";
  var locale = (document.documentElement.lang || "").toLowerCase();
  var copy = locale.indexOf("ja") === 0
    ? "安全なアカウントで購入情報とライブラリーを連携できます。"
    : locale.indexOf("ko") === 0
      ? "안전한 계정으로 구매 내역과 라이브러리를 연결할 수 있습니다."
      : locale.indexOf("zh-hant") === 0 || locale.indexOf("zh-tw") === 0
        ? "使用安全帳戶連結購買記錄與會員資源庫。"
        : "使用安全账户关联购买记录与会员资源库。";
  var description = document.querySelector("#login .login-box > p:nth-of-type(2)");
  if (description) description.textContent = copy;
})();
