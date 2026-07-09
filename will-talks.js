(function () {
  "use strict";

  const root = document.getElementById("will-talks-app");
  if (!root) return;

  const lang = (document.documentElement.lang || "en").toLowerCase();
  const locale = lang.startsWith("zh-tw")
    ? "zh-tw"
    : lang.startsWith("zh-cn")
      ? "zh-cn"
      : lang.startsWith("ja")
        ? "ja"
        : lang.startsWith("ko")
          ? "ko"
          : "en";
  const prefix = locale === "en" ? "" : "../";

  const episodeLinks = {
    spotify:
      "https://open.spotify.com/episode/2SQDr6gscwAJmwD2sYtUvN?si=ZtXMCBgIQx24RHqobLxdyg",
    spotifyEmbed:
      "https://open.spotify.com/embed/episode/2SQDr6gscwAJmwD2sYtUvN?utm_source=generator&theme=0",
    youtube: "https://youtu.be/rFB3goO0-G0?si=2hBmavZqWOxogl4z",
    youtubeEmbed: "https://www.youtube-nocookie.com/embed/rFB3goO0-G0",
  };

  const archiveLinks = {
    spotify:
      "https://open.spotify.com/episode/4PNHEiwusoYZKG572kMxDa?si=c3h1-zlASP6-n1MJ5Z6Izw",
    youtube: "https://youtu.be/_5vzBYbVh3s?si=nSQ8ATWAbdMRHP5D",
  };

  const copy = {
    en: {
      home: "Home",
      back: "Back to home",
      pageLabel: "Will Talks",
      nav: ["Latest", "Episodes", "Topics", "About"],
      eyebrow: "Will Talks",
      title: "Psychology made practical for everyday life.",
      intro:
        "Reflective conversations about emotions, relationships, behaviour, learning, and the patterns that shape everyday choices.",
      primaryCta: "Listen to latest episode",
      secondaryCta: "Explore topics",
      heroNote:
        "Educational reflections for adults, educators, and curious listeners. Not a replacement for therapy, diagnosis, or medical care.",
      latestLabel: "Latest episode",
      latestTitle:
        "Gaslighting: The Most Misused Psychology Word | Psychology Misunderstood S1E1",
      latestTopic: "Psychology misunderstood",
      latestSummary:
        "The first episode of Psychology Misunderstood separates the science from the buzzword. Learn what gaslighting actually means, why it is often confused with lying or disagreement, and why accurate language matters.",
      listenSpotify: "Listen on Spotify",
      watchYoutube: "Watch on YouTube",
      episodeMeta: "Psychology Misunderstood Â· Season 1 Â· Episode 1",
      whyTitle: "Why this episode matters",
      whyText:
        "Gaslighting is now used everywhere, but loose use can make a serious psychological pattern harder to understand. This episode helps listeners separate everyday conflict from repeated manipulation of a person's sense of reality.",
      useTitle: "Use it in real life",
      useItems: [
        "Learn the difference between lying, disagreeing, forgetting, and gaslighting.",
        "Notice patterns over time instead of judging one moment in isolation.",
        "Use psychology terms carefully, especially when describing relationships.",
      ],
      episodesTitle: "Episodes and conversations",
      episodesLead:
        "Will Talks is built slowly and intentionally. Each episode should make psychology easier to understand, remember, and apply.",
      filterLabel: "Filter episodes by topic",
      allTopics: "All topics",
      topicsTitle: "Topics covered",
      topicsLead:
        "The show returns to practical themes that affect homes, classrooms, relationships, and self-understanding.",
      aboutTitle: "About Will Talks",
      aboutText:
        "Will Talks was created to make psychology and mental health ideas easier to understand without making them shallow. The goal is not to sound impressive. The goal is to help people think more clearly, respond more gently, and use psychological knowledge in ordinary life.",
      promiseTitle: "Editorial promise",
      promiseItems: [
        "Evidence-informed, not exaggerated.",
        "Reflective, not sensational.",
        "Practical, not performative.",
        "Human, warm, and honest.",
      ],
      followTitle: "Continue the conversation",
      followText:
        "Follow new episodes, practical reflections, and thoughtful conversations about everyday human behaviour.",
      comingSoon: "Channel link coming soon",
      subscribe: "Subscribe",
      emailPlaceholder: "Email address",
      searchPlaceholder: "Search episodes",
      noResults: "No episodes match that search yet.",
      openEpisode: "Open episode",
      copyLink: "Copy link",
      linkCopied: "Link copied",
      backToTop: "Back to top",
      platform: "Platform",
      language: "Language",
      imageAlt: "Will Talks podcast artwork",
      thumbnailAlt: "Episode artwork for Gaslighting: The Most Misused Psychology Word",
      topics: [
        "Cognitive distortions",
        "Psychology misunderstood",
        "Gaslighting",
        "Emotional regulation",
        "Stress and coping",
        "Relationships",
        "Self-awareness",
        "Childhood and family patterns",
        "Personal growth",
        "Learning and motivation",
      ],
      archiveTitle: "Your Brain Lies To You Sometimes",
      archiveSummary:
        "A practical conversation about cognitive distortions: why our thoughts can feel convincing, how they influence emotions, and how to pause before believing every story the mind tells.",
      archiveTopic: "Cognitive distortions",
      archiveAlt: "Episode artwork for Your Brain Lies To You Sometimes",
    },
    "zh-tw": {
      home: "é¦–é ",
      back: "è¿”å›žé¦–é ",
      pageLabel: "Will Talks",
      nav: ["æœ€æ–°", "é›†æ•¸", "ä¸»é¡Œ", "é—œæ–¼"],
      eyebrow: "Will Talks",
      title: "æŠŠå¿ƒç†å­¸è®Šæˆæ—¥å¸¸ç”Ÿæ´»ä¸­ç”¨å¾—ä¸Šçš„ç†è§£ã€‚",
      intro:
        "é—œæ–¼æƒ…ç·’ã€äººéš›é—œä¿‚ã€è¡Œç‚ºã€å­¸ç¿’ï¼Œä»¥åŠå½±éŸ¿æ—¥å¸¸é¸æ“‡çš„å¿ƒç†æ¨¡å¼çš„åæ€å°è©±ã€‚",
      primaryCta: "æ”¶è½æœ€æ–°ä¸€é›†",
      secondaryCta: "æŽ¢ç´¢ä¸»é¡Œ",
      heroNote:
        "ç‚ºæˆäººã€æ•™è‚²å·¥ä½œè€…å’Œå¥½å¥‡çš„è½çœ¾æä¾›çš„æ•™è‚²æ€§åæ€ã€‚ä¸èƒ½å–ä»£æ²»ç™‚ã€è¨ºæ–·æˆ–é†«ç™‚ç…§è­·ã€‚",
      latestLabel: "æœ€æ–°ä¸€é›†",
      latestTitle: "ç…¤æ°£ç‡ˆæ“æŽ§ï¼šæœ€å¸¸è¢«èª¤ç”¨çš„å¿ƒç†å­¸è©žèªž | Psychology Misunderstood S1E1",
      latestTopic: "è¢«èª¤è§£çš„å¿ƒç†å­¸",
      latestSummary:
        "Psychology Misunderstood ç¬¬ä¸€é›†æŠŠç§‘å­¸ç†è§£å’Œæµè¡Œç”¨èªžåˆ†é–‹ã€‚ä½ æœƒäº†è§£ç…¤æ°£ç‡ˆæ“æŽ§çœŸæ­£çš„æ„æ€ã€ç‚ºä»€éº¼å®ƒå¸¸è¢«èª¤è§£ç‚ºèªªè¬Šæˆ–æ„è¦‹ä¸åŒï¼Œä»¥åŠç‚ºä»€éº¼æº–ç¢ºä½¿ç”¨å¿ƒç†å­¸èªžè¨€å¾ˆé‡è¦ã€‚",
      listenSpotify: "åœ¨ Spotify æ”¶è½",
      watchYoutube: "åœ¨ YouTube è§€çœ‹",
      episodeMeta: "Psychology Misunderstood Â· ç¬¬ 1 å­£ Â· ç¬¬ 1 é›†",
      whyTitle: "ç‚ºä»€éº¼é€™ä¸€é›†é‡è¦",
      whyText:
        "ç…¤æ°£ç‡ˆæ“æŽ§ç¾åœ¨è¢«åˆ°è™•ä½¿ç”¨ï¼Œä½†éŽåº¦å¯¬é¬†çš„ç”¨æ³•å¯èƒ½è®“ä¸€å€‹åš´è‚…çš„å¿ƒç†æ¨¡å¼æ›´é›£è¢«ç†è§£ã€‚é€™ä¸€é›†å¹«åŠ©è½çœ¾åˆ†è¾¨æ—¥å¸¸è¡çªå’Œåè¦†æ“æŽ§ä¸€å€‹äººç¾å¯¦æ„Ÿçš„æ¨¡å¼ã€‚",
      useTitle: "åœ¨ç”Ÿæ´»ä¸­ä½¿ç”¨",
      useItems: [
        "åˆ†è¾¨èªªè¬Šã€æ„è¦‹ä¸åŒã€å¿˜è¨˜äº‹æƒ…å’Œç…¤æ°£ç‡ˆæ“æŽ§ä¹‹é–“çš„å·®åˆ¥ã€‚",
        "è§€å¯Ÿä¸€æ®µæ™‚é–“ä¸­çš„æ¨¡å¼ï¼Œè€Œä¸æ˜¯åªæ ¹æ“šå–®ä¸€æ™‚åˆ»ä¸‹åˆ¤æ–·ã€‚",
        "æè¿°é—œä¿‚æ™‚ï¼Œè¬¹æ…Žä½¿ç”¨å¿ƒç†å­¸è©žèªžã€‚",
      ],
      episodesTitle: "é›†æ•¸èˆ‡å°è©±",
      episodesLead:
        "Will Talks æœƒæ…¢æ…¢ã€æ…Žé‡åœ°å»ºç«‹ã€‚æ¯ä¸€é›†éƒ½æ‡‰è©²è®“å¿ƒç†å­¸æ›´å®¹æ˜“ç†è§£ã€è¨˜å¾—ä½ï¼Œä¹Ÿèƒ½ç”¨åœ¨ç”Ÿæ´»è£¡ã€‚",
      filterLabel: "ä¾ä¸»é¡Œç¯©é¸é›†æ•¸",
      allTopics: "æ‰€æœ‰ä¸»é¡Œ",
      topicsTitle: "æ¶µè“‹ä¸»é¡Œ",
      topicsLead:
        "ç¯€ç›®æœƒå›žåˆ°å½±éŸ¿å®¶åº­ã€èª²å ‚ã€äººéš›é—œä¿‚å’Œè‡ªæˆ‘ç†è§£çš„å¯¦ç”¨ä¸»é¡Œã€‚",
      aboutTitle: "é—œæ–¼ Will Talks",
      aboutText:
        "Will Talks çš„å»ºç«‹ï¼Œæ˜¯ç‚ºäº†è®“å¿ƒç†å­¸å’Œå¿ƒç†å¥åº·æ¦‚å¿µæ›´å®¹æ˜“ç†è§£ï¼Œä½†ä¸æŠŠå®ƒå€‘ç°¡åŒ–å¾—å¤±åŽ»æ·±åº¦ã€‚ç›®æ¨™ä¸æ˜¯è½èµ·ä¾†å¾ˆåŽ²å®³ï¼Œè€Œæ˜¯å¹«åŠ©äººå€‘æƒ³å¾—æ›´æ¸…æ¥šã€å›žæ‡‰å¾—æ›´æº«å’Œï¼Œä¸¦æŠŠå¿ƒç†çŸ¥è­˜ç”¨åœ¨æ—¥å¸¸ç”Ÿæ´»ä¸­ã€‚",
      promiseTitle: "ç·¨è¼¯æ‰¿è«¾",
      promiseItems: [
        "ä»¥è­‰æ“šç‚ºåŸºç¤Žï¼Œä¸èª‡å¤§ã€‚",
        "é‡è¦–åæ€ï¼Œä¸ç…½æƒ…ã€‚",
        "å¯¦ç”¨ï¼Œè€Œä¸æ˜¯è¡¨æ¼”å¼ã€‚",
        "æœ‰äººå‘³ã€æº«æš–ä¸”èª å¯¦ã€‚",
      ],
      followTitle: "å»¶çºŒé€™å ´å°è©±",
      followText:
        "è¿½è¹¤æ–°é›†æ•¸ã€å¯¦ç”¨åæ€ï¼Œä»¥åŠé—œæ–¼æ—¥å¸¸äººé¡žè¡Œç‚ºçš„æ·±åº¦å°è©±ã€‚",
      comingSoon: "é »é“é€£çµå³å°‡æä¾›",
      subscribe: "è¨‚é–±",
      emailPlaceholder: "é›»å­éƒµä»¶åœ°å€",
      searchPlaceholder: "æœå°‹é›†æ•¸",
      noResults: "ç›®å‰æ²’æœ‰ç¬¦åˆæœå°‹çš„é›†æ•¸ã€‚",
      openEpisode: "é–‹å•Ÿé›†æ•¸",
      copyLink: "è¤‡è£½é€£çµ",
      linkCopied: "é€£çµå·²è¤‡è£½",
      backToTop: "å›žåˆ°é ‚éƒ¨",
      platform: "å¹³å°",
      language: "èªžè¨€",
      imageAlt: "Will Talks æ’­å®¢å°é¢",
      thumbnailAlt: "ã€Šç…¤æ°£ç‡ˆæ“æŽ§ï¼šæœ€å¸¸è¢«èª¤ç”¨çš„å¿ƒç†å­¸è©žèªžã€‹é›†æ•¸å°é¢",
      archiveTitle: "ä½ çš„å¤§è…¦æœ‰æ™‚æœƒé¨™ä½ ",
      archiveSummary:
        "é—œæ–¼èªçŸ¥æ‰­æ›²çš„å¯¦ç”¨å°è©±ï¼šç‚ºä»€éº¼æƒ³æ³•æœ‰æ™‚å¾ˆæœ‰èªªæœåŠ›ã€å®ƒå€‘å¦‚ä½•å½±éŸ¿æƒ…ç·’ï¼Œä»¥åŠå¦‚ä½•åœ¨ç›¸ä¿¡æ¯å€‹å¿µé ­ä¹‹å‰å…ˆåœä¸€åœã€‚",
      archiveTopic: "èªçŸ¥æ‰­æ›²",
      archiveAlt: "ã€Šä½ çš„å¤§è…¦æœ‰æ™‚æœƒé¨™ä½ ã€‹é›†æ•¸å°é¢",
      topics: [
        "èªçŸ¥æ‰­æ›²",
        "æƒ…ç·’èª¿ç¯€",
        "å£“åŠ›èˆ‡å› æ‡‰",
        "äººéš›é—œä¿‚",
        "è‡ªæˆ‘è¦ºå¯Ÿ",
        "ç«¥å¹´èˆ‡å®¶åº­æ¨¡å¼",
        "å€‹äººæˆé•·",
        "å­¸ç¿’èˆ‡å‹•æ©Ÿ",
      ],
    },
    "zh-cn": {
      home: "é¦–é¡µ",
      back: "è¿”å›žé¦–é¡µ",
      pageLabel: "Will Talks",
      nav: ["æœ€æ–°", "èŠ‚ç›®", "ä¸»é¢˜", "å…³äºŽ"],
      eyebrow: "Will Talks",
      title: "æŠŠå¿ƒç†å­¦å˜æˆæ—¥å¸¸ç”Ÿæ´»ä¸­ç”¨å¾—ä¸Šçš„ç†è§£ã€‚",
      intro:
        "å…³äºŽæƒ…ç»ªã€äººé™…å…³ç³»ã€è¡Œä¸ºã€å­¦ä¹ ï¼Œä»¥åŠå½±å“æ—¥å¸¸é€‰æ‹©çš„å¿ƒç†æ¨¡å¼çš„åæ€å¯¹è¯ã€‚",
      primaryCta: "æ”¶å¬æœ€æ–°ä¸€æœŸ",
      secondaryCta: "æŽ¢ç´¢ä¸»é¢˜",
      heroNote:
        "ä¸ºæˆäººã€æ•™è‚²å·¥ä½œè€…å’Œå¥½å¥‡å¬ä¼—æä¾›çš„æ•™è‚²æ€§åæ€ã€‚ä¸èƒ½æ›¿ä»£æ²»ç–—ã€è¯Šæ–­æˆ–åŒ»ç–—ç…§æŠ¤ã€‚",
      latestLabel: "æœ€æ–°ä¸€æœŸ",
      latestTitle: "ç…¤æ°”ç¯æ“æŽ§ï¼šæœ€å¸¸è¢«è¯¯ç”¨çš„å¿ƒç†å­¦è¯è¯­ | Psychology Misunderstood S1E1",
      latestTopic: "è¢«è¯¯è§£çš„å¿ƒç†å­¦",
      latestSummary:
        "Psychology Misunderstood ç¬¬ä¸€æœŸæŠŠç§‘å­¦ç†è§£å’Œæµè¡Œç”¨è¯­åˆ†å¼€ã€‚ä½ ä¼šäº†è§£ç…¤æ°”ç¯æ“æŽ§çœŸæ­£çš„æ„æ€ã€ä¸ºä»€ä¹ˆå®ƒå¸¸è¢«è¯¯è§£ä¸ºè¯´è°Žæˆ–æ„è§ä¸åŒï¼Œä»¥åŠä¸ºä»€ä¹ˆå‡†ç¡®ä½¿ç”¨å¿ƒç†å­¦è¯­è¨€å¾ˆé‡è¦ã€‚",
      listenSpotify: "åœ¨ Spotify æ”¶å¬",
      watchYoutube: "åœ¨ YouTube è§‚çœ‹",
      episodeMeta: "Psychology Misunderstood Â· ç¬¬ 1 å­£ Â· ç¬¬ 1 æœŸ",
      whyTitle: "ä¸ºä»€ä¹ˆè¿™ä¸€æœŸé‡è¦",
      whyText:
        "ç…¤æ°”ç¯æ“æŽ§çŽ°åœ¨è¢«åˆ°å¤„ä½¿ç”¨ï¼Œä½†è¿‡äºŽå®½æ³›çš„ç”¨æ³•å¯èƒ½è®©ä¸€ä¸ªä¸¥è‚ƒçš„å¿ƒç†æ¨¡å¼æ›´éš¾è¢«ç†è§£ã€‚è¿™ä¸€æœŸå¸®åŠ©å¬ä¼—åˆ†è¾¨æ—¥å¸¸å†²çªå’Œåå¤æ“æŽ§ä¸€ä¸ªäººçŽ°å®žæ„Ÿçš„æ¨¡å¼ã€‚",
      useTitle: "åœ¨ç”Ÿæ´»ä¸­ä½¿ç”¨",
      useItems: [
        "åˆ†è¾¨è¯´è°Žã€æ„è§ä¸åŒã€å¿˜äº‹æƒ…å’Œç…¤æ°”ç¯æ“æŽ§ä¹‹é—´çš„å·®åˆ«ã€‚",
        "è§‚å¯Ÿä¸€æ®µæ—¶é—´ä¸­çš„æ¨¡å¼ï¼Œè€Œä¸æ˜¯åªæ ¹æ®å•ä¸€æ—¶åˆ»ä¸‹åˆ¤æ–­ã€‚",
        "æè¿°å…³ç³»æ—¶ï¼Œè°¨æ…Žä½¿ç”¨å¿ƒç†å­¦è¯è¯­ã€‚",
      ],
      episodesTitle: "èŠ‚ç›®ä¸Žå¯¹è¯",
      episodesLead:
        "Will Talks ä¼šæ…¢æ…¢ã€æ…Žé‡åœ°å»ºç«‹ã€‚æ¯ä¸€æœŸéƒ½åº”è¯¥è®©å¿ƒç†å­¦æ›´å®¹æ˜“ç†è§£ã€è®°å¾—ä½ï¼Œä¹Ÿèƒ½ç”¨åœ¨ç”Ÿæ´»é‡Œã€‚",
      filterLabel: "æŒ‰ä¸»é¢˜ç­›é€‰èŠ‚ç›®",
      allTopics: "æ‰€æœ‰ä¸»é¢˜",
      topicsTitle: "æ¶µç›–ä¸»é¢˜",
      topicsLead:
        "èŠ‚ç›®ä¼šå›žåˆ°å½±å“å®¶åº­ã€è¯¾å ‚ã€äººé™…å…³ç³»å’Œè‡ªæˆ‘ç†è§£çš„å®žç”¨ä¸»é¢˜ã€‚",
      aboutTitle: "å…³äºŽ Will Talks",
      aboutText:
        "Will Talks çš„å»ºç«‹ï¼Œæ˜¯ä¸ºäº†è®©å¿ƒç†å­¦å’Œå¿ƒç†å¥åº·æ¦‚å¿µæ›´å®¹æ˜“ç†è§£ï¼Œä½†ä¸æŠŠå®ƒä»¬ç®€åŒ–å¾—å¤±åŽ»æ·±åº¦ã€‚ç›®æ ‡ä¸æ˜¯å¬èµ·æ¥å¾ˆåŽ‰å®³ï¼Œè€Œæ˜¯å¸®åŠ©äººä»¬æƒ³å¾—æ›´æ¸…æ¥šã€å›žåº”å¾—æ›´æ¸©å’Œï¼Œå¹¶æŠŠå¿ƒç†çŸ¥è¯†ç”¨åœ¨æ—¥å¸¸ç”Ÿæ´»ä¸­ã€‚",
      promiseTitle: "ç¼–è¾‘æ‰¿è¯º",
      promiseItems: [
        "ä»¥è¯æ®ä¸ºåŸºç¡€ï¼Œä¸å¤¸å¤§ã€‚",
        "é‡è§†åæ€ï¼Œä¸ç…½æƒ…ã€‚",
        "å®žç”¨ï¼Œè€Œä¸æ˜¯è¡¨æ¼”å¼ã€‚",
        "æœ‰äººå‘³ã€æ¸©æš–ä¸”è¯šå®žã€‚",
      ],
      followTitle: "å»¶ç»­è¿™åœºå¯¹è¯",
      followText:
        "è¿½è¸ªæ–°èŠ‚ç›®ã€å®žç”¨åæ€ï¼Œä»¥åŠå…³äºŽæ—¥å¸¸äººç±»è¡Œä¸ºçš„æ·±åº¦å¯¹è¯ã€‚",
      comingSoon: "é¢‘é“é“¾æŽ¥å³å°†æä¾›",
      subscribe: "è®¢é˜…",
      emailPlaceholder: "ç”µå­é‚®ç®±åœ°å€",
      searchPlaceholder: "æœç´¢èŠ‚ç›®",
      noResults: "ç›®å‰æ²¡æœ‰ç¬¦åˆæœç´¢çš„èŠ‚ç›®ã€‚",
      openEpisode: "æ‰“å¼€èŠ‚ç›®",
      copyLink: "å¤åˆ¶é“¾æŽ¥",
      linkCopied: "é“¾æŽ¥å·²å¤åˆ¶",
      backToTop: "å›žåˆ°é¡¶éƒ¨",
      platform: "å¹³å°",
      language: "è¯­è¨€",
      imageAlt: "Will Talks æ’­å®¢å°é¢",
      thumbnailAlt: "ã€Šç…¤æ°”ç¯æ“æŽ§ï¼šæœ€å¸¸è¢«è¯¯ç”¨çš„å¿ƒç†å­¦è¯è¯­ã€‹èŠ‚ç›®å°é¢",
      archiveTitle: "ä½ çš„å¤§è„‘æœ‰æ—¶ä¼šéª—ä½ ",
      archiveSummary:
        "å…³äºŽè®¤çŸ¥æ‰­æ›²çš„å®žç”¨å¯¹è¯ï¼šä¸ºä»€ä¹ˆæƒ³æ³•æœ‰æ—¶å¾ˆæœ‰è¯´æœåŠ›ã€å®ƒä»¬å¦‚ä½•å½±å“æƒ…ç»ªï¼Œä»¥åŠå¦‚ä½•åœ¨ç›¸ä¿¡æ¯ä¸ªå¿µå¤´ä¹‹å‰å…ˆåœä¸€åœã€‚",
      archiveTopic: "è®¤çŸ¥æ‰­æ›²",
      archiveAlt: "ã€Šä½ çš„å¤§è„‘æœ‰æ—¶ä¼šéª—ä½ ã€‹èŠ‚ç›®å°é¢",
      topics: [
        "è®¤çŸ¥æ‰­æ›²",
        "æƒ…ç»ªè°ƒèŠ‚",
        "åŽ‹åŠ›ä¸Žåº”å¯¹",
        "äººé™…å…³ç³»",
        "è‡ªæˆ‘è§‰å¯Ÿ",
        "ç«¥å¹´ä¸Žå®¶åº­æ¨¡å¼",
        "ä¸ªäººæˆé•¿",
        "å­¦ä¹ ä¸ŽåŠ¨æœº",
      ],
    },
    ja: {
      home: "ãƒ›ãƒ¼ãƒ ",
      back: "ãƒ›ãƒ¼ãƒ ã¸æˆ»ã‚‹",
      pageLabel: "Will Talks",
      nav: ["æœ€æ–°", "ã‚¨ãƒ”ã‚½ãƒ¼ãƒ‰", "ãƒ†ãƒ¼ãƒž", "æ¦‚è¦"],
      eyebrow: "Will Talks",
      title: "å¿ƒç†å­¦ã‚’ã€æ¯Žæ—¥ã®ç”Ÿæ´»ã§ä½¿ãˆã‚‹ç†è§£ã«ã€‚",
      intro:
        "æ„Ÿæƒ…ã€äººé–“é–¢ä¿‚ã€è¡Œå‹•ã€å­¦ã³ã€ãã—ã¦æ—¥ã€…ã®é¸æŠžã‚’å½¢ã¥ãã‚‹å¿ƒã®ãƒ‘ã‚¿ãƒ¼ãƒ³ã«ã¤ã„ã¦è€ƒãˆã‚‹å¯¾è©±ã§ã™ã€‚",
      primaryCta: "æœ€æ–°å›žã‚’è´ã",
      secondaryCta: "ãƒ†ãƒ¼ãƒžã‚’è¦‹ã‚‹",
      heroNote:
        "å¤§äººã€æ•™è‚²è€…ã€å­¦ã³ãŸã„äººã®ãŸã‚ã®æ•™è‚²çš„ãªæŒ¯ã‚Šè¿”ã‚Šã§ã™ã€‚æ²»ç™‚ã€è¨ºæ–­ã€åŒ»ç™‚ã‚±ã‚¢ã®ä»£ã‚ã‚Šã§ã¯ã‚ã‚Šã¾ã›ã‚“ã€‚",
      latestLabel: "æœ€æ–°å›ž",
      latestTitle: "ã‚¬ã‚¹ãƒ©ã‚¤ãƒ†ã‚£ãƒ³ã‚°ï¼šæœ€ã‚‚èª¤ç”¨ã•ã‚Œã¦ã„ã‚‹å¿ƒç†å­¦ç”¨èªž | Psychology Misunderstood S1E1",
      latestTopic: "èª¤è§£ã•ã‚Œã‚„ã™ã„å¿ƒç†å­¦",
      latestSummary:
        "Psychology Misunderstoodã®ç¬¬1å›žã§ã¯ã€ç§‘å­¦çš„ãªæ„å‘³ã¨æµè¡Œèªžã¨ã—ã¦ã®ä½¿ã‚ã‚Œæ–¹ã‚’åˆ†ã‘ã¦è€ƒãˆã¾ã™ã€‚ã‚¬ã‚¹ãƒ©ã‚¤ãƒ†ã‚£ãƒ³ã‚°ã¨ã¯æœ¬æ¥ä½•ã‹ã€ãªãœå˜˜ã‚„æ„è¦‹ã®é•ã„ã¨æ··åŒã•ã‚Œã‚„ã™ã„ã®ã‹ã€æ­£ç¢ºãªè¨€è‘‰ã¥ã‹ã„ãŒãªãœå¤§åˆ‡ãªã®ã‹ã‚’æ‰±ã„ã¾ã™ã€‚",
      listenSpotify: "Spotifyã§è´ã",
      watchYoutube: "YouTubeã§è¦‹ã‚‹",
      episodeMeta: "Psychology Misunderstood Â· ã‚·ãƒ¼ã‚ºãƒ³1 Â· ã‚¨ãƒ”ã‚½ãƒ¼ãƒ‰1",
      whyTitle: "ã“ã®å›žãŒå¤§åˆ‡ãªç†ç”±",
      whyText:
        "ã‚¬ã‚¹ãƒ©ã‚¤ãƒ†ã‚£ãƒ³ã‚°ã¨ã„ã†è¨€è‘‰ã¯åºƒãä½¿ã‚ã‚Œã¦ã„ã¾ã™ãŒã€ã‚ã„ã¾ã„ãªä½¿ã„æ–¹ã¯æ·±åˆ»ãªå¿ƒç†çš„ãƒ‘ã‚¿ãƒ¼ãƒ³ã®ç†è§£ã‚’é›£ã—ãã—ã¾ã™ã€‚ã“ã®å›žã¯ã€æ—¥å¸¸ã®å¯¾ç«‹ã¨ã€ç›¸æ‰‹ã®ç¾å®Ÿæ„Ÿã‚’ç¹°ã‚Šè¿”ã—æºã•ã¶ã‚‹æ“ä½œã¨ã®é•ã„ã‚’è€ƒãˆã‚‹åŠ©ã‘ã«ãªã‚Šã¾ã™ã€‚",
      useTitle: "ç”Ÿæ´»ã§ä½¿ã†ã«ã¯",
      useItems: [
        "å˜˜ã€æ„è¦‹ã®é•ã„ã€å¿˜ã‚ŒãŸã“ã¨ã€ã‚¬ã‚¹ãƒ©ã‚¤ãƒ†ã‚£ãƒ³ã‚°ã®é•ã„ã‚’å­¦ã¶ã€‚",
        "ä¸€ã¤ã®å‡ºæ¥äº‹ã ã‘ã§ãªãã€æ™‚é–“ã‚’ã‹ã‘ã¦è¦‹ãˆã‚‹ãƒ‘ã‚¿ãƒ¼ãƒ³ã«æ³¨ç›®ã™ã‚‹ã€‚",
        "äººé–“é–¢ä¿‚ã‚’èª¬æ˜Žã™ã‚‹ã¨ãã€å¿ƒç†å­¦ç”¨èªžã‚’æ…Žé‡ã«ä½¿ã†ã€‚",
      ],
      episodesTitle: "ã‚¨ãƒ”ã‚½ãƒ¼ãƒ‰ã¨å¯¾è©±",
      episodesLead:
        "Will Talksã¯ã€ã‚†ã£ãã‚Šä¸å¯§ã«ã¤ãã£ã¦ã„ãã¾ã™ã€‚å„å›žã¯ã€å¿ƒç†å­¦ã‚’ç†è§£ã—ã‚„ã™ãã€è¦šãˆã‚„ã™ãã€ç”Ÿæ´»ã«ç”Ÿã‹ã—ã‚„ã™ãã™ã‚‹ãŸã‚ã®ã‚‚ã®ã§ã™ã€‚",
      filterLabel: "ãƒ†ãƒ¼ãƒžã§ã‚¨ãƒ”ã‚½ãƒ¼ãƒ‰ã‚’çµžã‚Šè¾¼ã‚€",
      allTopics: "ã™ã¹ã¦ã®ãƒ†ãƒ¼ãƒž",
      topicsTitle: "æ‰±ã†ãƒ†ãƒ¼ãƒž",
      topicsLead:
        "å®¶åº­ã€æ•™å®¤ã€äººé–“é–¢ä¿‚ã€è‡ªå·±ç†è§£ã«é–¢ã‚ã‚‹å®Ÿç”¨çš„ãªãƒ†ãƒ¼ãƒžã‚’ç¹°ã‚Šè¿”ã—æ‰±ã„ã¾ã™ã€‚",
      aboutTitle: "Will Talksã«ã¤ã„ã¦",
      aboutText:
        "Will Talksã¯ã€å¿ƒç†å­¦ã¨å¿ƒã®å¥åº·ã«é–¢ã™ã‚‹è€ƒãˆã‚’ã€æµ…ãã›ãšã«åˆ†ã‹ã‚Šã‚„ã™ãã™ã‚‹ãŸã‚ã«ã¤ãã‚‰ã‚Œã¾ã—ãŸã€‚ç›®çš„ã¯ç«‹æ´¾ã«èžã“ãˆã‚‹ã“ã¨ã§ã¯ã‚ã‚Šã¾ã›ã‚“ã€‚äººãŒã‚ˆã‚Šæ˜Žç¢ºã«è€ƒãˆã€ã‚ˆã‚Šç©ã‚„ã‹ã«åå¿œã—ã€å¿ƒç†å­¦ã®çŸ¥è­˜ã‚’æ—¥å¸¸ç”Ÿæ´»ã§ä½¿ãˆã‚‹ã‚ˆã†ã«ã™ã‚‹ã“ã¨ã§ã™ã€‚",
      promiseTitle: "ç·¨é›†ä¸Šã®ç´„æŸ",
      promiseItems: [
        "æ ¹æ‹ ã‚’å¤§åˆ‡ã«ã—ã€èª‡å¼µã—ãªã„ã€‚",
        "ç…½ã‚‰ãšã€æŒ¯ã‚Šè¿”ã‚Šã‚’å¤§åˆ‡ã«ã™ã‚‹ã€‚",
        "è¦‹ã›ã‹ã‘ã§ã¯ãªãã€å®Ÿç”¨çš„ã§ã‚ã‚‹ã€‚",
        "äººé–“ã‚‰ã—ãã€æ¸©ã‹ãã€æ­£ç›´ã§ã‚ã‚‹ã€‚",
      ],
      followTitle: "å¯¾è©±ã‚’ç¶šã‘ã‚‹",
      followText:
        "æ–°ã—ã„ã‚¨ãƒ”ã‚½ãƒ¼ãƒ‰ã€å®Ÿç”¨çš„ãªæŒ¯ã‚Šè¿”ã‚Šã€æ—¥å¸¸ã®äººé–“è¡Œå‹•ã«ã¤ã„ã¦ã®ä¸å¯§ãªå¯¾è©±ã‚’ãƒ•ã‚©ãƒ­ãƒ¼ã—ã¦ãã ã•ã„ã€‚",
      comingSoon: "ãƒãƒ£ãƒ³ãƒãƒ«ãƒªãƒ³ã‚¯ã¯æº–å‚™ä¸­ã§ã™",
      subscribe: "ç™»éŒ²",
      emailPlaceholder: "ãƒ¡ãƒ¼ãƒ«ã‚¢ãƒ‰ãƒ¬ã‚¹",
      searchPlaceholder: "ã‚¨ãƒ”ã‚½ãƒ¼ãƒ‰ã‚’æ¤œç´¢",
      noResults: "ä¸€è‡´ã™ã‚‹ã‚¨ãƒ”ã‚½ãƒ¼ãƒ‰ã¯ã¾ã ã‚ã‚Šã¾ã›ã‚“ã€‚",
      openEpisode: "ã‚¨ãƒ”ã‚½ãƒ¼ãƒ‰ã‚’é–‹ã",
      copyLink: "ãƒªãƒ³ã‚¯ã‚’ã‚³ãƒ”ãƒ¼",
      linkCopied: "ãƒªãƒ³ã‚¯ã‚’ã‚³ãƒ”ãƒ¼ã—ã¾ã—ãŸ",
      backToTop: "ãƒˆãƒƒãƒ—ã¸æˆ»ã‚‹",
      platform: "ãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ ",
      language: "è¨€èªž",
      imageAlt: "Will Talksã®ãƒãƒƒãƒ‰ã‚­ãƒ£ã‚¹ãƒˆç”»åƒ",
      thumbnailAlt: "ã€Œã‚¬ã‚¹ãƒ©ã‚¤ãƒ†ã‚£ãƒ³ã‚°ï¼šæœ€ã‚‚èª¤ç”¨ã•ã‚Œã¦ã„ã‚‹å¿ƒç†å­¦ç”¨èªžã€ã®ã‚¨ãƒ”ã‚½ãƒ¼ãƒ‰ç”»åƒ",
      archiveTitle: "è„³ã¯ã¨ãã©ãç§ãŸã¡ã‚’ã ã¾ã™",
      archiveSummary:
        "èªçŸ¥ã®ã‚†ãŒã¿ã«ã¤ã„ã¦ã®å®Ÿç”¨çš„ãªå¯¾è©±ã§ã™ã€‚è€ƒãˆãŒãªãœå¼·ãæ„Ÿã˜ã‚‰ã‚Œã‚‹ã®ã‹ã€æ„Ÿæƒ…ã«ã©ã†å½±éŸ¿ã™ã‚‹ã®ã‹ã€ãã—ã¦å¿ƒãŒèªžã‚‹ç‰©èªžã‚’ã™ãä¿¡ã˜ã‚‹å‰ã«ã©ã†ç«‹ã¡æ­¢ã¾ã‚‹ã‹ã‚’æ‰±ã„ã¾ã™ã€‚",
      archiveTopic: "èªçŸ¥ã®ã‚†ãŒã¿",
      archiveAlt: "ã€Œè„³ã¯ã¨ãã©ãç§ãŸã¡ã‚’ã ã¾ã™ã€ã®ã‚¨ãƒ”ã‚½ãƒ¼ãƒ‰ç”»åƒ",
      topics: [
        "èªçŸ¥ã®ã‚†ãŒã¿",
        "æ„Ÿæƒ…ã®èª¿æ•´",
        "ã‚¹ãƒˆãƒ¬ã‚¹ã¨å¯¾å‡¦",
        "äººé–“é–¢ä¿‚",
        "è‡ªå·±ç†è§£",
        "å¹¼å°‘æœŸã¨å®¶æ—ã®ãƒ‘ã‚¿ãƒ¼ãƒ³",
        "è‡ªå·±æˆé•·",
        "å­¦ã³ã¨å‹•æ©Ÿã¥ã‘",
      ],
    },
    ko: {
      home: "í™ˆ",
      back: "í™ˆìœ¼ë¡œ ëŒì•„ê°€ê¸°",
      pageLabel: "Will Talks",
      nav: ["ìµœì‹ ", "ì—í”¼ì†Œë“œ", "ì£¼ì œ", "ì†Œê°œ"],
      eyebrow: "Will Talks",
      title: "ì‹¬ë¦¬í•™ì„ ì¼ìƒì—ì„œ ì‚¬ìš©í•  ìˆ˜ ìžˆëŠ” ì´í•´ë¡œ ë°”ê¿‰ë‹ˆë‹¤.",
      intro:
        "ê°ì •, ê´€ê³„, í–‰ë™, ë°°ì›€, ê·¸ë¦¬ê³  ì¼ìƒì˜ ì„ íƒì„ ë§Œë“œëŠ” ë§ˆìŒì˜ íŒ¨í„´ì— ëŒ€í•´ ì°¨ë¶„ížˆ ë‚˜ëˆ„ëŠ” ëŒ€í™”ìž…ë‹ˆë‹¤.",
      primaryCta: "ìµœì‹  ì—í”¼ì†Œë“œ ë“£ê¸°",
      secondaryCta: "ì£¼ì œ ì‚´íŽ´ë³´ê¸°",
      heroNote:
        "ì„±ì¸, êµìœ¡ìž, í˜¸ê¸°ì‹¬ ìžˆëŠ” ì²­ì·¨ìžë¥¼ ìœ„í•œ êµìœ¡ì  ì„±ì°°ìž…ë‹ˆë‹¤. ì¹˜ë£Œ, ì§„ë‹¨ ë˜ëŠ” ì˜ë£Œì  ëŒë´„ì„ ëŒ€ì‹ í•˜ì§€ ì•ŠìŠµë‹ˆë‹¤.",
      latestLabel: "ìµœì‹  ì—í”¼ì†Œë“œ",
      latestTitle: "ê°€ìŠ¤ë¼ì´íŒ…: ê°€ìž¥ ë§Žì´ ì˜¤í•´ë˜ëŠ” ì‹¬ë¦¬í•™ ë‹¨ì–´ | Psychology Misunderstood S1E1",
      latestTopic: "ì˜¤í•´ë°›ëŠ” ì‹¬ë¦¬í•™",
      latestSummary:
        "Psychology Misunderstood ì²« ë²ˆì§¸ ì—í”¼ì†Œë“œëŠ” ê³¼í•™ì  ì˜ë¯¸ì™€ ìœ í–‰ì–´ë¡œ ì“°ì´ëŠ” ë°©ì‹ì„ êµ¬ë¶„í•©ë‹ˆë‹¤. ê°€ìŠ¤ë¼ì´íŒ…ì´ ì‹¤ì œë¡œ ë¬´ì—‡ì„ ëœ»í•˜ëŠ”ì§€, ì™œ ê±°ì§“ë§ì´ë‚˜ ì˜ê²¬ ì°¨ì´ì™€ í˜¼ë™ë˜ëŠ”ì§€, ì •í™•í•œ ì–¸ì–´ ì‚¬ìš©ì´ ì™œ ì¤‘ìš”í•œì§€ ë‹¤ë£¹ë‹ˆë‹¤.",
      listenSpotify: "Spotifyì—ì„œ ë“£ê¸°",
      watchYoutube: "YouTubeì—ì„œ ë³´ê¸°",
      episodeMeta: "Psychology Misunderstood Â· ì‹œì¦Œ 1 Â· ì—í”¼ì†Œë“œ 1",
      whyTitle: "ì´ ì—í”¼ì†Œë“œê°€ ì¤‘ìš”í•œ ì´ìœ ",
      whyText:
        "ê°€ìŠ¤ë¼ì´íŒ…ì´ë¼ëŠ” ë§ì€ ì´ì œ ì–´ë””ì—ì„œë‚˜ ì“°ì´ì§€ë§Œ, ë„ˆë¬´ ë„“ê²Œ ì‚¬ìš©í•˜ë©´ ì‹¬ê°í•œ ì‹¬ë¦¬ì  íŒ¨í„´ì„ ì´í•´í•˜ê¸° ë” ì–´ë ¤ì›Œì§ˆ ìˆ˜ ìžˆìŠµë‹ˆë‹¤. ì´ ì—í”¼ì†Œë“œëŠ” ì¼ìƒì ì¸ ê°ˆë“±ê³¼ í•œ ì‚¬ëžŒì˜ í˜„ì‹¤ê°ì„ ë°˜ë³µì ìœ¼ë¡œ í”ë“œëŠ” ì¡°ìž‘ì˜ ì°¨ì´ë¥¼ ì‚´íŽ´ë´…ë‹ˆë‹¤.",
      useTitle: "ì¼ìƒì—ì„œ ì‚¬ìš©í•˜ê¸°",
      useItems: [
        "ê±°ì§“ë§, ì˜ê²¬ ì°¨ì´, ìžŠì–´ë²„ë¦¼, ê°€ìŠ¤ë¼ì´íŒ…ì˜ ì°¨ì´ë¥¼ ë°°ì›ë‹ˆë‹¤.",
        "í•œ ìˆœê°„ë§Œ íŒë‹¨í•˜ì§€ ë§ê³  ì‹œê°„ ì†ì—ì„œ ë°˜ë³µë˜ëŠ” íŒ¨í„´ì„ ë´…ë‹ˆë‹¤.",
        "ê´€ê³„ë¥¼ ì„¤ëª…í•  ë•Œ ì‹¬ë¦¬í•™ ìš©ì–´ë¥¼ ì‹ ì¤‘í•˜ê²Œ ì‚¬ìš©í•©ë‹ˆë‹¤.",
      ],
      episodesTitle: "ì—í”¼ì†Œë“œì™€ ëŒ€í™”",
      episodesLead:
        "Will TalksëŠ” ì²œì²œížˆ, ì‹ ì¤‘í•˜ê²Œ ë§Œë“¤ì–´ì§‘ë‹ˆë‹¤. ê° ì—í”¼ì†Œë“œëŠ” ì‹¬ë¦¬í•™ì„ ë” ì´í•´í•˜ê¸° ì‰½ê³ , ê¸°ì–µí•˜ê¸° ì‰½ê³ , ì‚¶ì— ì ìš©í•˜ê¸° ì‰½ê²Œ í•´ì•¼ í•©ë‹ˆë‹¤.",
      filterLabel: "ì£¼ì œë³„ë¡œ ì—í”¼ì†Œë“œ í•„í„°ë§",
      allTopics: "ëª¨ë“  ì£¼ì œ",
      topicsTitle: "ë‹¤ë£¨ëŠ” ì£¼ì œ",
      topicsLead:
        "ê°€ì •, êµì‹¤, ê´€ê³„, ìžê¸° ì´í•´ì— ì˜í–¥ì„ ì£¼ëŠ” ì‹¤ìš©ì ì¸ ì£¼ì œë¡œ ê³„ì† ëŒì•„ì˜µë‹ˆë‹¤.",
      aboutTitle: "Will Talks ì†Œê°œ",
      aboutText:
        "Will TalksëŠ” ì‹¬ë¦¬í•™ê³¼ ì •ì‹  ê±´ê°• ê°œë…ì„ ë” ì‰½ê²Œ ì´í•´í•˜ë˜ ì–•ê²Œ ë§Œë“¤ì§€ ì•Šê¸° ìœ„í•´ ì‹œìž‘ë˜ì—ˆìŠµë‹ˆë‹¤. ëª©ì ì€ ì¸ìƒì ìœ¼ë¡œ ë“¤ë¦¬ëŠ” ê²ƒì´ ì•„ë‹™ë‹ˆë‹¤. ì‚¬ëžŒë“¤ì´ ë” ë¶„ëª…í•˜ê²Œ ìƒê°í•˜ê³ , ë” ë¶€ë“œëŸ½ê²Œ ë°˜ì‘í•˜ë©°, ì‹¬ë¦¬í•™ ì§€ì‹ì„ ì¼ìƒì—ì„œ ì‚¬ìš©í•  ìˆ˜ ìžˆë„ë¡ ë•ëŠ” ê²ƒìž…ë‹ˆë‹¤.",
      promiseTitle: "íŽ¸ì§‘ ì›ì¹™",
      promiseItems: [
        "ê·¼ê±°ë¥¼ ë°”íƒ•ìœ¼ë¡œ í•˜ë©° ê³¼ìž¥í•˜ì§€ ì•ŠìŠµë‹ˆë‹¤.",
        "ì„ ì •ì ì´ì§€ ì•Šê³  ì„±ì°°ì ìž…ë‹ˆë‹¤.",
        "ë³´ì—¬ì£¼ê¸°ë³´ë‹¤ ì‹¤ìš©ì ìž…ë‹ˆë‹¤.",
        "ì¸ê°„ì ì´ê³  ë”°ëœ»í•˜ë©° ì •ì§í•©ë‹ˆë‹¤.",
      ],
      followTitle: "ëŒ€í™”ë¥¼ ì´ì–´ê°€ê¸°",
      followText:
        "ìƒˆ ì—í”¼ì†Œë“œ, ì‹¤ìš©ì ì¸ ì„±ì°°, ì¼ìƒì  ì¸ê°„ í–‰ë™ì— ê´€í•œ ê¹Šì´ ìžˆëŠ” ëŒ€í™”ë¥¼ íŒ”ë¡œìš°í•˜ì„¸ìš”.",
      comingSoon: "ì±„ë„ ë§í¬ ì¤€ë¹„ ì¤‘",
      subscribe: "êµ¬ë…",
      emailPlaceholder: "ì´ë©”ì¼ ì£¼ì†Œ",
      searchPlaceholder: "ì—í”¼ì†Œë“œ ê²€ìƒ‰",
      noResults: "ì•„ì§ ê²€ìƒ‰ê³¼ ì¼ì¹˜í•˜ëŠ” ì—í”¼ì†Œë“œê°€ ì—†ìŠµë‹ˆë‹¤.",
      openEpisode: "ì—í”¼ì†Œë“œ ì—´ê¸°",
      copyLink: "ë§í¬ ë³µì‚¬",
      linkCopied: "ë§í¬ê°€ ë³µì‚¬ë˜ì—ˆìŠµë‹ˆë‹¤",
      backToTop: "ë§¨ ìœ„ë¡œ",
      platform: "í”Œëž«í¼",
      language: "ì–¸ì–´",
      imageAlt: "Will Talks íŒŸìºìŠ¤íŠ¸ ì•„íŠ¸ì›Œí¬",
      thumbnailAlt: "ê°€ìŠ¤ë¼ì´íŒ…: ê°€ìž¥ ë§Žì´ ì˜¤í•´ë˜ëŠ” ì‹¬ë¦¬í•™ ë‹¨ì–´ ì—í”¼ì†Œë“œ ì•„íŠ¸ì›Œí¬",
      archiveTitle: "ìš°ë¦¬ ë‡ŒëŠ” ë•Œë•Œë¡œ ìš°ë¦¬ë¥¼ ì†ìž…ë‹ˆë‹¤",
      archiveSummary:
        "ì¸ì§€ ì™œê³¡ì— ëŒ€í•œ ì‹¤ìš©ì ì¸ ëŒ€í™”ìž…ë‹ˆë‹¤. ìƒê°ì´ ì™œ ê·¸í† ë¡ ì„¤ë“ë ¥ ìžˆê²Œ ëŠê»´ì§€ëŠ”ì§€, ê°ì •ì— ì–´ë–¤ ì˜í–¥ì„ ì£¼ëŠ”ì§€, ë§ˆìŒì´ ë“¤ë ¤ì£¼ëŠ” ëª¨ë“  ì´ì•¼ê¸°ë¥¼ ë¯¿ê¸° ì „ì— ì–´ë–»ê²Œ ë©ˆì¶œ ìˆ˜ ìžˆëŠ”ì§€ ë‹¤ë£¹ë‹ˆë‹¤.",
      archiveTopic: "ì¸ì§€ ì™œê³¡",
      archiveAlt: "ìš°ë¦¬ ë‡ŒëŠ” ë•Œë•Œë¡œ ìš°ë¦¬ë¥¼ ì†ìž…ë‹ˆë‹¤ ì—í”¼ì†Œë“œ ì•„íŠ¸ì›Œí¬",
      topics: [
        "ì¸ì§€ ì™œê³¡",
        "ê°ì • ì¡°ì ˆ",
        "ìŠ¤íŠ¸ë ˆìŠ¤ì™€ ëŒ€ì²˜",
        "ê´€ê³„",
        "ìžê¸° ì¸ì‹",
        "ì–´ë¦° ì‹œì ˆê³¼ ê°€ì¡± íŒ¨í„´",
        "ê°œì¸ ì„±ìž¥",
        "í•™ìŠµê³¼ ë™ê¸°",
      ],
    },
  };

  const t = copy[locale] || copy.en;

  const homeHref = `${prefix}home.html`;

  const episodes = [
    {
      title: t.latestTitle,
      topic: t.latestTopic || t.topics[0],
      summary: t.latestSummary,
      image: `${prefix}images/Gaslighting.webp`,
      alt: t.thumbnailAlt,
      spotify: episodeLinks.spotify,
      youtube: episodeLinks.youtube,
      tags: [t.latestTopic || t.topics[0], t.topics[0], t.topics[4]],
    },
    {
      title: t.archiveTitle || copy.en.archiveTitle,
      topic: t.archiveTopic || copy.en.archiveTopic,
      summary: t.archiveSummary || copy.en.archiveSummary,
      image: `${prefix}images/will-talks-brain-lies-thumbnail.jpg`,
      alt: t.archiveAlt || copy.en.archiveAlt,
      spotify: archiveLinks.spotify,
      youtube: archiveLinks.youtube,
      tags: [t.archiveTopic || copy.en.archiveTopic, t.topics[1], t.topics[4]],
    },
  ];

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function list(items) {
    return items.map((item) => `<li>${esc(item)}</li>`).join("");
  }

  function chip(topic, index) {
    const isFirst = index === 0;
    return `<button class="wt-chip${isFirst ? " is-active" : ""}" type="button" data-topic="${esc(topic)}" aria-pressed="${isFirst ? "true" : "false"}">${esc(topic)}</button>`;
  }

  function renderEpisodeCard(episode) {
    return `<article class="wt-episode-card" data-card data-topics="${esc(episode.tags.join(" "))}" data-title="${esc(episode.title.toLowerCase())}">
      <img src="${esc(episode.image)}" alt="${esc(episode.alt)}" loading="lazy" />
      <div class="wt-episode-card__body">
        <p class="wt-kicker">${esc(episode.topic)}</p>
        <h3>${esc(episode.title)}</h3>
        <p>${esc(episode.summary)}</p>
        <div class="wt-card-actions">
          <a class="wt-button wt-button--small" href="${esc(episode.spotify)}" target="_blank" rel="noopener">${esc(t.listenSpotify)}</a>
          <a class="wt-button wt-button--small wt-button--ghost" href="${esc(episode.youtube)}" target="_blank" rel="noopener">${esc(t.watchYoutube)}</a>
          <button class="wt-button wt-button--small wt-button--quiet" type="button" data-copy-link="${esc(episode.youtube)}">${esc(t.copyLink)}</button>
        </div>
      </div>
    </article>`;
  }

  root.innerHTML = `
    <header class="wt-header">
      <a class="wt-brand" href="${esc(homeHref)}" aria-label="Healthy Little Minds">
        <img src="${esc(prefix)}images/logo-icon.webp" alt="" />
        <span>Healthy Little Minds</span>
      </a>
      <nav class="wt-nav" aria-label="Will Talks">
        <a href="#latest">${esc(t.nav[0])}</a>
        <a href="#episodes">${esc(t.nav[1])}</a>
        <a href="#topics">${esc(t.nav[2])}</a>
        <a href="#about">${esc(t.nav[3])}</a>
      </nav>
      <div class="wt-header-actions">
        <a class="wt-button wt-button--ghost wt-button--small" href="${esc(homeHref)}">${esc(t.back)}</a>
      </div>
    </header>

    <main>
      <section class="wt-hero" aria-labelledby="will-talks-title">
        <div class="wt-hero__content">
          <p class="wt-eyebrow">${esc(t.eyebrow)}</p>
          <h1 id="will-talks-title">${esc(t.title)}</h1>
          <p class="wt-lead">${esc(t.intro)}</p>
          <div class="wt-actions">
            <a class="wt-button" href="#latest">${esc(t.primaryCta)}</a>
            <a class="wt-button wt-button--ghost" href="#topics">${esc(t.secondaryCta)}</a>
          </div>
          <p class="wt-note">${esc(t.heroNote)}</p>
        </div>
        <figure class="wt-hero__media">
          <img src="${esc(prefix)}images/will-talks.webp" alt="${esc(t.imageAlt)}" />
        </figure>
      </section>

      <section class="wt-section wt-latest" id="latest" aria-labelledby="latest-title">
        <div class="wt-section-heading">
          <p class="wt-eyebrow">${esc(t.latestLabel)}</p>
          <h2 id="latest-title">${esc(t.latestTitle)}</h2>
          <p>${esc(t.latestSummary)}</p>
          <p class="wt-meta">${esc(t.episodeMeta)}</p>
        </div>

        <div class="wt-latest-grid">
          <article class="wt-feature-card">
            <img src="${esc(prefix)}images/Gaslighting.webp" alt="${esc(t.thumbnailAlt)}" />
            <div class="wt-card-actions">
              <a class="wt-button" href="${esc(episodeLinks.spotify)}" target="_blank" rel="noopener">${esc(t.listenSpotify)}</a>
              <a class="wt-button wt-button--ghost" href="${esc(episodeLinks.youtube)}" target="_blank" rel="noopener">${esc(t.watchYoutube)}</a>
            </div>
          </article>

          <div class="wt-insight-card">
            <h3>${esc(t.whyTitle)}</h3>
            <p>${esc(t.whyText)}</p>
            <h3>${esc(t.useTitle)}</h3>
            <ul>${list(t.useItems)}</ul>
          </div>
        </div>

        <div class="wt-embed-grid" aria-label="${esc(t.latestTitle)}">
          <iframe class="wt-embed wt-embed--spotify" title="${esc(t.listenSpotify)}" src="${esc(episodeLinks.spotifyEmbed)}" height="352" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          <iframe class="wt-embed wt-embed--youtube" title="${esc(t.watchYoutube)}" src="${esc(episodeLinks.youtubeEmbed)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </section>

      <section class="wt-section" id="topics" aria-labelledby="topics-title">
        <div class="wt-section-heading">
          <p class="wt-eyebrow">${esc(t.secondaryCta)}</p>
          <h2 id="topics-title">${esc(t.topicsTitle)}</h2>
          <p>${esc(t.topicsLead)}</p>
        </div>
        <div class="wt-topic-grid">
          ${t.topics
            .map(
              (topic) => `<article class="wt-topic-card">
                <span aria-hidden="true">&bull;</span>
                <h3>${esc(topic)}</h3>
              </article>`,
            )
            .join("")}
        </div>
      </section>

      <section class="wt-section" id="episodes" aria-labelledby="episodes-title">
        <div class="wt-section-heading wt-section-heading--row">
          <div>
            <p class="wt-eyebrow">${esc(t.nav[1])}</p>
            <h2 id="episodes-title">${esc(t.episodesTitle)}</h2>
            <p>${esc(t.episodesLead)}</p>
          </div>
          <label class="wt-search">
            <span>${esc(t.searchPlaceholder)}</span>
            <input type="search" id="episode-search" placeholder="${esc(t.searchPlaceholder)}" />
          </label>
        </div>

        <div class="wt-filter" aria-label="${esc(t.filterLabel)}">
          ${[t.allTopics, ...t.topics.slice(0, 5)].map(chip).join("")}
        </div>

        <div class="wt-episode-grid" id="episode-list">
          ${episodes.map(renderEpisodeCard).join("")}
        </div>
        <p class="wt-empty" id="episode-empty" hidden>${esc(t.noResults)}</p>
      </section>

      <section class="wt-section wt-about" id="about" aria-labelledby="about-title">
        <div>
          <p class="wt-eyebrow">${esc(t.nav[3])}</p>
          <h2 id="about-title">${esc(t.aboutTitle)}</h2>
          <p>${esc(t.aboutText)}</p>
        </div>
        <aside class="wt-promise">
          <h3>${esc(t.promiseTitle)}</h3>
          <ul>${list(t.promiseItems)}</ul>
        </aside>
      </section>

      <section class="wt-section wt-follow" aria-labelledby="follow-title">
        <div>
          <p class="wt-eyebrow">${esc(t.subscribe)}</p>
          <h2 id="follow-title">${esc(t.followTitle)}</h2>
          <p>${esc(t.followText)}</p>
        </div>
        <form class="wt-subscribe" data-subscribe>
          <label class="visually-hidden" for="wt-email">${esc(t.emailPlaceholder)}</label>
          <input id="wt-email" type="email" placeholder="${esc(t.emailPlaceholder)}" autocomplete="email" />
          <button class="wt-button" type="submit">${esc(t.subscribe)}</button>
          <p class="wt-form-note" role="status" aria-live="polite"></p>
        </form>
      </section>

      <button class="wt-back-to-top" type="button" aria-label="${esc(t.backToTop)}">
        ↑
      </button>

      <p class="wt-toast" role="status" aria-live="polite" hidden></p>
    </main>
  `;

  const cards = Array.from(root.querySelectorAll("[data-card]"));
  const chips = Array.from(root.querySelectorAll(".wt-chip"));
  const search = root.querySelector("#episode-search");
  const empty = root.querySelector("#episode-empty");
  const header = root.querySelector(".wt-header");
  const navLinks = Array.from(root.querySelectorAll(".wt-nav a"));
  const sections = Array.from(root.querySelectorAll("main section[id]"));
  const toast = root.querySelector(".wt-toast");
  const backToTop = root.querySelector(".wt-back-to-top");
  let activeTopic = t.allTopics;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    toast.classList.add("is-visible");
    window.clearTimeout(showToast.timeout);
    showToast.timeout = window.setTimeout(() => {
      toast.classList.remove("is-visible");
      window.setTimeout(() => {
        toast.hidden = true;
      }, 220);
    }, 1800);
  }

  function applyFilters() {
    const query = (search?.value || "").trim().toLowerCase();
    let visibleCount = 0;

    cards.forEach((card) => {
      const topics = card.dataset.topics || "";
      const title = card.dataset.title || "";
      const matchesTopic = activeTopic === t.allTopics || topics.includes(activeTopic);
      const matchesSearch = !query || title.includes(query) || topics.toLowerCase().includes(query);
      const visible = matchesTopic && matchesSearch;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    if (empty) empty.hidden = visibleCount > 0;
  }

  chips.forEach((button) => {
    button.addEventListener("click", () => {
      activeTopic = button.dataset.topic || t.allTopics;
      chips.forEach((chipButton) => {
        const active = chipButton === button;
        chipButton.classList.toggle("is-active", active);
        chipButton.setAttribute("aria-pressed", String(active));
      });
      applyFilters();
    });
  });

  search?.addEventListener("input", applyFilters);

  root.addEventListener("click", async (event) => {
    const copyButton = event.target.closest("[data-copy-link]");
    if (!copyButton) return;

    const url = copyButton.getAttribute("data-copy-link");
    if (!url) return;

    try {
      await navigator.clipboard.writeText(url);
      showToast(t.linkCopied);
    } catch {
      window.prompt(t.copyLink, url);
    }
  });

  window.addEventListener(
    "scroll",
    () => {
      const scrolled = window.scrollY > 12;
      header?.classList.toggle("is-scrolled", scrolled);
      backToTop?.classList.toggle("is-visible", window.scrollY > 650);
    },
    { passive: true },
  );

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });


  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    root
      .querySelectorAll(".wt-hero, .wt-section, .wt-topic-card, .wt-episode-card")
      .forEach((element) => {
        element.classList.add("wt-reveal");
        revealObserver.observe(element);
      });

    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => {
            const active = link.getAttribute("href") === `#${entry.target.id}`;
            link.classList.toggle("is-active", active);
            if (active) link.setAttribute("aria-current", "true");
            else link.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0.01 },
    );

    sections.forEach((section) => activeObserver.observe(section));
  }

  root.querySelector("[data-subscribe]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = event.currentTarget.querySelector(".wt-form-note");
    if (note) note.textContent = t.comingSoon;
  });
})();
