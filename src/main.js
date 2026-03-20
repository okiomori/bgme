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
      turn: 1,
      resonance: 42,
      actingHeroId: "liora",
      selectedSkillId: battleSkillSets.liora[0].id,
      selectedTargetId: "colossus",
      sourceQuestId: "story",
      sourceNodeIndex: 0,
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
  const openBattleButton = document.getElementById("open-battle");
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
  const resourceAp = document.getElementById("resource-ap");
  const resourceFragments = document.getElementById("resource-fragments");
  const resourceLumen = document.getElementById("resource-lumen");
  const journalTabsContainer = document.getElementById("journal-tabs");
  const journalList = document.getElementById("journal-list");
  const journalKicker = document.getElementById("journal-kicker");
  const journalTitle = document.getElementById("journal-title");
  const journalBody = document.getElementById("journal-body");
  const journalMeta = document.getElementById("journal-meta");
  const journalStamps = document.getElementById("journal-stamps");
  const journalHighlights = document.getElementById("journal-highlights");
  const shopGrid = document.getElementById("shop-grid");
  const shopItemName = document.getElementById("shop-item-name");
  const shopItemDesc = document.getElementById("shop-item-desc");
  const shopItemMeta = document.getElementById("shop-item-meta");
  const shopBuy = document.getElementById("shop-buy");
  const uiScaleOptionsContainer = document.getElementById("ui-scale-options");
  const toggleMotion = document.getElementById("toggle-motion");
  const toggleContrast = document.getElementById("toggle-contrast");
  const menuCheckList = document.getElementById("menu-check-list");
  const menuLogList = document.getElementById("menu-log-list");
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

  const state = {
    activeScreen: "home",
    activeQuestId: questCards[0].id,
    activeHeroId: heroes[0].id,
    activeJournalTab: journalTabs[0].id,
    activeJournalEntryId: journalTabs[0].entries[0].id,
    activeShopItemId: shopItems[0].id,
    resources: {
      ap: "15 / 15",
      fragments: 3,
      lumen: 420,
    },
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
    routeProgress: Object.fromEntries(questCards.map((quest) => [quest.id, 0])),
  };

  function getActiveQuest() {
    return questCards.find((quest) => quest.id === state.activeQuestId) ?? questCards[0];
  }

  function getActiveHero() {
    return heroes.find((hero) => hero.id === state.activeHeroId) ?? heroes[0];
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

  function getNodeReward(quest, nodeIndex) {
    const fallbackRewards = [
      { lumen: 12, note: "Найден люменный узел и обновлена карта маршрута." },
      { fragments: 1, note: "Архив пополнился фрагментом и короткой записью." },
      { lumen: 18, note: "После столкновения собран запас люмена." },
      { ap: "15 / 15", note: "Команда перевела дух и восстановила походный ритм." },
      { fragments: 2, note: "Узел завершён, добыт редкий след главы." },
    ];

    return quest.route[nodeIndex].reward ?? fallbackRewards[nodeIndex] ?? { note: "Маршрут продвинут." };
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
  }

  function renderResources() {
    resourceAp.textContent = state.resources.ap;
    resourceFragments.textContent = String(state.resources.fragments).padStart(2, "0");
    resourceLumen.textContent = String(state.resources.lumen);
  }

  function applyUiSettings() {
    const currentScale =
      uiScaleOptions.find((option) => option.id === state.settings.uiScaleId) ?? uiScaleOptions[1];

    document.documentElement.style.setProperty("--ui-scale-factor", String(currentScale.value));
    document.body.classList.toggle("reduced-motion", state.settings.reducedMotion);
    document.body.classList.toggle("high-contrast", state.settings.highContrast);
    toggleMotion.classList.toggle("is-active", state.settings.reducedMotion);
    toggleContrast.classList.toggle("is-active", state.settings.highContrast);
  }

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
                  <div class="quest-progress">${Math.min((state.routeProgress[card.id] ?? 0) + 1, card.route.length)} / ${card.route.length}</div>
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
    const activeQuest = getActiveQuest();

    const currentNodeIndex = state.routeProgress[activeQuest.id] ?? 0;
    const currentNode = activeQuest.route[currentNodeIndex];
    const currentReward = getNodeReward(activeQuest, currentNodeIndex);
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
      <p>${currentReward.note ?? "Маршрут продолжается без особой находки."}</p>
    `;
    renderJournalHighlights();
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
    const activeHero = getActiveHero();

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
    renderJournalHighlights();
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
      .map(
        (tab) => `
          <button class="journal-tab ${tab.id === state.activeJournalTab ? "is-active" : ""}" data-journal-tab="${tab.id}">
            ${tab.label}
          </button>
        `,
      )
      .join("");

    journalTabsContainer.querySelectorAll("[data-journal-tab]").forEach((button) => {
      button.addEventListener("click", () => {
        state.activeJournalTab = button.dataset.journalTab;
        state.activeJournalEntryId = getActiveJournalTab().entries[0].id;
        renderJournalTabs();
        renderJournalList();
        updateJournalPanel();
      });
    });
  }

  function renderJournalList() {
    const activeTab = getActiveJournalTab();

    journalList.innerHTML = activeTab.entries
      .map(
        (entry) => `
          <button class="journal-entry-button ${entry.id === state.activeJournalEntryId ? "is-active" : ""}" data-journal-entry="${entry.id}">
            <strong>${entry.title}</strong>
            <p>${entry.subtitle}</p>
          </button>
        `,
      )
      .join("");

    journalList.querySelectorAll("[data-journal-entry]").forEach((button) => {
      button.addEventListener("click", () => {
        state.activeJournalEntryId = button.dataset.journalEntry;
        renderJournalList();
        updateJournalPanel();
      });
    });
  }

  function renderJournalHighlights() {
    const activeQuest = getActiveQuest();
    const activeHero = getActiveHero();
    const currentNode = activeQuest.route[state.routeProgress[activeQuest.id] ?? 0];

    journalHighlights.innerHTML = [
      {
        title: "Активная глава",
        body: `${activeQuest.title} · ${currentNode.title}`,
      },
      {
        title: "Лицо отряда",
        body: `${activeHero.name} — ${activeHero.role}`,
      },
      {
        title: "Ресурсный след",
        body: `Люмен: ${state.resources.lumen} · Фрагменты: ${String(state.resources.fragments).padStart(2, "0")}`,
      },
    ]
      .map(
        (item) => `
          <article class="journal-highlight-card">
            <strong>${item.title}</strong>
            <p>${item.body}</p>
          </article>
        `,
      )
      .join("");
  }

  function updateJournalPanel() {
    const activeTab = getActiveJournalTab();
    const activeEntry = getActiveJournalEntry();

    journalKicker.textContent = activeTab.kicker;
    journalTitle.textContent = activeEntry.title;
    journalBody.textContent = activeEntry.body;
    journalMeta.textContent = activeEntry.meta;
    journalStamps.innerHTML = activeEntry.stamps
      .map((stamp) => `<span class="journal-stamp">${stamp}</span>`)
      .join("");
    renderJournalHighlights();
  }

  function renderShopGrid() {
    shopGrid.innerHTML = shopItems
      .map((item) => {
        const priceLabel = item.currency === "fragments" ? `${item.price} фрагм.` : `${item.price} люм.`;

        return `
          <button class="shop-card ${item.id === state.activeShopItemId ? "is-selected" : ""}" data-shop-item="${item.id}">
            <div class="shop-card-header">
              <strong>${item.name}</strong>
              <span class="shop-card-tag">${item.tag}</span>
            </div>
            <p>${item.description}</p>
            <span class="shop-card-price">${priceLabel}</span>
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
    shopBuy.textContent = canAfford ? "Добавить в поставку" : "Недостаточно ресурса";
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

    renderResources();
    updateShopPanel();
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
    menuCheckList.innerHTML = steamChecklist
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
    const activeQuest = getActiveQuest();
    const currentNodeIndex = state.routeProgress[activeQuest.id] ?? 0;
    if (currentNodeIndex >= activeQuest.route.length - 1) {
      return;
    }

    const currentNode = activeQuest.route[currentNodeIndex];
    const currentReward = getNodeReward(activeQuest, currentNodeIndex);
    if (currentReward.lumen) {
      state.resources.lumen += currentReward.lumen;
    }
    if (currentReward.fragments) {
      state.resources.fragments += currentReward.fragments;
    }
    if (currentReward.ap) {
      state.resources.ap = currentReward.ap;
    }

    state.routeProgress[activeQuest.id] = currentNodeIndex + 1;
    renderResources();
    renderQuestCards();
    updateQuestOverview();
    addSessionLog(currentNode.title, currentReward.note ?? "Маршрут продвинут.");
  });

  shopBuy.addEventListener("click", buyActiveItem);

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

    if (state.activeScreen === "party" && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
      event.preventDefault();
      cycleHero(event.key === "ArrowRight" ? 1 : -1);
    }
  });

  function renderGameToText() {
    const activeQuest = getActiveQuest();
    const activeJournalEntry = getActiveJournalEntry();
    const activeShopItem = getActiveShopItem();
    const currentNodeIndex = state.routeProgress[activeQuest.id] ?? 0;

    return JSON.stringify({
      mode: state.activeScreen,
      note: "UI origin top-left, x grows right, y grows down.",
      quest: {
        id: activeQuest.id,
        nodeIndex: currentNodeIndex,
        nodeTitle: activeQuest.route[currentNodeIndex].title,
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
      resources: state.resources,
      settings: state.settings,
    });
  }

  window.render_game_to_text = renderGameToText;
  window.advanceTime = (ms) => {
    state.clockMs += Math.max(0, Number(ms) || 0);
    return renderGameToText();
  };

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
      if (document.body.classList.contains("reduced-motion")) {
        requestAnimationFrame(animate);
        return;
      }

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

  renderResources();
  renderQuestCards();
  updateQuestOverview();
  renderHeroList();
  updateHeroPanel();
  renderJournalTabs();
  renderJournalList();
  updateJournalPanel();
  renderShopGrid();
  updateShopPanel();
  renderUiScaleOptions();
  renderMenuChecklist();
  renderSessionLog();
  applyUiSettings();
  const initialScreen = window.location.hash.replace("#", "");
  if (initialScreen) {
    setActiveScreen(initialScreen);
  }
  startAmbientCanvas();
})();
