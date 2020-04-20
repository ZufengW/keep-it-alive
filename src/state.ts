/** @fileoverview Manages the state in the game. */

/** Number of levels in the game */
export const NUM_LEVELS = 8;

const STORAGE_KEY = 'ld-46-level-state';

/** Number of minions you get in each level. */
const NUM_MINIONS_PER_LEVEL = [
  1, 1, 1, 2, 5, 5, 2, 3,
];

interface LevelInfo {
  /** Whether or not the level has been completed. */
  complete: boolean;
}

let selectedLevel: number = 0;

interface LevelState {
  [key: string]: LevelInfo;
}

// Attempt to load from localStorage.
const levelState: LevelState = attemptLoadFromStorage();

/** Either loads from storage or returns empty object. */
function attemptLoadFromStorage(): LevelState {
  try {
    const data = window.localStorage.getItem(STORAGE_KEY);
    const parsed: LevelState = JSON.parse(data);
    if (parsed && typeof parsed === 'object') {
      return parsed;
    }
  } catch (e) {
    return {};
  }
  return {};
}

/** Saves the level state. */
function writeToStorage() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(levelState));
}

/** Set the level to play. 1-indexed. */
export function setLevelNumber(level: number) {
  selectedLevel = level;
}

/** Get the current selected level. */
export function getLevelNumber() {
  return selectedLevel;
}

/** Set a level as completed. Either provide a level or it uses the current one. */
export function setLevelCompleted(level?: number) {
  const levelKey = getLevelKey(level || getLevelNumber());
  if (!levelState[levelKey]) {
    levelState[levelKey] = {complete: true};
  } else {
    levelState[levelKey].complete = true;
  }
  writeToStorage();
}

/** Return whether or not the level is completed. */
export function getLevelCompleted(level: number): boolean {
  const state = levelState[getLevelKey(level)];
  if (state?.complete) {
    return true;
  }
  return false;
}

/** Get the string identifier for a level. */
export function getLevelKey(level: number): string {
  return `level-${level}`;
}

export function getNumMinions(level: number): number {
  return NUM_MINIONS_PER_LEVEL[level - 1] || 40;  // 40 is error.
}

// TODO: Store data.
