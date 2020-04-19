import * as Phaser from 'phaser';
import { GAME_HEIGHT, GAME_WIDTH, GAME_ZOOM, SCENES } from './scenes';

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Sample',

  type: Phaser.AUTO,

  scale: {
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
  },
  // To make our pixel art larger.
  zoom: GAME_ZOOM,
  scene: SCENES,

  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  render: {
    // antialias: false,
    pixelArt: true,
  },
  parent: 'game',
  backgroundColor: '#000000',
};

export const game = new Phaser.Game(gameConfig);

window.addEventListener('resize', () => {
  game.scale.refresh();
});
