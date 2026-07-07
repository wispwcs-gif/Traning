const ACCENT_MAP = {
  lime: "#c9ff39",
  orange: "#ff7a1a",
  blue: "#28a6ff",
  purple: "#a66cff",
  red: "#ff465d"
};

// Базовый адрес для картинок и видео.
// Пока стоит "assets/", приложение работает как раньше с локальной папкой.
// Когда загрузишь медиа на сайт, замени на свой адрес, например:
// const MEDIA_BASE_URL = "https://example.ru/training/assets/";
const MEDIA_BASE_URL = window.FITPLAN_MEDIA_BASE_URL || "";
const MEDIA_LOCAL_PREFIX = "assets/";

function resolveMediaUrl(path, fallback = "") {
  const rawPath = String(path || fallback || "").trim();
  if (!rawPath) return "";
  if (/^(https?:)?\/\//i.test(rawPath) || rawPath.startsWith("data:") || rawPath.startsWith("blob:")) {
    return rawPath;
  }

  const baseUrl = String(MEDIA_BASE_URL || "").trim();
  if (!baseUrl) return rawPath;

  const cleanBase = baseUrl.replace(/\/+$/, "");
  const cleanPath = rawPath
    .replace(/^\.\//, "")
    .replace(/^\/+/, "")
    .replace(new RegExp(`^${MEDIA_LOCAL_PREFIX.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "i"), "");

  return `${cleanBase}/${encodeURI(cleanPath).replace(/%2F/g, "/")}`;
}

const STORAGE_KEYS = {
  workouts: "fitplan:customWorkouts",
  lastWorkout: "fitplan:lastWorkout",
  theme: "fitplan:theme",
  humor: "fitplan:antonMode",
  difficulty: "fitplan:difficulty",
  language: "fitplan:language",
  sets: "fitplan:setProgress"
};

const DIFFICULTY_OPTIONS = {
  easy: { labelKey: "easy", shortKey: "easyShort", hintKey: "easyHint", tone: "easy" },
  normal: { labelKey: "normal", shortKey: "normalShort", hintKey: "normalHint", tone: "normal" },
  hard: { labelKey: "hard", shortKey: "hardShort", hintKey: "hardHint", tone: "hard" }
};

function difficultyOption(key) {
  const item = DIFFICULTY_OPTIONS[key] || DIFFICULTY_OPTIONS.normal;
  return { label: t(item.labelKey), short: t(item.shortKey), hint: t(item.hintKey), tone: item.tone || "normal" };
}


const I18N = {
  ru: {
    langButton: "RU / 中文",
    humorOn: "Антон-mode: вкл",
    humorOff: "Антон-mode: выкл",
    excuse: "Отмазка",
    choose: "Выбрать",
    continue: "Продолжить",
    todayTrain: "Сегодня тренируем",
    lastReady: "Последняя выбранная тренировка готова к старту.",
    startWorkout: "Начать тренировку",
    stepStart: "Пошаговый старт",
    ready: "готово",
    quickChoice: "Быстрый выбор",
    chooseDay: "Выбери день или продолжай последний",
    allWorkouts: "Смотреть все тренировки",
    presets: "Пресеты",
    workoutChoice: "Выбор тренировки",
    workoutsHint: "Выбери день тренировки и запускай удобный режим под телефон.",
    currentWorkout: "Текущая тренировка",
    back: "← К тренировкам",
    editor: "Редактор",
    closeEditor: "Закрыть редактор",
    resetProgress: "Сбросить прогресс",
    stepMode: "Пошаговый режим",
    mood: "Самочувствие сегодня",
    difficultyTitle: "Степень сложности",
    difficultyIntro: "Выбери нагрузку по состоянию.",
    nowDifficulty: "Сейчас: {label} — {hint}. Можно переключить по самочувствию перед началом или прямо во время тренировки.",
    doneCount: "{done} из {total} подходов выполнено",
    setCount: "Подходы: {done} / {total}",
    setCurrent: "Подход {current} из {total}",
    setComplete: "Все подходы закрыты",
    setDoneRest: "Подход выполнен → отдых",
    finishExercise: "Завершить упражнение",
    restTimer: "Таймер отдыха",
    timerNotStarted: "таймер не запущен",
    timerDone: "отдых завершён",
    timerDoneAnton: "отдых завершён, Антон, пора работать",
    timerStarted: "таймер запущен",
    pause: "Пауза",
    start: "Старт",
    reset: "Сброс",
    close: "Закрыть",
    editorTitle: "Настройка тренировок",
    editorDesc: "Изменения сохраняются в браузере. Можно спокойно менять упражнения без кода.",
    restoreDemo: "Вернуть демо",
    workout: "Тренировка",
    title: "Название",
    subtitle: "Подзаголовок",
    level: "Уровень",
    duration: "Длительность",
    dayColor: "Цвет дня",
    description: "Описание",
    saveWorkout: "Сохранить тренировку",
    exercises: "Упражнения",
    add: "+ Добавить",
    delete: "Удалить",
    sets: "Подходы",
    reps: "Повторы",
    restSec: "Отдых, сек",
    photo: "Фото",
    video: "Видео",
    technique: "Техника",
    note: "Примечание",
    saveExercise: "Сохранить упражнение",
    open: "Открыть",
    details: "Подробнее",
    rest: "Отдых",
    difficulty: "Сложность",
    noTechnique: "Техника выполнения пока не указана.",
    addNote: "Добавь примечание в редакторе.",
    setsLabel: "подхода",
    repsLabel: "повторений",
    restLabel: "сек отдых",
    mediaAria: "Медиа упражнения: сначала фото, затем видео",
    photoCaption: "Фото",
    videoCaption: "Видео",
    videoUnsupported: "Ваш браузер не поддерживает видео.",
    showPhoto: "Показать фото",
    showVideo: "Показать видео",
    fullscreen: "На весь экран",
    openFullscreen: "Открыть медиа на весь экран",
    exerciseNum: "Упражнение {number} из {total}",
    next: "Следующее",
    list: "К списку",
    closeQuarter: "Закрыть квартал",
    doneMark: "Выполнено ✓",
    doneRest: "Выполнил → отдых",
    doneRestAnton: "Выполнено → заслуженный отдых",
    launchRest: "Запустить отдых",
    previous: "Назад",
    planClosed: "План закрыт",
    victoryTitle: "Антон официально красавчик.",
    victoryText: "Тренировочный квартал завершён. Мышцы приняли отчёт без замечаний.",
    bonus: "Выдать премию мышцам",
    difficultyChanged: "Сложность: {label}",
    timerResetStatus: "сброшен, нажми Старт",
    workoutSaved: "Тренировка сохранена",
    antonModeOn: "Антон-mode включён. KPI по подходам активирован.",
    antonModeOff: "Антон-mode выключен. Серьёзный спортзал вернулся.",
    restoreConfirm: "Вернуть демо-тренировки? Твои изменения в редакторе сотрутся.",
    newWorkout: "Новая тренировка",
    newExercise: "Новое упражнение",
    describeTechnique: "Опиши технику выполнения упражнения.",
    addFriendNote: "Добавь важное примечание для друга.",
    easy: "Лёгкий",
    easyShort: "Лайт",
    easyHint: "меньше объём, больше отдых",
    normal: "Нормальный",
    normalShort: "Норма",
    normalHint: "базовый план",
    hard: "Тяжёлый",
    hardShort: "Хард",
    hardHint: "больше объём, плотнее темп",
    mode: "режим",
    exercisesWord: "упражнений",
    secShort: "сек"
  },
  zh: {
    langButton: "中文 / RU",
    humorOn: "安东模式：开",
    humorOff: "安东模式：关",
    excuse: "借口",
    choose: "选择",
    continue: "继续",
    todayTrain: "今天训练",
    lastReady: "上次选择的训练已准备好。",
    startWorkout: "开始训练",
    stepStart: "分步开始",
    ready: "完成",
    quickChoice: "快速选择",
    chooseDay: "选择训练日，或继续上一次",
    allWorkouts: "查看全部训练",
    presets: "训练预设",
    workoutChoice: "选择训练",
    workoutsHint: "选择训练日，然后用手机友好的模式开始。",
    currentWorkout: "当前训练",
    back: "← 返回训练列表",
    editor: "编辑器",
    closeEditor: "关闭编辑器",
    resetProgress: "重置进度",
    stepMode: "分步模式",
    mood: "今天状态",
    difficultyTitle: "训练强度",
    difficultyIntro: "根据身体状态选择负荷。",
    nowDifficulty: "当前：{label} — {hint}。训练前或训练中都可以切换。",
    doneCount: "已完成 {done} / {total} 组",
    setCount: "组数：{done} / {total}",
    setCurrent: "第 {current} / {total} 组",
    setComplete: "所有组已完成",
    setDoneRest: "完成本组 → 休息",
    finishExercise: "完成动作",
    restTimer: "休息计时器",
    timerNotStarted: "计时器未启动",
    timerDone: "休息结束",
    timerDoneAnton: "休息结束，安东，该继续了",
    timerStarted: "计时中",
    pause: "暂停",
    start: "开始",
    reset: "重置",
    close: "关闭",
    editorTitle: "训练设置",
    editorDesc: "修改会保存在浏览器里，不需要改代码。",
    restoreDemo: "恢复示例",
    workout: "训练",
    title: "名称",
    subtitle: "副标题",
    level: "级别",
    duration: "时长",
    dayColor: "颜色",
    description: "描述",
    saveWorkout: "保存训练",
    exercises: "动作",
    add: "+ 添加",
    delete: "删除",
    sets: "组数",
    reps: "次数",
    restSec: "休息，秒",
    photo: "照片",
    video: "视频",
    technique: "动作要领",
    note: "备注",
    saveExercise: "保存动作",
    open: "打开",
    details: "详情",
    rest: "休息",
    difficulty: "强度",
    noTechnique: "还没有填写动作要领。",
    addNote: "在编辑器里添加备注。",
    setsLabel: "组",
    repsLabel: "次",
    restLabel: "秒休息",
    mediaAria: "动作媒体：先照片，后视频",
    photoCaption: "照片",
    videoCaption: "视频",
    videoUnsupported: "你的浏览器不支持视频。",
    showPhoto: "显示照片",
    showVideo: "显示视频",
    fullscreen: "全屏",
    openFullscreen: "全屏查看媒体",
    exerciseNum: "动作 {number} / {total}",
    next: "下一个",
    list: "返回列表",
    closeQuarter: "完成计划",
    doneMark: "已完成 ✓",
    doneRest: "完成 → 休息",
    doneRestAnton: "完成 → 合理休息",
    launchRest: "开始休息",
    previous: "上一个",
    planClosed: "计划完成",
    victoryTitle: "安东正式成为狠人。",
    victoryText: "训练季度已完成，肌肉审核通过。",
    bonus: "给肌肉发奖金",
    difficultyChanged: "强度：{label}",
    timerResetStatus: "已重置，点击开始",
    workoutSaved: "训练已保存",
    antonModeOn: "安东模式已开启：动作 KPI 已激活。",
    antonModeOff: "安东模式已关闭：认真健身房回来了。",
    restoreConfirm: "恢复示例训练？编辑器里的修改会被清空。",
    newWorkout: "新训练",
    newExercise: "新动作",
    describeTechnique: "填写这个动作的要领。",
    addFriendNote: "给朋友添加重要备注。",
    easy: "轻松",
    easyShort: "轻量",
    easyHint: "训练量更小，休息更长",
    normal: "正常",
    normalShort: "标准",
    normalHint: "基础计划",
    hard: "困难",
    hardShort: "加强",
    hardHint: "训练量更大，节奏更紧",
    mode: "模式",
    exercisesWord: "个动作",
    secShort: "秒"
  }
};

const WORKOUT_ZH = {
  legs: { title: "腿部日", subtitle: "腿部 + 臀部", level: "中等", duration: "55–70 分钟", description: "腿部、臀部和耐力的力量训练。" },
  "chest-triceps": { title: "胸部 + 肱三头肌", subtitle: "推举日", level: "中等", duration: "50–65 分钟", description: "推举动作、胸肌、肱三头肌和动作控制。" },
  "back-biceps": { title: "背部 + 肱二头肌", subtitle: "拉力日", level: "中等", duration: "55–70 分钟", description: "发展背部宽度、拉力和肱二头肌控制。" },
  shoulders: { title: "肩部", subtitle: "三角肌 + 稳定", level: "轻松 / 中等", duration: "40–55 分钟", description: "中束和后束三角肌、推举和肩部健康。" },
  fullbody: { title: "全身训练", subtitle: "全身", level: "通用", duration: "45–60 分钟", description: "高效均衡的全身训练。" }
};

const EXERCISE_ZH = {
  "leg-press": { name: "腿举", technique: "双脚与肩同宽放在踏板上，控制下放，膝盖沿脚尖方向，臀部不要离开座椅。", coachNote: "顶端不要锁死膝盖，保持持续张力。" },
  "goblet-squat": { name: "高脚杯深蹲", technique: "哑铃贴近胸前，背部保持中立，下蹲到舒适深度，脚跟不要离地。", coachNote: "节奏：下放 2 秒，短暂停顿，再有力站起。" },
  "romanian-deadlift": { name: "罗马尼亚硬拉", technique: "髋部向后推，膝盖微屈，重量沿腿部移动，背部保持平直。", coachNote: "重点不是弯腰，而是把髋部向后送。" },
  lunges: { name: "后撤弓步", technique: "向后迈步，膝盖靠近地面，身体保持稳定，通过前脚脚跟返回。", coachNote: "膝盖不要内扣，动作平稳。" },
  "calf-raises": { name: "提踵", technique: "尽量高地踮起脚尖，底部做轻微拉伸。", coachNote: "不要弹震，完整幅度比重量重要。" },
  plank: { name: "平板支撑", technique: "肘部在肩下，腹部收紧，腰部不要下塌。", coachNote: "训练收尾：稳定核心和呼吸。" },
  "bench-press": { name: "卧推", technique: "肩胛骨收紧，双脚踩稳，杠铃下放到胸部下沿。", coachNote: "不要反弹杠铃，控制比重量重要。" },
  "incline-db-press": { name: "上斜哑铃卧推", technique: "凳子 25–35 度，控制下放，肘部不要过度外展。", coachNote: "顶端不要让哑铃相撞。" },
  "cable-fly": { name: "绳索夹胸", technique: "身体微微前倾，手臂略弯，在胸前合拢，感受拉伸。", coachNote: "这不是大重量动作，干净完成。" },
  dips: { name: "双杠臂屈伸", technique: "身体微微前倾，控制下放，肩膀不要耸起。", coachNote: "如果太难，可以用弹力带或辅助器械。" },
  "triceps-rope": { name: "绳索下压", technique: "肘部贴近身体，底部把绳索向两侧分开，充分收缩肱三头肌。", coachNote: "上臂固定，只让前臂工作。" },
  pullups: { name: "引体向上 / 高位下拉", technique: "想象把肘部向下拉，胸部靠近横杆或把手，不要摆动。", coachNote: "想背部发力，不要只用手臂。" },
  "barbell-row": { name: "俯身杠铃划船", technique: "身体前倾，背部平直，把杠铃拉向下腹部。", coachNote: "不要用身体甩动代替划船。" },
  "seated-row": { name: "坐姿划船", technique: "先收肩胛骨，再拉把手，回放时保持控制。", coachNote: "顶峰位置停 1 秒。" },
  "face-pull": { name: "面拉", technique: "把绳索拉向脸部，肘部抬高，肩胛向后向下。", coachNote: "对肩部和体态很好，不要追求重量。" },
  "db-curl": { name: "哑铃弯举", technique: "肘部靠近身体，不借力摆动完成弯举。", coachNote: "下放时也要控制。" },
  "shoulder-press": { name: "坐姿哑铃推举", technique: "坐直，核心收紧，哑铃沿弧线向上推，不要猛锁肘。", coachNote: "腰不要过度反弓，重量要可控。" },
  "lateral-raise": { name: "哑铃侧平举", technique: "肘部微屈，抬到肩部高度，手腕不要翘起。", coachNote: "小重量，干净技术，让三角肌燃烧。" },
  "rear-delt": { name: "后束飞鸟", technique: "身体前倾，双臂向两侧打开，不要让斜方肌抢活。", coachNote: "顶端短暂停顿。" },
  "arnold-press": { name: "阿诺德推举", technique: "从哑铃在身前开始，旋转手腕并向上推。", coachNote: "不要急，这个动作需要控制。" },
  "external-rotation": { name: "肩外旋", technique: "肘部贴近身体，用弹力带或轻重量向外旋转。", coachNote: "预防伤病，重量要轻。" },
  squat: { name: "深蹲", technique: "双脚站稳，核心收紧，控制下蹲深度。", coachNote: "必须热身，不要丢掉背部姿态。" },
  pushups: { name: "俯卧撑", technique: "身体成一直线，肘部受控，胸部靠近地面。", coachNote: "可以把脚抬高来增加难度。" },
  "one-arm-row": { name: "单臂哑铃划船", technique: "一侧支撑在凳子上，背部平直，肘部向髋部方向拉。", coachNote: "不要过度旋转身体。" },
  "hip-thrust": { name: "臀桥", technique: "肩胛靠在支撑上，脚在膝盖下方，顶端夹紧臀部。", coachNote: "不要用腰部代偿。" },
  "farmer-walk": { name: "农夫行走", technique: "拿起较重哑铃，走路稳定，肩膀向后，核心收紧。", coachNote: "核心和握力都会变强。" }
};

function t(key, vars = {}) {
  const dict = I18N[state?.language || "ru"] || I18N.ru;
  const template = dict[key] ?? I18N.ru[key] ?? key;
  return Object.entries(vars).reduce((text, [name, value]) => text.replaceAll(`{${name}}`, value), template);
}

function isZh() {
  return state.language === "zh";
}

function workoutText(workout, field) {
  if (isZh() && WORKOUT_ZH[workout.id]?.[field]) return WORKOUT_ZH[workout.id][field];
  return workout[field];
}

function exerciseText(exercise, field) {
  if (isZh() && EXERCISE_ZH[exercise.id]?.[field]) return EXERCISE_ZH[exercise.id][field];
  return exercise[field];
}

const MOTIVATION_PHRASES = [
  "Открывай тренировку и просто сделай первый подход — дальше тело включится.",
  "Сегодня без героизма: выбери сложность по самочувствию и работай чисто.",
  "Фото и видео уже рядом. Осталось только нажать старт.",
  "Лучший план — тот, который реально выполнен. Начинаем спокойно.",
  "Один экран, один день, одна задача: закрыть тренировку красиво."
];

const FUN_PHRASES = {
  hero: [
    "Антон, совещание с гантелями началось. Протокол ведут мышцы.",
    "KPI по подходам никто не отменял. Сегодня закрываем план красиво.",
    "Руководитель отдела подходов выходит на смену."
  ],
  excuse: [
    "Отмазка не принята. Справка от дивана не является документом.",
    "Заявка на пропуск тренировки отклонена без права апелляции.",
    "Антон, ты руководитель. Покажи пример гантелям.",
    "Перенос тренировки согласован на… никогда.",
    "Жим ногами не спрашивает, устал ли ты."
  ],
  rest: [
    "Перерыв одобрен руководством. Но строго по таймеру.",
    "Антон отдыхает. Но мышцы уже пишут отчёт.",
    "Не открывай рабочую почту. Сейчас подход важнее.",
    "Отдых согласован. Продление только через пот."
  ],
  done: [
    "Подход принят. Замечаний нет.",
    "Мышцы подписали акт выполненных работ.",
    "KPI по этому упражнению закрыт.",
    "Антон сделал. Гантели уважительно молчат."
  ],
  bonus: [
    "Премия начислена: +10 к уверенности и +5 к походке.",
    "Мышцы благодарят руководство за поддержку.",
    "Бонус выдан. Завтра тело напомнит служебной запиской.",
    "Финансовый отдел мышц аплодирует стоя."
  ],
  note: [
    "Антон-проверка: техника важнее геройства.",
    "Мини-приказ: делаем чисто, без производственного брака.",
    "Отдел мышц напоминает: амплитуду не урезаем.",
    "Контроль качества: без рывков, без суеты, с достоинством.",
    "Протокол упражнения: спокойно, ровно, по плану.",
    "Босс-режим: вес управляемый, лицо уверенное.",
    "Служебная записка телу: работаем красиво."
  ],
  rank: [
    "Уровень: босс качалки",
    "Ранг: начальник спортзала",
    "Статус: KPI закрыт",
    "Вердикт: мышцы приняли отчёт",
    "Итог: Антон-терминатор лайтовой версии"
  ]
};


const FUN_PHRASES_ZH = {
  hero: [
    "安东，哑铃会议开始。肌肉负责记录。",
    "动作 KPI 不能取消。今天漂亮完成计划。",
    "动作部门负责人正式上岗。"
  ],
  excuse: [
    "借口未通过。沙发开的证明无效。",
    "跳过训练申请被驳回，不可上诉。",
    "安东，你是领导。给哑铃做个榜样。",
    "训练延期已批准到……永远不会。",
    "腿举不会问你累不累。"
  ],
  rest: [
    "休息已批准，但必须按计时器执行。",
    "安东在休息，肌肉已经开始写报告。",
    "别看工作邮件，现在动作更重要。",
    "休息同意，延期需要汗水签字。"
  ],
  done: [
    "动作验收通过，无整改意见。",
    "肌肉已签署完成报告。",
    "本动作 KPI 已关闭。",
    "安东完成了，哑铃表示尊重。"
  ],
  bonus: [
    "奖金已发：自信 +10，走路气场 +5。",
    "肌肉感谢领导的支持。",
    "奖金已发。明天身体会发提醒。",
    "肌肉财务部起立鼓掌。"
  ],
  note: [
    "安东检查：技术比逞强重要。",
    "小命令：动作干净，不做生产缺陷。",
    "肌肉部门提醒：幅度不要偷工减料。",
    "质量控制：不猛拉，不慌张，要体面。",
    "动作流程：稳定、平顺、按计划。",
    "老板模式：重量可控，表情自信。",
    "给身体的通知：今天也要练得漂亮。"
  ],
  rank: [
    "等级：健身房老板",
    "段位：训练场负责人",
    "状态：KPI 已关闭",
    "结论：肌肉审核通过",
    "结果：轻量版安东终结者"
  ]
};

function funList(key) {
  return isZh() ? (FUN_PHRASES_ZH[key] || FUN_PHRASES[key]) : FUN_PHRASES[key];
}

function funPhrase(key) {
  return randomFrom(funList(key));
}

const defaultWorkouts = structuredClone(workouts);

const state = {
  workouts: loadWorkouts(),
  activeWorkoutId: localStorage.getItem(STORAGE_KEYS.lastWorkout) || workouts[0].id,
  stepModeIndex: 0,
  timerId: null,
  timerLeft: 0,
  timerInitial: 0,
  timerRunning: false,
  timerVisible: false,
  timerRestPhrase: "",
  timerRestPhraseAge: 0,
  editorOpen: false,
  humorMode: localStorage.getItem(STORAGE_KEYS.humor) === "true",
  difficulty: localStorage.getItem(STORAGE_KEYS.difficulty) || "normal",
  language: localStorage.getItem(STORAGE_KEYS.language) || "ru",
  toastId: null
};

const dom = {
  homeDashboard: document.getElementById("homeDashboard"),
  todayCard: document.getElementById("todayCard"),
  todayWorkoutTitle: document.getElementById("todayWorkoutTitle"),
  todayWorkoutText: document.getElementById("todayWorkoutText"),
  todayStartBtn: document.getElementById("todayStartBtn"),
  todayStepBtn: document.getElementById("todayStepBtn"),
  todayProgressRing: document.getElementById("todayProgressRing"),
  todayProgressPercent: document.getElementById("todayProgressPercent"),
  todayDifficulty: document.getElementById("todayDifficulty"),
  todayExerciseCount: document.getElementById("todayExerciseCount"),
  scrollToWorkoutsBtn: document.getElementById("scrollToWorkoutsBtn"),
  grid: document.getElementById("workoutGrid"),
  workoutsHead: document.getElementById("workouts"),
  backToWorkoutsBtn: document.getElementById("backToWorkoutsBtn"),
  activePanel: document.getElementById("activePanel"),
  activeTitle: document.getElementById("activeTitle"),
  activeDescription: document.getElementById("activeDescription"),
  exerciseList: document.getElementById("exerciseList"),
  progressLabel: document.getElementById("progressLabel"),
  progressPercent: document.getElementById("progressPercent"),
  progressFill: document.getElementById("progressFill"),
  progressJoke: document.getElementById("progressJoke"),
  difficultyTabs: document.getElementById("difficultyTabs"),
  difficultyHint: document.getElementById("difficultyHint"),
  resetProgressBtn: document.getElementById("resetProgressBtn"),
  continueBtn: document.getElementById("continueBtn"),
  stepModeBtn: document.getElementById("stepModeBtn"),
  editorBtn: document.getElementById("editorBtn"),
  editorPanel: document.getElementById("editorPanel"),
  workoutForm: document.getElementById("workoutForm"),
  editorWorkoutSelect: document.getElementById("editorWorkoutSelect"),
  editorTitle: document.getElementById("editorTitle"),
  editorSubtitle: document.getElementById("editorSubtitle"),
  editorLevel: document.getElementById("editorLevel"),
  editorDuration: document.getElementById("editorDuration"),
  editorAccent: document.getElementById("editorAccent"),
  editorDescription: document.getElementById("editorDescription"),
  editorExerciseList: document.getElementById("editorExerciseList"),
  addExerciseBtn: document.getElementById("addExerciseBtn"),
  exportDataBtn: document.getElementById("exportDataBtn"),
  importToggleBtn: document.getElementById("importToggleBtn"),
  importPanel: document.getElementById("importPanel"),
  importJsonInput: document.getElementById("importJsonInput"),
  importFileInput: document.getElementById("importFileInput"),
  chooseImportFileBtn: document.getElementById("chooseImportFileBtn"),
  applyImportBtn: document.getElementById("applyImportBtn"),
  importStatus: document.getElementById("importStatus"),
  resetDataBtn: document.getElementById("resetDataBtn"),
  inlineRest: document.getElementById("inlineRest"),
  inlineTimerValue: document.getElementById("inlineTimerValue"),
  inlineTimerStatus: document.getElementById("inlineTimerStatus"),
  inlineTimerPause: document.getElementById("inlineTimerPause"),
  inlineTimerReset: document.getElementById("inlineTimerReset"),
  inlineTimerClose: document.getElementById("inlineTimerClose"),
  modal: document.getElementById("exerciseModal"),
  modalBody: document.getElementById("modalBody"),
  modalClose: document.getElementById("modalClose"),
  mediaModal: document.getElementById("mediaModal"),
  mediaModalBody: document.getElementById("mediaModalBody"),
  mediaModalClose: document.getElementById("mediaModalClose"),
  stepModal: document.getElementById("stepModal"),
  stepClose: document.getElementById("stepClose"),
  stepMedia: document.getElementById("stepMedia"),
  stepWorkoutName: document.getElementById("stepWorkoutName"),
  stepExerciseName: document.getElementById("stepExerciseName"),
  stepStats: document.getElementById("stepStats"),
  stepProgressText: document.getElementById("stepProgressText"),
  stepProgressFill: document.getElementById("stepProgressFill"),
  stepSetProgress: document.getElementById("stepSetProgress"),
  stepSetInfo: document.getElementById("stepSetInfo"),
  stepSetPercent: document.getElementById("stepSetPercent"),
  stepSetFill: document.getElementById("stepSetFill"),
  stepRestPanel: document.getElementById("stepRestPanel"),
  stepTimerValue: document.getElementById("stepTimerValue"),
  stepTimerStatus: document.getElementById("stepTimerStatus"),
  stepTimerPause: document.getElementById("stepTimerPause"),
  stepTimerReset: document.getElementById("stepTimerReset"),
  stepTimerClose: document.getElementById("stepTimerClose"),
  stepTechnique: document.getElementById("stepTechnique"),
  stepCoachNote: document.getElementById("stepCoachNote"),
  stepAntonNote: document.getElementById("stepAntonNote"),
  stepPrev: document.getElementById("stepPrev"),
  stepDone: document.getElementById("stepDone"),
  stepRest: document.getElementById("stepRest"),
  stepNext: document.getElementById("stepNext"),
  featuredWorkout: document.getElementById("featuredWorkout"),
  featuredText: document.getElementById("featuredText"),
  featuredExercises: document.getElementById("featuredExercises"),
  heroSubtitle: document.getElementById("heroSubtitle"),
  humorToggle: document.getElementById("humorToggle"),
  excuseBtn: document.getElementById("excuseBtn"),
  victoryModal: document.getElementById("victoryModal"),
  victoryClose: document.getElementById("victoryClose"),
  bonusBtn: document.getElementById("bonusBtn"),
  funToast: document.getElementById("funToast"),
  themeToggle: document.getElementById("themeToggle"),
  languageToggle: document.getElementById("languageToggle")
};

function loadWorkouts() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.workouts));
    return Array.isArray(saved) && saved.length ? saved : structuredClone(workouts);
  } catch {
    return structuredClone(workouts);
  }
}

function saveWorkouts() {
  localStorage.setItem(STORAGE_KEYS.workouts, JSON.stringify(state.workouts));
}

function randomFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function showToast(message) {
  if (!message || !dom.funToast) return;
  clearTimeout(state.toastId);
  dom.funToast.textContent = message;
  dom.funToast.hidden = false;
  dom.funToast.classList.add("show");
  state.toastId = setTimeout(() => {
    dom.funToast.classList.remove("show");
    setTimeout(() => { dom.funToast.hidden = true; }, 180);
  }, 3200);
}

function getProgressJoke(percent, done, total) {
  if (isZh()) {
    if (total === 0) return "安东还在选择从哪里开始。";
    if (percent >= 100) return "安东关闭了训练季度，肌肉审核通过。";
    if (percent >= 75) return "只剩一点点了，现在撤退不体面。";
    if (percent >= 50) return "肌肉会议进行顺利。";
    if (percent >= 25) return "领导进入状态，哑铃开始紧张。";
    if (done > 0) return "第一批任务已关闭，继续推进。";
    return "安东还在心理准备，计时器已经怀疑了。";
  }
  if (total === 0) return "Антон пока выбирает, с чего начать.";
  if (percent >= 100) return "Антон закрыл тренировочный квартал. Мышцы приняли отчёт.";
  if (percent >= 75) return "Осталось чуть-чуть. Отступать уже некрасиво.";
  if (percent >= 50) return "Планёрка с мышцами идёт успешно.";
  if (percent >= 25) return "Начальник вошёл в процесс. Гантели напряглись.";
  if (done > 0) return "Первые задачи закрыты. Продолжаем без бюрократии.";
  return "Антон пока морально готовится. Таймер уже подозревает неладное.";
}

function getAntonNote(exercise, index = 0) {
  const base = `${exercise?.id || exercise?.name || "anton"}${index}`;
  const hash = Array.from(base).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const notes = funList("note");
  return notes[hash % notes.length];
}

function renderAntonNote(exercise, index = 0) {
  if (!state.humorMode) return "";
  return `<div class="anton-note"><strong>${isZh() ? "安东模式" : "Антон-mode"}:</strong> ${getAntonNote(exercise, index)}</div>`;
}

function setHumorMode(enabled) {
  state.humorMode = Boolean(enabled);
  localStorage.setItem(STORAGE_KEYS.humor, String(state.humorMode));
  document.documentElement.dataset.humor = state.humorMode ? "on" : "off";
  dom.humorToggle.textContent = state.humorMode ? t("humorOn") : t("humorOff");
  dom.humorToggle.setAttribute("aria-pressed", String(state.humorMode));
  dom.excuseBtn.hidden = !state.humorMode;
  dom.excuseBtn.textContent = t("excuse");
  if (dom.heroSubtitle) {
    dom.heroSubtitle.textContent = state.humorMode ? funPhrase("hero") : "";
  }
  updateProgress();
  updateHomeDashboard();
}

function toggleHumorMode() {
  setHumorMode(!state.humorMode);
  showToast(state.humorMode ? t("antonModeOn") : t("antonModeOff"));
}

function showExcuse() {
  showToast(funPhrase("excuse"));
}

function checkWorkoutCompletion(workout) {
  if (!state.humorMode || !workout?.exercises?.length) return;
  const done = workout.exercises.filter(exercise => isExerciseComplete(workout, exercise)).length;
  if (done === workout.exercises.length && !dom.victoryModal.open) {
    dom.victoryModal.showModal();
  }
}

function progressKey(workoutId) {
  return `fitplan:progress:${workoutId}`;
}


function setProgressKey(workoutId) {
  return `${STORAGE_KEYS.sets}:${workoutId}:${state.difficulty}`;
}

function readSetProgress(workoutId) {
  try {
    return JSON.parse(localStorage.getItem(setProgressKey(workoutId))) || {};
  } catch {
    return {};
  }
}

function saveSetProgress(workoutId, progress) {
  localStorage.setItem(setProgressKey(workoutId), JSON.stringify(progress));
}

function getCompletedSets(workout, exercise) {
  const plan = getExercisePlan(exercise);
  const setProgress = readSetProgress(workout.id);
  const legacyProgress = readProgress(workout.id);
  if (legacyProgress[exercise.id]) return plan.sets;
  return Math.min(Number(setProgress[exercise.id]) || 0, plan.sets);
}

function setCompletedSets(workoutId, exerciseId, count) {
  const workout = state.workouts.find(item => item.id === workoutId);
  const exercise = workout?.exercises?.find(item => item.id === exerciseId);
  if (!workout || !exercise) return;
  const plan = getExercisePlan(exercise);
  const nextCount = Math.max(0, Math.min(Number(count) || 0, plan.sets));
  const setProgress = readSetProgress(workoutId);
  setProgress[exerciseId] = nextCount;
  saveSetProgress(workoutId, setProgress);

  const legacy = readProgress(workoutId);
  legacy[exerciseId] = nextCount >= plan.sets;
  saveProgress(workoutId, legacy);
}

function isExerciseComplete(workout, exercise) {
  return getCompletedSets(workout, exercise) >= getExercisePlan(exercise).sets;
}

function workoutSetTotals(workout) {
  const total = workout.exercises.reduce((sum, exercise) => sum + getExercisePlan(exercise).sets, 0);
  const done = workout.exercises.reduce((sum, exercise) => sum + getCompletedSets(workout, exercise), 0);
  return { done, total, percent: total ? Math.round((done / total) * 100) : 0 };
}

function readProgress(workoutId) {
  try {
    return JSON.parse(localStorage.getItem(progressKey(workoutId))) || {};
  } catch {
    return {};
  }
}

function saveProgress(workoutId, progress) {
  localStorage.setItem(progressKey(workoutId), JSON.stringify(progress));
}

function getActiveWorkout() {
  return state.workouts.find(workout => workout.id === state.activeWorkoutId) || state.workouts[0];
}

function updateHomeDashboard() {
  if (!dom.homeDashboard) return;
  const workout = getActiveWorkout();
  if (!workout) return;
  const { done, total, percent } = workoutSetTotals(workout);
  const option = difficultyOption(state.difficulty);

  dom.todayCard.className = `today-card accent-${workout.accent || "lime"}`;
  dom.todayWorkoutTitle.textContent = workoutText(workout, "title");
  dom.todayWorkoutText.textContent = state.humorMode
    ? funPhrase("hero")
    : (workoutText(workout, "description") || randomFrom(MOTIVATION_PHRASES));
  dom.todayProgressPercent.textContent = `${percent}%`;
  dom.todayProgressRing.style.setProperty("--today-progress", `${percent}%`);
  dom.todayDifficulty.textContent = `${option.label} ${t("mode")}`;
  dom.todayExerciseCount.textContent = `${workout.exercises.length} ${t("exercisesWord")}`;
}

function getCurrentStepExercise() {
  const workout = getActiveWorkout();
  return workout.exercises[state.stepModeIndex] || workout.exercises[0];
}

function formatTime(totalSeconds) {
  const seconds = Math.max(0, Number(totalSeconds) || 0);
  const min = String(Math.floor(seconds / 60)).padStart(2, "0");
  const sec = String(seconds % 60).padStart(2, "0");
  return `${min}:${sec}`;
}

function parseNumberList(value) {
  const matches = String(value || "").match(/\d+/g);
  return matches ? matches.map(Number) : [];
}

function adjustReps(value, mode) {
  const source = String(value || "").trim();
  const nums = parseNumberList(source);
  if (!nums.length) {
    if (mode === "easy") return source ? `${source} комфортно` : "комфортно";
    if (mode === "hard") return source ? `${source} + 1–2` : "до уверенного максимума";
    return source || "—";
  }
  let i = 0;
  return source.replace(/\d+/g, match => {
    const base = nums[i++] || Number(match);
    if (mode === "easy") return String(Math.max(1, Math.round(base * 0.8)));
    if (mode === "hard") return String(Math.max(1, Math.round(base * 1.15)));
    return String(base);
  });
}

function getExercisePlan(exercise, difficulty = state.difficulty) {
  const normal = {
    sets: Number(exercise.sets) || 3,
    reps: String(exercise.reps || "12–15"),
    rest: Number(exercise.rest) || 60
  };
  const fallback = {
    easy: {
      sets: Math.max(1, normal.sets - 1),
      reps: adjustReps(normal.reps, "easy"),
      rest: normal.rest + 15
    },
    normal,
    hard: {
      sets: normal.sets + 1,
      reps: adjustReps(normal.reps, "hard"),
      rest: Math.max(30, normal.rest - 10)
    }
  };
  const custom = exercise.difficulty?.[difficulty] || {};
  const base = fallback[difficulty] || fallback.normal;
  return {
    sets: Number(custom.sets) || base.sets,
    reps: String(custom.reps || base.reps),
    rest: Number(custom.rest) || base.rest
  };
}

function renderPlanStats(exercise, extraClass = "") {
  const plan = getExercisePlan(exercise);
  const option = difficultyOption(state.difficulty);
  return `
    <span>${plan.sets || "—"} ${t("setsLabel")}</span>
    <span>${plan.reps || "—"} ${t("repsLabel")}</span>
    <span>${plan.rest || 60} ${t("restLabel")}</span>
    <span class="difficulty-pill difficulty-${option.tone} ${extraClass}">${option.label}</span>
  `;
}

function setDifficulty(difficulty) {
  if (!DIFFICULTY_OPTIONS[difficulty]) return;
  state.difficulty = difficulty;
  localStorage.setItem(STORAGE_KEYS.difficulty, difficulty);
  renderDifficultyTabs();
  renderActiveWorkout();
  if (dom.stepModal.open) renderStepMode();
  updateHomeDashboard();
  showToast(t("difficultyChanged", { label: difficultyOption(difficulty).label }));
}

function renderDifficultyTabs() {
  if (!dom.difficultyTabs) return;
  dom.difficultyTabs.innerHTML = Object.keys(DIFFICULTY_OPTIONS).map(key => {
    const item = difficultyOption(key);
    return `
      <button type="button" class="difficulty-tab difficulty-${item.tone} ${state.difficulty === key ? "active" : ""}" data-difficulty="${key}">
        <strong>${item.label}</strong>
        <small>${item.short}</small>
      </button>
    `;
  }).join("");
  const current = difficultyOption(state.difficulty);
  if (dom.difficultyHint) dom.difficultyHint.textContent = t("nowDifficulty", { label: current.label, hint: current.hint });
}

function setActiveAccent(workout) {
  const accent = ACCENT_MAP[workout.accent] || ACCENT_MAP.lime;
  document.documentElement.style.setProperty("--accent", accent);
  document.documentElement.dataset.activeAccent = workout.accent || "lime";
  dom.activePanel.className = `active-panel accent-${workout.accent || "lime"}`;
}

function showWorkoutMenu(scroll = true) {
  dom.activePanel.hidden = true;
  dom.grid.hidden = false;
  dom.workoutsHead.hidden = false;
  if (dom.homeDashboard) dom.homeDashboard.hidden = false;
  document.body.classList.remove("workout-open");
  closeTimer();
  updateHomeDashboard();
  if (scroll) dom.homeDashboard?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showActiveWorkout(scroll = true) {
  dom.grid.hidden = true;
  dom.workoutsHead.hidden = true;
  if (dom.homeDashboard) dom.homeDashboard.hidden = true;
  dom.activePanel.hidden = false;
  document.body.classList.add("workout-open");
  if (scroll) dom.activePanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderWorkoutCards() {
  dom.grid.innerHTML = state.workouts.map(workout => {
    const { percent } = workoutSetTotals(workout);

    return `
      <article class="workout-card accent-${workout.accent || "lime"} ${workout.id === state.activeWorkoutId ? "selected" : ""}" data-workout-id="${workout.id}">
        <div class="card-topline">
          <span>${workoutText(workout, "subtitle") || t("workout")}</span>
          <b>${workoutText(workout, "level") || t("level")}</b>
        </div>
        <h3>${workoutText(workout, "title")}</h3>
        <p>${workoutText(workout, "description") || t("description")}</p>
        <div class="workout-meta">
          <span>${workout.exercises.length} ${t("exercisesWord")}</span>
          <span>${workoutText(workout, "duration") || "—"}</span>
        </div>
        <div class="tiny-progress"><span style="width:${percent}%"></span></div>
        <button type="button" class="card-btn">${t("open")}</button>
      </article>
    `;
  }).join("");

  dom.grid.querySelectorAll(".workout-card").forEach(card => {
    card.addEventListener("click", () => selectWorkout(card.dataset.workoutId));
  });
  updateHomeDashboard();
}

function selectWorkout(workoutId, scroll = true) {
  state.activeWorkoutId = workoutId;
  state.stepModeIndex = 0;
  localStorage.setItem(STORAGE_KEYS.lastWorkout, workoutId);
  renderDifficultyTabs();
  renderWorkoutCards();
  renderActiveWorkout();
  if (state.editorOpen) renderEditor();
  showActiveWorkout(scroll);
}

function renderActiveWorkout() {
  const workout = getActiveWorkout();
  setActiveAccent(workout);

  dom.activeTitle.textContent = workoutText(workout, "title");
  dom.activeDescription.textContent = workoutText(workout, "description") || "";
  if (dom.featuredWorkout) dom.featuredWorkout.textContent = workoutText(workout, "title");
  if (dom.featuredText) dom.featuredText.textContent = workoutText(workout, "description") || "";
  if (dom.featuredExercises) dom.featuredExercises.textContent = workout.exercises.length;
  updateHomeDashboard();

  dom.exerciseList.innerHTML = workout.exercises.map((exercise, index) => {
    const completedSets = getCompletedSets(workout, exercise);
    const plan = getExercisePlan(exercise);
    const done = completedSets >= plan.sets;
    return `
      <article class="exercise-card ${done ? "done" : ""}" data-exercise-id="${exercise.id}">
        <div class="exercise-media">
          ${renderMediaCarousel(exercise, `card-${exercise.id}`, String(index + 1).padStart(2, "0"))}
        </div>
        <div class="exercise-content">
          <div class="exercise-title-row">
            <div>
              <span class="eyebrow">${getExercisePlan(exercise).sets || "—"} ${t("setsLabel")} × ${getExercisePlan(exercise).reps || "—"}</span>
              <h3>${exerciseText(exercise, "name")}</h3>
            </div>
            <button class="done-btn" type="button" aria-label="${t("doneMark")}">${done ? "✓" : ""}</button>
          </div>
          <div class="exercise-tags">
            <span>${t("setCount", { done: completedSets, total: plan.sets })}</span>
            <span>${t("rest")}: ${plan.rest || 60} ${t("secShort")}</span>
            <span class="difficulty-pill difficulty-${difficultyOption(state.difficulty).tone}">${t("difficulty")}: ${difficultyOption(state.difficulty).label}</span>
          </div>
          <p>${exerciseText(exercise, "technique") || t("noTechnique")}</p>
          <div class="coach-note"><strong>${t("note")}:</strong> ${exerciseText(exercise, "coachNote") || t("addNote")}</div>
          ${renderAntonNote(exercise, index)}
          <div class="exercise-actions exercise-actions-single">
            <button class="secondary-btn compact details-btn" type="button">${t("details")}</button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  initMediaCarousels(dom.exerciseList);

  dom.exerciseList.querySelectorAll(".exercise-card").forEach(card => {
    const exerciseId = card.dataset.exerciseId;
    card.querySelector(".done-btn").addEventListener("click", event => {
      event.stopPropagation();
      toggleExercise(workout.id, exerciseId);
    });
    card.querySelector(".details-btn").addEventListener("click", () => openExerciseModal(exerciseId));
  });

  updateProgress();
  updateTimerFace();
}

function renderMediaCarousel(exercise, carouselId, numberLabel = "") {
  const safeId = carouselId.replace(/[^a-zA-Z0-9_-]/g, "-");
  const imageSrc = resolveMediaUrl(exercise.image, "assets/placeholder.svg");
  const videoSrc = resolveMediaUrl(exercise.video, "assets/placeholder-video.mp4");
  const title = exerciseText(exercise, "name");
  const imageSrcAttr = escapeAttr(imageSrc);
  const videoSrcAttr = escapeAttr(videoSrc);
  const titleAttr = escapeAttr(title);

  return `
    <div class="media-carousel" data-carousel-id="${safeId}">
      <div class="media-track" id="${safeId}-track" tabindex="0" aria-label="${t("mediaAria")}">
        <figure class="media-slide">
          <img class="fullscreen-media-trigger" src="${imageSrcAttr}" alt="${titleAttr}" loading="lazy" data-media-type="image" data-media-src="${imageSrcAttr}" data-media-title="${titleAttr}" />
          <figcaption>${t("photoCaption")}</figcaption>
          <button class="fullscreen-btn" type="button" aria-label="${t("openFullscreen")}" data-media-type="image" data-media-src="${imageSrcAttr}" data-media-title="${titleAttr}">⛶ ${t("fullscreen")}</button>
        </figure>
        <figure class="media-slide">
          <video class="fullscreen-media-trigger" controls preload="metadata" playsinline poster="${imageSrcAttr}" data-media-type="video" data-media-src="${videoSrcAttr}" data-media-poster="${imageSrcAttr}" data-media-title="${titleAttr}">
            <source src="${videoSrcAttr}" type="video/mp4" />
            ${t("videoUnsupported")}
          </video>
          <figcaption>${t("videoCaption")}</figcaption>
          <button class="fullscreen-btn" type="button" aria-label="${t("openFullscreen")}" data-media-type="video" data-media-src="${videoSrcAttr}" data-media-poster="${imageSrcAttr}" data-media-title="${titleAttr}">⛶ ${t("fullscreen")}</button>
        </figure>
      </div>
      ${numberLabel ? `<span class="exercise-number">${numberLabel}</span>` : ""}
      <div class="media-controls" aria-hidden="false">
        <button class="media-nav prev" type="button" aria-label="${t("showPhoto")}">‹</button>
        <div class="media-dots" aria-hidden="true"><span class="active"></span><span></span></div>
        <button class="media-nav next" type="button" aria-label="${t("showVideo")}">›</button>
      </div>
    </div>
  `;
}

function initMediaCarousels(root = document) {
  root.querySelectorAll(".media-carousel").forEach(carousel => {
    if (carousel.dataset.ready === "true") return;
    carousel.dataset.ready = "true";

    const track = carousel.querySelector(".media-track");
    const dots = Array.from(carousel.querySelectorAll(".media-dots span"));
    const videos = Array.from(carousel.querySelectorAll("video"));

    const setActiveDot = () => {
      const index = Math.round(track.scrollLeft / Math.max(track.clientWidth, 1));
      dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === index));
      videos.forEach((video, videoIndex) => {
        if (videoIndex !== index - 1) video.pause();
      });
    };

    carousel.querySelector(".prev")?.addEventListener("click", event => {
      event.stopPropagation();
      track.scrollTo({ left: 0, behavior: "smooth" });
    });

    carousel.querySelector(".next")?.addEventListener("click", event => {
      event.stopPropagation();
      track.scrollTo({ left: track.clientWidth, behavior: "smooth" });
    });

    carousel.querySelectorAll(".fullscreen-btn").forEach(button => {
      button.addEventListener("click", event => {
        event.preventDefault();
        event.stopPropagation();
        openMediaModalFromElement(button);
      });
    });

    carousel.querySelectorAll("img.fullscreen-media-trigger").forEach(image => {
      image.addEventListener("click", event => {
        event.stopPropagation();
        openMediaModalFromElement(image);
      });
    });

    carousel.querySelectorAll("video.fullscreen-media-trigger").forEach(video => {
      video.addEventListener("click", event => {
        // Нижняя зона занята нативными контролами видео, её не перехватываем.
        if (event.offsetY > video.clientHeight - 54) return;
        event.stopPropagation();
        openMediaModalFromElement(video);
      });
    });

    track.addEventListener("scroll", () => window.requestAnimationFrame(setActiveDot), { passive: true });
    setActiveDot();
  });
}

function openMediaModalFromElement(element) {
  const type = element.dataset.mediaType;
  const src = element.dataset.mediaSrc;
  const poster = element.dataset.mediaPoster || "";
  const title = element.dataset.mediaTitle || "";
  if (!type || !src) return;
  openMediaModal({ type, src, poster, title });
}

function openMediaModal({ type, src, poster = "", title = "" }) {
  document.querySelectorAll("video").forEach(video => video.pause());
  dom.mediaModalBody.innerHTML = type === "video"
    ? `<video class="lightbox-video" controls autoplay playsinline preload="metadata" poster="${poster}"><source src="${src}" type="video/mp4" />${t("videoUnsupported")}</video>`
    : `<img class="lightbox-image" src="${src}" alt="${title || t("photoCaption")}" />`;
  dom.mediaModal.setAttribute("aria-label", title || t("openFullscreen"));
  dom.mediaModal.showModal();
}

function closeMediaModal() {
  dom.mediaModal.querySelectorAll("video").forEach(video => video.pause());
  dom.mediaModal.close();
  dom.mediaModalBody.innerHTML = "";
}

function toggleExercise(workoutId, exerciseId) {
  const workout = state.workouts.find(item => item.id === workoutId);
  const exercise = workout?.exercises?.find(item => item.id === exerciseId);
  if (!workout || !exercise) return;
  const done = isExerciseComplete(workout, exercise);
  setCompletedSets(workoutId, exerciseId, done ? 0 : getExercisePlan(exercise).sets);
  renderWorkoutCards();
  renderActiveWorkout();
  if (dom.stepModal.open) renderStepMode();
  if (!done && state.humorMode) showToast(funPhrase("done"));
  checkWorkoutCompletion(workout);
}

function setExerciseDone(workoutId, exerciseId, done = true) {
  const workout = state.workouts.find(item => item.id === workoutId);
  const exercise = workout?.exercises?.find(item => item.id === exerciseId);
  if (!workout || !exercise) return;
  setCompletedSets(workoutId, exerciseId, done ? getExercisePlan(exercise).sets : 0);
  renderWorkoutCards();
  renderActiveWorkout();
  if (dom.stepModal.open) renderStepMode();
  if (done && state.humorMode) showToast(funPhrase("done"));
  checkWorkoutCompletion(workout);
}

function updateProgress() {
  const workout = getActiveWorkout();
  const { done, total, percent } = workoutSetTotals(workout);

  dom.progressLabel.textContent = t("doneCount", { done, total });
  dom.progressPercent.textContent = `${percent}%`;
  dom.progressFill.style.width = `${percent}%`;
  if (dom.progressJoke) {
    dom.progressJoke.hidden = !state.humorMode;
    dom.progressJoke.textContent = getProgressJoke(percent, done, total);
  }
}

function resetProgress() {
  const workout = getActiveWorkout();
  localStorage.removeItem(progressKey(workout.id));
  Object.keys(DIFFICULTY_OPTIONS).forEach(mode => {
    localStorage.removeItem(`${STORAGE_KEYS.sets}:${workout.id}:${mode}`);
  });
  closeTimer();
  renderWorkoutCards();
  renderActiveWorkout();
  if (dom.stepModal.open) renderStepMode();
}

function openExerciseModal(exerciseId) {
  const workout = getActiveWorkout();
  const exercise = workout.exercises.find(item => item.id === exerciseId);
  if (!exercise) return;

  dom.modalBody.innerHTML = `
    <div class="modal-media">${renderMediaCarousel(exercise, `modal-${exercise.id}`)}</div>
    <span class="eyebrow">${workoutText(workout, "title")}</span>
    <h2>${exerciseText(exercise, "name")}</h2>
    <div class="modal-stats">
${renderPlanStats(exercise)}
    </div>
    <h4>${t("technique")}</h4>
    <p>${exerciseText(exercise, "technique") || t("noTechnique")}</p>
    <h4>${t("note")}</h4>
    <p>${exerciseText(exercise, "coachNote") || t("addNote")}</p>
    ${renderAntonNote(exercise, workout.exercises.findIndex(item => item.id === exercise.id))}
  `;
  dom.modal.showModal();
  initMediaCarousels(dom.modalBody);
}

function closeModal() {
  dom.modal.querySelectorAll("video").forEach(video => video.pause());
  dom.modal.close();
}

function timerStatusText() {
  if (!state.timerVisible) return t("timerNotStarted");
  if (state.timerLeft <= 0) return state.humorMode ? t("timerDoneAnton") : t("timerDone");
  if (state.humorMode && state.timerRunning) {
    if (!state.timerRestPhrase) state.timerRestPhrase = funPhrase("rest");
    return state.timerRestPhrase;
  }
  return state.timerRunning ? t("timerStarted") : t("pause").toLowerCase();
}

function updateTimerFace() {
  const value = formatTime(state.timerLeft);
  const status = timerStatusText();
  const pauseText = state.timerRunning ? t("pause") : t("start");

  const showInlineTimer = state.timerVisible && !dom.stepModal.open;
  dom.inlineRest.hidden = !showInlineTimer;
  dom.inlineTimerValue.textContent = value;
  dom.inlineTimerStatus.textContent = status;
  dom.inlineTimerPause.textContent = pauseText;

  if (dom.stepRestPanel) {
    dom.stepRestPanel.hidden = !state.timerVisible;
    dom.stepTimerValue.textContent = value;
    dom.stepTimerStatus.textContent = status;
    dom.stepTimerPause.textContent = pauseText;
  }
}

function tickTimer() {
  state.timerLeft = Math.max(0, state.timerLeft - 1);
  if (state.humorMode && state.timerRunning && state.timerLeft > 0) {
    state.timerRestPhraseAge += 1;
    if (state.timerRestPhraseAge >= 5 || !state.timerRestPhrase) {
      state.timerRestPhrase = funPhrase("rest");
      state.timerRestPhraseAge = 0;
    }
  }
  updateTimerFace();
  if (state.timerLeft <= 0) {
    pauseTimer();
    state.timerLeft = 0;
    updateTimerFace();
    navigator.vibrate?.([120, 80, 120]);
  }
}

function startTimer(seconds) {
  clearInterval(state.timerId);
  state.timerInitial = Number(seconds) || 60;
  state.timerLeft = state.timerInitial;
  state.timerRunning = true;
  state.timerVisible = true;
  state.timerRestPhrase = state.humorMode ? funPhrase("rest") : "";
  state.timerRestPhraseAge = 0;
  updateTimerFace();
  state.timerId = setInterval(tickTimer, 1000);
}

function pauseTimer() {
  clearInterval(state.timerId);
  state.timerRunning = false;
  updateTimerFace();
}

function resumeTimer() {
  if (state.timerLeft <= 0) state.timerLeft = state.timerInitial || 60;
  clearInterval(state.timerId);
  state.timerRunning = true;
  state.timerVisible = true;
  if (state.humorMode && !state.timerRestPhrase) state.timerRestPhrase = funPhrase("rest");
  state.timerRestPhraseAge = 0;
  updateTimerFace();
  state.timerId = setInterval(tickTimer, 1000);
}

function toggleTimerPause() {
  if (state.timerRunning) pauseTimer();
  else resumeTimer();
}

function resetTimer() {
  clearInterval(state.timerId);
  state.timerLeft = state.timerInitial || 60;
  state.timerRunning = false;
  state.timerVisible = true;
  updateTimerFace();
  dom.inlineTimerStatus.textContent = t("timerResetStatus");
  if (dom.stepTimerStatus) dom.stepTimerStatus.textContent = t("timerResetStatus");
}

function closeTimer() {
  clearInterval(state.timerId);
  state.timerRunning = false;
  state.timerVisible = false;
  state.timerLeft = 0;
  state.timerRestPhrase = "";
  state.timerRestPhraseAge = 0;
  updateTimerFace();
}

function openStepMode() {
  const workout = getActiveWorkout();
  const firstNotDoneIndex = workout.exercises.findIndex(exercise => !isExerciseComplete(workout, exercise));
  state.stepModeIndex = firstNotDoneIndex >= 0 ? firstNotDoneIndex : 0;
  renderStepMode();
  dom.stepModal.showModal();
}

function renderStepMode() {
  const workout = getActiveWorkout();
  const exercise = getCurrentStepExercise();
  if (!exercise) return;
  const plan = getExercisePlan(exercise);
  const completedSets = getCompletedSets(workout, exercise);
  const done = completedSets >= plan.sets;
  const total = workout.exercises.length;
  const number = state.stepModeIndex + 1;
  const percent = total ? Math.round((number / total) * 100) : 0;
  const setPercent = plan.sets ? Math.round((completedSets / plan.sets) * 100) : 0;
  const nextSet = Math.min(completedSets + 1, plan.sets);

  dom.stepMedia.innerHTML = renderMediaCarousel(exercise, `step-${exercise.id}`, String(number).padStart(2, "0"));
  dom.stepWorkoutName.textContent = workoutText(workout, "title");
  dom.stepExerciseName.textContent = exerciseText(exercise, "name");
  dom.stepStats.innerHTML = renderPlanStats(exercise);
  dom.stepProgressText.textContent = t("exerciseNum", { number, total });
  dom.stepProgressFill.style.width = `${percent}%`;
  if (dom.stepSetInfo) dom.stepSetInfo.textContent = done ? t("setComplete") : t("setCurrent", { current: nextSet, total: plan.sets });
  if (dom.stepSetPercent) dom.stepSetPercent.textContent = `${setPercent}%`;
  if (dom.stepSetFill) dom.stepSetFill.style.width = `${setPercent}%`;
  dom.stepTechnique.textContent = exerciseText(exercise, "technique") || t("noTechnique");
  dom.stepCoachNote.textContent = exerciseText(exercise, "coachNote") || t("addNote");
  if (dom.stepAntonNote) {
    dom.stepAntonNote.hidden = !state.humorMode;
    dom.stepAntonNote.innerHTML = `<strong>${isZh() ? "安东模式" : "Антон-mode"}:</strong> ${getAntonNote(exercise, state.stepModeIndex)}`;
  }
  dom.stepPrev.disabled = state.stepModeIndex === 0;
  dom.stepNext.textContent = state.stepModeIndex === total - 1 ? (state.humorMode ? t("closeQuarter") : t("list")) : t("next");
  dom.stepDone.textContent = done ? t("doneMark") : (completedSets >= plan.sets - 1 ? t("finishExercise") : t("setDoneRest"));
  dom.stepDone.classList.toggle("is-done", done);
  initMediaCarousels(dom.stepMedia);
  updateTimerFace();
}

function closeStepMode() {
  dom.stepModal.querySelectorAll("video").forEach(video => video.pause());
  dom.stepModal.close();
}

function stepPrev() {
  state.stepModeIndex = Math.max(0, state.stepModeIndex - 1);
  renderStepMode();
}

function stepNext() {
  const workout = getActiveWorkout();
  if (state.stepModeIndex >= workout.exercises.length - 1) {
    closeStepMode();
    dom.activePanel.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  state.stepModeIndex += 1;
  renderStepMode();
}

function stepDone() {
  const workout = getActiveWorkout();
  const exercise = getCurrentStepExercise();
  if (!exercise) return;
  const plan = getExercisePlan(exercise);
  const completedSets = getCompletedSets(workout, exercise);

  if (completedSets >= plan.sets) {
    showToast(isZh() ? "这个动作已经完成。" : "Это упражнение уже закрыто.");
    return;
  }

  const nextCount = completedSets + 1;
  setCompletedSets(workout.id, exercise.id, nextCount);
  renderWorkoutCards();
  renderActiveWorkout();

  if (nextCount < plan.sets) {
    startTimer(plan.rest);
    showToast(t("setCount", { done: nextCount, total: plan.sets }));
  } else {
    closeTimer();
    if (state.humorMode) showToast(funPhrase("done"));
    checkWorkoutCompletion(workout);
  }

  if (dom.stepModal.open) renderStepMode();
}

function stepRest() {
  const exercise = getCurrentStepExercise();
  startTimer(getExercisePlan(exercise).rest);
}

function renderEditor() {
  dom.editorWorkoutSelect.innerHTML = state.workouts.map(workout => `
    <option value="${workout.id}" ${workout.id === state.activeWorkoutId ? "selected" : ""}>${workoutText(workout, "title")}</option>
  `).join("");

  const workout = getActiveWorkout();
  dom.editorTitle.value = workout.title || "";
  dom.editorSubtitle.value = workout.subtitle || "";
  dom.editorLevel.value = workout.level || "";
  dom.editorDuration.value = workout.duration || "";
  dom.editorAccent.value = workout.accent || "lime";
  dom.editorDescription.value = workout.description || "";

  dom.editorExerciseList.innerHTML = workout.exercises.map((exercise, index) => `
    <details class="editor-exercise" data-index="${index}">
      <summary>
        <span>${String(index + 1).padStart(2, "0")} · ${exerciseText(exercise, "name") || t("newExercise")}</span>
        <button class="delete-exercise" type="button" data-index="${index}">${t("delete")}</button>
      </summary>
      <div class="editor-exercise-fields">
        <label>${t("title")} <input data-field="name" value="${escapeAttr(exercise.name)}" /></label>
        <label>${t("sets")} <input data-field="sets" type="number" min="1" value="${exercise.sets || 3}" /></label>
        <label>${t("reps")} <input data-field="reps" value="${escapeAttr(exercise.reps)}" /></label>
        <label>${t("restSec")} <input data-field="rest" type="number" min="15" step="5" value="${exercise.rest || 60}" /></label>
        ${renderDifficultyEditor(exercise)}
        <label>${t("photo")} <input data-field="image" value="${escapeAttr(exercise.image || "assets/placeholder.svg")}" /></label>
        <label>${t("video")} <input data-field="video" value="${escapeAttr(exercise.video || "assets/placeholder-video.mp4")}" /></label>
        <label class="full-field">${t("technique")} <textarea data-field="technique" rows="3">${escapeHtml(exercise.technique || "")}</textarea></label>
        <label class="full-field">${t("note")} <textarea data-field="coachNote" rows="2">${escapeHtml(exercise.coachNote || "")}</textarea></label>
        <button class="secondary-btn compact save-exercise" type="button" data-index="${index}">${t("saveExercise")}</button>
      </div>
    </details>
  `).join("");
}

function renderDifficultyEditor(exercise) {
  const easy = getExercisePlan(exercise, "easy");
  const normal = getExercisePlan(exercise, "normal");
  const hard = getExercisePlan(exercise, "hard");
  return `
    <div class="difficulty-editor full-field">
      <strong>${t("difficultyTitle")}</strong>
      <small>${isZh() ? "可以保留自动数值，也可以手动设置。" : "Можно оставить автозначения или прописать вручную."}</small>
      <div class="difficulty-editor-grid">
        <label>${difficultyOption("easy").label} · ${t("sets")} <input data-difficulty-field="easy.sets" type="number" min="1" value="${easy.sets}" /></label>
        <label>${difficultyOption("easy").label} · ${t("reps")} <input data-difficulty-field="easy.reps" value="${escapeAttr(easy.reps)}" /></label>
        <label>${difficultyOption("easy").label} · ${t("rest")} <input data-difficulty-field="easy.rest" type="number" min="15" step="5" value="${easy.rest}" /></label>
        <label>${difficultyOption("normal").label} · ${t("sets")} <input data-difficulty-field="normal.sets" type="number" min="1" value="${normal.sets}" /></label>
        <label>${difficultyOption("normal").label} · ${t("reps")} <input data-difficulty-field="normal.reps" value="${escapeAttr(normal.reps)}" /></label>
        <label>${difficultyOption("normal").label} · ${t("rest")} <input data-difficulty-field="normal.rest" type="number" min="15" step="5" value="${normal.rest}" /></label>
        <label>${difficultyOption("hard").label} · ${t("sets")} <input data-difficulty-field="hard.sets" type="number" min="1" value="${hard.sets}" /></label>
        <label>${difficultyOption("hard").label} · ${t("reps")} <input data-difficulty-field="hard.reps" value="${escapeAttr(hard.reps)}" /></label>
        <label>${difficultyOption("hard").label} · ${t("rest")} <input data-difficulty-field="hard.rest" type="number" min="15" step="5" value="${hard.rest}" /></label>
      </div>
    </div>
  `;
}

function escapeHtml(value = "") {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function escapeAttr(value = "") {
  return escapeHtml(value).replaceAll('"', "&quot;");
}

function makeSlug(text) {
  return String(text || "exercise")
    .toLowerCase()
    .trim()
    .replace(/[^a-zа-яё0-9]+/gi, "-")
    .replace(/(^-|-$)/g, "") || `exercise-${Date.now()}`;
}

function toggleEditor() {
  state.editorOpen = !state.editorOpen;
  dom.editorPanel.hidden = !state.editorOpen;
  dom.editorBtn.textContent = state.editorOpen ? t("closeEditor") : t("editor");
  if (state.editorOpen) {
    renderEditor();
    dom.editorPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function saveWorkoutFromEditor(event) {
  event.preventDefault();
  const workout = getActiveWorkout();
  workout.title = dom.editorTitle.value.trim() || t("newWorkout");
  workout.subtitle = dom.editorSubtitle.value.trim();
  workout.level = dom.editorLevel.value.trim();
  workout.duration = dom.editorDuration.value.trim();
  workout.accent = dom.editorAccent.value;
  workout.description = dom.editorDescription.value.trim();
  saveWorkouts();
  renderWorkoutCards();
  renderActiveWorkout();
  renderEditor();
}

function saveExercise(index) {
  const workout = getActiveWorkout();
  const block = dom.editorExerciseList.querySelector(`[data-index="${index}"]`);
  if (!block || !workout.exercises[index]) return;
  const exercise = workout.exercises[index];
  block.querySelectorAll("[data-field]").forEach(input => {
    const field = input.dataset.field;
    const value = input.value.trim();
    if (field === "sets" || field === "rest") exercise[field] = Number(value) || (field === "sets" ? 3 : 60);
    else exercise[field] = value;
  });
  exercise.difficulty = { easy: {}, normal: {}, hard: {} };
  block.querySelectorAll("[data-difficulty-field]").forEach(input => {
    const [mode, field] = input.dataset.difficultyField.split(".");
    if (!exercise.difficulty[mode]) exercise.difficulty[mode] = {};
    const value = input.value.trim();
    exercise.difficulty[mode][field] = field === "sets" || field === "rest" ? Number(value) || undefined : value;
  });
  exercise.id = exercise.id || makeSlug(exercise.name);
  saveWorkouts();
  renderWorkoutCards();
  renderActiveWorkout();
  renderEditor();
}

function addExercise() {
  const workout = getActiveWorkout();
  const id = `exercise-${Date.now()}`;
  workout.exercises.push({
    id,
    name: t("newExercise"),
    sets: 3,
    reps: "12–15",
    rest: 60,
    difficulty: {
      easy: { sets: 2, reps: "10–12", rest: 75 },
      normal: { sets: 3, reps: "12–15", rest: 60 },
      hard: { sets: 4, reps: "15–18", rest: 50 }
    },
    image: "assets/placeholder.svg",
    video: "assets/placeholder-video.mp4",
    technique: t("describeTechnique"),
    coachNote: t("addFriendNote")
  });
  saveWorkouts();
  renderWorkoutCards();
  renderActiveWorkout();
  renderEditor();
}

function deleteExercise(index) {
  const workout = getActiveWorkout();
  workout.exercises.splice(index, 1);
  saveWorkouts();
  renderWorkoutCards();
  renderActiveWorkout();
  renderEditor();
}

function exportData() {
  const text = JSON.stringify(state.workouts, null, 2);
  navigator.clipboard?.writeText(text);
  dom.exportDataBtn.textContent = "JSON скопирован";
  setTimeout(() => dom.exportDataBtn.textContent = "Экспорт JSON", 1600);
}

function toggleImportPanel() {
  dom.importPanel.hidden = !dom.importPanel.hidden;
  dom.importToggleBtn.textContent = dom.importPanel.hidden ? "Импорт JSON" : "Закрыть импорт";
  if (!dom.importPanel.hidden) dom.importPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function normalizeImportedWorkouts(raw) {
  if (!Array.isArray(raw) || !raw.length) {
    throw new Error("JSON должен быть массивом тренировок");
  }

  return raw.map((workout, workoutIndex) => {
    const title = String(workout.title || `Тренировка ${workoutIndex + 1}`).trim();
    const workoutId = String(workout.id || makeSlug(title) || `workout-${Date.now()}-${workoutIndex}`).trim();
    const exercises = Array.isArray(workout.exercises) ? workout.exercises : [];

    return {
      id: workoutId,
      title,
      subtitle: String(workout.subtitle || "Тренировка").trim(),
      level: String(workout.level || "Средний").trim(),
      duration: String(workout.duration || "45–60 мин").trim(),
      accent: ACCENT_MAP[workout.accent] ? workout.accent : "lime",
      description: String(workout.description || "").trim(),
      exercises: exercises.map((exercise, exerciseIndex) => {
        const name = String(exercise.name || `Упражнение ${exerciseIndex + 1}`).trim();
        return {
          id: String(exercise.id || `${workoutId}-${makeSlug(name)}-${exerciseIndex}`).trim(),
          name,
          sets: Number(exercise.sets) || 3,
          reps: String(exercise.reps || "12–15").trim(),
          rest: Number(exercise.rest) || 60,
          difficulty: exercise.difficulty && typeof exercise.difficulty === "object" ? exercise.difficulty : undefined,
          image: String(exercise.image || "assets/placeholder.svg").trim(),
          video: String(exercise.video || "assets/placeholder-video.mp4").trim(),
          technique: String(exercise.technique || "").trim(),
          coachNote: String(exercise.coachNote || "").trim()
        };
      })
    };
  });
}

function applyImportedText(text) {
  try {
    const parsed = JSON.parse(text);
    const imported = normalizeImportedWorkouts(parsed);

    if (!confirm(`Импортировать ${imported.length} тренировок? Текущий список тренировок будет заменён.`)) return;

    state.workouts = imported;
    saveWorkouts();
    state.activeWorkoutId = state.workouts[0].id;
    state.stepModeIndex = 0;
    localStorage.setItem(STORAGE_KEYS.lastWorkout, state.activeWorkoutId);
    closeTimer();
    renderWorkoutCards();
    renderActiveWorkout();
    renderEditor();
    dom.importStatus.textContent = "Готово: тренировки импортированы";
    dom.importJsonInput.value = "";
  } catch (error) {
    dom.importStatus.textContent = `Ошибка: ${error.message}`;
  }
}

function importData() {
  const text = dom.importJsonInput.value.trim();
  if (!text) {
    dom.importStatus.textContent = "Сначала вставь JSON или выбери файл";
    return;
  }
  applyImportedText(text);
}

function chooseImportFile() {
  dom.importFileInput.click();
}

function readImportFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    dom.importJsonInput.value = String(reader.result || "");
    dom.importStatus.textContent = `Файл выбран: ${file.name}`;
  };
  reader.onerror = () => {
    dom.importStatus.textContent = "Не получилось прочитать файл";
  };
  reader.readAsText(file);
  event.target.value = "";
}

function resetData() {
  if (!confirm(t("restoreConfirm"))) return;
  state.workouts = structuredClone(defaultWorkouts);
  localStorage.removeItem(STORAGE_KEYS.workouts);
  state.activeWorkoutId = state.workouts[0].id;
  localStorage.setItem(STORAGE_KEYS.lastWorkout, state.activeWorkoutId);
  renderWorkoutCards();
  renderActiveWorkout();
  renderEditor();
}


function setText(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.textContent = value;
}

function applyLanguageStaticText() {
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : "ru";
  if (dom.languageToggle) {
    dom.languageToggle.textContent = t("langButton");
    dom.languageToggle.setAttribute("aria-pressed", String(isZh()));
  }
  if (dom.continueBtn) dom.continueBtn.textContent = t("continue");
  if (dom.todayStartBtn) dom.todayStartBtn.textContent = t("startWorkout");
  if (dom.todayStepBtn) dom.todayStepBtn.textContent = t("stepStart");
  if (dom.scrollToWorkoutsBtn) dom.scrollToWorkoutsBtn.textContent = t("allWorkouts");
  if (dom.backToWorkoutsBtn) dom.backToWorkoutsBtn.textContent = t("back");
  if (dom.editorBtn) dom.editorBtn.textContent = state.editorOpen ? t("closeEditor") : t("editor");
  if (dom.resetProgressBtn) dom.resetProgressBtn.textContent = t("resetProgress");
  if (dom.stepModeBtn) dom.stepModeBtn.textContent = t("stepMode");
  if (dom.inlineTimerReset) dom.inlineTimerReset.textContent = t("reset");
  if (dom.inlineTimerClose) dom.inlineTimerClose.textContent = t("close");
  if (dom.stepTimerReset) dom.stepTimerReset.textContent = t("reset");
  if (dom.stepTimerClose) dom.stepTimerClose.textContent = t("close");
  if (dom.stepPrev) dom.stepPrev.textContent = t("previous");
  if (dom.stepRest) dom.stepRest.textContent = t("launchRest");
  if (dom.bonusBtn) dom.bonusBtn.textContent = t("bonus");
  if (dom.excuseBtn) dom.excuseBtn.textContent = t("excuse");
  if (dom.humorToggle) dom.humorToggle.textContent = state.humorMode ? t("humorOn") : t("humorOff");

  setText(".today-main .eyebrow", t("todayTrain"));
  setText(".today-progress-ring span", t("ready"));
  setText(".home-strip .eyebrow", t("quickChoice"));
  setText(".home-strip h2", t("chooseDay"));
  setText("#workouts .eyebrow", t("presets"));
  setText("#workouts h2", t("workoutChoice"));
  setText("#workouts p", t("workoutsHint"));
  setText(".active-header .eyebrow", t("currentWorkout"));
  setText(".difficulty-control .eyebrow", t("mood"));
  setText(".difficulty-control h3", t("difficultyTitle"));
  setText("#inlineRest .eyebrow", t("restTimer"));
  setText(".editor-head .eyebrow", t("editor"));
  setText(".editor-head h3", t("editorTitle"));
  setText(".editor-head p", t("editorDesc"));
  setText(".exercise-editor-head h4", t("exercises"));
  if (dom.addExerciseBtn) dom.addExerciseBtn.textContent = t("add");
  if (dom.resetDataBtn) dom.resetDataBtn.textContent = t("restoreDemo");
  const saveWorkoutButton = dom.workoutForm?.querySelector('button[type="submit"]');
  if (saveWorkoutButton) saveWorkoutButton.textContent = t("saveWorkout");
  setText(".victory-card .eyebrow", t("planClosed"));
  setText(".victory-card h2", t("victoryTitle"));
  setText(".victory-card p", t("victoryText"));
  setText("#stepModal .step-content h4:nth-of-type(1)", t("technique"));
  setText("#stepModal .step-content h4:nth-of-type(2)", t("note"));
}

function setLanguage(language) {
  state.language = language === "zh" ? "zh" : "ru";
  localStorage.setItem(STORAGE_KEYS.language, state.language);
  applyLanguageStaticText();
  setHumorMode(state.humorMode);
  renderDifficultyTabs();
  renderWorkoutCards();
  renderActiveWorkout();
  if (state.editorOpen) renderEditor();
  if (dom.stepModal.open) renderStepMode();
  updateTimerFace();
  updateHomeDashboard();
}

function toggleLanguage() {
  setLanguage(state.language === "zh" ? "ru" : "zh");
  showToast(state.language === "zh" ? "中文模式已开启：安东开始学习。" : "Русский язык включён.");
}

function applySavedTheme() {
  const theme = localStorage.getItem(STORAGE_KEYS.theme) || "dark";
  document.documentElement.dataset.theme = theme;
  dom.themeToggle.querySelector(".theme-icon").textContent = theme === "dark" ? "🌙" : "☀️";
}

function toggleTheme() {
  const current = document.documentElement.dataset.theme || "dark";
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem(STORAGE_KEYS.theme, next);
  dom.themeToggle.querySelector(".theme-icon").textContent = next === "dark" ? "🌙" : "☀️";
}

function init() {
  applySavedTheme();
  applyLanguageStaticText();
  setHumorMode(state.humorMode);
  renderDifficultyTabs();
  renderWorkoutCards();
  renderActiveWorkout();
  updateTimerFace();
  showWorkoutMenu(false);

  dom.difficultyTabs?.addEventListener("click", event => {
    const button = event.target.closest("[data-difficulty]");
    if (button) setDifficulty(button.dataset.difficulty);
  });
  dom.resetProgressBtn.addEventListener("click", resetProgress);
  dom.backToWorkoutsBtn.addEventListener("click", () => showWorkoutMenu(true));
  dom.continueBtn.addEventListener("click", () => selectWorkout(state.activeWorkoutId));
  dom.todayStartBtn?.addEventListener("click", () => selectWorkout(state.activeWorkoutId));
  dom.todayStepBtn?.addEventListener("click", () => {
    selectWorkout(state.activeWorkoutId, false);
    openStepMode();
  });
  dom.scrollToWorkoutsBtn?.addEventListener("click", () => dom.workoutsHead.scrollIntoView({ behavior: "smooth", block: "start" }));
  dom.stepModeBtn.addEventListener("click", openStepMode);
  dom.editorBtn.addEventListener("click", toggleEditor);
  dom.workoutForm.addEventListener("submit", saveWorkoutFromEditor);
  dom.editorWorkoutSelect.addEventListener("change", () => selectWorkout(dom.editorWorkoutSelect.value, false));
  dom.addExerciseBtn.addEventListener("click", addExercise);
  dom.exportDataBtn.addEventListener("click", exportData);
  dom.importToggleBtn.addEventListener("click", toggleImportPanel);
  dom.chooseImportFileBtn.addEventListener("click", chooseImportFile);
  dom.importFileInput.addEventListener("change", readImportFile);
  dom.applyImportBtn.addEventListener("click", importData);
  dom.resetDataBtn.addEventListener("click", resetData);
  dom.editorExerciseList.addEventListener("click", event => {
    const deleteBtn = event.target.closest(".delete-exercise");
    const saveBtn = event.target.closest(".save-exercise");
    if (deleteBtn) {
      event.preventDefault();
      deleteExercise(Number(deleteBtn.dataset.index));
    }
    if (saveBtn) {
      event.preventDefault();
      saveExercise(Number(saveBtn.dataset.index));
    }
  });
  dom.modalClose.addEventListener("click", closeModal);
  dom.mediaModalClose.addEventListener("click", closeMediaModal);
  dom.stepClose.addEventListener("click", closeStepMode);
  dom.stepPrev.addEventListener("click", stepPrev);
  dom.stepNext.addEventListener("click", stepNext);
  dom.stepDone.addEventListener("click", stepDone);
  dom.stepRest.addEventListener("click", stepRest);
  dom.humorToggle.addEventListener("click", toggleHumorMode);
  dom.excuseBtn.addEventListener("click", showExcuse);
  dom.victoryClose.addEventListener("click", () => dom.victoryModal.close());
  dom.bonusBtn.addEventListener("click", () => showToast(`${funPhrase("bonus")} ${funPhrase("rank")}`));
  dom.inlineTimerPause.addEventListener("click", toggleTimerPause);
  dom.inlineTimerReset.addEventListener("click", resetTimer);
  dom.inlineTimerClose.addEventListener("click", closeTimer);
  dom.stepTimerPause.addEventListener("click", toggleTimerPause);
  dom.stepTimerReset.addEventListener("click", resetTimer);
  dom.stepTimerClose.addEventListener("click", closeTimer);
  dom.themeToggle.addEventListener("click", toggleTheme);
  dom.languageToggle?.addEventListener("click", toggleLanguage);

  dom.modal.addEventListener("click", event => {
    if (event.target === dom.modal) closeModal();
  });
  dom.mediaModal.addEventListener("click", event => {
    if (event.target === dom.mediaModal) closeMediaModal();
  });
  dom.stepModal.addEventListener("click", event => {
    if (event.target === dom.stepModal) closeStepMode();
  });
  dom.victoryModal.addEventListener("click", event => {
    if (event.target === dom.victoryModal) dom.victoryModal.close();
  });
}

init();
