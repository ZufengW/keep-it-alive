import * as Phaser from 'phaser';

const minimumWidth = 20;
const minimumHeight = 20;

interface MenuButtonOptions {
  fontSize?: number;
  padding?: number;
}

export class MenuButton extends Phaser.GameObjects.Rectangle {
  private label: Phaser.GameObjects.Text;
  private padding: number;

  constructor(scene: Phaser.Scene, x: number, y: number, text: string,
              onClick: () => void, options?: MenuButtonOptions) {
    super(scene, x, y);
    const padding = options?.padding || 10;  // Default 10 padding.
    this.padding = padding;
    scene.add.existing(this);
    this.setOrigin(0, 0);

    this.label = scene.add.text(x + padding, y + padding, text)
        .setFontSize(options?.fontSize || 18).setAlign('center');

    // if (this.originX === 0 && this.label) {
    //   this.label.setX(this.x - this.width);
    //   console.log('this set');
    // }

    const labelWidth = this.label.width + padding * 2;
    const labelHeight = this.label.height + padding * 2;

    this.width = labelWidth >= minimumWidth ? labelWidth : minimumWidth;
    this.height = labelHeight >= minimumHeight ? labelHeight : minimumHeight;

    this.setInteractive({ useHandCursor: true })
      .on('pointerover', this.enterMenuButtonHoverState)
      .on('pointerout', this.enterMenuButtonRestState)
      .on('pointerdown', this.enterMenuButtonActiveState)
      .on('pointerup', this.enterMenuButtonHoverState);

    if (onClick) {
      this.on('pointerup', onClick);
    }

    this.enterMenuButtonRestState();
  }

  public setOrigin(x: number, y: number): this {
    super.setOrigin(x, y);
    // But the label gets messed up. Hacky fix:
    if (this.originX === 1 && this.label) {
      this.label.setX(this.x + this.padding - this.width);
    }
    return this;
  }

  /** When there's hover. */
  private enterMenuButtonHoverState() {
    this.label.setColor('#FCFCFC');
    this.setFillStyle(0x404040);
  }

  /** When there's no iteraction. */
  private enterMenuButtonRestState() {
    this.label.setColor('#FFFFFF');
    this.setFillStyle(0x444444);
  }

  /** When there's press. */
  private enterMenuButtonActiveState() {
    this.label.setColor('#EEEEEE');
    this.setFillStyle(0x333333);
  }
}
