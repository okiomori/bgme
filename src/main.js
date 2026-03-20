(function () {
  const questCards = [
    {
      id: "story",
      label: "Main",
      title: "Хроника руин",
      subtitle: "Собор листвы",
      accent: "azure",
      status: "Открыто",
      progress: "1 / 25",
      cost: "AP 0",
      description:
        "Базовая chapter-карта: живописное небо, глубокая перспектива и высокий вертикальный силуэт, чтобы сразу ощущался масштаб мира.",
    },
    {
      id: "raid",
      label: "Raid",
      title: "Погреб стражей",
      subtitle: "Запечатано",
      accent: "sage",
      status: "Закрыто",
      progress: "0 / 12",
      cost: "AP 14",
      description:
        "Карточка для тяжёлых рейдов с холодной зеленью и почти монохромным тоном. Важно, чтобы закрытые секции не выбивались стилистически.",
    },
    {
      id: "gathering",
      label: "Collect",
      title: "Тихие оранжереи",
      subtitle: "Материалы",
      accent: "dusk",
      status: "Закрыто",
      progress: "0 / 8",
      cost: "AP 8",
      description:
        "Фермерские маршруты держат ту же художественную пластику: никакой мобильной кислотности, только мягкая архитектурная графика и туман.",
    },
    {
      id: "trial",
      label: "Practice",
      title: "Чертог резонанса",
      subtitle: "Тренировка",
      accent: "ember",
      status: "Открыто",
      progress: "3 / 3",
      cost: "AP 0",
      description:
        "Экран тренировки становится стилизованной ритуальной камерой. Здесь можно позже привязать тактические симуляции перед большим боем.",
    },
    {
      id: "event",
      label: "Event",
      title: "Хор мольб",
      subtitle: "Временная глава",
      accent: "night",
      status: "NEW",
      progress: "10 / 18",
      cost: "AP 12",
      description:
        "Временные события получают собственный арт-якорь, но всё ещё остаются внутри той же moss-gothic палитры и системы рамок.",
    },
  ];

  const heroStats = [
    ["Сила отряда", "3226"],
    ["HP", "1583"],
    ["Атака", "162"],
    ["Защита", "121"],
    ["Ловкость", "1200"],
    ["Крит. шанс", "10%"],
    ["Крит. урон", "150%"],
  ];

  const materials = [
    {
      name: "Камень усиления: малый",
      description: "0 / 1 · для первой ступени пробуждения",
      count: "0",
    },
    {
      name: "Камень усиления: средний",
      description: "0 / 0 · для разблокировки активного навыка",
      count: "0",
    },
    {
      name: "Камень усиления: большой",
      description: "0 / 0 · для прорыва лимита героя",
      count: "0",
    },
    {
      name: "Семя витражного мха",
      description: "1 / 3 · редкий катализатор из храмовых руин",
      count: "1",
    },
  ];

  const screenButtons = document.querySelectorAll("[data-screen-target]");
  const screens = document.querySelectorAll("[data-screen]");
  const railButtons = document.querySelectorAll(".rail-button");
  const dockButtons = document.querySelectorAll(".dock-button");
  const questCardsContainer = document.getElementById("quest-cards");
  const questTitle = document.getElementById("quest-title");
  const questDescription = document.getElementById("quest-description");
  const questStatus = document.getElementById("quest-status");
  const questProgress = document.getElementById("quest-progress");
  const questCost = document.getElementById("quest-cost");
  const heroStatsContainer = document.getElementById("hero-stats");
  const materialList = document.getElementById("material-list");

  const state = {
    activeScreen: "home",
    activeQuestId: questCards[0].id,
  };

  function renderQuestCards() {
    questCardsContainer.innerHTML = questCards
      .map(
        (card) => `
          <button class="quest-card ${
            card.id === state.activeQuestId ? "is-selected" : ""
          }" data-quest-id="${card.id}" data-accent="${card.accent}">
            <div class="quest-card-inner">
              <span class="quest-label">${card.label}</span>
              <div class="quest-title-stack">
                <span class="quest-title-vertical">${card.title}</span>
                <span class="quest-subtitle">${card.subtitle}</span>
              </div>
              <div class="quest-card-footer">
                <div>
                  <div>${card.cost}</div>
                  <div class="quest-progress">${card.progress}</div>
                </div>
                <span class="quest-status ${
                  card.status === "Закрыто" ? "locked" : ""
                }">${card.status}</span>
              </div>
            </div>
          </button>
        `,
      )
      .join("");

    questCardsContainer.querySelectorAll("[data-quest-id]").forEach((button) => {
      button.addEventListener("click", () => {
        state.activeQuestId = button.dataset.questId;
        renderQuestCards();
        updateQuestOverview();
      });
    });
  }

  function updateQuestOverview() {
    const activeQuest = questCards.find((quest) => quest.id === state.activeQuestId);
    if (!activeQuest) {
      return;
    }

    questTitle.textContent = activeQuest.title;
    questDescription.textContent = activeQuest.description;
    questStatus.textContent = activeQuest.status;
    questProgress.textContent = activeQuest.progress;
    questCost.textContent = activeQuest.cost;
  }

  function renderHeroStats() {
    heroStatsContainer.innerHTML = heroStats
      .map(
        ([label, value]) => `
          <div class="stat-row">
            <span>${label}</span>
            <strong>${value}</strong>
          </div>
        `,
      )
      .join("");
  }

  function renderMaterials() {
    materialList.innerHTML = materials
      .map(
        (material) => `
          <div class="material-card">
            <div class="material-icon"></div>
            <div class="material-copy">
              <h3>${material.name}</h3>
              <p>${material.description}</p>
            </div>
            <div class="material-control">
              <span class="material-count">${material.count}</span>
              <div class="material-plus">+</div>
            </div>
          </div>
        `,
      )
      .join("");
  }

  function setActiveScreen(screenName) {
    state.activeScreen = screenName;
    document.body.dataset.screen = screenName;
    if (window.location.hash !== `#${screenName}`) {
      window.location.hash = screenName;
    }

    screens.forEach((screen) => {
      screen.classList.toggle("is-active", screen.dataset.screen === screenName);
    });

    railButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.screenTarget === screenName);
    });

    dockButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.screenTarget === screenName);
    });
  }

  screenButtons.forEach((button) => {
    if (button.disabled) {
      return;
    }

    button.addEventListener("click", () => {
      const { screenTarget } = button.dataset;
      if (screenTarget) {
        setActiveScreen(screenTarget);
      }
    });
  });

  function startAmbientCanvas() {
    const canvas = document.getElementById("ambient-canvas");
    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const particles = [];
    const particleCount = Math.min(46, Math.max(20, Math.round(window.innerWidth / 34)));

    function resize() {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    }

    function seedParticle() {
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: 1 + Math.random() * 3.2,
        speedX: -0.15 + Math.random() * 0.3,
        speedY: -0.1 + Math.random() * 0.22,
        alpha: 0.18 + Math.random() * 0.28,
        hue: 110 + Math.random() * 70,
      };
    }

    function populate() {
      particles.length = 0;
      for (let index = 0; index < particleCount; index += 1) {
        particles.push(seedParticle());
      }
    }

    function animate() {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < -20 || particle.x > window.innerWidth + 20 || particle.y < -20) {
          Object.assign(particle, seedParticle(), {
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + Math.random() * 24,
          });
        }

        const gradient = context.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * 4.5,
        );
        gradient.addColorStop(0, `hsla(${particle.hue}, 72%, 88%, ${particle.alpha})`);
        gradient.addColorStop(0.45, `hsla(${particle.hue}, 68%, 74%, ${particle.alpha * 0.52})`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 80%, 42%, 0)`);

        context.fillStyle = gradient;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius * 4.5, 0, Math.PI * 2);
        context.fill();
      });

      requestAnimationFrame(animate);
    }

    resize();
    populate();
    animate();
    window.addEventListener("resize", () => {
      resize();
      populate();
    });
  }

  renderQuestCards();
  updateQuestOverview();
  renderHeroStats();
  renderMaterials();
  const initialScreen = window.location.hash.replace("#", "");
  if (initialScreen) {
    setActiveScreen(initialScreen);
  }
  startAmbientCanvas();
})();
