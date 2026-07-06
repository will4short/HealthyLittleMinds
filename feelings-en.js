(function () {
  "use strict";

  var books = {
    storm: {
      title: "Calm the Storm Inside",
      image: "images/storm-book-cover.webp",
      text: "A story for noticing big feelings, slowing down, and choosing safe next steps.",
      url: "https://heyzine.com/flip-book/3cf1027650.html"
    },
    scared: {
      title: "When I Feel Scared",
      image: "images/when-i-feel-scared-bkcover.webp",
      text: "A gentle story for naming fear, checking safety, and asking for support.",
      url: "https://heyzine.com/flip-book/1f4337da92.html"
    },
    feelings: {
      title: "When My Feelings Get Too Big",
      image: "images/when-my-feelings-cover.webp",
      text: "A practical story about breathing, body signals, and asking for help.",
      url: "https://heyzine.com/flip-book/5cbe03c993.html"
    },
    destiny: {
      title: "The Day Destiny Wanted To Quit",
      image: "images/The_Day_Destiny_Wanted_To_Quit.webp",
      text: "A story about discouragement, persistence, and finding one small next step.",
      url: "https://heyzine.com/flip-book/8736fac672.html"
    },
    little: {
      title: "Little Acts, Big Feelings",
      image: "images/little-acts-book-cover.webp",
      text: "A story about kindness, connection, and the small choices that shape feelings.",
      url: "https://heyzine.com/flip-book/034942038a.html"
    }
  };

  var feelings = {
    anger: {
      emoji: "😡",
      title: "Anger",
      description: "Help children understand anger as useful information while keeping behaviour safe.",
      lead: "Anger can appear when something feels unfair, unsafe, blocked, or important. The feeling is allowed. Hurting yourself, another person, or property is not. Children need help separating the emotion from the action.",
      say: "I am angry. I need to calm my body before I talk.",
      causesTitle: "When anger might appear",
      causes: [
        ["Something feels unfair", "Being excluded, interrupted, blamed, or treated differently can make anger rise quickly."],
        ["A need has not been noticed", "Hunger, tiredness, noise, sensory overload, or not feeling heard can make the body more reactive."],
        ["Frustration has built up", "Repeated difficulty can turn into anger when a child feels stuck or powerless."]
      ],
      stepsTitle: "What to try next",
      steps: [
        ["Create safe space", "Move away from the conflict if possible. Safety comes before problem-solving."],
        ["Use safe physical effort", "Push a wall, squeeze a cushion, stretch, or take a brisk walk with an adult nearby."],
        ["Use an expression sentence", "Try: “I am angry because ____. I need ____.” Keep the sentence short and specific."]
      ],
      adult: "Start with safety and co-regulation. Speak less during the emotional peak. When the child is calmer, help repair harm, name the need, and choose a more helpful response for next time.",
      books: ["storm", "feelings"]
    },
    sadness: {
      emoji: "😢",
      title: "Sadness",
      description: "Help children understand sadness, loss, disappointment, and the need for comfort.",
      lead: "Sadness can follow loss, disappointment, rejection, loneliness, change, or missing someone. It is not a problem to remove quickly. It is often a sign that something mattered and needs care.",
      say: "I feel sad. I do not need to rush. I can ask someone safe to stay with me.",
      causesTitle: "When sadness might appear",
      causes: [
        ["Something or someone is missed", "A person, pet, place, routine, or object may be absent or changed."],
        ["A hope did not happen", "Children can feel sadness when plans change, efforts do not work out, or expectations fall through."],
        ["Connection feels uncertain", "Feeling left out, misunderstood, or rejected can make the body want quiet, tears, or closeness."]
      ],
      stepsTitle: "What to try next",
      steps: [
        ["Allow the feeling", "Crying, resting, or being quiet can be part of caring for sadness."],
        ["Share the story", "Tell a trusted person what happened, what changed, or what is being missed."],
        ["Choose gentle support", "Draw, hold a soft object, sit with someone safe, listen to calm audio, or take a slow walk."]
      ],
      adult: "Do not rush a child into feeling happy. Offer presence first. If sadness continues to affect sleep, eating, school, safety, or daily life, seek support from an appropriate professional.",
      books: ["destiny", "little"]
    },
    joy: {
      emoji: "😄",
      title: "Joy",
      description: "Help children notice, share, and remember joy without overwhelming themselves or others.",
      lead: "Joy can appear when something feels enjoyable, meaningful, connecting, funny, successful, or satisfying. Joy may be loud and energetic, but it can also be quiet, peaceful, or private.",
      say: "I feel joyful. I can enjoy this moment and notice whether others want to join in.",
      causesTitle: "When joy might appear",
      causes: [
        ["A meaningful moment happens", "Playing, creating, reading, learning, or being included can bring bright energy."],
        ["Effort leads to progress", "Finishing something hard, learning a skill, or trying again can feel satisfying."],
        ["Connection feels safe", "Shared laughter, kindness, celebration, or being understood can strengthen joy."]
      ],
      stepsTitle: "What to try next",
      steps: [
        ["Name what helped", "Say what made the moment feel good. This helps children notice patterns that support wellbeing."],
        ["Share respectfully", "Invite someone into the joy without demanding that they feel the same way."],
        ["Save the memory", "Draw it, write one sentence, take a photo with permission, or tell someone the story later."]
      ],
      adult: "Join the child’s joy when you can. Help them notice context, volume, consent, and other people’s boundaries without shaming their excitement.",
      books: ["little", "destiny"]
    },
    fear: {
      emoji: "😨",
      title: "Fear",
      description: "Help children understand fear, check safety, and take small supported steps.",
      lead: "Fear helps us notice possible danger or uncertainty and seek safety. Sometimes fear responds to real danger. Sometimes it responds to memory, imagination, unfamiliar situations, or not knowing what will happen.",
      say: "I feel afraid. Please help me check what is safe and choose one small next step.",
      causesTitle: "When fear might appear",
      causes: [
        ["Something feels unsafe", "Loud sounds, conflict, injury, separation, darkness, or unfamiliar places can activate the body’s alarm system."],
        ["The next step is unknown", "Not knowing what will happen can make the brain search for danger."],
        ["A memory or story is triggered", "Something seen, heard, imagined, or remembered can make fear feel present again."]
      ],
      stepsTitle: "What to try next",
      steps: [
        ["Check safety first", "Find a trusted adult and name what feels frightening. Do not force a child to face fear alone."],
        ["Use grounding", "Name five things you can see, four things you can feel, and one person who can help."],
        ["Make the step smaller", "If it is safe to continue, choose a tiny next step with support and permission to pause."]
      ],
      adult: "Validate the fear before teaching a strategy. Distinguish between real danger, uncertainty, and remembered fear. If fear is persistent, intense, or limiting daily life, seek appropriate professional support.",
      books: ["scared", "feelings"]
    },
    calm: {
      emoji: "🌿",
      title: "Calm",
      description: "Help children notice calm, practise regulation, and remember what supports steadiness.",
      lead: "Calm is not the absence of all emotion. It is a state where the body has enough safety and space to rest, listen, think, connect, or choose. Calm can be quiet, active, creative, or relational.",
      say: "I notice some calm in my body. I can remember what helped me feel safe.",
      causesTitle: "When calm might appear",
      causes: [
        ["The environment feels safe", "Predictable routines, trusted adults, softer sensory input, and enough rest can support calm."],
        ["A feeling has been understood", "Being heard and not rushed can help the nervous system settle."],
        ["Regulation has been practised", "Breathing, movement, music, drawing, nature, and connection work best when practised before big feelings arrive."]
      ],
      stepsTitle: "What to try next",
      steps: [
        ["Notice body clues", "Look for softer shoulders, slower breathing, steadier thoughts, or a less urgent body."],
        ["Build a calm list", "Write or draw three things that help calm return."],
        ["Practise when it is easy", "Use calming tools during ordinary moments, not only during distress."]
      ],
      adult: "Notice what helped rather than demanding calm. Co-regulation, predictable routines, and emotionally safe relationships make regulation tools easier to use.",
      books: ["storm", "feelings"]
    }
  };

  function esc(text) {
    return String(text).replace(/[&<>"]/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[character];
    });
  }

  function cards(items) {
    return items.map(function (item) {
      return '<article class="insight-card"><h3>' + esc(item[0]) + '</h3><p>' + esc(item[1]) + '</p></article>';
    }).join("");
  }

  function steps(items) {
    return items.map(function (item) {
      return '<li><strong>' + esc(item[0]) + '</strong><br>' + esc(item[1]) + '</li>';
    }).join("");
  }

  function bookCards(keys) {
    return keys.map(function (key) {
      var book = books[key];
      return '<article class="resource-card"><img src="' + esc(book.image) + '" alt="' + esc(book.title) + ' cover"><h3>' + esc(book.title) + '</h3><p>' + esc(book.text) + '</p><a class="read-button" target="_blank" rel="noopener" href="' + esc(book.url) + '">Read story</a></article>';
    }).join("");
  }

  var app = document.getElementById("feelingApp");
  if (!app) return;

  var feeling = feelings[app.dataset.feeling];
  if (!feeling) return;

  document.title = feeling.title + " - Healthy Little Minds";
  var description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", feeling.description);

  app.innerHTML = '<a class="breadcrumb" href="more-feelings.html">&larr; Explore more feelings</a>' +
    '<section class="feeling-hero"><div><span class="feeling-emoji" aria-hidden="true">' + feeling.emoji + '</span><p class="kicker">Understand a feeling</p><h1>' + esc(feeling.title) + '</h1><p class="feeling-lead">' + esc(feeling.lead) + '</p></div><aside class="hero-prompt"><h2>Try saying</h2><p>“' + esc(feeling.say) + '”</p></aside></section>' +
    '<section class="guide-section"><h2>' + esc(feeling.causesTitle) + '</h2><div class="card-grid">' + cards(feeling.causes) + '</div></section>' +
    '<div class="two-column"><section class="panel"><h2>' + esc(feeling.stepsTitle) + '</h2><ol class="steps">' + steps(feeling.steps) + '</ol></section><aside class="support-card"><h2>For parents and teachers</h2><p>' + esc(feeling.adult) + '</p></aside></div>' +
    '<section class="resource-panel"><h2>Stories to read together</h2><div class="resource-grid">' + bookCards(feeling.books) + '</div></section>' +
    '<nav class="feeling-resource-actions" aria-label="Related pages"><a href="home.html#feelings">Home feelings area</a><a href="interactive-tools.html">Feeling tools</a><a href="parents.html">For parents</a></nav>';
})();
