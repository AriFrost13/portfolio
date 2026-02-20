const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.16,
  }
);

document.querySelectorAll(".reveal").forEach((el, idx) => {
  el.style.transitionDelay = `${idx * 0.1}s`;
  observer.observe(el);
});

const translations = {
  ru: {
    "title.home": "Ari Frost | Freelancer Portfolio",
    "title.cases": "Ari Frost | Cases",
    "title.tasks": "Ari Frost | Worked Tasks",
    "home.kicker": "Freelancer // Automation // Design",
    "home.subtitle_html": "Я фрилансер, беру разные задачи и довожу их до результата. Основной фокус: <strong>Python</strong> и <strong>автоматизация</strong>.",
    "home.cta_contact": "Обсудить задачу",
    "home.cta_tasks": "С какими задачами работали",
    "about.label": "Позиционирование",
    "about.title": "Кто такая Ari Frost",
    "about.line1": "Фрилансер, который может включиться в разные форматы задач: код, контент, визуал.",
    "about.line2": "Сильная техническая база + креативный бэкграунд.",
    "about.line3": "Спокойная коммуникация и аккуратный стиль исполнения.",
    "about.line4": "Опыт пока небольшой, поэтому и стоимость задач соответствует.",
    "skills.label": "Навыки",
    "skills.title": "Что делаю лучше всего",
    "skills.item1.title": "Python и автоматизация",
    "skills.item1.text": "Скрипты, рабочие процессы, парсеры, удобный сбор информации и сортировка данных для ускорения рутинных задач.",
    "skills.item2.title": "Дизайн и визуал",
    "skills.item2.text": "Опыт в Photoshop, видеоредакторе, создании и разработке дизайна под задачу. На текущий момент также изучаю дизайн с нейросетями.",
    "skills.item3.title": "Гибкий формат работы",
    "skills.item3.text": "Могу взять нестандартную задачу, быстро погрузиться и предложить рабочее решение.",
    "story.label": "Опыт",
    "story.title": "Бэкграунд и медиа",
    "story.card1.title": "YouTube и Twitch",
    "story.card1.text": "Раньше вела YouTube-канал и Twitch-канал, поэтому понимаю подачу, аудиторию и визуальный ритм.",
    "story.card2.title": "Комбинация IT + Content",
    "story.card2.text": "Соединяю техническое мышление, дизайн и контентный опыт в одном проекте. Также работала дизайнером одежды.",
    "home_cases.label": "Кейсы",
    "home_cases.title": "С какими задачами работали",
    "home_cases.card1.title": "Парсер и сбор данных",
    "home_cases.card1.text": "Сбор, очистка и сортировка данных по заданным параметрам.",
    "home_cases.card1.alt": "Кейс: парсер и сбор данных",
    "home_cases.card2.title": "Автоматизация процессов",
    "home_cases.card2.text": "Скрипты для рутины, отчеты и повторяемые сценарии.",
    "home_cases.card2.alt": "Кейс: автоматизация процессов",
    "home_cases.card3.title": "Telegram и боты",
    "home_cases.card3.text": "Автоматизация пабликов, публикаций и ботов.",
    "home_cases.card3.alt": "Кейс: Telegram и боты",
    "home_cases.card4.title": "Визуал и контент",
    "home_cases.card4.text": "Оформление контента и визуальная подача проектов.",
    "home_cases.card4.alt": "Кейс: визуал и контент",
    "contact.label": "Контакты",
    "contact.title": "Готова к задачам",
    "contact.work.title": "По задачам",
    "contact.work.text": "Лучше всего писать сразу в Telegram.",
    "contact.work.btn": "Написать в Telegram",
    "contact.socials.title": "Соцсети",
    "contact.socials.text": "Личные профили:",
    "cases.back": "Назад",
    "cases.kicker": "Portfolio / Cases",
    "cases.h1": "Кейсы",
    "cases.subtitle": "Примеры задач и форматов, с которыми я работаю: автоматизация, парсеры, Telegram и визуальный контент.",
    "cases.section.label": "Примеры",
    "cases.section.title": "Работы и направления",
    "cases.card1.title": "Парсер и сбор данных",
    "cases.card1.text": "Сбор информации из нескольких источников, очистка структуры и подготовка к дальнейшей обработке.",
    "cases.card1.alt": "Пример кейса: парсер и сбор данных",
    "cases.card2.title": "Автоматизация процессов",
    "cases.card2.text": "Скрипты для ускорения рутинных задач: сортировка, фильтрация, отчеты и повторяемые действия.",
    "cases.card2.alt": "Пример кейса: автоматизация рабочих процессов",
    "cases.card3.title": "Telegram и боты",
    "cases.card3.text": "Настройка Telegram-ботов, автоматизация пабликов и рабочих публикаций.",
    "cases.card3.alt": "Пример кейса: Telegram боты",
    "cases.card4.title": "Визуал и контент",
    "cases.card4.text": "Дизайн-оформление и подготовка визуальных материалов под личные и медийные проекты.",
    "cases.card4.alt": "Пример кейса: визуал и контент",
    "tasks.back": "Назад",
    "tasks.kicker": "Worked Tasks / Details",
    "tasks.h1": "С какими задачами работали",
    "tasks.subtitle": "Подробно по направлениям: что делала, как выполняла и какой результат получали.",
    "tasks.parser.label": "Направление",
    "tasks.parser.title": "Парсер и сбор данных",
    "tasks.parser.item1": "Сбор данных и медиафайлов с сайта.",
    "tasks.parser.item2": "Нормализация данных для дальнейшей работы.",
    "tasks.parser.item3": "Экспорт в CSV, Excel и JSON для удобной передачи.",
    "tasks.parser.item4": "Подготовка кратких отчетов по собранной информации.",
    "tasks.automation.label": "Направление",
    "tasks.automation.title": "Автоматизация процессов",
    "tasks.automation.item1": "Автоматизация повторяемых действий в рабочих процессах.",
    "tasks.automation.item2": "Скрипты для сортировки, фильтрации и группировки данных.",
    "tasks.automation.item3": "Формирование отчетов по расписанию или по запросу.",
    "tasks.automation.item4": "Ускорение рутинных операций и снижение ручных ошибок.",
    "tasks.telegram.label": "Направление",
    "tasks.telegram.title": "Telegram и боты",
    "tasks.telegram.item1": "Настройка Telegram-ботов под рабочие и контентные задачи.",
    "tasks.telegram.item2": "Автоматизация публикаций и расписаний в пабликах.",
    "tasks.telegram.item4": "Поддержка стабильной работы ботов и сценариев.",
    "tasks.visual.label": "Направление",
    "tasks.visual.title": "Визуал и контент",
    "tasks.visual.item1": "Подготовка визуальных материалов для контента и личного бренда.",
    "tasks.visual.item2": "Работа с Photoshop и видеоредактором под конкретную задачу.",
    "tasks.visual.item3": "Оформление в едином стиле: аккуратная структура и понятная подача.",
    "tasks.visual.item4": "Актуально изучаю дизайн с нейросетями и внедряю в практику."
  },
  en: {
    "title.home": "Ari Frost | Freelancer Portfolio",
    "title.cases": "Ari Frost | Cases",
    "title.tasks": "Ari Frost | Worked Tasks",
    "home.kicker": "Freelancer // Automation // Design",
    "home.subtitle_html": "I am a freelancer who handles different tasks and delivers results. My main focus is <strong>Python</strong> and <strong>automation</strong>.",
    "home.cta_contact": "Discuss a Task",
    "home.cta_tasks": "Tasks I've Worked On",
    "about.label": "Positioning",
    "about.title": "Who Is Ari Frost",
    "about.line1": "A freelancer who can step into different task formats: code, content, and visuals.",
    "about.line2": "Strong technical base plus creative background.",
    "about.line3": "Calm communication and a clean execution style.",
    "about.line4": "My experience is still growing, so the pricing is aligned with that.",
    "skills.label": "Skills",
    "skills.title": "What I Do Best",
    "skills.item1.title": "Python and Automation",
    "skills.item1.text": "Scripts, workflows, parsers, convenient information gathering, and data sorting to speed up routine tasks.",
    "skills.item2.title": "Design and Visuals",
    "skills.item2.text": "Experience in Photoshop, video editing, and creating design solutions for specific tasks. I am currently studying AI-assisted design.",
    "skills.item3.title": "Flexible Work Format",
    "skills.item3.text": "I can take on non-standard tasks, quickly dive in, and propose a practical solution.",
    "story.label": "Background",
    "story.title": "Media and Experience",
    "story.card1.title": "YouTube and Twitch",
    "story.card1.text": "I used to run YouTube and Twitch channels, so I understand presentation, audience, and visual rhythm.",
    "story.card2.title": "IT + Content Mix",
    "story.card2.text": "I combine technical thinking, design, and content experience in one project. I also worked as a fashion designer.",
    "home_cases.label": "Cases",
    "home_cases.title": "Tasks I've Worked On",
    "home_cases.card1.title": "Parser and Data Collection",
    "home_cases.card1.text": "Collecting, cleaning, and sorting data by required parameters.",
    "home_cases.card1.alt": "Case: parser and data collection",
    "home_cases.card2.title": "Process Automation",
    "home_cases.card2.text": "Scripts for routine tasks, reports, and repeatable scenarios.",
    "home_cases.card2.alt": "Case: process automation",
    "home_cases.card3.title": "Telegram and Bots",
    "home_cases.card3.text": "Automating channels, publications, and bot workflows.",
    "home_cases.card3.alt": "Case: Telegram and bots",
    "home_cases.card4.title": "Visuals and Content",
    "home_cases.card4.text": "Content styling and visual presentation for projects.",
    "home_cases.card4.alt": "Case: visuals and content",
    "contact.label": "Contacts",
    "contact.title": "Open for Tasks",
    "contact.work.title": "For Work",
    "contact.work.text": "The best way is to message me directly on Telegram.",
    "contact.work.btn": "Message on Telegram",
    "contact.socials.title": "Socials",
    "contact.socials.text": "Personal profiles:",
    "cases.back": "Back",
    "cases.kicker": "Portfolio / Cases",
    "cases.h1": "Cases",
    "cases.subtitle": "Examples of tasks and formats I work with: automation, parsers, Telegram, and visual content.",
    "cases.section.label": "Examples",
    "cases.section.title": "Projects and Directions",
    "cases.card1.title": "Parser and Data Collection",
    "cases.card1.text": "Collecting data from multiple sources, cleaning the structure, and preparing it for further processing.",
    "cases.card1.alt": "Case example: parser and data collection",
    "cases.card2.title": "Process Automation",
    "cases.card2.text": "Scripts that speed up routine tasks: sorting, filtering, reports, and repeatable actions.",
    "cases.card2.alt": "Case example: process automation",
    "cases.card3.title": "Telegram and Bots",
    "cases.card3.text": "Setting up Telegram bots, automating public channels, and publication workflows.",
    "cases.card3.alt": "Case example: Telegram bots",
    "cases.card4.title": "Visuals and Content",
    "cases.card4.text": "Design and preparation of visual materials for personal and media projects.",
    "cases.card4.alt": "Case example: visuals and content",
    "tasks.back": "Back",
    "tasks.kicker": "Worked Tasks / Details",
    "tasks.h1": "Tasks I've Worked On",
    "tasks.subtitle": "Detailed by direction: what I did, how it was done, and what results were delivered.",
    "tasks.parser.label": "Direction",
    "tasks.parser.title": "Parser and Data Collection",
    "tasks.parser.item1": "Collecting data and media files from websites.",
    "tasks.parser.item2": "Normalizing data for further work.",
    "tasks.parser.item3": "Exporting to CSV, Excel, and JSON for convenient handoff.",
    "tasks.parser.item4": "Preparing concise reports based on collected information.",
    "tasks.automation.label": "Direction",
    "tasks.automation.title": "Process Automation",
    "tasks.automation.item1": "Automating repeatable actions in day-to-day workflows.",
    "tasks.automation.item2": "Scripts for sorting, filtering, and grouping data.",
    "tasks.automation.item3": "Generating reports on schedule or on demand.",
    "tasks.automation.item4": "Speeding up routine operations and reducing manual errors.",
    "tasks.telegram.label": "Direction",
    "tasks.telegram.title": "Telegram and Bots",
    "tasks.telegram.item1": "Configuring Telegram bots for work and content tasks.",
    "tasks.telegram.item2": "Automating channel posting and publication schedules.",
    "tasks.telegram.item4": "Maintaining stable bot and automation scenario performance.",
    "tasks.visual.label": "Direction",
    "tasks.visual.title": "Visuals and Content",
    "tasks.visual.item1": "Preparing visual materials for content and personal branding.",
    "tasks.visual.item2": "Working with Photoshop and video editors for specific goals.",
    "tasks.visual.item3": "Designing in a unified style with clean structure and clear delivery.",
    "tasks.visual.item4": "Currently learning AI-assisted design and applying it in practice."
  }
};

const LANG_STORAGE_KEY = "af_lang";
const DEFAULT_LANG = "en";

const detectSystemLanguage = () => {
  const browserLangs = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language];

  const hasRussian = browserLangs
    .filter(Boolean)
    .some((lang) => lang.toLowerCase().startsWith("ru"));

  return hasRussian ? "ru" : DEFAULT_LANG;
};

const applyLanguage = (lang) => {
  const normalizedLang = translations[lang] ? lang : DEFAULT_LANG;
  const pack = translations[normalizedLang];
  document.documentElement.lang = normalizedLang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (pack[key]) {
      el.textContent = pack[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (pack[key]) {
      el.innerHTML = pack[key];
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.dataset.i18nAlt;
    if (pack[key]) {
      el.setAttribute("alt", pack[key]);
    }
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.dataset.i18nTitle;
    if (pack[key]) {
      el.textContent = pack[key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.dataset.lang === normalizedLang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
};

const initLanguage = () => {
  const storedLang = localStorage.getItem(LANG_STORAGE_KEY);
  const detectedLang = detectSystemLanguage();
  const initialLang = storedLang && translations[storedLang] ? storedLang : detectedLang;

  applyLanguage(initialLang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      if (!translations[lang]) {
        return;
      }
      localStorage.setItem(LANG_STORAGE_KEY, lang);
      applyLanguage(lang);
    });
  });
};

initLanguage();

const starCanvas = document.getElementById("starfield");

if (starCanvas) {
  const ctx = starCanvas.getContext("2d");
  const stars = [];

  const setupCanvas = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    starCanvas.width = Math.floor(window.innerWidth * dpr);
    starCanvas.height = Math.floor(window.innerHeight * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const buildStars = () => {
    stars.length = 0;
    const amount = Math.max(140, Math.floor((window.innerWidth * window.innerHeight) / 9000));

    for (let i = 0; i < amount; i += 1) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.45 + 0.35,
        speed: Math.random() * 0.06 + 0.01,
        alpha: Math.random() * 0.45 + 0.25,
        pulse: Math.random() * Math.PI * 2,
      });
    }
  };

  const draw = () => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (const star of stars) {
      star.y += star.speed;
      if (star.y > window.innerHeight + 2) {
        star.y = -2;
        star.x = Math.random() * window.innerWidth;
      }

      star.pulse += 0.015;
      const twinkle = star.alpha + Math.sin(star.pulse) * 0.16;

      ctx.beginPath();
      ctx.fillStyle = `rgba(225, 241, 255, ${Math.max(0.1, twinkle)})`;
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(draw);
  };

  setupCanvas();
  buildStars();
  draw();

  window.addEventListener("resize", () => {
    setupCanvas();
    buildStars();
  });
}
