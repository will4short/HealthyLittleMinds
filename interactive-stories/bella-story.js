(function () {
  const baseScenes = {
    "scene_1_bella_story.html": {
      step: 1,
      mood: "Worried",
      title: "Bella and the Brave Little Voice",
      kicker: "Scene 1 · Outside the classroom",
      image: "../images/bella-scene1-refined.png",
      alt: "Bella outside her classroom, holding her notes and looking nervous.",
      lede: "Bella is standing beside the classroom door with her notes pressed to her chest. Inside, chairs scrape, friends whisper, and her brave little voice feels very small.",
      lines: [
        "Ms. Rivera has invited everyone to share one thing they learned this week. Bella knows her idea is good. She practiced it three times into her pillow.",
        "But now her heart is tapping fast. Her palms feel shiny. Her thoughts start drawing storm clouds: What if I forget? What if everyone laughs?",
        "Then Bella notices something tiny: her feet are still here. Her breath is still here. Maybe brave can start very, very small."
      ],
      prompt: "What should Bella try first?",
      feeling: "Bella's body is saying, 'This matters to me.' Nervous feelings can be a signal, not a stop sign.",
      choices: [
        { href: "scene2-standup.html", title: "Take one slow breath and step inside", note: "Bella lets courage be small, shaky, and real." },
        { href: "scene2-hide.html", title: "Stay in the hallway for a quiet moment", note: "Bella gives herself space, but the worry may grow louder." },
        { href: "scene2-pretend.html", title: "Pretend nothing is wrong", note: "Bella hides the feeling, even though it still needs care." }
      ]
    },
    "scene2-standup.html": {
      step: 2,
      mood: "Brave",
      title: "The Walk to the Front",
      kicker: "Scene 2 · Choosing courage",
      image: "../images/bella-scene2-speaking.png",
      alt: "Bella standing at the front of class, nervous but speaking.",
      lede: "Bella steps inside. Her knees feel wobbly, but every step is proof that she can move with a feeling instead of waiting for it to disappear.",
      lines: [
        "The room turns toward her. Bella nearly looks away, then she finds Ms. Rivera's kind eyes.",
        "Her first sentence comes out quiet. The second one lands a little stronger. By the third, she hears her own idea taking up space.",
        "A classmate nods. Another smiles. Bella's brave little voice is not loud yet, but it is awake."
      ],
      prompt: "What happens as Bella keeps going?",
      feeling: "Courage can feel like a racing heart and a clear choice at the same time.",
      choices: [
        { href: "scene_3_proud.html", title: "Finish the presentation and feel proud", note: "Bella discovers that trying counts." },
        { href: "scene3-runout.html", title: "Feel overwhelmed and rush out", note: "The feeling gets too big, and Bella needs support." },
        { href: "scene3-joke.html", title: "Make a joke to hide the nerves", note: "Laughter helps for a second, but Bella still wants to be understood." }
      ]
    },
    "scene2-hide.html": {
      step: 2,
      mood: "Unsure",
      title: "The Hallway Hideout",
      kicker: "Scene 2 · Taking space",
      image: "../images/bella-scene_3_missed.png",
      alt: "Bella sitting in a hallway, thinking quietly.",
      lede: "Bella sits under the coat hooks and pulls her knees close. The hallway is quieter, but her worry has followed her there.",
      lines: [
        "From inside the room, she hears a gentle clap. Someone else has shared. The door feels bigger than before.",
        "Bella presses one hand to her chest. Her heart is still racing, but the quiet gives her a chance to listen to it.",
        "She wonders: Am I hiding because I need a minute, or because I think I cannot try?"
      ],
      prompt: "What should Bella do with the quiet moment?",
      feeling: "Taking a pause can help. Staying hidden forever can make the next step feel larger.",
      choices: [
        { href: "scene3-missed.html", title: "Wait too long and miss the turn", note: "Bella learns that avoiding can bring disappointment." },
        { href: "scene4-share.html", title: "Ask Ms. Rivera for help", note: "Bella lets a trusted grown-up into the feeling." },
        { href: "scene2-standup.html", title: "Try again and walk inside", note: "Bella uses the pause as a bridge back to courage." }
      ]
    },
    "scene2-pretend.html": {
      step: 2,
      mood: "Masked",
      title: "The Smile That Felt Too Tight",
      kicker: "Scene 2 · Pretending",
      image: "../images/bella-pretend.png",
      alt: "Bella smiling even though she feels worried inside.",
      lede: "Bella puts on a bright smile and says, 'I'm fine.' The words sound neat and tidy, but inside she feels folded up.",
      lines: [
        "She laughs at the right time. She nods when people look over. She keeps her notes hidden under her notebook.",
        "Pretending works for a little while. Nobody asks questions. But Bella notices her stomach getting heavier.",
        "Sometimes feelings knock louder when they are not allowed to come in."
      ],
      prompt: "What does Bella do next?",
      feeling: "A pretend smile can be a shield, but Bella deserves care behind the shield too.",
      choices: [
        { href: "scene3-bottled.html", title: "Keep the worry bottled up", note: "The feeling gets crowded inside." },
        { href: "scene4-share.html", title: "Tell the teacher what is true", note: "Bella practices honesty with support." },
        { href: "scene3-joke.html", title: "Turn the feeling into a joke", note: "Humor helps, but it may hide what Bella needs." }
      ]
    },
    "scene_3_proud.html": {
      step: 3,
      mood: "Proud",
      title: "The Glow After Trying",
      kicker: "Scene 3 · A brave finish",
      image: "../images/bella-proud.png",
      alt: "Bella smiling proudly after sharing her idea.",
      lede: "Bella reaches the last sentence. Her voice shakes on one word, but she does not stop. When she finishes, the room feels warmer.",
      lines: [
        "Ms. Rivera says, 'Thank you for sharing that thoughtful idea.' Bella looks down and smiles at her shoes.",
        "The proud feeling is not fireworks. It is a small golden glow inside her chest.",
        "Bella realizes bravery is not about sounding perfect. It is about letting her real voice have a turn."
      ],
      prompt: "Where should this brave feeling go?",
      feeling: "Pride helps the brain remember, 'I can do hard things again.'",
      choices: [
        { href: "scene_5_calm.html", title: "Walk out calm and lighter", note: "Bella lets her body settle after the big moment." },
        { href: "scene_6_reflection.html", title: "Reflect on what helped", note: "Bella turns the moment into a tool for next time." },
        { href: "scene6-end.html", title: "Finish the story", note: "Celebrate the brave little voice." }
      ]
    },
    "scene3-runout.html": {
      step: 3,
      mood: "Overwhelmed",
      title: "When the Feeling Spills Over",
      kicker: "Scene 3 · Too much at once",
      image: "../images/scene3-runout.png",
      alt: "Bella rushing out because she feels overwhelmed.",
      lede: "Bella's words tangle. The room blurs. Before she can think, her feet carry her back into the hallway.",
      lines: [
        "She is not being naughty. She is not being silly. Her body has pressed the emergency button.",
        "In the hallway, Bella breathes in tiny sips. She wishes she had not run, and she also knows she needed help.",
        "Ms. Rivera steps out slowly and gives Bella space. 'You are safe. We can make this smaller.'"
      ],
      prompt: "What kind of help could make it smaller?",
      feeling: "Overwhelm is a big wave. Support can become a steady shore.",
      choices: [
        { href: "scene4-share.html", title: "Tell Ms. Rivera what happened inside", note: "Bella names the feeling instead of fighting it." },
        { href: "scene_5_calm.html", title: "Practice a reset and return later", note: "Bella learns a body-calming plan." },
        { href: "scene5-regret.html", title: "Walk away without talking", note: "Bella feels the heaviness of an unfinished moment." }
      ]
    },
    "scene3-joke.html": {
      step: 3,
      mood: "Deflecting",
      title: "The Joke That Covered the Worry",
      kicker: "Scene 3 · Hiding in laughter",
      image: "../images/scene3-joke.png",
      alt: "Bella joking while still feeling nervous.",
      lede: "Bella makes a silly joke. The class laughs, and for one bright second the worry ducks behind the sound.",
      lines: [
        "Everyone thinks Bella is being funny. Bella likes the laughter, but she also feels a pinch.",
        "She wanted them to hear her idea. Instead, they heard the joke she used as a hiding place.",
        "Bella can still choose again. A hidden feeling is not a failed feeling."
      ],
      prompt: "What should Bella do after the joke?",
      feeling: "Humor can be helpful, but it works best when it stands beside truth, not in front of it.",
      choices: [
        { href: "scene4-share.html", title: "Admit she felt nervous", note: "Bella lets the class see the real story." },
        { href: "scene3-bottled.html", title: "Keep joking and bottle it up", note: "The feeling stays tucked away." },
        { href: "scene_3_proud.html", title: "Try the presentation again", note: "Bella gives her idea a second chance." }
      ]
    },
    "scene3-missed.html": {
      step: 3,
      mood: "Disappointed",
      title: "The Turn That Passed By",
      kicker: "Scene 3 · Missing the moment",
      image: "../images/bella-scene3-missed.png",
      alt: "Bella sitting quietly after missing her chance.",
      lede: "By the time Bella opens the door, sharing time is over. Her notes feel heavy in her hand.",
      lines: [
        "Nobody is angry. That almost makes it harder. Bella wishes she had tried, even with a shaky voice.",
        "Ms. Rivera kneels beside her and says, 'Missing one turn does not mean you lose your voice.'",
        "Bella thinks about tomorrow. Maybe next time she can ask for a smaller step before the moment passes."
      ],
      prompt: "What can Bella do with disappointment?",
      feeling: "Regret can teach without being mean. It can point toward the next brave step.",
      choices: [
        { href: "scene4-share.html", title: "Talk to Ms. Rivera about another chance", note: "Bella turns regret into a plan." },
        { href: "scene5-regret.html", title: "Carry the disappointment alone", note: "The feeling gets heavier without words." },
        { href: "scene_6_reflection.html", title: "Reflect on what she needed", note: "Bella learns from the moment." }
      ]
    },
    "scene3-bottled.html": {
      step: 3,
      mood: "Crowded",
      title: "The Bottle Gets Too Full",
      kicker: "Scene 3 · Holding it in",
      image: "../images/scene3-bottled.png",
      alt: "Bella looking tired after keeping feelings inside.",
      lede: "Bella keeps saying she is fine. By lunch, the feeling has filled every corner of her chest.",
      lines: [
        "She snaps at a friend who only asked to borrow a pencil. Then she feels sorry right away.",
        "The worry was not gone. It was squeezed into a bottle, shaking harder and harder.",
        "Bella looks at her hands and whispers, 'I think I need to tell someone.'"
      ],
      prompt: "How can Bella open the bottle gently?",
      feeling: "Feelings need a safe way out: words, breath, movement, or help.",
      choices: [
        { href: "scene4-share.html", title: "Share the feeling with a trusted adult", note: "Bella opens the bottle safely." },
        { href: "scene_5_calm.html", title: "Use a calm-down plan first", note: "Bella gives her body a softer landing." },
        { href: "scene5-regret.html", title: "Ignore it until the day ends", note: "The feeling stays heavy." }
      ]
    },
    "scene4-share.html": {
      step: 4,
      mood: "Supported",
      title: "Words Make a Bridge",
      kicker: "Scene 4 · Asking for help",
      image: "../images/scene4-share.png",
      alt: "Bella talking with her teacher about her feelings.",
      lede: "Bella takes one slow breath and tells Ms. Rivera the truth: 'I wanted to share, but my worry got really loud.'",
      lines: [
        "Ms. Rivera does not rush her. She says, 'Thank you for telling me. We can make a plan together.'",
        "They choose three small steps: breathe, read the first line from the card, and look at one friendly face.",
        "Bella feels something loosen. The problem is still there, but now she is not carrying it by herself."
      ],
      prompt: "Which plan should Bella try?",
      feeling: "When a feeling is shared safely, it often becomes smaller and easier to hold.",
      choices: [
        { href: "scene_5_calm.html", title: "Practice the three-step calm plan", note: "Bella prepares her body for another try." },
        { href: "scene_3_proud.html", title: "Try sharing again with support", note: "Bella returns with a bridge under her feet." },
        { href: "scene_6_reflection.html", title: "Write down what helped", note: "Bella saves the strategy for next time." }
      ]
    },
    "scene_5_calm.html": {
      step: 5,
      mood: "Settling",
      title: "The Calm-Down Compass",
      kicker: "Scene 5 · Finding steady",
      image: "../images/scene5-calm.png",
      alt: "Bella walking calmly with a soft smile.",
      lede: "Bella and Ms. Rivera draw a tiny compass on the back of Bella's note card: breathe, name it, choose one step.",
      lines: [
        "Bella breathes in like she is smelling warm cocoa. She breathes out like she is cooling it down.",
        "She names the feeling: worried and hopeful. Then she chooses one step: read the first line.",
        "Her body starts to believe her. Not all at once, but enough."
      ],
      prompt: "What does Bella do with her new compass?",
      feeling: "A calming tool is not magic. It is practice that tells the body, 'I am safe enough to try.'",
      choices: [
        { href: "scene_3_proud.html", title: "Use the compass and try again", note: "Bella lets calm support courage." },
        { href: "scene_6_reflection.html", title: "Add the compass to her brave plan", note: "Bella remembers what worked." },
        { href: "scene6-end.html", title: "Carry the lesson forward", note: "Bella ends the day with a new tool." }
      ]
    },
    "scene5-regret.html": {
      step: 5,
      mood: "Heavy",
      title: "The Heavy Walk Home",
      kicker: "Scene 5 · Regret with kindness",
      image: "../images/scene5-regret.png",
      alt: "Bella walking away with regret.",
      lede: "Bella walks home slowly. The day keeps replaying in her mind, but this time she tries not to be cruel to herself.",
      lines: [
        "She did not make the choice she wanted. That is true. It is also true that she was scared.",
        "At home, Bella writes one sentence: Next time, I can ask for help before I hide.",
        "The sentence does not erase the regret, but it gives regret a job: help me grow."
      ],
      prompt: "How should Bella use what she learned?",
      feeling: "Kind reflection helps children learn without feeling ashamed.",
      choices: [
        { href: "scene_6_reflection.html", title: "Reflect and make a next-time plan", note: "Bella turns regret into wisdom." },
        { href: "scene4-share.html", title: "Go back and ask for support", note: "Bella practices repair." },
        { href: "scene_1_bella_story.html", title: "Restart and choose a new path", note: "Try the story again with what Bella learned." }
      ]
    },
    "scene_6_reflection.html": {
      step: 6,
      mood: "Thoughtful",
      title: "Bella's Quiet Reflection",
      kicker: "Scene 6 · Making meaning",
      image: "../images/scene6-reflection.png",
      alt: "Bella reflecting quietly under a tree.",
      lede: "Later, Bella sits under a tree and lets the whole day become a story she can understand.",
      lines: [
        "She remembers the hallway, the racing heart, the tight smile, the teacher's calm voice, and the tiny compass on her note card.",
        "Bella sees that every path taught her something. Even the hard paths had clues.",
        "She writes: My voice can be quiet and still matter. I can ask for help. I can try again."
      ],
      prompt: "What should the reader remember?",
      feeling: "Reflection turns experience into emotional skill.",
      choices: [
        { href: "scene6-end.html", title: "Open the final lesson", note: "See what Bella carries forward." },
        { href: "scene_1_bella_story.html", title: "Replay and choose differently", note: "Explore another emotional path." },
        { href: "../interactive-tools.html", title: "Try another interactive tool", note: "Keep practicing feelings skills." }
      ]
    },
    "scene6-end.html": {
      step: 7,
      mood: "Growing",
      title: "The Story You Choose",
      kicker: "Final scene · Bella's brave library",
      image: "../images/scene6-end.png",
      alt: "Bella walking forward with confidence.",
      lede: "Bella did not become brave because everything felt easy. She became brave because she learned how to listen to her feelings and choose with care.",
      lines: [
        "Some choices helped quickly. Some choices taught slowly. All of them gave Bella more information about herself.",
        "The next time her heart taps fast, Bella will remember: breathe, name it, choose one step, and ask for help when the feeling is too big.",
        "Your choices matter too. You can pause, repair, speak up, try again, and grow."
      ],
      prompt: "Choose your next step.",
      feeling: "Healthy little minds grow through practice, support, and gentle do-overs.",
      choices: [
        { href: "scene_1_bella_story.html", title: "Start again and choose a new path", note: "Replay Bella's story from the beginning." },
        { href: "../parents-tips.html", title: "Open parent tips", note: "Use Bella's story for a family conversation." },
        { href: "../interactive-tools.html", title: "Explore more tools", note: "Try another feelings activity." }
      ],
      ending: true
    }
  };

  function getLocale() {
    const parts = window.location.pathname.replace(/\\/g, "/").split("/").filter(Boolean);
    const first = (parts[0] || "").toLowerCase();
    return ["ja", "ko", "zh-cn", "zh-tw"].includes(first) ? first : "en";
  }

  function getRootPrefix() {
    const parts = window.location.pathname.replace(/\\/g, "/").split("/").filter(Boolean);
    const depth = Math.max(0, parts.length - 1);
    return depth ? "../".repeat(depth) : "";
  }

  const locale = getLocale();
  const rootPrefix = getRootPrefix();
  const localePack = window.bellaStoryLocales && window.bellaStoryLocales[locale] ? window.bellaStoryLocales[locale] : {};
  const scenes = Object.keys(baseScenes).reduce((result, key) => {
    result[key] = Object.assign({}, baseScenes[key], localePack.scenes && localePack.scenes[key] ? localePack.scenes[key] : {});
    return result;
  }, {});

  const ui = Object.assign({
    siteTitle: "Healthy Little Minds",
    storyName: "Bella's Choice Story",
    navLabel: "Story navigation",
    home: "Home",
    tools: "Tools",
    parentTips: "Parent tips",
    storyPath: "Story path",
    progressLabel: "Story progress",
    endingTitle: "Bella's take-away cards",
    endCards: [
      ["Breathe", "Give the body a safe signal before choosing."],
      ["Name it", "Feelings become clearer when they have words."],
      ["Choose one step", "Big courage often begins with one small action."]
    ],
    activitiesLabel: "Story activities",
    feelingTitle: "Feeling detective",
    feelingPrompt: "What do you think Bella is feeling here?",
    feelingGroupLabel: "Choose Bella's feeling",
    feelings: [
      { key: "Worried", label: "Worried" },
      { key: "Brave", label: "Brave" },
      { key: "Unsure", label: "Unsure" },
      { key: "Proud", label: "Proud" },
      { key: "Overwhelmed", label: "Overwhelmed" },
      { key: "Supported", label: "Supported" }
    ],
    breathTitle: "Bella's breath lights",
    breathPrompt: "Tap the lights slowly: breathe in, hold gently, breathe out.",
    breathLabels: ["Breathe in", "Hold gently", "Breathe out"],
    journalTitle: "Tiny reflection",
    journalPrompt: "What would you tell Bella right now?",
    journalPlaceholder: "Bella, you can...",
    restart: "Restart story",
    fallbackFeeling: "That could be part of Bella's feeling too.",
    feelingResponses: {
      Worried: "Yes. Bella may need reassurance, a smaller first step, and time to breathe.",
      Brave: "Exactly. Brave does not always feel strong. Sometimes it feels shaky and still moves.",
      Unsure: "That fits. Bella is deciding whether the pause will help her return or keep her stuck.",
      Masked: "Right. Bella is hiding the feeling so others cannot see it, but she can still care for it.",
      Proud: "Yes. Pride can be quiet and warm. It helps Bella remember that effort matters.",
      Overwhelmed: "That is a caring read. Bella needs safety first, then problem-solving.",
      Deflecting: "Yes. Jokes can protect a tender feeling, but Bella still deserves to be heard.",
      Disappointed: "That is it. Disappointment can become a next-time plan when it is treated kindly.",
      Crowded: "Right. Bottled feelings often need a safe opening.",
      Supported: "Exactly. Support makes the brave step feel less lonely.",
      Settling: "Yes. Bella's body is practicing how to come back to steady.",
      Heavy: "That fits. Regret feels heavy, but it can still teach gently.",
      Thoughtful: "Yes. Bella is turning a hard moment into wisdom.",
      Growing: "Beautiful. Growth means she can carry the lesson into the next brave moment."
    }
  }, localePack.ui || {});

  const sceneOrder = [
    "scene_1_bella_story.html",
    "scene2-standup.html",
    "scene2-hide.html",
    "scene2-pretend.html",
    "scene_3_proud.html",
    "scene3-runout.html",
    "scene3-joke.html",
    "scene3-missed.html",
    "scene3-bottled.html",
    "scene4-share.html",
    "scene_5_calm.html",
    "scene5-regret.html",
    "scene_6_reflection.html",
    "scene6-end.html"
  ];

  function getSceneKey() {
    const fromBody = document.body.getAttribute("data-scene");
    if (fromBody && scenes[fromBody]) return fromBody;
    const file = window.location.pathname.split("/").pop() || "scene_1_bella_story.html";
    return scenes[file] ? file : "scene_1_bella_story.html";
  }

  function saveVisit(sceneKey) {
    const raw = localStorage.getItem("bellaStoryVisits");
    const visits = raw ? JSON.parse(raw) : [];
    const next = visits.includes(sceneKey) ? visits : visits.concat(sceneKey);
    localStorage.setItem("bellaStoryVisits", JSON.stringify(next));
    return next;
  }

  function renderProgress(currentKey, visits) {
    const percent = Math.max(8, Math.round((scenes[currentKey].step / 7) * 100));
    return `
      <div class="story-side-card">
        <h2 class="side-title"><span>${ui.storyPath}</span><span>${scenes[currentKey].step}/7</span></h2>
        <div class="progress-track" aria-label="${ui.progressLabel}">
          <div class="progress-fill" style="--progress:${percent}%"></div>
        </div>
        <ul class="progress-list">
          ${sceneOrder.slice(0, 7).map((key) => {
            const item = scenes[key];
            const state = key === currentKey ? "is-current" : visits.includes(key) ? "is-seen" : "";
            return `<li class="${state}"><span class="progress-dot"></span><span>${item.kicker.split("·")[0].trim()}</span></li>`;
          }).join("")}
        </ul>
      </div>
    `;
  }

  function renderEndCard(scene) {
    if (!scene.ending) return "";
    return `
      <section class="story-end-card" aria-labelledby="endingTitle">
        <h2 id="endingTitle" class="side-title">${ui.endingTitle}</h2>
        <div class="end-grid">
          ${ui.endCards.map((card) => `<div class="end-card"><strong>${card[0]}</strong><span>${card[1]}</span></div>`).join("")}
        </div>
      </section>
    `;
  }

  function renderScene(sceneKey) {
    const scene = scenes[sceneKey];
    const visits = saveVisit(sceneKey);
    document.title = `${scene.title} | ${ui.siteTitle}`;
    const app = document.getElementById("bellaStoryApp");
    if (!app) return;

    app.innerHTML = `
      <div class="story-shell">
        <nav class="story-nav" aria-label="${ui.navLabel}">
          <a class="story-brand" href="../home.html">
            <span class="story-brand-mark">B</span>
            <span>${ui.storyName}</span>
          </a>
          <div class="story-nav-links">
            <a href="../home.html">${ui.home}</a>
            <a href="../interactive-tools.html">${ui.tools}</a>
            <a href="../parents-tips.html">${ui.parentTips}</a>
          </div>
        </nav>

        <main class="story-hero">
          <article class="scene-card" aria-labelledby="sceneTitle">
            <div class="scene-inner">
              <span class="story-kicker">${scene.kicker}</span>
              <h1 id="sceneTitle" class="scene-title">${scene.title}</h1>
              <p class="scene-lede">${scene.lede}</p>

              <div class="scene-stage">
                <div class="scene-art">
                  <img src="${scene.image.replace("../", rootPrefix)}" alt="${scene.alt}" />
                </div>
                <div class="story-text-card">
                  ${scene.lines.map((line) => `<p class="story-line">${line}</p>`).join("")}
                </div>
              </div>

              <section class="story-prompt" aria-labelledby="promptTitle">
                <strong id="promptTitle">${scene.prompt}</strong>
                <div class="choice-grid">
                  ${scene.choices.map((choice) => `
                    <a class="choice-card" href="${choice.href}">
                      <span class="choice-title">${choice.title}</span>
                      <span class="choice-note">${choice.note}</span>
                    </a>
                  `).join("")}
                </div>
              </section>

              ${renderEndCard(scene)}
            </div>
          </article>

          <aside class="story-side" aria-label="${ui.activitiesLabel}">
            ${renderProgress(sceneKey, visits)}
            <section class="story-side-card">
              <h2 class="side-title">${ui.feelingTitle}</h2>
              <p class="mini-note">${ui.feelingPrompt}</p>
              <div class="feeling-row" role="group" aria-label="${ui.feelingGroupLabel}">
                ${ui.feelings.map((mood) => `
                  <button class="feeling-chip${mood.key === scene.mood ? " is-active" : ""}" type="button" data-feeling="${mood.key}">${mood.label}</button>
                `).join("")}
              </div>
              <p class="feeling-response" aria-live="polite">${scene.feeling}</p>
            </section>

            <section class="story-side-card">
              <h2 class="side-title">${ui.breathTitle}</h2>
              <p class="mini-note">${ui.breathPrompt}</p>
              <div class="breathing-lights">
                <button class="breathing-light is-lit" type="button" aria-label="${ui.breathLabels[0]}"></button>
                <button class="breathing-light" type="button" aria-label="${ui.breathLabels[1]}"></button>
                <button class="breathing-light" type="button" aria-label="${ui.breathLabels[2]}"></button>
              </div>
            </section>

            <section class="story-side-card journal-box">
              <h2 class="side-title">${ui.journalTitle}</h2>
              <label class="mini-note" for="bellaJournal">${ui.journalPrompt}</label>
              <textarea id="bellaJournal" placeholder="${ui.journalPlaceholder}" maxlength="280"></textarea>
              <a class="story-pill-link" href="scene_1_bella_story.html">${ui.restart}</a>
            </section>
          </aside>
        </main>
      </div>
    `;

    wireInteractions(scene);
  }

  function wireInteractions(scene) {
    document.querySelectorAll(".feeling-chip").forEach((button) => {
      button.addEventListener("click", () => {
        document.querySelectorAll(".feeling-chip").forEach((chip) => chip.classList.remove("is-active"));
        button.classList.add("is-active");
        const feeling = button.getAttribute("data-feeling");
        const response = document.querySelector(".feeling-response");
        if (response) response.textContent = feeling === scene.mood ? scene.feeling : (ui.feelingResponses[feeling] || ui.fallbackFeeling);
      });
    });

    const lights = Array.from(document.querySelectorAll(".breathing-light"));
    lights.forEach((light, index) => {
      light.addEventListener("click", () => {
        lights.forEach((item) => item.classList.remove("is-lit"));
        light.classList.add("is-lit");
        const next = lights[index + 1] || lights[0];
        window.setTimeout(() => {
          if (document.body.contains(next)) {
            lights.forEach((item) => item.classList.remove("is-lit"));
            next.classList.add("is-lit");
          }
        }, 900);
      });
    });

    const journal = document.getElementById("bellaJournal");
    if (journal) {
      journal.value = localStorage.getItem("bellaStoryJournal") || "";
      journal.addEventListener("input", () => {
        localStorage.setItem("bellaStoryJournal", journal.value);
      });
    }
  }

  document.addEventListener("DOMContentLoaded", () => renderScene(getSceneKey()));
})();
