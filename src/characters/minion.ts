export class Minion {
  /** The previous minion in the chain. Follow this one. */
  public prev?: Minion;
  /** The one following. */
  public next?: Minion;

  /** Whether or not this minion is alive and well. */
  public isAlive: boolean;

  constructor(public sprite: Phaser.Physics.Arcade.Sprite) {
    this.isAlive = true;
  }
}
