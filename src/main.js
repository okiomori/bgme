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
      route: [
        {
          label: "Вход",
          title: "Разломанный вестибюль",
          body: "Партия входит в зал, где камень уже зарос мягким мхом и слышен голос проводницы.",
        },
        {
          label: "Лор",
          title: "Дневник архитектора",
          body: "Вы находите листы с рисунками святилища. Они открывают короткий путь к верхнему мосту.",
        },
        {
          label: "Стычка",
          title: "Слепые корнееды",
          body: "Нечисть тянется из влажных трещин и проверяет первый строй отряда.",
        },
        {
          label: "Передышка",
          title: "Оранжерея тумана",
          body: "В теплице можно восстановить люмен и отметить редкий ресурс на будущую вылазку.",
        },
        {
          label: "Boss",
          title: "Немый колосс",
          body: "Финальный узел главы. Здесь поднимается мшистый страж и запускает большой бой за корень памяти.",
        },
      ],
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
      route: [
        { label: "Вход", title: "Осушенный шлюз", body: "Рейд начинается ниже линии воды, у голых опор древнего города." },
        { label: "Элита", title: "Каменная псалтырь", body: "Ложный алтарь активирует тяжёлых стражей поддержки." },
        { label: "Лут", title: "Глухой склад", body: "Здесь лежат редкие компоненты для тяжёлого вооружения Риана." },
        { label: "Порог", title: "Сломанный контрфорс", body: "Команда выбирает между коротким мостом и опасным обходом по стене." },
        { label: "Boss", title: "Нижний хранитель", body: "Большой элитный страж проверяет прочность фронтовой линии." },
      ],
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
      route: [
        { label: "Сбор", title: "Канава семян", body: "Старт у влажного коридора, где можно собирать мох и стеклянные травы." },
        { label: "Поиск", title: "Распавшийся питомник", body: "Ноэль отмечает скрытые тайники на старой планировке сада." },
        { label: "Угроза", title: "Шорох под водой", body: "Из дренажа поднимается мелкая нечисть и разгоняет сборщиков." },
        { label: "Ресурс", title: "Карманная роща", body: "Спокойный узел с повышенным шансом на редкий катализатор." },
        { label: "Выход", title: "Складной мост", body: "Небольшой страж закрывает маршрут, но даёт бонусный ресурс после победы." },
      ],
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
      route: [
        { label: "Вход", title: "Круг отклика", body: "Персонажи повторяют комбинации в безопасной симуляции святилища." },
        { label: "Комбо", title: "Люмен-связка", body: "Лиора и Ноэль проверяют, как работают связки контроля по инициативе." },
        { label: "Пролом", title: "Щит и разлом", body: "Риан тренирует тайминг блока и пролома под босса." },
        { label: "Охота", title: "Красная метка", body: "Сайя отрабатывает быстрый заход в тыл и ослабление приоритетной цели." },
        { label: "Итог", title: "Ритуал завершён", body: "Испытание закрывается и даёт небольшую награду на весь состав." },
      ],
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
      route: [
        { label: "Зов", title: "Хор во мху", body: "Событие начинается с аномального пения в арочном саду." },
        { label: "Выбор", title: "Две реликвии", body: "Нужно решить, кого усилить: проводницу, охотницу или весь состав сразу." },
        { label: "Стычка", title: "Стая шелкокрылов", body: "Лёгкая волна врагов проверяет устойчивость задней линии." },
        { label: "Лор", title: "Страница без чернил", body: "Редкая запись меняет описание будущей босc-фазы и добавляет контекст миру." },
        { label: "Boss", title: "Красный распев", body: "Финал события с временным элитным существом на мотиве моли и соборной акустики." },
      ],
    },
  ];

  const heroes = [
    {
      id: "liora",
      accent: "#c8f0e1",
      tag: "Support",
      name: "Лиора",
      role: "Проводница мха",
      epithet: "Держит маршрут в живой тишине",
      quote: "“Руины отвечают тем, кто умеет слушать медленно.”",
      summary: "Полупрозрачный силуэт, длинные световые волосы и круг навигации за спиной.",
      silhouette:
        "Высокая тонкая фигура, узкие плечи, длинные пряди и мягкий колокол плаща. Считывается как световой маяк даже в маленькой капсуле.",
      materialsCopy:
        "Пергаментная ткань, эмаль цвета росы, светящийся мох и тонкое витражное золото по краям одежды.",
      steamPose:
        "Поворот в три четверти, ладонь с люменом впереди, нимб и волосы собирают узнаваемый силуэт в main capsule.",
      palette: [
        ["Кость", "#efe5d6"],
        ["Роса", "#b9e0d5"],
        ["Мох", "#6e9d88"],
        ["Ночь", "#1d2623"],
      ],
      stats: [
        ["Сила отряда", "3226"],
        ["HP", "1583"],
        ["Атака", "162"],
        ["Защита", "121"],
        ["Контроль", "S"],
        ["Крит. шанс", "10%"],
      ],
      skills: [
        {
          name: "Люмен-маркер",
          description: "Подсвечивает слабое место стража и раскрывает скрытые проходы на карте.",
        },
        {
          name: "Мягкий разворот",
          description: "Перенаправляет атаку врага и даёт отряду окно для перегруппировки.",
        },
      ],
      materials: [
        {
          name: "Семя витражного мха",
          description: "1 / 3 · катализатор проводников святилища",
          count: "1",
        },
        {
          name: "Слой древнего пергамента",
          description: "0 / 2 · усиливает навигационные сигилы",
          count: "0",
        },
        {
          name: "Малый люмен-камень",
          description: "2 / 4 · базовое пробуждение поддержки",
          count: "2",
        },
      ],
    },
    {
      id: "rian",
      accent: "#b1c88d",
      tag: "Vanguard",
      name: "Риан",
      role: "Камнерез святилищ",
      epithet: "Поднимает арку там, где остальные видят завал",
      quote: "“Если тропа осыпалась, я выбью новую.”",
      summary: "Широкий корпус, тяжёлый молот-мегалит и плащ из коры. Это фронтовой силуэт для Steam key art.",
      silhouette:
        "Широкий торс, короткая шея, прямоугольный молот и массивный плащ. На фоне руин читается как движущийся обелиск.",
      materialsCopy:
        "Каменная кожа, бронзовые заклёпки, жёсткая кора, зелёный лишайник и матовая сталь без sci-fi блеска.",
      steamPose:
        "Полуоборот вперёд с молотом на плече. В вертикальной капсуле контраст даёт большой прямоугольный силуэт оружия.",
      palette: [
        ["Песок", "#d1b88f"],
        ["Кора", "#6e5a45"],
        ["Лишайник", "#88a06c"],
        ["Базальт", "#1d1d19"],
      ],
      stats: [
        ["Сила отряда", "3488"],
        ["HP", "1924"],
        ["Атака", "149"],
        ["Защита", "184"],
        ["Блок", "78%"],
        ["Устойчивость", "A"],
      ],
      skills: [
        {
          name: "Опорная арка",
          description: "Ставит каменную преграду и открывает безопасный коридор для отряда.",
        },
        {
          name: "Глухой удар",
          description: "Ломает броню стражей и сбивает телеграф крупных атак.",
        },
      ],
      materials: [
        {
          name: "Ядро монолита",
          description: "0 / 2 · нужно для усиления молота",
          count: "0",
        },
        {
          name: "Спрессованный мох",
          description: "3 / 5 · стабилизирует броню и плечи",
          count: "3",
        },
        {
          name: "Средний камень пробуждения",
          description: "1 / 2 · открывает навык контроля линии",
          count: "1",
        },
      ],
    },
    {
      id: "saya",
      accent: "#c96c86",
      tag: "Hunter",
      name: "Сайя",
      role: "Охотница красной моли",
      epithet: "Приходит бесшумно, оставляет только пыльцу и трещину",
      quote: "“Нечисть боится не света. Она боится формы, которую я ей оставляю.”",
      summary: "Хищный силуэт-крыло, красно-чёрная палитра и вытянутый веер-клинок для более мрачной сказки.",
      silhouette:
        "Узкий корпус и развёрнутый плащ-крыло с рваными краями. Даже в тёмной сцене легко считывается за счёт асимметрии.",
      materialsCopy:
        "Обгоревший шёлк, перья моли, лак цвета засохшей крови и костяные вставки на перчатках.",
      steamPose:
        "Боковой профиль, одно крыло раскрыто на половину кадра. Хорошо работает в library capsule и вертикальной обложке.",
      palette: [
        ["Кость", "#ead4c8"],
        ["Бордовый", "#8f4257"],
        ["Тлеющий", "#cf7385"],
        ["Сажа", "#120f17"],
      ],
      stats: [
        ["Сила отряда", "3310"],
        ["HP", "1326"],
        ["Атака", "188"],
        ["Ловкость", "1472"],
        ["Ослабление", "S"],
        ["Крит. шанс", "18%"],
      ],
      skills: [
        {
          name: "Молье затмение",
          description: "Накрывает врага крылом и снижает его точность перед ударом босса.",
        },
        {
          name: "Красная пыльца",
          description: "Оставляет метку распада, усиливающую урон отряда по одной цели.",
        },
      ],
      materials: [
        {
          name: "Пепел моли",
          description: "2 / 3 · нужен для ядовитого следа",
          count: "2",
        },
        {
          name: "Лак ночной кромки",
          description: "0 / 1 · усиливает крыло-плащ",
          count: "0",
        },
        {
          name: "Малый знак разлома",
          description: "4 / 4 · базовое усиление охотницы",
          count: "4",
        },
      ],
    },
    {
      id: "noel",
      accent: "#9dc9ef",
      tag: "Control",
      name: "Ноэль",
      role: "Архивистка дождевых карт",
      epithet: "Рисует маршруты прямо на воздухе",
      quote: "“Карта не ведёт тебя. Она убеждает мир открыться.”",
      summary: "Холодная синяя палитра, длинные ленты-карты и изящный диагональный посох как силуэт исследователя.",
      silhouette:
        "Средний рост, лёгкий корпус, длинные вертикальные ленты и диагональное оружие. Хорошо читается на светлом небе и в тумане.",
      materialsCopy:
        "Хлопковая карта-бумага, эмалированные клипсы, акварельные пигменты дождя и сталь цвета старого компаса.",
      steamPose:
        "Одна рука раскрывает карту, вторая держит посох под диагональ. Форма создаёт хороший ритм для header capsule.",
      palette: [
        ["Пергамент", "#e8ddd6"],
        ["Туман", "#c8deef"],
        ["Сталь", "#6f8ea8"],
        ["Глубина", "#223443"],
      ],
      stats: [
        ["Сила отряда", "3274"],
        ["HP", "1418"],
        ["Атака", "171"],
        ["Контроль пути", "A"],
        ["Поддержка", "A"],
        ["Люмен", "124"],
      ],
      skills: [
        {
          name: "Карта дождя",
          description: "Меняет порядок хода и выталкивает врагов из безопасной позиции.",
        },
        {
          name: "Синяя аннотация",
          description: "Помечает руины, увеличивая шанс найти дневник и редкие материалы.",
        },
      ],
      materials: [
        {
          name: "Чернила тумана",
          description: "1 / 2 · усиливают картографические печати",
          count: "1",
        },
        {
          name: "Серебро компаса",
          description: "0 / 3 · для посоха и арк-сигила",
          count: "0",
        },
        {
          name: "Средний дождевой фрагмент",
          description: "2 / 2 · открывает второй контрольный узел",
          count: "2",
        },
      ],
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
  const routeMap = document.getElementById("route-map");
  const routeLog = document.getElementById("route-log");
  const routeAdvanceButton = document.getElementById("route-advance");
  const heroList = document.getElementById("hero-list");
  const heroStatsContainer = document.getElementById("hero-stats");
  const heroName = document.getElementById("hero-name");
  const heroRole = document.getElementById("hero-role");
  const heroEpithet = document.getElementById("hero-epithet");
  const heroQuote = document.getElementById("hero-quote");
  const heroSkills = document.getElementById("hero-skills");
  const heroSilhouette = document.getElementById("hero-silhouette");
  const heroMaterialsCopy = document.getElementById("hero-materials-copy");
  const heroSteamPose = document.getElementById("hero-steam-pose");
  const heroSwatches = document.getElementById("hero-swatches");
  const materialList = document.getElementById("material-list");
  const portraitShell = document.getElementById("portrait-shell");

  const state = {
    activeScreen: "home",
    activeQuestId: questCards[0].id,
    activeHeroId: heroes[0].id,
    routeProgress: Object.fromEntries(questCards.map((quest) => [quest.id, 0])),
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

    const currentNodeIndex = state.routeProgress[activeQuest.id] ?? 0;
    const currentNode = activeQuest.route[currentNodeIndex];
    const isCompleted = currentNodeIndex >= activeQuest.route.length - 1;

    questTitle.textContent = activeQuest.title;
    questDescription.textContent = activeQuest.description;
    questStatus.textContent = isCompleted ? "Очищено" : currentNodeIndex > 0 ? "В пути" : activeQuest.status;
    questProgress.textContent = `${Math.min(currentNodeIndex + 1, activeQuest.route.length)} / ${activeQuest.route.length}`;
    questCost.textContent = activeQuest.cost;
    routeAdvanceButton.disabled = isCompleted;
    routeAdvanceButton.textContent = isCompleted ? "Маршрут завершён" : currentNodeIndex === 0 ? "Войти в маршрут" : "К следующему узлу";

    routeMap.innerHTML = activeQuest.route
      .map((node, index) => {
        const stateClass = [
          index === currentNodeIndex ? "is-active" : "",
          index < currentNodeIndex ? "is-cleared" : "",
          node.label === "Boss" ? "is-boss" : "",
        ]
          .filter(Boolean)
          .join(" ");

        return `
          <div class="route-node ${stateClass}">
            <span class="route-node-step">${node.label}</span>
            <strong class="route-node-title">${node.title}</strong>
          </div>
        `;
      })
      .join("");

    routeLog.innerHTML = `
      <span class="route-node-step">Текущий узел</span>
      <strong class="route-node-title">${currentNode.title}</strong>
      <p>${currentNode.body}</p>
    `;
  }

  function renderHeroList() {
    heroList.innerHTML = heroes
      .map(
        (hero) => `
          <button class="hero-card ${
            hero.id === state.activeHeroId ? "is-active" : ""
          }" data-hero-id="${hero.id}" style="--card-accent:${hero.accent}">
            <div class="hero-card-top">
              <div>
                <div class="hero-card-name">${hero.name}</div>
                <div class="hero-card-role">${hero.role}</div>
              </div>
              <span class="hero-card-tag">${hero.tag}</span>
            </div>
            <p>${hero.summary}</p>
          </button>
        `,
      )
      .join("");

    heroList.querySelectorAll("[data-hero-id]").forEach((button) => {
      button.addEventListener("click", () => {
        state.activeHeroId = button.dataset.heroId;
        renderHeroList();
        updateHeroPanel();
      });
    });
  }

  function renderHeroStats(hero) {
    heroStatsContainer.innerHTML = hero.stats
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

  function renderMaterials(hero) {
    materialList.innerHTML = hero.materials
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

  function renderSwatches(hero) {
    heroSwatches.innerHTML = hero.palette
      .map(
        ([label, color]) => `
          <div class="swatch" data-label="${label}" style="background:${color}"></div>
        `,
      )
      .join("");
  }

  function renderSkills(hero) {
    heroSkills.innerHTML = hero.skills
      .map(
        (skill) => `
          <article class="skill-card">
            <h3>${skill.name}</h3>
            <p>${skill.description}</p>
          </article>
        `,
      )
      .join("");
  }

  function updateHeroPanel() {
    const activeHero = heroes.find((hero) => hero.id === state.activeHeroId);
    if (!activeHero) {
      return;
    }

    portraitShell.dataset.hero = activeHero.id;
    heroName.textContent = activeHero.name;
    heroRole.textContent = activeHero.role;
    heroEpithet.textContent = activeHero.epithet;
    heroQuote.textContent = activeHero.quote;
    heroSilhouette.textContent = activeHero.silhouette;
    heroMaterialsCopy.textContent = activeHero.materialsCopy;
    heroSteamPose.textContent = activeHero.steamPose;
    renderSkills(activeHero);
    renderSwatches(activeHero);
    renderHeroStats(activeHero);
    renderMaterials(activeHero);
  }

  function cycleHero(direction) {
    const currentIndex = heroes.findIndex((hero) => hero.id === state.activeHeroId);
    const nextIndex = (currentIndex + direction + heroes.length) % heroes.length;
    state.activeHeroId = heroes[nextIndex].id;
    renderHeroList();
    updateHeroPanel();
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

  routeAdvanceButton.addEventListener("click", () => {
    const activeQuest = questCards.find((quest) => quest.id === state.activeQuestId);
    if (!activeQuest) {
      return;
    }

    const currentNodeIndex = state.routeProgress[activeQuest.id] ?? 0;
    if (currentNodeIndex >= activeQuest.route.length - 1) {
      return;
    }

    state.routeProgress[activeQuest.id] = currentNodeIndex + 1;
    updateQuestOverview();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "1") {
      setActiveScreen("home");
    }
    if (event.key === "2") {
      setActiveScreen("quests");
    }
    if (event.key === "3") {
      setActiveScreen("party");
    }

    if (state.activeScreen === "party" && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
      event.preventDefault();
      cycleHero(event.key === "ArrowRight" ? 1 : -1);
    }
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
  renderHeroList();
  updateHeroPanel();
  const initialScreen = window.location.hash.replace("#", "");
  if (initialScreen) {
    setActiveScreen(initialScreen);
  }
  startAmbientCanvas();
})();
