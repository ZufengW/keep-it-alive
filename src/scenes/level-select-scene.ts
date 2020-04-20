/** @fileoverview Level select. Also keeps track of global game state. */

import { getGameHeight, getGameWidth } from '../helpers';
import { NUM_LEVELS, setLevelNumber, getLevelCompleted } from '../state';
import { MenuButton } from '../ui/menu-button';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'LevelSelect',
};

/**
 * The initial scene that starts, shows the splash screens, and loads the necessary assets.
 */
export class LevelSelectScene extends Phaser.Scene {

  private levelButtons: MenuButton[] = [];

  constructor() {
    super(sceneConfig);
  }

  public create() {
    this.add.text(50, 50, 'Select Level', { fill: '#FFFFFF' }).setFontSize(24);

    // Number of levels per row.
    const rowLength = Math.floor((getGameWidth(this) - 100) / 100);

    // Draw the level buttons.
    for (let i = 0; i < NUM_LEVELS; i++) {
      // Level numbers are 1-indexed.
      const levelNum = i + 1;
      const buttonX = 50 + (i % rowLength) * 100;
      const buttonY = 100 + (50 * Math.floor(i / rowLength));
      const levelButton = new MenuButton(this,
          buttonX,
          buttonY,
          `Level ${levelNum}`,
          () => {
        setLevelNumber(levelNum);
        this.scene.start('Game');
        console.log('starting level', levelNum);
      });
      this.levelButtons.push(levelButton);
      // Also render if the level was completed.
      if (getLevelCompleted(levelNum)) {
        this.add.image(buttonX + levelButton.width - 8,
            buttonY + levelButton.height - 8, 'spritesheet', 46);
      }
    }

    // tslint:disable-next-line: no-unused-expression
    new MenuButton(this, 50, getGameHeight(this) - 50, 'Back', () => {
      this.scene.start('MainMenu');
    }, {
      fontSize: 12, padding: 4,
    });
  }
}
