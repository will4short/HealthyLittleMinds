(function () {
  "use strict";

  var isPreview = location.protocol === "file:" ||
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1";
  if (!isPreview && !window.HLM_PROTECTED_GUARD_ACTIVE) {
    location.replace("index.html");
    return;
  }

  var books = {
    yet: {
      title: "《我還不會......沒關係！》",
      image: "../images/when_i_cant_coverpage.webp",
      text: "陪孩子知道，遇到挫折時可以慢慢練習，再試一次。",
      url: "https://heyzine.com/flip-book/1fb2ef8177.html"
    },
    storm: {
      title: "《如何平靜心中的風暴》",
      image: "../images/storm-book-cover.webp",
      text: "用呼吸、表達和陪伴，照顧變得很大的情緒。",
      url: "https://heyzine.com/flip-book/3cf1027650.html"
    },
    scared: {
      title: "《當我感到害怕》",
      image: "../images/when-i-feel-scared-bkcover.webp",
      text: "理解害怕的訊息，找到安全與勇氣的小方法。",
      url: "https://heyzine.com/flip-book/1f4337da92.html"
    },
    feelings: {
      title: "《當我的感受變得太大的時候》",
      image: "../images/when-my-feelings-cover.webp",
      text: "幫助孩子停下來、呼吸，並用語言理解內心的感受。",
      url: "https://heyzine.com/flip-book/5cbe03c993.html"
    },
    princess: {
      title: "《公主拍照日的驚喜》",
      image: "../images/princess-picture-day-cover.webp",
      text: "支持孩子接納自己，也看見自己的勇氣與成長。",
      url: "https://heyzine.com/flip-book/a958329538.html"
    },
    little: {
      title: "《Little Acts, Big Feelings》",
      image: "../images/little-acts-book-cover.webp",
      text: "小小的友善行動，能帶來連結與溫暖的感受。",
      url: "https://heyzine.com/flip-book/034942038a.html"
    },
    grey: {
      title: "《世界不只有黑與白》",
      image: "../images/grey-thinking.webp",
      text: "練習用不同角度理解事情、情緒與彼此。",
      url: "https://heyzine.com/flip-book/d765b64bda.html"
    },
    destiny: {
      title: "《Destiny 想要放棄的一天》",
      image: "../images/The_Day_Destiny_Wanted_To_Quit.webp",
      text: "在好累、好想放棄的日子裡，找到下一個小步驟。",
      url: "https://heyzine.com/flip-book/8736fac672.html"
    }
  };

  var feelings = {
    embarrassed: {
      emoji: "😳", title: "尷尬", lead: "當我們犯錯、被注意或擔心別人怎麼看自己時，臉熱熱、想躲起來的感覺很自然。尷尬可以慢慢被安撫。",
      say: "我覺得尷尬，但我沒有壞掉。我可以慢慢再試一次。",
      causes: [["被大家看見", "回答錯誤、跌倒或表演失誤時，會特別在意他人的眼光。"], ["不小心出錯", "事情沒有照預期進行時，可能覺得很不好意思。"], ["被取笑", "當笑聲讓自己覺得受傷，尷尬會變得更強烈。"]],
      steps: [["慢慢吐氣", "深吸氣，再把氣慢慢吐長一點，讓身體先平靜。"], ["對自己溫柔", "提醒自己：「每個人都會犯錯。」"], ["找人說一說", "把發生的事告訴可信任的大人，心會輕一些。"]],
      adult: "先避免笑著帶過孩子的尷尬。可以說：「那一刻真的很不自在，但你願意嘗試很勇敢。」", books: ["yet", "grey"]
    },
    nervous: {
      emoji: "😬", title: "緊張", lead: "第一次做某件事、上台或等待結果之前，心跳加快是身體正在準備。緊張不代表你不能做到。",
      say: "我有點緊張，但我可以一步一步來。",
      causes: [["新的經驗", "新學校、新活動或第一次見面，容易帶來不確定感。"], ["重要時刻", "比賽、考試或表演前，心裡可能有很多期待。"], ["身體反應", "心跳快、手心出汗，可能讓人以為事情更可怕。"]],
      steps: [["方形呼吸", "吸氣、停住、吐氣、停住，各數四下。"], ["先練一小步", "先準備第一句話或第一個動作。"], ["讓身體動一動", "走一走或伸展，幫助多餘的緊張能量流走。"]],
      adult: "不要只說「別緊張」。可以承認感受，再幫孩子找到一個可完成的小步驟。", books: ["scared", "destiny"]
    },
    disappointed: {
      emoji: "😞", title: "失望", lead: "當期待的事情沒有發生，或努力沒有得到想要的結果，心裡變沉是很自然的。失望也表示這件事對你很重要。",
      say: "我真的很失望，但我可以休息一下，再想下一步。",
      causes: [["結果不如預期", "努力過後仍然沒有成功，會覺得很挫敗。"], ["計畫改變", "取消的行程或改變的約定，可能讓孩子很難轉換。"], ["比較自己", "看到別人成功時，自己的失望可能變得更大。"]],
      steps: [["說出感受", "用一句話說：「我很失望，因為......」"], ["先安靜一下", "找個舒服的地方休息，允許自己難過。"], ["選下一小步", "決定是再試一次、尋求幫助，或換一種方式。"]],
      adult: "先接住期待落空的痛苦，再談解決方法：「你真的很期待，改變一定不好受。」", books: ["yet", "destiny"]
    },
    fear: {
      emoji: "😨", title: "害怕", lead: "害怕是身體想保護我們的訊息。當害怕變得很大時，我們可以確認安全、尋求陪伴，慢慢找回勇氣。",
      say: "我感到害怕。我可以找安全的人陪我，慢慢前進。",
      causes: [["陌生的情況", "不知道會發生什麼時，身體可能進入警戒。"], ["可怕的內容", "看到影片、新聞或聽到故事後，畫面可能留在心裡。"], ["曾經受傷", "過去困難的經驗，會讓類似情況更令人害怕。"]],
      steps: [["看看周圍", "找出五個看得到的東西，提醒自己正在安全的此刻。"], ["找可信任的大人", "告訴大人你怕什麼，以及你需要怎樣的陪伴。"], ["分成小挑戰", "在安全範圍內，一次靠近一點點。"]],
      adult: "不要否定恐懼。一起確認安全，給孩子選擇；若持續嚴重影響生活，請尋求專業協助。", books: ["scared", "storm"]
    },
    proud: {
      emoji: "🥹", title: "驕傲", lead: "發現自己努力過、勇敢過或做了友善的選擇時，心裡暖暖的感覺叫做驕傲。它能幫助我們繼續成長。",
      say: "我為自己的努力和勇氣感到驕傲。",
      causes: [["努力完成", "花時間練習或堅持到底，值得肯定。"], ["勇敢嘗試", "即使有點怕，仍願意踏出一步。"], ["幫助別人", "溫柔的選擇也能讓自己感到自豪。"]],
      steps: [["記錄一件事", "畫下或寫下今天自己做得好的事。"], ["分享成長", "告訴家人或老師：「我今天做到......」"], ["選擇新挑戰", "想一個下一次願意嘗試的小目標。"]],
      adult: "具體稱讚孩子的過程，例如：「我看到你沒有放棄，而且重新試了一次。」", books: ["princess", "yet"]
    },
    confused: {
      emoji: "😕", title: "困惑", lead: "事情太新、變動太快，或心裡同時有很多感受時，我們可能不知道該怎麼辦。困惑時可以問問題。",
      say: "我還不明白，我可以慢慢問，也可以請人幫忙。",
      causes: [["新的說明", "第一次接觸的規則或任務，需要時間理解。"], ["突然改變", "臨時變動會讓心裡來不及準備。"], ["混合的情緒", "既高興又擔心時，也可能不知道如何表達。"]],
      steps: [["問一個問題", "先說出最不明白的一個部分。"], ["按順序整理", "從事情一開始發生了什麼說起。"], ["稍作休息", "頭腦太滿時，喝水或靜靜休息一下。"]],
      adult: "讓孩子知道問問題是安全的，並用較短的句子或圖像協助整理。", books: ["grey"]
    },
    love: {
      emoji: "💗", title: "愛與連結", lead: "被關心、關心別人，以及有人願意陪伴我們，會讓心感到安全和溫暖。",
      say: "我可以用舒服的方式表達關心與愛。",
      causes: [["相處時光", "和家人、朋友共度時間，會感到靠近。"], ["被照顧", "有人傾聽或幫忙時，我們感到被珍惜。"], ["付出善意", "照顧他人也會讓心變暖。"]],
      steps: [["說聲謝謝", "告訴某個人，你欣賞他做過的一件事。"], ["做小小善意", "幫忙整理、寫張卡片或分享。"], ["珍藏回憶", "畫下一段讓你感到被愛的時刻。"]],
      adult: "尊重孩子表達愛與接受愛的方式，不強迫擁抱，讓安全感建立在同意與傾聽之上。", books: ["little", "grey"]
    },
    bored: {
      emoji: "😑", title: "無聊", lead: "無聊有時是在告訴我們：需要新刺激、自由創作，或其實需要休息。它也可以是好點子的開始。",
      say: "我可以從無聊裡找到一個新的選擇。",
      causes: [["等待時間", "沒有安排時，時間好像過得很慢。"], ["重複活動", "一直做相同的事，興趣可能下降。"], ["太疲倦", "疲倦時，平常喜歡的事也可能不吸引人。"]],
      steps: [["三種選擇", "從畫畫、閱讀、移動身體中選一個。"], ["發現挑戰", "在附近找三個從沒注意過的小細節。"], ["確認需要", "問問自己：我需要活動，還是先休息？"]],
      adult: "提供少量開放式選擇，讓孩子自己決定如何運用空白時間。", books: ["little"]
    },
    frustrated: {
      emoji: "😤", title: "挫折", lead: "努力了卻卡住、事情不聽使喚時，身體可能變緊、心裡很煩。挫折是在提醒我們暫停或需要幫助。",
      say: "這真的很難。我可以先停一下，再請人幫忙。",
      causes: [["任務太難", "一次又一次失敗，會覺得再努力也沒用。"], ["需要等待", "不能立刻得到想要的東西，容易不耐煩。"], ["沒有被理解", "想法說不清楚或不被聽見，可能讓人生氣。"]],
      steps: [["先停手", "把手放下，慢慢吐氣三次。"], ["安全用力", "握緊再放開手掌，或做伸展。"], ["說出需要", "練習說：「這很難，我需要一點幫忙。」"]],
      adult: "維持行為界線，同時承認難受：「你很想成功，卡住真的讓人煩躁。」", books: ["storm", "yet"]
    },
    lonely: {
      emoji: "😔", title: "寂寞", lead: "想有人陪、卻覺得自己孤單時，胸口可能沉沉的。寂寞不是你的錯，它是在提醒我們需要連結。",
      say: "我可以說我很寂寞，也可以找一個人靠近。",
      causes: [["難以加入", "覺得進不去遊戲或談話，會感到被落下。"], ["想念某人", "重要的人不在身邊，心裡會有空缺。"], ["藏起感受", "不能分享真正心情時，可能覺得沒有人懂。"]],
      steps: [["選一個人", "想想今天可以跟哪位大人或朋友聯繫。"], ["小小開場", "先從打招呼、詢問能否一起玩開始。"], ["使用安心物", "照片、畫作或喜愛物品能提醒你與人的連結。"]],
      adult: "不要說「你想太多」。安排具體陪伴時間，並協助孩子找到安全的同伴。", books: ["little", "destiny"]
    },
    joy: {
      emoji: "😊", title: "喜悅", lead: "開心和興奮的時刻會為我們帶來能量，也讓我們更想與別人分享。留意喜悅，能幫助孩子珍惜美好的經驗。",
      say: "我可以享受這份開心，也留意身邊的人是否舒服。",
      causes: [["喜歡的活動", "遊戲、閱讀和創作可能讓心情亮起來。"], ["完成一件事", "努力有成果時，會感到滿足與快樂。"], ["一起歡笑", "與家人或朋友分享好時刻，會感覺更有連結。"]],
      steps: [["說出原因", "說說今天是什麼讓你感到喜悅。"], ["分享快樂", "用微笑、謝謝或一個友善行動分享這份好心情。"], ["留住記憶", "用畫畫、照片或文字記下這個美好時刻。"]],
      adult: "陪孩子享受喜悅，也溫柔提醒他們注意場合與他人的界線。", books: ["little", "princess"]
    },
    grateful: {
      emoji: "🙏", title: "感謝", lead: "注意到有人幫忙，或一天裡的小小美好時，感謝讓心感到溫暖。感謝不是忽略難過，而是也看見支持。",
      say: "今天有一件小小的好事，我想說謝謝。",
      causes: [["獲得幫助", "困難時有人陪伴或伸出手。"], ["共享時間", "一起遊戲、說話或吃飯的時刻。"], ["日常小事", "陽光、食物或完成一件事，也會帶來喜悅。"]],
      steps: [["找出三件事", "想想今天讓你安心或微笑的三件事。"], ["表達謝意", "用一句話、圖畫或小紙條說謝謝。"], ["分享友善", "選一個你也能為別人做的小行動。"]],
      adult: "以身作則分享感謝，不要求孩子在仍然難過時立刻變得開心。", books: ["little"]
    },
    curious: {
      emoji: "🧐", title: "好奇", lead: "想知道、想嘗試、想問為什麼，是學習的力量。好奇讓孩子找到自己的聲音和興趣。",
      say: "我可以問問題，並享受發現新事物。",
      causes: [["看見新事物", "不熟悉的物品或想法，會引起探索。"], ["想了解原因", "孩子自然會想知道事情怎麼發生。"], ["希望親自試試", "透過動手做，更容易建立理解。"]],
      steps: [["寫下一個問題", "畫下或說出最想知道的事情。"], ["一起找答案", "使用書籍或詢問可信任的大人。"], ["安全地試驗", "試一試，再分享你觀察到的變化。"]],
      adult: "珍惜孩子的問題；除了回答，也可以問：「你覺得會發生什麼？」", books: ["grey"]
    },
    shy: {
      emoji: "🙂", title: "害羞", lead: "在新朋友或大家面前，想先觀察、慢慢靠近，是自然的個性與感受。你可以用自己的速度加入。",
      say: "我不用立刻說很多話，可以從一小步開始。",
      causes: [["陌生的人", "需要先確認環境是否安全舒服。"], ["很多目光", "人多或需要說話時，可能感到壓力。"], ["擔心犯錯", "怕說錯或被評價，使人不敢開口。"]],
      steps: [["先用表情", "微笑、點頭或揮手也是打招呼。"], ["選一位朋友", "先和一位讓你安心的人互動。"], ["先排練", "把想說的一句話在心裡或家中練習。"]],
      adult: "不要貼標籤或逼孩子表演社交；肯定每個自願參與的小步驟。", books: ["princess"]
    },
    jealous: {
      emoji: "😒", title: "羨慕與嫉妒", lead: "看到別人擁有想要的東西、成功或得到注意時，心裡酸酸的很常見。這種感受能幫助我們理解自己的需要。",
      say: "我有羨慕的感覺。我也能看見自己的價值。",
      causes: [["比較自己", "別人的成果可能讓自己覺得不夠好。"], ["想被注意", "希望得到關愛或肯定，是自然的需要。"], ["覺得不公平", "規則或待遇不同時，容易受傷。"]],
      steps: [["承認感受", "先說：「我有點羨慕。」而不責怪自己。"], ["找到願望", "想想你真正需要的是陪伴、機會，還是鼓勵。"], ["看見自己的好", "說出今天自己努力過的一件事。"]],
      adult: "避免拿孩子比較或責備感受；幫他表達需要，也建立公平清楚的界線。", books: ["princess", "little"]
    },
    silly: {
      emoji: "🤪", title: "玩鬧與歡樂", lead: "想笑、想跳、想逗大家開心，是充滿能量的感受。也可以練習在合適的時間和地方享受它。",
      say: "我可以快樂玩耍，也能注意別人是否舒服。",
      causes: [["開心的能量", "興奮時，身體自然想活動。"], ["與朋友連結", "一起笑與遊戲能建立友誼。"], ["釋放緊張", "有時候玩笑是想讓緊繃的心放鬆。"]],
      steps: [["選對地方", "在安全而且不影響別人的地方玩。"], ["看看對方", "確認別人也在享受，而不是不舒服。"], ["練習切換", "需要安靜時，深呼吸並讓身體慢下來。"]],
      adult: "享受孩子的幽默，同時清楚說明何時可以玩、何時需要安靜與尊重。", books: ["little"]
    },
    anger: {
      emoji: "😡", title: "生氣", lead: "生氣常常是在告訴我們：有事情不公平、太難、太累，或有人受傷了。感覺可以被接納，行動仍需要安全。",
      say: "我很生氣，但我可以選擇不傷害自己或別人。",
      causes: [["需求沒有被看見", "疲倦、餓了或感覺沒有人聽，可能讓怒氣很快升高。"], ["事情不公平", "被排擠或規則不一致，會讓心裡冒火。"], ["挫折累積", "一次又一次卡住，生氣可能保護背後的難過。"]],
      steps: [["離開一下", "先到安全地方，讓身體慢下來。"], ["用力但安全", "推牆、握枕頭或伸展，釋放力量。"], ["用句子表達", "說：「我生氣，因為......我需要......」"]],
      adult: "先保護安全，再與孩子共同調節。平靜後才能討論修復與下一次的選擇。", books: ["storm", "feelings"]
    },
    sadness: {
      emoji: "😢", title: "傷心", lead: "失去、想念、被拒絕或事情不如願時，流淚和安靜都很自然。傷心需要時間，也需要溫柔的陪伴。",
      say: "我可以難過，也可以請一個人陪著我。",
      causes: [["失去或告別", "離開重要的人或事物，會讓心感到空空的。"], ["被忽略或拒絕", "感到不被接納時，悲傷可能湧上來。"], ["希望落空", "重要願望沒有實現，也會讓人想哭。"]],
      steps: [["允許眼淚", "哭泣或安靜坐著，都可以是照顧自己的方式。"], ["分享故事", "跟可信任的人說說發生了什麼。"], ["做一件溫柔小事", "抱抱枕頭、畫畫，或在需要時尋求幫助。"]],
      adult: "陪伴比急著讓孩子開心更重要；若悲傷長期影響睡眠、飲食或安全，應尋求專業支持。", books: ["destiny", "little"]
    },
    calm: {
      emoji: "🌿", title: "平靜", lead: "平靜不是永遠沒有大情緒，而是我們感覺安全，能呼吸、思考，也能準備照顧自己和別人。",
      say: "我正在感受平靜，也能記住幫助我平靜的方法。",
      causes: [["安全的空間", "熟悉且被支持的環境能讓身體放鬆。"], ["得到理解", "被聽見後，大情緒會慢慢降低。"], ["調節練習", "呼吸、移動或創作，會幫助重新找回穩定。"]],
      steps: [["注意身體", "看看平靜時肩膀、呼吸和心跳是什麼感覺。"], ["建立工具盒", "記錄最有效的三個平靜方法。"], ["分享平靜", "用溫柔的語氣或小行動把安心帶給別人。"]],
      adult: "在平靜時練習工具，比在情緒最強烈時第一次使用更容易成功。", books: ["storm", "feelings"]
    },
    hopeful: { emoji:"???", title:"??", lead:"???????????????????????????????????????????????????", say:"????????????????????", causes:[["??????","????????????????????"],["??????","??????????????????"],["??????","????????????????????"]], steps:[["??????","????????????????"],["????","??????????????????????"],["?????","???????????????????????"]], adult:"????????????????????????????????????????????", books:["destiny","little"] }
  };

  function escapeText(text) {
    return text.replace(/[&<>"]/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char];
    });
  }

  function renderCards(items) {
    return items.map(function (item) {
      return '<article class="insight-card"><h3>' + escapeText(item[0]) + '</h3><p>' +
        escapeText(item[1]) + '</p></article>';
    }).join("");
  }

  function renderBooks(keys) {
    return keys.map(function (key) {
      var book = books[key];
      return '<article class="resource-card"><img src="' + book.image + '" alt="' +
        escapeText(book.title) + '封面"><h3>' + escapeText(book.title) + '</h3><p>' +
        escapeText(book.text) + '</p><a class="read-button" target="_blank" rel="noopener" href="' +
        book.url + '">閱讀繪本</a></article>';
    }).join("");
  }

  var app = document.getElementById("feelingApp");
  if (!app) return;
  var feeling = feelings[app.dataset.feeling];
  if (!feeling) return;

  document.title = feeling.title + " - Healthy Little Minds";
  app.innerHTML =
    '<a class="breadcrumb" href="more-feelings.html">&larr; 查看更多情緒</a>' +
    '<section class="feeling-hero"><div><span class="feeling-emoji">' + feeling.emoji + '</span>' +
    '<p class="kicker">理解我的感受</p><h1>' + escapeText(feeling.title) + '</h1>' +
    '<p class="feeling-lead">' + escapeText(feeling.lead) + '</p></div>' +
    '<aside class="hero-prompt"><h2>試著這樣說</h2><p>「' + escapeText(feeling.say) + '」</p></aside></section>' +
    '<section class="guide-section"><h2>這種感受可能在什麼時候出現？</h2><div class="card-grid">' +
    renderCards(feeling.causes) + '</div></section>' +
    '<div class="two-column"><section class="panel"><h2>現在可以試試看</h2><ol class="steps">' +
    feeling.steps.map(function (step) { return '<li><strong>' + escapeText(step[0]) + '</strong><br>' + escapeText(step[1]) + '</li>'; }).join("") +
    '</ol></section><aside class="support-card"><h2>給家長與老師</h2><p>' +
    escapeText(feeling.adult) + '</p></aside></div>' +
    '<section class="resource-panel"><h2>適合一起閱讀的繪本</h2><div class="resource-grid">' +
    renderBooks(feeling.books) + '</div></section>' +
    '<nav class="tw-resource-actions" aria-label="相關頁面"><a href="home.html#feelings">首頁情緒區</a><a href="interactive-tools.html">情緒工具</a><a href="parents.html">家長專區</a></nav>';
})();

(function loadLanguagePicker() {
  var script = document.createElement("script");
  script.src = "../shared-language-switcher.js?v=1";
  script.defer = true;
  document.body.appendChild(script);
})();
