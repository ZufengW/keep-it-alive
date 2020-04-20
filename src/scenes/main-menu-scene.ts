import { MenuButton } from '../ui/menu-button';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'MainMenu',
};

/**
 * The initial scene that starts, shows the splash screens, and loads the necessary assets.
 */
export class MainMenuScene extends Phaser.Scene {
  constructor() {
    super(sceneConfig);
  }

  public create() {
    // TODO: Change font.
    this.add.text(50, 50, 'Keep it alive', { fill: '#FFFFFF' }).setFontSize(24);

    // tslint:disable-next-line: no-unused-expression
    new MenuButton(this, 50, 100, 'Start Game', () => {
      this.scene.start('LevelSelect');
    });

    // tslint:disable-next-line: no-unused-expression
    // new MenuButton(this, 50, 200, 'Help', () => console.log('help button clicked'));
  }
}
