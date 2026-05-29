// Здесь редактируются тренировки.
// Фото и видео можно заменить на свои файлы из папки assets.
// Пример: image: "assets/leg-press.jpg", video: "assets/leg-press.mp4"

const workouts = [
  {
    id: "legs",
    title: "День ног",
    subtitle: "Ноги + ягодицы",
    level: "Средний",
    accent: "lime",
    duration: "55–70 мин",
    description: "Силовая тренировка на ноги, ягодицы и общую выносливость.",
    exercises: [
      {
        id: "leg-press",
        name: "Жим ногами",
        sets: 5,
        reps: "20",
        rest: 90,
        image: "assets/zhim_lezha_ph.png",
        video: "assets/Жим_платформы_ногами_Техника_выполнения.mp4",
        technique: "Поставь стопы на платформу на ширине плеч. Опускай платформу подконтрольно, колени веди по линии носков, таз не отрывай от сиденья.",
        coachNote: "Не выпрямляй колени в замок в верхней точке. Держи постоянное напряжение."
      },
      {
        id: "goblet-squat",
        name: "Присед с гантелью",
        sets: 4,
        reps: "15–20",
        rest: 75,
        image: "assets/присяд с гантелями фото.png",
        video: "assets/placeholder-video.mp4",
        technique: "Держи гантель у груди, спина нейтральная. Садись вниз до комфортной глубины, пятки не отрывай.",
        coachNote: "Темп: 2 секунды вниз, короткая пауза, мощный подъём вверх."
      },
      {
        id: "romanian-deadlift",
        name: "Румынская тяга",
        sets: 4,
        reps: "12–15",
        rest: 90,
        image: "assets/румынская тяга.png",
        video: "assets/placeholder-video.mp4",
        technique: "Отводи таз назад, колени слегка согнуты. Гриф или гантели двигаются вдоль ног, спина ровная.",
        coachNote: "Думай не о наклоне корпуса, а о движении таза назад."
      },
      {
        id: "lunges",
        name: "Выпады назад",
        sets: 4,
        reps: "12 на каждую",
        rest: 75,
        image: "assets/выпады назад.png",
        video: "assets/placeholder-video.mp4",
        technique: "Шагни назад, опусти колено к полу, корпус держи стабильно. Возвращайся через пятку передней ноги.",
        coachNote: "Не заваливай колено внутрь. Работай плавно и без рывков."
      },
      {
        id: "calf-raises",
        name: "Подъёмы на икры",
        sets: 5,
        reps: "18–25",
        rest: 60,
        image: "assets/подъемы на икры.png",
        video: "assets/placeholder-video.mp4",
        technique: "Поднимайся максимально высоко на носки, внизу делай мягкую растяжку икроножных.",
        coachNote: "Не пружинь. Полная амплитуда важнее веса."
      },
      {
        id: "plank",
        name: "Планка",
        sets: 3,
        reps: "40–60 сек",
        rest: 60,
        image: "assets/планка.png",
        video: "assets/placeholder-video.mp4",
        technique: "Локти под плечами, живот подтянут, поясница не провисает.",
        coachNote: "Завершение тренировки: стабилизируй корпус и дыхание."
      }
    ]
  },
  {
    id: "chest-triceps",
    title: "Грудь + трицепс",
    subtitle: "Жимовой день",
    level: "Средний",
    accent: "orange",
    duration: "50–65 мин",
    description: "Жимовые движения, грудные мышцы, трицепс и контроль техники.",
    exercises: [
      { id: "bench-press", name: "Жим лёжа", sets: 4, reps: "8–12", rest: 120, image: "assets/Жим лёжа.png", video: "assets/placeholder-video.mp4", technique: "Лопатки сведены, стопы стоят плотно, штангу опускай к нижней части груди.", coachNote: "Не отбивай штангу от груди. Контроль важнее веса." },
      { id: "incline-db-press", name: "Жим гантелей под углом", sets: 4, reps: "10–12", rest: 90, image: "assets/Жим гантелей под углом.png", video: "assets/placeholder-video.mp4", technique: "Скамья 25–35 градусов. Опускай гантели до комфортной глубины, локти не уводи слишком широко.", coachNote: "Вверху не стукай гантели друг о друга." },
      { id: "cable-fly", name: "Сведение рук в кроссовере", sets: 3, reps: "14–18", rest: 60, image: "assets/Сведение рук в кроссовере.png", video: "assets/placeholder-video.mp4", technique: "Лёгкий наклон вперёд, руки немного согнуты. Своди руки перед грудью, чувствуя растяжение.", coachNote: "Это не силовое упражнение. Работай чисто." },
      { id: "dips", name: "Отжимания на брусьях", sets: 3, reps: "максимум", rest: 90, image: "assets/Отжимания на брусьях.png", video: "assets/placeholder-video.mp4", technique: "Корпус слегка вперёд, опускайся подконтрольно, плечи не задирай.", coachNote: "Если тяжело — используй резину или тренажёр с противовесом." },
      { id: "triceps-rope", name: "Разгибание на блоке", sets: 4, reps: "12–15", rest: 60, image: "assets/Разгибание на блоке.png", video: "assets/placeholder-video.mp4", technique: "Локти прижаты к корпусу. Внизу разводи канат в стороны и полностью сокращай трицепс.", coachNote: "Плечо неподвижно, работает только предплечье." }
    ]
  },
  {
    id: "back-biceps",
    title: "Спина + бицепс",
    subtitle: "Тяговой день",
    level: "Средний",
    accent: "blue",
    duration: "55–70 мин",
    description: "Развитие ширины спины, силы тяги и аккуратная работа на бицепс.",
    exercises: [
      { id: "pullups", name: "Подтягивания / тяга верхнего блока", sets: 4, reps: "8–12", rest: 100, image: "assets/тяга верхнего блока.png", video: "assets/placeholder-video.mp4", technique: "Тяни локти вниз, грудь направляй к перекладине или рукояти. Не раскачивайся.", coachNote: "Думай о работе спины, а не рук." },
      { id: "barbell-row", name: "Тяга штанги в наклоне", sets: 4, reps: "8–12", rest: 110, image: "assets/Тяга штанги в наклоне.png", video: "assets/placeholder-video.mp4", technique: "Корпус наклонён, спина ровная. Тяни штангу к низу живота.", coachNote: "Не превращай тягу в рывок корпусом." },
      { id: "seated-row", name: "Горизонтальная тяга", sets: 4, reps: "12–15", rest: 80, image: "assets/Горизонтальная тяга.png", video: "assets/placeholder-video.mp4", technique: "Сначала сведи лопатки, потом тяни рукоять. Возвращай вес плавно.", coachNote: "В пиковой точке сделай паузу на 1 секунду." },
      { id: "face-pull", name: "Тяга к лицу", sets: 3, reps: "15–20", rest: 60, image: "assets/Тяга к лицу.png", video: "assets/placeholder-video.mp4", technique: "Тяни канат к лицу, локти высоко, лопатки назад и вниз.", coachNote: "Отлично для плеч и осанки. Не гони вес." },
      { id: "db-curl", name: "Подъём гантелей на бицепс", sets: 4, reps: "10–14", rest: 60, image: "assets/Подъём гантелей на бицепс.png", video: "assets/placeholder-video.mp4", technique: "Локти рядом с корпусом, поднимай гантели без раскачки.", coachNote: "Внизу полностью контролируй опускание." }
    ]
  },
  {
    id: "shoulders",
    title: "Плечи",
    subtitle: "Дельты + стабилизация",
    level: "Лёгкий / средний",
    accent: "purple",
    duration: "40–55 мин",
    description: "Акцент на средние и задние дельты, жим и здоровье плечевого пояса.",
    exercises: [
      { id: "shoulder-press", name: "Жим гантелей сидя", sets: 4, reps: "8–12", rest: 90, image: "assets/Жим гантелей сидя.png", video: "assets/placeholder-video.mp4", technique: "Сиди ровно, пресс напряжён. Жми гантели вверх по дуге без резкого замка в локтях.", coachNote: "Не прогибай поясницу. Вес должен быть управляемым." },
      { id: "lateral-raise", name: "Махи гантелями в стороны", sets: 5, reps: "12–20", rest: 60, image: "assets/Махи гантелями в стороны.png", video: "assets/placeholder-video.mp4", technique: "Локти чуть согнуты, поднимай руки до уровня плеч, кисти не задирай.", coachNote: "Маленький вес, чистая техника, жжение в дельтах." },
      { id: "rear-delt", name: "Разведение на заднюю дельту", sets: 4, reps: "15–20", rest: 60, image: "assets/Разведение на заднюю дельту.png", video: "assets/placeholder-video.mp4", technique: "Корпус наклонён, руки разводи в стороны, не своди движение к трапециям.", coachNote: "Делай паузу в верхней точке." },
      { id: "arnold-press", name: "Жим Арнольда", sets: 3, reps: "10–12", rest: 75, image: "assets/Жим Арнольда.png", video: "assets/placeholder-video.mp4", technique: "Начинай с гантелями перед собой, разворачивай кисти и жми вверх.", coachNote: "Не спеши. Упражнение требует контроля." },
      { id: "external-rotation", name: "Внешняя ротация плеча", sets: 3, reps: "15 на сторону", rest: 45, image: "assets/Внешняя ротация плеча.png", video: "assets/placeholder-video.mp4", technique: "Локоть прижат, вращай плечо наружу с резиной или лёгким блоком.", coachNote: "Профилактика травм. Вес минимальный." }
    ]
  },
  {
    id: "fullbody",
    title: "Фулбоди",
    subtitle: "Всё тело",
    level: "Универсальный",
    accent: "red",
    duration: "45–60 мин",
    description: "Сбалансированная тренировка на всё тело, когда нужно быстро и эффективно.",
    exercises: [
      { id: "squat", name: "Присед", sets: 4, reps: "10–12", rest: 100, image: "assets/Присед.png", video: "assets/placeholder-video.mp4", technique: "Стопы устойчиво, корпус собран, приседай с контролем глубины.", coachNote: "Разминка обязательна. Не теряй спину." },
      { id: "pushups", name: "Отжимания", sets: 4, reps: "12–20", rest: 70, image: "assets/Отжимания.png", video: "assets/placeholder-video.mp4", technique: "Тело одной линией, локти под контролем, грудь к полу.", coachNote: "Можно усложнить постановкой ног на возвышение." },
      { id: "one-arm-row", name: "Тяга гантели одной рукой", sets: 4, reps: "12 на сторону", rest: 80, image: "assets/Тяга гантели одной рукой.png", video: "assets/placeholder-video.mp4", technique: "Опора на скамью, спина ровная. Тяни локоть назад к тазу.", coachNote: "Не разворачивай корпус слишком сильно." },
      { id: "hip-thrust", name: "Ягодичный мост", sets: 4, reps: "12–15", rest: 80, image: "assets/Ягодичный мост.png", video: "assets/placeholder-video.mp4", technique: "Лопатки на опоре, стопы под коленями. Вверху сожми ягодицы.", coachNote: "Поясницей не прогибайся." },
      { id: "farmer-walk", name: "Фермерская прогулка", sets: 3, reps: "30–45 сек", rest: 70, image: "assets/Фермерская прогулка.png", video: "assets/placeholder-video.mp4", technique: "Возьми тяжёлые гантели, иди ровно, плечи назад, корпус стабилен.", coachNote: "Сильный корпус и хват — бонус к любой тренировке." }
    ]
  }
];
