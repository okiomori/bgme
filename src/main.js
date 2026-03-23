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
        "Путь начинается в соборе листвы: через мокрые пролеты, архивные следы и молчание, которое первым слышит Лиора.",
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
        "Нижние хранилища пока держат каменную тишину. Этот маршрут раскроется, когда святилище снова примет тяжелый вход.",
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
        "Оранжереи ещё не открыты, но в их влажных нишах уже слышен будущий сбор: стеклянные травы, мох и тихие катализаторы.",
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
        "Чертог отклика хранит безопасные повторения боя. Здесь партия вспоминает ритм перед настоящим проломом.",
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
        "В арках снова поднимается хор мольб. Временная глава зовёт туда, где голос святилища начинает звучать не по-человечески.",
      route: [
        { label: "Зов", title: "Хор во мху", body: "Событие начинается с аномального пения в арочном саду." },
        { label: "Выбор", title: "Две реликвии", body: "Нужно решить, кого усилить: проводницу, охотницу или весь состав сразу." },
        { label: "Стычка", title: "Стая шелкокрылов", body: "Лёгкая волна врагов проверяет устойчивость задней линии." },
        { label: "Лор", title: "Страница без чернил", body: "Редкая запись меняет описание будущей босc-фазы и добавляет контекст миру." },
        { label: "Boss", title: "Красный распев", body: "Финал события с временным элитным существом на мотиве моли и соборной акустики." },
      ],
    },
  ];

  const worldLocations = [
    {
      id: "forest-trail",
      biome: "forest",
      kicker: "Лесной пояс",
      title: "Моховая тропа",
      copy: "Туман стелется между елями, а руинные арки всплывают из зелени как затопленные своды старого храма.",
      tags: ["Сбор трав", "Тихие тропы", "Старые сигилы"],
      npc: {
        name: "Листвянка Ирис",
        role: "Хранительница лесных проходов",
        line: "Если тропы не очистить от корневой скверны, караван не дойдёт к горным перевалам.",
        choices: [
          { label: "Спросить про безопасный путь", reply: "Идите вдоль белых камней. Там лес дышит тише и не сбивает шаг." },
          { label: "Взять работу у проводницы", reply: "Хорошо. Сожгите три гнезда шепчущей лозы и путь откроется для всех." },
        ],
      },
      quests: [
        {
          id: "forest-nests",
          title: "Тихие костры",
          body: "Очистить тропу от шепчущей лозы и зажечь сигнальные чаши на трёх развилках.",
          reward: { lumen: 28, fragments: 1 },
        },
      ],
    },
    {
      id: "mountain-pass",
      biome: "mountain",
      kicker: "Горный рубеж",
      title: "Перевал Эха",
      copy: "Ледяной ветер режет по бронзе, а над обрывом стоят полуразрушенные башни дозорных эпохи до распада.",
      tags: ["Каменные мосты", "Высотный ветер", "Сторожевые башни"],
      npc: {
        name: "Каменщик Ведар",
        role: "Старший караванных переходов",
        line: "Нужно укрепить мост, иначе люди и припасы сорвутся в пропасть до первой метели.",
        choices: [
          { label: "Уточнить, где слабое место", reply: "Средняя арка дала трещину. Заклиньте её монолитными штифтами и держитесь правой стены." },
          { label: "Пообещать помощь каравану", reply: "Если успеете до сумерек, в руины пойдёт полноценная экспедиция с ремесленниками." },
        ],
      },
      quests: [
        {
          id: "mountain-bridge",
          title: "Арка под ветром",
          body: "Укрепить каменный мост и провести караван через перевал без потерь.",
          reward: { lumen: 34, fragments: 1 },
        },
      ],
    },
    {
      id: "ruin-basin",
      biome: "ruins",
      kicker: "Пояс руин",
      title: "Чаша обелисков",
      copy: "Сломанные колоннады уходят в землю, а между ними горят бледные огни архивной пыли и забытых голосов.",
      tags: ["Древние своды", "Архивная пыль", "Ночные сигилы"],
      npc: {
        name: "Архивист Ноэль",
        role: "Проводник по памяти руин",
        line: "Внизу есть залы с запечатанными картами. Если вернуть питание в обелиски, мы откроем новую линию заданий.",
        choices: [
          { label: "Спросить про древние залы", reply: "Слушайте звук воды. Где капли глухие, там под полом скрыт архив." },
          { label: "Согласиться активировать обелиски", reply: "Тогда запускаем ритуал. Нужны три сердечника и одна чистая печать." },
        ],
      },
      quests: [
        {
          id: "ruin-obelisks",
          title: "Пульс руин",
          body: "Активировать три обелиска и открыть архивный контур для новой серии вылазок.",
          reward: { lumen: 42, fragments: 2 },
        },
      ],
    },
  ];

  const sanctuaryHotspots = [
    {
      id: "gate",
      label: "Врата",
      title: "Врата святилища",
      subtitle: "Точка сбора караванов и брифинга вылазок.",
      copy: "Здесь партия получает маршрут, сверяет состав и выбирает, в какой биом идти дальше.",
      targetScreen: "quests",
      icon: "◈",
    },
    {
      id: "forge",
      label: "Кузня",
      title: "Кузня корневого металла",
      subtitle: "Укрепление брони и тактических модулей перед боем.",
      copy: "Зона подготовки фронта: усиление, ремонт и сборка связок для следующей стычки.",
      targetScreen: "party",
      icon: "⬢",
    },
    {
      id: "archive",
      label: "Архив",
      title: "Зал мокрых карт",
      subtitle: "Архив маршрутов, сигилов и следов экспедиций.",
      copy: "Здесь хранятся записи руин и подсказки по узлам, которые уже откликнулись партии.",
      targetScreen: "journal",
      icon: "☷",
    },
    {
      id: "market",
      label: "Лавка",
      title: "Тихий ряд поставок",
      subtitle: "Редкие материалы и обмен перед выходом.",
      copy: "Поставка расходников и редких фрагментов для тех, кто готов к следующему риску.",
      targetScreen: "shop",
      icon: "✶",
    },
  ];

  // Portrait visual profiles — drives the SVG auto-generation for all heroes.
  // Adding a new hero only requires adding its data here; the generator handles the rest.
  const heroPortraitProfiles = {
    guide: {
      // Liora: tall, slim, long flowing hair, thin staff, navigation ring
      bodyClip: "M42 54 L40 148 Q50 156 60 148 L58 54 Q54 49 50 47 Q46 49 42 54Z",
      cloakClip: "M26 58 Q18 94 20 184 Q50 194 80 184 Q82 94 74 58 Q63 51 50 49 Q37 51 26 58Z",
      hairFront: "M38 24 Q32 34 32 50 L37 50 Q39 37 42 28 Q50 22 58 28 Q61 37 63 50 L68 50 Q68 34 62 24 Q56 14 50 14 Q44 14 38 24Z",
      hairBack: "M32 48 Q26 84 28 135 Q34 133 38 135 Q38 84 36 50Z M62 50 Q62 84 62 135 Q66 133 72 135 Q74 84 68 48Z",
      headCy: 28, headRx: 9, headRy: 11,
      crown: "M42 20 L46 13 L50 18 L54 13 L58 20",
      weaponD: "M68 16 L73 178",
      weaponW: 1.5, weaponOrb: true,
      trailLx1: 30, trailLy1: 122, trailLx2: 24, trailLy2: 188,
      trailRx1: 70, trailRy1: 122, trailRx2: 76, trailRy2: 188,
      trailW: 11, trailO: 0.42,
      specialRing: true,
      armL: "M42 58 Q36 70 34 94 Q38 95 40 92 Q42 72 44 62Z",
      armR: "M58 58 Q64 70 66 94 Q62 95 60 92 Q58 72 56 62Z",
    },
    vanguard: {
      // Rian: wide, armored, short hair, broad hammer
      bodyClip: "M34 54 L30 148 Q50 158 70 148 L66 54 Q60 47 50 45 Q40 47 34 54Z",
      cloakClip: "M20 58 Q12 92 14 184 Q50 196 86 184 Q88 92 80 58 Q67 49 50 47 Q33 49 20 58Z",
      hairFront: "M34 20 Q30 28 32 42 L38 42 Q40 30 42 24 Q50 18 58 24 Q60 30 62 42 L68 42 Q70 28 66 20 Q58 11 50 11 Q42 11 34 20Z",
      hairBack: "M32 40 Q30 55 32 72 L38 70 Q36 55 34 42Z M62 42 Q64 55 62 70 L68 72 Q70 55 68 40Z",
      headCy: 23, headRx: 11, headRy: 13,
      crown: null,
      weaponD: "M74 58 L82 178",
      weaponW: 5.5, weaponOrb: false,
      trailLx1: 32, trailLy1: 130, trailLx2: 28, trailLy2: 188,
      trailRx1: 68, trailRy1: 130, trailRx2: 72, trailRy2: 188,
      trailW: 7, trailO: 0.18,
      specialRing: false,
      armL: "M34 58 Q26 72 24 98 Q30 100 32 96 Q34 76 38 64Z",
      armR: "M66 58 Q74 72 76 98 Q70 100 68 96 Q66 76 62 64Z",
    },
    hunter: {
      // Saya: slim, wing cloak, dark asymmetric hair, curved blade
      bodyClip: "M42 58 L40 148 Q50 154 60 148 L58 58 Q54 52 50 50 Q46 52 42 58Z",
      cloakClip: "M24 62 Q6 88 8 164 Q30 184 50 168 Q70 184 92 164 Q94 88 76 62 Q64 53 50 51 Q36 53 24 62Z",
      hairFront: "M36 24 Q28 36 30 52 L36 50 Q36 38 40 28 Q50 20 60 28 Q64 38 64 50 L70 52 Q72 36 64 24 Q57 13 50 13 Q43 13 36 24Z",
      hairBack: "M28 50 Q18 82 22 144 Q28 140 34 144 Q34 82 30 52Z M66 52 Q66 82 66 144 Q72 140 78 144 Q82 82 72 50Z",
      headCy: 28, headRx: 9, headRy: 11,
      crown: "M38 18 L43 10 L50 16 L57 10 L62 18",
      weaponD: "M66 54 L76 158",
      weaponW: 1.8, weaponOrb: false,
      trailLx1: 28, trailLy1: 120, trailLx2: 18, trailLy2: 188,
      trailRx1: 72, trailRy1: 120, trailRx2: 82, trailRy2: 188,
      trailW: 17, trailO: 0.5,
      specialRing: false,
      armL: "M42 62 Q34 72 30 96 Q36 98 38 94 Q40 76 44 66Z",
      armR: "M58 62 Q66 72 70 96 Q64 98 62 94 Q60 76 56 66Z",
    },
    archivist: {
      // Noel: medium, scholarly, blue hair with ribbons, diagonal staff
      bodyClip: "M40 54 L38 148 Q50 154 62 148 L60 54 Q55 48 50 46 Q45 48 40 54Z",
      cloakClip: "M28 58 Q20 90 22 182 Q50 190 78 182 Q80 90 72 58 Q62 50 50 48 Q38 50 28 58Z",
      hairFront: "M36 22 Q30 32 32 50 L38 48 Q40 34 42 26 Q50 18 58 26 Q60 34 62 48 L68 50 Q70 32 64 22 Q57 12 50 12 Q43 12 36 22Z",
      hairBack: "M30 48 Q24 82 26 128 Q32 126 38 128 Q38 82 34 50Z M60 50 Q62 82 62 128 Q66 126 72 128 Q74 82 66 48Z",
      headCy: 27, headRx: 9, headRy: 11,
      crown: "M42 18 L46 11 L50 16 L54 11 L58 18",
      weaponD: "M26 40 L76 178",
      weaponW: 1.4, weaponOrb: false,
      trailLx1: 32, trailLy1: 122, trailLx2: 26, trailLy2: 188,
      trailRx1: 68, trailRy1: 122, trailRx2: 74, trailRy2: 188,
      trailW: 10, trailO: 0.38,
      specialRing: false,
      armL: "M40 58 Q32 70 30 94 Q36 96 38 92 Q40 74 42 62Z",
      armR: "M60 58 Q68 70 70 94 Q64 96 62 92 Q60 74 58 62Z",
    },
  };

  // Map hero IDs to portrait profiles
  const heroFormMap = {
    liora: "guide",
    rian: "vanguard",
    saya: "hunter",
    noel: "archivist",
  };

  // Skin tones — consistent across all heroes for a unified art style
  const SKIN_1 = "#f3ece3";
  const SKIN_2 = "#d2c2b4";

  function generateHeroPortraitSVG(hero) {
    const form = heroFormMap[hero.id] ?? "guide";
    const prof = heroPortraitProfiles[form];
    const id = `ph-${hero.id}`;

    const lightColor = hero.palette[0]?.[1] ?? "#f0ece4";
    const midColor   = hero.palette[1]?.[1] ?? "#b0c8c0";
    const deepColor  = hero.palette[2]?.[1] ?? "#6e9d88";
    const darkColor  = hero.palette[3]?.[1] ?? "#1a2020";
    const accent     = hero.accent;

    // Hair colors vary by hero
    const hairColors = {
      liora:    ["#fafaf6", "#b8d8d5", "#6e9d88"],
      rian:     ["#503f33", "#2f251f", "#181414"],
      saya:     ["#2f2a30", "#70303e", "#140f17"],
      noel:     ["#d8e8f4", "#7ea0be", "#2d4358"],
    };
    const [hc1, hc2, hc3] = hairColors[hero.id] ?? hairColors.liora;

    const crown = prof.crown
      ? `<path d="${prof.crown}" fill="none" stroke="${lightColor}" stroke-width="1.2" stroke-opacity="0.82" stroke-linecap="round"/>`
      : "";

    const weaponOrb = prof.weaponOrb
      ? `<circle cx="73" cy="14" r="5" fill="${accent}" fill-opacity="0.72"/><circle cx="73" cy="14" r="3" fill="${lightColor}" fill-opacity="0.6"/>`
      : "";

    const ring = prof.specialRing
      ? `<circle cx="50" cy="105" r="44" fill="none" stroke="${accent}" stroke-width="0.6" stroke-opacity="0.34"/>
         <circle cx="50" cy="105" r="36" fill="none" stroke="${accent}" stroke-width="0.3" stroke-opacity="0.18"/>`
      : "";

    const mapRibbon = form === "archivist"
      ? `<path d="M70 62 Q80 74 84 90 Q80 100 72 98 Q66 90 70 78" fill="none" stroke="${lightColor}" stroke-width="1.2" stroke-opacity="0.44" stroke-linecap="round"/>
         <path d="M72 104 Q82 112 80 124 Q74 130 68 124" fill="none" stroke="${accent}" stroke-width="1" stroke-opacity="0.36" stroke-linecap="round"/>`
      : "";

    const hammerHead = form === "vanguard"
      ? `<rect x="76" y="46" width="14" height="20" rx="4" fill="${midColor}" fill-opacity="0.88" stroke="${lightColor}" stroke-width="0.6" stroke-opacity="0.4"/>`
      : "";

    const wingDetails = form === "hunter"
      ? `<path d="M8 164 Q14 130 24 110 Q18 140 20 168Z" fill="${midColor}" fill-opacity="0.28"/>
         <path d="M92 164 Q86 130 76 110 Q82 140 80 168Z" fill="${midColor}" fill-opacity="0.28"/>`
      : "";

    return `<svg viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="hero-portrait-svg">
  <defs>
    <radialGradient id="${id}-aura" cx="50%" cy="45%" r="52%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.46"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="${id}-body" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="${lightColor}"/>
      <stop offset="42%" stop-color="${midColor}"/>
      <stop offset="100%" stop-color="${darkColor}" stop-opacity="0.96"/>
    </linearGradient>
    <linearGradient id="${id}-cloak" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="${midColor}" stop-opacity="0.58"/>
      <stop offset="55%" stop-color="${deepColor}" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="${darkColor}" stop-opacity="0.06"/>
    </linearGradient>
    <linearGradient id="${id}-hair" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="${hc1}"/>
      <stop offset="38%" stop-color="${hc2}"/>
      <stop offset="100%" stop-color="${hc3}" stop-opacity="0.88"/>
    </linearGradient>
    <radialGradient id="${id}-skin" cx="48%" cy="28%" r="60%">
      <stop offset="0%" stop-color="${SKIN_1}"/>
      <stop offset="100%" stop-color="${SKIN_2}"/>
    </radialGradient>
    <linearGradient id="${id}-weapon" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${lightColor}" stop-opacity="0.96"/>
      <stop offset="100%" stop-color="${deepColor}" stop-opacity="0.18"/>
    </linearGradient>
  </defs>

  <!-- Background atmospheric glow -->
  <ellipse cx="50" cy="100" rx="52" ry="90" fill="url(#${id}-aura)"/>

  ${ring}

  <!-- Cloak / coat -->
  <path d="${prof.cloakClip}" fill="url(#${id}-cloak)"/>
  ${wingDetails}

  <!-- Back hair -->
  <path d="${prof.hairBack}" fill="url(#${id}-hair)" opacity="0.64"/>

  <!-- Arms -->
  <path d="${prof.armL}" fill="url(#${id}-body)" opacity="0.82"/>
  <path d="${prof.armR}" fill="url(#${id}-body)" opacity="0.82"/>

  <!-- Body -->
  <path d="${prof.bodyClip}" fill="url(#${id}-body)"/>

  <!-- Weapon -->
  ${hammerHead}
  <path d="${prof.weaponD}" stroke="url(#${id}-weapon)" stroke-width="${prof.weaponW}" stroke-linecap="round" fill="none"/>
  ${weaponOrb}

  <!-- Emblem -->
  <rect x="44" y="90" width="12" height="12" rx="3" transform="rotate(45 50 96)"
        fill="${accent}" fill-opacity="0.24" stroke="${lightColor}" stroke-width="0.5" stroke-opacity="0.44"/>

  <!-- Head (face) -->
  <ellipse cx="50" cy="${prof.headCy}" rx="${prof.headRx}" ry="${prof.headRy}" fill="url(#${id}-skin)"/>

  <!-- Hair (front) -->
  <path d="${prof.hairFront}" fill="url(#${id}-hair)"/>
  ${crown}

  ${mapRibbon}

  <!-- Atmospheric trails -->
  <line x1="${prof.trailLx1}" y1="${prof.trailLy1}" x2="${prof.trailLx2}" y2="${prof.trailLy2}"
        stroke="${accent}" stroke-width="${prof.trailW}" stroke-opacity="${prof.trailO}" stroke-linecap="round"/>
  <line x1="${prof.trailRx1}" y1="${prof.trailRy1}" x2="${prof.trailRx2}" y2="${prof.trailRy2}"
        stroke="${accent}" stroke-width="${prof.trailW}" stroke-opacity="${prof.trailO}" stroke-linecap="round"/>
</svg>`;
  }

  const heroes = [
    {
      id: "liora",
      art: "art/characters/liora-canon-bust.png",
      accent: "#c8f0e1",
      tag: "Support",
      name: "Лиора",
      role: "Проводница мха",
      epithet: "Держит маршрут в живой тишине",
      quote: "“Руины отвечают тем, кто умеет слушать медленно.”",
      summary: "Тихая проводница, в чьей форме уже чувствуется работа памяти и сырой живой архитектуры.",
      silhouette:
        "Стройная вертикаль, длинные волосы как вторая форма одежды, мягкая линия плеч и один ритуальный акцент вместо россыпи украшений.",
      materialsCopy:
        "Вытертая ткань, стеклянная роса, мох, известковая бледность и тонкий древний металл без блеска.",
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
          id: "moss-seed",
          name: "Семя витражного мха",
          description: "1 / 3 · катализатор проводников святилища",
          required: 3,
        },
        {
          id: "parchment",
          name: "Слой древнего пергамента",
          description: "0 / 2 · усиливает навигационные сигилы",
          required: 2,
        },
        {
          id: "lumen-stone",
          name: "Малый люмен-камень",
          description: "2 / 4 · базовое пробуждение поддержки",
          required: 4,
        },
      ],
    },
    {
      id: "rian",
      art: "",
      accent: "#b1c88d",
      tag: "Vanguard",
      name: "Риан",
      role: "Камнерез святилищ",
      epithet: "Поднимает арку там, где остальные видят завал",
      quote: "“Если тропа осыпалась, я выбью новую.”",
      summary: "Живая опора отряда, человек-контрфорс, который удерживает проход там, где мир хочет всё сомкнуть обратно.",
      silhouette:
        "Монолитный торс, короткая шея, массивный инструмент и форма старой подпорки, вышедшей из стены на собственных ногах.",
      materialsCopy:
        "Базальт, кора, лишайник, грубый металл и следы ручной починки вместо чистой военной отделки.",
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
          id: "monolith-core",
          name: "Ядро монолита",
          description: "0 / 2 · нужно для усиления молота",
          required: 2,
        },
        {
          id: "compressed-moss",
          name: "Спрессованный мох",
          description: "3 / 5 · стабилизирует броню и плечи",
          required: 5,
        },
        {
          id: "awakening-stone",
          name: "Средний камень пробуждения",
          description: "1 / 2 · открывает навык контроля линии",
          required: 2,
        },
      ],
    },
    {
      id: "saya",
      art: "",
      accent: "#c96c86",
      tag: "Hunter",
      name: "Сайя",
      role: "Охотница красной моли",
      epithet: "Приходит бесшумно, оставляет только пыльцу и трещину",
      quote: "“Нечисть боится не света. Она боится формы, которую я ей оставляю.”",
      summary: "Не охотница в жанровом смысле, а разрез в ткани мира: молчаливая, точная, хищная форма.",
      silhouette:
        "Узкая фигура, асимметрия, длинный режущий акцент и один раскрывающийся элемент, похожий на след, крыло или лоскут.",
      materialsCopy:
        "Обгоревший шёлк, кость, сухая пыльца, тёмный лак и рваная органика вместо привычного оружейного костюма.",
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
          id: "moth-ash",
          name: "Пепел моли",
          description: "2 / 3 · нужен для ядовитого следа",
          required: 3,
        },
        {
          id: "night-lacquer",
          name: "Лак ночной кромки",
          description: "0 / 1 · усиливает крыло-плащ",
          required: 1,
        },
        {
          id: "rift-sigil",
          name: "Малый знак разлома",
          description: "4 / 4 · базовое усиление охотницы",
          required: 4,
        },
      ],
    },
    {
      id: "noel",
      art: "",
      accent: "#9dc9ef",
      tag: "Control",
      name: "Ноэль",
      role: "Архивистка дождевых карт",
      epithet: "Рисует маршруты прямо на воздухе",
      quote: "“Карта не ведёт тебя. Она убеждает мир открыться.”",
      summary: "Носительница знания после распада, архивистка не текста, а следов, которые остаются от него в мире.",
      silhouette:
        "Средняя фигура, диагональ инструмента, бумажные и ленточные элементы, будто часть костюма уже стала схемой или картой.",
      materialsCopy:
        "Бумага, пергамент, чернила, стеклянные бусины дождя и компасный металл, переживший слишком много рук.",
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
          id: "mist-ink",
          name: "Чернила тумана",
          description: "1 / 2 · усиливают картографические печати",
          required: 2,
        },
        {
          id: "compass-silver",
          name: "Серебро компаса",
          description: "0 / 3 · для посоха и арк-сигила",
          required: 3,
        },
        {
          id: "rain-fragment",
          name: "Средний дождевой фрагмент",
          description: "2 / 2 · открывает второй контрольный узел",
          required: 2,
        },
      ],
    },
  ];

  const journalTabs = [
    {
      id: "records",
      label: "Записи",
      kicker: "Полевой лист",
      entries: [
        {
          id: "vestibule",
          title: "Разломанный вестибюль",
          subtitle: "Своды ещё держатся",
          body:
            "Святилище не рухнуло. Оно просто стало говорить корнями и водой. В мхе видны старые тропы служителей, и по ним всё ещё можно пройти, если не спорить с тишиной.",
          meta:
            "Короткий путь к мосту открыт, если сначала прочитать рисунки архитектора и не тревожить корнеедов.",
          stamps: ["Собор листвы", "Тихий вход", "Проводник"],
        },
        {
          id: "architect",
          title: "Дневник архитектора",
          subtitle: "Служебные коридоры",
          body:
            "На полях сохранились схемы оранжереи и отметки, куда вели обслуживающие галереи. Именно там древние проводники очищали люмен перед великими походами.",
          meta:
            "Эта запись удерживает лор в Steam-формате: один сильный образ, один вывод для геймплея и никаких перегруженных мобильных всплывашек.",
          stamps: ["Архив", "Маршрут", "Секрет"],
        },
        {
          id: "blank-page",
          title: "Страница без чернил",
          subtitle: "След временной главы",
          body:
            "Лист кажется пустым, пока на него не падает влажный свет. Тогда проступает рисунок красного распева и будущий силуэт босса события.",
          meta:
            "События должны выглядеть как часть того же мира: тёмнее, страннее, но всё ещё соборно-зелёные и тихие.",
          stamps: ["Event", "Моль", "Предзнаменование"],
        },
      ],
    },
    {
      id: "atlas",
      label: "Атлас",
      kicker: "Карта узлов",
      entries: [
        {
          id: "bridge-map",
          title: "Верхний мост",
          subtitle: "Путь над затопленным нефом",
          body:
            "Ноэль отмечает мост как безопасный только при низком ветре. Если туман густой, маршрут лучше переводить через боковые хоры и технические арки.",
          meta:
            "Маршрут связывает хаб, экран экспедиций и будущую боевую encounter-сцену в единый цикл.",
          stamps: ["Карта", "Высота", "Хор"],
        },
        {
          id: "greenhouse-map",
          title: "Оранжерея тумана",
          subtitle: "Стекло и корни",
          body:
            "Главный источник витражного мха. Внутри безопасно только до тех пор, пока не тронуты нижние дренажи и не сорваны мостики над водой.",
          meta:
            "Локация одновременно служит красивой сценой, ресурсным узлом и местом короткой передышки между боями.",
          stamps: ["Ресурсы", "Мох", "Люмен"],
        },
        {
          id: "burial-map",
          title: "Погреб стражей",
          subtitle: "Нижний уровень",
          body:
            "Осушенные шлюзы скрывают тяжёлые залы, где эхо мешает читать телеграф атак. Здесь лучше всего работает массивный фронт и точечный контроль.",
          meta:
            "Это уже следующий крупный экран после вертикального среза: более тяжёлый рейд, меньше воздуха, больше камня.",
          stamps: ["Рейд", "Эхо", "Стражи"],
        },
      ],
    },
    {
      id: "bestiary",
      label: "Бестиарий",
      kicker: "Полевой разбор",
      entries: [
        {
          id: "root-eaters",
          title: "Слепые корнееды",
          subtitle: "Мелкая нечисть передней линии",
          body:
            "Появляются из влажных швов кладки и тянутся к свету проводников. Опасны количеством и тем, что ломают строй поддержки.",
          meta:
            "Лучше всего сдерживаются мягким контролем Лиоры и узкими проходами, которые удерживает Риан.",
          stamps: ["Флора", "Стая", "Контроль"],
        },
        {
          id: "silkwing",
          title: "Шёлкокрылы",
          subtitle: "Событийная стая",
          body:
            "Существа с тонким рисунком крыльев и резкими заходами в спину. Их мотив помогает связать мрачную сказку с общим храмовым миром.",
          meta:
            "Хорошая цель для промо-арта: выразительные силуэты, мало шума, много характера.",
          stamps: ["Event", "Воздух", "Охота"],
        },
        {
          id: "colossus",
          title: "Немой колосс",
          subtitle: "Босс главы",
          body:
            "Каменный страж, обросший мхом и водопадами. Почти неподвижен, пока не нарушен ритм святилища. Потом начинает двигаться так, будто сама архитектура решила вытолкнуть вас наружу.",
          meta:
            "Главный образ проекта для Steam: большой, тихий, монументальный и сразу считываемый даже на дальнем плане.",
          stamps: ["Boss", "Монолит", "Память"],
        },
      ],
    },
  ];

  const shopItems = [
    {
      id: "moss-seed",
      materialId: "moss-seed",
      tag: "Support",
      name: "Семя витражного мха",
      description:
        "Катализатор для мягких люменных усилений. Особенно полезен Лиоре и Ноэль, потому что усиливает контроль пути и световые метки.",
      price: 34,
      currency: "lumen",
      stock: "3 в поставке",
      use: "Усиление поддержки и проводников",
      steam: "Надёжный базовый лут для раннего vertical slice",
    },
    {
      id: "compass-silver",
      materialId: "compass-silver",
      tag: "Archive",
      name: "Серебро компаса",
      description:
        "Холодный сплав для архивных инструментов и посохов. Нужен Ноэль, чтобы открыть второй контрольный узел.",
      price: 1,
      currency: "fragments",
      stock: "1 редкий лист",
      use: "Продвинутый апгрейд контроля и картографии",
      steam: "Редкий ресурс для долгого PC-прогресса",
    },
    {
      id: "moth-ash",
      materialId: "moth-ash",
      tag: "Hunter",
      name: "Пепел моли",
      description:
        "Красноватая пыльца после шёлкокрылов. Сайя использует её для меток распада и ослабления приоритетной цели.",
      price: 26,
      currency: "lumen",
      stock: "5 в поставке",
      use: "Усиление охотницы и статусных билдов",
      steam: "Поддерживает более мрачный слой арт-направления",
    },
    {
      id: "monolith-core",
      materialId: "monolith-core",
      tag: "Vanguard",
      name: "Ядро монолита",
      description:
        "Тяжёлый каменный фрагмент из погреба стражей. Нужен Риану для укрепления молота и стойки фронта.",
      price: 58,
      currency: "lumen",
      stock: "2 в поставке",
      use: "Укрепление фронтовой линии и пролома",
      steam: "Сильный mid-game предмет для прогресса и билдообразования",
    },
  ];

  const itemVisualMeta = {
    "moss-seed": { icon: "✦", tone: "emerald", rarity: "Rare" },
    "compass-silver": { icon: "◈", tone: "azure", rarity: "Epic" },
    "moth-ash": { icon: "✶", tone: "crimson", rarity: "Rare" },
    "monolith-core": { icon: "⬢", tone: "amber", rarity: "Epic" },
    parchment: { icon: "🜁", tone: "azure", rarity: "Common" },
    "lumen-stone": { icon: "✧", tone: "amber", rarity: "Rare" },
    "compressed-moss": { icon: "✤", tone: "emerald", rarity: "Common" },
    "awakening-stone": { icon: "⬡", tone: "amber", rarity: "Epic" },
    "night-lacquer": { icon: "✹", tone: "crimson", rarity: "Rare" },
    "rift-sigil": { icon: "✺", tone: "crimson", rarity: "Epic" },
    "mist-ink": { icon: "✎", tone: "azure", rarity: "Rare" },
    "rain-fragment": { icon: "❖", tone: "azure", rarity: "Epic" },
  };

  const steamChecklist = [
    {
      title: "Читаемость в 16:9",
      body: "Главные окна крупные, вторичные блоки сгруппированы и не распадаются на мобильную сетку.",
      complete: true,
    },
    {
      title: "Клавиатурная навигация",
      body: "Экраны листаются цифрами 1–6, а персонажи в составе стрелками.",
      complete: true,
    },
    {
      title: "Низкий визуальный шум",
      body: "Главный экран остаётся спокойным, а новые разделы читаются как большие тематические сцены.",
      complete: true,
    },
    {
      title: "Боевой вертикальный срез",
      body: "Следующий этап — связать маршрутные узлы с encounter-сценой и наградами.",
      complete: false,
    },
  ];

  const uiScaleOptions = [
    { id: "compact", label: "90%", value: 0.9 },
    { id: "default", label: "100%", value: 1 },
    { id: "cinematic", label: "110%", value: 1.1 },
  ];

  const questBlueprints = {
    story: {
      objective: "Найти путь через собор листвы и выйти к мосту памяти.",
      recommendation: "Лиора + Риан для спокойного входа и контроля фронта.",
      reward: "Люмен, архивные записи, доступ к боевой сцене главы.",
      threat: "Исследование",
    },
    raid: {
      objective: "Пройти низкие своды и подготовиться к тяжёлому хранителю.",
      recommendation: "Риан + Ноэль для устойчивости и контроля очереди.",
      reward: "Тяжёлые материалы и высокий люменный доход.",
      threat: "Тяжёлый рейд",
    },
    gathering: {
      objective: "Собрать редкие материалы и не дать мелкой нечисти сорвать маршрут.",
      recommendation: "Лиора + Сайя для безопасного сбора и быстрой зачистки.",
      reward: "Катализаторы, мох, редкие фрагменты для лавки.",
      threat: "Сбор ресурсов",
    },
    trial: {
      objective: "Проверить связки ролей и отточить темп перед реальным боем.",
      recommendation: "Весь отряд, чтобы увидеть ротацию навыков.",
      reward: "Тренировочный прогресс и ритм для следующей encounter-сцены.",
      threat: "Тренировка",
    },
    event: {
      objective: "Пресечь аномалию хора и дойти до события-босса.",
      recommendation: "Сайя + Ноэль для темпа, контроля и мрачных encounter’ов.",
      reward: "Редкая пыльца, временные реликвии, записи события.",
      threat: "Временная глава",
    },
  };

  const guideSections = [
    {
      id: "overview",
      kicker: "Ядро мира",
      title: "О чём теперь BGME",
      summary: "Это игра не о покорении руин, а о прохождении через места, где память, природа и распад уже срослись в одну живую ткань.",
      points: [
        "Главный цикл остаётся прежним: святилище → маршрут → столкновение → трофеи → усиление → новый выход.",
        "Но тон меняется: тишина важнее пафоса, а странность важнее привычной героики.",
        "Любая вещь в мире отвечает на один вопрос: как её изменила память.",
      ],
    },
    {
      id: "screens",
      kicker: "Структура",
      title: "Как говорят экраны",
      summary: "Каждый экран отвечает не только за функцию, но и за слой мира: путь, архив, столкновение, возвращение.",
      points: [
        "Экспедиции показывают не список миссий, а карту сопротивляющегося места.",
        "Дневник ведёт себя как архив следов, а не как энциклопедия для галочки.",
        "Бой должен выглядеть как столкновение с формой памяти, а не как абстрактная арена.",
      ],
    },
    {
      id: "controls",
      kicker: "Управление",
      title: "Клавиши ПК",
      summary: "Навигация под десктоп строится вокруг быстрых переходов, но ритм мира должен оставаться спокойным и читаемым.",
      points: [
        "1–6 переключают основные экраны, 7 открывает encounter.",
        "Стрелки в составе листают героев без лишнего UI-шума.",
        "В бою игрок должен видеть: кто действует, чему он противостоит и что изменит это действие.",
      ],
    },
    {
      id: "steam",
      kicker: "Авторский срез",
      title: "Что должно считываться сразу",
      summary: "Vertical slice должен выглядеть как самостоятельный мир с авторским законом, а не как набор красивых панелей и боевых блоков.",
      points: [
        "Игрок должен быстро понять: руины здесь живые, память опасна, а красота всегда несёт след распада.",
        "Герои и враги должны читаться как авторские силуэты, а не как жанровые архетипы.",
        "Каждый сильный кадр должен отвечать на вопрос: это точно BGME, а не просто красивое фэнтези?",
      ],
    },
  ];

  const journalUnlockRules = {
    vestibule: { questId: "story", minNode: 0 },
    architect: { questId: "story", minNode: 1 },
    "blank-page": { questId: "event", minNode: 3 },
    "bridge-map": { questId: "story", minNode: 1 },
    "greenhouse-map": { questId: "gathering", minNode: 1 },
    "burial-map": { questId: "raid", minNode: 1 },
    "root-eaters": { questId: "story", minNode: 2 },
    silkwing: { questId: "event", minNode: 2 },
    colossus: { questId: "story", minNode: 4 },
  };

  const journalEntryContext = {
    vestibule: { source: "Хроника руин · Вход", related: ["Верхний мост", "Слепые корнееды"] },
    architect: { source: "Хроника руин · Лор", related: ["Оранжерея тумана", "Верхний мост"] },
    "blank-page": { source: "Хор мольб · Лор", related: ["Шёлкокрылы", "Немой колосс"] },
    "bridge-map": { source: "Атлас святилища", related: ["Разломанный вестибюль", "Погреб стражей"] },
    "greenhouse-map": { source: "Атлас ресурсов", related: ["Дневник архитектора", "Тихие оранжереи"] },
    "burial-map": { source: "Нижние маршруты", related: ["Погреб стражей", "Немой колосс"] },
    "root-eaters": { source: "Полевой бестиарий", related: ["Разломанный вестибюль", "Хор корней"] },
    silkwing: { source: "Событийный бестиарий", related: ["Страница без чернил", "Пепел моли"] },
    colossus: { source: "Архив стражей", related: ["Хроника руин", "Корень памяти"] },
  };

  const STORAGE_KEY = "bgme-state-v3";

  const materialCatalog = {
    "moss-seed": {
      label: "Семя витражного мха",
      short: "мох",
      use: "Усиление Лиоры и Ноэль",
    },
    parchment: {
      label: "Слой древнего пергамента",
      short: "пергамент",
      use: "Архивные и навигационные сигилы",
    },
    "lumen-stone": {
      label: "Малый люмен-камень",
      short: "люмен-камень",
      use: "Пробуждение поддержки",
    },
    "monolith-core": {
      label: "Ядро монолита",
      short: "ядро",
      use: "Укрепление фронтовой линии",
    },
    "compressed-moss": {
      label: "Спрессованный мох",
      short: "мох",
      use: "Стабилизация брони",
    },
    "awakening-stone": {
      label: "Средний камень пробуждения",
      short: "камень",
      use: "Открытие боевых узлов",
    },
    "moth-ash": {
      label: "Пепел моли",
      short: "пепел",
      use: "Усиление Сайи",
    },
    "night-lacquer": {
      label: "Лак ночной кромки",
      short: "лак",
      use: "Усиление крыла-плаща",
    },
    "rift-sigil": {
      label: "Малый знак разлома",
      short: "знак",
      use: "Базовое усиление охотницы",
    },
    "mist-ink": {
      label: "Чернила тумана",
      short: "чернила",
      use: "Печати и карты Ноэль",
    },
    "compass-silver": {
      label: "Серебро компаса",
      short: "серебро",
      use: "Архивная картография",
    },
    "rain-fragment": {
      label: "Средний дождевой фрагмент",
      short: "фрагмент",
      use: "Контрольный узел Ноэль",
    },
  };

  const heroUpgradeMaterialMap = {
    liora: ["moss-seed", "lumen-stone", "parchment"],
    rian: ["monolith-core", "compressed-moss", "awakening-stone"],
    saya: ["moth-ash", "night-lacquer", "rift-sigil"],
    noel: ["mist-ink", "compass-silver", "rain-fragment"],
  };

  const initialMaterialInventory = {
    "moss-seed": 1,
    parchment: 0,
    "lumen-stone": 2,
    "monolith-core": 0,
    "compressed-moss": 3,
    "awakening-stone": 1,
    "moth-ash": 2,
    "night-lacquer": 0,
    "rift-sigil": 4,
    "mist-ink": 1,
    "compass-silver": 0,
    "rain-fragment": 2,
  };

  const screenLabels = {
    home: "Дом",
    quests: "Экспедиции",
    world: "Мир",
    battle: "Бой",
    results: "Итоги",
    party: "Отряд",
    journal: "Дневник",
    shop: "Лавка",
    menu: "Меню",
    guide: "Руководство",
  };

  screenLabels.chapter = "Отчет главы";
  screenLabels.ending = "Эпилог";

  const sanctuaryBoons = [
    {
      id: "lumenwell",
      title: "Люменный колодец",
      body: "Каждая победа дает больше светового запаса для лавки и усилений.",
      bonusLabel: "+8 люмена за encounter",
    },
    {
      id: "mossward",
      title: "Мшистый оберег",
      body: "Святилище встречает отряд плотнее: первая линия держит удар увереннее.",
      bonusLabel: "+4 щита всей партии",
    },
    {
      id: "archive-lens",
      title: "Линза архива",
      body: "Короткие наблюдения собираются метко и дают больше материала для роста.",
      bonusLabel: "+1 фрагмент за босса",
    },
  ];

  const creatorBriefs = {
    home: {
      topic: "Первое впечатление",
      question: "Что игрок должен почувствовать раньше систем и цифр?",
      body: "Главный экран должен не перечислять функции, а сразу дать ощущение мира: тишину, масштаб, странность и ясное приглашение войти дальше.",
      checklist: [
        "Оставить один главный образ вместо нескольких равносильных окон.",
        "Проверить, что вход в экспедицию ощущается как приглашение в мир, а не как сухая кнопка.",
        "Не объяснять лишнего раньше атмосферы.",
      ],
      hint: "Сначала мир, потом механика.",
    },
    quests: {
      topic: "Читаемость маршрута",
      question: "Похоже ли это на путь через живое место, а не на список миссий?",
      body: "Экран экспедиций должен ощущаться как карта сопротивления среды: где путь ломается, где память сгущается и где отряд рискует войти слишком глубоко.",
      checklist: [
        "Выделить текущий узел как живую проблему, а не просто активную кнопку.",
        "Показывать одно следующее действие, а не россыпь интерфейсных возможностей.",
        "Не смешивать путь, архив и отряд в одном визуальном слое.",
      ],
      hint: "Хороший маршрут читается как направление и как настроение сразу.",
    },
    battle: {
      topic: "Ритм боя",
      question: "Похоже ли столкновение на встречу с формой памяти, а не на абстрактную арену?",
      body: "Даже простой бой должен говорить языком мира: враг кажется чем-то удерживающим память, а каждое действие меняет не только полоски, но и ощущение опасности формы.",
      checklist: [
        "Сделать очередность и текущую цель максимально читаемыми.",
        "Убедиться, что враг ощущается как сущность мира, а не просто статблок.",
        "Показывать результат действия ясно, но без агрессивной перегрузки эффектами.",
      ],
      hint: "Хороший бой сначала задаёт форму угрозы, потом даёт игроку ответ.",
    },
    results: {
      topic: "Награда и вывод",
      question: "После боя игрок понимает, что он выиграл кроме самого боя?",
      body: "Экран итогов должен связывать бой с прогрессией: ресурсы, архив, следующий шаг и ощущение завершённости узла.",
      checklist: [
        "Показать одну главную награду крупно.",
        "Сделать следующий шаг очевидным: забрать и вернуться или повторить.",
        "Не распылять внимание на слишком много мелких карточек.",
      ],
      hint: "Итог боя должен ощущаться как маленькая победа, а не как служебное окно.",
    },
    party: {
      topic: "Приоритеты",
      question: "Что мы пока сознательно не делаем?",
      body: "Чтобы проект не расползался, нужно честно назвать, что пока не входит в демо. Это не слабость, а инструмент фокуса.",
      checklist: [
        "Что не войдёт в ближайший месяц.",
        "Что можно оставить как текстовую заглушку.",
        "Что нужно доделать обязательно перед показом другим.",
      ],
      hint: "Персонажи: смотрите на силуэт, материалы и акцент. Не на количество деталей, а на то, насколько герой запоминается за секунду.",
    },
    journal: {
      topic: "Понятность лора",
      question: "Дневник помогает миру или мешает маршруту?",
      body: "Дневник должен быть местом для контекста, а не вторым экраном квестов. Лор хорош, когда он раскрывает мир и не спорит с задачей игрока.",
      checklist: [
        "Оставить в записи только один смысловой фокус.",
        "Связать запись с тем, как она была открыта.",
        "Не превращать каждую страницу в стену текста.",
      ],
      hint: "Одна сильная заметка лучше трёх средних абзацев.",
    },
    shop: {
      topic: "Ценность награды",
      question: "Игрок понимает, зачем ему этот предмет прямо сейчас?",
      body: "Лавка для демо должна не просто продавать предмет, а объяснять, на какого героя и на какой следующий бой он влияет.",
      checklist: [
        "Подсветить одного лучшего адресата для предмета.",
        "Показывать пользу простым языком, а не только названием ресурса.",
        "Не раздувать ассортимент, если половина позиций не нужна в демо.",
      ],
      hint: "У предмета должен быть адресат, цель и понятная польза.",
    },
    menu: {
      topic: "Управление демо",
      question: "Создателю и игроку здесь одинаково удобно?",
      body: "Системное меню должно быть коротким и надёжным: настройки, guide и всё, что помогает не теряться во время показа.",
      checklist: [
        "Упростить путь к руководству и сохранённому прогрессу.",
        "Не прятать полезные creator-инструменты слишком глубоко.",
        "Проверить, что клавиатурная навигация работает без мыши.",
      ],
      hint: "Хорошее меню не отвлекает, а быстро возвращает в игру.",
    },
    guide: {
      topic: "Фокус проекта",
      question: "Здесь честно показано состояние игры или всё ещё смешаны два разных статуса?",
      body: "Guide нужен не для самоуспокоения, а для фиксации закона мира: что уже собрано, что всё ещё жанрово и где проект пока ещё не стал собой.",
      checklist: [
        "Развести состояние проекта и прогресс текущего сейва.",
        "Писать коротко и конкретно, но не терять тон мира.",
        "Не делать из guide ещё один квестовый экран.",
      ],
      hint: "Guide полезен тогда, когда помогает понять, что уже наше, а что ещё нет.",
    },
  };

  function createInitialCreatorState() {
    return {
      isOpen: false,
      draftQuestion: "",
      projectAnswer: "",
      privateNotes: "",
      messages: [
        {
          role: "assistant",
          title: "Старт creator-кабинета",
          body: "Здесь можно писать вопросы простыми словами. Ответы приходят сразу локально в проекте и помогают не теряться в приоритетах.",
        },
      ],
    };
  }

  function createInitialWorldState() {
    return {
      activeLocationId: worldLocations[0].id,
      activeQuestId: worldLocations[0].quests[0].id,
      completedQuestIds: {},
      npcLine: "",
    };
  }

  const battleSkillSets = {
    liora: [
      {
        id: "lumen-marker",
        name: "Люмен-маркер",
        cost: "2 AP",
        description: "Помечает шов брони цели и открывает окно для тяжёлого удара.",
        damage: 160,
        resonance: 8,
        effect: "mark",
      },
      {
        id: "soft-turn",
        name: "Мягкий разворот",
        cost: "3 AP",
        description: "Снижает давление на фронт и добавляет защите команды мягкий щит.",
        damage: 120,
        resonance: 10,
        effect: "guard",
      },
    ],
    rian: [
      {
        id: "deaf-strike",
        name: "Глухой удар",
        cost: "3 AP",
        description: "Ломает стойку и получает бонус по цели под меткой.",
        damage: 260,
        resonance: 6,
        effect: "shatter",
      },
      {
        id: "buttress-arch",
        name: "Опорная арка",
        cost: "2 AP",
        description: "Укрепляет переднюю линию и поднимает защиту всего строя.",
        damage: 90,
        resonance: 12,
        effect: "bulwark",
      },
    ],
    saya: [
      {
        id: "red-dust",
        name: "Красная пыльца",
        cost: "2 AP",
        description: "Оставляет слабость на выбранной цели и ускоряет добивание.",
        damage: 180,
        resonance: 8,
        effect: "vulnerable",
      },
      {
        id: "moth-eclipse",
        name: "Молье затмение",
        cost: "3 AP",
        description: "Высокий урон по цели со слабостью или уже сбитым телеграфом.",
        damage: 290,
        resonance: 7,
        effect: "reap",
      },
    ],
    noel: [
      {
        id: "rain-map",
        name: "Карта дождя",
        cost: "2 AP",
        description: "Сдвигает очередь врага и отталкивает его в более уязвимый ритм.",
        damage: 150,
        resonance: 11,
        effect: "delay",
      },
      {
        id: "blue-note",
        name: "Синяя аннотация",
        cost: "2 AP",
        description: "Повышает резонанс маршрута и усиливает следующее действие отряда.",
        damage: 110,
        resonance: 16,
        effect: "focus",
      },
    ],
  };

  function createBattleState() {
    return {
      title: "Немой колосс",
      subtitle: "Глава 1 · Сад немого стража",
      objective: "Сломайте два узла резонанса и сорвите тяжёлый телеграф босса до обрушения арки.",
      phase: "Фаза I · Сломанное святилище",
      result: "ongoing",
      turn: 1,
      resonance: 42,
      actingHeroId: "liora",
      selectedSkillId: battleSkillSets.liora[0].id,
      selectedTargetId: "colossus",
      sourceQuestId: "story",
      sourceNodeIndex: 0,
      stats: {
        damageDealt: 0,
        damageTaken: 0,
        enemiesDefeated: 0,
        heroActions: 0,
        highestHit: 0,
        resonancePeak: 42,
        lastActingHeroId: "liora",
        killingBlowHeroId: null,
      },
      allies: [
        { id: "liora", name: "Лиора", role: "Проводница мха", hp: 1583, maxHp: 1583, guard: 18, form: "guide" },
        { id: "rian", name: "Риан", role: "Камнерез", hp: 1924, maxHp: 1924, guard: 32, form: "vanguard" },
        { id: "saya", name: "Сайя", role: "Охотница", hp: 1326, maxHp: 1326, guard: 12, form: "hunter" },
        { id: "noel", name: "Ноэль", role: "Архивистка", hp: 1418, maxHp: 1418, guard: 14, form: "archivist" },
      ],
      enemies: [
        {
          id: "colossus",
          name: "Немой колосс",
          role: "Босс главы",
          hp: 4680,
          maxHp: 4680,
          armor: 3,
          intent: "Удар аркой через два такта",
          description: "Монументальный страж, медленно наращивающий давление по передней линии.",
          form: "colossus",
          marked: false,
          vulnerable: false,
        },
        {
          id: "cantor",
          name: "Хор корней",
          role: "Поддержка",
          hp: 1240,
          maxHp: 1240,
          armor: 1,
          intent: "Сцепление корней",
          description: "Поддерживает босса и стягивает поле узкими коридорами.",
          form: "cantor",
          marked: false,
          vulnerable: false,
        },
      ],
      queue: ["liora", "noel", "colossus", "saya", "cantor", "rian"],
      log: [
        {
          title: "Контакт установлен",
          body: "Отряд входит в неф. Лиора первой берёт на себя темп резонанса.",
        },
        {
          title: "Колосс просыпается",
          body: "Камень начинает двигаться, а арка над ареной отвечает низким эхом.",
        },
      ],
    };
  }

  const battleUnitPalette = {
    guide: {
      unit1: "#eef2eb",
      unit2: "#b9d8d1",
      unit3: "#47635d",
      skin1: "#f3ece3",
      skin2: "#d2c2b4",
      weapon1: "#f0ece4",
      weaponRot: "20deg",
    },
    vanguard: {
      unit1: "#d9c7ab",
      unit2: "#8a7f69",
      unit3: "#3a362f",
      skin1: "#e9d6c5",
      skin2: "#ba9a82",
      weapon1: "#afa78e",
      weaponRot: "12deg",
    },
    hunter: {
      unit1: "#f0d7d3",
      unit2: "#915064",
      unit3: "#231820",
      skin1: "#f0dfd8",
      skin2: "#cba291",
      weapon1: "#dcc6c9",
      weaponRot: "-26deg",
    },
    archivist: {
      unit1: "#eef1ef",
      unit2: "#a8c4d8",
      unit3: "#46596a",
      skin1: "#f4e8de",
      skin2: "#d0baa9",
      weapon1: "#e0e4eb",
      weaponRot: "34deg",
    },
    colossus: {
      unit1: "#f1eee7",
      unit2: "#95adb1",
      unit3: "#3a4448",
      skin1: "#ece6dd",
      skin2: "#c7b7a6",
      weapon1: "#d5d4cd",
      weaponRot: "18deg",
    },
    cantor: {
      unit1: "#d8dbd1",
      unit2: "#67806e",
      unit3: "#1d2724",
      skin1: "#d8cabc",
      skin2: "#a29080",
      weapon1: "#bfccb7",
      weaponRot: "-16deg",
    },
  };

  const screenButtons = document.querySelectorAll("[data-screen-target]");
  const screens = document.querySelectorAll("[data-screen]");
  const validScreenNames = new Set(Array.from(screens, (screen) => screen.dataset.screen));
  const railButtons = document.querySelectorAll(".rail-button");
  const dockButtons = document.querySelectorAll(".dock-button");
  const questCardsContainer = document.getElementById("quest-cards");
  const questTitle = document.getElementById("quest-title");
  const questDescription = document.getElementById("quest-description");
  const questStatus = document.getElementById("quest-status");
  const questProgress = document.getElementById("quest-progress");
  const questCost = document.getElementById("quest-cost");
  const questNodeType = document.getElementById("quest-node-type");
  const questObjective = document.getElementById("quest-objective");
  const questReward = document.getElementById("quest-reward");
  const questRecommendation = document.getElementById("quest-recommendation");
  const routeMap = document.getElementById("route-map");
  const routeLog = document.getElementById("route-log");
  const routeAdvanceButton = document.getElementById("route-advance");
  const openBattleButton = document.getElementById("open-battle");
  const questThreatPill = document.getElementById("quest-threat-pill");
  const questRewardCopy = document.getElementById("quest-reward-copy");
  const questSceneVisual = document.getElementById("quest-scene-visual");
  const questSpotlightState = document.getElementById("quest-spotlight-state");
  const questSpotlightTitle = document.getElementById("quest-spotlight-title");
  const questSpotlightBody = document.getElementById("quest-spotlight-body");
  const questSpotlightTags = document.getElementById("quest-spotlight-tags");
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
  const portraitArt = document.getElementById("portrait-art");
  const portraitArtBackdrop = document.getElementById("portrait-art-backdrop");
  const homeStageArt = document.querySelector(".home-stage-art");
  const homeHeroStage = document.querySelector('.screen[data-screen="home"] .hero-stage');
  const homeStageArtFigure = document.getElementById("home-stage-art-figure");
  const homeStageArtFallback = document.getElementById("home-stage-art-fallback");
  const partyUpgradeTabs = document.querySelectorAll("[data-party-tab]");
  const partyPanelSections = document.querySelectorAll("[data-party-panels]");
  const portraitStageKicker = document.getElementById("portrait-stage-kicker");
  const portraitStageName = document.getElementById("portrait-stage-name");
  const portraitStageSummary = document.getElementById("portrait-stage-summary");
  const resourceAp = document.getElementById("resource-ap");
  const resourceFragments = document.getElementById("resource-fragments");
  const resourceLumen = document.getElementById("resource-lumen");
  const topbarScreenPill = document.getElementById("topbar-screen-pill");
  const topbarStatusTitle = document.getElementById("topbar-status-title");
  const topbarStatusCopy = document.getElementById("topbar-status-copy");
  const topbarStatusTags = document.getElementById("topbar-status-tags");
  const journalTabsContainer = document.getElementById("journal-tabs");
  const journalList = document.getElementById("journal-list");
  const journalKicker = document.getElementById("journal-kicker");
  const journalTitle = document.getElementById("journal-title");
  const journalBody = document.getElementById("journal-body");
  const journalMeta = document.getElementById("journal-meta");
  const journalStamps = document.getElementById("journal-stamps");
  const journalHighlights = document.getElementById("journal-highlights");
  const journalSideKicker = document.getElementById("journal-side-kicker");
  const journalSideTitle = document.getElementById("journal-side-title");
  const shopGrid = document.getElementById("shop-grid");
  const shopItemName = document.getElementById("shop-item-name");
  const shopItemDesc = document.getElementById("shop-item-desc");
  const shopItemMeta = document.getElementById("shop-item-meta");
  const shopBuy = document.getElementById("shop-buy");
  const uiScaleOptionsContainer = document.getElementById("ui-scale-options");
  const toggleMotion = document.getElementById("toggle-motion");
  const toggleContrast = document.getElementById("toggle-contrast");
  const openGuideButton = document.getElementById("open-guide");
  const menuCheckList = document.getElementById("menu-check-list");
  const menuLogList = document.getElementById("menu-log-list");
  const guideSectionList = document.getElementById("guide-section-list");
  const guideKicker = document.getElementById("guide-kicker");
  const guideTitle = document.getElementById("guide-title");
  const guideSummary = document.getElementById("guide-summary");
  const guidePointList = document.getElementById("guide-point-list");
  const guideStatusTitle = document.getElementById("guide-status-title");
  const guideStatusList = document.getElementById("guide-status-list");
  const battleTitle = document.getElementById("battle-title");
  const battleSubtitle = document.getElementById("battle-subtitle");
  const battleObjective = document.getElementById("battle-objective");
  const battlePhase = document.getElementById("battle-phase");
  const battleTurn = document.getElementById("battle-turn");
  const battleParty = document.getElementById("battle-party");
  const battleResonanceValue = document.getElementById("battle-resonance-value");
  const battleResonanceBar = document.getElementById("battle-resonance-bar");
  const battleAllies = document.getElementById("battle-allies");
  const battleEnemies = document.getElementById("battle-enemies");
  const battleIntents = document.getElementById("battle-intents");
  const battleQueue = document.getElementById("battle-queue");
  const battleTargetName = document.getElementById("battle-target-name");
  const battleTargetDesc = document.getElementById("battle-target-desc");
  const battleLog = document.getElementById("battle-log");
  const battleActingName = document.getElementById("battle-acting-name");
  const battleActingRole = document.getElementById("battle-acting-role");
  const battleSkillGrid = document.getElementById("battle-skill-grid");
  const battleCommit = document.getElementById("battle-commit");
  const battleBack = document.getElementById("battle-back");
  const resultKicker = document.getElementById("result-kicker");
  const resultTitle = document.getElementById("result-title");
  const resultSubtitle = document.getElementById("result-subtitle");
  const resultStatusPill = document.getElementById("result-status-pill");
  const resultSummary = document.getElementById("result-summary");
  const resultRewardList = document.getElementById("result-reward-list");
  const resultNoteList = document.getElementById("result-note-list");
  const resultNextTitle = document.getElementById("result-next-title");
  const resultNextCopy = document.getElementById("result-next-copy");
  const resultPrimary = document.getElementById("result-primary");
  const resultSecondary = document.getElementById("result-secondary");
  const resultsScreen = document.querySelector('.screen[data-screen="results"]');
  const resultsScape = document.querySelector('.results-scape');
  const resultsSummaryPanel = document.querySelector('.results-summary');
  const resultsReportPanel = document.querySelector('.results-report');
  const resultsActionsPanel = document.querySelector('.results-actions');
  const homeStageStatusCopy = document.getElementById("home-stage-status-copy");
  const homeStageStatusTitle = document.getElementById("home-stage-status-title");
  const homeStageStatusTags = document.getElementById("home-stage-status-tags");
  const homeFocusCard = document.getElementById("home-focus-card");
  const homeScenePanel = document.getElementById("home-scene-panel");
  const homeCommandGrid = document.getElementById("home-command-grid");
  const homeCommandStrip = document.getElementById("home-command-strip");
  const homeEncounterPreview = document.getElementById("home-encounter-preview");
  const homePartyStrip = document.getElementById("home-party-strip");
  const sanctuaryPoiMap = document.getElementById("sanctuary-poi-map");
  const sanctuaryPoiTitle = document.getElementById("sanctuary-poi-title");
  const sanctuaryPoiSubtitle = document.getElementById("sanctuary-poi-subtitle");
  const sanctuaryPoiCopy = document.getElementById("sanctuary-poi-copy");
  const sanctuaryPoiAction = document.getElementById("sanctuary-poi-action");
  const worldScreen = document.querySelector('.screen[data-screen="world"]');
  const worldLocationList = document.getElementById("world-location-list");
  const worldBiomeKicker = document.getElementById("world-biome-kicker");
  const worldLocationTitle = document.getElementById("world-location-title");
  const worldLocationCopy = document.getElementById("world-location-copy");
  const worldPanorama = document.getElementById("world-panorama");
  const worldStageFoot = document.getElementById("world-stage-foot");
  const worldNpcName = document.getElementById("world-npc-name");
  const worldNpcRole = document.getElementById("world-npc-role");
  const worldNpcLine = document.getElementById("world-npc-line");
  const worldDialogueOptions = document.getElementById("world-dialogue-options");
  const worldQuestList = document.getElementById("world-quest-list");
  const worldQuestComplete = document.getElementById("world-quest-complete");
  const chapterKicker = document.getElementById("chapter-kicker");
  const chapterTitle = document.getElementById("chapter-title");
  const chapterSummary = document.getElementById("chapter-summary");
  const chapterStatList = document.getElementById("chapter-stat-list");
  const chapterChoiceTitle = document.getElementById("chapter-choice-title");
  const chapterChoiceCopy = document.getElementById("chapter-choice-copy");
  const chapterBoonGrid = document.getElementById("chapter-boon-grid");
  const chapterNextTitle = document.getElementById("chapter-next-title");
  const chapterNextCopy = document.getElementById("chapter-next-copy");
  const chapterPrimary = document.getElementById("chapter-primary");
  const chapterSecondary = document.getElementById("chapter-secondary");
  const endingKicker = document.getElementById("ending-kicker");
  const endingTitle = document.getElementById("ending-title");
  const endingSummary = document.getElementById("ending-summary");
  const endingPillars = document.getElementById("ending-pillars");
  const endingNoteList = document.getElementById("ending-note-list");
  const endingPrimary = document.getElementById("ending-primary");
  const endingSecondary = document.getElementById("ending-secondary");
  const heroUpgradeTitle = document.getElementById("hero-upgrade-title");
  const heroUpgradeCopy = document.getElementById("hero-upgrade-copy");
  const heroUpgradeButton = document.getElementById("hero-upgrade-button");
  const creatorCabin = document.getElementById("creator-cabin");
  const creatorBackdrop = document.getElementById("creator-backdrop");
  const creatorClose = document.getElementById("creator-close");
  const creatorCurrentScreen = document.getElementById("creator-current-screen");
  const creatorTopic = document.getElementById("creator-topic");
  const creatorProjectState = document.getElementById("creator-project-state");
  const creatorSaveProgress = document.getElementById("creator-save-progress");
  const creatorBriefQuestion = document.getElementById("creator-brief-question");
  const creatorBriefBody = document.getElementById("creator-brief-body");
  const creatorChecklist = document.getElementById("creator-checklist");
  const creatorScreenHint = document.getElementById("creator-screen-hint");
  const creatorChatLog = document.getElementById("creator-chat-log");
  const creatorQuestionInput = document.getElementById("creator-question-input");
  const creatorSend = document.getElementById("creator-send");
  const creatorProjectAnswer = document.getElementById("creator-project-answer");
  const creatorPrivateNotes = document.getElementById("creator-private-notes");
  const creatorLivePill = document.getElementById("creator-live-pill");
  const creatorPromptButtons = document.querySelectorAll("[data-creator-prompt]");
  const brandMark = document.querySelector(".brand-mark");

  const state = {
    activeScreen: "home",
    activeQuestId: questCards[0].id,
    activeHeroId: heroes[0].id,
    activePartyTab: "design",
    activeJournalTab: journalTabs[0].id,
    activeJournalEntryId: journalTabs[0].entries[0].id,
    activeShopItemId: shopItems[0].id,
    activeGuideSectionId: guideSections[0].id,
    resources: {
      ap: "15 / 15",
      fragments: 3,
      lumen: 420,
    },
    materials: { ...initialMaterialInventory },
    settings: {
      uiScaleId: "default",
      reducedMotion: false,
      highContrast: false,
    },
    sessionLog: [
      {
        title: "Интерфейс синхронизирован",
        body: "Новые окна получают данные из общего состояния и не остаются пустыми.",
        time: "20:06",
      },
      {
        title: "Референсы собраны",
        body: "Архив, лавка и меню сведены к большим зелёным сценам без мобильной дробности.",
        time: "20:12",
      },
    ],
    clockMs: 0,
    battle: createBattleState(),
    lastResult: null,
    resolvedBattles: {},
    claimedNodeRewards: {},
    chapterSeen: {},
    chapterBoons: {},
    selectedChapterBoonId: sanctuaryBoons[0].id,
    heroUpgrades: Object.fromEntries(heroes.map((hero) => [hero.id, 0])),
    routeProgress: Object.fromEntries(questCards.map((quest) => [quest.id, 0])),
    home: {
      activePoiId: sanctuaryHotspots[0].id,
    },
    world: createInitialWorldState(),
    creator: createInitialCreatorState(),
  };

  function getActiveQuest() {
    return questCards.find((quest) => quest.id === state.activeQuestId) ?? questCards[0];
  }

  function getActiveHero() {
    return heroes.find((hero) => hero.id === state.activeHeroId) ?? heroes[0];
  }

  function getHeroById(heroId) {
    return heroes.find((hero) => hero.id === heroId) ?? heroes[0];
  }

  function getHeroUpgradeLevel(heroId) {
    return state.heroUpgrades[heroId] ?? 0;
  }

  function getHeroUpgradeCost(heroId) {
    const tier = getHeroUpgradeLevel(heroId);
    return {
      lumen: 60 + tier * 45,
      fragments: tier >= 2 ? 2 : 1,
    };
  }

  function getActiveBoon() {
    return sanctuaryBoons.find((boon) => boon.id === state.chapterBoons.story) ?? null;
  }

  function getHeroBattleProfile(heroId) {
    const baseProfiles = {
      liora: { hp: 1583, guard: 18, attack: 162 },
      rian: { hp: 1924, guard: 32, attack: 149 },
      saya: { hp: 1326, guard: 12, attack: 188 },
      noel: { hp: 1418, guard: 14, attack: 136 },
    };

    const base = baseProfiles[heroId] ?? { hp: 1200, guard: 10, attack: 140 };
    const tier = getHeroUpgradeLevel(heroId);
    const boon = getActiveBoon();

    return {
      hp: base.hp + tier * 120,
      guard: base.guard + tier * 2 + (boon?.id === "mossward" ? 4 : 0),
      attack: base.attack + tier * 14,
      tier,
    };
  }

  function buildBattleAllies() {
    return heroes.map((hero) => {
      const profile = getHeroBattleProfile(hero.id);
      return {
        id: hero.id,
        name: hero.name,
        role: hero.role,
        hp: profile.hp,
        maxHp: profile.hp,
        guard: profile.guard,
        form: hero.id === "liora" ? "guide" : hero.id === "rian" ? "vanguard" : hero.id === "saya" ? "hunter" : "archivist",
      };
    });
  }

  function getActiveJournalTab() {
    return journalTabs.find((tab) => tab.id === state.activeJournalTab) ?? journalTabs[0];
  }

  function getActiveJournalEntry() {
    const activeTab = getActiveJournalTab();
    return activeTab.entries.find((entry) => entry.id === state.activeJournalEntryId) ?? activeTab.entries[0];
  }

  function getActiveShopItem() {
    return shopItems.find((item) => item.id === state.activeShopItemId) ?? shopItems[0];
  }

  function getActiveGuideSection() {
    return guideSections.find((section) => section.id === state.activeGuideSectionId) ?? guideSections[0];
  }

  function getNodeKey(questId, nodeIndex) {
    return `${questId}:${nodeIndex}`;
  }

  function isCombatNode(node) {
    return ["Стычка", "Угроза", "Boss"].includes(node.label);
  }

  function isJournalEntryUnlocked(entryId) {
    const rule = journalUnlockRules[entryId];
    if (!rule) {
      return true;
    }

    const progress = state.routeProgress[rule.questId] ?? 0;
    return progress >= rule.minNode;
  }

  function saveState() {
    if (typeof window === "undefined" || !window.localStorage) {
      return;
    }

    const payload = {
      activeScreen: state.activeScreen,
      activeQuestId: state.activeQuestId,
      activeHeroId: state.activeHeroId,
      activePartyTab: state.activePartyTab,
      activeJournalTab: state.activeJournalTab,
      activeJournalEntryId: state.activeJournalEntryId,
      activeShopItemId: state.activeShopItemId,
      activeGuideSectionId: state.activeGuideSectionId,
      resources: state.resources,
      materials: state.materials,
      settings: state.settings,
      sessionLog: state.sessionLog,
      routeProgress: state.routeProgress,
      resolvedBattles: state.resolvedBattles,
      claimedNodeRewards: state.claimedNodeRewards,
      lastResult: state.lastResult,
      chapterSeen: state.chapterSeen,
      chapterBoons: state.chapterBoons,
      selectedChapterBoonId: state.selectedChapterBoonId,
      heroUpgrades: state.heroUpgrades,
      home: state.home,
      world: state.world,
      creator: {
        draftQuestion: state.creator.draftQuestion,
        projectAnswer: state.creator.projectAnswer,
        privateNotes: state.creator.privateNotes,
        messages: state.creator.messages,
      },
    };

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }

  function loadState() {
    if (typeof window === "undefined" || !window.localStorage) {
      return;
    }

    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return;
    }

    try {
      const parsed = JSON.parse(raw);
      if (parsed.activeScreen) state.activeScreen = parsed.activeScreen;
      if (parsed.activeQuestId) state.activeQuestId = parsed.activeQuestId;
      if (parsed.activeHeroId) state.activeHeroId = parsed.activeHeroId;
      if (parsed.activePartyTab) state.activePartyTab = parsed.activePartyTab;
      if (parsed.activeJournalTab) state.activeJournalTab = parsed.activeJournalTab;
      if (parsed.activeJournalEntryId) state.activeJournalEntryId = parsed.activeJournalEntryId;
      if (parsed.activeShopItemId) state.activeShopItemId = parsed.activeShopItemId;
      if (parsed.activeGuideSectionId) state.activeGuideSectionId = parsed.activeGuideSectionId;
      if (parsed.resources) state.resources = { ...state.resources, ...parsed.resources };
      if (parsed.materials) state.materials = { ...state.materials, ...parsed.materials };
      if (parsed.settings) state.settings = { ...state.settings, ...parsed.settings };
      if (parsed.routeProgress) state.routeProgress = { ...state.routeProgress, ...parsed.routeProgress };
      if (parsed.resolvedBattles) state.resolvedBattles = { ...parsed.resolvedBattles };
      if (parsed.claimedNodeRewards) state.claimedNodeRewards = { ...parsed.claimedNodeRewards };
      if (parsed.lastResult) state.lastResult = parsed.lastResult;
      if (parsed.chapterSeen) state.chapterSeen = { ...parsed.chapterSeen };
      if (parsed.chapterBoons) state.chapterBoons = { ...parsed.chapterBoons };
      if (parsed.selectedChapterBoonId) state.selectedChapterBoonId = parsed.selectedChapterBoonId;
      if (parsed.heroUpgrades) state.heroUpgrades = { ...state.heroUpgrades, ...parsed.heroUpgrades };
      if (parsed.home) {
        state.home = {
          ...state.home,
          ...parsed.home,
        };
      }
      if (parsed.world) {
        state.world = {
          ...state.world,
          ...parsed.world,
          completedQuestIds: {
            ...state.world.completedQuestIds,
            ...(parsed.world.completedQuestIds ?? {}),
          },
        };
      }
      if (Array.isArray(parsed.sessionLog) && parsed.sessionLog.length) {
        state.sessionLog = parsed.sessionLog.slice(0, 6);
      }
      if (parsed.creator) {
        state.creator = {
          ...state.creator,
          ...parsed.creator,
          isOpen: false,
          messages: Array.isArray(parsed.creator.messages) && parsed.creator.messages.length
            ? parsed.creator.messages.slice(-12)
            : state.creator.messages,
        };
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }

  function getNodeReward(quest, nodeIndex) {
    const fallbackRewards = [
      { lumen: 12, materials: [{ id: "moss-seed", qty: 1 }], note: "Найден люменный узел и обновлена карта маршрута." },
      { fragments: 1, materials: [{ id: "parchment", qty: 1 }], note: "Архив пополнился фрагментом и короткой записью." },
      { lumen: 18, materials: [{ id: "moth-ash", qty: 1 }], note: "После столкновения собран запас люмена и след боя." },
      { ap: "15 / 15", materials: [{ id: "mist-ink", qty: 1 }], note: "Команда перевела дух и восстановила походный ритм." },
      { fragments: 2, materials: [{ id: "monolith-core", qty: 1 }], note: "Узел завершён, добыт редкий след главы." },
    ];

    return quest.route[nodeIndex].reward ?? fallbackRewards[nodeIndex] ?? { note: "Маршрут продвинут." };
  }

  function getQuestBlueprint(questId) {
    return (
      questBlueprints[questId] ?? {
        objective: "Продвиньте маршрут и удерживайте строй.",
        recommendation: "Соберите устойчивую партию под текущую угрозу.",
        reward: "Ресурсы маршрута и прогресс главы.",
        threat: "Экспедиция",
      }
    );
  }

  function getQuestById(questId) {
    return questCards.find((quest) => quest.id === questId) ?? questCards[0];
  }

  function getQuestProgress(questId) {
    const quest = getQuestById(questId);
    return Math.max(0, Math.min(state.routeProgress[questId] ?? 0, quest.route.length));
  }

  function getQuestNodeContext(quest) {
    const progress = getQuestProgress(quest.id);
    const isCompleted = progress >= quest.route.length;
    const nodeIndex = isCompleted ? quest.route.length - 1 : progress;
    const node = quest.route[nodeIndex];
    const reward = node ? getNodeReward(quest, nodeIndex) : { note: "Маршрут завершён." };
    const resolved = node ? Boolean(state.resolvedBattles[getNodeKey(quest.id, nodeIndex)]) : false;

    return {
      progress,
      isCompleted,
      nodeIndex,
      node,
      reward,
      resolved,
    };
  }

  function formatRewardSummary(reward) {
    const parts = [];
    if (reward.lumen) {
      parts.push(`${reward.lumen} люмена`);
    }
    if (reward.fragments) {
      parts.push(`${reward.fragments} фрагм.`);
    }
    if (reward.ap) {
      parts.push("восстановление AP");
    }
    if (reward.materials?.length) {
      parts.push(
        reward.materials
          .map((item) => `+${item.qty} ${materialCatalog[item.id]?.short ?? item.id}`)
          .join(" · "),
      );
    }
    if (reward.note) {
      parts.push(reward.note);
    }
    return parts.join(" · ") || "Прогресс главы и архивный след.";
  }

  function formatRewardHeadline(reward) {
    const parts = [];
    if (reward.lumen) {
      parts.push(`${reward.lumen} люмена`);
    }
    if (reward.fragments) {
      parts.push(`${reward.fragments} фрагм.`);
    }
    if (reward.ap) {
      parts.push("восстановление AP");
    }
    if (reward.materials?.length) {
      parts.push(
        reward.materials
          .map((item) => `+${item.qty} ${materialCatalog[item.id]?.short ?? item.id}`)
          .join(" · "),
      );
    }
    return parts.join(" · ") || "Архивный след и прогресс главы.";
  }

  function addMaterials(rewardMaterials = []) {
    rewardMaterials.forEach((item) => {
      if (!item?.id || !item.qty) {
        return;
      }
      state.materials[item.id] = (state.materials[item.id] ?? 0) + item.qty;
    });
  }

  function getMaterialCount(materialId) {
    return state.materials[materialId] ?? 0;
  }

  function getUpgradeMaterialRequirement(heroId) {
    const tier = getHeroUpgradeLevel(heroId);
    const materialId = heroUpgradeMaterialMap[heroId]?.[Math.min(tier, heroUpgradeMaterialMap[heroId].length - 1)] ?? null;
    return materialId
      ? {
          id: materialId,
          qty: tier >= 2 ? 2 : 1,
          label: materialCatalog[materialId]?.label ?? materialId,
        }
      : null;
  }

  function getNodeTypeLabel(node, resolved) {
    if (!node) {
      return "Завершено";
    }
    if (isCombatNode(node)) {
      return resolved ? "Бой выигран" : "Боевой узел";
    }
    if (node.label === "Лор") {
      return "Архив";
    }
    if (node.label === "Передышка" || node.label === "Ресурс") {
      return "Передышка";
    }
    if (node.label === "Вход" || node.label === "Сбор" || node.label === "Поиск") {
      return "Разведка";
    }
    return node.label;
  }

  function getJournalUnlockLabel(entryId) {
    const rule = journalUnlockRules[entryId];
    if (!rule) {
      return "Открыто с начала кампании.";
    }

    const quest = getQuestById(rule.questId);
    const node = quest.route[Math.min(rule.minNode, quest.route.length - 1)];
    return `Откроется после узла «${node.title}» в главе «${quest.title}».`;
  }

  function getFirstUnlockedJournalEntryId(tab) {
    return tab.entries.find((entry) => isJournalEntryUnlocked(entry.id))?.id ?? tab.entries[0]?.id;
  }

  function ensureValidJournalSelection() {
    let activeTab = getActiveJournalTab();
    let firstUnlockedId = getFirstUnlockedJournalEntryId(activeTab);

    if (!firstUnlockedId) {
      const fallbackTab = journalTabs.find((tab) => Boolean(getFirstUnlockedJournalEntryId(tab))) ?? journalTabs[0];
      state.activeJournalTab = fallbackTab.id;
      activeTab = fallbackTab;
      firstUnlockedId = getFirstUnlockedJournalEntryId(activeTab);
    }

    if (!activeTab.entries.some((entry) => entry.id === state.activeJournalEntryId && isJournalEntryUnlocked(entry.id))) {
      state.activeJournalEntryId = firstUnlockedId;
    }
  }

  function claimNodeReward(quest, nodeIndex) {
    const rewardKey = getNodeKey(quest.id, nodeIndex);
    if (state.claimedNodeRewards[rewardKey]) {
      return false;
    }

    const reward = getNodeReward(quest, nodeIndex);
    if (reward.lumen) {
      state.resources.lumen += reward.lumen;
    }
    if (reward.fragments) {
      state.resources.fragments += reward.fragments;
    }
    if (reward.ap) {
      state.resources.ap = reward.ap;
    }
    addMaterials(reward.materials);

    state.claimedNodeRewards[rewardKey] = true;
    renderResources();
    return true;
  }

  function getReadinessReport() {
    const totalJournalEntries = journalTabs.reduce((sum, tab) => sum + tab.entries.length, 0);
    const unlockedJournalEntries = journalTabs.reduce(
      (sum, tab) => sum + tab.entries.filter((entry) => isJournalEntryUnlocked(entry.id)).length,
      0,
    );
    const totalNodes = questCards.reduce((sum, quest) => sum + quest.route.length, 0);
    const clearedNodes = questCards.reduce((sum, quest) => sum + getQuestProgress(quest.id), 0);
    const totalCombatNodes = questCards.reduce(
      (sum, quest) => sum + quest.route.filter((node) => isCombatNode(node)).length,
      0,
    );
    const resolvedCombatNodes = Object.keys(state.resolvedBattles).length;
    const upgradedHeroes = Object.values(state.heroUpgrades).filter((tier) => tier > 0).length;
    const chapterClosed = getQuestProgress("story") >= getQuestById("story").route.length ? 1 : 0;
    const boonChosen = state.chapterBoons.story ? 1 : 0;
    const percent = Math.min(
      98,
      62
        + Math.round((clearedNodes / Math.max(1, totalNodes)) * 16)
        + Math.round((resolvedCombatNodes / Math.max(1, totalCombatNodes)) * 8)
        + upgradedHeroes * 2
        + chapterClosed * 6
        + boonChosen * 4,
    );

    return {
      percent,
      cards: [
        {
          title: "Визуальный shell",
          body: "Крупные формы и desktop-композиция уже держат витринный масштаб, но теперь их нужно довести до более авторского и менее жанрового звучания.",
          tone: "good",
        },
        {
          title: "Живой цикл",
          body: `${clearedNodes} из ${totalNodes} узлов уже проживаются как часть маршрута, ${unlockedJournalEntries} из ${totalJournalEntries} архивных следов открываются по прогрессу, а ${resolvedCombatNodes} из ${totalCombatNodes} столкновений могут быть закреплены как пройденные.`,
          tone: "good",
        },
        {
          title: "Следующий проход",
          body: "Теперь главная задача не просто добавлять контент, а довести мир, героев и UI до одного авторского закона.",
          tone: "low",
        },
      ],
    };
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function getSaveProgressPercent() {
    const totalNodes = questCards.reduce((sum, quest) => sum + quest.route.length, 0);
    const clearedNodes = questCards.reduce((sum, quest) => sum + getQuestProgress(quest.id), 0);
    if (!totalNodes) {
      return 0;
    }
    return Math.round((clearedNodes / totalNodes) * 100);
  }

  function getCreatorBrief() {
    return creatorBriefs[state.activeScreen] ?? creatorBriefs.party;
  }

  function renderCreatorChecklist(items) {
    creatorChecklist.innerHTML = items
      .map(
        (item) => `
          <article class="creator-check-item">
            <strong>${escapeHtml(item)}</strong>
          </article>
        `,
      )
      .join("");
  }

  function renderCreatorMessages() {
    creatorChatLog.innerHTML = state.creator.messages
      .map(
        (message) => `
          <article class="creator-message is-${message.role}">
            <strong>${escapeHtml(message.title)}</strong>
            <p>${escapeHtml(message.body)}</p>
          </article>
        `,
      )
      .join("");

    creatorChatLog.scrollTop = creatorChatLog.scrollHeight;
  }

  function updateCreatorBrief() {
    const brief = getCreatorBrief();
    const readiness = getReadinessReport();

    creatorCurrentScreen.textContent = screenLabels[state.activeScreen] ?? state.activeScreen;
    creatorTopic.textContent = brief.topic;
    creatorProjectState.textContent = `${readiness.percent}%`;
    creatorSaveProgress.textContent = `${getSaveProgressPercent()}%`;
    creatorBriefQuestion.textContent = brief.question;
    creatorBriefBody.textContent = brief.body;
    creatorScreenHint.textContent = brief.hint;
    renderCreatorChecklist(brief.checklist);
  }

  function renderCreatorCabin() {
    creatorCabin.setAttribute("aria-hidden", state.creator.isOpen ? "false" : "true");
    document.body.classList.toggle("creator-open", state.creator.isOpen);
    creatorQuestionInput.value = state.creator.draftQuestion;
    creatorProjectAnswer.value = state.creator.projectAnswer;
    creatorPrivateNotes.value = state.creator.privateNotes;
    creatorLivePill.textContent = state.creator.isOpen ? "Локальный ответчик готов" : "Кабинет скрыт";
    updateCreatorBrief();
    renderCreatorMessages();
  }

  function openCreatorCabin(prefillQuestion = "") {
    state.creator.isOpen = true;
    if (prefillQuestion) {
      state.creator.draftQuestion = prefillQuestion;
    }
    renderCreatorCabin();
    saveState();
    window.requestAnimationFrame(() => {
      creatorQuestionInput.focus();
      if (prefillQuestion) {
        creatorQuestionInput.setSelectionRange(creatorQuestionInput.value.length, creatorQuestionInput.value.length);
      }
    });
  }

  function closeCreatorCabin() {
    if (!state.creator.isOpen) {
      return;
    }
    state.creator.isOpen = false;
    renderCreatorCabin();
    saveState();
  }

  function pushCreatorMessage(role, title, body) {
    state.creator.messages.push({ role, title, body });
    state.creator.messages = state.creator.messages.slice(-12);
  }

  function getCreatorFocusSuggestion() {
    if (state.activeScreen === "party") {
      return `Сейчас мы на экране отряда. Самый полезный фокус здесь: не украшать героев, а найти для каждого один силуэтный закон, один материал и один эмоциональный тон.`;
    }
    if (state.activeScreen === "quests") {
      return `Сейчас мы на экране экспедиций. Самый полезный фокус: чтобы текущий узел, награда и следующее действие читались за один взгляд.`;
    }
    if (state.activeScreen === "battle") {
      return `Сейчас мы на боевом экране. Самый полезный фокус: ясность хода, цели и результата действия, а не избыточные украшения.`;
    }
    return `Сейчас мы на экране ${screenLabels[state.activeScreen] ?? state.activeScreen}. Полезнее всего улучшать один смысловой слой, а не всё сразу.`;
  }

  function buildCreatorReply(question) {
    const normalized = question.toLowerCase();
    const activeHero = getActiveHero();
    const readiness = getReadinessReport();
    const saveProgress = getSaveProgressPercent();

    if (normalized.includes("закры") || normalized.includes("кабинет") || normalized.includes("окош")) {
      return {
        title: "Кабинет автора",
        body: "Теперь кабинет должен закрываться тремя способами: по крестику, по клику вне панели и по клавише Esc. Если он снова зависнет, это уже будет отдельный баг интерфейса, а не отсутствие логики закрытия.",
      };
    }

    if (normalized.includes("реальном времени") || normalized.includes("чат") || normalized.includes("сообщ")) {
      return {
        title: "Как работает ответ внутри игры",
        body: "Сейчас внутри самой игры работает локальный помощник: он отвечает сразу и сохраняет переписку в браузере. Настоящий облачный чат с живым Codex потребует отдельный сервер и API-слой, поэтому для демо мы сознательно держим это как приватный offline-инструмент автора.",
      };
    }

    if (normalized.includes("портрет") || normalized.includes("силуэт") || normalized.includes("персонаж")) {
      return {
        title: `Художественный фокус: ${activeHero.name}`,
        body: `${activeHero.name} лучше усиливать не количеством деталей, а одной сильной формой, одним материалом-проводником и одним следом среды. Для ближайшего прохода достаточно сделать так, чтобы герой ощущался принадлежащим BGME ещё до чтения текста.`,
      };
    }

    if (normalized.includes("сыро") || normalized.includes("выгляд")) {
      return {
        title: "Почему экран может казаться сырым",
        body: "Обычно экран выглядит сыро не из-за недостатка деталей, а из-за слабой иерархии. Значит, мы сначала усиливаем один главный акцент, убираем лишние равносильные блоки и выравниваем ритм отступов. Только потом добавляем декоративный слой.",
      };
    }

    if (normalized.includes("месяц") || normalized.includes("заглуш") || normalized.includes("не делаем") || normalized.includes("приоритет")) {
      return {
        title: "Фокус на ближайший месяц",
        body: `В ближайший месяц разумно не расползаться в полноценную игру. Можно оставить текстовыми заглушками глубокий лор, поздние главы и расширенный набор врагов. Перед показом другим обязательно довести: читаемый маршрут, цельный экран отряда, понятный бой и законченный цикл награды.`,
      };
    }

    if (normalized.includes("steam") || normalized.includes("пк") || normalized.includes("desktop")) {
      return {
        title: "Приоритет для ПК-версии",
        body: "Для Steam важнее всего крупная иерархия, спокойная композиция и уверенная клавиатурная навигация. Если сомневаетесь между красивым и понятным, для демо сначала выбираем понятное и только потом наращиваем красоту.",
      };
    }

    if (normalized.includes("бой") || normalized.includes("encounter") || normalized.includes("квест")) {
      return {
        title: "Игровая логика",
        body: `${getCreatorFocusSuggestion()} Сейчас состояние проекта ${readiness.percent}%, а прогресс этого сейва ${saveProgress}%. Значит, лучший следующий шаг — не расширять систему, а укреплять один текущий игровой цикл до состояния уверенного показа.`,
      };
    }

    return {
      title: "Ответ по модернизации",
      body: `${getCreatorFocusSuggestion()} Если говорить совсем просто, то сейчас проекту полезнее один сильный приоритет, чем пять средних. Напишите, что именно вас смущает сильнее всего на экране, и мы разложим это на понятные шаги без сложных технических терминов.`,
    };
  }

  function submitCreatorQuestion(prefill = "") {
    const question = (prefill || creatorQuestionInput.value).trim();
    if (!question) {
      creatorLivePill.textContent = "Сначала напишите вопрос";
      return;
    }

    pushCreatorMessage("user", "Ваш вопрос", question);
    const reply = buildCreatorReply(question);
    pushCreatorMessage("assistant", reply.title, reply.body);
    state.creator.draftQuestion = "";
    creatorLivePill.textContent = "Ответ обновлён";
    renderCreatorCabin();
    saveState();
  }

  function formatClock() {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  }

  function addSessionLog(title, body) {
    state.sessionLog.unshift({
      title,
      body,
      time: formatClock(),
    });
    state.sessionLog = state.sessionLog.slice(0, 6);
    renderSessionLog();
    saveState();
  }

  function renderResources() {
    resourceAp.textContent = state.resources.ap;
    resourceFragments.textContent = String(state.resources.fragments).padStart(2, "0");
    resourceLumen.textContent = String(state.resources.lumen);
  }

  function renderTopbarHud() {
    if (!topbarScreenPill || !topbarStatusTitle || !topbarStatusCopy || !topbarStatusTags) {
      return;
    }

    const activeQuest = getActiveQuest();
    const activeQuestNode = getQuestNodeContext(activeQuest);
    const nextNode = activeQuestNode.node;
    const activeHero = getActiveHero();
    const screenLabelMap = {
      home: "Святилище",
      quests: "Экспедиции",
      world: "Мир",
      party: "Отряд",
      journal: "Архив",
      shop: "Лавка",
      menu: "Система",
      battle: "Стычка",
      results: "Разбор",
      chapter: "Отчёт",
      ending: "Финал",
      guide: "Справочник",
    };

    let title = "Текущий протокол";
    let copy = "Маршрут, экран и ритм вылазки должны читаться сразу.";
    let tags = [
      `Маршрут: ${activeQuest.title}`,
      `Фокус: ${activeHero.name}`,
      `Экран: ${screenLabelMap[state.activeScreen] ?? "Святилище"}`,
    ];

    switch (state.activeScreen) {
      case "home":
        title = nextNode ? `${activeQuest.title} · ${nextNode.title}` : activeQuest.title;
        copy = nextNode
          ? `Следующий шаг уже собран. Отсюда должно быть понятно, куда идти и кто ведёт вылазку.`
          : "Текущий маршрут закрыт. Выберите новую линию выхода и задайте фокус партии.";
        tags = [
          `Узел: ${nextNode ? nextNode.title : "Новая вылазка"}`,
          `Фокус: ${activeHero.name}`,
          `Глава: ${getQuestProgress("story")}/${getQuestById("story").route.length}`,
        ];
        break;
      case "quests":
        title = activeQuest.title;
        copy = nextNode
          ? `Маршрут активен. Выбранный узел должен сразу объяснять угрозу и следующую награду.`
          : "Маршрут завершён. Откройте следующий путь и перезапустите вылазку.";
        tags = [
          `Узел: ${nextNode ? nextNode.title : "Маршрут завершён"}`,
          `Угроза: ${nextNode ? getNodeTypeLabel(nextNode, activeQuestNode.resolved) : "Новый путь"}`,
          `Фокус: ${activeHero.name}`,
        ];
        break;
      case "world": {
        const location = getActiveWorldLocation();
        const quest = getActiveWorldQuest();
        const questDone = Boolean(state.world.completedQuestIds[quest.id]);
        title = `${location.title} · ${location.npc.name}`;
        copy = questDone
          ? "Локация очищена. Можно перейти в другой биом и взять новый локальный контракт."
          : "Говорите с NPC, выбирайте локальный контракт и закрывайте его для награды.";
        tags = [
          `Биом: ${location.kicker}`,
          `Контракт: ${quest.title}`,
          `Статус: ${questDone ? "выполнено" : "в процессе"}`,
        ];
        break;
      }
      case "party":
        title = `${activeHero.name} · ${activeHero.role}`;
        copy = "Перестройка отряда, ролей и темпа должна читаться как подготовка к выходу, а не как меню персонажа.";
        tags = [
          `Фокус: ${activeHero.name}`,
          `Маршрут: ${activeQuest.title}`,
          `Готовность: 4 героя`,
        ];
        break;
      case "journal":
        title = "Полевой журнал";
        copy = "Архив должен быстро отвечать, что уже открыто, что связано с вылазкой и что ещё закрыто.";
        tags = [
          `Экран: Архив`,
          `Маршрут: ${activeQuest.title}`,
          `Фокус: ${activeHero.name}`,
        ];
        break;
      case "shop":
        title = "Лавка святилища";
        copy = "Покупки и подготовка должны ощущаться как снабжение перед выходом, а не как отдельный магазинный сайт.";
        tags = [
          `Люмен: ${state.resources.lumen}`,
          `Фрагм.: ${state.resources.fragments}`,
          `Фокус: ${activeHero.name}`,
        ];
        break;
      case "battle":
        title = state.battle.title || "Стычка";
        copy = "Текущий бой должен сразу показывать ставку, ритм очереди и давление противника.";
        tags = [
          `Экран: Стычка`,
          `Фокус: ${activeHero.name}`,
          `Маршрут: ${activeQuest.title}`,
        ];
        break;
      case "results":
        title = state.lastResult?.title || "Разбор вылазки";
        copy = "Итог должен быстро говорить, что выиграно, что потеряно и куда идти дальше.";
        tags = [
          `Экран: Разбор`,
          `Маршрут: ${activeQuest.title}`,
          `Фокус: ${activeHero.name}`,
        ];
        break;
      default:
        break;
    }

    topbarScreenPill.textContent = screenLabelMap[state.activeScreen] ?? "Святилище";
    topbarStatusTitle.textContent = title;
    topbarStatusCopy.textContent = copy;
    topbarStatusTags.innerHTML = tags
      .map((tag) => `<span class="topbar-status-tag">${tag}</span>`)
      .join("");
  }

  function getWorldLocationById(locationId) {
    return worldLocations.find((location) => location.id === locationId) ?? worldLocations[0];
  }

  function getActiveWorldLocation() {
    return getWorldLocationById(state.world.activeLocationId);
  }

  function ensureWorldSelection() {
    const location = getActiveWorldLocation();
    const availableQuestIds = new Set(location.quests.map((quest) => quest.id));
    if (!availableQuestIds.has(state.world.activeQuestId)) {
      const nextQuest = location.quests.find((quest) => !state.world.completedQuestIds[quest.id]) ?? location.quests[0];
      state.world.activeQuestId = nextQuest.id;
    }
  }

  function getActiveWorldQuest() {
    const location = getActiveWorldLocation();
    ensureWorldSelection();
    return location.quests.find((quest) => quest.id === state.world.activeQuestId) ?? location.quests[0];
  }

  function applyWorldDialogue(choice) {
    const location = getActiveWorldLocation();
    state.world.npcLine = choice.reply;
    addSessionLog(`Диалог: ${location.npc.name}`, choice.reply);
    renderWorld();
  }

  function travelToWorldLocation(locationId) {
    const location = getWorldLocationById(locationId);
    state.world.activeLocationId = location.id;
    state.world.npcLine = "";
    const nextQuest = location.quests.find((quest) => !state.world.completedQuestIds[quest.id]) ?? location.quests[0];
    state.world.activeQuestId = nextQuest.id;
    renderWorld();
    renderTopbarHud();
    syncVisualAtmosphere();
    saveState();
  }

  function completeActiveWorldQuest() {
    const location = getActiveWorldLocation();
    const quest = getActiveWorldQuest();
    if (state.world.completedQuestIds[quest.id]) {
      return;
    }

    state.world.completedQuestIds[quest.id] = true;
    state.resources.lumen += quest.reward.lumen;
    state.resources.fragments += quest.reward.fragments;
    state.world.npcLine = `${location.npc.name}: Отличная работа. Место стало безопаснее, а тропа открыта для новых людей.`;

    renderResources();
    renderWorld();
    renderTopbarHud();
    addSessionLog(`Задание закрыто: ${quest.title}`, `Награда: +${quest.reward.lumen} люмена, +${quest.reward.fragments} фрагм.`);
    saveState();
  }

  function renderWorld() {
    if (
      !worldLocationList ||
      !worldBiomeKicker ||
      !worldLocationTitle ||
      !worldLocationCopy ||
      !worldStageFoot ||
      !worldNpcName ||
      !worldNpcRole ||
      !worldNpcLine ||
      !worldDialogueOptions ||
      !worldQuestList ||
      !worldQuestComplete
    ) {
      return;
    }

    const location = getActiveWorldLocation();
    const quest = getActiveWorldQuest();
    const questDone = Boolean(state.world.completedQuestIds[quest.id]);

    if (worldScreen) {
      worldScreen.dataset.biome = location.biome;
    }

    worldBiomeKicker.textContent = location.kicker;
    worldLocationTitle.textContent = location.title;
    worldLocationCopy.textContent = location.copy;

    if (worldPanorama) {
      worldPanorama.dataset.biome = location.biome;
    }

    worldStageFoot.innerHTML = location.tags
      .map((tag) => `<span class="world-stage-tag">◈ ${tag}</span>`)
      .join("");

    worldLocationList.innerHTML = worldLocations
      .map((item) => {
        const activeClass = item.id === location.id ? " is-active" : "";
        const completedCount = item.quests.filter((questItem) => state.world.completedQuestIds[questItem.id]).length;
        return `
          <button class="world-location-card${activeClass}" type="button" data-world-location="${item.id}">
            <span>${item.kicker}</span>
            <strong>${item.title}</strong>
            <p>${item.copy}</p>
            <p>Задания: ${completedCount}/${item.quests.length}</p>
          </button>
        `;
      })
      .join("");

    worldNpcName.textContent = location.npc.name;
    worldNpcRole.textContent = location.npc.role;
    worldNpcLine.textContent = state.world.npcLine || location.npc.line;

    worldDialogueOptions.innerHTML = location.npc.choices
      .map(
        (choice, index) =>
          `<button class="world-dialogue-option" type="button" data-world-choice="${index}">${choice.label}</button>`,
      )
      .join("");

    worldQuestList.innerHTML = location.quests
      .map((questItem) => {
        const done = Boolean(state.world.completedQuestIds[questItem.id]);
        const activeClass = questItem.id === quest.id ? " is-active" : "";
        const doneClass = done ? " is-done" : "";
        return `
          <button class="world-quest-item${activeClass}${doneClass}" type="button" data-world-quest="${questItem.id}">
            <h4>${questItem.title}</h4>
            <p>${questItem.body}</p>
            <p>Награда: +${questItem.reward.lumen} люмена, +${questItem.reward.fragments} фрагм.${done ? " · выполнено" : ""}</p>
          </button>
        `;
      })
      .join("");

    worldQuestComplete.disabled = questDone;
    worldQuestComplete.textContent = questDone ? "Задание уже выполнено" : `Завершить: ${quest.title}`;
  }

  function renderHomeMeta() {
    const storyProgress = getQuestProgress("story");
    const storyQuest = getQuestById("story");
    const activeQuest = getActiveQuest();
    const activeQuestNode = getQuestNodeContext(activeQuest);
    const nextNode = activeQuestNode.node;
    const boon = getActiveBoon();
    const chapterCompleted = storyProgress >= storyQuest.route.length;
    const activeHero = getActiveHero();
    const activeProfile = getHeroBattleProfile(activeHero.id);
    const progressValue = `${storyProgress}/${storyQuest.route.length}`;
    const routeStatus = chapterCompleted ? "Глава завершена" : `Следом идёт ${activeQuest.title}`;

    if (homeStageArt) {
      homeStageArt.dataset.hero = activeHero.id;
      homeStageArt.classList.toggle("has-art", Boolean(activeHero.art));
      homeStageArt.classList.toggle("is-fallback", !activeHero.art);
      homeStageArt.style.setProperty("--home-stage-art-image", activeHero.art ? `url("${activeHero.art}")` : "none");
    }

    if (homeHeroStage) {
      homeHeroStage.classList.toggle("has-art", Boolean(activeHero.art));
      homeHeroStage.setAttribute("aria-label", `${activeHero.role} ${activeHero.name}`);
    }

    if (homeStageArtFigure) {
      if (activeHero.art) {
        homeStageArtFigure.src = activeHero.art;
        homeStageArtFigure.alt = `${activeHero.name}, ${activeHero.role.toLowerCase()}`;
      } else {
        homeStageArtFigure.removeAttribute("src");
        homeStageArtFigure.alt = activeHero.name;
      }
    }

    if (homeStageArtFallback) {
      if (activeHero.art) {
        homeStageArtFallback.innerHTML = "";
      } else {
        homeStageArtFallback.innerHTML = `
          <div class="home-stage-fallback-shell">
            <div class="home-stage-fallback-glow" aria-hidden="true"></div>
            ${generateHeroPortraitSVG(activeHero)}
          </div>
          <div class="home-stage-fallback-copy">
            <span>${activeHero.role}</span>
            <strong>${activeHero.name}</strong>
          </div>
        `;
      }
    }

    if (homeStageStatusCopy) {
      const stageThreat = nextNode ? getNodeTypeLabel(nextNode, activeQuestNode.resolved).toLowerCase() : "новый маршрут";
      const stageReward = nextNode ? formatRewardHeadline(activeQuestNode.reward).toLowerCase() : "новая цель для святилища";
      if (homeStageStatusTitle) {
        homeStageStatusTitle.textContent = nextNode ? `${activeQuest.title} · ${nextNode.title}` : "Новая глава";
      }
      homeStageStatusCopy.textContent = nextNode
        ? `Вход собран. Дальше нужен один шаг: зайти в узел, пройти угрозу и снять награду.`
        : "Текущий маршрут закрыт. Откройте новую главу и заново задайте ритм вылазки.";
      if (homeStageStatusTags) {
        homeStageStatusTags.innerHTML = [
          `<span class="hero-stage-status-tag"><b>⌘</b><span>Узел: ${nextNode ? nextNode.title : "Новый маршрут"}</span></span>`,
          `<span class="hero-stage-status-tag"><b>✦</b><span>Угроза: ${stageThreat}</span></span>`,
          `<span class="hero-stage-status-tag"><b>◈</b><span>Награда: ${stageReward}</span></span>`,
        ].join("");
      }
    }

    if (homeEncounterPreview) {
      const leadHero = getQuestLeadHero(activeQuest.id);
      const danger = nextNode ? getNodeTypeLabel(nextNode, activeQuestNode.resolved) : "Маршрут завершён";
      const questLabel = nextNode ? activeQuest.title : "Выберите новую главу";
      const leadCopy = nextNode
        ? nextNode.title
        : "Маршрут завершён. Святилище ждёт решения по следующему выходу.";
      const rewardHint = nextNode ? formatRewardHeadline(activeQuestNode.reward) : "Награды текущей главы уже собраны.";
      const nodeBody = nextNode
        ? trimCopy(nextNode.body, 118)
        : "Откройте экспедиции, чтобы выбрать новую линию движения и снова вывести партию за пределы хаба.";

      homeEncounterPreview.innerHTML = `
        ${renderHeroVisualMarkup(leadHero, "home-encounter-visual", `${leadHero.name}, маршрут ${activeQuest.title}`)}
        <div class="home-encounter-copy-wrap">
          <p class="eyebrow">${questLabel}</p>
          <strong>${leadCopy}</strong>
          <p class="home-encounter-copy">${nodeBody}</p>
          <div class="home-encounter-meta">
            <span>Угроза: ${danger}</span>
            <span>Награда: ${rewardHint}</span>
          </div>
          <p class="home-encounter-hint">${chapterCompleted ? "Соберите следующий ритм маршрута." : "Маршрут готов ко входу."}</p>
        </div>
      `;
    }

    if (homeFocusCard) {
      const focusSummary = trimCopy(activeHero.summary ?? activeHero.description ?? activeHero.epithet, 118);
      homeFocusCard.innerHTML = `
        ${renderHeroVisualMarkup(activeHero, "home-focus-visual", `${activeHero.name}, активный лидер`)}
        <div class="home-focus-copy">
          <div class="home-focus-head">
            <span>${activeHero.role}</span>
            <strong>${activeHero.name}</strong>
          </div>
          <div class="home-focus-stats">
            <span>HP ${activeProfile.hp}</span>
            <span>Щит ${activeProfile.guard}</span>
            <span>Усиление ${getHeroUpgradeLevel(activeHero.id)} ур.</span>
          </div>
          <p class="home-focus-summary">${focusSummary}</p>
          <div class="home-focus-note">${boon ? `Активный сигил: ${boon.title} · ${boon.bonusLabel}` : routeStatus}</div>
        </div>
      `;
      homeFocusCard.style.setProperty("--focus-accent", activeHero.accent);
    }

    if (homePartyStrip) {
      homePartyStrip.innerHTML = heroes
        .map((hero) => {
          const profile = getHeroBattleProfile(hero.id);
          const isActive = hero.id === state.activeHeroId;
          return `
            <article class="home-party-chip ${isActive ? "is-active" : ""}" style="--party-accent:${hero.accent}">
              ${renderHeroVisualMarkup(hero, "home-party-avatar", `${hero.name}, герой отряда`)}
              <div class="home-party-copy">
                <div>
                  <strong>${hero.name}</strong>
                  <span>${hero.tag}</span>
                </div>
                <p>${hero.role}</p>
                <small>HP ${profile.hp} · Щит ${profile.guard}${isActive ? " · Фокус" : ""}</small>
              </div>
            </article>
          `;
        })
        .join("");
    }

    if (homeCommandGrid) {
      const routeHero = getQuestLeadHero(activeQuest.id);
      const archiveHero = getHeroById("noel");
      const commandCards = [
        {
          action: "start-quest",
          screen: "quests",
          accent: "#c8f0e1",
          hero: routeHero,
          kicker: "Играть",
          title: "Начать экспедицию",
          copy: chapterCompleted
            ? "Выбрать новую вылазку и заняться боем"
            : "Продолжить текущий маршрут без лишних страниц",
        },
        {
          screen: "quests",
          accent: routeHero.accent,
          hero: routeHero,
          kicker: "Вылазка",
          title: chapterCompleted ? "Открыть следующую вылазку" : "Продолжить вылазку",
          copy: chapterCompleted
            ? "Выбрать новый маршрут и тон следующего выхода"
            : nextNode
              ? `Текущий узел: ${nextNode.title}`
              : "Вернуться к текущему узлу и подготовленному составу",
        },
        {
          screen: "party",
          accent: activeHero.accent,
          hero: activeHero,
          kicker: "Отряд",
          title: "Настроить строй",
          copy: `Фокус: ${activeHero.name} · ${activeHero.role}`,
        },
        {
          screen: chapterCompleted ? "chapter" : "journal",
          accent: archiveHero.accent,
          hero: archiveHero,
          kicker: chapterCompleted ? "Отчёт" : "Архив",
          title: chapterCompleted ? "Итог главы" : "Полевой журнал",
          copy: chapterCompleted ? "Зафиксировать завершённый маршрут" : "Записи, карты и бестиарий",
        },
      ];

      homeCommandGrid.innerHTML = commandCards
        .map(
          (card, index) => `
            <button class="home-command-card${index === 0 ? " is-primary" : ""}" data-screen-target="${card.screen}" data-action="${card.action || ""}" style="--command-accent:${card.accent}">
              ${renderHeroVisualMarkup(card.hero, "home-command-visual", `${card.title}, действие святилища`)}
              <div class="home-command-copy">
                <span class="home-command-kicker">${card.kicker}</span>
                <strong>${card.title}</strong>
                <p>${trimCopy(card.copy, 54)}</p>
              </div>
            </button>
          `,
        )
        .join("");

      homeCommandGrid.querySelectorAll("[data-screen-target], [data-action]").forEach((button) => {
        button.addEventListener("click", () => {
          const target = button.dataset.screenTarget;
          const action = button.dataset.action;

          if (action === "start-quest") {
            const activeQuest = getActiveQuest();
            const { isCompleted, node: currentNode, resolved } = getQuestNodeContext(activeQuest);
            setActiveScreen("quests");
            updateQuestOverview();

            if (!isCompleted) {
              if (isCombatNode(currentNode) && !resolved) {
                prepareBattleFromQuest();
                setActiveScreen("battle");
                return;
              }
              routeAdvanceButton.click();
            }

            return;
          }

          if (target) {
            setActiveScreen(target);
          }
        });
      });
    }

    if (homeCommandStrip) {
      const stripItems = [
        { icon: "⌘", label: "Маршрут", value: nextNode ? nextNode.title : "Новый выход" },
        { icon: "✦", label: "Фокус", value: activeHero.name },
        { icon: "◈", label: "Глава", value: progressValue },
      ];

      homeCommandStrip.innerHTML = stripItems
        .map(
          (item) => `
            <article class="home-command-pill">
              <span><b>${item.icon}</b>${item.label}</span>
              <strong>${item.value}</strong>
            </article>
          `,
        )
        .join("");
    }

    if (homeScenePanel) {
      const activeQuestProgress = getQuestProgress(activeQuest.id);
      const totalRouteSteps = activeQuest.route.filter(Boolean).length;
      const currentRouteStep = Math.min(totalRouteSteps, Number(activeQuestProgress ?? 0) + 1);
      const routeStepLabel = chapterCompleted ? "Глава завершена" : `Шаг ${currentRouteStep} из ${totalRouteSteps}`;
      const routeNodes = activeQuest.route
        .map((node, index) => {
          const isResolved = index < activeQuestProgress;
          const isCurrent = nextNode && node.title === nextNode.title && index === activeQuestProgress;
          const nodeClasses = [
            "home-scene-node",
            isResolved ? "is-resolved" : "",
            isCurrent ? "is-current" : "",
            node.type === "boss" ? "is-boss" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return `
            <button class="${nodeClasses}" type="button" data-screen-target="quests" aria-label="Открыть маршрут ${node.title}">
              <span class="home-scene-node-step">${index + 1}</span>
              <strong>${node.title}</strong>
              <small>${getNodeTypeLabel(node, isResolved)}</small>
            </button>
          `;
        })
        .join("");

      const sceneActions = [
        {
          icon: "⌘",
          screen: "quests",
          title: chapterCompleted ? "Открыть новую вылазку" : "Войти в текущий узел",
          body: chapterCompleted ? "Маршрут завершён, святилище ждёт новый вектор." : `Точка входа: ${nextNode ? nextNode.title : "Новый маршрут"}`,
        },
        {
          icon: "✦",
          screen: "party",
          title: `Фокус ведёт ${activeHero.name}`,
          body: `${activeHero.role} · HP ${activeProfile.hp} · Щит ${activeProfile.guard}`,
        },
        {
          icon: "◈",
          screen: chapterCompleted ? "chapter" : "journal",
          title: boon ? boon.title : "Сигил не выбран",
          body: boon ? boon.bonusLabel : "Выбор сигила откроется после завершения главы.",
        },
      ]
        .map(
          (item) => `
            <button class="home-scene-action-card" type="button" data-screen-target="${item.screen}" aria-label="${item.title}">
              <span class="home-scene-action-icon">${item.icon}</span>
              <div>
                <strong>${item.title}</strong>
                <p>${trimCopy(item.body, 76)}</p>
              </div>
            </button>
          `,
        )
        .join("");

      const routeLeadHero = getQuestLeadHero(activeQuest.id);

      homeScenePanel.innerHTML = `
        <div class="home-scene-head">
          <div>
            <p class="eyebrow">Тактический срез</p>
            <strong>${activeQuest.title}</strong>
          </div>
          <span>${routeStepLabel}</span>
        </div>
        <div class="home-scene-grid">
          <button class="home-scene-focus-card" type="button" data-screen-target="quests" aria-label="Открыть экран экспедиций">
            ${renderHeroVisualMarkup(routeLeadHero, "home-scene-visual", `${routeLeadHero.name}, ведущий образ вылазки`)}
            <div class="home-scene-focus-copy">
              <strong>${nextNode ? nextNode.title : activeQuest.title}</strong>
              <p>${trimCopy(nextNode ? nextNode.body : activeQuest.summary, 150)}</p>
              <div class="home-scene-focus-pills">
                <span>Угроза: ${nextNode ? getNodeTypeLabel(nextNode, activeQuestNode.resolved) : "Новый путь"}</span>
                <span>Награда: ${nextNode ? formatRewardHeadline(activeQuestNode.reward) : "Следующий выбор главы"}</span>
              </div>
            </div>
          </button>
          <div class="home-scene-action-stack">${sceneActions}</div>
        </div>
        <div class="home-scene-route-bar">${routeNodes}</div>
      `;

      homeScenePanel.querySelectorAll("[data-screen-target]").forEach((button) => {
        button.addEventListener("click", () => {
          const target = button.dataset.screenTarget;
          if (target) {
            setActiveScreen(target);
          }
        });
      });
    }

    renderSanctuaryHub();

    renderTopbarHud();
  }

  function getActiveSanctuaryPoi() {
    return sanctuaryHotspots.find((poi) => poi.id === state.home.activePoiId) ?? sanctuaryHotspots[0];
  }

  function renderSanctuaryHub() {
    if (!sanctuaryPoiMap || !sanctuaryPoiTitle || !sanctuaryPoiSubtitle || !sanctuaryPoiCopy || !sanctuaryPoiAction) {
      return;
    }

    const activePoi = getActiveSanctuaryPoi();

    sanctuaryPoiMap.innerHTML = sanctuaryHotspots
      .map((poi) => {
        const isActive = poi.id === activePoi.id;
        return `
          <button class="home-sanctuary-point${isActive ? " is-active" : ""}" type="button" data-sanctuary-poi="${poi.id}">
            <span class="home-sanctuary-point-icon">${poi.icon}</span>
            <span class="home-sanctuary-point-copy">
              <strong>${poi.title}</strong>
              <small>${poi.label}</small>
            </span>
          </button>
        `;
      })
      .join("");

    sanctuaryPoiTitle.textContent = activePoi.title;
    sanctuaryPoiSubtitle.textContent = activePoi.subtitle;
    sanctuaryPoiCopy.textContent = activePoi.copy;
    sanctuaryPoiAction.textContent = `Открыть: ${screenLabels[activePoi.targetScreen] ?? activePoi.targetScreen}`;
    sanctuaryPoiAction.dataset.targetScreen = activePoi.targetScreen;
  }

  function resetPresenceMotion(root) {
    if (!root) return;
    root.style.setProperty("--presence-x", "0");
    root.style.setProperty("--presence-y", "0");
    root.style.setProperty("--presence-tilt-x", "0deg");
    root.style.setProperty("--presence-tilt-y", "0deg");
    root.style.setProperty("--presence-glow-x", "50%");
    root.style.setProperty("--presence-glow-y", "22%");
  }

  function attachPresenceMotion(root, { intensity = 1 } = {}) {
    if (!root) return;

    resetPresenceMotion(root);

    const updatePresence = (event) => {
      if (document.body.classList.contains("reduced-motion")) {
        resetPresenceMotion(root);
        return;
      }

      const bounds = root.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      const offsetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      const offsetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;

      root.style.setProperty("--presence-x", offsetX.toFixed(3));
      root.style.setProperty("--presence-y", offsetY.toFixed(3));
      root.style.setProperty("--presence-tilt-x", `${(-offsetY * 5 * intensity).toFixed(2)}deg`);
      root.style.setProperty("--presence-tilt-y", `${(offsetX * 7 * intensity).toFixed(2)}deg`);
      root.style.setProperty("--presence-glow-x", `${(50 + offsetX * 16).toFixed(2)}%`);
      root.style.setProperty("--presence-glow-y", `${(22 + offsetY * 12).toFixed(2)}%`);
    };

    root.addEventListener("pointermove", updatePresence);
    root.addEventListener("pointerleave", () => resetPresenceMotion(root));
  }

  function applyUiSettings() {
    const currentScale =
      uiScaleOptions.find((option) => option.id === state.settings.uiScaleId) ?? uiScaleOptions[1];

    document.documentElement.style.setProperty("--ui-scale-factor", String(currentScale.value));
    document.body.classList.toggle("reduced-motion", state.settings.reducedMotion);
    document.body.classList.toggle("high-contrast", state.settings.highContrast);
    toggleMotion.classList.toggle("is-active", state.settings.reducedMotion);
    toggleContrast.classList.toggle("is-active", state.settings.highContrast);
    resetPresenceMotion(homeStageArt);
    resetPresenceMotion(portraitShell);
  }

  function renderQuestCards() {
    const questEmblems = {
      story: "✧",
      raid: "⬢",
      gathering: "❈",
      trial: "◈",
      event: "✶",
    };

    questCardsContainer.innerHTML = questCards
      .map((card) => {
        const emblem = questEmblems[card.id] ?? "✦";
        const blueprint = getQuestBlueprint(card.id);
        const progress = getQuestProgress(card.id);
        const nodeContext = getQuestNodeContext(card);
        const routeLead = nodeContext.node?.title ?? "Маршрут завершён";
        const routeState = nodeContext.isCompleted
          ? "Глава закрыта"
          : progress > 0
            ? `Следующий узел: ${routeLead}`
            : `Первый вход: ${routeLead}`;
        const statusLabel = nodeContext.isCompleted ? "Очищено" : card.status;
        return `
          <button class="quest-card ${
            card.id === state.activeQuestId ? "is-selected" : ""
          }" data-quest-id="${card.id}" data-accent="${card.accent}">
            <div class="quest-card-inner">
              ${renderHeroVisualMarkup(getQuestLeadHero(card.id), "quest-card-visual", `${card.title}, ключевой визуал`)}
              <div class="quest-card-top">
                <div class="quest-card-emblem" aria-hidden="true">${emblem}</div>
                <div class="quest-card-chip-row">
                  <span class="quest-label">${card.label}</span>
                  <span class="quest-card-threat">${blueprint.threat}</span>
                </div>
              </div>
              <div class="quest-card-copy">
                <h3 class="quest-card-title">${card.title}</h3>
                <p class="quest-subtitle">${card.subtitle}</p>
                <p class="quest-card-description">${trimCopy(card.description, 132)}</p>
              </div>
              <div class="quest-card-route">
                <span class="quest-card-route-label">${routeState}</span>
                <strong>${routeLead}</strong>
              </div>
              <div class="quest-card-footer">
                <div class="quest-card-footer-copy">
                  <div>${card.cost}</div>
                  <div class="quest-progress">${Math.min(getQuestProgress(card.id), card.route.length)} / ${card.route.length}</div>
                </div>
                <span class="quest-status ${
                  statusLabel === "Закрыто" ? "locked" : ""
                }">${statusLabel}</span>
              </div>
            </div>
          </button>
        `;
      })
      .join("");

    questCardsContainer.querySelectorAll("[data-quest-id]").forEach((button) => {
      button.addEventListener("click", () => {
        state.activeQuestId = button.dataset.questId;
        renderQuestCards();
        updateQuestOverview();
        saveState();
      });
    });
  }

  function updateQuestOverview() {
    const activeQuest = getActiveQuest();
    const blueprint = getQuestBlueprint(activeQuest.id);
    const { progress, isCompleted, nodeIndex, node: currentNode, reward: currentReward, resolved } = getQuestNodeContext(activeQuest);
    const combatLocked = Boolean(currentNode && isCombatNode(currentNode) && !resolved);
    const spotlightState = isCompleted
      ? "Маршрут завершён"
      : combatLocked
        ? "Узел удерживается боем"
        : progress === 0
          ? "Точка входа"
          : "Ближайший шаг";
    const spotlightTags = [
      `Угроза: ${isCompleted ? blueprint.threat : getNodeTypeLabel(currentNode, resolved)}`,
      `Награда: ${isCompleted ? blueprint.reward : formatRewardHeadline(currentReward)}`,
      `Совет: ${blueprint.recommendation}`,
    ];

    questTitle.textContent = activeQuest.title;
    questDescription.textContent = trimCopy(activeQuest.description, 156);
    if (questThreatPill) {
      questThreatPill.textContent = blueprint.threat;
    }
    if (questRewardCopy) {
      questRewardCopy.textContent = trimCopy(blueprint.reward, 88);
    }
    if (questSceneVisual) {
      const leadHero = getQuestLeadHero(activeQuest.id);
      questSceneVisual.innerHTML = `
        ${renderHeroVisualMarkup(leadHero, "quest-scene-art", `${leadHero.name}, фокус экспедиции ${activeQuest.title}`)}
        <div class="quest-scene-copy">
          <span class="quest-scene-kicker">Ведущий образ</span>
          <strong>${leadHero.name}</strong>
          <p>${trimCopy(leadHero.summary ?? leadHero.epithet, 86)}</p>
          <div class="quest-scene-pills">
            <span>${activeQuest.subtitle}</span>
            <span>${blueprint.threat}</span>
          </div>
        </div>
      `;
    }
    if (questSpotlightState) {
      questSpotlightState.textContent = spotlightState;
    }
    if (questSpotlightTitle) {
      questSpotlightTitle.textContent = isCompleted ? activeQuest.title : currentNode.title;
    }
    if (questSpotlightBody) {
      questSpotlightBody.textContent = isCompleted
        ? "Маршрут закрыт. Теперь можно выбрать новую вылазку с другим тоном и риском."
        : trimCopy(currentNode.body, 126);
    }
    if (questSpotlightTags) {
      questSpotlightTags.innerHTML = spotlightTags
        .map((item) => `<span class="quest-spotlight-tag">${item}</span>`)
        .join("");
    }
    questStatus.textContent = isCompleted ? "Очищено" : progress > 0 ? "В экспедиции" : activeQuest.status;
    questProgress.textContent = `${Math.min(progress, activeQuest.route.length)} / ${activeQuest.route.length}`;
    questCost.textContent = activeQuest.cost;
    questNodeType.textContent = isCompleted ? "Маршрут очищен" : getNodeTypeLabel(currentNode, resolved);
    questObjective.textContent = isCompleted
      ? "Глава закрыта. Можно вернуться в святилище, открыть следующий маршрут или закрепить итог главы."
      : trimCopy(`${blueprint.objective} Узел: «${currentNode.title}».`, 122);
    questReward.textContent = trimCopy(isCompleted ? "Основные награды уже собраны." : formatRewardHeadline(currentReward), 96);
    questRecommendation.textContent = trimCopy(
      isCompleted
        ? "Соберите следующий маршрут или вернитесь в архив за деталями мира."
        : combatLocked
          ? `${blueprint.recommendation} Сначала бой.`
          : blueprint.recommendation,
      92,
    );
    routeAdvanceButton.disabled = isCompleted || combatLocked;
    routeAdvanceButton.textContent = isCompleted
      ? "Маршрут завершён"
      : combatLocked
        ? "Сначала выиграйте бой"
        : progress === 0
          ? "Войти в маршрут"
          : "Завершить узел";
    openBattleButton.disabled = isCompleted;
    openBattleButton.textContent = isCompleted
      ? "Глава очищена"
      : isCombatNode(currentNode)
        ? resolved
          ? "Бой уже выигран"
          : "Открыть бой"
        : "Тактический экран";

    routeMap.innerHTML = activeQuest.route
      .map((node, index) => {
        const stateClass = [
          !isCompleted && index === nodeIndex ? "is-active" : "",
          index < progress ? "is-cleared" : "",
          !isCompleted && index === nodeIndex && isCombatNode(node) && !resolved ? "is-blocked" : "",
          !isCompleted && index === nodeIndex && resolved ? "is-resolved" : "",
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

    routeLog.innerHTML = isCompleted
      ? `
        <span class="route-node-step">Маршрут завершён</span>
        <strong class="route-node-title">${activeQuest.title}</strong>
        <p>Все узлы главы закрыты. Архив обновлён, а боевую сцену можно использовать как витринный encounter.</p>
        <p>${blueprint.reward}</p>
      `
      : `
        <span class="route-node-step">Текущий узел</span>
        <strong class="route-node-title">${currentNode.title}</strong>
        <p>${currentNode.body}</p>
        <p>${combatLocked ? "Узел заблокирован боем. Сначала завершите encounter." : currentReward.note ?? "Маршрут продолжается без особой находки."}</p>
      `;
    renderJournalHighlights();
    syncVisualAtmosphere();
  }

  function renderHeroList() {
    heroList.innerHTML = heroes
      .map((hero) => {
        const profile = getHeroBattleProfile(hero.id);
        const upgradeTier = getHeroUpgradeLevel(hero.id);
        const isActive = hero.id === state.activeHeroId;
        return `
          <button class="hero-card ${
            isActive ? "is-active" : ""
          }" data-hero-id="${hero.id}" style="--card-accent:${hero.accent}">
            <div class="hero-card-top">
              <div>
                <div class="hero-card-name">${hero.name}</div>
                <div class="hero-card-role">${hero.role}</div>
              </div>
              <span class="hero-card-tag">${hero.tag}</span>
            </div>
            <p>${hero.summary}</p>
            <div class="hero-card-meta">
              <span class="hero-card-kpi">HP ${profile.hp}</span>
              <span class="hero-card-kpi">Щит ${profile.guard}</span>
              <span class="hero-card-kpi">Tier ${upgradeTier}</span>
            </div>
            <div class="hero-card-state">${isActive ? "Активный фокус экспедиции" : hero.epithet}</div>
          </button>
        `;
      })
      .join("");

    heroList.querySelectorAll("[data-hero-id]").forEach((button) => {
      button.addEventListener("click", () => {
        state.activeHeroId = button.dataset.heroId;
        renderHeroList();
        updateHeroPanel();
      });
    });
  }

  function trimCopy(text, maxLength = 120) {
    const normalized = String(text ?? "").replace(/\s+/g, " ").trim();
    if (!normalized || normalized.length <= maxLength) {
      return normalized;
    }

    const clipped = normalized.slice(0, maxLength).replace(/[\s,.:;!?-]+[^\s,.:;!?-]*$/, "").trim();
    return `${clipped || normalized.slice(0, maxLength).trim()}...`;
  }

  function getQuestLeadHeroId(questId) {
    const map = {
      story: "liora",
      raid: "rian",
      gathering: "noel",
      trial: "liora",
      event: "saya",
    };

    return map[questId] ?? heroes[0].id;
  }

  function getQuestLeadHero(questId) {
    return getHeroById(getQuestLeadHeroId(questId));
  }

  function renderHeroVisualMarkup(hero, variant, altText) {
    const safeHero = hero ?? heroes[0];
    const hasArt = Boolean(safeHero.art);
    const imageMarkup = hasArt
      ? `
        <img class="${variant}-backdrop" src="${safeHero.art}" alt="" aria-hidden="true">
        <img class="${variant}-image" src="${safeHero.art}" alt="${altText}">
      `
      : `
        <div class="${variant}-svg" aria-hidden="true">${generateHeroPortraitSVG(safeHero)}</div>
      `;

    return `
      <div class="${variant} ${hasArt ? "has-art" : "is-fallback"}" style="--visual-accent:${safeHero.accent}">
        <div class="${variant}-glow" aria-hidden="true"></div>
        ${imageMarkup}
      </div>
    `;
  }

  // ── Helper: parse a hex color to approximate hue (0–360) ──────
  function hexToApproxHue(hex) {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const d = max - min;
    if (d < 0.001) return 140;
    let h = 0;
    if (max === r) h = ((g - b) / d + 6) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    return Math.round(h * 60);
  }

  function syncVisualAtmosphere() {
    const activeHero = getActiveHero();
    const activeQuest = getActiveQuest();
    const activeWorldLocation = getActiveWorldLocation();
    const questHueMap = {
      azure: 162,
      sage: 108,
      dusk: 334,
      ember: 24,
      night: 266,
    };
    const worldBiomeHueMap = {
      forest: 126,
      mountain: 198,
      ruins: 36,
    };
    const baseHeroHue = hexToApproxHue(activeHero.accent);
    const screenHueMap = {
      home: baseHeroHue,
      quests: questHueMap[activeQuest.accent] ?? baseHeroHue,
      world: worldBiomeHueMap[activeWorldLocation.biome] ?? 126,
      party: baseHeroHue,
      journal: 146,
      shop: 42,
      menu: 128,
      guide: 172,
      battle: 12,
      results: state.lastResult?.status === "defeat" ? 6 : questHueMap[activeQuest.accent] ?? baseHeroHue,
      chapter: 96,
      ending: 54,
    };
    const screenStrengthMap = {
      home: 0.22,
      quests: 0.2,
      world: 0.2,
      party: 0.16,
      journal: 0.14,
      shop: 0.14,
      menu: 0.12,
      guide: 0.12,
      battle: 0.24,
      results: 0.2,
      chapter: 0.18,
      ending: 0.16,
    };
    const activeScreen = state.activeScreen in screenHueMap ? state.activeScreen : "home";
    const hue = screenHueMap[activeScreen];
    const strength = screenStrengthMap[activeScreen] ?? 0.16;

    document.body.style.setProperty("--screen-accent-hue", String(hue));
    document.body.style.setProperty("--screen-accent-strength", strength.toFixed(2));
    document.body.style.setProperty("--screen-accent-soft", Math.max(0.08, strength * 0.62).toFixed(2));
    document.body.dataset.heroMood = activeHero.id;
    document.body.dataset.questMood = activeQuest.accent;

    if (window._ambientSetHeroHue) {
      window._ambientSetHeroHue(hue);
    }
  }

  // ── Helper: compute stat bar fill percentage from a stat value ─
  function getStatBarPct(label, value) {
    const maxMap = {
      "Сила отряда": 4200, "HP": 2400, "Атака": 260, "Защита": 200,
      "Боевой HP": 2400, "Щит старта": 52, "Сила приема": 260,
    };
    const tierMap = { "Tier 0": 4, "Tier 1": 36, "Tier 2": 68, "Tier 3": 100 };
    const gradeMap = { "S": 100, "A+": 90, "A": 78, "B+": 62, "B": 46, "C": 28 };
    if (tierMap[value] !== undefined) return tierMap[value];
    if (gradeMap[value] !== undefined) return gradeMap[value];
    const pctMatch = String(value).match(/^(\d+(?:\.\d+)?)%$/);
    if (pctMatch) return Math.min(100, parseFloat(pctMatch[1]) * 5);
    const num = parseFloat(String(value).replace(/[^\d.]/g, ""));
    if (!isNaN(num) && maxMap[label]) return Math.min(100, Math.round((num / maxMap[label]) * 100));
    return 0;
  }

  function renderHeroStats(hero) {
    const profile = getHeroBattleProfile(hero.id);
    const tier = getHeroUpgradeLevel(hero.id);

    const statRows = [
      ...hero.stats,
      ["Усиление", `Tier ${tier}`],
      ["Боевой HP", String(profile.hp)],
      ["Щит старта", String(profile.guard)],
      ["Сила приема", `+${profile.attack}`],
    ];

    heroStatsContainer.innerHTML = statRows
      .map(
        ([label, value]) => {
          const pct = getStatBarPct(label, value);
          return `
            <div class="stat-row">
              <span>${label}</span>
              <strong>${value}</strong>
              <div class="stat-bar"><div class="stat-bar-fill" data-pct="${pct}"></div></div>
            </div>
          `;
        },
      )
      .join("");

    // Animate fills on next frame so CSS transition fires
    requestAnimationFrame(() => {
      heroStatsContainer.querySelectorAll(".stat-bar-fill").forEach((fill) => {
        fill.style.width = `${fill.dataset.pct}%`;
      });
    });
  }

  function renderMaterials(hero) {
    materialList.innerHTML = hero.materials
      .map((material) => {
        const count = getMaterialCount(material.id);
        const required = material.required ?? 0;
        const pct = required > 0 ? Math.min(100, Math.round((count / required) * 100)) : 0;
        const visual = itemVisualMeta[material.id] ?? { icon: "✧", tone: "emerald", rarity: "Common" };
        const shortDesc = material.description.length > 64 ? `${material.description.slice(0, 62)}...` : material.description;
        return `
          <div class="material-card" data-tone="${visual.tone}">
            <div class="material-icon"><span>${visual.icon}</span></div>
            <div class="material-copy">
              <h3>${material.name}</h3>
              <p>${shortDesc}</p>
              <div class="material-progress-bar"><div class="material-progress-fill" style="width:${pct}%"></div></div>
            </div>
            <div class="material-control">
              <span class="material-count">${count} / ${required}</span>
              <div class="material-plus">${visual.rarity}</div>
            </div>
          </div>
        `;
      })
      .join("");
  }

  function renderHeroUpgradePanel(hero) {
    const tier = getHeroUpgradeLevel(hero.id);
    const cost = getHeroUpgradeCost(hero.id);
    const materialRequirement = getUpgradeMaterialRequirement(hero.id);
    const hasMaterial = !materialRequirement || getMaterialCount(materialRequirement.id) >= materialRequirement.qty;
    const canUpgrade = state.resources.lumen >= cost.lumen && state.resources.fragments >= cost.fragments && hasMaterial;

    heroUpgradeTitle.textContent = `Сигил подготовки ${tier + 1}`;
    heroUpgradeCopy.textContent = materialRequirement
      ? `Следующий уровень даст +120 HP, +2 щита и усилит темп умений. Цена: ${cost.lumen} люмена, ${cost.fragments} фрагм. и ${materialRequirement.qty} × ${materialRequirement.label}.`
      : `Следующий уровень даст +120 HP, +2 щита и усилит темп умений. Цена: ${cost.lumen} люмена и ${cost.fragments} фрагм.`;
    heroUpgradeButton.disabled = !canUpgrade;
    if (canUpgrade) {
      heroUpgradeButton.innerHTML = `
        <span class="button-main-copy">Усилить ${hero.name}</span>
        <span class="button-cost-row">
          <span class="button-cost-pill is-lumen">✦ ${cost.lumen}</span>
          <span class="button-cost-pill is-fragment">◈ ${cost.fragments}</span>
          ${materialRequirement ? `<span class="button-cost-pill is-material">⬢ ${materialRequirement.qty}</span>` : ""}
        </span>
      `;
    } else {
      heroUpgradeButton.innerHTML = hasMaterial
        ? '<span class="button-main-copy">Недостаточно ресурсов</span>'
        : '<span class="button-main-copy">Нужен профильный материал</span>';
    }
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
    const activeHero = getActiveHero();

    // ── Portrait switch entrance animation ──────────────────────
    if (!document.body.classList.contains("reduced-motion")) {
      portraitShell.classList.add("portrait-is-switching");
      requestAnimationFrame(() =>
        requestAnimationFrame(() => portraitShell.classList.remove("portrait-is-switching"))
      );
    }

    portraitShell.dataset.hero = activeHero.id;
    const hasPortraitArt = Boolean(activeHero.art && portraitArt);
    portraitShell.classList.toggle("has-art", hasPortraitArt);
    // Keep the SVG portrait only as a fallback layer when no real illustration exists.
    const svgLayer = portraitShell.querySelector(".portrait-svg-layer");
    if (svgLayer) {
      svgLayer.innerHTML = hasPortraitArt ? "" : generateHeroPortraitSVG(activeHero);
    }

    if (portraitArt) {
      if (hasPortraitArt) {
        portraitArt.src = activeHero.art;
        portraitArt.alt = `Портрет героя ${activeHero.name}`;
        if (portraitArtBackdrop) {
          portraitArtBackdrop.src = activeHero.art;
        }
      } else {
        portraitArt.removeAttribute("src");
        portraitArt.alt = "";
        if (portraitArtBackdrop) {
          portraitArtBackdrop.removeAttribute("src");
        }
      }
    }
    if (portraitStageKicker) {
      portraitStageKicker.textContent = activeHero.role;
    }
    if (portraitStageName) {
      portraitStageName.textContent = activeHero.name;
    }
    if (portraitStageSummary) {
      portraitStageSummary.textContent = activeHero.summary;
    }
    if (portraitParticles) {
      portraitParticles.setAccent(activeHero.accent);
    }
    syncVisualAtmosphere();
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
    renderHeroUpgradePanel(activeHero);
    renderPartyPanels();
    renderJournalHighlights();
  }

  function renderPartyPanels() {
    const activeTab = state.activePartyTab;
    partyUpgradeTabs.forEach((button) => {
      const isActive = button.dataset.partyTab === activeTab;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    partyPanelSections.forEach((section) => {
      const targets = (section.dataset.partyPanels ?? "").split(/\s+/).filter(Boolean);
      const isVisible = targets.includes(activeTab);
      section.hidden = !isVisible;
      section.classList.toggle("is-active", isVisible);
    });
  }

  function cycleHero(direction) {
    const currentIndex = heroes.findIndex((hero) => hero.id === state.activeHeroId);
    const nextIndex = (currentIndex + direction + heroes.length) % heroes.length;
    state.activeHeroId = heroes[nextIndex].id;
    renderHeroList();
    updateHeroPanel();
  }

  function renderJournalTabs() {
    journalTabsContainer.innerHTML = journalTabs
      .map((tab) => {
        const unlockedCount = tab.entries.filter((entry) => isJournalEntryUnlocked(entry.id)).length;
        return `
          <button class="journal-tab ${tab.id === state.activeJournalTab ? "is-active" : ""}" data-journal-tab="${tab.id}">
            ${tab.label} · ${unlockedCount}/${tab.entries.length}
          </button>
        `;
      })
      .join("");

    journalTabsContainer.querySelectorAll("[data-journal-tab]").forEach((button) => {
      button.addEventListener("click", () => {
        state.activeJournalTab = button.dataset.journalTab;
        ensureValidJournalSelection();
        renderJournalTabs();
        renderJournalList();
        updateJournalPanel();
        saveState();
      });
    });
  }

  function renderJournalList() {
    const activeTab = getActiveJournalTab();

    journalList.innerHTML = activeTab.entries
      .map((entry) => {
        const unlocked = isJournalEntryUnlocked(entry.id);
        return `
          <button
            class="journal-entry-button ${entry.id === state.activeJournalEntryId ? "is-active" : ""} ${!unlocked ? "is-locked" : ""}"
            data-journal-entry="${entry.id}"
            ${!unlocked ? "data-entry-locked=true" : ""}
          >
            <strong>${entry.title}</strong>
            <p>${unlocked ? entry.subtitle : getJournalUnlockLabel(entry.id)}</p>
            ${!unlocked ? '<span class="journal-entry-lock">Закрыто</span>' : ""}
          </button>
        `;
      })
      .join("");

    journalList.querySelectorAll("[data-journal-entry]").forEach((button) => {
      button.addEventListener("click", () => {
        if (button.dataset.entryLocked === "true") {
          return;
        }
        state.activeJournalEntryId = button.dataset.journalEntry;
        renderJournalList();
        updateJournalPanel();
        saveState();
      });
    });
  }

  function renderJournalHighlights() {
    const activeTab = getActiveJournalTab();
    const activeEntry = getActiveJournalEntry();
    const context = journalEntryContext[activeEntry.id];

    journalHighlights.innerHTML = [
      {
        title: "Источник",
        body: context?.source ?? `${activeTab.label} · Архивная запись`,
      },
      {
        title: "Связанные записи",
        body: context?.related?.join(" · ") ?? "Связей пока не найдено.",
      },
      {
        title: "Статус архива",
        body: isJournalEntryUnlocked(activeEntry.id)
          ? "Запись открыта и добавлена в походный архив."
          : getJournalUnlockLabel(activeEntry.id),
      },
    ]
      .map(
        (item) => `
          <article class="journal-highlight-card">
            <strong>${item.title}</strong>
            <p>${trimCopy(item.body, 88)}</p>
          </article>
        `,
      )
      .join("");

    syncVisualAtmosphere();
  }

  function updateJournalPanel() {
    const activeTab = getActiveJournalTab();
    ensureValidJournalSelection();
    const activeEntry = getActiveJournalEntry();
    const context = journalEntryContext[activeEntry.id];

    journalKicker.textContent = activeTab.kicker;
    journalTitle.textContent = activeEntry.title;
    journalBody.textContent = activeEntry.body;
    journalMeta.textContent = activeEntry.meta;
    journalSideKicker.textContent = context?.source ? "Источник архива" : "Архивная карточка";
    journalSideTitle.textContent = context?.source ?? activeTab.label;
    journalStamps.innerHTML = activeEntry.stamps
      .map((stamp) => `<span class="journal-stamp">${stamp}</span>`)
      .join("");
    renderJournalHighlights();
  }

  function renderGuideSections() {
    guideSectionList.innerHTML = guideSections
      .map(
        (section) => `
          <button class="guide-section-button ${section.id === state.activeGuideSectionId ? "is-active" : ""}" data-guide-section="${section.id}">
            <strong>${section.title}</strong>
            <p>${section.kicker}</p>
          </button>
        `,
      )
      .join("");

    guideSectionList.querySelectorAll("[data-guide-section]").forEach((button) => {
      button.addEventListener("click", () => {
        state.activeGuideSectionId = button.dataset.guideSection;
        renderGuideSections();
        updateGuidePanel();
        saveState();
      });
    });
  }

  function updateGuidePanel() {
    const activeSection = getActiveGuideSection();
    const readiness = getReadinessReport();

    guideKicker.textContent = activeSection.kicker;
    guideTitle.textContent = activeSection.title;
    guideSummary.textContent =
      activeSection.id === "steam"
        ? `${activeSection.summary} Текущая готовность вертикального среза: ${readiness.percent}%.`
        : activeSection.summary;
    guidePointList.innerHTML = activeSection.points
      .map((point) => `<article class="guide-point">${point}</article>`)
      .join("");
    guideStatusTitle.textContent = `Готовность среза · ${readiness.percent}%`;
    guideStatusList.innerHTML = readiness.cards
      .map(
        (card) => `
          <article class="guide-status-card is-${card.tone}">
            <strong>${card.title}</strong>
            <p>${card.body}</p>
          </article>
        `,
      )
      .join("");
  }

  function renderShopGrid() {
    shopGrid.innerHTML = shopItems
      .map((item) => {
        const priceLabel = item.currency === "fragments" ? `${item.price} фрагм.` : `${item.price} люм.`;
        const visual = itemVisualMeta[item.materialId] ?? { icon: "✧", tone: "emerald", rarity: "Common" };
        const shortDesc = item.description.length > 96 ? `${item.description.slice(0, 94)}...` : item.description;

        return `
          <button class="shop-card ${item.id === state.activeShopItemId ? "is-selected" : ""}" data-tone="${visual.tone}" data-shop-item="${item.id}">
            <div class="shop-card-orb"><span>${visual.icon}</span></div>
            <div class="shop-card-header">
              <strong>${item.name}</strong>
              <span class="shop-card-tag">${item.tag}</span>
            </div>
            <p>${shortDesc}</p>
            <div class="shop-card-foot">
              <span class="shop-card-price">${priceLabel}</span>
              <span class="shop-card-rarity">${visual.rarity}</span>
            </div>
            <div class="shop-card-note">${item.stock} · ${item.use}</div>
          </button>
        `;
      })
      .join("");

    shopGrid.querySelectorAll("[data-shop-item]").forEach((button) => {
      button.addEventListener("click", () => {
        state.activeShopItemId = button.dataset.shopItem;
        renderShopGrid();
        updateShopPanel();
      });
    });
  }

  function updateShopPanel() {
    const item = getActiveShopItem();
    const canAfford =
      item.currency === "fragments"
        ? state.resources.fragments >= item.price
        : state.resources.lumen >= item.price;

    shopItemName.textContent = item.name;
    shopItemDesc.textContent = item.description;
    shopItemMeta.innerHTML = [
      ["Стоимость", item.currency === "fragments" ? `${item.price} фрагм.` : `${item.price} люм.`],
      ["Остаток", item.stock],
      ["Назначение", item.use],
      ["В запасе", `${getMaterialCount(item.materialId)} шт.`],
    ]
      .map(
        ([label, value]) => `
          <div class="shop-meta-item">
            <span>${label}</span>
            <strong>${value}</strong>
          </div>
        `,
      )
      .join("");

    shopBuy.disabled = !canAfford;
    if (canAfford) {
      shopBuy.innerHTML = item.currency === "fragments"
        ? `<span class="button-main-copy">Добавить в поставку</span><span class="button-cost-row"><span class="button-cost-pill is-fragment">◈ ${item.price}</span></span>`
        : `<span class="button-main-copy">Добавить в поставку</span><span class="button-cost-row"><span class="button-cost-pill is-lumen">✦ ${item.price}</span></span>`;
    } else {
      shopBuy.innerHTML = '<span class="button-main-copy">Недостаточно ресурса</span>';
    }
  }

  function buyActiveItem() {
    const item = getActiveShopItem();

    if (item.currency === "fragments") {
      if (state.resources.fragments < item.price) {
        return;
      }
      state.resources.fragments -= item.price;
    } else {
      if (state.resources.lumen < item.price) {
        return;
      }
      state.resources.lumen -= item.price;
    }

    if (item.materialId) {
      addMaterials([{ id: item.materialId, qty: 1 }]);
    }

    renderResources();
    updateShopPanel();
    updateHeroPanel();
    renderJournalHighlights();
    addSessionLog("Поставка оформлена", `${item.name} отправлен в архив снабжения.`);
  }

  function renderUiScaleOptions() {
    uiScaleOptionsContainer.innerHTML = uiScaleOptions
      .map(
        (option) => `
          <button class="setting-option ${option.id === state.settings.uiScaleId ? "is-active" : ""}" data-ui-scale="${option.id}">
            ${option.label}
          </button>
        `,
      )
      .join("");

    uiScaleOptionsContainer.querySelectorAll("[data-ui-scale]").forEach((button) => {
      button.addEventListener("click", () => {
        state.settings.uiScaleId = button.dataset.uiScale;
        applyUiSettings();
        renderUiScaleOptions();
        addSessionLog("UI обновлён", `Масштаб интерфейса переключён на ${button.textContent.trim()}.`);
      });
    });
  }

  function renderMenuChecklist() {
    const readiness = getReadinessReport();
    const checklist = [
      steamChecklist[0],
      { ...steamChecklist[1], body: "Экраны листаются цифрами 1–7, а руководство открывается также по клавише 8." },
      steamChecklist[2],
      {
        title: "Логика вертикального среза",
        body: `Текущая оценка готовности: ${readiness.percent}%. Маршруты, архив и бой уже связаны, но мета-слой ещё неглубокий.`,
        complete: readiness.percent >= 60,
      },
    ];

    menuCheckList.innerHTML = checklist
      .map(
        (item) => `
          <article class="menu-check-item ${item.complete ? "is-complete" : ""}">
            <strong>${item.title}</strong>
            <p>${item.body}</p>
          </article>
        `,
      )
      .join("");
  }

  function renderSessionLog() {
    menuLogList.innerHTML = state.sessionLog
      .map(
        (entry) => `
          <article class="menu-log-item">
            <strong>${entry.title}</strong>
            <p>${entry.body}</p>
            <small>${entry.time}</small>
          </article>
        `,
      )
      .join("");
  }

  function getBattleSkillSet(heroId) {
    return battleSkillSets[heroId] ?? [];
  }

  function getBattleAlly(id) {
    return state.battle.allies.find((ally) => ally.id === id);
  }

  function getBattleEnemy(id) {
    return state.battle.enemies.find((enemy) => enemy.id === id);
  }

  function getBattleTarget() {
    return (
      getBattleEnemy(state.battle.selectedTargetId) ??
      state.battle.enemies[0] ?? {
        id: "cleared",
        name: "Арена очищена",
        description: "Все цели подавлены. Можно возвращаться к маршруту или продолжать полировать encounter-сцену.",
      }
    );
  }

  function getBattleActingHero() {
    return getBattleAlly(state.battle.actingHeroId) ?? state.battle.allies[0];
  }

  function getUnitStyle(form) {
    const palette = battleUnitPalette[form] ?? battleUnitPalette.guide;
    return [
      `--unit-1:${palette.unit1}`,
      `--unit-2:${palette.unit2}`,
      `--unit-3:${palette.unit3}`,
      `--skin-1:${palette.skin1}`,
      `--skin-2:${palette.skin2}`,
      `--weapon-1:${palette.weapon1}`,
      `--weapon-rot:${palette.weaponRot}`,
    ].join(";");
  }

  function getEncounterObjective(node) {
    if (node.label === "Boss") {
      return "Сорвите телеграф босса, сломайте узлы резонанса и удержите переднюю линию под давлением арки.";
    }
    if (node.label === "Стычка" || node.label === "Угроза") {
      return "Быстро подавите волну врагов, не дав им стянуть корни вокруг задней линии.";
    }
    return "Возьмите первый ритм сцены под контроль, выберите опасную цель и не дайте корням сомкнуть проход.";
  }

  function prepareBattleFromQuest() {
    const activeQuest = getActiveQuest();
    const { isCompleted, nodeIndex: currentNodeIndex, node: currentNode, resolved } = getQuestNodeContext(activeQuest);
    if (isCompleted || !currentNode) {
      return;
    }

    const nextBattle = createBattleState();

    nextBattle.title = currentNode.title;
    nextBattle.subtitle = `${activeQuest.title} · ${currentNode.label}`;
    nextBattle.objective = getEncounterObjective(currentNode);
    nextBattle.phase = currentNode.label === "Boss" ? "Фаза I · Подъём колосса" : "Фаза I · Контакт в руинах";
    nextBattle.sourceQuestId = activeQuest.id;
    nextBattle.sourceNodeIndex = currentNodeIndex;

    if (resolved && isCombatNode(currentNode)) {
      nextBattle.result = "victory";
      nextBattle.enemies = [];
      nextBattle.log = [
        {
          title: "Узел уже очищен",
          body: "Страж уже подавлен. Вернитесь в Экспедиции и закройте узел маршрута, чтобы продвинуть главу.",
        },
      ];
      state.battle = nextBattle;
      renderBattle();
      return;
    }

    if (currentNode.label === "Boss") {
      nextBattle.enemies = [
        {
          id: "colossus",
          name: "Немой колосс",
          role: "Босс главы",
          hp: 4680,
          maxHp: 4680,
          armor: 3,
          intent: "Удар аркой через два такта",
          description: "Монументальный страж, медленно наращивающий давление по передней линии.",
          form: "colossus",
          marked: false,
          vulnerable: false,
        },
        {
          id: "cantor",
          name: "Хор корней",
          role: "Поддержка",
          hp: 1240,
          maxHp: 1240,
          armor: 1,
          intent: "Сцепление корней",
          description: "Поддерживает босса и стягивает поле узкими коридорами.",
          form: "cantor",
          marked: false,
          vulnerable: false,
        },
      ];
      nextBattle.queue = ["liora", "noel", "colossus", "saya", "cantor", "rian"];
    } else {
      nextBattle.enemies = [
        {
          id: "cantor",
          name: "Хор корней",
          role: "Элитная поддержка",
          hp: 1680,
          maxHp: 1680,
          armor: 1,
          intent: "Сцепление корней",
          description: "Стягивает поле узким ритмом и мешает развороту задней линии.",
          form: "cantor",
          marked: false,
          vulnerable: false,
        },
        {
          id: "rootling",
          name: "Корнеед",
          role: "Налётчик",
          hp: 980,
          maxHp: 980,
          armor: 0,
          intent: "Бросок в заднюю линию",
          description: "Мелкая нечисть, которая быстро ломает мягкие построения.",
          form: "cantor",
          marked: false,
          vulnerable: false,
        },
      ];
      nextBattle.queue = ["liora", "rootling", "saya", "cantor", "rian", "noel"];
    }

    nextBattle.selectedTargetId = nextBattle.enemies[0].id;
    nextBattle.log = [
      {
        title: "Точка входа",
        body: `${activeQuest.title}: ${currentNode.title}. Отряд входит в сцену боя и берёт ритм под контроль.`,
      },
      {
        title: "Ритм сцены прочитан",
        body: "Лиора отмечает слабый шов в строе противника. Теперь важно выбрать первую цель и удержать темп.",
      },
    ];

    state.battle = nextBattle;
    renderBattle();
  }

  function renderBattleParty() {
    battleParty.innerHTML = state.battle.allies
      .map((ally) => {
        const hp = Math.max(0, Math.round((ally.hp / ally.maxHp) * 100));
        const isActing = ally.id === state.battle.actingHeroId;
        return `
          <article class="battle-party-card${isActing ? " is-acting" : ""}">
            <strong>${ally.name}</strong>
            <p>${ally.role} · Щит ${ally.guard}</p>
            <div class="battle-unit-bar"><span style="width:${hp}%"></span></div>
          </article>
        `;
      })
      .join("");
  }

  function renderBattleUnits() {
    battleAllies.innerHTML = state.battle.allies
      .map((ally) => {
        const hp = Math.max(0, Math.round((ally.hp / ally.maxHp) * 100));
        const isActing = ally.id === state.battle.actingHeroId;
        return `
          <button class="battle-unit${isActing ? " is-acting" : ""}" type="button" data-id="${ally.id}" data-side="ally" data-form="${ally.form}" style="${getUnitStyle(ally.form)}">
            <div class="battle-unit-frame">
              <div class="battle-unit-core"></div>
              <div class="battle-unit-weapon"></div>
            </div>
            <strong class="battle-unit-label">${ally.name}</strong>
            <div class="battle-unit-bar"><span style="width:${hp}%"></span></div>
            <div class="battle-unit-meta">HP ${ally.hp} / ${ally.maxHp}</div>
          </button>
        `;
      })
      .join("");

    battleEnemies.innerHTML = state.battle.enemies
      .map((enemy) => {
        const hp = Math.max(0, Math.round((enemy.hp / enemy.maxHp) * 100));
        const selectedClass = enemy.id === state.battle.selectedTargetId ? "is-selected" : "";
        const statusCopy = [enemy.marked ? "Метка" : "", enemy.vulnerable ? "Слабость" : ""].filter(Boolean).join(" · ");

        return `
          <button class="battle-unit ${selectedClass}" type="button" data-id="${enemy.id}" data-battle-target="${enemy.id}" data-side="enemy" data-form="${enemy.form}" style="${getUnitStyle(enemy.form)}">
            <div class="battle-unit-frame">
              <div class="battle-unit-core"></div>
              <div class="battle-unit-weapon"></div>
            </div>
            <strong class="battle-unit-label">${enemy.name}</strong>
            <div class="battle-unit-bar"><span style="width:${hp}%"></span></div>
            <div class="battle-unit-meta">HP ${enemy.hp} / ${enemy.maxHp}${statusCopy ? ` · ${statusCopy}` : ""}</div>
          </button>
        `;
      })
      .join("");

    battleEnemies.querySelectorAll("[data-battle-target]").forEach((button) => {
      button.addEventListener("click", () => {
        state.battle.selectedTargetId = button.dataset.battleTarget;
        renderBattle();
      });
    });
  }

  function renderBattleIntents() {
    const imminentId = state.battle.queue[0];
    battleIntents.innerHTML = state.battle.enemies
      .map(
        (enemy) => {
          const isHeavy = enemy.id === "colossus" || enemy.armor >= 2;
          const isImminent = enemy.id === imminentId;
          const classes = ["battle-intent-card", isHeavy ? "is-heavy" : "", isImminent ? "is-imminent" : ""].filter(Boolean).join(" ");
          const intentTone = isImminent ? "Следующий ход" : isHeavy ? "Тяжёлый телеграф" : "Давление сцены";
          return `
            <article class="${classes}">
              <span class="battle-intent-kicker">${intentTone}</span>
              <strong>${enemy.name}</strong>
              <p>${enemy.intent}</p>
            </article>
          `;
        },
      )
      .join("");
  }

  function renderBattleQueue() {
    battleQueue.innerHTML = state.battle.queue
      .slice(0, 6)
      .map((actorId, index) => {
        const actor = getBattleAlly(actorId) ?? getBattleEnemy(actorId);
        return `<div class="battle-queue-chip ${index === 0 ? "is-active" : ""}">${actor?.name ?? actorId}</div>`;
      })
      .join("");
  }

  function renderBattleSkills() {
    const actingHero = getBattleActingHero();
    const skills = getBattleSkillSet(actingHero.id);
    const effectLabels = {
      mark: "Метка цели",
      guard: "Щит строя",
      shatter: "Пролом брони",
      bulwark: "Фронтовой бастион",
      vulnerable: "Слабость цели",
      reap: "Добивание",
      delay: "Сдвиг очереди",
      focus: "Разгон резонанса",
    };

    battleSkillGrid.innerHTML = skills
      .map(
        (skill) => `
          <button class="battle-skill ${skill.id === state.battle.selectedSkillId ? "is-selected" : ""}" type="button" data-battle-skill="${skill.id}">
            <span>${skill.cost}</span>
            <strong>${skill.name}</strong>
            <p>${skill.description}</p>
            <div class="battle-skill-meta">
              <span>Урон ${skill.damage}</span>
              <span>Резонанс +${skill.resonance}</span>
              <span>${effectLabels[skill.effect] ?? "Тактический эффект"}</span>
            </div>
          </button>
        `,
      )
      .join("");

    battleSkillGrid.querySelectorAll("[data-battle-skill]").forEach((button) => {
      button.addEventListener("click", () => {
        state.battle.selectedSkillId = button.dataset.battleSkill;
        renderBattleSkills();
      });
    });
  }

  function renderBattleLog() {
    battleLog.innerHTML = state.battle.log
      .map(
        (entry, index) => `
          <article class="battle-log-item${index === 0 ? " is-new" : ""}">
            <strong>${entry.title}</strong>
            <p>${entry.body}</p>
          </article>
        `,
      )
      .join("");
  }

  function renderBattle() {
    const actingHero = getBattleActingHero();
    const target = getBattleTarget();
    const isOngoing = state.battle.result === "ongoing";

    battleTitle.textContent = state.battle.title;
    battleSubtitle.textContent = state.battle.subtitle;
    battleObjective.textContent = isOngoing
      ? state.battle.objective
      : state.battle.result === "victory"
        ? "Узел подавлен. Вернитесь в Экспедиции и завершите узел маршрута, чтобы получить награду."
        : "Отряд отступил. Encounter можно перезапустить без потери маршрута.";
    battlePhase.textContent = isOngoing
      ? state.battle.phase
      : state.battle.result === "victory"
        ? "Результат · Победа"
        : "Результат · Отступление";
    battleTurn.textContent = String(state.battle.turn);
    battleActingName.textContent = actingHero.name;
    battleActingRole.textContent = actingHero.role;
    battleTargetName.textContent = target.name;
    battleTargetDesc.textContent = target.description;
    battleResonanceValue.textContent = `${state.battle.resonance}%`;
    battleResonanceBar.style.width = `${Math.min(100, state.battle.resonance)}%`;
    battleCommit.textContent = isOngoing
      ? "Применить приём"
      : state.battle.result === "victory"
        ? "Вернуться с победой"
        : "Повторить encounter";

    renderBattleParty();
    renderBattleUnits();
    renderBattleIntents();
    renderBattleQueue();
    renderBattleSkills();
    renderBattleLog();
  }

  function getBattleStats(battle = state.battle) {
    const stats = battle?.stats ?? {};
    return {
      damageDealt: stats.damageDealt ?? 0,
      damageTaken: stats.damageTaken ?? 0,
      enemiesDefeated: stats.enemiesDefeated ?? 0,
      heroActions: stats.heroActions ?? 0,
      highestHit: stats.highestHit ?? 0,
      resonancePeak: stats.resonancePeak ?? battle?.resonance ?? 0,
      killingBlowHeroId: stats.killingBlowHeroId ?? null,
      lastActingHeroId: stats.lastActingHeroId ?? battle?.actingHeroId ?? null,
    };
  }

  function buildVictoryResultPayload(battle, quest, reward) {
    const stats = getBattleStats(battle);
    const turnsSpent = Math.max(1, stats.heroActions);
    const killingHero = getHeroById(stats.killingBlowHeroId || stats.lastActingHeroId);
    const node = quest.route[battle.sourceNodeIndex] ?? { label: "Узел", title: battle.title };
    const rewardHeadline = formatRewardHeadline(reward);
    const isBossNode = node.label === "Boss";

    return {
      status: "victory",
      title: isBossNode ? "Колосс смолк" : "Узел подавлен",
      subtitle: battle.subtitle,
      summary: isBossNode
        ? `Отряд разорвал ритм главы за ${turnsSpent} приёмов. ${killingHero.name} поставил завершающий удар и открыл путь к следующему слою святилища.`
        : `Стычка закрыта за ${turnsSpent} приёмов. Маршрут удержан, а отряд сохранил темп для следующего узла.`,
      reward,
      notes: [
        {
          title: "Ритм столкновения",
          body: `${turnsSpent} приёмов отряда, ${stats.enemiesDefeated} сломанные цели и пик резонанса ${stats.resonancePeak}%. Сцена не успела сомкнуть коридор вокруг партии.`,
        },
        {
          title: "Ключевой удар",
          body: stats.highestHit > 0
            ? `${killingHero.name} закрыл узел ударом на ${stats.highestHit} урона, пока партия суммарно приняла ${stats.damageTaken} урона.`
            : `${killingHero.name} зафиксировал финальный темп, а партия удержала сцену без решающего проседания.`,
        },
        {
          title: "Трофеи маршрута",
          body: `К выдаче подготовлено: ${rewardHeadline}. После подтверждения награда уйдёт в общий запас святилища.`,
        },
      ],
    };
  }

  function buildDefeatResultPayload(battle) {
    const stats = getBattleStats(battle);
    const turnsSpent = Math.max(1, stats.heroActions);
    const pressureTarget = [...battle.allies].sort((left, right) => left.hp - right.hp)[0];

    return {
      status: "defeat",
      title: pressureTarget ? `${pressureTarget.name} пал` : "Строй сорван",
      subtitle: battle.subtitle,
      summary: `Отряд отступил после ${turnsSpent} приёмов. Маршрут не потерян, но сцена успела навязать партии ${stats.damageTaken} урона и сорвать устойчивый темп.`,
      reward: {},
      notes: [
        {
          title: "Точка срыва",
          body: pressureTarget
            ? `${pressureTarget.name} просел сильнее остальных, и линия больше не удержала давление.`
            : "Передняя линия не удержала давление, и сцена перешла под контроль противника.",
        },
        {
          title: "Что уже сработало",
          body: `До отступления партия успела нанести ${stats.damageDealt} урона и поднять резонанс до ${stats.resonancePeak}%. Попытка не была пустой: нужный ритм уже частично прочитан.`,
        },
        {
          title: "Следующий ход",
          body: "Можно сразу перезапустить encounter или вернуться к отряду и усилить героя через накопленные материалы и люмен.",
        },
      ],
    };
  }

  function getResultRewardCards() {
    const reward = state.lastResult?.reward ?? {};
    const stats = getBattleStats(state.battle);
    const resourceCards = [
      reward.lumen ? { label: "Люмен", value: `+${reward.lumen}` } : null,
      reward.fragments ? { label: "Фрагменты", value: `+${reward.fragments}` } : null,
      reward.ap ? { label: "AP", value: reward.ap } : null,
      ...(reward.materials ?? []).map((item) => ({
        label: materialCatalog[item.id]?.label ?? item.id,
        value: `+${item.qty}`,
      })),
    ].filter(Boolean);
    const statCards = [
      stats.damageDealt > 0 ? { label: "Нанесено урона", value: String(stats.damageDealt), isStat: true } : null,
      stats.highestHit > 0 ? { label: "Мощнейший удар", value: String(stats.highestHit), isStat: true } : null,
      stats.enemiesDefeated > 0 ? { label: "Выведено из ритма", value: String(stats.enemiesDefeated), isStat: true } : null,
    ].filter(Boolean);
    return [...resourceCards, ...statCards];
  }

  function renderResults() {
    const payload = state.lastResult ?? {
      status: "victory",
      title: "Узел подавлен",
      subtitle: "Экспедиция",
      summary: "Маршрут удержан и готов к следующему шагу.",
      reward: {},
      notes: [],
    };
    const isDefeat = payload.status === "defeat";
    const defeatStats = getBattleStats(state.battle);
    const defeatCards = [
      { label: "Нанесено урона", value: String(defeatStats.damageDealt) },
      { label: "Принято урона", value: String(defeatStats.damageTaken) },
      { label: "Пик резонанса", value: `${defeatStats.resonancePeak}%` },
    ];

    if (resultsScreen) {
      resultsScreen.dataset.resultState = isDefeat ? "defeat" : "victory";
    }
    [resultsScape, resultsSummaryPanel, resultsReportPanel, resultsActionsPanel].forEach((node) => {
      if (node) {
        node.classList.toggle("is-defeat", isDefeat);
      }
    });
    resultPrimary.classList.toggle("is-defeat-action", isDefeat);
    resultSecondary.classList.toggle("is-defeat-action", isDefeat);

    resultKicker.textContent = isDefeat ? "Память отступления" : "Итог экспедиции";
    resultTitle.textContent = payload.title;
    resultSubtitle.textContent = payload.subtitle;
    resultStatusPill.textContent = isDefeat ? "Отступление" : "Победа";
    resultStatusPill.classList.toggle("is-defeat", isDefeat);
    resultSummary.textContent = payload.summary;

    resultRewardList.innerHTML = (isDefeat ? defeatCards : getResultRewardCards())
      .map(
        (card) => `
          <article class="result-reward-card${isDefeat ? " is-defeat" : ""}${card.isStat ? " is-stat" : ""}">
            <span>${card.label}</span>
            <strong>${card.value}</strong>
          </article>
        `,
      )
      .join("") || `<article class="result-reward-card${isDefeat ? " is-defeat" : ""}"><span>Статус</span><strong>${isDefeat ? "Маршрут удержан без трофея" : "Без новой награды"}</strong></article>`;

    resultNoteList.innerHTML = (payload.notes ?? [])
      .map((note, index) => `
          <article class="result-note-card${isDefeat ? " is-defeat" : ""}${isDefeat && index === 0 ? " is-critical" : ""}">
            <strong>${note.title}</strong>
            <p>${note.body}</p>
          </article>
        `)
      .join("") || `<article class="result-note-card${isDefeat ? " is-defeat" : ""}"><strong>Разбор готовится</strong><p>След боя появится здесь после первого завершённого encounter.</p></article>`;

    resultNextTitle.textContent = isDefeat ? "Собрать строй заново" : "Забрать награду";
    resultNextCopy.textContent = isDefeat
      ? "Маршрут не потерян. Можно сразу перезайти в encounter или вернуться в отряд и усилить слабое звено через накопленные материалы."
      : payload.status === "victory"
      ? "Подтвердите результат, чтобы вернуть отряд в маршрут и сохранить прогресс главы."
      : "Можно сразу вернуться в бой, не теряя текущий узел маршрута.";
    resultPrimary.textContent = isDefeat ? "Перезайти в encounter" : "Забрать награду и к маршруту";
    resultSecondary.textContent = isDefeat ? "Отступить в святилище" : "Открыть дневник";
  }

  function renderChapterScreen() {
    const boon = sanctuaryBoons.find((item) => item.id === state.selectedChapterBoonId) ?? sanctuaryBoons[0];
    const storyQuest = getQuestById("story");
    chapterKicker.textContent = "Отчет главы";
    chapterTitle.textContent = "Сад немого стража удержан";
    chapterSummary.textContent = "Глава закрыта как полноценная вылазка: маршрут, бой, награда и возврат в прогрессию теперь связаны в один цикл.";
    chapterChoiceTitle.textContent = "Что укрепить между вылазками";
    chapterChoiceCopy.textContent = `Текущий выбор: ${boon.title}. Этот сигил задаст новый акцент для следующего круга.`;
    chapterNextTitle.textContent = "Вернуться в святилище";
    chapterNextCopy.textContent = "После фиксации сигила дом покажет активный мета-бонус, а отряд пойдет в следующую вылазку уже с ним.";

    chapterStatList.innerHTML = [
      { label: "Очищено узлов", value: `${getQuestProgress("story")} / ${storyQuest.route.length}` },
      { label: "Выиграно боев", value: `${Object.keys(state.resolvedBattles).filter((key) => key.startsWith("story:")).length}` },
      { label: "Усилено героев", value: `${Object.values(state.heroUpgrades).filter((tier) => tier > 0).length} / ${heroes.length}` },
    ]
      .map(
        (item) => `
          <article class="chapter-stat-card">
            <span>${item.label}</span>
            <strong>${item.value}</strong>
          </article>
        `,
      )
      .join("");

    chapterBoonGrid.innerHTML = sanctuaryBoons
      .map(
        (item) => `
          <button class="chapter-boon-card ${item.id === state.selectedChapterBoonId ? "is-selected" : ""}" type="button" data-boon-id="${item.id}">
            <strong>${item.title}</strong>
            <p>${item.body}</p>
            <span>${item.bonusLabel}</span>
          </button>
        `,
      )
      .join("");

    chapterBoonGrid.querySelectorAll("[data-boon-id]").forEach((button) => {
      button.addEventListener("click", () => {
        state.selectedChapterBoonId = button.dataset.boonId;
        renderChapterScreen();
        saveState();
      });
    });
  }

  function renderEndingScreen() {
    const boon = getActiveBoon();
    endingKicker.textContent = "Эпилог демо";
    endingTitle.textContent = "Сад снова ответил";
    endingSummary.textContent = boon
      ? `Первая глава закрыта, а святилище запомнило ваш выбор: ${boon.title}. Теперь этот мотив держит все следующие вылазки.`
      : "Первая глава закрыта, и отряд вернулся в дом с новым слоем памяти.";

    endingPillars.innerHTML = [
      { title: "Маршрут", body: "Глава прочитана как полный loop от входа до возврата." },
      { title: "Отряд", body: `${Object.values(state.heroUpgrades).filter((tier) => tier > 0).length} героев уже получили усиление.` },
      { title: "Святилище", body: boon ? boon.bonusLabel : "Сигил можно выбрать в отчете главы." },
    ]
      .map(
        (item) => `
          <article class="ending-pillar-card">
            <strong>${item.title}</strong>
            <p>${item.body}</p>
          </article>
        `,
      )
      .join("");

    endingNoteList.innerHTML = [
      {
        title: "Что можно показывать другим",
        body: "У игры теперь есть полный playable demo-loop, а не только отдельные экраны.",
      },
      {
        title: "Что расти дальше",
        body: "Следующий слой уже про контент: новые главы, враги, арты и полировку боя.",
      },
    ]
      .map(
        (note) => `
          <article class="result-note-card">
            <strong>${note.title}</strong>
            <p>${note.body}</p>
          </article>
        `,
      )
      .join("");
  }

  function finalizeChapterIfNeeded(quest) {
    if (getQuestProgress(quest.id) < quest.route.length) {
      return false;
    }

    if (quest.id === "story") {
      renderChapterScreen();
      setActiveScreen("chapter");
      return true;
    }

    return false;
  }

  function attemptHeroUpgrade() {
    const hero = getActiveHero();
    const cost = getHeroUpgradeCost(hero.id);
    const materialRequirement = getUpgradeMaterialRequirement(hero.id);
    const hasMaterial = !materialRequirement || getMaterialCount(materialRequirement.id) >= materialRequirement.qty;

    if (
      state.resources.lumen < cost.lumen ||
      state.resources.fragments < cost.fragments ||
      !hasMaterial
    ) {
      addSessionLog("Недостаточно ресурсов", "Для усиления героя не хватает люмена, фрагментов или материалов.");
      return false;
    }

    state.resources.lumen = Math.max(0, state.resources.lumen - cost.lumen);
    state.resources.fragments = Math.max(0, state.resources.fragments - cost.fragments);

    if (materialRequirement) {
      state.materials[materialRequirement.id] = Math.max(0, getMaterialCount(materialRequirement.id) - materialRequirement.qty);
    }

    state.heroUpgrades[hero.id] = getHeroUpgradeLevel(hero.id) + 1;
    renderResources();
    renderHomeMeta();
    updateHeroPanel();
    renderMenuChecklist();
    addSessionLog("Герой усилен", `${hero.name} получил новый уровень подготовки для следующих боев.`);
    saveState();
    return true;
  }

  function rotateBattleQueue() {
    const nextQueue = state.battle.queue.filter((actorId) => {
      const ally = getBattleAlly(actorId);
      if (ally) {
        return ally.hp > 0;
      }

      const enemy = getBattleEnemy(actorId);
      return Boolean(enemy && enemy.hp > 0);
    });
    const first = nextQueue.shift();
    if (first) {
      nextQueue.push(first);
    }
    state.battle.queue = nextQueue;
  }

  function resolveBattleVictory() {
    const battleKey = getNodeKey(state.battle.sourceQuestId, state.battle.sourceNodeIndex);
    const quest = getQuestById(state.battle.sourceQuestId);
    const baseReward = getNodeReward(quest, state.battle.sourceNodeIndex);
    const boon = getActiveBoon();
    const reward = {
      ...baseReward,
      lumen: (baseReward.lumen ?? 0) + (boon?.id === "lumenwell" ? 8 : 0),
      fragments: (baseReward.fragments ?? 0) + (boon?.id === "archive-lens" && state.battle.sourceNodeIndex === quest.route.length - 1 ? 1 : 0),
      materials: [
        ...(baseReward.materials ?? []),
        ...(state.battle.sourceNodeIndex === quest.route.length - 1 ? [{ id: "awakening-stone", qty: 1 }] : []),
      ],
    };
    state.battle.result = "victory";
    state.resolvedBattles[battleKey] = true;
    state.battle.enemies = [];
    state.battle.selectedTargetId = "cleared";
    state.lastResult = buildVictoryResultPayload(state.battle, quest, reward);
    state.battle.log.unshift({
      title: "Победа",
      body: "Узел зачищен. Теперь вернитесь в Экспедиции и завершите узел маршрута, чтобы забрать награду.",
    });
    state.battle.log = state.battle.log.slice(0, 6);
    renderBattle();
    renderResults();
    renderQuestCards();
    updateQuestOverview();
    renderGuideSections();
    updateGuidePanel();
    addSessionLog("Узел зачищен", `${state.battle.title} подавлен. Маршрут можно продвинуть дальше.`);
    setActiveScreen("results");
  }

  function resolveBattleDefeat() {
    state.battle.result = "defeat";
    state.lastResult = buildDefeatResultPayload(state.battle);
    state.battle.log.unshift({
      title: "Отступление",
      body: "Отряд не удержал строй. Encounter можно перезапустить без потери текущего маршрута.",
    });
    state.battle.log = state.battle.log.slice(0, 6);
    renderBattle();
    renderResults();
    addSessionLog("Encounter сорван", `${state.battle.title} требует повторной попытки.`);
    setActiveScreen("results");
  }

  function resolveEnemyTurn() {
    const enemy = getBattleEnemy(state.battle.queue[0]);
    if (!enemy) {
      return;
    }

    const livingAllies = state.battle.allies.filter((ally) => ally.hp > 0);
    if (!livingAllies.length) {
      resolveBattleDefeat();
      return;
    }

    const targetAlly = [...livingAllies].sort((left, right) => left.hp - right.hp)[0];
    const rawDamage = enemy.id === "colossus" ? 220 : 140;
    const mitigatedDamage = Math.max(80, rawDamage - targetAlly.guard);
    targetAlly.hp = Math.max(0, targetAlly.hp - mitigatedDamage);
    targetAlly.guard = Math.max(0, targetAlly.guard - 6);
    state.battle.stats.damageTaken += mitigatedDamage;

    state.battle.log.unshift({
      title: `${enemy.name} атакует`,
      body: `${enemy.intent}. ${targetAlly.name} получает ${mitigatedDamage} урона.`,
    });
    state.battle.log = state.battle.log.slice(0, 6);

    if (state.battle.allies.every((ally) => ally.hp <= 0)) {
      resolveBattleDefeat();
      return;
    }

    rotateBattleQueue();
    const nextHero = state.battle.queue.find((actorId) => {
      const ally = getBattleAlly(actorId);
      return Boolean(ally && ally.hp > 0);
    });
    if (nextHero) {
      state.battle.actingHeroId = nextHero;
      state.battle.selectedSkillId = getBattleSkillSet(nextHero)[0]?.id ?? state.battle.selectedSkillId;
    }
  }

  /* ── Battle VFX Helpers ─────────────────────────────────── */

  function vfxShake() {
    const field = document.querySelector(".battle-field");
    if (!field || document.body.classList.contains("reduced-motion")) return;
    field.classList.remove("vfx-shake");
    field.offsetHeight;
    field.classList.add("vfx-shake");
    field.addEventListener("animationend", () => field.classList.remove("vfx-shake"), { once: true });
  }

  function vfxDamage(unitId) {
    const el = document.querySelector(`.battle-unit[data-id="${unitId}"]`);
    if (!el || document.body.classList.contains("reduced-motion")) return;
    el.classList.remove("vfx-damage");
    el.offsetHeight;
    el.classList.add("vfx-damage");
    el.addEventListener("animationend", () => el.classList.remove("vfx-damage"), { once: true });
  }

  function vfxCast(unitId) {
    const el = document.querySelector(`.battle-unit[data-id="${unitId}"]`);
    if (!el || document.body.classList.contains("reduced-motion")) return;
    el.classList.remove("vfx-cast");
    el.offsetHeight;
    el.classList.add("vfx-cast");
    el.addEventListener("animationend", () => el.classList.remove("vfx-cast"), { once: true });
  }

  function vfxImpact(unitId) {
    const el = document.querySelector(`.battle-unit[data-id="${unitId}"]`);
    if (!el || document.body.classList.contains("reduced-motion")) return;
    el.classList.remove("vfx-impact");
    el.offsetHeight;
    el.classList.add("vfx-impact");
    el.addEventListener("animationend", () => el.classList.remove("vfx-impact"), { once: true });
  }

  function vfxHeavy() {
    const field = document.querySelector(".battle-field");
    if (!field || document.body.classList.contains("reduced-motion")) return;
    field.classList.remove("vfx-heavy");
    field.offsetHeight;
    field.classList.add("vfx-heavy");
    field.addEventListener("animationend", () => field.classList.remove("vfx-heavy"), { once: true });
  }

  function vfxResonanceSurge() {
    const bar = document.getElementById("battle-resonance-bar");
    if (!bar || document.body.classList.contains("reduced-motion")) return;
    bar.classList.remove("vfx-resonance-surge");
    bar.offsetHeight;
    bar.classList.add("vfx-resonance-surge");
    bar.addEventListener("animationend", () => bar.classList.remove("vfx-resonance-surge"), { once: true });
  }

  function vfxDefeated(unitId) {
    const el = document.querySelector(`.battle-unit[data-id="${unitId}"]`);
    if (el) el.classList.add("vfx-defeated");
  }

  function vfxFloatNumber(unitId, amount, isHeavy) {
    const el = document.querySelector(`.battle-unit[data-id="${unitId}"]`);
    if (!el || document.body.classList.contains("reduced-motion")) return;
    const float = document.createElement("div");
    float.className = `battle-damage-float${isHeavy ? " is-heavy" : ""}`;
    float.textContent = `-${amount}`;
    el.appendChild(float);
    float.addEventListener("animationend", () => float.remove(), { once: true });
  }

  function commitBattleAction() {
    if (state.battle.result === "victory") {
      setActiveScreen("quests");
      return;
    }

    if (state.battle.result === "defeat") {
      prepareBattleFromQuest();
      setActiveScreen("battle");
      return;
    }

    const actingHero = getBattleActingHero();
    const target = getBattleTarget();
    const skill = getBattleSkillSet(actingHero.id).find((item) => item.id === state.battle.selectedSkillId);
    if (!target || !skill) {
      return;
    }

    let damage = skill.damage;
    if (skill.effect === "shatter" && target.marked) {
      damage += 120;
      target.marked = false;
    }
    if (skill.effect === "reap" && target.vulnerable) {
      damage += 90;
      target.vulnerable = false;
    }

    target.hp = Math.max(0, target.hp - damage);
    state.battle.resonance = Math.min(100, state.battle.resonance + skill.resonance);

    vfxCast(actingHero.id);
    vfxDamage(target.id);
    vfxImpact(target.id);
    vfxFloatNumber(target.id, damage, damage >= 200);
    if (damage >= 80) vfxShake();
    if (damage >= 200) vfxHeavy();
    if (skill.resonance > 0) vfxResonanceSurge();

    if (skill.effect === "mark") {
      target.marked = true;
    }
    if (skill.effect === "guard") {
      state.battle.allies.forEach((ally) => {
        ally.guard += 6;
      });
    }
    if (skill.effect === "bulwark") {
      state.battle.allies.forEach((ally) => {
        ally.guard += 10;
      });
    }
    if (skill.effect === "vulnerable") {
      target.vulnerable = true;
    }
    if (skill.effect === "delay") {
      rotateBattleQueue();
    }
    if (skill.effect === "focus") {
      state.battle.resonance = Math.min(100, state.battle.resonance + 8);
    }

    state.battle.stats.heroActions += 1;
    state.battle.stats.damageDealt += damage;
    state.battle.stats.highestHit = Math.max(state.battle.stats.highestHit, damage);
    state.battle.stats.resonancePeak = Math.max(state.battle.stats.resonancePeak, state.battle.resonance);
    state.battle.stats.lastActingHeroId = actingHero.id;

    state.battle.log.unshift({
      title: `${actingHero.name} · ${skill.name}`,
      body: `${target.name} получает ${damage} урона.${target.hp === 0 ? " Цель выведена из ритма." : ""}`,
    });
    state.battle.log = state.battle.log.slice(0, 6);

    if (target.hp === 0) {
      vfxDefeated(target.id);
      vfxShake();
      state.battle.stats.enemiesDefeated += 1;
      state.battle.stats.killingBlowHeroId = actingHero.id;
      state.battle.enemies = state.battle.enemies.filter((enemy) => enemy.id !== target.id);
      if (state.battle.enemies.length === 0) {
        resolveBattleVictory();
        return;
      }
      state.battle.selectedTargetId = state.battle.enemies[0].id;
    }

    state.battle.turn += 1;
    rotateBattleQueue();
    while (state.battle.queue.length && !getBattleAlly(state.battle.queue[0])) {
      resolveEnemyTurn();
    }

    state.battle.actingHeroId = state.battle.queue[0];
    state.battle.selectedSkillId = getBattleSkillSet(state.battle.actingHeroId)[0]?.id ?? state.battle.selectedSkillId;
    renderBattle();
    saveState();
  }

  function setActiveScreen(screenName) {
    const navScreen =
      screenName === "battle" || screenName === "results"
        ? "quests"
        : screenName === "guide"
          ? "menu"
          : screenName === "chapter" || screenName === "ending"
            ? "home"
            : screenName;
    state.activeScreen = screenName;
    document.body.dataset.screen = screenName;
    if (window.location.hash !== `#${screenName}`) {
      window.location.hash = screenName;
    }

    screens.forEach((screen) => {
      const shouldBeActive = screen.dataset.screen === screenName;
      const wasActive = screen.classList.contains("is-active");
      screen.classList.toggle("is-active", shouldBeActive);
      if (shouldBeActive && !wasActive) {
        screen.style.animation = "none";
        screen.offsetHeight;
        screen.style.animation = "";
        screen.querySelectorAll(".ornate-panel").forEach((panel) => {
          panel.style.animation = "none";
          panel.offsetHeight;
          panel.style.animation = "";
        });
      }
    });

    railButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.screenTarget === navScreen);
    });

    dockButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.screenTarget === navScreen);
    });
    if (state.creator.isOpen) {
      updateCreatorBrief();
    }
    renderTopbarHud();
    syncVisualAtmosphere();
    saveState();
  }

  function getHashScreen() {
    const normalized = window.location.hash.replace("#", "").trim();
    return validScreenNames.has(normalized) ? normalized : "";
  }

  function syncScreenWithHash() {
    const targetScreen = getHashScreen() || "home";
    if (targetScreen === "battle") {
      prepareBattleFromQuest();
    }
    setActiveScreen(targetScreen);
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

  let creatorBrandTapCount = 0;
  let creatorBrandTapTimer = 0;

  if (brandMark) {
    brandMark.addEventListener("click", () => {
      creatorBrandTapCount += 1;
      window.clearTimeout(creatorBrandTapTimer);
      if (creatorBrandTapCount >= 3) {
        creatorBrandTapCount = 0;
        openCreatorCabin();
        return;
      }
      creatorBrandTapTimer = window.setTimeout(() => {
        creatorBrandTapCount = 0;
      }, 700);
    });
  }

  creatorBackdrop.addEventListener("click", closeCreatorCabin);
  creatorClose.addEventListener("click", closeCreatorCabin);
  creatorSend.addEventListener("click", () => {
    submitCreatorQuestion();
  });

  creatorPromptButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const prompt = button.dataset.creatorPrompt ?? "";
      openCreatorCabin(prompt);
      submitCreatorQuestion(prompt);
    });
  });

  creatorQuestionInput.addEventListener("input", () => {
    state.creator.draftQuestion = creatorQuestionInput.value;
    saveState();
  });

  creatorQuestionInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      submitCreatorQuestion();
    }
  });

  creatorProjectAnswer.addEventListener("input", () => {
    state.creator.projectAnswer = creatorProjectAnswer.value;
    saveState();
  });

  creatorPrivateNotes.addEventListener("input", () => {
    state.creator.privateNotes = creatorPrivateNotes.value;
    saveState();
  });

  routeAdvanceButton.addEventListener("click", () => {
    const activeQuest = getActiveQuest();
    const { progress, isCompleted, nodeIndex: currentNodeIndex, node: currentNode, resolved } = getQuestNodeContext(activeQuest);
    if (isCompleted || !currentNode) {
      finalizeChapterIfNeeded(activeQuest);
      return;
    }

    if (isCombatNode(currentNode) && !resolved) {
      prepareBattleFromQuest();
      setActiveScreen("battle");
      return;
    }

    const rewardWasClaimed = claimNodeReward(activeQuest, currentNodeIndex);
    state.routeProgress[activeQuest.id] = Math.min(progress + 1, activeQuest.route.length);
    ensureValidJournalSelection();
    renderResources();
    renderQuestCards();
    updateQuestOverview();
    renderJournalTabs();
    renderJournalList();
    updateJournalPanel();
    updateHeroPanel();
    updateShopPanel();
    renderGuideSections();
    updateGuidePanel();
    renderHomeMeta();
    addSessionLog(
      currentNode.title,
      rewardWasClaimed ? getNodeReward(activeQuest, currentNodeIndex).note ?? "Узел закрыт." : "Узел закрыт без дополнительной награды.",
    );
    finalizeChapterIfNeeded(activeQuest);
  });

  openBattleButton.addEventListener("click", () => {
    prepareBattleFromQuest();
  });

  if (sanctuaryPoiMap) {
    sanctuaryPoiMap.addEventListener("click", (event) => {
      const button = event.target.closest("[data-sanctuary-poi]");
      if (!button) {
        return;
      }
      state.home.activePoiId = button.dataset.sanctuaryPoi;
      renderSanctuaryHub();
      saveState();
    });
  }

  if (sanctuaryPoiAction) {
    sanctuaryPoiAction.addEventListener("click", () => {
      const target = sanctuaryPoiAction.dataset.targetScreen;
      if (target) {
        setActiveScreen(target);
      }
    });
  }

  if (worldLocationList) {
    worldLocationList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-world-location]");
      if (!button) {
        return;
      }
      travelToWorldLocation(button.dataset.worldLocation);
    });
  }

  if (worldDialogueOptions) {
    worldDialogueOptions.addEventListener("click", (event) => {
      const button = event.target.closest("[data-world-choice]");
      if (!button) {
        return;
      }
      const location = getActiveWorldLocation();
      const index = Number(button.dataset.worldChoice);
      const choice = location.npc.choices[index];
      if (!choice) {
        return;
      }
      applyWorldDialogue(choice);
      saveState();
    });
  }

  if (worldQuestList) {
    worldQuestList.addEventListener("click", (event) => {
      const button = event.target.closest("[data-world-quest]");
      if (!button) {
        return;
      }
      const location = getActiveWorldLocation();
      const nextQuest = location.quests.find((quest) => quest.id === button.dataset.worldQuest);
      if (!nextQuest) {
        return;
      }
      state.world.activeQuestId = nextQuest.id;
      renderWorld();
      renderTopbarHud();
      saveState();
    });
  }

  if (worldQuestComplete) {
    worldQuestComplete.addEventListener("click", () => {
      completeActiveWorldQuest();
    });
  }

  resultPrimary.addEventListener("click", () => {
    if (!state.lastResult || state.lastResult.status === "defeat") {
      prepareBattleFromQuest();
      setActiveScreen("battle");
      return;
    }

    const quest = getQuestById(state.battle.sourceQuestId);
    const nodeIndex = state.battle.sourceNodeIndex;
    const rewardKey = getNodeKey(quest.id, nodeIndex);
    const reward = state.lastResult.reward ?? {};

    if (!state.claimedNodeRewards[rewardKey]) {
      if (reward.lumen) state.resources.lumen += reward.lumen;
      if (reward.fragments) state.resources.fragments += reward.fragments;
      if (reward.ap) state.resources.ap = reward.ap;
      addMaterials(reward.materials);
      state.claimedNodeRewards[rewardKey] = true;
    }

    state.routeProgress[quest.id] = Math.max(getQuestProgress(quest.id), nodeIndex + 1);
    renderResources();
    renderQuestCards();
    updateQuestOverview();
    renderJournalTabs();
    renderJournalList();
    updateJournalPanel();
    updateHeroPanel();
    updateShopPanel();
    renderGuideSections();
    updateGuidePanel();
    renderHomeMeta();
    saveState();

    if (!finalizeChapterIfNeeded(quest)) {
      setActiveScreen("quests");
    }
  });

  resultSecondary.addEventListener("click", () => {
    setActiveScreen(state.lastResult?.status === "defeat" ? "quests" : "journal");
  });

  chapterPrimary.addEventListener("click", () => {
    state.chapterBoons.story = state.selectedChapterBoonId;
    state.chapterSeen.story = true;
    renderHomeMeta();
    renderChapterScreen();
    renderEndingScreen();
    saveState();
    setActiveScreen("ending");
  });

  chapterSecondary.addEventListener("click", () => {
    setActiveScreen("party");
  });

  endingPrimary.addEventListener("click", () => {
    setActiveScreen("quests");
  });

  endingSecondary.addEventListener("click", () => {
    setActiveScreen("home");
  });

  heroUpgradeButton.addEventListener("click", attemptHeroUpgrade);
  partyUpgradeTabs.forEach((button) => {
    button.addEventListener("click", () => {
      const nextTab = button.dataset.partyTab;
      if (!nextTab || nextTab === state.activePartyTab) {
        return;
      }
      state.activePartyTab = nextTab;
      renderPartyPanels();
      saveState();
    });
  });
  shopBuy.addEventListener("click", buyActiveItem);
  battleCommit.addEventListener("click", commitBattleAction);
  battleBack.addEventListener("click", () => {
    setActiveScreen("quests");
  });

  toggleMotion.addEventListener("click", () => {
    state.settings.reducedMotion = !state.settings.reducedMotion;
    applyUiSettings();
    addSessionLog(
      "Доступность обновлена",
      state.settings.reducedMotion ? "Анимация уменьшена для спокойного чтения интерфейса." : "Полная анимация возвращена.",
    );
  });

  toggleContrast.addEventListener("click", () => {
    state.settings.highContrast = !state.settings.highContrast;
    applyUiSettings();
    addSessionLog(
      "Контраст обновлён",
      state.settings.highContrast ? "Повышенный контраст включён." : "Контраст возвращён к мягкому режиму.",
    );
  });

  window.addEventListener("keydown", (event) => {
    const isCreatorShortcut = (event.ctrlKey || event.metaKey) && event.shiftKey && event.key.toLowerCase() === "m";

    if (isCreatorShortcut) {
      event.preventDefault();
      if (state.creator.isOpen) {
        closeCreatorCabin();
      } else {
        openCreatorCabin();
      }
      return;
    }

    if (state.creator.isOpen) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeCreatorCabin();
      }
      return;
    }

    if (event.key === "1") {
      setActiveScreen("home");
    }
    if (event.key === "2") {
      setActiveScreen("quests");
    }
    if (event.key === "3") {
      setActiveScreen("party");
    }
    if (event.key === "4") {
      setActiveScreen("journal");
    }
    if (event.key === "5") {
      setActiveScreen("shop");
    }
    if (event.key === "6") {
      setActiveScreen("menu");
    }
    if (event.key === "7") {
      prepareBattleFromQuest();
      setActiveScreen("battle");
    }
    if (event.key === "8") {
      setActiveScreen("guide");
    }
    if (event.key === "9") {
      setActiveScreen("world");
    }

    if (state.activeScreen === "party" && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
      event.preventDefault();
      cycleHero(event.key === "ArrowRight" ? 1 : -1);
    }
  });

  window.addEventListener("hashchange", () => {
    syncScreenWithHash();
  });

  window.addEventListener("pageshow", () => {
    syncScreenWithHash();
  });

  function renderGameToText() {
    const activeQuest = getActiveQuest();
    ensureValidJournalSelection();
    const activeJournalEntry = getActiveJournalEntry();
    const activeShopItem = getActiveShopItem();
    const activeGuideSection = getActiveGuideSection();
    const { progress, nodeIndex, node, resolved, isCompleted } = getQuestNodeContext(activeQuest);
    const readiness = getReadinessReport();

    return JSON.stringify({
      mode: state.activeScreen,
      note: "UI origin top-left, x grows right, y grows down.",
      quest: {
        id: activeQuest.id,
        progress,
        nodeIndex,
        nodeTitle: node?.title ?? "Маршрут завершён",
        resolvedCombat: resolved,
        completed: isCompleted,
      },
      hero: {
        id: state.activeHeroId,
        name: getActiveHero().name,
      },
      journal: {
        tab: state.activeJournalTab,
        entry: activeJournalEntry.title,
      },
      shop: {
        item: activeShopItem.name,
        canAfford:
          activeShopItem.currency === "fragments"
            ? state.resources.fragments >= activeShopItem.price
            : state.resources.lumen >= activeShopItem.price,
      },
      guide: {
        section: activeGuideSection.title,
        readiness: readiness.percent,
      },
      battle: {
        title: state.battle.title,
        turn: state.battle.turn,
        result: state.battle.result,
        acting: getBattleActingHero().name,
        target: getBattleTarget().name,
      },
      meta: {
        boon: getActiveBoon()?.id ?? null,
        chapterSeen: Boolean(state.chapterSeen.story),
        heroUpgrade: getHeroUpgradeLevel(state.activeHeroId),
        lastResult: state.lastResult?.status ?? null,
      },
      creator: {
        open: state.creator.isOpen,
        topic: getCreatorBrief().topic,
        messageCount: state.creator.messages.length,
        lastMessage: state.creator.messages.at(-1)?.title ?? null,
      },
      resources: state.resources,
      settings: state.settings,
    });
  }

  window.render_game_to_text = renderGameToText;
  window.advanceTime = (ms) => {
    state.clockMs += Math.max(0, Number(ms) || 0);
    return renderGameToText();
  };

  function initPortraitParticles() {
    const canvas = document.getElementById("portrait-sparkle-canvas");
    if (!canvas) return null;

    const ctx = canvas.getContext("2d");
    const particles = [];
    let animFrameId = null;
    let currentAccent = "#c8f0e1";
    let active = true;

    function resize() {
      const wrap = canvas.parentElement;
      if (!wrap) return;
      canvas.width = wrap.offsetWidth;
      canvas.height = wrap.offsetHeight;
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);

    function spawnParticle() {
      const w = canvas.width;
      const h = canvas.height;
      // Spawn in right-center area where the portrait art lives
      const px = w * (0.48 + Math.random() * 0.36);
      const py = h * (0.30 + Math.random() * 0.52);
      particles.push({
        x: px,
        y: py,
        vx: (Math.random() - 0.5) * 0.42,
        vy: -(0.35 + Math.random() * 0.55),
        life: 0,
        maxLife: 95 + Math.random() * 85,
        size: 0.7 + Math.random() * 2.0,
      });
    }

    function tick() {
      if (!active) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const hasArt = portraitShell && portraitShell.classList.contains("has-art");
      const reduced = document.body.classList.contains("reduced-motion");

      if (hasArt && !reduced && Math.random() < 0.09) {
        spawnParticle();
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.997;
        p.vy *= 0.995;
        p.life++;

        const t = p.life / p.maxLife;
        const alpha = t < 0.18 ? t / 0.18 : t > 0.62 ? (1 - t) / 0.38 : 1;

        ctx.save();
        ctx.globalAlpha = alpha * 0.58;
        ctx.fillStyle = currentAccent;
        ctx.shadowBlur = 7;
        ctx.shadowColor = currentAccent;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1 - t * 0.45), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        if (p.life >= p.maxLife) particles.splice(i, 1);
      }

      animFrameId = requestAnimationFrame(tick);
    }

    tick();

    return {
      setAccent(color) {
        currentAccent = color;
      },
      destroy() {
        active = false;
        if (animFrameId) cancelAnimationFrame(animFrameId);
        ro.disconnect();
      },
    };
  }

  let portraitParticles = null;

  function startAmbientCanvas() {
    const canvas = document.getElementById("ambient-canvas");
    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const particles = [];
    const sparks = [];
    const dustMotes = [];
    const baseCount = Math.min(52, Math.max(24, Math.round(window.innerWidth / 30)));
    const sparkCount = Math.min(18, Math.max(8, Math.round(window.innerWidth / 80)));
    const dustCount = Math.min(28, Math.max(12, Math.round(window.innerWidth / 50)));
    const connectionDist = 140;
    let time = 0;
    let heroHueCurrent = 140;
    let heroHueTarget = 140;

    // Expose hero hue updater globally
    window._ambientSetHeroHue = (hue) => {
      heroHueTarget = hue;
    };

    function resize() {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    }

    function seedParticle() {
      const depth = 0.4 + Math.random() * 0.6;
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: (1 + Math.random() * 3.2) * depth,
        speedX: (-0.15 + Math.random() * 0.3) * depth,
        speedY: (-0.08 - Math.random() * 0.2) * depth,
        alpha: (0.14 + Math.random() * 0.28) * depth,
        hue: 110 + Math.random() * 70,
        depth: depth,
        wobbleOffset: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.3 + Math.random() * 0.6,
        wobbleAmp: 0.2 + Math.random() * 0.5,
      };
    }

    function seedSpark() {
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        life: 0,
        maxLife: 120 + Math.random() * 200,
        radius: 0.6 + Math.random() * 1.2,
        hue: 38 + Math.random() * 30,
        speedX: -0.08 + Math.random() * 0.16,
        speedY: -0.2 - Math.random() * 0.3,
      };
    }

    function seedDust() {
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: 0.4 + Math.random() * 0.8,
        speedX: -0.05 + Math.random() * 0.1,
        speedY: 0.02 + Math.random() * 0.08,
        alpha: 0.06 + Math.random() * 0.12,
        wobbleOffset: Math.random() * Math.PI * 2,
      };
    }

    function populate() {
      particles.length = 0;
      sparks.length = 0;
      dustMotes.length = 0;
      for (let i = 0; i < baseCount; i++) particles.push(seedParticle());
      for (let i = 0; i < sparkCount; i++) sparks.push(seedSpark());
      for (let i = 0; i < dustCount; i++) dustMotes.push(seedDust());
    }

    function animate() {
      if (document.body.classList.contains("reduced-motion")) {
        requestAnimationFrame(animate);
        return;
      }

      time += 1;
      // Smoothly lerp ambient hue toward hero hue
      heroHueCurrent += (heroHueTarget - heroHueCurrent) * 0.004;
      const w = window.innerWidth;
      const h = window.innerHeight;
      context.clearRect(0, 0, w, h);

      /* ── Connections between close particles ── */
      context.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const linkAlpha = (1 - dist / connectionDist) * 0.08 * Math.min(particles[i].depth, particles[j].depth);
            context.strokeStyle = `rgba(200, 230, 210, ${linkAlpha})`;
            context.beginPath();
            context.moveTo(particles[i].x, particles[i].y);
            context.lineTo(particles[j].x, particles[j].y);
            context.stroke();
          }
        }
      }

      /* ── Main particles with wobble ── */
      particles.forEach((p) => {
        p.x += p.speedX + Math.sin(time * 0.008 * p.wobbleSpeed + p.wobbleOffset) * p.wobbleAmp;
        p.y += p.speedY;

        if (p.x < -20 || p.x > w + 20 || p.y < -20) {
          Object.assign(p, seedParticle(), { x: Math.random() * w, y: h + Math.random() * 24 });
        }

        // Blend particle hue toward hero hue (smooth atmosphere shift)
        const blendHue = p.hue * 0.6 + heroHueCurrent * 0.4;
        const outerR = p.radius * (4.5 + Math.sin(time * 0.012 + p.wobbleOffset) * 0.8);
        const gradient = context.createRadialGradient(p.x, p.y, 0, p.x, p.y, outerR);
        gradient.addColorStop(0, `hsla(${blendHue}, 72%, 88%, ${p.alpha})`);
        gradient.addColorStop(0.4, `hsla(${blendHue}, 68%, 74%, ${p.alpha * 0.5})`);
        gradient.addColorStop(1, `hsla(${blendHue}, 80%, 42%, 0)`);

        context.fillStyle = gradient;
        context.beginPath();
        context.arc(p.x, p.y, outerR, 0, Math.PI * 2);
        context.fill();
      });

      /* ── Firefly sparks ── */
      sparks.forEach((s) => {
        s.life += 1;
        s.x += s.speedX;
        s.y += s.speedY;

        if (s.life >= s.maxLife) {
          Object.assign(s, seedSpark());
          return;
        }

        const progress = s.life / s.maxLife;
        const fade = progress < 0.15 ? progress / 0.15 : progress > 0.7 ? (1 - progress) / 0.3 : 1;
        const flicker = 0.6 + Math.sin(time * 0.14 + s.x * 0.02) * 0.4;
        const a = fade * flicker * 0.7;
        // Sparks blend half toward hero hue for visible atmosphere shift
        const sparkHue = s.hue * 0.52 + heroHueCurrent * 0.48;

        const grad = context.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.radius * 6);
        grad.addColorStop(0, `hsla(${sparkHue}, 80%, 90%, ${a})`);
        grad.addColorStop(0.3, `hsla(${sparkHue}, 72%, 70%, ${a * 0.5})`);
        grad.addColorStop(1, `hsla(${sparkHue}, 60%, 50%, 0)`);

        context.fillStyle = grad;
        context.beginPath();
        context.arc(s.x, s.y, s.radius * 6, 0, Math.PI * 2);
        context.fill();
      });

      /* ── Slow dust motes ── */
      dustMotes.forEach((d) => {
        d.x += d.speedX + Math.sin(time * 0.003 + d.wobbleOffset) * 0.15;
        d.y += d.speedY;

        if (d.y > h + 10 || d.x < -10 || d.x > w + 10) {
          Object.assign(d, seedDust(), { y: -4, x: Math.random() * w });
        }

        context.fillStyle = `rgba(230, 240, 235, ${d.alpha})`;
        context.beginPath();
        context.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
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

  loadState();
  ensureValidJournalSelection();
  renderResources();
  renderHomeMeta();
  renderQuestCards();
  updateQuestOverview();
  renderHeroList();
  updateHeroPanel();
  renderPartyPanels();
  renderJournalTabs();
  renderJournalList();
  updateJournalPanel();
  renderShopGrid();
  updateShopPanel();
  renderUiScaleOptions();
  renderMenuChecklist();
  renderSessionLog();
  renderGuideSections();
  updateGuidePanel();
  renderWorld();
  renderBattle();
  renderResults();
  renderChapterScreen();
  renderEndingScreen();
  renderCreatorCabin();
  applyUiSettings();
  attachPresenceMotion(homeStageArt, { intensity: 0.72 });
  attachPresenceMotion(portraitShell, { intensity: 0.5 });
  const requestedScreen = getHashScreen();
  const startupPlayableScreens = new Set(["home", "quests", "battle", "results", "chapter", "ending", "title"]);
  const initialScreen = startupPlayableScreens.has(requestedScreen) ? requestedScreen : "home";
  if (initialScreen === "battle") {
    prepareBattleFromQuest();
  }
  setActiveScreen(initialScreen);
  startAmbientCanvas();
  portraitParticles = initPortraitParticles();
})();
