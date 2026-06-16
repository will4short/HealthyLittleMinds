(function () {
  const config = window.storySadContent;
  if (!config) return;

  const byId = id => document.getElementById(id);
  const scenes = config.scenes;
  const totalScenes = config.totalScenes || 5;

  byId("brandText").textContent = config.brand || "Healthy Little Minds";
  byId("charactersLink").textContent = config.nav.characters;
  byId("parentGuideLink").textContent = config.nav.parentGuide;
  byId("activitiesLink").textContent = config.nav.activities;
  byId("kickerHero").textContent = config.hero.kicker;
  byId("heroTitle").textContent = config.hero.title;
  byId("heroLead").textContent = config.hero.lead;
  byId("startStory").textContent = config.hero.start;
  byId("secondaryStory").textContent = config.hero.secondary;
  byId("heroNote").textContent = config.hero.note;
  byId("meterKicker").textContent = config.side.meterKicker;
  byId("meterTitle").textContent = config.side.meterTitle;
  byId("talkKicker").textContent = config.side.talkKicker;
  byId("talkTitle").textContent = config.side.talkTitle;
  byId("grownupKicker").textContent = config.side.grownupKicker;
  byId("grownupTitle").textContent = config.side.grownupTitle;
  byId("grownupText").textContent = config.side.grownupText;
  byId("parentGuideButton").textContent = config.side.parentGuideButton;
  byId("destinyResourceButton").textContent = config.side.destinyResourceButton;
  byId("completeTitle").textContent = config.complete.title;
  byId("completeText").textContent = config.complete.text;
  byId("completeDestiny").textContent = config.complete.destiny;
  byId("completeTips").textContent = config.complete.tips;
  byId("completePrintables").textContent = config.complete.printables;

  const sceneTitle = byId("sceneTitle");
  const sceneText = byId("sceneText");
  const destinyThought = byId("destinyThought");
  const choices = byId("choices");
  const progressText = byId("progressText");
  const progressFill = byId("progressFill");
  const feelingText = byId("feelingText");
  const meterNote = byId("meterNote");
  const reflectionList = byId("reflectionList");
  const completionCard = byId("completionCard");
  const dots = Array.from(document.querySelectorAll(".feeling-dot"));

  function renderScene(key) {
    const scene = scenes[key] || scenes.start;
    sceneTitle.textContent = scene.title;
    sceneText.textContent = scene.text;
    destinyThought.textContent = scene.thought;
    progressText.textContent = config.progress
      .replace("{step}", scene.step)
      .replace("{total}", totalScenes);
    feelingText.textContent = scene.feelingText;
    meterNote.textContent = scene.meterNote;
    progressFill.style.width = `${Math.max(20, scene.step * 20)}%`;
    completionCard.classList.toggle("is-visible", Boolean(scene.complete));

    dots.forEach((dot, index) => {
      dot.classList.toggle("is-filled", index < scene.feeling);
    });

    reflectionList.innerHTML = scene.questions
      .map(question => `<li>${question}</li>`)
      .join("");

    choices.innerHTML = scene.choices
      .map(choice => `
        <button class="choice-btn no-loader" type="button" data-next="${choice.next}">
          <span>
            <strong>${choice.label}</strong>
            ${choice.helper}
          </span>
        </button>
      `)
      .join("");
  }

  choices.addEventListener("click", event => {
    const button = event.target.closest("[data-next]");
    if (!button) return;
    renderScene(button.dataset.next);
    byId("story-player").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  renderScene("start");
})();
