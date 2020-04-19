/** @fileoverview Manages the state in the game. */

/** Number of levels in the game */
export const NUM_LEVELS = 5;

interface LevelInfo {
  /** Whether or not the level has been completed. */
  complete: boolean;
}

let selectedLevel: number = 0;
const levelState: {[key: string]: LevelInfo} = {};

/** Set the level to play. 1-indexed. */
export function setLevelNumber(level: number) {
  selectedLevel = level;
}

/** Get the level to play. */
export function getLevelNumber() {
  return selectedLevel;
}

/** Set a level as completed. */
export function setLevelCompleted(level: number) {
  const state = levelState[numberToKey(level)];
  state.complete = true;
}

/** Return whether or not the level is completed. */
export function getLevelCompleted(level: number): boolean {
  const state = levelState[numberToKey(level)];
  if (state?.complete) {
    return true;
  }
  return false;
}

function numberToKey(level: number): string {
  return `level-${level}`;
}

// TODO: Store data.
