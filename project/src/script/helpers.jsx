import { INITIAL_TIME_SECONDS, initialSubjects } from "../context/AppContext";
import { LOCAL_STORAGE_NAMES } from "./constants";

let counter = 0;

export function generateSimpleId() {
  const now = Date.now();
  counter = (counter + 1) % 1000;
  return `${now}-${counter}`;
}

export const formatTime = (totalSeconds) => {
  const safeSeconds = Math.max(0, totalSeconds);
  const minutes = Math.floor(safeSeconds / 60);
  const seconds = safeSeconds % 60;
  return {
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
};

export function loadInitialSubjects() {
  try {
    const storedSubjects = localStorage.getItem(LOCAL_STORAGE_NAMES.SUBJECTS);
    if (storedSubjects === null) {
      return initialSubjects;
    }

    return JSON.parse(storedSubjects);
  } catch (e) {
    console.error("Could not load goals from storage", e);
    return initialSubjects;
  }
}

export function loadInitialTimer() {
  try {
    const storedTimer = localStorage.getItem(LOCAL_STORAGE_NAMES.TIMER);
    if (storedTimer === null) {
      return INITIAL_TIME_SECONDS;
    }

    return JSON.parse(storedTimer);
  } catch (e) {
    console.error("Could not load goals from storage", e);
    return INITIAL_TIME_SECONDS;
  }
}

export function saveSubjects(goals) {
  localStorage.setItem(LOCAL_STORAGE_NAMES.SUBJECTS, JSON.stringify(goals));
}

export function saveTimerValue(timerValue) {
  localStorage.setItem(LOCAL_STORAGE_NAMES.TIMER, JSON.stringify(timerValue));
}
