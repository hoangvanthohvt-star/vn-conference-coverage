(function () {
  const app = document.getElementById("app");
  const STORAGE_KEY = "kids-science-progress";

  function getProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function markComplete(unitId) {
    const progress = getProgress();
    progress[unitId] = true;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }

  function speak(text) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "zh-CN";
    utter.rate = 0.85;
    utter.pitch = 1.1;
    const voices = window.speechSynthesis.getVoices();
    const zhVoice = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith("zh"));
    if (zhVoice) utter.voice = zhVoice;
    window.speechSynthesis.speak(utter);
  }

  function confettiBurst() {
    const colors = ["#FF6B6B", "#FFD166", "#06D6A0", "#4D96FF", "#B15BE0"];
    for (let i = 0; i < 60; i++) {
      const piece = document.createElement("div");
      piece.className = "confetti-piece";
      piece.style.left = Math.random() * 100 + "vw";
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDuration = 1.8 + Math.random() * 1.4 + "s";
      piece.style.opacity = String(0.7 + Math.random() * 0.3);
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 3400);
    }
  }

  function el(tag, className, content) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (content !== undefined) node.innerHTML = content;
    return node;
  }

  // ---------- Home page ----------
  function renderHome() {
    const progress = getProgress();
    app.innerHTML = "";

    const header = el("header", "site-header");
    header.innerHTML = `
      <span class="mascot">${SUBJECT.mascot}</span>
      <h1>${SUBJECT.title}</h1>
      <p>${SUBJECT.subtitle}</p>
    `;
    app.appendChild(header);

    const grid = el("div", "unit-grid");
    UNITS.forEach((unit) => {
      const card = el("button", "unit-card");
      card.style.setProperty("--dot-color", unit.color);
      card.innerHTML = `
        <span class="icon">${unit.icon}</span>
        <span class="title">${unit.title}</span>
        ${progress[unit.id] ? '<span class="star">⭐</span>' : ""}
      `;
      card.addEventListener("click", () => {
        location.hash = "#/unit/" + unit.id;
      });
      grid.appendChild(card);
    });
    app.appendChild(grid);
  }

  // ---------- Unit page ----------
  function renderUnit(unitId) {
    const unit = UNITS.find((u) => u.id === unitId);
    if (!unit) {
      location.hash = "#/";
      return;
    }
    let slideIndex = 0;

    function renderSlides() {
      app.innerHTML = "";

      const back = el("button", "back-link", "← 回到乐园");
      back.addEventListener("click", () => (location.hash = "#/"));
      app.appendChild(back);

      const header = el("div", "unit-header");
      header.innerHTML = `<span class="icon">${unit.icon}</span><h2>${unit.title}</h2>`;
      app.appendChild(header);

      const dots = el("div", "progress-dots");
      dots.style.setProperty("--dot-color", unit.color);
      unit.slides.forEach((_, i) => {
        const dot = el("span", "dot" + (i === slideIndex ? " active" : ""));
        dots.appendChild(dot);
      });
      app.appendChild(dots);

      const slide = unit.slides[slideIndex];
      const card = el("div", "slide-card");
      card.innerHTML = `
        <div class="emoji">${slide.emoji}</div>
        <div class="text">${slide.text}</div>
        <button class="listen-button">🔊 听一听</button>
      `;
      card.querySelector(".listen-button").addEventListener("click", () => speak(slide.text));
      app.appendChild(card);

      const nav = el("div", "slide-nav");
      if (slideIndex > 0) {
        const prev = el("button", "big-button secondary", "上一页");
        prev.addEventListener("click", () => {
          slideIndex--;
          renderSlides();
        });
        nav.appendChild(prev);
      }
      const nextLabel = slideIndex === unit.slides.length - 1 ? "开始小测验 🎯" : "下一页 →";
      const next = el("button", "big-button", nextLabel);
      next.style.background = unit.color;
      next.addEventListener("click", () => {
        if (slideIndex === unit.slides.length - 1) {
          renderQuiz();
        } else {
          slideIndex++;
          renderSlides();
        }
      });
      nav.appendChild(next);
      app.appendChild(nav);

      speak(slide.text);
    }

    function renderQuiz() {
      let qIndex = 0;

      function renderQuestion() {
        app.innerHTML = "";

        const back = el("button", "back-link", "← 回到乐园");
        back.addEventListener("click", () => (location.hash = "#/"));
        app.appendChild(back);

        const header = el("div", "unit-header");
        header.innerHTML = `<span class="icon">${unit.icon}</span><h2>${unit.title} · 小测验</h2>`;
        app.appendChild(header);

        const dots = el("div", "progress-dots");
        dots.style.setProperty("--dot-color", unit.color);
        unit.quiz.forEach((_, i) => {
          const dot = el("span", "dot" + (i === qIndex ? " active" : ""));
          dots.appendChild(dot);
        });
        app.appendChild(dots);

        const question = unit.quiz[qIndex];
        const qCard = el("div", "quiz-question", `第 ${qIndex + 1} 题:${question.q}`);
        app.appendChild(qCard);

        const optionsWrap = el("div", "quiz-options");
        const feedback = el("div", "feedback");

        question.options.forEach((opt, i) => {
          const btn = el("button", "quiz-option");
          btn.innerHTML = `<span class="emoji">${opt.emoji}</span><span>${opt.text}</span>`;
          btn.addEventListener("click", () => {
            if (i === question.answer) {
              btn.classList.add("correct");
              feedback.textContent = "答对啦!真棒! 🎉";
              feedback.className = "feedback good";
              speak("答对啦,真棒!");
              confettiBurst();
              Array.from(optionsWrap.children).forEach((c) => (c.disabled = true));
              setTimeout(() => {
                if (qIndex < unit.quiz.length - 1) {
                  qIndex++;
                  renderQuestion();
                } else {
                  renderComplete();
                }
              }, 1200);
            } else {
              btn.classList.add("wrong");
              feedback.textContent = "再试一次哦!";
              feedback.className = "feedback retry";
              speak("再试一次");
              setTimeout(() => btn.classList.remove("wrong"), 500);
            }
          });
          optionsWrap.appendChild(btn);
        });

        app.appendChild(optionsWrap);
        app.appendChild(feedback);

        speak(question.q);
      }

      renderQuestion();
    }

    function renderComplete() {
      markComplete(unit.id);
      app.innerHTML = "";
      const screen = el("div", "complete-screen");
      screen.innerHTML = `
        <div class="big-emoji">🏆</div>
        <h2>太棒了!你完成了「${unit.title}」!</h2>
        <p style="font-size:20px;">你是小小科学家 ${SUBJECT.mascot}</p>
      `;
      const nav = el("div", "slide-nav");
      const again = el("button", "big-button secondary", "再学一遍");
      again.addEventListener("click", () => {
        slideIndex = 0;
        renderSlides();
      });
      const home = el("button", "big-button", "回到乐园");
      home.style.background = unit.color;
      home.addEventListener("click", () => (location.hash = "#/"));
      nav.appendChild(again);
      nav.appendChild(home);
      screen.appendChild(nav);
      app.appendChild(screen);
      confettiBurst();
      speak("太棒了,你完成了这个单元!");
    }

    renderSlides();
  }

  // ---------- Router ----------
  function route() {
    window.speechSynthesis && window.speechSynthesis.cancel();
    const hash = location.hash.replace(/^#\/?/, "");
    if (hash.startsWith("unit/")) {
      renderUnit(hash.slice("unit/".length));
    } else {
      renderHome();
    }
  }

  window.addEventListener("hashchange", route);
  window.addEventListener("DOMContentLoaded", route);
  if (document.readyState !== "loading") route();

  // Some browsers load voices asynchronously.
  if ("speechSynthesis" in window) {
    window.speechSynthesis.onvoiceschanged = () => {};
  }
})();
