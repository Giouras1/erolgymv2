const PLATE_STYLES = {
  2.5: { color: "#45cce1", height: 96, width: 24 },
  1.25: { color: "#ff6b4a", height: 62, width: 17 },
  0.5: { color: "#d8ff3e", height: 46, width: 13 },
};

const createExercise = ({
  name,
  query = name,
  target,
  equipment = "Adjustable dumbbells",
  sets = 3,
  reps = "10-12",
  rest = 60,
  load = 7,
  plates = [1.25, 1.25],
  cues,
}) => ({ name, query, target, equipment, sets, reps, rest, load, plates, cues });

const workouts = [
  {
    id: "push-alpha",
    name: "Push Workout - Alpha",
    family: "Push",
    focus: "Chest strength",
    duration: 42,
    level: "Foundation",
    accent: "#d8ff3e",
    description: "A steady dumbbell session built around horizontal pressing, shoulder control, and clean triceps work.",
    exercises: [
      createExercise({
        name: "Dumbbell Floor Press",
        query: "dumbbell floor press",
        target: "Chest",
        sets: 4,
        reps: "8-10",
        rest: 75,
        load: 12,
        plates: [2.5, 2.5],
        cues: ["Keep elbows about 45 degrees from the torso.", "Pause lightly when the upper arms touch the floor.", "Drive both dumbbells up at the same speed."],
      }),
      createExercise({
        name: "Seated Dumbbell Press",
        query: "dumbbell seated shoulder press",
        target: "Shoulders",
        sets: 3,
        reps: "10",
        rest: 60,
        load: 7,
        plates: [1.25, 1.25],
        cues: ["Brace your ribs down before pressing.", "Finish with the dumbbells over the shoulders.", "Lower under control to ear height."],
      }),
      createExercise({
        name: "Dumbbell Squeeze Press",
        query: "dumbbell squeeze bench press",
        target: "Chest",
        sets: 3,
        reps: "12",
        rest: 60,
        load: 7,
        plates: [1.25, 1.25],
        cues: ["Press the dumbbells firmly together.", "Keep the squeeze through the entire repetition.", "Move slowly through the bottom half."],
      }),
      createExercise({
        name: "Lateral Raise",
        query: "dumbbell lateral raise",
        target: "Side delts",
        sets: 3,
        reps: "12-15",
        rest: 45,
        load: 4.5,
        plates: [1.25],
        cues: ["Lead with the elbows, not the hands.", "Stop around shoulder height.", "Keep the torso still and lower slowly."],
      }),
      createExercise({
        name: "Overhead Triceps Extension",
        query: "dumbbell standing triceps extension",
        target: "Triceps",
        equipment: "One dumbbell",
        sets: 3,
        reps: "12",
        rest: 45,
        load: 9.5,
        plates: [2.5, 1.25],
        cues: ["Keep elbows pointing forward.", "Let the forearms travel without arching the back.", "Reach tall at lockout."],
      }),
    ],
  },
  {
    id: "push-bravo",
    name: "Push Workout - Bravo",
    family: "Push",
    focus: "Shoulder volume",
    duration: 38,
    level: "Controlled",
    accent: "#45cce1",
    description: "Shoulder-led pressing with lighter chest volume and deliberate tempo for crisp, repeatable reps.",
    exercises: [
      createExercise({ name: "Arnold Press", query: "dumbbell arnold press", target: "Shoulders", sets: 4, reps: "8", rest: 75, load: 7, plates: [1.25, 1.25], cues: ["Rotate smoothly as you press.", "Keep the lower back quiet.", "Bring the elbows forward at the bottom."] }),
      createExercise({ name: "Neutral-Grip Floor Press", query: "dumbbell floor press neutral grip", target: "Chest / triceps", sets: 3, reps: "10", rest: 60, load: 12, plates: [2.5, 2.5], cues: ["Keep palms facing each other.", "Touch the floor softly with the upper arms.", "Press without letting the dumbbells drift apart."] }),
      createExercise({ name: "Front Raise", query: "dumbbell front raise", target: "Front delts", sets: 3, reps: "12", rest: 45, load: 4.5, plates: [1.25], cues: ["Lift only to shoulder height.", "Keep a soft bend in the elbow.", "Lower for a full two-count."] }),
      createExercise({ name: "Dumbbell Tate Press", query: "dumbbell tate press", target: "Triceps", sets: 3, reps: "10-12", rest: 60, load: 7, plates: [1.25, 1.25], cues: ["Point the elbows outward.", "Bring the dumbbells toward the center of the chest.", "Straighten the arms without moving the upper arms." ] }),
      createExercise({ name: "Lateral Raise Hold", query: "dumbbell lateral raise", target: "Side delts", sets: 2, reps: "10 + 10s", rest: 45, load: 4.5, plates: [1.25], cues: ["Use controlled full reps first.", "Hold the last rep just below shoulder height.", "Stay tall through the hold."] }),
    ],
  },
  {
    id: "push-charlie",
    name: "Push Workout - Charlie",
    family: "Push",
    focus: "Tempo + density",
    duration: 35,
    level: "Challenging",
    accent: "#a58cff",
    description: "A compact push day using slow eccentrics and short rests to make modest home-gym loads work harder.",
    exercises: [
      createExercise({ name: "Tempo Floor Press", query: "dumbbell floor press", target: "Chest", sets: 4, reps: "8 @ 3 sec", rest: 60, load: 9.5, plates: [2.5, 1.25], cues: ["Lower for three full seconds.", "Pause on the floor without relaxing.", "Press up with intent." ] }),
      createExercise({ name: "Z Press", query: "dumbbell z press", target: "Shoulders", sets: 3, reps: "8-10", rest: 60, load: 7, plates: [1.25, 1.25], cues: ["Sit tall with legs straight.", "Keep the core braced and avoid leaning back.", "Reach fully overhead." ] }),
      createExercise({ name: "Dumbbell Pullover Press", query: "dumbbell pullover", target: "Chest / lats", equipment: "One dumbbell", sets: 3, reps: "10", rest: 60, load: 9.5, plates: [2.5, 1.25], cues: ["Keep the ribs down as the weight travels back.", "Pull the weight back over the chest.", "Finish with a controlled press." ] }),
      createExercise({ name: "Lean-Away Lateral Raise", query: "dumbbell lateral raise", target: "Side delts", equipment: "One dumbbell", sets: 3, reps: "12 / side", rest: 45, load: 4.5, plates: [1.25], cues: ["Hold a stable support with the free hand.", "Create a small lean away.", "Keep constant tension at the bottom." ] }),
      createExercise({ name: "Dumbbell Skull Crusher", query: "dumbbell lying triceps extension", target: "Triceps", sets: 3, reps: "12", rest: 45, load: 7, plates: [1.25, 1.25], cues: ["Keep upper arms angled slightly back.", "Bend only at the elbows.", "Finish without letting the shoulders roll forward." ] }),
    ],
  },
  {
    id: "pull-alpha",
    name: "Pull Workout - Alpha",
    family: "Pull",
    focus: "Back + biceps",
    duration: 44,
    level: "Foundation",
    accent: "#ff6b4a",
    description: "A complete home pull session for upper-back strength, rear-delt control, and balanced arm work.",
    exercises: [
      createExercise({ name: "One-Arm Dumbbell Row", query: "dumbbell one arm row", target: "Lats", equipment: "One dumbbell", sets: 4, reps: "10 / side", rest: 60, load: 12, plates: [2.5, 2.5], cues: ["Square the shoulders to the floor.", "Drive the elbow toward the back pocket.", "Reach long at the bottom without twisting." ] }),
      createExercise({ name: "Dumbbell Romanian Deadlift", query: "dumbbell romanian deadlift", target: "Hamstrings / back", sets: 4, reps: "10", rest: 75, load: 12, plates: [2.5, 2.5], cues: ["Push the hips back with soft knees.", "Keep the weights close to the legs.", "Stand tall by driving through the floor." ] }),
      createExercise({ name: "Chest-Supported Row", query: "dumbbell incline row", target: "Upper back", sets: 3, reps: "12", rest: 60, load: 9.5, plates: [2.5, 1.25], cues: ["Keep the chest connected to the support.", "Pull toward the lower ribs.", "Pause briefly at the top." ] }),
      createExercise({ name: "Rear Delt Fly", query: "dumbbell reverse fly", target: "Rear delts", sets: 3, reps: "15", rest: 45, load: 4.5, plates: [1.25], cues: ["Hinge and keep the neck long.", "Sweep the arms wide.", "Use a small range you can control." ] }),
      createExercise({ name: "Hammer Curl", query: "dumbbell hammer curl", target: "Biceps / forearms", sets: 3, reps: "10-12", rest: 45, load: 7, plates: [1.25, 1.25], cues: ["Keep palms facing inward.", "Pin the elbows near the ribs.", "Lower to full extension." ] }),
    ],
  },
  {
    id: "push-calisthenics-alpha",
    name: "Push Calisthenics Circuit - Alpha",
    family: "Circuit",
    focus: "Bodyweight conditioning",
    duration: 24,
    level: "Fast circuit",
    accent: "#f6c84b",
    description: "A fast, equipment-free circuit with simple progressions and short transitions. Complete three clean rounds.",
    exercises: [
      createExercise({ name: "Push-Up", query: "push up", target: "Chest / triceps", equipment: "Body weight", sets: 3, reps: "12-20", rest: 30, load: 0, plates: [], cues: ["Brace from shoulders to heels.", "Lower the chest between the hands.", "Finish each rep with straight arms." ] }),
      createExercise({ name: "Pike Push-Up", query: "pike push up", target: "Shoulders", equipment: "Body weight", sets: 3, reps: "8-12", rest: 30, load: 0, plates: [], cues: ["Lift the hips high.", "Lower the head slightly ahead of the hands.", "Drive the floor away." ] }),
      createExercise({ name: "Close-Grip Push-Up", query: "close grip push up", target: "Triceps", equipment: "Body weight", sets: 3, reps: "8-15", rest: 30, load: 0, plates: [], cues: ["Set hands just inside shoulder width.", "Keep elbows tracking back.", "Use knees down if full reps lose shape." ] }),
      createExercise({ name: "Plank Shoulder Tap", query: "plank shoulder tap", target: "Core / shoulders", equipment: "Body weight", sets: 3, reps: "20 taps", rest: 30, load: 0, plates: [], cues: ["Widen the feet for stability.", "Keep the hips level.", "Tap slowly without shifting weight." ] }),
      createExercise({ name: "Push-Up Hold", query: "isometric push up hold", target: "Chest", equipment: "Body weight", sets: 3, reps: "20 sec", rest: 45, load: 0, plates: [], cues: ["Hold halfway down.", "Keep the body in one straight line.", "Breathe behind the brace." ] }),
    ],
  },
];

const app = document.querySelector("#app");
const headerStatus = document.querySelector("#headerStatus");
const toastRegion = document.querySelector("#toastRegion");
const homeLink = document.querySelector("[data-home-link]");
const exerciseCache = new Map();
let activeFilter = "All";
let session = null;
let restTimerId = null;
let mediaRequestToken = 0;

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const getHistory = () => {
  try {
    return JSON.parse(localStorage.getItem("erolsGymHistory") || "[]");
  } catch {
    return [];
  }
};

const saveHistory = (items) => {
  try {
    localStorage.setItem("erolsGymHistory", JSON.stringify(items.slice(0, 24)));
  } catch {
    showToast("Your browser blocked workout history. The session still completed.");
  }
};

const showToast = (message) => {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  toastRegion.append(toast);
  window.setTimeout(() => toast.remove(), 3500);
};

const navigate = (url, replace = false) => {
  if (replace) history.replaceState({}, "", url);
  else history.pushState({}, "", url);
  window.scrollTo({ top: 0, behavior: "instant" });
  route();
};

const getIsoWeek = (date) => {
  const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = utcDate.getUTCDay() || 7;
  utcDate.setUTCDate(utcDate.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(utcDate.getUTCFullYear(), 0, 1));
  return Math.ceil((((utcDate - yearStart) / 86400000) + 1) / 7);
};

const startOfWeek = (date) => {
  const result = new Date(date);
  const day = result.getDay() || 7;
  result.setHours(0, 0, 0, 0);
  result.setDate(result.getDate() - day + 1);
  return result;
};

const getWeekStats = () => {
  const start = startOfWeek(new Date()).getTime();
  const recent = getHistory().filter((entry) => new Date(entry.completedAt).getTime() >= start);
  return {
    sessions: recent.length,
    minutes: recent.reduce((total, item) => total + item.minutes, 0),
    sets: recent.reduce((total, item) => total + item.sets, 0),
  };
};

const totalSets = (workout) => workout.exercises.reduce((total, exercise) => total + exercise.sets, 0);

const renderPlateStack = (plates) => {
  if (!plates.length) return "";
  return `<div class="tiny-plate-stack" aria-label="${escapeHtml(plates.join(" and "))} kilogram plates on each side">
    ${plates.map((plate) => {
      const style = PLATE_STYLES[plate];
      return `<span class="tiny-plate" style="--plate-height:${Math.round(style.height * 0.28)}px;--plate-color:${style.color}" title="${plate} kg"></span>`;
    }).join("")}
  </div>`;
};

const renderHome = () => {
  clearRestTimer();
  session = null;
  headerStatus.textContent = "READY TO TRAIN";
  document.title = "Erol's Gym | Home workout tracker";
  const stats = getWeekStats();
  const now = new Date();
  const historyItems = getHistory().slice(0, 3);

  app.innerHTML = `
    <div class="page-shell">
      <section class="index-intro" aria-labelledby="index-title">
        <div class="index-title-wrap">
          <p class="eyebrow">Home training system / ${now.getFullYear()}</p>
          <h1 class="index-title" id="index-title">Workout index</h1>
          <p class="index-subtitle">Pick the work. Load the dumbbells. Follow one set at a time.</p>
        </div>
        <aside class="weekly-panel" aria-label="This week's training summary">
          <div>
            <div class="date-line">${now.toLocaleDateString("en-GB", { weekday: "long", day: "2-digit", month: "long" })}</div>
            <p class="week-number">${String(getIsoWeek(now)).padStart(2, "0")}</p>
            <p class="week-label">Training week</p>
          </div>
          <div class="week-stats">
            <div class="stat-block"><span class="stat-value">${stats.sessions}</span><span class="stat-label">Workouts</span></div>
            <div class="stat-block"><span class="stat-value">${stats.minutes}</span><span class="stat-label">Minutes</span></div>
            <div class="stat-block"><span class="stat-value">${stats.sets}</span><span class="stat-label">Sets</span></div>
          </div>
        </aside>
      </section>

      <section aria-label="Workout plans">
        <div class="index-toolbar">
          <div class="filter-group" role="group" aria-label="Filter workout plans">
            ${["All", "Push", "Pull", "Circuit"].map((filter) => `<button class="filter-button ${filter === activeFilter ? "is-active" : ""}" type="button" data-filter="${filter}" aria-pressed="${filter === activeFilter}">${filter}</button>`).join("")}
          </div>
          <p class="workout-count" id="workoutCount">${workouts.length} plans</p>
        </div>
        <div class="workout-index" id="workoutIndex">
          ${renderWorkoutCards(workouts)}
        </div>
      </section>

      <section class="history-band" aria-labelledby="history-title">
        <div class="history-header">
          <div><p class="eyebrow">Saved on this device</p><h2 class="section-title" id="history-title">Recent work</h2></div>
        </div>
        <div class="history-list">
          ${historyItems.length ? historyItems.map(renderHistoryItem).join("") : `<div class="empty-history">Finished workouts will appear here.</div>`}
        </div>
      </section>
    </div>`;
};

const renderWorkoutCards = (items) => items.map((workout, index) => `
  <a class="workout-card" style="--accent:${workout.accent}" href="?workout=${workout.id}" data-workout-link="${workout.id}">
    <span class="workout-number">${String(index + 1).padStart(2, "0")}</span>
    <span class="workout-main">
      <span class="workout-kicker">${escapeHtml(workout.focus)} / ${escapeHtml(workout.level)}</span>
      <span class="workout-name">${escapeHtml(workout.name)}</span>
    </span>
    <span class="workout-meta">
      <span class="meta-cell"><span class="meta-value">${workout.exercises.length}</span><span class="meta-label">Exercises</span></span>
      <span class="meta-cell"><span class="meta-value">${workout.duration} min</span><span class="meta-label">Estimate</span></span>
    </span>
    <span class="workout-arrow" aria-hidden="true">→</span>
  </a>`).join("");

const renderHistoryItem = (entry) => {
  const completed = new Date(entry.completedAt);
  return `<article class="history-item">
    <strong>${escapeHtml(entry.name)}</strong>
    <span>${completed.toLocaleDateString("en-GB", { day: "2-digit", month: "short" })} · ${entry.sets} sets · ${entry.minutes} min</span>
  </article>`;
};

const renderDetail = (workout) => {
  clearRestTimer();
  session = null;
  headerStatus.textContent = "PLAN OPEN";
  document.title = `${workout.name} | Erol's Gym`;

  app.innerHTML = `
    <div class="page-shell" style="--accent:${workout.accent}">
      <div class="detail-topbar">
        <a class="back-button" href="./" data-home-link><span class="back-icon" aria-hidden="true">←</span> Workout index</a>
        <span class="detail-code">${escapeHtml(workout.id.replaceAll("-", " / "))}</span>
      </div>
      <section class="detail-hero" aria-labelledby="detail-title">
        <div class="detail-heading">
          <p class="eyebrow">${escapeHtml(workout.focus)} / ${escapeHtml(workout.level)}</p>
          <h1 class="detail-title" id="detail-title">${escapeHtml(workout.name)}</h1>
          <p class="detail-description">${escapeHtml(workout.description)}</p>
        </div>
        <aside class="detail-start-panel">
          <div class="detail-stats">
            <div class="detail-stat"><strong>${workout.duration}</strong><span>Minutes</span></div>
            <div class="detail-stat"><strong>${workout.exercises.length}</strong><span>Exercises</span></div>
            <div class="detail-stat"><strong>${totalSets(workout)}</strong><span>Total sets</span></div>
            <div class="detail-stat"><strong>${workout.family === "Circuit" ? "0" : "2"}</strong><span>Dumbbells</span></div>
          </div>
          <button class="primary-button" type="button" data-start-workout="${workout.id}">Start workout <span aria-hidden="true">→</span></button>
        </aside>
      </section>
      <section class="exercise-section" aria-labelledby="exercise-list-title">
        <div class="exercise-section-header">
          <h2 id="exercise-list-title">Session order</h2>
          <p>Complete every set before moving to the next exercise.</p>
        </div>
        <ol class="exercise-list">
          ${workout.exercises.map((exercise, index) => `
            <li class="exercise-row">
              <span class="exercise-order">${String(index + 1).padStart(2, "0")}</span>
              <span class="exercise-name-cell"><strong>${escapeHtml(exercise.name)}</strong><span>${escapeHtml(exercise.target)}</span></span>
              <span class="exercise-prescription"><strong>${exercise.sets} × ${escapeHtml(exercise.reps)}</strong><span>${exercise.rest}s rest</span></span>
              <span class="exercise-load"><strong>${exercise.load ? `${exercise.load} kg / DB` : "Body weight"}</strong><span>${exercise.load ? `${exercise.plates.join(" + ")} kg per side` : "No setup needed"}</span>${renderPlateStack(exercise.plates)}</span>
            </li>`).join("")}
        </ol>
      </section>
    </div>`;
};

const startWorkout = (workout) => {
  session = {
    workout,
    exerciseIndex: 0,
    setIndex: 0,
    completedSets: 0,
    startedAt: Date.now(),
  };
  const url = new URL(window.location.href);
  url.searchParams.set("workout", workout.id);
  url.searchParams.set("mode", "session");
  history.pushState({}, "", url);
  renderSession();
};

const renderSession = () => {
  const { workout, exerciseIndex, setIndex } = session;
  const exercise = workout.exercises[exerciseIndex];
  headerStatus.textContent = `SET ${setIndex + 1} OF ${exercise.sets}`;
  document.title = `${exercise.name} | ${workout.name}`;

  app.innerHTML = `
    <div class="session-page" style="--accent:${workout.accent}">
      <nav class="session-progress" style="--exercise-count:${workout.exercises.length}" aria-label="Workout progress">
        ${workout.exercises.map((item, index) => {
          const state = index < exerciseIndex ? "is-complete" : index === exerciseIndex ? "is-current" : "";
          const completed = index < exerciseIndex ? item.sets : index === exerciseIndex ? setIndex : 0;
          const progress = Math.round((completed / item.sets) * 100);
          return `<div class="progress-segment ${state}" ${index === exerciseIndex ? 'aria-current="step"' : ""}>
            <span class="progress-segment-number">${String(index + 1).padStart(2, "0")} / ${item.sets} SETS</span>
            <span class="progress-segment-name">${escapeHtml(item.name)}</span>
            <span class="progress-segment-bar"><span style="width:${progress}%"></span></span>
          </div>`;
        }).join("")}
      </nav>

      <div class="session-layout">
        <section class="exercise-guide" aria-labelledby="active-exercise-name">
          <div class="exercise-media" id="exerciseMedia">
            <div class="media-loader"><div class="media-loader-inner"><span class="loader-ring" aria-hidden="true"></span><strong>Loading exercise guide</strong></div></div>
          </div>
          <div class="guide-copy">
            <div class="guide-meta" id="guideMeta">
              <span class="guide-tag">${escapeHtml(exercise.target)}</span>
              <span class="guide-tag">${escapeHtml(exercise.equipment)}</span>
            </div>
            <h1 class="active-exercise-name" id="active-exercise-name">${escapeHtml(exercise.name)}</h1>
            <ol class="cue-list" id="cueList">${exercise.cues.map((cue) => `<li>${escapeHtml(cue)}</li>`).join("")}</ol>
          </div>
        </section>

        <section class="set-console" aria-label="Current set and equipment">
          <div class="set-console-top">
            <div><p class="set-label">Current effort</p><p class="set-number">SET ${String(setIndex + 1).padStart(2, "0")}</p></div>
            <button class="session-close" type="button" data-exit-session aria-label="Exit guided workout">×</button>
          </div>
          <div class="prescription-block">
            <div class="prescription-cell"><strong>${escapeHtml(exercise.reps)}</strong><span>Reps</span></div>
            <div class="prescription-cell"><strong>${exercise.rest}s</strong><span>Rest after</span></div>
            <div class="prescription-cell"><strong>${exercise.load ? `${exercise.load} kg` : "BW"}</strong><span>${exercise.load ? "Each DB" : "Load"}</span></div>
          </div>
          ${renderEquipment(exercise, workout.accent)}
          <button class="complete-set-button" type="button" data-complete-set>Finish set <span aria-hidden="true">✓</span></button>
          <p class="session-note">This records the set and starts the rest clock.</p>
        </section>
      </div>
    </div>`;

  loadExerciseGuide(exercise);
};

const renderEquipment = (exercise, accent) => {
  if (!exercise.load) {
    return `<div class="equipment-panel">
      <div class="equipment-panel-header"><h3>Load configuration</h3><span class="equipment-total">BODY WEIGHT</span></div>
      <div class="bodyweight-panel"><div class="bodyweight-ring" style="--accent:${accent}"><strong>No equipment needed</strong></div></div>
      <div class="configuration-legend"><span class="legend-item">Use the easiest variation that keeps every rep clean.</span></div>
    </div>`;
  }

  const isSingleDumbbell = /one dumbbell/i.test(exercise.equipment);
  const dumbbellCount = isSingleDumbbell ? 1 : 2;
  const plateTypes = [...new Set(exercise.plates)];
  const renderSide = (sideClass) => `<span class="dumbbell-side ${sideClass}">
    <span class="db-collar" aria-hidden="true"></span>
    ${exercise.plates.map((plate) => {
      const style = PLATE_STYLES[plate];
      return `<span class="db-plate" style="--plate-width:${style.width}px;--plate-height:${style.height}px;--plate-color:${style.color}" title="${plate} kilogram plate">${plate}</span>`;
    }).join("")}
  </span>`;

  return `<div class="equipment-panel">
    <div class="equipment-panel-header"><h3>Dumbbell configuration</h3><span class="equipment-total">${exercise.load} KG ${isSingleDumbbell ? "TOTAL" : "EACH"}</span></div>
    <div class="dumbbell-stage" aria-label="${isSingleDumbbell ? "One dumbbell" : "Two dumbbells"}. Each uses ${exercise.plates.join(" and ")} kilogram plates on both sides of a 2 kilogram handle.">
      ${Array.from({ length: dumbbellCount }, () => `<div class="dumbbell-unit">${renderSide("is-left")}<span class="db-handle" aria-hidden="true"></span>${renderSide("is-right")}</div>`).join("")}
    </div>
    <div class="configuration-legend">
      ${plateTypes.map((plate) => `<span class="legend-item"><span class="legend-swatch" style="--swatch:${PLATE_STYLES[plate].color}"></span>${plate} kg plate</span>`).join("")}
      <span class="legend-item">2 kg handle</span>
    </div>
  </div>`;
};

const normalizeApiExercise = (payload) => {
  const candidates = Array.isArray(payload)
    ? payload
    : payload?.data?.exercises || payload?.data || payload?.exercises || payload?.results || [];
  const item = Array.isArray(candidates) ? candidates[0] : candidates;
  if (!item || typeof item !== "object") return null;

  const media = item.gifUrl || item.gifURL || item.imageUrl || item.imageURL || item.videoUrl || null;
  return {
    media: media && /^https?:\/\//i.test(media) ? media : null,
    instructions: Array.isArray(item.instructions) ? item.instructions.slice(0, 4) : [],
    target: item.target || item.targetMuscles?.[0] || item.bodyPart || item.bodyParts?.[0] || null,
    equipment: item.equipment || item.equipments?.[0] || null,
  };
};

const fetchExercise = async (query) => {
  if (exerciseCache.has(query)) return exerciseCache.get(query);
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 6500);
  try {
    const response = await fetch(`https://exercisedb-api.vercel.app/api/v1/exercises/search?q=${encodeURIComponent(query)}&limit=5`, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
    });
    if (!response.ok) throw new Error(`ExerciseDB returned ${response.status}`);
    const normalized = normalizeApiExercise(await response.json());
    exerciseCache.set(query, normalized);
    return normalized;
  } catch {
    exerciseCache.set(query, null);
    return null;
  } finally {
    window.clearTimeout(timeout);
  }
};

const loadExerciseGuide = async (exercise) => {
  const requestToken = ++mediaRequestToken;
  const apiExercise = await fetchExercise(exercise.query);
  if (requestToken !== mediaRequestToken || !session) return;
  const media = document.querySelector("#exerciseMedia");
  const cueList = document.querySelector("#cueList");
  const guideMeta = document.querySelector("#guideMeta");
  if (!media || !cueList || !guideMeta) return;

  if (apiExercise?.instructions?.length) {
    cueList.innerHTML = apiExercise.instructions.map((step) => `<li>${escapeHtml(step.replace(/^Step:?\s*\d*\s*/i, ""))}</li>`).join("");
  }
  if (apiExercise?.target || apiExercise?.equipment) {
    guideMeta.innerHTML = `
      <span class="guide-tag">${escapeHtml(apiExercise.target || exercise.target)}</span>
      <span class="guide-tag">${escapeHtml(apiExercise.equipment || exercise.equipment)}</span>`;
  }

  if (apiExercise?.media) {
    media.innerHTML = `<img class="exercise-gif" src="${escapeHtml(apiExercise.media)}" alt="Animated demonstration of ${escapeHtml(exercise.name)}" />`;
    const image = media.querySelector("img");
    image.addEventListener("error", () => renderMediaFallback(media, exercise), { once: true });
  } else {
    renderMediaFallback(media, exercise);
  }
};

const renderMediaFallback = (media, exercise) => {
  media.innerHTML = `<div class="media-fallback">
    <div class="fallback-figure"><span class="motion-mark" aria-hidden="true"></span><div><strong>${escapeHtml(exercise.name)}</strong><span>Live ExerciseDB media is unavailable. Use the coaching steps below.</span></div></div>
  </div>`;
};

const completeSet = () => {
  if (!session) return;
  const { workout, exerciseIndex, setIndex } = session;
  const exercise = workout.exercises[exerciseIndex];
  session.completedSets += 1;

  const isLastSet = setIndex === exercise.sets - 1;
  const isLastExercise = exerciseIndex === workout.exercises.length - 1;
  if (isLastSet && isLastExercise) {
    finishWorkout();
    return;
  }

  const next = isLastSet
    ? { exerciseIndex: exerciseIndex + 1, setIndex: 0 }
    : { exerciseIndex, setIndex: setIndex + 1 };
  showRest(exercise.rest, next);
};

const showRest = (seconds, next) => {
  clearRestTimer();
  headerStatus.textContent = "RESTING";
  const nextExercise = session.workout.exercises[next.exerciseIndex];
  const nextLabel = next.exerciseIndex === session.exerciseIndex
    ? `${nextExercise.name} · Set ${next.setIndex + 1}`
    : `Next: ${nextExercise.name}`;

  const overlay = document.createElement("section");
  overlay.className = "rest-screen";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-labelledby", "rest-heading");
  overlay.innerHTML = `<div class="rest-content">
    <p class="rest-kicker" id="rest-heading">Recover / breathe</p>
    <p class="countdown" id="countdown" aria-live="off">${seconds}</p>
    <p class="rest-next">${escapeHtml(nextLabel)}</p>
    <div class="rest-progress-track" aria-hidden="true"><span id="restProgress" style="width:100%"></span></div>
    <button class="rest-skip-button" type="button" data-skip-rest>Skip rest</button>
  </div>`;
  document.body.append(overlay);
  overlay.querySelector("[data-skip-rest]").focus();

  const started = Date.now();
  const totalMs = seconds * 1000;
  restTimerId = window.setInterval(() => {
    const elapsed = Date.now() - started;
    const remaining = Math.max(0, Math.ceil((totalMs - elapsed) / 1000));
    const countdown = document.querySelector("#countdown");
    const progress = document.querySelector("#restProgress");
    if (countdown) countdown.textContent = remaining;
    if (progress) progress.style.width = `${Math.max(0, 100 - (elapsed / totalMs) * 100)}%`;
    if (remaining <= 0) endRest(next);
  }, 250);
  overlay.dataset.next = JSON.stringify(next);
};

const endRest = (next) => {
  clearRestTimer();
  document.querySelector(".rest-screen")?.remove();
  if (!session) return;
  session.exerciseIndex = next.exerciseIndex;
  session.setIndex = next.setIndex;
  renderSession();
};

const clearRestTimer = () => {
  if (restTimerId) window.clearInterval(restTimerId);
  restTimerId = null;
  document.querySelector(".rest-screen")?.remove();
};

const finishWorkout = () => {
  clearRestTimer();
  const elapsedMinutes = Math.max(1, Math.round((Date.now() - session.startedAt) / 60000));
  const summary = {
    workoutId: session.workout.id,
    name: session.workout.name,
    sets: session.completedSets,
    minutes: elapsedMinutes,
    completedAt: new Date().toISOString(),
  };
  saveHistory([summary, ...getHistory()]);
  headerStatus.textContent = "WORKOUT COMPLETE";

  const overlay = document.createElement("section");
  overlay.className = "complete-screen";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-labelledby", "complete-title");
  overlay.innerHTML = `<div class="complete-content">
    <div class="complete-mark" aria-hidden="true">✓</div>
    <p class="complete-kicker">${escapeHtml(session.workout.name)}</p>
    <h2 class="complete-title" id="complete-title">Work done.</h2>
    <p class="complete-summary">${summary.sets} sets logged · ${summary.minutes} active minutes</p>
    <button class="finish-button" type="button" data-finish-session>Back to index</button>
  </div>`;
  document.body.append(overlay);
  overlay.querySelector("[data-finish-session]").focus();
};

const exitSession = () => {
  if (!session) return;
  clearRestTimer();
  const id = session.workout.id;
  session = null;
  navigate(`?workout=${id}`);
};

const route = () => {
  const params = new URLSearchParams(window.location.search);
  const workoutId = params.get("workout");
  const mode = params.get("mode");
  const workout = workouts.find((item) => item.id === workoutId);

  if (!workout) {
    if (workoutId) history.replaceState({}, "", window.location.pathname);
    renderHome();
    return;
  }

  if (mode === "session") {
    if (!session || session.workout.id !== workout.id) {
      session = { workout, exerciseIndex: 0, setIndex: 0, completedSets: 0, startedAt: Date.now() };
    }
    renderSession();
  } else {
    renderDetail(workout);
  }
};

app.addEventListener("click", (event) => {
  const workoutLink = event.target.closest("[data-workout-link]");
  if (workoutLink) {
    event.preventDefault();
    navigate(`?workout=${workoutLink.dataset.workoutLink}`);
    return;
  }

  const localHomeLink = event.target.closest("[data-home-link]");
  if (localHomeLink) {
    event.preventDefault();
    navigate(window.location.pathname);
    return;
  }

  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    activeFilter = filterButton.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((button) => {
      const isActive = button.dataset.filter === activeFilter;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    const filtered = activeFilter === "All" ? workouts : workouts.filter((item) => item.family === activeFilter);
    document.querySelector("#workoutIndex").innerHTML = renderWorkoutCards(filtered);
    document.querySelector("#workoutCount").textContent = `${filtered.length} ${filtered.length === 1 ? "plan" : "plans"}`;
    return;
  }

  const startButton = event.target.closest("[data-start-workout]");
  if (startButton) {
    const workout = workouts.find((item) => item.id === startButton.dataset.startWorkout);
    if (workout) startWorkout(workout);
    return;
  }

  if (event.target.closest("[data-complete-set]")) {
    completeSet();
    return;
  }

  if (event.target.closest("[data-exit-session]")) {
    exitSession();
  }
});

document.addEventListener("click", (event) => {
  const skip = event.target.closest("[data-skip-rest]");
  if (skip) {
    const overlay = skip.closest(".rest-screen");
    endRest(JSON.parse(overlay.dataset.next));
    return;
  }
  if (event.target.closest("[data-finish-session]")) {
    document.querySelector(".complete-screen")?.remove();
    session = null;
    navigate(window.location.pathname);
  }
});

homeLink.addEventListener("click", (event) => {
  event.preventDefault();
  navigate(window.location.pathname);
});

window.addEventListener("popstate", route);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && session && !document.querySelector(".complete-screen")) exitSession();
});

route();
