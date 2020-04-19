/** @fileoverview Defines the scenes in the game and some constants. */

import { BootScene } from './boot-scene';
import { GameScene } from './game-scene-2';
import { LevelSelectScene } from './level-select-scene';
import { MainMenuScene } from './main-menu-scene';

/** Zoom in to make our 16px sprites look bigger. */
export const GAME_ZOOM = 2;

// TODO: Consider adjusting after resize.
export const GAME_WIDTH = window.innerWidth / GAME_ZOOM;
export const GAME_HEIGHT = window.innerHeight / GAME_ZOOM;

// The scenes in the game.
export const SCENES = [
  BootScene,
  MainMenuScene,
  LevelSelectScene,
  GameScene,
];
