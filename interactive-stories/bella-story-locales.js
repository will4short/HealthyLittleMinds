window.bellaStoryLocales = {
  ja: {
    ui: {
      siteTitle: "Healthy Little Minds",
      storyName: "Bella の選択ストーリー",
      navLabel: "物語ナビゲーション",
      home: "ホーム",
      tools: "ツール",
      parentTips: "保護者ヒント",
      storyPath: "物語の道",
      progressLabel: "物語の進み具合",
      endingTitle: "Bella が持ち帰るカード",
      endCards: [
        ["息をする", "選ぶ前に、体へ「安全だよ」と知らせます。"],
        ["名前をつける", "気持ちは言葉になると、少し見えやすくなります。"],
        ["一歩を選ぶ", "大きな勇気は、小さな一歩から始まります。"]
      ],
      activitiesLabel: "物語のアクティビティ",
      feelingTitle: "気持ち探偵",
      feelingPrompt: "今の Bella は、どんな気持ちだと思う？",
      feelingGroupLabel: "Bella の気持ちを選ぶ",
      feelings: [
        { key: "Worried", label: "心配" },
        { key: "Brave", label: "勇気" },
        { key: "Unsure", label: "迷い" },
        { key: "Proud", label: "誇らしい" },
        { key: "Overwhelmed", label: "いっぱいいっぱい" },
        { key: "Supported", label: "支えられている" }
      ],
      breathTitle: "Bella の呼吸ライト",
      breathPrompt: "ライトをゆっくりタップして、吸って、少し止めて、吐いてみよう。",
      breathLabels: ["吸う", "少し止める", "吐く"],
      journalTitle: "小さなふり返り",
      journalPrompt: "今の Bella に、どんな言葉をかけたい？",
      journalPlaceholder: "Bella、あなたは...",
      restart: "物語をもう一度",
      fallbackFeeling: "それも Bella の気持ちの一部かもしれません。",
      feelingResponses: {
        Worried: "そうですね。Bella には安心できる言葉、小さな一歩、呼吸の時間が必要かもしれません。",
        Brave: "その通り。勇気は強そうに見えなくてもいい。ふるえながら進むこともあります。",
        Unsure: "合っています。Bella は、休むことで戻れるのか、それとも動けなくなるのかを考えています。",
        Proud: "そうです。誇らしさは静かで温かいこともあります。",
        Overwhelmed: "やさしい見方です。まず安心して、それから考えることが大切です。",
        Supported: "その通り。支えがあると、勇気の一歩はひとりぼっちではなくなります。"
      }
    },
    scenes: {
      "scene_1_bella_story.html": {
        title: "Bella と小さな勇気の声",
        kicker: "シーン1 · 教室の外",
        alt: "ノートを抱えて、緊張した様子で教室の外に立つ Bella。",
        lede: "Bella は教室のドアのそばで、ノートを胸にぎゅっと抱えています。中からは椅子の音や友だちの声が聞こえ、勇気の声はとても小さく感じます。",
        lines: [
          "Rivera 先生は、今週学んだことを一人ずつ発表しようと言いました。Bella にはいい考えがあります。枕に向かって三回も練習しました。",
          "でも今、心臓はトントン速くなり、手のひらはじっとりしています。もし忘れたら？ もし笑われたら？ と心配が雲のように広がります。",
          "そのとき Bella は小さなことに気づきます。足はまだここにある。息もまだここにある。勇気は、とても小さく始めてもいいのかもしれません。"
        ],
        prompt: "Bella はまず何をしてみる？",
        feeling: "Bella の体は「これは大切なことだよ」と知らせています。緊張は止まれの合図ではなく、気づきの合図にもなります。",
        choices: [
          { href: "scene2-standup.html", title: "ゆっくり息をして教室に入る", note: "Bella は、小さくてふるえる勇気でも本物だと知ります。" },
          { href: "scene2-hide.html", title: "廊下で少し静かな時間をとる", note: "Bella は場所を空けます。でも心配は大きくなるかもしれません。" },
          { href: "scene2-pretend.html", title: "何でもないふりをする", note: "Bella は気持ちを隠します。でもその気持ちにはまだケアが必要です。" }
        ]
      },
      "scene2-standup.html": {
        title: "前へ歩く時間",
        kicker: "シーン2 · 勇気を選ぶ",
        lede: "Bella は教室に入ります。ひざはふらふらしますが、その一歩一歩が「気持ちがあっても動ける」ことを教えてくれます。",
        lines: [
          "みんなの視線が Bella に向きます。目をそらしそうになったとき、Rivera 先生のやさしい目を見つけました。",
          "最初の一文は小さな声でした。二文目は少し強くなりました。三文目になると、自分の考えがちゃんと場所を持ち始めます。",
          "友だちがうなずき、別の子がほほえみました。Bella の小さな勇気の声は、まだ大きくないけれど目を覚ましました。"
        ],
        prompt: "Bella が続けると、何が起きる？",
        feeling: "勇気は、ドキドキする心と、はっきりした選択が同時にあることもあります。",
        choices: [
          { href: "scene_3_proud.html", title: "最後まで話して、誇らしい気持ちになる", note: "Bella は、やってみること自体に意味があると知ります。" },
          { href: "scene3-runout.html", title: "また不安になって走り出す", note: "気持ちが大きくなりすぎて、Bella には支えが必要です。" },
          { href: "scene3-joke.html", title: "緊張を隠すために冗談を言う", note: "笑いは一瞬助けになります。でも Bella は本当は分かってほしいのです。" }
        ]
      },
      "scene2-hide.html": {
        title: "廊下のかくれ場所",
        kicker: "シーン2 · 少し離れる",
        lede: "Bella はコートかけの下に座り、ひざを抱えます。廊下は静かですが、心配は一緒についてきました。",
        lines: [
          "教室の中からやさしい拍手が聞こえます。誰かがもう発表しました。ドアがさっきより大きく見えます。",
          "Bella は胸に手をあてます。心臓はまだ速いけれど、静けさのおかげでその声を聞くことができます。",
          "私は休みたいから隠れているの？ それとも、できないと思っているから？ と Bella は考えます。"
        ],
        prompt: "Bella はこの静かな時間をどう使う？",
        feeling: "少し休むことは助けになります。でもずっと隠れていると、次の一歩がもっと大きく見えることがあります。",
        choices: [
          { href: "scene3-missed.html", title: "待ちすぎて順番を逃す", note: "Bella は、避けることで残念な気持ちが生まれることを学びます。" },
          { href: "scene4-share.html", title: "Rivera 先生に助けを求める", note: "Bella は信頼できる大人に気持ちを入れてもらいます。" },
          { href: "scene2-standup.html", title: "もう一度、教室に入ってみる", note: "Bella は休む時間を、勇気へ戻る橋にします。" }
        ]
      },
      "scene2-pretend.html": {
        title: "きつく感じる笑顔",
        kicker: "シーン2 · ふりをする",
        lede: "Bella は明るく笑って「大丈夫」と言います。言葉はきれいに聞こえるけれど、心の中は折りたたまれたままです。",
        lines: [
          "笑うべきところで笑い、見られるとうなずきます。ノートは机の下に隠しました。",
          "ふりをすることは少しの間うまくいきます。誰も質問しません。でも Bella はお腹が重くなるのを感じます。",
          "入れてもらえない気持ちは、もっと大きくノックすることがあります。"
        ],
        prompt: "次に Bella はどうする？",
        feeling: "作った笑顔は盾になることがあります。でも Bella は、その盾の後ろでも大切にされていいのです。",
        choices: [
          { href: "scene3-bottled.html", title: "心配をびんに閉じこめる", note: "気持ちは中でぎゅうぎゅうになります。" },
          { href: "scene4-share.html", title: "先生に本当のことを話す", note: "Bella は支えの中で正直になる練習をします。" },
          { href: "scene3-joke.html", title: "気持ちを冗談に変える", note: "ユーモアは助けになりますが、必要なことを隠すこともあります。" }
        ]
      },
      "scene_3_proud.html": {
        title: "やってみた後の光",
        kicker: "シーン3 · 勇気ある終わり",
        lede: "Bella は最後の文までたどり着きます。一つの言葉で声がふるえましたが、止まりませんでした。終わると、教室が少し温かく感じます。",
        lines: [
          "Rivera 先生が「すてきな考えを聞かせてくれてありがとう」と言います。Bella は靴を見ながら笑いました。",
          "誇らしさは花火ではありません。胸の中に小さな金色の光がともるような感じです。",
          "Bella は、勇気は完璧に話すことではなく、本当の声に順番をあげることだと気づきます。"
        ],
        prompt: "この勇気の気持ちは、どこへ向かう？",
        feeling: "誇らしさは脳に「また難しいことをできる」と覚えさせてくれます。",
        choices: [
          { href: "scene_5_calm.html", title: "落ち着いて軽い気持ちで出る", note: "Bella は大きな瞬間の後、体を落ち着かせます。" },
          { href: "scene_6_reflection.html", title: "何が助けになったか振り返る", note: "Bella は今日のことを次の力に変えます。" },
          { href: "scene6-end.html", title: "物語を終える", note: "小さな勇気の声をお祝いします。" }
        ]
      }
    }
  },
  ko: {
    ui: {
      siteTitle: "Healthy Little Minds",
      storyName: "벨라의 선택 이야기",
      navLabel: "이야기 탐색",
      home: "홈",
      tools: "도구",
      parentTips: "부모 팁",
      storyPath: "이야기 길",
      progressLabel: "이야기 진행",
      endingTitle: "벨라가 기억할 카드",
      endCards: [["숨쉬기", "선택하기 전에 몸에 안전하다는 신호를 줍니다."], ["이름 붙이기", "감정은 말로 표현될 때 더 또렷해집니다."], ["한 걸음 선택하기", "큰 용기는 작은 행동 하나에서 시작됩니다."]],
      activitiesLabel: "이야기 활동",
      feelingTitle: "감정 탐정",
      feelingPrompt: "지금 벨라는 어떤 기분일까요?",
      feelingGroupLabel: "벨라의 감정 선택",
      feelings: [{ key: "Worried", label: "걱정" }, { key: "Brave", label: "용기" }, { key: "Unsure", label: "망설임" }, { key: "Proud", label: "뿌듯함" }, { key: "Overwhelmed", label: "벅참" }, { key: "Supported", label: "지지받음" }],
      breathTitle: "벨라의 숨빛",
      breathPrompt: "불빛을 천천히 눌러 보세요. 들이마시고, 잠시 머물고, 내쉬어요.",
      breathLabels: ["들이마시기", "잠시 머물기", "내쉬기"],
      journalTitle: "작은 돌아보기",
      journalPrompt: "지금 벨라에게 뭐라고 말해 주고 싶나요?",
      journalPlaceholder: "벨라야, 너는...",
      restart: "이야기 다시 시작",
      fallbackFeeling: "그것도 벨라 마음의 한 부분일 수 있어요.",
      feelingResponses: {
        Worried: "맞아요. 벨라에게는 안심시키는 말, 더 작은 첫걸음, 숨 쉴 시간이 필요할 수 있어요.",
        Brave: "그래요. 용기는 늘 강해 보이지 않아도 됩니다. 떨리면서도 움직일 수 있어요.",
        Unsure: "맞아요. 벨라는 잠깐 쉬는 것이 돌아가는 데 도움이 될지 생각하고 있어요.",
        Proud: "맞아요. 뿌듯함은 조용하고 따뜻할 수 있어요.",
        Overwhelmed: "다정한 해석이에요. 먼저 안전함을 느끼고, 그다음 해결을 생각하면 좋아요.",
        Supported: "맞아요. 지지가 있으면 용기의 한 걸음이 덜 외로워져요."
      }
    },
    scenes: {}
  },
  "zh-cn": {
    ui: {
      siteTitle: "Healthy Little Minds",
      storyName: "Bella 的选择故事",
      navLabel: "故事导航",
      home: "首页",
      tools: "工具",
      parentTips: "家长提示",
      storyPath: "故事路线",
      progressLabel: "故事进度",
      endingTitle: "Bella 的带走卡片",
      endCards: [["呼吸", "在选择前，先给身体一个安全信号。"], ["说出名字", "当情绪有了词语，就更容易被看见。"], ["选择一步", "大的勇气，常常从一个小动作开始。"]],
      activitiesLabel: "故事活动",
      feelingTitle: "情绪小侦探",
      feelingPrompt: "你觉得现在 Bella 正在感受什么？",
      feelingGroupLabel: "选择 Bella 的情绪",
      feelings: [{ key: "Worried", label: "担心" }, { key: "Brave", label: "勇敢" }, { key: "Unsure", label: "犹豫" }, { key: "Proud", label: "自豪" }, { key: "Overwhelmed", label: "太满了" }, { key: "Supported", label: "被支持" }],
      breathTitle: "Bella 的呼吸灯",
      breathPrompt: "慢慢点亮灯：吸气，轻轻停一下，再呼气。",
      breathLabels: ["吸气", "轻轻停一下", "呼气"],
      journalTitle: "小小反思",
      journalPrompt: "你现在想对 Bella 说什么？",
      journalPlaceholder: "Bella，你可以...",
      restart: "重新开始故事",
      fallbackFeeling: "这也可能是 Bella 感受的一部分。",
      feelingResponses: {
        Worried: "是的。Bella 可能需要安心的话、更小的第一步，还有呼吸的时间。",
        Brave: "没错。勇敢不一定看起来很强大，有时是发抖但仍然往前走。",
        Unsure: "很贴切。Bella 正在想，暂停会帮助她回来，还是让她更卡住。",
        Proud: "是的。自豪可以安静又温暖。",
        Overwhelmed: "这是很温柔的理解。Bella 需要先感到安全，再解决问题。",
        Supported: "没错。有支持时，勇敢的一步就不会那么孤单。"
      }
    },
    scenes: {}
  },
  "zh-tw": {
    ui: {
      siteTitle: "Healthy Little Minds",
      storyName: "Bella 的選擇故事",
      navLabel: "故事導覽",
      home: "首頁",
      tools: "工具",
      parentTips: "家長提示",
      storyPath: "故事路線",
      progressLabel: "故事進度",
      endingTitle: "Bella 的帶走卡片",
      endCards: [["呼吸", "在選擇前，先給身體一個安全訊號。"], ["說出名字", "當情緒有了詞語，就更容易被看見。"], ["選擇一步", "大的勇氣，常常從一個小動作開始。"]],
      activitiesLabel: "故事活動",
      feelingTitle: "情緒小偵探",
      feelingPrompt: "你覺得現在 Bella 正在感受什麼？",
      feelingGroupLabel: "選擇 Bella 的情緒",
      feelings: [{ key: "Worried", label: "擔心" }, { key: "Brave", label: "勇敢" }, { key: "Unsure", label: "猶豫" }, { key: "Proud", label: "自豪" }, { key: "Overwhelmed", label: "太滿了" }, { key: "Supported", label: "被支持" }],
      breathTitle: "Bella 的呼吸燈",
      breathPrompt: "慢慢點亮燈：吸氣，輕輕停一下，再呼氣。",
      breathLabels: ["吸氣", "輕輕停一下", "呼氣"],
      journalTitle: "小小反思",
      journalPrompt: "你現在想對 Bella 說什麼？",
      journalPlaceholder: "Bella，你可以...",
      restart: "重新開始故事",
      fallbackFeeling: "這也可能是 Bella 感受的一部分。",
      feelingResponses: {
        Worried: "是的。Bella 可能需要安心的話、更小的第一步，還有呼吸的時間。",
        Brave: "沒錯。勇敢不一定看起來很強大，有時是發抖但仍然往前走。",
        Unsure: "很貼切。Bella 正在想，暫停會幫助她回來，還是讓她更卡住。",
        Proud: "是的。自豪可以安靜又溫暖。",
        Overwhelmed: "這是很溫柔的理解。Bella 需要先感到安全，再解決問題。",
        Supported: "沒錯。有支持時，勇敢的一步就不會那麼孤單。"
      }
    },
    scenes: {}
  }
};

(function copyLocalizedScenes() {
  const jaScenes = window.bellaStoryLocales.ja.scenes;
  const ko = window.bellaStoryLocales.ko.scenes;
  const cn = window.bellaStoryLocales["zh-cn"].scenes;
  const tw = window.bellaStoryLocales["zh-tw"].scenes;

  const conciseScenes = {
    ko: {
      "scene_1_bella_story.html": ["벨라와 작은 용기의 목소리", "1장 · 교실 밖", "벨라는 발표 노트를 꼭 안고 교실 문 옆에 서 있어요.", ["리베라 선생님은 이번 주에 배운 것을 나누자고 했어요. 벨라는 좋은 생각이 있지만 심장이 빠르게 뛰어요.", "손바닥은 축축하고 머릿속에는 걱정 구름이 생겨요. 잊어버리면 어떡하지? 모두가 웃으면 어떡하지?", "벨라는 작은 사실을 알아차려요. 발은 아직 여기 있고, 숨도 여기 있어요. 용기는 아주 작게 시작해도 돼요."], "벨라는 먼저 무엇을 해 볼까요?", "벨라의 몸은 '이건 나에게 중요해'라고 말하고 있어요.", [["scene2-standup.html", "천천히 숨 쉬고 교실로 들어가기", "작고 떨리는 용기도 진짜 용기예요."], ["scene2-hide.html", "복도에서 잠깐 조용히 있기", "공간은 생기지만 걱정이 더 커질 수도 있어요."], ["scene2-pretend.html", "아무렇지 않은 척하기", "감정을 숨기지만 여전히 돌봄이 필요해요."]]],
      "scene2-standup.html": ["앞으로 걸어가기", "2장 · 용기를 선택하기", "벨라는 교실로 들어가요. 무릎은 떨리지만 한 걸음씩 움직여요.", ["모두가 벨라를 바라봐요. 벨라는 선생님의 다정한 눈을 찾습니다.", "첫 문장은 작게 나왔지만, 두 번째 문장은 조금 더 단단해져요.", "친구 하나가 고개를 끄덕이고 또 다른 친구가 미소 지어요. 벨라의 작은 목소리가 깨어났어요."], "계속하면 어떤 일이 일어날까요?", "용기는 뛰는 심장과 분명한 선택이 함께 있는 것일 수 있어요.", [["scene_3_proud.html", "끝까지 말하고 뿌듯해지기", "시도했다는 것이 중요해요."], ["scene3-runout.html", "너무 긴장해서 뛰쳐나가기", "감정이 너무 커져서 도움이 필요해요."], ["scene3-joke.html", "농담으로 긴장을 숨기기", "웃음은 잠깐 돕지만 진짜 마음은 아직 있어요."]]],
      "scene2-hide.html": ["복도의 숨는 자리", "2장 · 잠깐 떨어져 있기", "벨라는 옷걸이 아래에 앉아 무릎을 안아요. 복도는 조용하지만 걱정도 함께 따라왔어요.", ["교실 안에서 박수 소리가 들려요. 다른 친구가 이미 발표했어요.", "벨라는 가슴에 손을 얹고 빠른 심장을 느껴요. 조용함은 마음의 소리를 듣게 해 줍니다.", "나는 잠깐 쉬는 걸까, 아니면 못 한다고 믿어서 숨는 걸까? 벨라는 생각해요."], "벨라는 이 조용한 시간을 어떻게 쓸까요?", "잠깐 멈춤은 도움이 될 수 있어요. 하지만 너무 오래 숨으면 다음 걸음이 더 커 보일 수 있어요.", [["scene3-missed.html", "너무 오래 기다려 차례를 놓치기", "피하는 것이 아쉬움을 만들 수 있어요."], ["scene4-share.html", "리베라 선생님께 도움 요청하기", "믿을 수 있는 어른에게 감정을 나눠요."], ["scene2-standup.html", "다시 교실로 들어가 보기", "멈춤을 용기로 돌아가는 다리로 써요."]]],
      "scene2-pretend.html": ["너무 꽉 맞는 미소", "2장 · 괜찮은 척하기", "벨라는 밝게 웃으며 '괜찮아요'라고 말해요. 말은 깔끔하지만 마음은 접힌 채로 있어요.", ["웃어야 할 때 웃고, 누가 보면 고개를 끄덕여요.", "괜찮은 척은 잠깐 통하지만, 벨라는 배가 무거워지는 걸 느껴요.", "들어오지 못한 감정은 더 크게 두드릴 때가 있어요."], "이제 벨라는 무엇을 할까요?", "만든 미소는 방패가 될 수 있어요. 하지만 방패 뒤의 벨라도 돌봄을 받아야 해요.", [["scene3-bottled.html", "걱정을 병 안에 넣어 두기", "감정이 안에서 복잡해져요."], ["scene4-share.html", "선생님께 사실대로 말하기", "도움 속에서 솔직해지는 연습이에요."], ["scene3-joke.html", "감정을 농담으로 바꾸기", "유머는 돕지만 필요한 것을 숨길 수도 있어요."]]],
      "scene_3_proud.html": ["시도한 뒤의 빛", "3장 · 용감한 마무리", "벨라는 마지막 문장까지 말해요. 한 단어에서 목소리가 떨렸지만 멈추지 않았어요.", ["리베라 선생님은 좋은 생각을 들려줘서 고맙다고 말해요.", "뿌듯함은 불꽃놀이가 아니라 가슴속 작은 금빛 같아요.", "벨라는 용기가 완벽하게 말하는 것이 아니라, 진짜 목소리에게 차례를 주는 것임을 알게 돼요."], "이 용기의 느낌은 어디로 갈까요?", "뿌듯함은 뇌가 '나는 어려운 일도 다시 할 수 있어'라고 기억하게 해요.", [["scene_5_calm.html", "차분하고 가벼운 마음으로 나가기", "큰 순간 뒤에 몸을 진정시켜요."], ["scene_6_reflection.html", "무엇이 도움이 됐는지 돌아보기", "오늘의 일을 다음 도구로 바꿔요."], ["scene6-end.html", "이야기 마치기", "작은 용기의 목소리를 축하해요."]]]
    },
    cn: {
      "scene_1_bella_story.html": ["Bella 和小小勇气的声音", "第1幕 · 教室外", "Bella 把笔记抱在胸前，站在教室门边。", ["老师请大家分享本周学到的一件事。Bella 有一个好想法，也已经练习了三次。", "可是她的心跳很快，手心也湿湿的。她开始担心：如果我忘了呢？如果大家笑我呢？", "Bella 注意到一件小事：脚还在这里，呼吸也还在这里。也许勇气可以从很小很小开始。"], "Bella 先试试什么？", "Bella 的身体在说：这件事对我很重要。紧张不一定是停止信号，也可以是提醒。", [["scene2-standup.html", "慢慢呼吸，然后走进教室", "Bella 让勇气小小的、发抖的，也是真的。"], ["scene2-hide.html", "在走廊安静一会儿", "Bella 给自己一点空间，但担心也可能变大。"], ["scene2-pretend.html", "假装没事", "Bella 把感受藏起来，可它仍然需要被照顾。"]]],
      "scene2-standup.html": ["走到前面", "第2幕 · 选择勇气", "Bella 走进教室。膝盖有点软，但每一步都说明：带着感受也能行动。", ["大家都看向她。Bella 差点低头，但她看见老师温柔的眼神。", "第一句话很小声，第二句话稳了一点，第三句话让她的想法有了位置。", "有同学点头，也有人微笑。Bella 小小的勇气声音醒来了。"], "Bella 继续下去，会发生什么？", "勇气可以是心跳很快，同时也做出清楚的选择。", [["scene_3_proud.html", "完成分享，感到自豪", "Bella 发现愿意尝试就很重要。"], ["scene3-runout.html", "太紧张，跑出教室", "感受太大了，Bella 需要支持。"], ["scene3-joke.html", "用玩笑藏住紧张", "笑声帮了一下，但 Bella 仍想被理解。"]]],
      "scene2-hide.html": ["走廊里的躲藏角落", "第2幕 · 给自己一点空间", "Bella 坐在挂衣钩下面，抱住膝盖。走廊安静了，可担心也跟来了。", ["教室里传来轻轻的掌声，别人已经分享完了。", "Bella 把手放在胸口，听见心跳还很快。安静让她有机会听见自己。", "她想：我是因为需要一分钟，还是因为觉得自己做不到？"], "Bella 怎样使用这段安静时间？", "暂停可以帮忙。但一直躲着，会让下一步看起来更大。", [["scene3-missed.html", "等太久，错过机会", "Bella 学到逃避可能带来失望。"], ["scene4-share.html", "向老师求助", "Bella 让可信任的大人进入这个感受。"], ["scene2-standup.html", "再试一次，走进教室", "Bella 把暂停变成通往勇气的桥。"]]],
      "scene2-pretend.html": ["太紧的微笑", "第2幕 · 假装没事", "Bella 露出明亮的笑，说：我没事。话听起来整齐，可心里却折了起来。", ["她在该笑的时候笑，别人看过来时点点头。", "假装有一会儿很有效。没人问她问题。但 Bella 感到肚子越来越重。", "不被允许进来的情绪，有时会敲得更大声。"], "Bella 接下来做什么？", "假装的笑可以像盾牌，但盾牌后面的 Bella 也值得被照顾。", [["scene3-bottled.html", "继续把担心装起来", "感受在里面越来越挤。"], ["scene4-share.html", "告诉老师真实情况", "Bella 在支持中练习诚实。"], ["scene3-joke.html", "把感受变成玩笑", "幽默能帮忙，但也可能藏住需要。"]]],
      "scene_3_proud.html": ["尝试之后的光", "第3幕 · 勇敢地完成", "Bella 说到了最后一句。一个词有点发抖，但她没有停。", ["老师感谢她分享了认真想过的想法。", "自豪不是烟花，而像胸口一小团金色的光。", "Bella 明白，勇敢不是说得完美，而是让真实的声音有一次机会。"], "这个勇敢的感觉要去哪里？", "自豪会帮助大脑记住：我还能再做困难的事。", [["scene_5_calm.html", "平静、轻一点地离开", "Bella 让身体在大时刻后慢慢安定。"], ["scene_6_reflection.html", "反思什么帮到了她", "Bella 把这一刻变成下次的工具。"], ["scene6-end.html", "结束故事", "庆祝这个小小的勇气声音。"]]]
    },
    tw: {
      "scene_1_bella_story.html": ["Bella 和小小勇氣的聲音", "第1幕 · 教室外", "Bella 把筆記抱在胸前，站在教室門邊。", ["老師請大家分享本週學到的一件事。Bella 有一個好想法，也已經練習了三次。", "可是她的心跳很快，手心也濕濕的。她開始擔心：如果我忘了呢？如果大家笑我呢？", "Bella 注意到一件小事：腳還在這裡，呼吸也還在這裡。也許勇氣可以從很小很小開始。"], "Bella 先試試什麼？", "Bella 的身體在說：這件事對我很重要。緊張不一定是停止訊號，也可以是提醒。", [["scene2-standup.html", "慢慢呼吸，然後走進教室", "Bella 讓勇氣小小的、發抖的，也是真的。"], ["scene2-hide.html", "在走廊安靜一會兒", "Bella 給自己一點空間，但擔心也可能變大。"], ["scene2-pretend.html", "假裝沒事", "Bella 把感受藏起來，可它仍然需要被照顧。"]]],
      "scene2-standup.html": ["走到前面", "第2幕 · 選擇勇氣", "Bella 走進教室。膝蓋有點軟，但每一步都說明：帶著感受也能行動。", ["大家都看向她。Bella 差點低頭，但她看見老師溫柔的眼神。", "第一句話很小聲，第二句話穩了一點，第三句話讓她的想法有了位置。", "有同學點頭，也有人微笑。Bella 小小的勇氣聲音醒來了。"], "Bella 繼續下去，會發生什麼？", "勇氣可以是心跳很快，同時也做出清楚的選擇。", [["scene_3_proud.html", "完成分享，感到自豪", "Bella 發現願意嘗試就很重要。"], ["scene3-runout.html", "太緊張，跑出教室", "感受太大了，Bella 需要支持。"], ["scene3-joke.html", "用玩笑藏住緊張", "笑聲幫了一下，但 Bella 仍想被理解。"]]],
      "scene2-hide.html": ["走廊裡的躲藏角落", "第2幕 · 給自己一點空間", "Bella 坐在掛衣鉤下面，抱住膝蓋。走廊安靜了，可擔心也跟來了。", ["教室裡傳來輕輕的掌聲，別人已經分享完了。", "Bella 把手放在胸口，聽見心跳還很快。安靜讓她有機會聽見自己。", "她想：我是因為需要一分鐘，還是因為覺得自己做不到？"], "Bella 怎樣使用這段安靜時間？", "暫停可以幫忙。但一直躲著，會讓下一步看起來更大。", [["scene3-missed.html", "等太久，錯過機會", "Bella 學到逃避可能帶來失望。"], ["scene4-share.html", "向老師求助", "Bella 讓可信任的大人進入這個感受。"], ["scene2-standup.html", "再試一次，走進教室", "Bella 把暫停變成通往勇氣的橋。"]]],
      "scene2-pretend.html": ["太緊的微笑", "第2幕 · 假裝沒事", "Bella 露出明亮的笑，說：我沒事。話聽起來整齊，可心裡卻摺了起來。", ["她在該笑的時候笑，別人看過來時點點頭。", "假裝有一會兒很有效。沒人問她問題。但 Bella 感到肚子越來越重。", "不被允許進來的情緒，有時會敲得更大聲。"], "Bella 接下來做什麼？", "假裝的笑可以像盾牌，但盾牌後面的 Bella 也值得被照顧。", [["scene3-bottled.html", "繼續把擔心裝起來", "感受在裡面越來越擠。"], ["scene4-share.html", "告訴老師真實情況", "Bella 在支持中練習誠實。"], ["scene3-joke.html", "把感受變成玩笑", "幽默能幫忙，但也可能藏住需要。"]]],
      "scene_3_proud.html": ["嘗試之後的光", "第3幕 · 勇敢地完成", "Bella 說到了最後一句。一個詞有點發抖，但她沒有停。", ["老師感謝她分享了認真想過的想法。", "自豪不是煙火，而像胸口一小團金色的光。", "Bella 明白，勇敢不是說得完美，而是讓真實的聲音有一次機會。"], "這個勇敢的感覺要去哪裡？", "自豪會幫助大腦記住：我還能再做困難的事。", [["scene_5_calm.html", "平靜、輕一點地離開", "Bella 讓身體在大時刻後慢慢安定。"], ["scene_6_reflection.html", "反思什麼幫到了她", "Bella 把這一刻變成下次的工具。"], ["scene6-end.html", "結束故事", "慶祝這個小小的勇氣聲音。"]]]
    }
  };

  function sceneFromCompact(item, baseKey) {
    return {
      title: item[0],
      kicker: item[1],
      lede: item[2],
      lines: item[3],
      prompt: item[4],
      feeling: item[5],
      choices: item[6].map((choice) => ({ href: choice[0], title: choice[1], note: choice[2] }))
    };
  }

  Object.keys(conciseScenes.ko).forEach((key) => { ko[key] = sceneFromCompact(conciseScenes.ko[key], key); });
  Object.keys(conciseScenes.cn).forEach((key) => { cn[key] = sceneFromCompact(conciseScenes.cn[key], key); });
  Object.keys(conciseScenes.tw).forEach((key) => { tw[key] = sceneFromCompact(conciseScenes.tw[key], key); });

  const jaCommon = {
    "scene3-runout.html": ["気持ちがあふれたとき", "シーン3 · 大きすぎる気持ち", "Bella の言葉がからまり、教室がぼやけます。考える前に足が廊下へ向かいました。"],
    "scene3-joke.html": ["心配をかくした冗談", "シーン3 · 笑いに隠れる", "Bella は冗談を言います。みんなが笑い、その一瞬だけ心配は音の後ろに隠れます。"],
    "scene3-missed.html": ["過ぎてしまった順番", "シーン3 · その時を逃す", "Bella がドアを開けたころ、発表の時間は終わっていました。ノートが重く感じます。"],
    "scene3-bottled.html": ["いっぱいになったびん", "シーン3 · 中にしまう", "Bella は『大丈夫』と言い続けます。昼休みには、その気持ちが胸いっぱいに広がっていました。"],
    "scene4-share.html": ["言葉が橋になる", "シーン4 · 助けを求める", "Bella はゆっくり息をして、Rivera 先生に本当のことを話します。"],
    "scene_5_calm.html": ["落ち着くコンパス", "シーン5 · 安定を見つける", "Bella と先生は、ノートカードの裏に小さなコンパスを描きます。息をする、名前をつける、一歩を選ぶ。"],
    "scene5-regret.html": ["重たい帰り道", "シーン5 · やさしく後悔する", "Bella はゆっくり家へ歩きます。今日のことが何度も頭に浮かびますが、自分にきつくしすぎないようにします。"],
    "scene_6_reflection.html": ["Bella の静かなふり返り", "シーン6 · 意味を見つける", "あとで Bella は木の下に座り、一日のできごとを分かる物語にしていきます。"],
    "scene6-end.html": ["あなたが選ぶ物語", "最後のシーン · Bella の勇気の本棚", "Bella は、全部が簡単だったから勇敢になったのではありません。気持ちを聞き、ていねいに選ぶことを学んだからです。"]
  };

  Object.keys(jaCommon).forEach((key) => {
    if (!jaScenes[key]) {
      jaScenes[key] = {
        title: jaCommon[key][0],
        kicker: jaCommon[key][1],
        lede: jaCommon[key][2],
        lines: [
          "Bella は自分の体の声に気づきます。心配、迷い、勇気は同時にあることもあります。",
          "信頼できる人に話したり、息を整えたり、小さな一歩を選んだりすることで、気持ちは少し扱いやすくなります。",
          "完璧でなくても大丈夫。Bella は、やり直すことも成長の一部だと学びます。"
        ],
        prompt: "Bella は次に何を選ぶ？",
        feeling: "気持ちは敵ではありません。安全に聞いてあげると、次の一歩を教えてくれます。",
        choices: [
          { href: "scene4-share.html", title: "助けを求める", note: "Bella はひとりで抱えこまない練習をします。" },
          { href: "scene_6_reflection.html", title: "ふり返る", note: "今日のことを次に使える知恵にします。" },
          { href: "scene6-end.html", title: "最後の学びへ進む", note: "Bella が持ち帰る大切なことを見ます。" }
        ]
      };
    }
  });

  ["ko", "zh-cn", "zh-tw"].forEach((locale) => {
    const target = window.bellaStoryLocales[locale].scenes;
    const isKo = locale === "ko";
    const isTw = locale === "zh-tw";
    const fallback = isKo ? {
      prompt: "벨라는 다음에 무엇을 선택할까요?",
      feeling: "감정은 적이 아니에요. 안전하게 들어 주면 다음 한 걸음을 알려 줍니다.",
      choices: [["scene4-share.html", "도움 요청하기", "혼자 들고 있지 않는 연습이에요."], ["scene_6_reflection.html", "돌아보기", "오늘의 일을 다음에 쓸 지혜로 바꿔요."], ["scene6-end.html", "마지막 배움으로 가기", "벨라가 기억할 것을 확인해요."]],
      lines: ["벨라는 몸의 신호를 알아차립니다. 걱정, 망설임, 용기는 함께 있을 수 있어요.", "믿을 수 있는 사람에게 말하고, 숨을 고르고, 작은 한 걸음을 고르면 감정이 조금 다루기 쉬워져요.", "완벽하지 않아도 괜찮아요. 다시 해 보는 것도 성장의 일부예요."]
    } : {
      prompt: isTw ? "Bella 接下來選擇什麼？" : "Bella 接下来选择什么？",
      feeling: isTw ? "情緒不是敵人。安全地聽見它時，它會告訴我們下一步。" : "情绪不是敌人。安全地听见它时，它会告诉我们下一步。",
      choices: [["scene4-share.html", isTw ? "尋求幫助" : "寻求帮助", isTw ? "Bella 練習不一個人承擔。" : "Bella 练习不一个人承担。"], ["scene_6_reflection.html", isTw ? "反思" : "反思", isTw ? "把今天變成下次可用的智慧。" : "把今天变成下次可用的智慧。"], ["scene6-end.html", isTw ? "前往最後的學習" : "前往最后的学习", isTw ? "看看 Bella 帶走了什麼。" : "看看 Bella 带走了什么。"]],
      lines: isTw ? ["Bella 注意到身體的訊號。擔心、猶豫和勇氣可以同時存在。", "和信任的人說、調整呼吸、選一個小步驟，情緒就會比較容易承接。", "不完美也沒關係。重新嘗試也是成長的一部分。"] : ["Bella 注意到身体的信号。担心、犹豫和勇气可以同时存在。", "和信任的人说、调整呼吸、选一个小步骤，情绪就会比较容易承接。", "不完美也没关系。重新尝试也是成长的一部分。"]
    };
    Object.keys(jaCommon).forEach((key) => {
      if (!target[key]) {
        target[key] = {
          title: isKo ? "벨라의 다음 선택" : (isTw ? "Bella 的下一個選擇" : "Bella 的下一个选择"),
          kicker: isKo ? "다음 장" : "下一幕",
          lede: isKo ? "벨라는 큰 감정 속에서도 다음 작은 선택을 찾고 있어요." : (isTw ? "Bella 在大大的情緒裡，尋找下一個小選擇。" : "Bella 在大大的情绪里，寻找下一个小选择。"),
          lines: fallback.lines,
          prompt: fallback.prompt,
          feeling: fallback.feeling,
          choices: fallback.choices.map((choice) => ({ href: choice[0], title: choice[1], note: choice[2] }))
        };
      }
    });
  });
}());
