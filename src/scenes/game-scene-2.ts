import { Minion } from '../characters/minion';
import { getGameHeight, getGameWidth } from '../helpers';
import { getLevelKey, getLevelNumber, getNumMinions, NUM_LEVELS, setLevelNumber, setLevelCompleted } from '../state';
import { MenuButton } from '../ui/menu-button';

// Tiles are 1-indexed.
/** Glowing orb ring. */
const ORB_TILE_INDEX = 47;
/** Glowing arrow in the tile map. */
const ARROW_TILE_INDEX = 33;
/** Spike */
const SPIKE_TILE_INDEX = 36;
/** Minion spawn cross in the tile map. */
const SPAWN_TILE_INDEX = 45;
const EXIT_TILE_INDEX = SPAWN_TILE_INDEX + 1;
const BUTTON_TILE_INDEX = 41;
/** Like redstone, but one use. Like an unlit fuse. */
const WIRE_TILE_INDEX = 43;
/** Closed door. */
const DOOR_TILE_INDEX = 51;
/** The spike that can move. */
const MOVING_SPIKE_TILE_INDEX = 56;
/** Just a black square. */
const VOID_TILE_INDEX = 26;

// Sprites are 0-indexed.
/** Minions */
const MINION_SPRITE_INDEX = 60;
const MINION_DEATH_SPRITE_INDEX = 63;
const MINION_BLESSED_SPRITE_INDEX = 70;
const MINION_BLESSED_DEATH_SPRITE_INDEX = 73;
/** Demons */
const DEMON_SPRITE_INDEX = 80;
const DEMON_DEATH_SPRITE_INDEX = 83;
const DEMON_BLESSED_SPRITE_INDEX = 90;
const DEMON_BLESSED_DEATH_SPRITE_INDEX = 93;

/** Walking speed of minion. */
const MINION_SPEED = 150;
const DEMON_SPEED = 100;

/** Data keys. */
/** The allegiance of the sprite. See "Faction_*". */
const DATA_FACTION = 'faction';
const FACTION_MINION = 'minion';
const FACTION_DEMON = 'demon';
/** Whether or not this sprite is blessed. Intended value is boolean. */
const DATA_BLESSED = 'blessed';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'Game',
};

export class GameScene extends Phaser.Scene {
  private cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;

  private worldLayer: Phaser.Tilemaps.DynamicTilemapLayer;
  /** Contains wire. */
  private worldLayer2: Phaser.Tilemaps.DynamicTilemapLayer;

  /** The active minions follow each other. The first one is the leader. */
  private minions: Minion[] = [];

  private demonGroup: Phaser.Physics.Arcade.Group;

  private spawnTile: Phaser.Tilemaps.Tile;

  // UI elements.
  /** The text field at the top. Displays the objective. */
  private objectiveText: Phaser.GameObjects.Text;
  /** On the left of the arrow. */
  private objectiveImageLeft: Phaser.GameObjects.Image;
  private objectiveArrowImage: Phaser.GameObjects.Image;
  /** On the right of the arrow. */
  private objectiveImageRight: Phaser.GameObjects.Image;

  /** Whether or not this level is won. Win by bringing the orb to the exit. */
  private hasWon = false;
  /** Sprite that caused the win. */
  private winningSprite?: Phaser.Physics.Arcade.Sprite;

  constructor() {
    super(sceneConfig);
  }

  public create() {
    // const map = this.make.tilemap({key: 'map-1'});
    const map = this.make.tilemap({key: getLevelKey(getLevelNumber())});
    // Calculate suitable offsets to put the map in the middle of the scene.
    const leftMapOffset = Math.floor((getGameWidth(this) - map.widthInPixels) / 2);
    const topMapOffset = Math.floor((getGameHeight(this) - map.heightInPixels) / 2);

    const tileset = map.addTilesetImage('ld-46', 'tiles', 16, 16, 1, 2);
    const groundLayer = map.createStaticLayer('Ground', tileset, leftMapOffset, topMapOffset)
        .setCollisionByProperty({collides: true});
    const worldLayer = map.createDynamicLayer('World', tileset, leftMapOffset, topMapOffset)
        .setCollisionByProperty({collides: true});
    const worldLayer2 = map.createDynamicLayer('World 2', tileset, leftMapOffset, topMapOffset)
        .setCollisionByProperty({collides: true});
    this.worldLayer = worldLayer;

    // Add animations.
    {
      this.anims.create({
        key: 'minion-death',
        frames: this.anims.generateFrameNumbers(
          'spritesheet',
          {start: MINION_DEATH_SPRITE_INDEX, end: MINION_DEATH_SPRITE_INDEX + 5},
          ),
        frameRate: 8,
        repeat: 0,
      });
      this.anims.create({
        key: 'minion-idle',
        frames: this.anims.generateFrameNumbers(
          'spritesheet',
          { start: MINION_SPRITE_INDEX, end: MINION_SPRITE_INDEX},
          ),
        frameRate: 1,
        repeat: -1,
      });
      this.anims.create({
        key: 'minion-walk',
        frames: this.anims.generateFrameNumbers(
          'spritesheet',
          {start: MINION_SPRITE_INDEX, end: MINION_SPRITE_INDEX + 1},
          ),
        frameRate: 8,
        repeat: -1,
      });
      this.anims.create({
        key: 'minion-blessed-death',
        frames: this.anims.generateFrameNumbers(
          'spritesheet',
          {start: MINION_BLESSED_DEATH_SPRITE_INDEX, end: MINION_BLESSED_DEATH_SPRITE_INDEX + 5},
          ),
        frameRate: 8,
        repeat: 0,
      });
      this.anims.create({
        key: 'minion-blessed-idle',
        frames: this.anims.generateFrameNumbers(
          'spritesheet',
          { start: MINION_BLESSED_SPRITE_INDEX, end: MINION_BLESSED_SPRITE_INDEX},
          ),
        frameRate: 1,
        repeat: -1,
      });
      this.anims.create({
        key: 'minion-blessed-walk',
        frames: this.anims.generateFrameNumbers(
          'spritesheet',
          {start: MINION_BLESSED_SPRITE_INDEX, end: MINION_BLESSED_SPRITE_INDEX + 1},
          ),
        frameRate: 8,
        repeat: -1,
      });
      // Enemy (demon).
      this.anims.create({
        key: 'demon-death',
        frames: this.anims.generateFrameNumbers(
          'spritesheet',
          {start: DEMON_DEATH_SPRITE_INDEX, end: DEMON_DEATH_SPRITE_INDEX + 5},
          ),
        frameRate: 8,
        repeat: 0,
      });
      this.anims.create({
        key: 'demon-idle',
        frames: this.anims.generateFrameNumbers(
          'spritesheet',
          { start: DEMON_SPRITE_INDEX, end: DEMON_SPRITE_INDEX},
          ),
        frameRate: 1,
        repeat: -1,
      });
      this.anims.create({
        key: 'demon-walk',
        frames: this.anims.generateFrameNumbers(
          'spritesheet',
          {start: DEMON_SPRITE_INDEX, end: DEMON_SPRITE_INDEX + 1},
          ),
        frameRate: 8,
        repeat: -1,
      });
      this.anims.create({
        key: 'demon-blessed-death',
        frames: this.anims.generateFrameNumbers(
          'spritesheet',
          {start: DEMON_BLESSED_DEATH_SPRITE_INDEX, end: DEMON_BLESSED_DEATH_SPRITE_INDEX + 5},
          ),
        frameRate: 8,
        repeat: 0,
      });
      this.anims.create({
        key: 'demon-blessed-idle',
        frames: this.anims.generateFrameNumbers(
          'spritesheet',
          { start: DEMON_BLESSED_SPRITE_INDEX, end: DEMON_BLESSED_SPRITE_INDEX},
          ),
        frameRate: 1,
        repeat: -1,
      });
      this.anims.create({
        key: 'demon-blessed-walk',
        frames: this.anims.generateFrameNumbers(
          'spritesheet',
          {start: DEMON_BLESSED_SPRITE_INDEX, end: DEMON_BLESSED_SPRITE_INDEX + 1},
          ),
        frameRate: 8,
        repeat: -1,
      });
    }

    /** Total number of minions that will spawn for this map. */
    const NUM_MINIONS = getNumMinions(getLevelNumber());

    // Create a list of minions.
    const minions: Minion[] = [];

    // Find the spawn point tile. Need to provide the layer 'World', otherwise it doesn't work.
    this.spawnTile = map.findTile(tile => tile.index === SPAWN_TILE_INDEX, this,
      undefined, undefined, undefined, undefined, undefined, 'World');
    if (!this.spawnTile) {
      console.warn('Spawn tile not found!');
    }
    for (let i = 0; i < NUM_MINIONS; i++) {
      const minionSprite = this.physics.add.sprite(this.spawnTile.getCenterX(),
          this.spawnTile.getCenterY(), 'spritesheet', MINION_SPRITE_INDEX)
              .setSize(12, 12);
      minionSprite.setData(DATA_FACTION, FACTION_MINION);
      const minion = new Minion(minionSprite);
      minions.push(minion);
    }
    const minionGroup = this.physics.add.group(minions.map(x => x.sprite));
    this.minions = minions;

    // This is a nice helper Phaser provides to create listeners for some of the most common keys.
    this.cursorKeys = this.input.keyboard.createCursorKeys();

    // Experiment: Replace arrows with special things.
    // Create a physics group - useful for colliding the player against all the spikes / orbs.
    const movingSpikeGroup = this.physics.add.group();
    this.demonGroup = this.physics.add.group();
    let orb: Phaser.Physics.Arcade.Sprite;

    // Loop over each Tile and tiles with custom sprites.
    worldLayer2.forEachTile(tile => {
      const x = tile.getCenterX();
      const y = tile.getCenterY();
      if (tile.index === ORB_TILE_INDEX) {
        // A sprite has its origin at the center, so place the sprite at the center of the tile
        orb = this.physics.add.sprite(x, y, 'spritesheet', ORB_TILE_INDEX - 1)
            .setDrag(800).setCircle(7, 1, 1);
        worldLayer2.removeTileAt(tile.x, tile.y);
      } else if (tile.index === MOVING_SPIKE_TILE_INDEX) {
        const movingSpike: Phaser.Physics.Arcade.Sprite = movingSpikeGroup.create(x, y, 'spritesheet',
            MOVING_SPIKE_TILE_INDEX - 1).setDrag(800);
        movingSpike.setCircle(7, 1, 1);
        worldLayer2.removeTileAt(tile.x, tile.y);
      } else if (tile.index === DEMON_SPRITE_INDEX + 1) {
        // Gotcha: tile index is sprite index + 1.
        const demon: Phaser.Physics.Arcade.Sprite = this.demonGroup.create(x, y, 'spritesheet',
            DEMON_SPRITE_INDEX);
        demon.setSize(12, 12);
        demon.setData(DATA_FACTION, FACTION_DEMON);
        worldLayer2.removeTileAt(tile.x, tile.y);
      }
    });
    this.worldLayer2 = worldLayer2;

    {
      this.physics.add.collider(minionGroup, worldLayer);
      this.physics.add.collider(minionGroup, groundLayer);
      this.physics.add.collider(this.demonGroup, worldLayer);
      this.physics.add.collider(this.demonGroup, groundLayer);

      this.physics.add.collider(movingSpikeGroup, worldLayer);
      this.physics.add.collider(movingSpikeGroup, groundLayer);

      this.physics.add.collider(orb, worldLayer);
      this.physics.add.collider(orb, groundLayer);

      this.physics.add.overlap(minionGroup, movingSpikeGroup,
          this.hitMovingSpike, bothActive, this);
      this.physics.add.overlap(orb, minionGroup, this.hitOrb, bothActive, this);
      this.physics.add.overlap(this.demonGroup, movingSpikeGroup,
          this.hitMovingSpike, bothActive, this);
      this.physics.add.overlap(orb, this.demonGroup, this.hitOrb, bothActive, this);
      // Demons can attack minions.
      this.physics.add.overlap(minionGroup, this.demonGroup, this.hitDemon, bothActive, this);

      // Logic for overlap with specific tiles.
      worldLayer.setTileIndexCallback(ARROW_TILE_INDEX, hitArrow, this);
      worldLayer.setTileIndexCallback(SPIKE_TILE_INDEX, this.hitSpike, this);
      worldLayer.setTileIndexCallback(BUTTON_TILE_INDEX, this.hitButton, this);
      worldLayer.setTileIndexCallback(EXIT_TILE_INDEX, this.hitExitTile, this);
      this.physics.add.overlap(minionGroup, worldLayer);
      this.physics.add.overlap(this.demonGroup, worldLayer);
    }

    // The default font is monospaced.
    this.objectiveText = this.add.text(leftMapOffset, topMapOffset - 24,
        'Take the orb', { fill: '#FFFFFF' })
            .setFontSize(32).setScale(0.5);
    this.objectiveImageLeft = this.add.image(
        leftMapOffset + map.widthInPixels - 32, topMapOffset - 16, 'spritesheet',
        VOID_TILE_INDEX - 1)
            .setOrigin(1, 0.5);
    this.objectiveImageRight = this.add.image(
        leftMapOffset + map.widthInPixels, topMapOffset - 16, 'spritesheet', ORB_TILE_INDEX - 1)
            .setOrigin(1, 0.5);
    // Arrow pointing to objective. -1 for sprite. +1 for next index.
    this.objectiveArrowImage = this.add.image(
        leftMapOffset + map.widthInPixels - 16, topMapOffset - 16, 'spritesheet', ARROW_TILE_INDEX )
             .setOrigin(1, 0.5);

    // tslint:disable-next-line: no-unused-expression
    new MenuButton(this, leftMapOffset + map.widthInPixels, topMapOffset + map.heightInPixels + 8, 'Menu', () => {
      this.scene.start('LevelSelect');
    }, {
      fontSize: 12, padding: 4,
    }).setOrigin(1, 0);
    // Restart button
    // tslint:disable-next-line: no-unused-expression
    new MenuButton(this, leftMapOffset, topMapOffset + map.heightInPixels + 8, 'Reset', () => {
      this.cameras.main.fade(500, 0, 0, 0);
    }, {
      fontSize: 12, padding: 4,
    });

    this.cameras.main.on('camerafadeoutcomplete', () => {
      this.scene.restart();
    }, this);
  }

  public update() {
    let leadMinion: Minion|undefined;

    let minionIndex = this.minions.findIndex(minion => minion.sprite.active);
    if (minionIndex < 0) {
      // The level is lost. Unless you can get into a state where a demon
      // reaches the exit after the last minions die.
      // console.log('No more active minions');
      return;
    } else {
      leadMinion = this.minions[minionIndex];
    }
    // Every frame, we create a new velocity for the sprite based on what keys
    // the player is holding down.
    // Desired direction.
    const velocity = new Phaser.Math.Vector2(0, 0);

    if (this.cursorKeys.left.isDown) {
      velocity.x -= 1;
    }
    if (this.cursorKeys.right.isDown) {
      velocity.x += 1;
    }
    if (this.cursorKeys.up.isDown) {
      velocity.y -= 1;
    }
    if (this.cursorKeys.down.isDown) {
      velocity.y += 1;
    }

    // Desired velocity also sets up the max speed.
    const desiredVelocity = velocity.normalize().scale(MINION_SPEED);
    if (desiredVelocity.length() > 0) {
      animateMinion(leadMinion.sprite, 'walk');
    } else {
      animateMinion(leadMinion.sprite, 'idle');
    }

    // The first active minion is controlled by the player.
    const MINION_ACCELERATION_MAGNITUDE = 20;
    accelerateTowardsDesiredVelocity(leadMinion.sprite,
      desiredVelocity, MINION_ACCELERATION_MAGNITUDE);

    // The other minions follow in the line...
    let prevPos = new Phaser.Math.Vector2(leadMinion.sprite.x, leadMinion.sprite.y);
    for (minionIndex++; minionIndex < this.minions.length; minionIndex++) {
      const curr = this.minions[minionIndex];
      if (!curr.sprite.active) {
        continue;
      }
      // Move towards prev.
      const currPos = new Phaser.Math.Vector2(curr.sprite.x, curr.sprite.y);
      // Path from curr to prev.
      const path = prevPos.subtract(currPos);
      if (path.lengthSq() > 200) {
        // Move towards prev!
        path.normalize().scale(MINION_SPEED);
        animateMinion(curr.sprite, 'walk');
      } else {
        // Stand still.
        path.scale(0);
        animateMinion(curr.sprite, 'idle');
      }
      accelerateTowardsDesiredVelocity(curr.sprite, path, MINION_ACCELERATION_MAGNITUDE);

      prevPos = currPos;
    }

    // The demons all chase the lead minion! (Or the closest minion?)
    this.demonGroup.children.iterate(child => {
      if (!child.active) {
        return;
      }
      const sprite = (child as Phaser.Physics.Arcade.Sprite);
      const path = new Phaser.Math.Vector2().copy(leadMinion.sprite.body.position);
      path.subtract(sprite.body.position);
      path.normalize().scale(DEMON_SPEED);
      if (path.length() > 0) {
        animateDemon(sprite, 'walk');
      } else {
        animateDemon(sprite, 'idle');
      }
      accelerateTowardsDesiredVelocity(sprite, path, MINION_ACCELERATION_MAGNITUDE);
    });

    if (this.winningSprite) {
      // Shrinking animation.
      this.winningSprite.setScale(this.winningSprite.scale * 0.99);
    }

    // Depth sorting!
    for (const minion of this.minions) {
      minion.sprite.setDepth(minion.sprite.y + minion.sprite.height * minion.sprite.originY);
    }
    this.demonGroup.children.iterate(child => {
      const sprite = (child as Phaser.Physics.Arcade.Sprite);
      sprite.setDepth(sprite.y + sprite.height * sprite.originY);
    });
  }

  /** Handler for when a sprite hits a spike. */
  private hitSpike(sprite: Phaser.Physics.Arcade.Sprite, tile: Phaser.Tilemaps.Tile) {
    if (!sprite.active || !sprite.getData(DATA_FACTION)) {
      // Only active minions are affected by sprites.
      return false;
    }
    // The minion dies if it was moving with high enough speed.
    if (sprite.body.velocity.length() > 160) {
      // Offset to make the minion overlap the spike more.
      const offset = sprite.body.velocity.clone().normalize().scale(6);
      this.creatureDeath(sprite, offset);
    }
  }

  /** Handler for when a sprite hits a moving spike. */
  private hitMovingSpike(sprite: Phaser.Physics.Arcade.Sprite,
                         spike: Phaser.Physics.Arcade.Sprite) {
    if (!sprite.active || !sprite.getData(DATA_FACTION)) {
      // Only active minions are affected by sprites.
      return false;
    }
    // The minion dies if the distance is small enough.
    const spikePosition = spike.body.position;
    const distanceSq = Math.max(spikePosition.distanceSq(sprite.body.position), 1);
    if (distanceSq < 80) {
      this.creatureDeath(sprite);
    }
  }

  /**
   * Start a creature dying animation. And remove the creature. Works on minions and demons.
   *
   * @param offset To make the death sprite appear in an offset position.
   */
  private creatureDeath(minion: Phaser.Physics.Arcade.Sprite, offset?: Phaser.Math.Vector2) {
    // Make sure to get the actual middle position of the minion.
    const deathSprite = this.add.sprite(
      minion.x + (offset?.x || 0),
      minion.y + (offset?.y || 0),
      'spritesheet',
    );
    if (minion.getData(DATA_BLESSED)) {
      deathSprite.setData(DATA_BLESSED, true);
    }
    if (minion.getData(DATA_FACTION) === FACTION_MINION) {
      animateMinion(deathSprite, 'death');
    } else {
      animateDemon(deathSprite, 'death');
    }
    minion.body.onCollide = false;
    minion.setActive(false);
    minion.setVisible(false);
    minion.setAcceleration(0, 0);
    minion.setVelocity(0, 0);
    minion.body.enable = true;

    // Lose condition: Couldn't keep the blessed minion alive.
    if (minion.getData(DATA_BLESSED) === true) {
      this.objectiveText.setText('Failure');
      this.objectiveArrowImage.setVisible(false);
      this.objectiveImageLeft.setVisible(false);
      this.objectiveImageRight.setTexture('spritesheet',
          minion.getData(DATA_FACTION) === FACTION_MINION
          ? MINION_BLESSED_SPRITE_INDEX + 7 : DEMON_BLESSED_SPRITE_INDEX + 7);
    }
  }

  /** Handler for when something hits an orb. */
  private hitOrb(s1: Phaser.Physics.Arcade.Sprite, s2: Phaser.Physics.Arcade.Sprite) {
    console.log('hitOrb factions: ', s1.getData(DATA_FACTION), s2.getData(DATA_FACTION));
    // The minion becomes blessed.
    // Gotcha: The minion might always be s2 no matter the order of
    // minionGroup/orb in the overlap function.
    let minion: Phaser.Physics.Arcade.Sprite;
    let orb: Phaser.Physics.Arcade.Sprite;
    if (s1.getData(DATA_FACTION) === FACTION_MINION) {
      minion = s1;
      orb = s2;
    } else {
      minion = s2;
      orb = s1;
    }
    if (!minion.active || !orb.active) {
      return false;
    }
    minion.setData(DATA_BLESSED, true);
    orb.active = false;
    orb.visible = false;
    // Create a sprite representing the shattered remains of the orb.
    this.add.sprite(
      orb.x,
      orb.y,
      'spritesheet',
      ORB_TILE_INDEX,  // -1 for sprite index, +1 for next sprite in the sheet.
    );

    // Unlock phase 2: Keep it alive.
    // Change the spawn tile as indication.
    this.worldLayer.putTileAt(this.spawnTile.index + 1, this.spawnTile.x, this.spawnTile.y);
    this.objectiveText.setText('Keep it alive');
    this.objectiveImageLeft.setTexture('spritesheet',
        minion.getData(DATA_FACTION) === FACTION_MINION
        ? MINION_BLESSED_SPRITE_INDEX : DEMON_BLESSED_SPRITE_INDEX);
    this.objectiveImageRight.setTexture('spritesheet', EXIT_TILE_INDEX - 1);
  }

  /** Handler for when a minion and demon collide. */
  private hitDemon(s1: Phaser.Physics.Arcade.Sprite, s2: Phaser.Physics.Arcade.Sprite) {
    if (!s1.active || !s2.active) {
      return false;
    }
    let minion: Phaser.Physics.Arcade.Sprite;
    let demon: Phaser.Physics.Arcade.Sprite;
    if (s1.getData(DATA_FACTION) === FACTION_MINION) {
      minion = s1;
      demon = s2;
    } else {
      minion = s2;
      demon = s1;
    }
    // Offset to make the demon and minion overlap more.
    const offset = demon.body.velocity.clone().normalize().scale(8);
    this.creatureDeath(demon, offset);
    this.creatureDeath(minion, offset.clone().scale(-1));
  }

  /** Handler for when a minion hits a button. */
  private hitButton(minion: Phaser.Physics.Arcade.Sprite, tile: Phaser.Tilemaps.Tile) {
    if (!minion.active) {
      return false;
    }
    // Minion needs to be close enough to the middle to trigger it.
    const v1 = new Phaser.Math.Vector2(tile.getCenterX(), tile.getCenterY());
    const v2 = new Phaser.Math.Vector2(minion.x, minion.y);
    if (v1.distanceSq(v2) > 50) {
      return false;
    }

    // Replace the button with another tile.
    this.worldLayer.putTileAt(tile.index + 1, tile.x, tile.y);

    const toProcess: Array<{x: number, y: number}> = [{x: tile.x, y: tile.y}];
    /** Four directions. */
    const OFFSETS = [{x: 0, y: 1}, {x: 0, y: -1}, {x: 1, y: 0}, {x: -1, y: 0}];
    // Cause a chain reaction.
    while (toProcess.length > 0) {
      const curr = toProcess.pop();
      for (const offset of OFFSETS) {
        // getTileAt has incorrect type. Actually nullable.
        const adjacentTile = this.worldLayer.getTileAt(
            curr.x + offset.x, curr.y + offset.y);
        if (adjacentTile) {
          if (adjacentTile.index === WIRE_TILE_INDEX) {
            // Continue the reaction.
            toProcess.push({x: adjacentTile.x, y: adjacentTile.y});
            // Replace the wire with a depleted wire.
            this.worldLayer.putTileAt(adjacentTile.index + 1, adjacentTile.x, adjacentTile.y);
          } else if (adjacentTile.index === DOOR_TILE_INDEX) {
            // Replace the door with an open door.
            this.worldLayer.putTileAt(adjacentTile.index + 1, adjacentTile.x, adjacentTile.y);
          }
        }
        // Also check worldLayer2 for wires only.
        const adjacentTile2 = this.worldLayer2.getTileAt(
            curr.x + offset.x, curr.y + offset.y);
        if (adjacentTile2 && adjacentTile2.index === WIRE_TILE_INDEX) {
            // Continue the reaction.
            toProcess.push({x: adjacentTile2.x, y: adjacentTile2.y});
            // Replace the wire with a depleted wire.
            this.worldLayer2.putTileAt(adjacentTile2.index + 1, adjacentTile2.x, adjacentTile2.y);
        }
      }
    }
  }

  /** Handler for when something hits the exit tile. */
  private hitExitTile(minion: Phaser.Physics.Arcade.Sprite, tile: Phaser.Tilemaps.Tile) {
    if (!minion.active || !minion.getData(DATA_BLESSED)) {
      // Only care if the minion is active and blessed.
      return false;
    }
    // Minion needs to be close to the middle.
    const v1 = new Phaser.Math.Vector2(tile.getCenterX(), tile.getCenterY());
    const v2 = new Phaser.Math.Vector2(minion.x, minion.y);
    if (v1.distanceSq(v2) < 50) {
      console.log('WIN!');
      minion.x = tile.getCenterX();
      minion.y = tile.getCenterY();
      minion.active = false;
      minion.body.enable = false;

      this.objectiveText.setText('Success');
      this.objectiveImageLeft.setTexture('spritesheet', VOID_TILE_INDEX - 1);
      this.objectiveArrowImage.setTexture('spritesheet', VOID_TILE_INDEX - 1);
      this.objectiveImageRight.setTexture('spritesheet',
          minion.getData(DATA_FACTION) === FACTION_MINION
          ? MINION_BLESSED_SPRITE_INDEX : DEMON_BLESSED_SPRITE_INDEX);
      this.hasWon = true;
      setLevelCompleted();
      this.winningSprite = minion;
    }
  }
}

/** Handler for when a minion hits an arrow tile. */
function hitArrow(minion: Phaser.Physics.Arcade.Sprite, tile: Phaser.Tilemaps.Tile) {
  if (!minion.active) {
    return false;
  }
  // Make a vector with the arrow tile's rotation.
  const unitVector = new Phaser.Math.Vector2(Math.cos(tile.rotation), Math.sin(tile.rotation));
  const tilePosition = new Phaser.Math.Vector2(tile.pixelX, tile.pixelY);

  const minionBody = (minion.body as Phaser.Physics.Arcade.Body);
  const distance = Math.max(tilePosition.distance(minionBody.position), 1);
  // Smaller distance means larger movement.
  minionBody.velocity.add(unitVector.scale((200 / distance) + 100));
}

  /**
   * Instead of setting the velocity directly, set acceleration.
   * The farther away from desired velocity, the higher the acceleration.
   */
function accelerateTowardsDesiredVelocity(thing: Phaser.Physics.Arcade.Sprite,
                                          desiredVelocity: Phaser.Math.Vector2,
                                          accelerationMagnitude: number) {
  // Difference between desired velocity and actual.
  const diff = desiredVelocity.clone().subtract(thing.body.velocity);
  thing.setAcceleration(
  diff.x * accelerationMagnitude, diff.y * accelerationMagnitude);
}

/** Returns whether or not both s1 and s2 are active. */
function bothActive(s1: any, s2: any) {
  return s1.active && s2.active;
}

/** Animate a minion. With different animations depending on blessed data. */
function animateMinion(minion: Phaser.GameObjects.Sprite, animation: 'walk'|'idle'|'death') {
  if (minion.getData(DATA_BLESSED)) {
    switch (animation) {
      case 'walk':
        minion.play('minion-blessed-walk', true);
        break;
      case 'idle':
        minion.play('minion-blessed-idle', true);
        break;
      case 'death':
        minion.play('minion-blessed-death', true);
        break;
      default:
        break;
    }
    return;
  }
  switch (animation) {
    case 'walk':
      minion.play('minion-walk', true);
      break;
    case 'idle':
      minion.play('minion-idle', true);
      break;
    case 'death':
      minion.play('minion-death', true);
      break;
    default:
      break;
  }
}

/** Animate a demon. With different animations depending on blessed data. */
function animateDemon(demon: Phaser.GameObjects.Sprite, animation: 'walk'|'idle'|'death') {
  if (demon.getData(DATA_BLESSED)) {
    switch (animation) {
      case 'walk':
        // TODO: Also flip based on velocity.
        demon.play('demon-blessed-walk', true);
        break;
      case 'idle':
        demon.play('demon-blessed-idle', true);
        break;
      case 'death':
        demon.play('demon-blessed-death', true);
        break;
      default:
        break;
    }
    return;
  }
  switch (animation) {
    case 'walk':
      demon.play('demon-walk', true);
      break;
    case 'idle':
      demon.play('demon-idle', true);
      break;
    case 'death':
      demon.play('demon-death', true);
      break;
    default:
      break;
  }
}
