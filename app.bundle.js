/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/characters/minion.ts":
/*!**********************************!*\
  !*** ./src/characters/minion.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Minion = /** @class */ (function () {
    function Minion(sprite) {
        this.sprite = sprite;
        this.isAlive = true;
    }
    return Minion;
}());
exports.Minion = Minion;


/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getGameWidth = function (scene) {
    return scene.game.scale.width;
};
exports.getGameHeight = function (scene) {
    return scene.game.scale.height;
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var scenes_1 = __webpack_require__(/*! ./scenes */ "./src/scenes/index.ts");
var gameConfig = {
    title: 'Sample',
    type: Phaser.AUTO,
    scale: {
        width: scenes_1.GAME_WIDTH,
        height: scenes_1.GAME_HEIGHT,
    },
    // To make our pixel art larger.
    zoom: scenes_1.GAME_ZOOM,
    scene: scenes_1.SCENES,
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
exports.game = new Phaser.Game(gameConfig);
window.addEventListener('resize', function () {
    exports.game.scale.refresh();
});


/***/ }),

/***/ "./src/scenes/boot-scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/boot-scene.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var state_1 = __webpack_require__(/*! ../state */ "./src/state.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Boot',
};
/**
 * The initial scene that loads all necessary assets to the game and displays a loading bar.
 */
var BootScene = /** @class */ (function (_super) {
    __extends(BootScene, _super);
    function BootScene() {
        return _super.call(this, sceneConfig) || this;
    }
    BootScene.prototype.preload = function () {
        var _this = this;
        var halfWidth = helpers_1.getGameWidth(this) * 0.5;
        var halfHeight = helpers_1.getGameHeight(this) * 0.5;
        var progressBarHeight = 100;
        var progressBarWidth = 400;
        var progressBarContainer = this.add.rectangle(halfWidth, halfHeight, progressBarWidth, progressBarHeight, 0x000000);
        var progressBar = this.add.rectangle(halfWidth + 20 - progressBarContainer.width * 0.5, halfHeight, 10, progressBarHeight - 20, 0x888888);
        var loadingText = this.add.text(halfWidth - 75, halfHeight - 100, 'Loading...').setFontSize(24);
        var percentText = this.add.text(halfWidth - 25, halfHeight, '0%').setFontSize(24);
        var assetText = this.add.text(halfWidth - 25, halfHeight + 100, '').setFontSize(24);
        this.load.on('progress', function (value) {
            progressBar.width = (progressBarWidth - 30) * value;
            var percent = value * 100;
            percentText.setText(percent + "%");
        });
        this.load.on('fileprogress', function (file) {
            assetText.setText(file.key);
        });
        this.load.on('complete', function () {
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
            progressBar.destroy();
            progressBarContainer.destroy();
            _this.scene.start('MainMenu');
        });
        this.loadAssets();
    };
    /**
     * All assets that need to be loaded by the game (sprites, images, animations, tiles, music, etc)
     * should be added to this method. Once loaded in, the loader will keep track of them,
     * indepedent of which scene is currently active, so they can be accessed anywhere.
     */
    BootScene.prototype.loadAssets = function () {
        // Load sample assets
        // Error only on gh-pages: Failed: https://zufengw.github.io/assets/tilemaps/level-7.json".
        // temporary hack for gh-pages:
        this.load.image('tiles', 'assets/tilesets/tilesheet-extruded.png');
        // Load each of the main levels.
        for (var i = 1; i <= state_1.NUM_LEVELS; i++) {
            this.load.tilemapTiledJSON(state_1.getLevelKey(i), "assets/tilemaps/level-" + i + ".json");
        }
        // Hack to use the tilemap as a spritesheet.
        // https://www.html5gamedevs.com/topic/4827-creating-a-sprite-from-a-tilemaps-tileset/
        this.load.spritesheet('spritesheet', 'assets/tilesets/tilesheet-extruded.png', { margin: 1, spacing: 2, frameWidth: 16 });
    };
    return BootScene;
}(Phaser.Scene));
exports.BootScene = BootScene;


/***/ }),

/***/ "./src/scenes/game-scene-2.ts":
/*!************************************!*\
  !*** ./src/scenes/game-scene-2.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var minion_1 = __webpack_require__(/*! ../characters/minion */ "./src/characters/minion.ts");
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var state_1 = __webpack_require__(/*! ../state */ "./src/state.ts");
var menu_button_1 = __webpack_require__(/*! ../ui/menu-button */ "./src/ui/menu-button.ts");
// Tiles are 1-indexed.
/** Glowing orb ring. */
var ORB_TILE_INDEX = 47;
/** Glowing arrow in the tile map. */
var ARROW_TILE_INDEX = 33;
/** Spike */
var SPIKE_TILE_INDEX = 36;
/** Minion spawn cross in the tile map. */
var SPAWN_TILE_INDEX = 45;
var EXIT_TILE_INDEX = SPAWN_TILE_INDEX + 1;
var BUTTON_TILE_INDEX = 41;
/** Like redstone, but one use. Like an unlit fuse. */
var WIRE_TILE_INDEX = 43;
/** Closed door. */
var DOOR_TILE_INDEX = 51;
/** The spike that can move. */
var MOVING_SPIKE_TILE_INDEX = 56;
/** Just a black square. */
var VOID_TILE_INDEX = 26;
// Sprites are 0-indexed.
/** Minions */
var MINION_SPRITE_INDEX = 60;
var MINION_DEATH_SPRITE_INDEX = 63;
var MINION_BLESSED_SPRITE_INDEX = 70;
var MINION_BLESSED_DEATH_SPRITE_INDEX = 73;
/** Demons */
var DEMON_SPRITE_INDEX = 80;
var DEMON_DEATH_SPRITE_INDEX = 83;
var DEMON_BLESSED_SPRITE_INDEX = 90;
var DEMON_BLESSED_DEATH_SPRITE_INDEX = 93;
/** Walking speed of minion. */
var MINION_SPEED = 150;
var DEMON_SPEED = 100;
/** Data keys. */
/** The allegiance of the sprite. See "Faction_*". */
var DATA_FACTION = 'faction';
var FACTION_MINION = 'minion';
var FACTION_DEMON = 'demon';
/** Whether or not this sprite is blessed. Intended value is boolean. */
var DATA_BLESSED = 'blessed';
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Game',
};
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this, sceneConfig) || this;
        /** The active minions follow each other. The first one is the leader. */
        _this.minions = [];
        /** Whether or not this level is won. Win by bringing the orb to the exit. */
        _this.hasWon = false;
        return _this;
    }
    GameScene.prototype.create = function () {
        var _this = this;
        // const map = this.make.tilemap({key: 'map-1'});
        var map = this.make.tilemap({ key: state_1.getLevelKey(state_1.getLevelNumber()) });
        // Calculate suitable offsets to put the map in the middle of the scene.
        var leftMapOffset = Math.floor((helpers_1.getGameWidth(this) - map.widthInPixels) / 2);
        var topMapOffset = Math.floor((helpers_1.getGameHeight(this) - map.heightInPixels) / 2);
        var tileset = map.addTilesetImage('ld-46', 'tiles', 16, 16, 1, 2);
        var groundLayer = map.createStaticLayer('Ground', tileset, leftMapOffset, topMapOffset)
            .setCollisionByProperty({ collides: true });
        var worldLayer = map.createDynamicLayer('World', tileset, leftMapOffset, topMapOffset)
            .setCollisionByProperty({ collides: true });
        var worldLayer2 = map.createDynamicLayer('World 2', tileset, leftMapOffset, topMapOffset)
            .setCollisionByProperty({ collides: true });
        this.worldLayer = worldLayer;
        // Add animations.
        {
            this.anims.create({
                key: 'minion-death',
                frames: this.anims.generateFrameNumbers('spritesheet', { start: MINION_DEATH_SPRITE_INDEX, end: MINION_DEATH_SPRITE_INDEX + 5 }),
                frameRate: 8,
                repeat: 0,
            });
            this.anims.create({
                key: 'minion-idle',
                frames: this.anims.generateFrameNumbers('spritesheet', { start: MINION_SPRITE_INDEX, end: MINION_SPRITE_INDEX }),
                frameRate: 1,
                repeat: -1,
            });
            this.anims.create({
                key: 'minion-walk',
                frames: this.anims.generateFrameNumbers('spritesheet', { start: MINION_SPRITE_INDEX, end: MINION_SPRITE_INDEX + 1 }),
                frameRate: 8,
                repeat: -1,
            });
            this.anims.create({
                key: 'minion-blessed-death',
                frames: this.anims.generateFrameNumbers('spritesheet', { start: MINION_BLESSED_DEATH_SPRITE_INDEX, end: MINION_BLESSED_DEATH_SPRITE_INDEX + 5 }),
                frameRate: 8,
                repeat: 0,
            });
            this.anims.create({
                key: 'minion-blessed-idle',
                frames: this.anims.generateFrameNumbers('spritesheet', { start: MINION_BLESSED_SPRITE_INDEX, end: MINION_BLESSED_SPRITE_INDEX }),
                frameRate: 1,
                repeat: -1,
            });
            this.anims.create({
                key: 'minion-blessed-walk',
                frames: this.anims.generateFrameNumbers('spritesheet', { start: MINION_BLESSED_SPRITE_INDEX, end: MINION_BLESSED_SPRITE_INDEX + 1 }),
                frameRate: 8,
                repeat: -1,
            });
            // Enemy (demon).
            this.anims.create({
                key: 'demon-death',
                frames: this.anims.generateFrameNumbers('spritesheet', { start: DEMON_DEATH_SPRITE_INDEX, end: DEMON_DEATH_SPRITE_INDEX + 5 }),
                frameRate: 8,
                repeat: 0,
            });
            this.anims.create({
                key: 'demon-idle',
                frames: this.anims.generateFrameNumbers('spritesheet', { start: DEMON_SPRITE_INDEX, end: DEMON_SPRITE_INDEX }),
                frameRate: 1,
                repeat: -1,
            });
            this.anims.create({
                key: 'demon-walk',
                frames: this.anims.generateFrameNumbers('spritesheet', { start: DEMON_SPRITE_INDEX, end: DEMON_SPRITE_INDEX + 1 }),
                frameRate: 8,
                repeat: -1,
            });
            this.anims.create({
                key: 'demon-blessed-death',
                frames: this.anims.generateFrameNumbers('spritesheet', { start: DEMON_BLESSED_DEATH_SPRITE_INDEX, end: DEMON_BLESSED_DEATH_SPRITE_INDEX + 5 }),
                frameRate: 8,
                repeat: 0,
            });
            this.anims.create({
                key: 'demon-blessed-idle',
                frames: this.anims.generateFrameNumbers('spritesheet', { start: DEMON_BLESSED_SPRITE_INDEX, end: DEMON_BLESSED_SPRITE_INDEX }),
                frameRate: 1,
                repeat: -1,
            });
            this.anims.create({
                key: 'demon-blessed-walk',
                frames: this.anims.generateFrameNumbers('spritesheet', { start: DEMON_BLESSED_SPRITE_INDEX, end: DEMON_BLESSED_SPRITE_INDEX + 1 }),
                frameRate: 8,
                repeat: -1,
            });
        }
        /** Total number of minions that will spawn for this map. */
        var NUM_MINIONS = state_1.getNumMinions(state_1.getLevelNumber());
        // Create a list of minions.
        var minions = [];
        // Find the spawn point tile. Need to provide the layer 'World', otherwise it doesn't work.
        this.spawnTile = map.findTile(function (tile) { return tile.index === SPAWN_TILE_INDEX; }, this, undefined, undefined, undefined, undefined, undefined, 'World');
        if (!this.spawnTile) {
            console.warn('Spawn tile not found!');
        }
        for (var i = 0; i < NUM_MINIONS; i++) {
            var minionSprite = this.physics.add.sprite(this.spawnTile.getCenterX(), this.spawnTile.getCenterY(), 'spritesheet', MINION_SPRITE_INDEX)
                .setSize(12, 12);
            minionSprite.setData(DATA_FACTION, FACTION_MINION);
            var minion = new minion_1.Minion(minionSprite);
            minions.push(minion);
        }
        var minionGroup = this.physics.add.group(minions.map(function (x) { return x.sprite; }));
        this.minions = minions;
        // This is a nice helper Phaser provides to create listeners for some of the most common keys.
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        // Experiment: Replace arrows with special things.
        // Create a physics group - useful for colliding the player against all the spikes / orbs.
        var movingSpikeGroup = this.physics.add.group();
        this.demonGroup = this.physics.add.group();
        var orb;
        // Loop over each Tile and tiles with custom sprites.
        worldLayer2.forEachTile(function (tile) {
            var x = tile.getCenterX();
            var y = tile.getCenterY();
            if (tile.index === ORB_TILE_INDEX) {
                // A sprite has its origin at the center, so place the sprite at the center of the tile
                orb = _this.physics.add.sprite(x, y, 'spritesheet', ORB_TILE_INDEX - 1)
                    .setDrag(800).setCircle(7, 1, 1);
                worldLayer2.removeTileAt(tile.x, tile.y);
            }
            else if (tile.index === MOVING_SPIKE_TILE_INDEX) {
                var movingSpike = movingSpikeGroup.create(x, y, 'spritesheet', MOVING_SPIKE_TILE_INDEX - 1).setDrag(800);
                movingSpike.setCircle(7, 1, 1);
                worldLayer2.removeTileAt(tile.x, tile.y);
            }
            else if (tile.index === DEMON_SPRITE_INDEX + 1) {
                // Gotcha: tile index is sprite index + 1.
                var demon = _this.demonGroup.create(x, y, 'spritesheet', DEMON_SPRITE_INDEX);
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
            this.physics.add.overlap(minionGroup, movingSpikeGroup, this.hitMovingSpike, bothActive, this);
            this.physics.add.overlap(orb, minionGroup, this.hitOrb, bothActive, this);
            this.physics.add.overlap(this.demonGroup, movingSpikeGroup, this.hitMovingSpike, bothActive, this);
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
        this.objectiveText = this.add.text(leftMapOffset, topMapOffset - 24, 'Take the orb', { fill: '#FFFFFF' })
            .setFontSize(32).setScale(0.5);
        this.objectiveImageLeft = this.add.image(leftMapOffset + map.widthInPixels - 32, topMapOffset - 16, 'spritesheet', VOID_TILE_INDEX - 1)
            .setOrigin(1, 0.5);
        this.objectiveImageRight = this.add.image(leftMapOffset + map.widthInPixels, topMapOffset - 16, 'spritesheet', ORB_TILE_INDEX - 1)
            .setOrigin(1, 0.5);
        // Arrow pointing to objective. -1 for sprite. +1 for next index.
        this.objectiveArrowImage = this.add.image(leftMapOffset + map.widthInPixels - 16, topMapOffset - 16, 'spritesheet', ARROW_TILE_INDEX)
            .setOrigin(1, 0.5);
        // tslint:disable-next-line: no-unused-expression
        new menu_button_1.MenuButton(this, leftMapOffset + map.widthInPixels, topMapOffset + map.heightInPixels + 8, 'Menu', function () {
            _this.scene.start('LevelSelect');
        }, {
            fontSize: 12, padding: 4,
        }).setOrigin(1, 0);
        // Restart button
        // tslint:disable-next-line: no-unused-expression
        new menu_button_1.MenuButton(this, leftMapOffset, topMapOffset + map.heightInPixels + 8, 'Reset', function () {
            _this.cameras.main.fade(500, 0, 0, 0);
        }, {
            fontSize: 12, padding: 4,
        });
        this.cameras.main.on('camerafadeoutcomplete', function () {
            _this.scene.restart();
        }, this);
    };
    GameScene.prototype.update = function () {
        var leadMinion;
        var minionIndex = this.minions.findIndex(function (minion) { return minion.sprite.active; });
        if (minionIndex < 0) {
            // The level is lost. Unless you can get into a state where a demon
            // reaches the exit after the last minions die.
            // console.log('No more active minions');
            return;
        }
        else {
            leadMinion = this.minions[minionIndex];
        }
        // Every frame, we create a new velocity for the sprite based on what keys
        // the player is holding down.
        // Desired direction.
        var velocity = new Phaser.Math.Vector2(0, 0);
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
        var desiredVelocity = velocity.normalize().scale(MINION_SPEED);
        if (desiredVelocity.length() > 0) {
            animateMinion(leadMinion.sprite, 'walk');
        }
        else {
            animateMinion(leadMinion.sprite, 'idle');
        }
        // The first active minion is controlled by the player.
        var MINION_ACCELERATION_MAGNITUDE = 20;
        accelerateTowardsDesiredVelocity(leadMinion.sprite, desiredVelocity, MINION_ACCELERATION_MAGNITUDE);
        // The other minions follow in the line...
        var prevPos = new Phaser.Math.Vector2(leadMinion.sprite.x, leadMinion.sprite.y);
        for (minionIndex++; minionIndex < this.minions.length; minionIndex++) {
            var curr = this.minions[minionIndex];
            if (!curr.sprite.active) {
                continue;
            }
            // Move towards prev.
            var currPos = new Phaser.Math.Vector2(curr.sprite.x, curr.sprite.y);
            // Path from curr to prev.
            var path = prevPos.subtract(currPos);
            if (path.lengthSq() > 200) {
                // Move towards prev!
                path.normalize().scale(MINION_SPEED);
                animateMinion(curr.sprite, 'walk');
            }
            else {
                // Stand still.
                path.scale(0);
                animateMinion(curr.sprite, 'idle');
            }
            accelerateTowardsDesiredVelocity(curr.sprite, path, MINION_ACCELERATION_MAGNITUDE);
            prevPos = currPos;
        }
        // The demons all chase the lead minion! (Or the closest minion?)
        this.demonGroup.children.iterate(function (child) {
            if (!child.active) {
                return;
            }
            var sprite = child;
            var path = new Phaser.Math.Vector2().copy(leadMinion.sprite.body.position);
            path.subtract(sprite.body.position);
            path.normalize().scale(DEMON_SPEED);
            if (path.length() > 0) {
                animateDemon(sprite, 'walk');
            }
            else {
                animateDemon(sprite, 'idle');
            }
            accelerateTowardsDesiredVelocity(sprite, path, MINION_ACCELERATION_MAGNITUDE);
        });
        if (this.winningSprite) {
            // Shrinking animation.
            this.winningSprite.setScale(this.winningSprite.scale * 0.99);
        }
        // Depth sorting!
        for (var _i = 0, _a = this.minions; _i < _a.length; _i++) {
            var minion = _a[_i];
            minion.sprite.setDepth(minion.sprite.y + minion.sprite.height * minion.sprite.originY);
        }
        this.demonGroup.children.iterate(function (child) {
            var sprite = child;
            sprite.setDepth(sprite.y + sprite.height * sprite.originY);
        });
    };
    /** Handler for when a sprite hits a spike. */
    GameScene.prototype.hitSpike = function (sprite, tile) {
        if (!sprite.active || !sprite.getData(DATA_FACTION)) {
            // Only active minions are affected by sprites.
            return false;
        }
        // The minion dies if it was moving with high enough speed.
        if (sprite.body.velocity.length() > 160) {
            // Offset to make the minion overlap the spike more.
            var offset = sprite.body.velocity.clone().normalize().scale(6);
            this.creatureDeath(sprite, offset);
        }
    };
    /** Handler for when a sprite hits a moving spike. */
    GameScene.prototype.hitMovingSpike = function (sprite, spike) {
        if (!sprite.active || !sprite.getData(DATA_FACTION)) {
            // Only active minions are affected by sprites.
            return false;
        }
        // The minion dies if the distance is small enough.
        var spikePosition = spike.body.position;
        var distanceSq = Math.max(spikePosition.distanceSq(sprite.body.position), 1);
        if (distanceSq < 80) {
            this.creatureDeath(sprite);
        }
    };
    /**
     * Start a creature dying animation. And remove the creature. Works on minions and demons.
     *
     * @param offset To make the death sprite appear in an offset position.
     */
    GameScene.prototype.creatureDeath = function (minion, offset) {
        var _a, _b;
        // Make sure to get the actual middle position of the minion.
        var deathSprite = this.add.sprite(minion.x + (((_a = offset) === null || _a === void 0 ? void 0 : _a.x) || 0), minion.y + (((_b = offset) === null || _b === void 0 ? void 0 : _b.y) || 0), 'spritesheet');
        if (minion.getData(DATA_BLESSED)) {
            deathSprite.setData(DATA_BLESSED, true);
        }
        if (minion.getData(DATA_FACTION) === FACTION_MINION) {
            animateMinion(deathSprite, 'death');
        }
        else {
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
            this.objectiveImageRight.setTexture('spritesheet', minion.getData(DATA_FACTION) === FACTION_MINION
                ? MINION_BLESSED_SPRITE_INDEX + 7 : DEMON_BLESSED_SPRITE_INDEX + 7);
        }
    };
    /** Handler for when something hits an orb. */
    GameScene.prototype.hitOrb = function (s1, s2) {
        console.log('hitOrb factions: ', s1.getData(DATA_FACTION), s2.getData(DATA_FACTION));
        // The minion becomes blessed.
        // Gotcha: The minion might always be s2 no matter the order of
        // minionGroup/orb in the overlap function.
        var minion;
        var orb;
        if (s1.getData(DATA_FACTION) === FACTION_MINION) {
            minion = s1;
            orb = s2;
        }
        else {
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
        this.add.sprite(orb.x, orb.y, 'spritesheet', ORB_TILE_INDEX);
        // Unlock phase 2: Keep it alive.
        // Change the spawn tile as indication.
        this.worldLayer.putTileAt(this.spawnTile.index + 1, this.spawnTile.x, this.spawnTile.y);
        this.objectiveText.setText('Keep it alive');
        this.objectiveImageLeft.setTexture('spritesheet', minion.getData(DATA_FACTION) === FACTION_MINION
            ? MINION_BLESSED_SPRITE_INDEX : DEMON_BLESSED_SPRITE_INDEX);
        this.objectiveImageRight.setTexture('spritesheet', EXIT_TILE_INDEX - 1);
    };
    /** Handler for when a minion and demon collide. */
    GameScene.prototype.hitDemon = function (s1, s2) {
        if (!s1.active || !s2.active) {
            return false;
        }
        var minion;
        var demon;
        if (s1.getData(DATA_FACTION) === FACTION_MINION) {
            minion = s1;
            demon = s2;
        }
        else {
            minion = s2;
            demon = s1;
        }
        // Offset to make the demon and minion overlap more.
        var offset = demon.body.velocity.clone().normalize().scale(8);
        this.creatureDeath(demon, offset);
        this.creatureDeath(minion, offset.clone().scale(-1));
    };
    /** Handler for when a minion hits a button. */
    GameScene.prototype.hitButton = function (minion, tile) {
        if (!minion.active) {
            return false;
        }
        // Minion needs to be close enough to the middle to trigger it.
        var v1 = new Phaser.Math.Vector2(tile.getCenterX(), tile.getCenterY());
        var v2 = new Phaser.Math.Vector2(minion.x, minion.y);
        if (v1.distanceSq(v2) > 50) {
            return false;
        }
        // Replace the button with another tile.
        this.worldLayer.putTileAt(tile.index + 1, tile.x, tile.y);
        var toProcess = [{ x: tile.x, y: tile.y }];
        /** Four directions. */
        var OFFSETS = [{ x: 0, y: 1 }, { x: 0, y: -1 }, { x: 1, y: 0 }, { x: -1, y: 0 }];
        // Cause a chain reaction.
        while (toProcess.length > 0) {
            var curr = toProcess.pop();
            for (var _i = 0, OFFSETS_1 = OFFSETS; _i < OFFSETS_1.length; _i++) {
                var offset = OFFSETS_1[_i];
                // getTileAt has incorrect type. Actually nullable.
                var adjacentTile = this.worldLayer.getTileAt(curr.x + offset.x, curr.y + offset.y);
                if (adjacentTile) {
                    if (adjacentTile.index === WIRE_TILE_INDEX) {
                        // Continue the reaction.
                        toProcess.push({ x: adjacentTile.x, y: adjacentTile.y });
                        // Replace the wire with a depleted wire.
                        this.worldLayer.putTileAt(adjacentTile.index + 1, adjacentTile.x, adjacentTile.y);
                    }
                    else if (adjacentTile.index === DOOR_TILE_INDEX) {
                        // Replace the door with an open door.
                        this.worldLayer.putTileAt(adjacentTile.index + 1, adjacentTile.x, adjacentTile.y);
                    }
                }
                // Also check worldLayer2 for wires only.
                var adjacentTile2 = this.worldLayer2.getTileAt(curr.x + offset.x, curr.y + offset.y);
                if (adjacentTile2 && adjacentTile2.index === WIRE_TILE_INDEX) {
                    // Continue the reaction.
                    toProcess.push({ x: adjacentTile2.x, y: adjacentTile2.y });
                    // Replace the wire with a depleted wire.
                    this.worldLayer2.putTileAt(adjacentTile2.index + 1, adjacentTile2.x, adjacentTile2.y);
                }
            }
        }
    };
    /** Handler for when something hits the exit tile. */
    GameScene.prototype.hitExitTile = function (minion, tile) {
        if (!minion.active || !minion.getData(DATA_BLESSED)) {
            // Only care if the minion is active and blessed.
            return false;
        }
        // Minion needs to be close to the middle.
        var v1 = new Phaser.Math.Vector2(tile.getCenterX(), tile.getCenterY());
        var v2 = new Phaser.Math.Vector2(minion.x, minion.y);
        if (v1.distanceSq(v2) < 50) {
            console.log('WIN!');
            minion.x = tile.getCenterX();
            minion.y = tile.getCenterY();
            minion.active = false;
            minion.body.enable = false;
            this.objectiveText.setText('Success');
            this.objectiveImageLeft.setTexture('spritesheet', VOID_TILE_INDEX - 1);
            this.objectiveArrowImage.setTexture('spritesheet', VOID_TILE_INDEX - 1);
            this.objectiveImageRight.setTexture('spritesheet', minion.getData(DATA_FACTION) === FACTION_MINION
                ? MINION_BLESSED_SPRITE_INDEX : DEMON_BLESSED_SPRITE_INDEX);
            this.hasWon = true;
            state_1.setLevelCompleted();
            this.winningSprite = minion;
        }
    };
    return GameScene;
}(Phaser.Scene));
exports.GameScene = GameScene;
/** Handler for when a minion hits an arrow tile. */
function hitArrow(minion, tile) {
    if (!minion.active) {
        return false;
    }
    // Make a vector with the arrow tile's rotation.
    var unitVector = new Phaser.Math.Vector2(Math.cos(tile.rotation), Math.sin(tile.rotation));
    var tilePosition = new Phaser.Math.Vector2(tile.pixelX, tile.pixelY);
    var minionBody = minion.body;
    var distance = Math.max(tilePosition.distance(minionBody.position), 1);
    // Smaller distance means larger movement.
    minionBody.velocity.add(unitVector.scale((200 / distance) + 100));
}
/**
 * Instead of setting the velocity directly, set acceleration.
 * The farther away from desired velocity, the higher the acceleration.
 */
function accelerateTowardsDesiredVelocity(thing, desiredVelocity, accelerationMagnitude) {
    // Difference between desired velocity and actual.
    var diff = desiredVelocity.clone().subtract(thing.body.velocity);
    thing.setAcceleration(diff.x * accelerationMagnitude, diff.y * accelerationMagnitude);
}
/** Returns whether or not both s1 and s2 are active. */
function bothActive(s1, s2) {
    return s1.active && s2.active;
}
/** Animate a minion. With different animations depending on blessed data. */
function animateMinion(minion, animation) {
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
function animateDemon(demon, animation) {
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


/***/ }),

/***/ "./src/scenes/index.ts":
/*!*****************************!*\
  !*** ./src/scenes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @fileoverview Defines the scenes in the game and some constants. */
Object.defineProperty(exports, "__esModule", { value: true });
var boot_scene_1 = __webpack_require__(/*! ./boot-scene */ "./src/scenes/boot-scene.ts");
var game_scene_2_1 = __webpack_require__(/*! ./game-scene-2 */ "./src/scenes/game-scene-2.ts");
var level_select_scene_1 = __webpack_require__(/*! ./level-select-scene */ "./src/scenes/level-select-scene.ts");
var main_menu_scene_1 = __webpack_require__(/*! ./main-menu-scene */ "./src/scenes/main-menu-scene.ts");
/** Zoom in to make our 16px sprites look bigger. */
exports.GAME_ZOOM = 2;
// TODO: Consider adjusting after resize.
exports.GAME_WIDTH = window.innerWidth / exports.GAME_ZOOM;
exports.GAME_HEIGHT = window.innerHeight / exports.GAME_ZOOM;
// The scenes in the game.
exports.SCENES = [
    boot_scene_1.BootScene,
    main_menu_scene_1.MainMenuScene,
    level_select_scene_1.LevelSelectScene,
    game_scene_2_1.GameScene,
];


/***/ }),

/***/ "./src/scenes/level-select-scene.ts":
/*!******************************************!*\
  !*** ./src/scenes/level-select-scene.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @fileoverview Level select. Also keeps track of global game state. */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var state_1 = __webpack_require__(/*! ../state */ "./src/state.ts");
var menu_button_1 = __webpack_require__(/*! ../ui/menu-button */ "./src/ui/menu-button.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'LevelSelect',
};
/**
 * The initial scene that starts, shows the splash screens, and loads the necessary assets.
 */
var LevelSelectScene = /** @class */ (function (_super) {
    __extends(LevelSelectScene, _super);
    function LevelSelectScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.levelButtons = [];
        return _this;
    }
    LevelSelectScene.prototype.create = function () {
        var _this = this;
        this.add.text(50, 50, 'Select Level', { fill: '#FFFFFF' }).setFontSize(24);
        // Number of levels per row.
        var rowLength = Math.floor((helpers_1.getGameWidth(this) - 100) / 100);
        var _loop_1 = function (i) {
            // Level numbers are 1-indexed.
            var levelNum = i + 1;
            var buttonX = 50 + (i % rowLength) * 100;
            var buttonY = 100 + (50 * Math.floor(i / rowLength));
            var levelButton = new menu_button_1.MenuButton(this_1, buttonX, buttonY, "Level " + levelNum, function () {
                state_1.setLevelNumber(levelNum);
                _this.scene.start('Game');
                console.log('starting level', levelNum);
            });
            this_1.levelButtons.push(levelButton);
            // Also render if the level was completed.
            if (state_1.getLevelCompleted(levelNum)) {
                this_1.add.image(buttonX + levelButton.width - 8, buttonY + levelButton.height - 8, 'spritesheet', 46);
            }
        };
        var this_1 = this;
        // Draw the level buttons.
        for (var i = 0; i < state_1.NUM_LEVELS; i++) {
            _loop_1(i);
        }
        // tslint:disable-next-line: no-unused-expression
        new menu_button_1.MenuButton(this, 50, helpers_1.getGameHeight(this) - 50, 'Back', function () {
            _this.scene.start('MainMenu');
        }, {
            fontSize: 12, padding: 4,
        });
    };
    return LevelSelectScene;
}(Phaser.Scene));
exports.LevelSelectScene = LevelSelectScene;


/***/ }),

/***/ "./src/scenes/main-menu-scene.ts":
/*!***************************************!*\
  !*** ./src/scenes/main-menu-scene.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var menu_button_1 = __webpack_require__(/*! ../ui/menu-button */ "./src/ui/menu-button.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'MainMenu',
};
/**
 * The initial scene that starts, shows the splash screens, and loads the necessary assets.
 */
var MainMenuScene = /** @class */ (function (_super) {
    __extends(MainMenuScene, _super);
    function MainMenuScene() {
        return _super.call(this, sceneConfig) || this;
    }
    MainMenuScene.prototype.create = function () {
        var _this = this;
        // TODO: Change font.
        this.add.text(50, 50, 'Keep it alive', { fill: '#FFFFFF' }).setFontSize(24);
        // tslint:disable-next-line: no-unused-expression
        new menu_button_1.MenuButton(this, 50, 100, 'Start Game', function () {
            _this.scene.start('LevelSelect');
        });
        // tslint:disable-next-line: no-unused-expression
        // new MenuButton(this, 50, 200, 'Help', () => console.log('help button clicked'));
    };
    return MainMenuScene;
}(Phaser.Scene));
exports.MainMenuScene = MainMenuScene;


/***/ }),

/***/ "./src/state.ts":
/*!**********************!*\
  !*** ./src/state.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/** @fileoverview Manages the state in the game. */
Object.defineProperty(exports, "__esModule", { value: true });
/** Number of levels in the game */
exports.NUM_LEVELS = 8;
var STORAGE_KEY = 'ld-46-level-state';
/** Number of minions you get in each level. */
var NUM_MINIONS_PER_LEVEL = [
    1, 1, 1, 2, 5, 5, 2, 3,
];
var selectedLevel = 0;
// Attempt to load from localStorage.
var levelState = attemptLoadFromStorage();
/** Either loads from storage or returns empty object. */
function attemptLoadFromStorage() {
    try {
        var data = window.localStorage.getItem(STORAGE_KEY);
        var parsed = JSON.parse(data);
        if (parsed && typeof parsed === 'object') {
            return parsed;
        }
    }
    catch (e) {
        return {};
    }
    return {};
}
/** Saves the level state. */
function writeToStorage() {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(levelState));
}
/** Set the level to play. 1-indexed. */
function setLevelNumber(level) {
    selectedLevel = level;
}
exports.setLevelNumber = setLevelNumber;
/** Get the current selected level. */
function getLevelNumber() {
    return selectedLevel;
}
exports.getLevelNumber = getLevelNumber;
/** Set a level as completed. Either provide a level or it uses the current one. */
function setLevelCompleted(level) {
    var levelKey = getLevelKey(level || getLevelNumber());
    if (!levelState[levelKey]) {
        levelState[levelKey] = { complete: true };
    }
    else {
        levelState[levelKey].complete = true;
    }
    writeToStorage();
}
exports.setLevelCompleted = setLevelCompleted;
/** Return whether or not the level is completed. */
function getLevelCompleted(level) {
    var _a;
    var state = levelState[getLevelKey(level)];
    if ((_a = state) === null || _a === void 0 ? void 0 : _a.complete) {
        return true;
    }
    return false;
}
exports.getLevelCompleted = getLevelCompleted;
/** Get the string identifier for a level. */
function getLevelKey(level) {
    return "level-" + level;
}
exports.getLevelKey = getLevelKey;
function getNumMinions(level) {
    return NUM_MINIONS_PER_LEVEL[level - 1] || 40; // 40 is error.
}
exports.getNumMinions = getNumMinions;
// TODO: Store data.


/***/ }),

/***/ "./src/ui/menu-button.ts":
/*!*******************************!*\
  !*** ./src/ui/menu-button.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var minimumWidth = 20;
var minimumHeight = 20;
var MenuButton = /** @class */ (function (_super) {
    __extends(MenuButton, _super);
    function MenuButton(scene, x, y, text, onClick, options) {
        var _a, _b;
        var _this = _super.call(this, scene, x, y) || this;
        var padding = ((_a = options) === null || _a === void 0 ? void 0 : _a.padding) || 10; // Default 10 padding.
        _this.padding = padding;
        scene.add.existing(_this);
        _this.setOrigin(0, 0);
        _this.label = scene.add.text(x + padding, y + padding, text)
            .setFontSize(((_b = options) === null || _b === void 0 ? void 0 : _b.fontSize) || 18).setAlign('center');
        // if (this.originX === 0 && this.label) {
        //   this.label.setX(this.x - this.width);
        //   console.log('this set');
        // }
        var labelWidth = _this.label.width + padding * 2;
        var labelHeight = _this.label.height + padding * 2;
        _this.width = labelWidth >= minimumWidth ? labelWidth : minimumWidth;
        _this.height = labelHeight >= minimumHeight ? labelHeight : minimumHeight;
        _this.setInteractive({ useHandCursor: true })
            .on('pointerover', _this.enterMenuButtonHoverState)
            .on('pointerout', _this.enterMenuButtonRestState)
            .on('pointerdown', _this.enterMenuButtonActiveState)
            .on('pointerup', _this.enterMenuButtonHoverState);
        if (onClick) {
            _this.on('pointerup', onClick);
        }
        _this.enterMenuButtonRestState();
        return _this;
    }
    MenuButton.prototype.setOrigin = function (x, y) {
        _super.prototype.setOrigin.call(this, x, y);
        // But the label gets messed up. Hacky fix:
        if (this.originX === 1 && this.label) {
            this.label.setX(this.x + this.padding - this.width);
        }
        return this;
    };
    /** When there's hover. */
    MenuButton.prototype.enterMenuButtonHoverState = function () {
        this.label.setColor('#FCFCFC');
        this.setFillStyle(0x404040);
    };
    /** When there's no iteraction. */
    MenuButton.prototype.enterMenuButtonRestState = function () {
        this.label.setColor('#FFFFFF');
        this.setFillStyle(0x444444);
    };
    /** When there's press. */
    MenuButton.prototype.enterMenuButtonActiveState = function () {
        this.label.setColor('#EEEEEE');
        this.setFillStyle(0x333333);
    };
    return MenuButton;
}(Phaser.GameObjects.Rectangle));
exports.MenuButton = MenuButton;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJhY3RlcnMvbWluaW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYm9vdC1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2dhbWUtc2NlbmUtMi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbGV2ZWwtc2VsZWN0LXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1tZW51LXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvbWVudS1idXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFF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QUM7SUFFRCwwQkFBMEI7SUFDbEIsK0NBQTBCLEdBQWxDO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLENBakUrQixNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FpRTNEO0FBakVZLGdDQUFVIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImV4cG9ydCBjbGFzcyBNaW5pb24ge1xuICAvKiogVGhlIHByZXZpb3VzIG1pbmlvbiBpbiB0aGUgY2hhaW4uIEZvbGxvdyB0aGlzIG9uZS4gKi9cbiAgcHVibGljIHByZXY/OiBNaW5pb247XG4gIC8qKiBUaGUgb25lIGZvbGxvd2luZy4gKi9cbiAgcHVibGljIG5leHQ/OiBNaW5pb247XG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoaXMgbWluaW9uIGlzIGFsaXZlIGFuZCB3ZWxsLiAqL1xuICBwdWJsaWMgaXNBbGl2ZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3ByaXRlOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlKSB7XG4gICAgdGhpcy5pc0FsaXZlID0gdHJ1ZTtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XG5cbmV4cG9ydCBjb25zdCBnZXRHYW1lV2lkdGggPSAoc2NlbmU6IFBoYXNlci5TY2VuZSkgPT4ge1xuICAgIHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLndpZHRoO1xuICB9O1xuXG5leHBvcnQgY29uc3QgZ2V0R2FtZUhlaWdodCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XG4gICAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUuaGVpZ2h0O1xuICB9O1xuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgeyBHQU1FX0hFSUdIVCwgR0FNRV9XSURUSCwgR0FNRV9aT09NLCBTQ0VORVMgfSBmcm9tICcuL3NjZW5lcyc7XG5cbmNvbnN0IGdhbWVDb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XG4gIHRpdGxlOiAnU2FtcGxlJyxcblxuICB0eXBlOiBQaGFzZXIuQVVUTyxcblxuICBzY2FsZToge1xuICAgIHdpZHRoOiBHQU1FX1dJRFRILFxuICAgIGhlaWdodDogR0FNRV9IRUlHSFQsXG4gIH0sXG4gIC8vIFRvIG1ha2Ugb3VyIHBpeGVsIGFydCBsYXJnZXIuXG4gIHpvb206IEdBTUVfWk9PTSxcbiAgc2NlbmU6IFNDRU5FUyxcblxuICBwaHlzaWNzOiB7XG4gICAgZGVmYXVsdDogJ2FyY2FkZScsXG4gICAgYXJjYWRlOiB7XG4gICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgcmVuZGVyOiB7XG4gICAgLy8gYW50aWFsaWFzOiBmYWxzZSxcbiAgICBwaXhlbEFydDogdHJ1ZSxcbiAgfSxcbiAgcGFyZW50OiAnZ2FtZScsXG4gIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAnLFxufTtcblxuZXhwb3J0IGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZyk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gIGdhbWUuc2NhbGUucmVmcmVzaCgpO1xufSk7XG4iLCJpbXBvcnQgeyBnZXRHYW1lSGVpZ2h0LCBnZXRHYW1lV2lkdGggfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IGdldExldmVsS2V5LCBOVU1fTEVWRUxTIH0gZnJvbSAnLi4vc3RhdGUnO1xuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogJ0Jvb3QnLFxufTtcblxuLyoqXG4gKiBUaGUgaW5pdGlhbCBzY2VuZSB0aGF0IGxvYWRzIGFsbCBuZWNlc3NhcnkgYXNzZXRzIHRvIHRoZSBnYW1lIGFuZCBkaXNwbGF5cyBhIGxvYWRpbmcgYmFyLlxuICovXG5leHBvcnQgY2xhc3MgQm9vdFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xuICB9XG5cbiAgcHVibGljIHByZWxvYWQoKSB7XG4gICAgY29uc3QgaGFsZldpZHRoID0gZ2V0R2FtZVdpZHRoKHRoaXMpICogMC41O1xuICAgIGNvbnN0IGhhbGZIZWlnaHQgPSBnZXRHYW1lSGVpZ2h0KHRoaXMpICogMC41O1xuXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJIZWlnaHQgPSAxMDA7XG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJXaWR0aCA9IDQwMDtcblxuICAgIGNvbnN0IHByb2dyZXNzQmFyQ29udGFpbmVyID0gdGhpcy5hZGQucmVjdGFuZ2xlKGhhbGZXaWR0aCwgaGFsZkhlaWdodCwgcHJvZ3Jlc3NCYXJXaWR0aCwgcHJvZ3Jlc3NCYXJIZWlnaHQsIDB4MDAwMDAwKTtcbiAgICBjb25zdCBwcm9ncmVzc0JhciA9IHRoaXMuYWRkLnJlY3RhbmdsZShoYWxmV2lkdGggKyAyMCAtIHByb2dyZXNzQmFyQ29udGFpbmVyLndpZHRoICogMC41LCBoYWxmSGVpZ2h0LCAxMCwgcHJvZ3Jlc3NCYXJIZWlnaHQgLSAyMCwgMHg4ODg4ODgpO1xuXG4gICAgY29uc3QgbG9hZGluZ1RleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDc1LCBoYWxmSGVpZ2h0IC0gMTAwLCAnTG9hZGluZy4uLicpLnNldEZvbnRTaXplKDI0KTtcbiAgICBjb25zdCBwZXJjZW50VGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gMjUsIGhhbGZIZWlnaHQsICcwJScpLnNldEZvbnRTaXplKDI0KTtcbiAgICBjb25zdCBhc3NldFRleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDI1LCBoYWxmSGVpZ2h0ICsgMTAwLCAnJykuc2V0Rm9udFNpemUoMjQpO1xuXG4gICAgdGhpcy5sb2FkLm9uKCdwcm9ncmVzcycsICh2YWx1ZSkgPT4ge1xuICAgICAgcHJvZ3Jlc3NCYXIud2lkdGggPSAocHJvZ3Jlc3NCYXJXaWR0aCAtIDMwKSAqIHZhbHVlO1xuXG4gICAgICBjb25zdCBwZXJjZW50ID0gdmFsdWUgKiAxMDA7XG4gICAgICBwZXJjZW50VGV4dC5zZXRUZXh0KGAke3BlcmNlbnR9JWApO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sb2FkLm9uKCdmaWxlcHJvZ3Jlc3MnLCAoZmlsZSkgPT4ge1xuICAgICAgYXNzZXRUZXh0LnNldFRleHQoZmlsZS5rZXkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sb2FkLm9uKCdjb21wbGV0ZScsICgpID0+IHtcbiAgICAgIGxvYWRpbmdUZXh0LmRlc3Ryb3koKTtcbiAgICAgIHBlcmNlbnRUZXh0LmRlc3Ryb3koKTtcbiAgICAgIGFzc2V0VGV4dC5kZXN0cm95KCk7XG4gICAgICBwcm9ncmVzc0Jhci5kZXN0cm95KCk7XG4gICAgICBwcm9ncmVzc0JhckNvbnRhaW5lci5kZXN0cm95KCk7XG5cbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ01haW5NZW51Jyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxvYWRBc3NldHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGwgYXNzZXRzIHRoYXQgbmVlZCB0byBiZSBsb2FkZWQgYnkgdGhlIGdhbWUgKHNwcml0ZXMsIGltYWdlcywgYW5pbWF0aW9ucywgdGlsZXMsIG11c2ljLCBldGMpXG4gICAqIHNob3VsZCBiZSBhZGRlZCB0byB0aGlzIG1ldGhvZC4gT25jZSBsb2FkZWQgaW4sIHRoZSBsb2FkZXIgd2lsbCBrZWVwIHRyYWNrIG9mIHRoZW0sXG4gICAqIGluZGVwZWRlbnQgb2Ygd2hpY2ggc2NlbmUgaXMgY3VycmVudGx5IGFjdGl2ZSwgc28gdGhleSBjYW4gYmUgYWNjZXNzZWQgYW55d2hlcmUuXG4gICAqL1xuICBwcml2YXRlIGxvYWRBc3NldHMoKSB7XG4gICAgLy8gTG9hZCBzYW1wbGUgYXNzZXRzXG5cbiAgICAvLyBFcnJvciBvbmx5IG9uIGdoLXBhZ2VzOiBGYWlsZWQ6IGh0dHBzOi8venVmZW5ndy5naXRodWIuaW8vYXNzZXRzL3RpbGVtYXBzL2xldmVsLTcuanNvblwiLlxuICAgIC8vIHRlbXBvcmFyeSBoYWNrIGZvciBnaC1wYWdlczpcblxuICAgIHRoaXMubG9hZC5pbWFnZSgndGlsZXMnLCAnYXNzZXRzL3RpbGVzZXRzL3RpbGVzaGVldC1leHRydWRlZC5wbmcnKTtcbiAgICAvLyBMb2FkIGVhY2ggb2YgdGhlIG1haW4gbGV2ZWxzLlxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IE5VTV9MRVZFTFM7IGkrKykge1xuICAgICAgdGhpcy5sb2FkLnRpbGVtYXBUaWxlZEpTT04oZ2V0TGV2ZWxLZXkoaSksIGBhc3NldHMvdGlsZW1hcHMvbGV2ZWwtJHtpfS5qc29uYCk7XG5cbiAgICB9XG5cbiAgICAvLyBIYWNrIHRvIHVzZSB0aGUgdGlsZW1hcCBhcyBhIHNwcml0ZXNoZWV0LlxuICAgIC8vIGh0dHBzOi8vd3d3Lmh0bWw1Z2FtZWRldnMuY29tL3RvcGljLzQ4MjctY3JlYXRpbmctYS1zcHJpdGUtZnJvbS1hLXRpbGVtYXBzLXRpbGVzZXQvXG4gICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdzcHJpdGVzaGVldCcsICdhc3NldHMvdGlsZXNldHMvdGlsZXNoZWV0LWV4dHJ1ZGVkLnBuZycsXG4gICAgICAgIHttYXJnaW46IDEsIHNwYWNpbmc6IDIsIGZyYW1lV2lkdGg6IDE2fSk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTWluaW9uIH0gZnJvbSAnLi4vY2hhcmFjdGVycy9taW5pb24nO1xuaW1wb3J0IHsgZ2V0R2FtZUhlaWdodCwgZ2V0R2FtZVdpZHRoIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBnZXRMZXZlbEtleSwgZ2V0TGV2ZWxOdW1iZXIsIGdldE51bU1pbmlvbnMsIE5VTV9MRVZFTFMsIHNldExldmVsTnVtYmVyLCBzZXRMZXZlbENvbXBsZXRlZCB9IGZyb20gJy4uL3N0YXRlJztcbmltcG9ydCB7IE1lbnVCdXR0b24gfSBmcm9tICcuLi91aS9tZW51LWJ1dHRvbic7XG5cbi8vIFRpbGVzIGFyZSAxLWluZGV4ZWQuXG4vKiogR2xvd2luZyBvcmIgcmluZy4gKi9cbmNvbnN0IE9SQl9USUxFX0lOREVYID0gNDc7XG4vKiogR2xvd2luZyBhcnJvdyBpbiB0aGUgdGlsZSBtYXAuICovXG5jb25zdCBBUlJPV19USUxFX0lOREVYID0gMzM7XG4vKiogU3Bpa2UgKi9cbmNvbnN0IFNQSUtFX1RJTEVfSU5ERVggPSAzNjtcbi8qKiBNaW5pb24gc3Bhd24gY3Jvc3MgaW4gdGhlIHRpbGUgbWFwLiAqL1xuY29uc3QgU1BBV05fVElMRV9JTkRFWCA9IDQ1O1xuY29uc3QgRVhJVF9USUxFX0lOREVYID0gU1BBV05fVElMRV9JTkRFWCArIDE7XG5jb25zdCBCVVRUT05fVElMRV9JTkRFWCA9IDQxO1xuLyoqIExpa2UgcmVkc3RvbmUsIGJ1dCBvbmUgdXNlLiBMaWtlIGFuIHVubGl0IGZ1c2UuICovXG5jb25zdCBXSVJFX1RJTEVfSU5ERVggPSA0Mztcbi8qKiBDbG9zZWQgZG9vci4gKi9cbmNvbnN0IERPT1JfVElMRV9JTkRFWCA9IDUxO1xuLyoqIFRoZSBzcGlrZSB0aGF0IGNhbiBtb3ZlLiAqL1xuY29uc3QgTU9WSU5HX1NQSUtFX1RJTEVfSU5ERVggPSA1Njtcbi8qKiBKdXN0IGEgYmxhY2sgc3F1YXJlLiAqL1xuY29uc3QgVk9JRF9USUxFX0lOREVYID0gMjY7XG5cbi8vIFNwcml0ZXMgYXJlIDAtaW5kZXhlZC5cbi8qKiBNaW5pb25zICovXG5jb25zdCBNSU5JT05fU1BSSVRFX0lOREVYID0gNjA7XG5jb25zdCBNSU5JT05fREVBVEhfU1BSSVRFX0lOREVYID0gNjM7XG5jb25zdCBNSU5JT05fQkxFU1NFRF9TUFJJVEVfSU5ERVggPSA3MDtcbmNvbnN0IE1JTklPTl9CTEVTU0VEX0RFQVRIX1NQUklURV9JTkRFWCA9IDczO1xuLyoqIERlbW9ucyAqL1xuY29uc3QgREVNT05fU1BSSVRFX0lOREVYID0gODA7XG5jb25zdCBERU1PTl9ERUFUSF9TUFJJVEVfSU5ERVggPSA4MztcbmNvbnN0IERFTU9OX0JMRVNTRURfU1BSSVRFX0lOREVYID0gOTA7XG5jb25zdCBERU1PTl9CTEVTU0VEX0RFQVRIX1NQUklURV9JTkRFWCA9IDkzO1xuXG4vKiogV2Fsa2luZyBzcGVlZCBvZiBtaW5pb24uICovXG5jb25zdCBNSU5JT05fU1BFRUQgPSAxNTA7XG5jb25zdCBERU1PTl9TUEVFRCA9IDEwMDtcblxuLyoqIERhdGEga2V5cy4gKi9cbi8qKiBUaGUgYWxsZWdpYW5jZSBvZiB0aGUgc3ByaXRlLiBTZWUgXCJGYWN0aW9uXypcIi4gKi9cbmNvbnN0IERBVEFfRkFDVElPTiA9ICdmYWN0aW9uJztcbmNvbnN0IEZBQ1RJT05fTUlOSU9OID0gJ21pbmlvbic7XG5jb25zdCBGQUNUSU9OX0RFTU9OID0gJ2RlbW9uJztcbi8qKiBXaGV0aGVyIG9yIG5vdCB0aGlzIHNwcml0ZSBpcyBibGVzc2VkLiBJbnRlbmRlZCB2YWx1ZSBpcyBib29sZWFuLiAqL1xuY29uc3QgREFUQV9CTEVTU0VEID0gJ2JsZXNzZWQnO1xuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogJ0dhbWUnLFxufTtcblxuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIHByaXZhdGUgY3Vyc29yS2V5czogUGhhc2VyLlR5cGVzLklucHV0LktleWJvYXJkLkN1cnNvcktleXM7XG5cbiAgcHJpdmF0ZSB3b3JsZExheWVyOiBQaGFzZXIuVGlsZW1hcHMuRHluYW1pY1RpbGVtYXBMYXllcjtcbiAgLyoqIENvbnRhaW5zIHdpcmUuICovXG4gIHByaXZhdGUgd29ybGRMYXllcjI6IFBoYXNlci5UaWxlbWFwcy5EeW5hbWljVGlsZW1hcExheWVyO1xuXG4gIC8qKiBUaGUgYWN0aXZlIG1pbmlvbnMgZm9sbG93IGVhY2ggb3RoZXIuIFRoZSBmaXJzdCBvbmUgaXMgdGhlIGxlYWRlci4gKi9cbiAgcHJpdmF0ZSBtaW5pb25zOiBNaW5pb25bXSA9IFtdO1xuXG4gIHByaXZhdGUgZGVtb25Hcm91cDogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkdyb3VwO1xuXG4gIHByaXZhdGUgc3Bhd25UaWxlOiBQaGFzZXIuVGlsZW1hcHMuVGlsZTtcblxuICAvLyBVSSBlbGVtZW50cy5cbiAgLyoqIFRoZSB0ZXh0IGZpZWxkIGF0IHRoZSB0b3AuIERpc3BsYXlzIHRoZSBvYmplY3RpdmUuICovXG4gIHByaXZhdGUgb2JqZWN0aXZlVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XG4gIC8qKiBPbiB0aGUgbGVmdCBvZiB0aGUgYXJyb3cuICovXG4gIHByaXZhdGUgb2JqZWN0aXZlSW1hZ2VMZWZ0OiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U7XG4gIHByaXZhdGUgb2JqZWN0aXZlQXJyb3dJbWFnZTogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xuICAvKiogT24gdGhlIHJpZ2h0IG9mIHRoZSBhcnJvdy4gKi9cbiAgcHJpdmF0ZSBvYmplY3RpdmVJbWFnZVJpZ2h0OiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2U7XG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoaXMgbGV2ZWwgaXMgd29uLiBXaW4gYnkgYnJpbmdpbmcgdGhlIG9yYiB0byB0aGUgZXhpdC4gKi9cbiAgcHJpdmF0ZSBoYXNXb24gPSBmYWxzZTtcbiAgLyoqIFNwcml0ZSB0aGF0IGNhdXNlZCB0aGUgd2luLiAqL1xuICBwcml2YXRlIHdpbm5pbmdTcHJpdGU/OiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUoKSB7XG4gICAgLy8gY29uc3QgbWFwID0gdGhpcy5tYWtlLnRpbGVtYXAoe2tleTogJ21hcC0xJ30pO1xuICAgIGNvbnN0IG1hcCA9IHRoaXMubWFrZS50aWxlbWFwKHtrZXk6IGdldExldmVsS2V5KGdldExldmVsTnVtYmVyKCkpfSk7XG4gICAgLy8gQ2FsY3VsYXRlIHN1aXRhYmxlIG9mZnNldHMgdG8gcHV0IHRoZSBtYXAgaW4gdGhlIG1pZGRsZSBvZiB0aGUgc2NlbmUuXG4gICAgY29uc3QgbGVmdE1hcE9mZnNldCA9IE1hdGguZmxvb3IoKGdldEdhbWVXaWR0aCh0aGlzKSAtIG1hcC53aWR0aEluUGl4ZWxzKSAvIDIpO1xuICAgIGNvbnN0IHRvcE1hcE9mZnNldCA9IE1hdGguZmxvb3IoKGdldEdhbWVIZWlnaHQodGhpcykgLSBtYXAuaGVpZ2h0SW5QaXhlbHMpIC8gMik7XG5cbiAgICBjb25zdCB0aWxlc2V0ID0gbWFwLmFkZFRpbGVzZXRJbWFnZSgnbGQtNDYnLCAndGlsZXMnLCAxNiwgMTYsIDEsIDIpO1xuICAgIGNvbnN0IGdyb3VuZExheWVyID0gbWFwLmNyZWF0ZVN0YXRpY0xheWVyKCdHcm91bmQnLCB0aWxlc2V0LCBsZWZ0TWFwT2Zmc2V0LCB0b3BNYXBPZmZzZXQpXG4gICAgICAgIC5zZXRDb2xsaXNpb25CeVByb3BlcnR5KHtjb2xsaWRlczogdHJ1ZX0pO1xuICAgIGNvbnN0IHdvcmxkTGF5ZXIgPSBtYXAuY3JlYXRlRHluYW1pY0xheWVyKCdXb3JsZCcsIHRpbGVzZXQsIGxlZnRNYXBPZmZzZXQsIHRvcE1hcE9mZnNldClcbiAgICAgICAgLnNldENvbGxpc2lvbkJ5UHJvcGVydHkoe2NvbGxpZGVzOiB0cnVlfSk7XG4gICAgY29uc3Qgd29ybGRMYXllcjIgPSBtYXAuY3JlYXRlRHluYW1pY0xheWVyKCdXb3JsZCAyJywgdGlsZXNldCwgbGVmdE1hcE9mZnNldCwgdG9wTWFwT2Zmc2V0KVxuICAgICAgICAuc2V0Q29sbGlzaW9uQnlQcm9wZXJ0eSh7Y29sbGlkZXM6IHRydWV9KTtcbiAgICB0aGlzLndvcmxkTGF5ZXIgPSB3b3JsZExheWVyO1xuXG4gICAgLy8gQWRkIGFuaW1hdGlvbnMuXG4gICAge1xuICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICBrZXk6ICdtaW5pb24tZGVhdGgnLFxuICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoXG4gICAgICAgICAgJ3Nwcml0ZXNoZWV0JyxcbiAgICAgICAgICB7c3RhcnQ6IE1JTklPTl9ERUFUSF9TUFJJVEVfSU5ERVgsIGVuZDogTUlOSU9OX0RFQVRIX1NQUklURV9JTkRFWCArIDV9LFxuICAgICAgICAgICksXG4gICAgICAgIGZyYW1lUmF0ZTogOCxcbiAgICAgICAgcmVwZWF0OiAwLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgIGtleTogJ21pbmlvbi1pZGxlJyxcbiAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKFxuICAgICAgICAgICdzcHJpdGVzaGVldCcsXG4gICAgICAgICAgeyBzdGFydDogTUlOSU9OX1NQUklURV9JTkRFWCwgZW5kOiBNSU5JT05fU1BSSVRFX0lOREVYfSxcbiAgICAgICAgICApLFxuICAgICAgICBmcmFtZVJhdGU6IDEsXG4gICAgICAgIHJlcGVhdDogLTEsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAga2V5OiAnbWluaW9uLXdhbGsnLFxuICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoXG4gICAgICAgICAgJ3Nwcml0ZXNoZWV0JyxcbiAgICAgICAgICB7c3RhcnQ6IE1JTklPTl9TUFJJVEVfSU5ERVgsIGVuZDogTUlOSU9OX1NQUklURV9JTkRFWCArIDF9LFxuICAgICAgICAgICksXG4gICAgICAgIGZyYW1lUmF0ZTogOCxcbiAgICAgICAgcmVwZWF0OiAtMSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICBrZXk6ICdtaW5pb24tYmxlc3NlZC1kZWF0aCcsXG4gICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyhcbiAgICAgICAgICAnc3ByaXRlc2hlZXQnLFxuICAgICAgICAgIHtzdGFydDogTUlOSU9OX0JMRVNTRURfREVBVEhfU1BSSVRFX0lOREVYLCBlbmQ6IE1JTklPTl9CTEVTU0VEX0RFQVRIX1NQUklURV9JTkRFWCArIDV9LFxuICAgICAgICAgICksXG4gICAgICAgIGZyYW1lUmF0ZTogOCxcbiAgICAgICAgcmVwZWF0OiAwLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgIGtleTogJ21pbmlvbi1ibGVzc2VkLWlkbGUnLFxuICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoXG4gICAgICAgICAgJ3Nwcml0ZXNoZWV0JyxcbiAgICAgICAgICB7IHN0YXJ0OiBNSU5JT05fQkxFU1NFRF9TUFJJVEVfSU5ERVgsIGVuZDogTUlOSU9OX0JMRVNTRURfU1BSSVRFX0lOREVYfSxcbiAgICAgICAgICApLFxuICAgICAgICBmcmFtZVJhdGU6IDEsXG4gICAgICAgIHJlcGVhdDogLTEsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAga2V5OiAnbWluaW9uLWJsZXNzZWQtd2FsaycsXG4gICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyhcbiAgICAgICAgICAnc3ByaXRlc2hlZXQnLFxuICAgICAgICAgIHtzdGFydDogTUlOSU9OX0JMRVNTRURfU1BSSVRFX0lOREVYLCBlbmQ6IE1JTklPTl9CTEVTU0VEX1NQUklURV9JTkRFWCArIDF9LFxuICAgICAgICAgICksXG4gICAgICAgIGZyYW1lUmF0ZTogOCxcbiAgICAgICAgcmVwZWF0OiAtMSxcbiAgICAgIH0pO1xuICAgICAgLy8gRW5lbXkgKGRlbW9uKS5cbiAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAga2V5OiAnZGVtb24tZGVhdGgnLFxuICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoXG4gICAgICAgICAgJ3Nwcml0ZXNoZWV0JyxcbiAgICAgICAgICB7c3RhcnQ6IERFTU9OX0RFQVRIX1NQUklURV9JTkRFWCwgZW5kOiBERU1PTl9ERUFUSF9TUFJJVEVfSU5ERVggKyA1fSxcbiAgICAgICAgICApLFxuICAgICAgICBmcmFtZVJhdGU6IDgsXG4gICAgICAgIHJlcGVhdDogMCxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICBrZXk6ICdkZW1vbi1pZGxlJyxcbiAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKFxuICAgICAgICAgICdzcHJpdGVzaGVldCcsXG4gICAgICAgICAgeyBzdGFydDogREVNT05fU1BSSVRFX0lOREVYLCBlbmQ6IERFTU9OX1NQUklURV9JTkRFWH0sXG4gICAgICAgICAgKSxcbiAgICAgICAgZnJhbWVSYXRlOiAxLFxuICAgICAgICByZXBlYXQ6IC0xLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgIGtleTogJ2RlbW9uLXdhbGsnLFxuICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoXG4gICAgICAgICAgJ3Nwcml0ZXNoZWV0JyxcbiAgICAgICAgICB7c3RhcnQ6IERFTU9OX1NQUklURV9JTkRFWCwgZW5kOiBERU1PTl9TUFJJVEVfSU5ERVggKyAxfSxcbiAgICAgICAgICApLFxuICAgICAgICBmcmFtZVJhdGU6IDgsXG4gICAgICAgIHJlcGVhdDogLTEsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAga2V5OiAnZGVtb24tYmxlc3NlZC1kZWF0aCcsXG4gICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyhcbiAgICAgICAgICAnc3ByaXRlc2hlZXQnLFxuICAgICAgICAgIHtzdGFydDogREVNT05fQkxFU1NFRF9ERUFUSF9TUFJJVEVfSU5ERVgsIGVuZDogREVNT05fQkxFU1NFRF9ERUFUSF9TUFJJVEVfSU5ERVggKyA1fSxcbiAgICAgICAgICApLFxuICAgICAgICBmcmFtZVJhdGU6IDgsXG4gICAgICAgIHJlcGVhdDogMCxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICBrZXk6ICdkZW1vbi1ibGVzc2VkLWlkbGUnLFxuICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoXG4gICAgICAgICAgJ3Nwcml0ZXNoZWV0JyxcbiAgICAgICAgICB7IHN0YXJ0OiBERU1PTl9CTEVTU0VEX1NQUklURV9JTkRFWCwgZW5kOiBERU1PTl9CTEVTU0VEX1NQUklURV9JTkRFWH0sXG4gICAgICAgICAgKSxcbiAgICAgICAgZnJhbWVSYXRlOiAxLFxuICAgICAgICByZXBlYXQ6IC0xLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgIGtleTogJ2RlbW9uLWJsZXNzZWQtd2FsaycsXG4gICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyhcbiAgICAgICAgICAnc3ByaXRlc2hlZXQnLFxuICAgICAgICAgIHtzdGFydDogREVNT05fQkxFU1NFRF9TUFJJVEVfSU5ERVgsIGVuZDogREVNT05fQkxFU1NFRF9TUFJJVEVfSU5ERVggKyAxfSxcbiAgICAgICAgICApLFxuICAgICAgICBmcmFtZVJhdGU6IDgsXG4gICAgICAgIHJlcGVhdDogLTEsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiogVG90YWwgbnVtYmVyIG9mIG1pbmlvbnMgdGhhdCB3aWxsIHNwYXduIGZvciB0aGlzIG1hcC4gKi9cbiAgICBjb25zdCBOVU1fTUlOSU9OUyA9IGdldE51bU1pbmlvbnMoZ2V0TGV2ZWxOdW1iZXIoKSk7XG5cbiAgICAvLyBDcmVhdGUgYSBsaXN0IG9mIG1pbmlvbnMuXG4gICAgY29uc3QgbWluaW9uczogTWluaW9uW10gPSBbXTtcblxuICAgIC8vIEZpbmQgdGhlIHNwYXduIHBvaW50IHRpbGUuIE5lZWQgdG8gcHJvdmlkZSB0aGUgbGF5ZXIgJ1dvcmxkJywgb3RoZXJ3aXNlIGl0IGRvZXNuJ3Qgd29yay5cbiAgICB0aGlzLnNwYXduVGlsZSA9IG1hcC5maW5kVGlsZSh0aWxlID0+IHRpbGUuaW5kZXggPT09IFNQQVdOX1RJTEVfSU5ERVgsIHRoaXMsXG4gICAgICB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgJ1dvcmxkJyk7XG4gICAgaWYgKCF0aGlzLnNwYXduVGlsZSkge1xuICAgICAgY29uc29sZS53YXJuKCdTcGF3biB0aWxlIG5vdCBmb3VuZCEnKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOVU1fTUlOSU9OUzsgaSsrKSB7XG4gICAgICBjb25zdCBtaW5pb25TcHJpdGUgPSB0aGlzLnBoeXNpY3MuYWRkLnNwcml0ZSh0aGlzLnNwYXduVGlsZS5nZXRDZW50ZXJYKCksXG4gICAgICAgICAgdGhpcy5zcGF3blRpbGUuZ2V0Q2VudGVyWSgpLCAnc3ByaXRlc2hlZXQnLCBNSU5JT05fU1BSSVRFX0lOREVYKVxuICAgICAgICAgICAgICAuc2V0U2l6ZSgxMiwgMTIpO1xuICAgICAgbWluaW9uU3ByaXRlLnNldERhdGEoREFUQV9GQUNUSU9OLCBGQUNUSU9OX01JTklPTik7XG4gICAgICBjb25zdCBtaW5pb24gPSBuZXcgTWluaW9uKG1pbmlvblNwcml0ZSk7XG4gICAgICBtaW5pb25zLnB1c2gobWluaW9uKTtcbiAgICB9XG4gICAgY29uc3QgbWluaW9uR3JvdXAgPSB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKG1pbmlvbnMubWFwKHggPT4geC5zcHJpdGUpKTtcbiAgICB0aGlzLm1pbmlvbnMgPSBtaW5pb25zO1xuXG4gICAgLy8gVGhpcyBpcyBhIG5pY2UgaGVscGVyIFBoYXNlciBwcm92aWRlcyB0byBjcmVhdGUgbGlzdGVuZXJzIGZvciBzb21lIG9mIHRoZSBtb3N0IGNvbW1vbiBrZXlzLlxuICAgIHRoaXMuY3Vyc29yS2V5cyA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xuXG4gICAgLy8gRXhwZXJpbWVudDogUmVwbGFjZSBhcnJvd3Mgd2l0aCBzcGVjaWFsIHRoaW5ncy5cbiAgICAvLyBDcmVhdGUgYSBwaHlzaWNzIGdyb3VwIC0gdXNlZnVsIGZvciBjb2xsaWRpbmcgdGhlIHBsYXllciBhZ2FpbnN0IGFsbCB0aGUgc3Bpa2VzIC8gb3Jicy5cbiAgICBjb25zdCBtb3ZpbmdTcGlrZUdyb3VwID0gdGhpcy5waHlzaWNzLmFkZC5ncm91cCgpO1xuICAgIHRoaXMuZGVtb25Hcm91cCA9IHRoaXMucGh5c2ljcy5hZGQuZ3JvdXAoKTtcbiAgICBsZXQgb3JiOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlO1xuXG4gICAgLy8gTG9vcCBvdmVyIGVhY2ggVGlsZSBhbmQgdGlsZXMgd2l0aCBjdXN0b20gc3ByaXRlcy5cbiAgICB3b3JsZExheWVyMi5mb3JFYWNoVGlsZSh0aWxlID0+IHtcbiAgICAgIGNvbnN0IHggPSB0aWxlLmdldENlbnRlclgoKTtcbiAgICAgIGNvbnN0IHkgPSB0aWxlLmdldENlbnRlclkoKTtcbiAgICAgIGlmICh0aWxlLmluZGV4ID09PSBPUkJfVElMRV9JTkRFWCkge1xuICAgICAgICAvLyBBIHNwcml0ZSBoYXMgaXRzIG9yaWdpbiBhdCB0aGUgY2VudGVyLCBzbyBwbGFjZSB0aGUgc3ByaXRlIGF0IHRoZSBjZW50ZXIgb2YgdGhlIHRpbGVcbiAgICAgICAgb3JiID0gdGhpcy5waHlzaWNzLmFkZC5zcHJpdGUoeCwgeSwgJ3Nwcml0ZXNoZWV0JywgT1JCX1RJTEVfSU5ERVggLSAxKVxuICAgICAgICAgICAgLnNldERyYWcoODAwKS5zZXRDaXJjbGUoNywgMSwgMSk7XG4gICAgICAgIHdvcmxkTGF5ZXIyLnJlbW92ZVRpbGVBdCh0aWxlLngsIHRpbGUueSk7XG4gICAgICB9IGVsc2UgaWYgKHRpbGUuaW5kZXggPT09IE1PVklOR19TUElLRV9USUxFX0lOREVYKSB7XG4gICAgICAgIGNvbnN0IG1vdmluZ1NwaWtlOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlID0gbW92aW5nU3Bpa2VHcm91cC5jcmVhdGUoeCwgeSwgJ3Nwcml0ZXNoZWV0JyxcbiAgICAgICAgICAgIE1PVklOR19TUElLRV9USUxFX0lOREVYIC0gMSkuc2V0RHJhZyg4MDApO1xuICAgICAgICBtb3ZpbmdTcGlrZS5zZXRDaXJjbGUoNywgMSwgMSk7XG4gICAgICAgIHdvcmxkTGF5ZXIyLnJlbW92ZVRpbGVBdCh0aWxlLngsIHRpbGUueSk7XG4gICAgICB9IGVsc2UgaWYgKHRpbGUuaW5kZXggPT09IERFTU9OX1NQUklURV9JTkRFWCArIDEpIHtcbiAgICAgICAgLy8gR290Y2hhOiB0aWxlIGluZGV4IGlzIHNwcml0ZSBpbmRleCArIDEuXG4gICAgICAgIGNvbnN0IGRlbW9uOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlID0gdGhpcy5kZW1vbkdyb3VwLmNyZWF0ZSh4LCB5LCAnc3ByaXRlc2hlZXQnLFxuICAgICAgICAgICAgREVNT05fU1BSSVRFX0lOREVYKTtcbiAgICAgICAgZGVtb24uc2V0U2l6ZSgxMiwgMTIpO1xuICAgICAgICBkZW1vbi5zZXREYXRhKERBVEFfRkFDVElPTiwgRkFDVElPTl9ERU1PTik7XG4gICAgICAgIHdvcmxkTGF5ZXIyLnJlbW92ZVRpbGVBdCh0aWxlLngsIHRpbGUueSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy53b3JsZExheWVyMiA9IHdvcmxkTGF5ZXIyO1xuXG4gICAge1xuICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihtaW5pb25Hcm91cCwgd29ybGRMYXllcik7XG4gICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKG1pbmlvbkdyb3VwLCBncm91bmRMYXllcik7XG4gICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuZGVtb25Hcm91cCwgd29ybGRMYXllcik7XG4gICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKHRoaXMuZGVtb25Hcm91cCwgZ3JvdW5kTGF5ZXIpO1xuXG4gICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKG1vdmluZ1NwaWtlR3JvdXAsIHdvcmxkTGF5ZXIpO1xuICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihtb3ZpbmdTcGlrZUdyb3VwLCBncm91bmRMYXllcik7XG5cbiAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIob3JiLCB3b3JsZExheWVyKTtcbiAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIob3JiLCBncm91bmRMYXllcik7XG5cbiAgICAgIHRoaXMucGh5c2ljcy5hZGQub3ZlcmxhcChtaW5pb25Hcm91cCwgbW92aW5nU3Bpa2VHcm91cCxcbiAgICAgICAgICB0aGlzLmhpdE1vdmluZ1NwaWtlLCBib3RoQWN0aXZlLCB0aGlzKTtcbiAgICAgIHRoaXMucGh5c2ljcy5hZGQub3ZlcmxhcChvcmIsIG1pbmlvbkdyb3VwLCB0aGlzLmhpdE9yYiwgYm90aEFjdGl2ZSwgdGhpcyk7XG4gICAgICB0aGlzLnBoeXNpY3MuYWRkLm92ZXJsYXAodGhpcy5kZW1vbkdyb3VwLCBtb3ZpbmdTcGlrZUdyb3VwLFxuICAgICAgICAgIHRoaXMuaGl0TW92aW5nU3Bpa2UsIGJvdGhBY3RpdmUsIHRoaXMpO1xuICAgICAgdGhpcy5waHlzaWNzLmFkZC5vdmVybGFwKG9yYiwgdGhpcy5kZW1vbkdyb3VwLCB0aGlzLmhpdE9yYiwgYm90aEFjdGl2ZSwgdGhpcyk7XG4gICAgICAvLyBEZW1vbnMgY2FuIGF0dGFjayBtaW5pb25zLlxuICAgICAgdGhpcy5waHlzaWNzLmFkZC5vdmVybGFwKG1pbmlvbkdyb3VwLCB0aGlzLmRlbW9uR3JvdXAsIHRoaXMuaGl0RGVtb24sIGJvdGhBY3RpdmUsIHRoaXMpO1xuXG4gICAgICAvLyBMb2dpYyBmb3Igb3ZlcmxhcCB3aXRoIHNwZWNpZmljIHRpbGVzLlxuICAgICAgd29ybGRMYXllci5zZXRUaWxlSW5kZXhDYWxsYmFjayhBUlJPV19USUxFX0lOREVYLCBoaXRBcnJvdywgdGhpcyk7XG4gICAgICB3b3JsZExheWVyLnNldFRpbGVJbmRleENhbGxiYWNrKFNQSUtFX1RJTEVfSU5ERVgsIHRoaXMuaGl0U3Bpa2UsIHRoaXMpO1xuICAgICAgd29ybGRMYXllci5zZXRUaWxlSW5kZXhDYWxsYmFjayhCVVRUT05fVElMRV9JTkRFWCwgdGhpcy5oaXRCdXR0b24sIHRoaXMpO1xuICAgICAgd29ybGRMYXllci5zZXRUaWxlSW5kZXhDYWxsYmFjayhFWElUX1RJTEVfSU5ERVgsIHRoaXMuaGl0RXhpdFRpbGUsIHRoaXMpO1xuICAgICAgdGhpcy5waHlzaWNzLmFkZC5vdmVybGFwKG1pbmlvbkdyb3VwLCB3b3JsZExheWVyKTtcbiAgICAgIHRoaXMucGh5c2ljcy5hZGQub3ZlcmxhcCh0aGlzLmRlbW9uR3JvdXAsIHdvcmxkTGF5ZXIpO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWZhdWx0IGZvbnQgaXMgbW9ub3NwYWNlZC5cbiAgICB0aGlzLm9iamVjdGl2ZVRleHQgPSB0aGlzLmFkZC50ZXh0KGxlZnRNYXBPZmZzZXQsIHRvcE1hcE9mZnNldCAtIDI0LFxuICAgICAgICAnVGFrZSB0aGUgb3JiJywgeyBmaWxsOiAnI0ZGRkZGRicgfSlcbiAgICAgICAgICAgIC5zZXRGb250U2l6ZSgzMikuc2V0U2NhbGUoMC41KTtcbiAgICB0aGlzLm9iamVjdGl2ZUltYWdlTGVmdCA9IHRoaXMuYWRkLmltYWdlKFxuICAgICAgICBsZWZ0TWFwT2Zmc2V0ICsgbWFwLndpZHRoSW5QaXhlbHMgLSAzMiwgdG9wTWFwT2Zmc2V0IC0gMTYsICdzcHJpdGVzaGVldCcsXG4gICAgICAgIFZPSURfVElMRV9JTkRFWCAtIDEpXG4gICAgICAgICAgICAuc2V0T3JpZ2luKDEsIDAuNSk7XG4gICAgdGhpcy5vYmplY3RpdmVJbWFnZVJpZ2h0ID0gdGhpcy5hZGQuaW1hZ2UoXG4gICAgICAgIGxlZnRNYXBPZmZzZXQgKyBtYXAud2lkdGhJblBpeGVscywgdG9wTWFwT2Zmc2V0IC0gMTYsICdzcHJpdGVzaGVldCcsIE9SQl9USUxFX0lOREVYIC0gMSlcbiAgICAgICAgICAgIC5zZXRPcmlnaW4oMSwgMC41KTtcbiAgICAvLyBBcnJvdyBwb2ludGluZyB0byBvYmplY3RpdmUuIC0xIGZvciBzcHJpdGUuICsxIGZvciBuZXh0IGluZGV4LlxuICAgIHRoaXMub2JqZWN0aXZlQXJyb3dJbWFnZSA9IHRoaXMuYWRkLmltYWdlKFxuICAgICAgICBsZWZ0TWFwT2Zmc2V0ICsgbWFwLndpZHRoSW5QaXhlbHMgLSAxNiwgdG9wTWFwT2Zmc2V0IC0gMTYsICdzcHJpdGVzaGVldCcsIEFSUk9XX1RJTEVfSU5ERVggKVxuICAgICAgICAgICAgIC5zZXRPcmlnaW4oMSwgMC41KTtcblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICBuZXcgTWVudUJ1dHRvbih0aGlzLCBsZWZ0TWFwT2Zmc2V0ICsgbWFwLndpZHRoSW5QaXhlbHMsIHRvcE1hcE9mZnNldCArIG1hcC5oZWlnaHRJblBpeGVscyArIDgsICdNZW51JywgKCkgPT4ge1xuICAgICAgdGhpcy5zY2VuZS5zdGFydCgnTGV2ZWxTZWxlY3QnKTtcbiAgICB9LCB7XG4gICAgICBmb250U2l6ZTogMTIsIHBhZGRpbmc6IDQsXG4gICAgfSkuc2V0T3JpZ2luKDEsIDApO1xuICAgIC8vIFJlc3RhcnQgYnV0dG9uXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11bnVzZWQtZXhwcmVzc2lvblxuICAgIG5ldyBNZW51QnV0dG9uKHRoaXMsIGxlZnRNYXBPZmZzZXQsIHRvcE1hcE9mZnNldCArIG1hcC5oZWlnaHRJblBpeGVscyArIDgsICdSZXNldCcsICgpID0+IHtcbiAgICAgIHRoaXMuY2FtZXJhcy5tYWluLmZhZGUoNTAwLCAwLCAwLCAwKTtcbiAgICB9LCB7XG4gICAgICBmb250U2l6ZTogMTIsIHBhZGRpbmc6IDQsXG4gICAgfSk7XG5cbiAgICB0aGlzLmNhbWVyYXMubWFpbi5vbignY2FtZXJhZmFkZW91dGNvbXBsZXRlJywgKCkgPT4ge1xuICAgICAgdGhpcy5zY2VuZS5yZXN0YXJ0KCk7XG4gICAgfSwgdGhpcyk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKCkge1xuICAgIGxldCBsZWFkTWluaW9uOiBNaW5pb258dW5kZWZpbmVkO1xuXG4gICAgbGV0IG1pbmlvbkluZGV4ID0gdGhpcy5taW5pb25zLmZpbmRJbmRleChtaW5pb24gPT4gbWluaW9uLnNwcml0ZS5hY3RpdmUpO1xuICAgIGlmIChtaW5pb25JbmRleCA8IDApIHtcbiAgICAgIC8vIFRoZSBsZXZlbCBpcyBsb3N0LiBVbmxlc3MgeW91IGNhbiBnZXQgaW50byBhIHN0YXRlIHdoZXJlIGEgZGVtb25cbiAgICAgIC8vIHJlYWNoZXMgdGhlIGV4aXQgYWZ0ZXIgdGhlIGxhc3QgbWluaW9ucyBkaWUuXG4gICAgICAvLyBjb25zb2xlLmxvZygnTm8gbW9yZSBhY3RpdmUgbWluaW9ucycpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZWFkTWluaW9uID0gdGhpcy5taW5pb25zW21pbmlvbkluZGV4XTtcbiAgICB9XG4gICAgLy8gRXZlcnkgZnJhbWUsIHdlIGNyZWF0ZSBhIG5ldyB2ZWxvY2l0eSBmb3IgdGhlIHNwcml0ZSBiYXNlZCBvbiB3aGF0IGtleXNcbiAgICAvLyB0aGUgcGxheWVyIGlzIGhvbGRpbmcgZG93bi5cbiAgICAvLyBEZXNpcmVkIGRpcmVjdGlvbi5cbiAgICBjb25zdCB2ZWxvY2l0eSA9IG5ldyBQaGFzZXIuTWF0aC5WZWN0b3IyKDAsIDApO1xuXG4gICAgaWYgKHRoaXMuY3Vyc29yS2V5cy5sZWZ0LmlzRG93bikge1xuICAgICAgdmVsb2NpdHkueCAtPSAxO1xuICAgIH1cbiAgICBpZiAodGhpcy5jdXJzb3JLZXlzLnJpZ2h0LmlzRG93bikge1xuICAgICAgdmVsb2NpdHkueCArPSAxO1xuICAgIH1cbiAgICBpZiAodGhpcy5jdXJzb3JLZXlzLnVwLmlzRG93bikge1xuICAgICAgdmVsb2NpdHkueSAtPSAxO1xuICAgIH1cbiAgICBpZiAodGhpcy5jdXJzb3JLZXlzLmRvd24uaXNEb3duKSB7XG4gICAgICB2ZWxvY2l0eS55ICs9IDE7XG4gICAgfVxuXG4gICAgLy8gRGVzaXJlZCB2ZWxvY2l0eSBhbHNvIHNldHMgdXAgdGhlIG1heCBzcGVlZC5cbiAgICBjb25zdCBkZXNpcmVkVmVsb2NpdHkgPSB2ZWxvY2l0eS5ub3JtYWxpemUoKS5zY2FsZShNSU5JT05fU1BFRUQpO1xuICAgIGlmIChkZXNpcmVkVmVsb2NpdHkubGVuZ3RoKCkgPiAwKSB7XG4gICAgICBhbmltYXRlTWluaW9uKGxlYWRNaW5pb24uc3ByaXRlLCAnd2FsaycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbmltYXRlTWluaW9uKGxlYWRNaW5pb24uc3ByaXRlLCAnaWRsZScpO1xuICAgIH1cblxuICAgIC8vIFRoZSBmaXJzdCBhY3RpdmUgbWluaW9uIGlzIGNvbnRyb2xsZWQgYnkgdGhlIHBsYXllci5cbiAgICBjb25zdCBNSU5JT05fQUNDRUxFUkFUSU9OX01BR05JVFVERSA9IDIwO1xuICAgIGFjY2VsZXJhdGVUb3dhcmRzRGVzaXJlZFZlbG9jaXR5KGxlYWRNaW5pb24uc3ByaXRlLFxuICAgICAgZGVzaXJlZFZlbG9jaXR5LCBNSU5JT05fQUNDRUxFUkFUSU9OX01BR05JVFVERSk7XG5cbiAgICAvLyBUaGUgb3RoZXIgbWluaW9ucyBmb2xsb3cgaW4gdGhlIGxpbmUuLi5cbiAgICBsZXQgcHJldlBvcyA9IG5ldyBQaGFzZXIuTWF0aC5WZWN0b3IyKGxlYWRNaW5pb24uc3ByaXRlLngsIGxlYWRNaW5pb24uc3ByaXRlLnkpO1xuICAgIGZvciAobWluaW9uSW5kZXgrKzsgbWluaW9uSW5kZXggPCB0aGlzLm1pbmlvbnMubGVuZ3RoOyBtaW5pb25JbmRleCsrKSB7XG4gICAgICBjb25zdCBjdXJyID0gdGhpcy5taW5pb25zW21pbmlvbkluZGV4XTtcbiAgICAgIGlmICghY3Vyci5zcHJpdGUuYWN0aXZlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgLy8gTW92ZSB0b3dhcmRzIHByZXYuXG4gICAgICBjb25zdCBjdXJyUG9zID0gbmV3IFBoYXNlci5NYXRoLlZlY3RvcjIoY3Vyci5zcHJpdGUueCwgY3Vyci5zcHJpdGUueSk7XG4gICAgICAvLyBQYXRoIGZyb20gY3VyciB0byBwcmV2LlxuICAgICAgY29uc3QgcGF0aCA9IHByZXZQb3Muc3VidHJhY3QoY3VyclBvcyk7XG4gICAgICBpZiAocGF0aC5sZW5ndGhTcSgpID4gMjAwKSB7XG4gICAgICAgIC8vIE1vdmUgdG93YXJkcyBwcmV2IVxuICAgICAgICBwYXRoLm5vcm1hbGl6ZSgpLnNjYWxlKE1JTklPTl9TUEVFRCk7XG4gICAgICAgIGFuaW1hdGVNaW5pb24oY3Vyci5zcHJpdGUsICd3YWxrJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTdGFuZCBzdGlsbC5cbiAgICAgICAgcGF0aC5zY2FsZSgwKTtcbiAgICAgICAgYW5pbWF0ZU1pbmlvbihjdXJyLnNwcml0ZSwgJ2lkbGUnKTtcbiAgICAgIH1cbiAgICAgIGFjY2VsZXJhdGVUb3dhcmRzRGVzaXJlZFZlbG9jaXR5KGN1cnIuc3ByaXRlLCBwYXRoLCBNSU5JT05fQUNDRUxFUkFUSU9OX01BR05JVFVERSk7XG5cbiAgICAgIHByZXZQb3MgPSBjdXJyUG9zO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZW1vbnMgYWxsIGNoYXNlIHRoZSBsZWFkIG1pbmlvbiEgKE9yIHRoZSBjbG9zZXN0IG1pbmlvbj8pXG4gICAgdGhpcy5kZW1vbkdyb3VwLmNoaWxkcmVuLml0ZXJhdGUoY2hpbGQgPT4ge1xuICAgICAgaWYgKCFjaGlsZC5hY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3ByaXRlID0gKGNoaWxkIGFzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUpO1xuICAgICAgY29uc3QgcGF0aCA9IG5ldyBQaGFzZXIuTWF0aC5WZWN0b3IyKCkuY29weShsZWFkTWluaW9uLnNwcml0ZS5ib2R5LnBvc2l0aW9uKTtcbiAgICAgIHBhdGguc3VidHJhY3Qoc3ByaXRlLmJvZHkucG9zaXRpb24pO1xuICAgICAgcGF0aC5ub3JtYWxpemUoKS5zY2FsZShERU1PTl9TUEVFRCk7XG4gICAgICBpZiAocGF0aC5sZW5ndGgoKSA+IDApIHtcbiAgICAgICAgYW5pbWF0ZURlbW9uKHNwcml0ZSwgJ3dhbGsnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFuaW1hdGVEZW1vbihzcHJpdGUsICdpZGxlJyk7XG4gICAgICB9XG4gICAgICBhY2NlbGVyYXRlVG93YXJkc0Rlc2lyZWRWZWxvY2l0eShzcHJpdGUsIHBhdGgsIE1JTklPTl9BQ0NFTEVSQVRJT05fTUFHTklUVURFKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLndpbm5pbmdTcHJpdGUpIHtcbiAgICAgIC8vIFNocmlua2luZyBhbmltYXRpb24uXG4gICAgICB0aGlzLndpbm5pbmdTcHJpdGUuc2V0U2NhbGUodGhpcy53aW5uaW5nU3ByaXRlLnNjYWxlICogMC45OSk7XG4gICAgfVxuXG4gICAgLy8gRGVwdGggc29ydGluZyFcbiAgICBmb3IgKGNvbnN0IG1pbmlvbiBvZiB0aGlzLm1pbmlvbnMpIHtcbiAgICAgIG1pbmlvbi5zcHJpdGUuc2V0RGVwdGgobWluaW9uLnNwcml0ZS55ICsgbWluaW9uLnNwcml0ZS5oZWlnaHQgKiBtaW5pb24uc3ByaXRlLm9yaWdpblkpO1xuICAgIH1cbiAgICB0aGlzLmRlbW9uR3JvdXAuY2hpbGRyZW4uaXRlcmF0ZShjaGlsZCA9PiB7XG4gICAgICBjb25zdCBzcHJpdGUgPSAoY2hpbGQgYXMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSk7XG4gICAgICBzcHJpdGUuc2V0RGVwdGgoc3ByaXRlLnkgKyBzcHJpdGUuaGVpZ2h0ICogc3ByaXRlLm9yaWdpblkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEhhbmRsZXIgZm9yIHdoZW4gYSBzcHJpdGUgaGl0cyBhIHNwaWtlLiAqL1xuICBwcml2YXRlIGhpdFNwaWtlKHNwcml0ZTogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSwgdGlsZTogUGhhc2VyLlRpbGVtYXBzLlRpbGUpIHtcbiAgICBpZiAoIXNwcml0ZS5hY3RpdmUgfHwgIXNwcml0ZS5nZXREYXRhKERBVEFfRkFDVElPTikpIHtcbiAgICAgIC8vIE9ubHkgYWN0aXZlIG1pbmlvbnMgYXJlIGFmZmVjdGVkIGJ5IHNwcml0ZXMuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIFRoZSBtaW5pb24gZGllcyBpZiBpdCB3YXMgbW92aW5nIHdpdGggaGlnaCBlbm91Z2ggc3BlZWQuXG4gICAgaWYgKHNwcml0ZS5ib2R5LnZlbG9jaXR5Lmxlbmd0aCgpID4gMTYwKSB7XG4gICAgICAvLyBPZmZzZXQgdG8gbWFrZSB0aGUgbWluaW9uIG92ZXJsYXAgdGhlIHNwaWtlIG1vcmUuXG4gICAgICBjb25zdCBvZmZzZXQgPSBzcHJpdGUuYm9keS52ZWxvY2l0eS5jbG9uZSgpLm5vcm1hbGl6ZSgpLnNjYWxlKDYpO1xuICAgICAgdGhpcy5jcmVhdHVyZURlYXRoKHNwcml0ZSwgb2Zmc2V0KTtcbiAgICB9XG4gIH1cblxuICAvKiogSGFuZGxlciBmb3Igd2hlbiBhIHNwcml0ZSBoaXRzIGEgbW92aW5nIHNwaWtlLiAqL1xuICBwcml2YXRlIGhpdE1vdmluZ1NwaWtlKHNwcml0ZTogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBzcGlrZTogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSkge1xuICAgIGlmICghc3ByaXRlLmFjdGl2ZSB8fCAhc3ByaXRlLmdldERhdGEoREFUQV9GQUNUSU9OKSkge1xuICAgICAgLy8gT25seSBhY3RpdmUgbWluaW9ucyBhcmUgYWZmZWN0ZWQgYnkgc3ByaXRlcy5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gVGhlIG1pbmlvbiBkaWVzIGlmIHRoZSBkaXN0YW5jZSBpcyBzbWFsbCBlbm91Z2guXG4gICAgY29uc3Qgc3Bpa2VQb3NpdGlvbiA9IHNwaWtlLmJvZHkucG9zaXRpb247XG4gICAgY29uc3QgZGlzdGFuY2VTcSA9IE1hdGgubWF4KHNwaWtlUG9zaXRpb24uZGlzdGFuY2VTcShzcHJpdGUuYm9keS5wb3NpdGlvbiksIDEpO1xuICAgIGlmIChkaXN0YW5jZVNxIDwgODApIHtcbiAgICAgIHRoaXMuY3JlYXR1cmVEZWF0aChzcHJpdGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCBhIGNyZWF0dXJlIGR5aW5nIGFuaW1hdGlvbi4gQW5kIHJlbW92ZSB0aGUgY3JlYXR1cmUuIFdvcmtzIG9uIG1pbmlvbnMgYW5kIGRlbW9ucy5cbiAgICpcbiAgICogQHBhcmFtIG9mZnNldCBUbyBtYWtlIHRoZSBkZWF0aCBzcHJpdGUgYXBwZWFyIGluIGFuIG9mZnNldCBwb3NpdGlvbi5cbiAgICovXG4gIHByaXZhdGUgY3JlYXR1cmVEZWF0aChtaW5pb246IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUsIG9mZnNldD86IFBoYXNlci5NYXRoLlZlY3RvcjIpIHtcbiAgICAvLyBNYWtlIHN1cmUgdG8gZ2V0IHRoZSBhY3R1YWwgbWlkZGxlIHBvc2l0aW9uIG9mIHRoZSBtaW5pb24uXG4gICAgY29uc3QgZGVhdGhTcHJpdGUgPSB0aGlzLmFkZC5zcHJpdGUoXG4gICAgICBtaW5pb24ueCArIChvZmZzZXQ/LnggfHwgMCksXG4gICAgICBtaW5pb24ueSArIChvZmZzZXQ/LnkgfHwgMCksXG4gICAgICAnc3ByaXRlc2hlZXQnLFxuICAgICk7XG4gICAgaWYgKG1pbmlvbi5nZXREYXRhKERBVEFfQkxFU1NFRCkpIHtcbiAgICAgIGRlYXRoU3ByaXRlLnNldERhdGEoREFUQV9CTEVTU0VELCB0cnVlKTtcbiAgICB9XG4gICAgaWYgKG1pbmlvbi5nZXREYXRhKERBVEFfRkFDVElPTikgPT09IEZBQ1RJT05fTUlOSU9OKSB7XG4gICAgICBhbmltYXRlTWluaW9uKGRlYXRoU3ByaXRlLCAnZGVhdGgnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYW5pbWF0ZURlbW9uKGRlYXRoU3ByaXRlLCAnZGVhdGgnKTtcbiAgICB9XG4gICAgbWluaW9uLmJvZHkub25Db2xsaWRlID0gZmFsc2U7XG4gICAgbWluaW9uLnNldEFjdGl2ZShmYWxzZSk7XG4gICAgbWluaW9uLnNldFZpc2libGUoZmFsc2UpO1xuICAgIG1pbmlvbi5zZXRBY2NlbGVyYXRpb24oMCwgMCk7XG4gICAgbWluaW9uLnNldFZlbG9jaXR5KDAsIDApO1xuICAgIG1pbmlvbi5ib2R5LmVuYWJsZSA9IHRydWU7XG5cbiAgICAvLyBMb3NlIGNvbmRpdGlvbjogQ291bGRuJ3Qga2VlcCB0aGUgYmxlc3NlZCBtaW5pb24gYWxpdmUuXG4gICAgaWYgKG1pbmlvbi5nZXREYXRhKERBVEFfQkxFU1NFRCkgPT09IHRydWUpIHtcbiAgICAgIHRoaXMub2JqZWN0aXZlVGV4dC5zZXRUZXh0KCdGYWlsdXJlJyk7XG4gICAgICB0aGlzLm9iamVjdGl2ZUFycm93SW1hZ2Uuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICB0aGlzLm9iamVjdGl2ZUltYWdlTGVmdC5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgIHRoaXMub2JqZWN0aXZlSW1hZ2VSaWdodC5zZXRUZXh0dXJlKCdzcHJpdGVzaGVldCcsXG4gICAgICAgICAgbWluaW9uLmdldERhdGEoREFUQV9GQUNUSU9OKSA9PT0gRkFDVElPTl9NSU5JT05cbiAgICAgICAgICA/IE1JTklPTl9CTEVTU0VEX1NQUklURV9JTkRFWCArIDcgOiBERU1PTl9CTEVTU0VEX1NQUklURV9JTkRFWCArIDcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBIYW5kbGVyIGZvciB3aGVuIHNvbWV0aGluZyBoaXRzIGFuIG9yYi4gKi9cbiAgcHJpdmF0ZSBoaXRPcmIoczE6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUsIHMyOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlKSB7XG4gICAgY29uc29sZS5sb2coJ2hpdE9yYiBmYWN0aW9uczogJywgczEuZ2V0RGF0YShEQVRBX0ZBQ1RJT04pLCBzMi5nZXREYXRhKERBVEFfRkFDVElPTikpO1xuICAgIC8vIFRoZSBtaW5pb24gYmVjb21lcyBibGVzc2VkLlxuICAgIC8vIEdvdGNoYTogVGhlIG1pbmlvbiBtaWdodCBhbHdheXMgYmUgczIgbm8gbWF0dGVyIHRoZSBvcmRlciBvZlxuICAgIC8vIG1pbmlvbkdyb3VwL29yYiBpbiB0aGUgb3ZlcmxhcCBmdW5jdGlvbi5cbiAgICBsZXQgbWluaW9uOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlO1xuICAgIGxldCBvcmI6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGU7XG4gICAgaWYgKHMxLmdldERhdGEoREFUQV9GQUNUSU9OKSA9PT0gRkFDVElPTl9NSU5JT04pIHtcbiAgICAgIG1pbmlvbiA9IHMxO1xuICAgICAgb3JiID0gczI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1pbmlvbiA9IHMyO1xuICAgICAgb3JiID0gczE7XG4gICAgfVxuICAgIGlmICghbWluaW9uLmFjdGl2ZSB8fCAhb3JiLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBtaW5pb24uc2V0RGF0YShEQVRBX0JMRVNTRUQsIHRydWUpO1xuICAgIG9yYi5hY3RpdmUgPSBmYWxzZTtcbiAgICBvcmIudmlzaWJsZSA9IGZhbHNlO1xuICAgIC8vIENyZWF0ZSBhIHNwcml0ZSByZXByZXNlbnRpbmcgdGhlIHNoYXR0ZXJlZCByZW1haW5zIG9mIHRoZSBvcmIuXG4gICAgdGhpcy5hZGQuc3ByaXRlKFxuICAgICAgb3JiLngsXG4gICAgICBvcmIueSxcbiAgICAgICdzcHJpdGVzaGVldCcsXG4gICAgICBPUkJfVElMRV9JTkRFWCwgIC8vIC0xIGZvciBzcHJpdGUgaW5kZXgsICsxIGZvciBuZXh0IHNwcml0ZSBpbiB0aGUgc2hlZXQuXG4gICAgKTtcblxuICAgIC8vIFVubG9jayBwaGFzZSAyOiBLZWVwIGl0IGFsaXZlLlxuICAgIC8vIENoYW5nZSB0aGUgc3Bhd24gdGlsZSBhcyBpbmRpY2F0aW9uLlxuICAgIHRoaXMud29ybGRMYXllci5wdXRUaWxlQXQodGhpcy5zcGF3blRpbGUuaW5kZXggKyAxLCB0aGlzLnNwYXduVGlsZS54LCB0aGlzLnNwYXduVGlsZS55KTtcbiAgICB0aGlzLm9iamVjdGl2ZVRleHQuc2V0VGV4dCgnS2VlcCBpdCBhbGl2ZScpO1xuICAgIHRoaXMub2JqZWN0aXZlSW1hZ2VMZWZ0LnNldFRleHR1cmUoJ3Nwcml0ZXNoZWV0JyxcbiAgICAgICAgbWluaW9uLmdldERhdGEoREFUQV9GQUNUSU9OKSA9PT0gRkFDVElPTl9NSU5JT05cbiAgICAgICAgPyBNSU5JT05fQkxFU1NFRF9TUFJJVEVfSU5ERVggOiBERU1PTl9CTEVTU0VEX1NQUklURV9JTkRFWCk7XG4gICAgdGhpcy5vYmplY3RpdmVJbWFnZVJpZ2h0LnNldFRleHR1cmUoJ3Nwcml0ZXNoZWV0JywgRVhJVF9USUxFX0lOREVYIC0gMSk7XG4gIH1cblxuICAvKiogSGFuZGxlciBmb3Igd2hlbiBhIG1pbmlvbiBhbmQgZGVtb24gY29sbGlkZS4gKi9cbiAgcHJpdmF0ZSBoaXREZW1vbihzMTogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSwgczI6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUpIHtcbiAgICBpZiAoIXMxLmFjdGl2ZSB8fCAhczIuYWN0aXZlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBtaW5pb246IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGU7XG4gICAgbGV0IGRlbW9uOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlO1xuICAgIGlmIChzMS5nZXREYXRhKERBVEFfRkFDVElPTikgPT09IEZBQ1RJT05fTUlOSU9OKSB7XG4gICAgICBtaW5pb24gPSBzMTtcbiAgICAgIGRlbW9uID0gczI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1pbmlvbiA9IHMyO1xuICAgICAgZGVtb24gPSBzMTtcbiAgICB9XG4gICAgLy8gT2Zmc2V0IHRvIG1ha2UgdGhlIGRlbW9uIGFuZCBtaW5pb24gb3ZlcmxhcCBtb3JlLlxuICAgIGNvbnN0IG9mZnNldCA9IGRlbW9uLmJvZHkudmVsb2NpdHkuY2xvbmUoKS5ub3JtYWxpemUoKS5zY2FsZSg4KTtcbiAgICB0aGlzLmNyZWF0dXJlRGVhdGgoZGVtb24sIG9mZnNldCk7XG4gICAgdGhpcy5jcmVhdHVyZURlYXRoKG1pbmlvbiwgb2Zmc2V0LmNsb25lKCkuc2NhbGUoLTEpKTtcbiAgfVxuXG4gIC8qKiBIYW5kbGVyIGZvciB3aGVuIGEgbWluaW9uIGhpdHMgYSBidXR0b24uICovXG4gIHByaXZhdGUgaGl0QnV0dG9uKG1pbmlvbjogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSwgdGlsZTogUGhhc2VyLlRpbGVtYXBzLlRpbGUpIHtcbiAgICBpZiAoIW1pbmlvbi5hY3RpdmUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gTWluaW9uIG5lZWRzIHRvIGJlIGNsb3NlIGVub3VnaCB0byB0aGUgbWlkZGxlIHRvIHRyaWdnZXIgaXQuXG4gICAgY29uc3QgdjEgPSBuZXcgUGhhc2VyLk1hdGguVmVjdG9yMih0aWxlLmdldENlbnRlclgoKSwgdGlsZS5nZXRDZW50ZXJZKCkpO1xuICAgIGNvbnN0IHYyID0gbmV3IFBoYXNlci5NYXRoLlZlY3RvcjIobWluaW9uLngsIG1pbmlvbi55KTtcbiAgICBpZiAodjEuZGlzdGFuY2VTcSh2MikgPiA1MCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFJlcGxhY2UgdGhlIGJ1dHRvbiB3aXRoIGFub3RoZXIgdGlsZS5cbiAgICB0aGlzLndvcmxkTGF5ZXIucHV0VGlsZUF0KHRpbGUuaW5kZXggKyAxLCB0aWxlLngsIHRpbGUueSk7XG5cbiAgICBjb25zdCB0b1Byb2Nlc3M6IEFycmF5PHt4OiBudW1iZXIsIHk6IG51bWJlcn0+ID0gW3t4OiB0aWxlLngsIHk6IHRpbGUueX1dO1xuICAgIC8qKiBGb3VyIGRpcmVjdGlvbnMuICovXG4gICAgY29uc3QgT0ZGU0VUUyA9IFt7eDogMCwgeTogMX0sIHt4OiAwLCB5OiAtMX0sIHt4OiAxLCB5OiAwfSwge3g6IC0xLCB5OiAwfV07XG4gICAgLy8gQ2F1c2UgYSBjaGFpbiByZWFjdGlvbi5cbiAgICB3aGlsZSAodG9Qcm9jZXNzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGN1cnIgPSB0b1Byb2Nlc3MucG9wKCk7XG4gICAgICBmb3IgKGNvbnN0IG9mZnNldCBvZiBPRkZTRVRTKSB7XG4gICAgICAgIC8vIGdldFRpbGVBdCBoYXMgaW5jb3JyZWN0IHR5cGUuIEFjdHVhbGx5IG51bGxhYmxlLlxuICAgICAgICBjb25zdCBhZGphY2VudFRpbGUgPSB0aGlzLndvcmxkTGF5ZXIuZ2V0VGlsZUF0KFxuICAgICAgICAgICAgY3Vyci54ICsgb2Zmc2V0LngsIGN1cnIueSArIG9mZnNldC55KTtcbiAgICAgICAgaWYgKGFkamFjZW50VGlsZSkge1xuICAgICAgICAgIGlmIChhZGphY2VudFRpbGUuaW5kZXggPT09IFdJUkVfVElMRV9JTkRFWCkge1xuICAgICAgICAgICAgLy8gQ29udGludWUgdGhlIHJlYWN0aW9uLlxuICAgICAgICAgICAgdG9Qcm9jZXNzLnB1c2goe3g6IGFkamFjZW50VGlsZS54LCB5OiBhZGphY2VudFRpbGUueX0pO1xuICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgd2lyZSB3aXRoIGEgZGVwbGV0ZWQgd2lyZS5cbiAgICAgICAgICAgIHRoaXMud29ybGRMYXllci5wdXRUaWxlQXQoYWRqYWNlbnRUaWxlLmluZGV4ICsgMSwgYWRqYWNlbnRUaWxlLngsIGFkamFjZW50VGlsZS55KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGFkamFjZW50VGlsZS5pbmRleCA9PT0gRE9PUl9USUxFX0lOREVYKSB7XG4gICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBkb29yIHdpdGggYW4gb3BlbiBkb29yLlxuICAgICAgICAgICAgdGhpcy53b3JsZExheWVyLnB1dFRpbGVBdChhZGphY2VudFRpbGUuaW5kZXggKyAxLCBhZGphY2VudFRpbGUueCwgYWRqYWNlbnRUaWxlLnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBBbHNvIGNoZWNrIHdvcmxkTGF5ZXIyIGZvciB3aXJlcyBvbmx5LlxuICAgICAgICBjb25zdCBhZGphY2VudFRpbGUyID0gdGhpcy53b3JsZExheWVyMi5nZXRUaWxlQXQoXG4gICAgICAgICAgICBjdXJyLnggKyBvZmZzZXQueCwgY3Vyci55ICsgb2Zmc2V0LnkpO1xuICAgICAgICBpZiAoYWRqYWNlbnRUaWxlMiAmJiBhZGphY2VudFRpbGUyLmluZGV4ID09PSBXSVJFX1RJTEVfSU5ERVgpIHtcbiAgICAgICAgICAgIC8vIENvbnRpbnVlIHRoZSByZWFjdGlvbi5cbiAgICAgICAgICAgIHRvUHJvY2Vzcy5wdXNoKHt4OiBhZGphY2VudFRpbGUyLngsIHk6IGFkamFjZW50VGlsZTIueX0pO1xuICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgd2lyZSB3aXRoIGEgZGVwbGV0ZWQgd2lyZS5cbiAgICAgICAgICAgIHRoaXMud29ybGRMYXllcjIucHV0VGlsZUF0KGFkamFjZW50VGlsZTIuaW5kZXggKyAxLCBhZGphY2VudFRpbGUyLngsIGFkamFjZW50VGlsZTIueSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogSGFuZGxlciBmb3Igd2hlbiBzb21ldGhpbmcgaGl0cyB0aGUgZXhpdCB0aWxlLiAqL1xuICBwcml2YXRlIGhpdEV4aXRUaWxlKG1pbmlvbjogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSwgdGlsZTogUGhhc2VyLlRpbGVtYXBzLlRpbGUpIHtcbiAgICBpZiAoIW1pbmlvbi5hY3RpdmUgfHwgIW1pbmlvbi5nZXREYXRhKERBVEFfQkxFU1NFRCkpIHtcbiAgICAgIC8vIE9ubHkgY2FyZSBpZiB0aGUgbWluaW9uIGlzIGFjdGl2ZSBhbmQgYmxlc3NlZC5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gTWluaW9uIG5lZWRzIHRvIGJlIGNsb3NlIHRvIHRoZSBtaWRkbGUuXG4gICAgY29uc3QgdjEgPSBuZXcgUGhhc2VyLk1hdGguVmVjdG9yMih0aWxlLmdldENlbnRlclgoKSwgdGlsZS5nZXRDZW50ZXJZKCkpO1xuICAgIGNvbnN0IHYyID0gbmV3IFBoYXNlci5NYXRoLlZlY3RvcjIobWluaW9uLngsIG1pbmlvbi55KTtcbiAgICBpZiAodjEuZGlzdGFuY2VTcSh2MikgPCA1MCkge1xuICAgICAgY29uc29sZS5sb2coJ1dJTiEnKTtcbiAgICAgIG1pbmlvbi54ID0gdGlsZS5nZXRDZW50ZXJYKCk7XG4gICAgICBtaW5pb24ueSA9IHRpbGUuZ2V0Q2VudGVyWSgpO1xuICAgICAgbWluaW9uLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgbWluaW9uLmJvZHkuZW5hYmxlID0gZmFsc2U7XG5cbiAgICAgIHRoaXMub2JqZWN0aXZlVGV4dC5zZXRUZXh0KCdTdWNjZXNzJyk7XG4gICAgICB0aGlzLm9iamVjdGl2ZUltYWdlTGVmdC5zZXRUZXh0dXJlKCdzcHJpdGVzaGVldCcsIFZPSURfVElMRV9JTkRFWCAtIDEpO1xuICAgICAgdGhpcy5vYmplY3RpdmVBcnJvd0ltYWdlLnNldFRleHR1cmUoJ3Nwcml0ZXNoZWV0JywgVk9JRF9USUxFX0lOREVYIC0gMSk7XG4gICAgICB0aGlzLm9iamVjdGl2ZUltYWdlUmlnaHQuc2V0VGV4dHVyZSgnc3ByaXRlc2hlZXQnLFxuICAgICAgICAgIG1pbmlvbi5nZXREYXRhKERBVEFfRkFDVElPTikgPT09IEZBQ1RJT05fTUlOSU9OXG4gICAgICAgICAgPyBNSU5JT05fQkxFU1NFRF9TUFJJVEVfSU5ERVggOiBERU1PTl9CTEVTU0VEX1NQUklURV9JTkRFWCk7XG4gICAgICB0aGlzLmhhc1dvbiA9IHRydWU7XG4gICAgICBzZXRMZXZlbENvbXBsZXRlZCgpO1xuICAgICAgdGhpcy53aW5uaW5nU3ByaXRlID0gbWluaW9uO1xuICAgIH1cbiAgfVxufVxuXG4vKiogSGFuZGxlciBmb3Igd2hlbiBhIG1pbmlvbiBoaXRzIGFuIGFycm93IHRpbGUuICovXG5mdW5jdGlvbiBoaXRBcnJvdyhtaW5pb246IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUsIHRpbGU6IFBoYXNlci5UaWxlbWFwcy5UaWxlKSB7XG4gIGlmICghbWluaW9uLmFjdGl2ZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBNYWtlIGEgdmVjdG9yIHdpdGggdGhlIGFycm93IHRpbGUncyByb3RhdGlvbi5cbiAgY29uc3QgdW5pdFZlY3RvciA9IG5ldyBQaGFzZXIuTWF0aC5WZWN0b3IyKE1hdGguY29zKHRpbGUucm90YXRpb24pLCBNYXRoLnNpbih0aWxlLnJvdGF0aW9uKSk7XG4gIGNvbnN0IHRpbGVQb3NpdGlvbiA9IG5ldyBQaGFzZXIuTWF0aC5WZWN0b3IyKHRpbGUucGl4ZWxYLCB0aWxlLnBpeGVsWSk7XG5cbiAgY29uc3QgbWluaW9uQm9keSA9IChtaW5pb24uYm9keSBhcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuQm9keSk7XG4gIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5tYXgodGlsZVBvc2l0aW9uLmRpc3RhbmNlKG1pbmlvbkJvZHkucG9zaXRpb24pLCAxKTtcbiAgLy8gU21hbGxlciBkaXN0YW5jZSBtZWFucyBsYXJnZXIgbW92ZW1lbnQuXG4gIG1pbmlvbkJvZHkudmVsb2NpdHkuYWRkKHVuaXRWZWN0b3Iuc2NhbGUoKDIwMCAvIGRpc3RhbmNlKSArIDEwMCkpO1xufVxuXG4gIC8qKlxuICAgKiBJbnN0ZWFkIG9mIHNldHRpbmcgdGhlIHZlbG9jaXR5IGRpcmVjdGx5LCBzZXQgYWNjZWxlcmF0aW9uLlxuICAgKiBUaGUgZmFydGhlciBhd2F5IGZyb20gZGVzaXJlZCB2ZWxvY2l0eSwgdGhlIGhpZ2hlciB0aGUgYWNjZWxlcmF0aW9uLlxuICAgKi9cbmZ1bmN0aW9uIGFjY2VsZXJhdGVUb3dhcmRzRGVzaXJlZFZlbG9jaXR5KHRoaW5nOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzaXJlZFZlbG9jaXR5OiBQaGFzZXIuTWF0aC5WZWN0b3IyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZWxlcmF0aW9uTWFnbml0dWRlOiBudW1iZXIpIHtcbiAgLy8gRGlmZmVyZW5jZSBiZXR3ZWVuIGRlc2lyZWQgdmVsb2NpdHkgYW5kIGFjdHVhbC5cbiAgY29uc3QgZGlmZiA9IGRlc2lyZWRWZWxvY2l0eS5jbG9uZSgpLnN1YnRyYWN0KHRoaW5nLmJvZHkudmVsb2NpdHkpO1xuICB0aGluZy5zZXRBY2NlbGVyYXRpb24oXG4gIGRpZmYueCAqIGFjY2VsZXJhdGlvbk1hZ25pdHVkZSwgZGlmZi55ICogYWNjZWxlcmF0aW9uTWFnbml0dWRlKTtcbn1cblxuLyoqIFJldHVybnMgd2hldGhlciBvciBub3QgYm90aCBzMSBhbmQgczIgYXJlIGFjdGl2ZS4gKi9cbmZ1bmN0aW9uIGJvdGhBY3RpdmUoczE6IGFueSwgczI6IGFueSkge1xuICByZXR1cm4gczEuYWN0aXZlICYmIHMyLmFjdGl2ZTtcbn1cblxuLyoqIEFuaW1hdGUgYSBtaW5pb24uIFdpdGggZGlmZmVyZW50IGFuaW1hdGlvbnMgZGVwZW5kaW5nIG9uIGJsZXNzZWQgZGF0YS4gKi9cbmZ1bmN0aW9uIGFuaW1hdGVNaW5pb24obWluaW9uOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlLCBhbmltYXRpb246ICd3YWxrJ3wnaWRsZSd8J2RlYXRoJykge1xuICBpZiAobWluaW9uLmdldERhdGEoREFUQV9CTEVTU0VEKSkge1xuICAgIHN3aXRjaCAoYW5pbWF0aW9uKSB7XG4gICAgICBjYXNlICd3YWxrJzpcbiAgICAgICAgbWluaW9uLnBsYXkoJ21pbmlvbi1ibGVzc2VkLXdhbGsnLCB0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdpZGxlJzpcbiAgICAgICAgbWluaW9uLnBsYXkoJ21pbmlvbi1ibGVzc2VkLWlkbGUnLCB0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkZWF0aCc6XG4gICAgICAgIG1pbmlvbi5wbGF5KCdtaW5pb24tYmxlc3NlZC1kZWF0aCcsIHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgc3dpdGNoIChhbmltYXRpb24pIHtcbiAgICBjYXNlICd3YWxrJzpcbiAgICAgIG1pbmlvbi5wbGF5KCdtaW5pb24td2FsaycsIHRydWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnaWRsZSc6XG4gICAgICBtaW5pb24ucGxheSgnbWluaW9uLWlkbGUnLCB0cnVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2RlYXRoJzpcbiAgICAgIG1pbmlvbi5wbGF5KCdtaW5pb24tZGVhdGgnLCB0cnVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufVxuXG4vKiogQW5pbWF0ZSBhIGRlbW9uLiBXaXRoIGRpZmZlcmVudCBhbmltYXRpb25zIGRlcGVuZGluZyBvbiBibGVzc2VkIGRhdGEuICovXG5mdW5jdGlvbiBhbmltYXRlRGVtb24oZGVtb246IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUsIGFuaW1hdGlvbjogJ3dhbGsnfCdpZGxlJ3wnZGVhdGgnKSB7XG4gIGlmIChkZW1vbi5nZXREYXRhKERBVEFfQkxFU1NFRCkpIHtcbiAgICBzd2l0Y2ggKGFuaW1hdGlvbikge1xuICAgICAgY2FzZSAnd2Fsayc6XG4gICAgICAgIC8vIFRPRE86IEFsc28gZmxpcCBiYXNlZCBvbiB2ZWxvY2l0eS5cbiAgICAgICAgZGVtb24ucGxheSgnZGVtb24tYmxlc3NlZC13YWxrJywgdHJ1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaWRsZSc6XG4gICAgICAgIGRlbW9uLnBsYXkoJ2RlbW9uLWJsZXNzZWQtaWRsZScsIHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RlYXRoJzpcbiAgICAgICAgZGVtb24ucGxheSgnZGVtb24tYmxlc3NlZC1kZWF0aCcsIHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgc3dpdGNoIChhbmltYXRpb24pIHtcbiAgICBjYXNlICd3YWxrJzpcbiAgICAgIGRlbW9uLnBsYXkoJ2RlbW9uLXdhbGsnLCB0cnVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2lkbGUnOlxuICAgICAgZGVtb24ucGxheSgnZGVtb24taWRsZScsIHRydWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZGVhdGgnOlxuICAgICAgZGVtb24ucGxheSgnZGVtb24tZGVhdGgnLCB0cnVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufVxuIiwiLyoqIEBmaWxlb3ZlcnZpZXcgRGVmaW5lcyB0aGUgc2NlbmVzIGluIHRoZSBnYW1lIGFuZCBzb21lIGNvbnN0YW50cy4gKi9cblxuaW1wb3J0IHsgQm9vdFNjZW5lIH0gZnJvbSAnLi9ib290LXNjZW5lJztcbmltcG9ydCB7IEdhbWVTY2VuZSB9IGZyb20gJy4vZ2FtZS1zY2VuZS0yJztcbmltcG9ydCB7IExldmVsU2VsZWN0U2NlbmUgfSBmcm9tICcuL2xldmVsLXNlbGVjdC1zY2VuZSc7XG5pbXBvcnQgeyBNYWluTWVudVNjZW5lIH0gZnJvbSAnLi9tYWluLW1lbnUtc2NlbmUnO1xuXG4vKiogWm9vbSBpbiB0byBtYWtlIG91ciAxNnB4IHNwcml0ZXMgbG9vayBiaWdnZXIuICovXG5leHBvcnQgY29uc3QgR0FNRV9aT09NID0gMjtcblxuLy8gVE9ETzogQ29uc2lkZXIgYWRqdXN0aW5nIGFmdGVyIHJlc2l6ZS5cbmV4cG9ydCBjb25zdCBHQU1FX1dJRFRIID0gd2luZG93LmlubmVyV2lkdGggLyBHQU1FX1pPT007XG5leHBvcnQgY29uc3QgR0FNRV9IRUlHSFQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyBHQU1FX1pPT007XG5cbi8vIFRoZSBzY2VuZXMgaW4gdGhlIGdhbWUuXG5leHBvcnQgY29uc3QgU0NFTkVTID0gW1xuICBCb290U2NlbmUsXG4gIE1haW5NZW51U2NlbmUsXG4gIExldmVsU2VsZWN0U2NlbmUsXG4gIEdhbWVTY2VuZSxcbl07XG4iLCIvKiogQGZpbGVvdmVydmlldyBMZXZlbCBzZWxlY3QuIEFsc28ga2VlcHMgdHJhY2sgb2YgZ2xvYmFsIGdhbWUgc3RhdGUuICovXG5cbmltcG9ydCB7IGdldEdhbWVIZWlnaHQsIGdldEdhbWVXaWR0aCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgTlVNX0xFVkVMUywgc2V0TGV2ZWxOdW1iZXIsIGdldExldmVsQ29tcGxldGVkIH0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHsgTWVudUJ1dHRvbiB9IGZyb20gJy4uL3VpL21lbnUtYnV0dG9uJztcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6ICdMZXZlbFNlbGVjdCcsXG59O1xuXG4vKipcbiAqIFRoZSBpbml0aWFsIHNjZW5lIHRoYXQgc3RhcnRzLCBzaG93cyB0aGUgc3BsYXNoIHNjcmVlbnMsIGFuZCBsb2FkcyB0aGUgbmVjZXNzYXJ5IGFzc2V0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIExldmVsU2VsZWN0U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuXG4gIHByaXZhdGUgbGV2ZWxCdXR0b25zOiBNZW51QnV0dG9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlKCkge1xuICAgIHRoaXMuYWRkLnRleHQoNTAsIDUwLCAnU2VsZWN0IExldmVsJywgeyBmaWxsOiAnI0ZGRkZGRicgfSkuc2V0Rm9udFNpemUoMjQpO1xuXG4gICAgLy8gTnVtYmVyIG9mIGxldmVscyBwZXIgcm93LlxuICAgIGNvbnN0IHJvd0xlbmd0aCA9IE1hdGguZmxvb3IoKGdldEdhbWVXaWR0aCh0aGlzKSAtIDEwMCkgLyAxMDApO1xuXG4gICAgLy8gRHJhdyB0aGUgbGV2ZWwgYnV0dG9ucy5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9MRVZFTFM7IGkrKykge1xuICAgICAgLy8gTGV2ZWwgbnVtYmVycyBhcmUgMS1pbmRleGVkLlxuICAgICAgY29uc3QgbGV2ZWxOdW0gPSBpICsgMTtcbiAgICAgIGNvbnN0IGJ1dHRvblggPSA1MCArIChpICUgcm93TGVuZ3RoKSAqIDEwMDtcbiAgICAgIGNvbnN0IGJ1dHRvblkgPSAxMDAgKyAoNTAgKiBNYXRoLmZsb29yKGkgLyByb3dMZW5ndGgpKTtcbiAgICAgIGNvbnN0IGxldmVsQnV0dG9uID0gbmV3IE1lbnVCdXR0b24odGhpcyxcbiAgICAgICAgICBidXR0b25YLFxuICAgICAgICAgIGJ1dHRvblksXG4gICAgICAgICAgYExldmVsICR7bGV2ZWxOdW19YCxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgIHNldExldmVsTnVtYmVyKGxldmVsTnVtKTtcbiAgICAgICAgdGhpcy5zY2VuZS5zdGFydCgnR2FtZScpO1xuICAgICAgICBjb25zb2xlLmxvZygnc3RhcnRpbmcgbGV2ZWwnLCBsZXZlbE51bSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubGV2ZWxCdXR0b25zLnB1c2gobGV2ZWxCdXR0b24pO1xuICAgICAgLy8gQWxzbyByZW5kZXIgaWYgdGhlIGxldmVsIHdhcyBjb21wbGV0ZWQuXG4gICAgICBpZiAoZ2V0TGV2ZWxDb21wbGV0ZWQobGV2ZWxOdW0pKSB7XG4gICAgICAgIHRoaXMuYWRkLmltYWdlKGJ1dHRvblggKyBsZXZlbEJ1dHRvbi53aWR0aCAtIDgsXG4gICAgICAgICAgICBidXR0b25ZICsgbGV2ZWxCdXR0b24uaGVpZ2h0IC0gOCwgJ3Nwcml0ZXNoZWV0JywgNDYpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICBuZXcgTWVudUJ1dHRvbih0aGlzLCA1MCwgZ2V0R2FtZUhlaWdodCh0aGlzKSAtIDUwLCAnQmFjaycsICgpID0+IHtcbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ01haW5NZW51Jyk7XG4gICAgfSwge1xuICAgICAgZm9udFNpemU6IDEyLCBwYWRkaW5nOiA0LFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBNZW51QnV0dG9uIH0gZnJvbSAnLi4vdWkvbWVudS1idXR0b24nO1xuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogJ01haW5NZW51Jyxcbn07XG5cbi8qKlxuICogVGhlIGluaXRpYWwgc2NlbmUgdGhhdCBzdGFydHMsIHNob3dzIHRoZSBzcGxhc2ggc2NyZWVucywgYW5kIGxvYWRzIHRoZSBuZWNlc3NhcnkgYXNzZXRzLlxuICovXG5leHBvcnQgY2xhc3MgTWFpbk1lbnVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUoKSB7XG4gICAgLy8gVE9ETzogQ2hhbmdlIGZvbnQuXG4gICAgdGhpcy5hZGQudGV4dCg1MCwgNTAsICdLZWVwIGl0IGFsaXZlJywgeyBmaWxsOiAnI0ZGRkZGRicgfSkuc2V0Rm9udFNpemUoMjQpO1xuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11bnVzZWQtZXhwcmVzc2lvblxuICAgIG5ldyBNZW51QnV0dG9uKHRoaXMsIDUwLCAxMDAsICdTdGFydCBHYW1lJywgKCkgPT4ge1xuICAgICAgdGhpcy5zY2VuZS5zdGFydCgnTGV2ZWxTZWxlY3QnKTtcbiAgICB9KTtcblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICAvLyBuZXcgTWVudUJ1dHRvbih0aGlzLCA1MCwgMjAwLCAnSGVscCcsICgpID0+IGNvbnNvbGUubG9nKCdoZWxwIGJ1dHRvbiBjbGlja2VkJykpO1xuICB9XG59XG4iLCIvKiogQGZpbGVvdmVydmlldyBNYW5hZ2VzIHRoZSBzdGF0ZSBpbiB0aGUgZ2FtZS4gKi9cblxuLyoqIE51bWJlciBvZiBsZXZlbHMgaW4gdGhlIGdhbWUgKi9cbmV4cG9ydCBjb25zdCBOVU1fTEVWRUxTID0gODtcblxuY29uc3QgU1RPUkFHRV9LRVkgPSAnbGQtNDYtbGV2ZWwtc3RhdGUnO1xuXG4vKiogTnVtYmVyIG9mIG1pbmlvbnMgeW91IGdldCBpbiBlYWNoIGxldmVsLiAqL1xuY29uc3QgTlVNX01JTklPTlNfUEVSX0xFVkVMID0gW1xuICAxLCAxLCAxLCAyLCA1LCA1LCAyLCAzLFxuXTtcblxuaW50ZXJmYWNlIExldmVsSW5mbyB7XG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGUgbGV2ZWwgaGFzIGJlZW4gY29tcGxldGVkLiAqL1xuICBjb21wbGV0ZTogYm9vbGVhbjtcbn1cblxubGV0IHNlbGVjdGVkTGV2ZWw6IG51bWJlciA9IDA7XG5cbmludGVyZmFjZSBMZXZlbFN0YXRlIHtcbiAgW2tleTogc3RyaW5nXTogTGV2ZWxJbmZvO1xufVxuXG4vLyBBdHRlbXB0IHRvIGxvYWQgZnJvbSBsb2NhbFN0b3JhZ2UuXG5jb25zdCBsZXZlbFN0YXRlOiBMZXZlbFN0YXRlID0gYXR0ZW1wdExvYWRGcm9tU3RvcmFnZSgpO1xuXG4vKiogRWl0aGVyIGxvYWRzIGZyb20gc3RvcmFnZSBvciByZXR1cm5zIGVtcHR5IG9iamVjdC4gKi9cbmZ1bmN0aW9uIGF0dGVtcHRMb2FkRnJvbVN0b3JhZ2UoKTogTGV2ZWxTdGF0ZSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShTVE9SQUdFX0tFWSk7XG4gICAgY29uc3QgcGFyc2VkOiBMZXZlbFN0YXRlID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICBpZiAocGFyc2VkICYmIHR5cGVvZiBwYXJzZWQgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICByZXR1cm4ge307XG59XG5cbi8qKiBTYXZlcyB0aGUgbGV2ZWwgc3RhdGUuICovXG5mdW5jdGlvbiB3cml0ZVRvU3RvcmFnZSgpIHtcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFNUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeShsZXZlbFN0YXRlKSk7XG59XG5cbi8qKiBTZXQgdGhlIGxldmVsIHRvIHBsYXkuIDEtaW5kZXhlZC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRMZXZlbE51bWJlcihsZXZlbDogbnVtYmVyKSB7XG4gIHNlbGVjdGVkTGV2ZWwgPSBsZXZlbDtcbn1cblxuLyoqIEdldCB0aGUgY3VycmVudCBzZWxlY3RlZCBsZXZlbC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMZXZlbE51bWJlcigpIHtcbiAgcmV0dXJuIHNlbGVjdGVkTGV2ZWw7XG59XG5cbi8qKiBTZXQgYSBsZXZlbCBhcyBjb21wbGV0ZWQuIEVpdGhlciBwcm92aWRlIGEgbGV2ZWwgb3IgaXQgdXNlcyB0aGUgY3VycmVudCBvbmUuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0TGV2ZWxDb21wbGV0ZWQobGV2ZWw/OiBudW1iZXIpIHtcbiAgY29uc3QgbGV2ZWxLZXkgPSBnZXRMZXZlbEtleShsZXZlbCB8fCBnZXRMZXZlbE51bWJlcigpKTtcbiAgaWYgKCFsZXZlbFN0YXRlW2xldmVsS2V5XSkge1xuICAgIGxldmVsU3RhdGVbbGV2ZWxLZXldID0ge2NvbXBsZXRlOiB0cnVlfTtcbiAgfSBlbHNlIHtcbiAgICBsZXZlbFN0YXRlW2xldmVsS2V5XS5jb21wbGV0ZSA9IHRydWU7XG4gIH1cbiAgd3JpdGVUb1N0b3JhZ2UoKTtcbn1cblxuLyoqIFJldHVybiB3aGV0aGVyIG9yIG5vdCB0aGUgbGV2ZWwgaXMgY29tcGxldGVkLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExldmVsQ29tcGxldGVkKGxldmVsOiBudW1iZXIpOiBib29sZWFuIHtcbiAgY29uc3Qgc3RhdGUgPSBsZXZlbFN0YXRlW2dldExldmVsS2V5KGxldmVsKV07XG4gIGlmIChzdGF0ZT8uY29tcGxldGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKiBHZXQgdGhlIHN0cmluZyBpZGVudGlmaWVyIGZvciBhIGxldmVsLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExldmVsS2V5KGxldmVsOiBudW1iZXIpOiBzdHJpbmcge1xuICByZXR1cm4gYGxldmVsLSR7bGV2ZWx9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE51bU1pbmlvbnMobGV2ZWw6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBOVU1fTUlOSU9OU19QRVJfTEVWRUxbbGV2ZWwgLSAxXSB8fCA0MDsgIC8vIDQwIGlzIGVycm9yLlxufVxuXG4vLyBUT0RPOiBTdG9yZSBkYXRhLlxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XG5cbmNvbnN0IG1pbmltdW1XaWR0aCA9IDIwO1xuY29uc3QgbWluaW11bUhlaWdodCA9IDIwO1xuXG5pbnRlcmZhY2UgTWVudUJ1dHRvbk9wdGlvbnMge1xuICBmb250U2l6ZT86IG51bWJlcjtcbiAgcGFkZGluZz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE1lbnVCdXR0b24gZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlIHtcbiAgcHJpdmF0ZSBsYWJlbDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XG4gIHByaXZhdGUgcGFkZGluZzogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHZvaWQsIG9wdGlvbnM/OiBNZW51QnV0dG9uT3B0aW9ucykge1xuICAgIHN1cGVyKHNjZW5lLCB4LCB5KTtcbiAgICBjb25zdCBwYWRkaW5nID0gb3B0aW9ucz8ucGFkZGluZyB8fCAxMDsgIC8vIERlZmF1bHQgMTAgcGFkZGluZy5cbiAgICB0aGlzLnBhZGRpbmcgPSBwYWRkaW5nO1xuICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcbiAgICB0aGlzLnNldE9yaWdpbigwLCAwKTtcblxuICAgIHRoaXMubGFiZWwgPSBzY2VuZS5hZGQudGV4dCh4ICsgcGFkZGluZywgeSArIHBhZGRpbmcsIHRleHQpXG4gICAgICAgIC5zZXRGb250U2l6ZShvcHRpb25zPy5mb250U2l6ZSB8fCAxOCkuc2V0QWxpZ24oJ2NlbnRlcicpO1xuXG4gICAgLy8gaWYgKHRoaXMub3JpZ2luWCA9PT0gMCAmJiB0aGlzLmxhYmVsKSB7XG4gICAgLy8gICB0aGlzLmxhYmVsLnNldFgodGhpcy54IC0gdGhpcy53aWR0aCk7XG4gICAgLy8gICBjb25zb2xlLmxvZygndGhpcyBzZXQnKTtcbiAgICAvLyB9XG5cbiAgICBjb25zdCBsYWJlbFdpZHRoID0gdGhpcy5sYWJlbC53aWR0aCArIHBhZGRpbmcgKiAyO1xuICAgIGNvbnN0IGxhYmVsSGVpZ2h0ID0gdGhpcy5sYWJlbC5oZWlnaHQgKyBwYWRkaW5nICogMjtcblxuICAgIHRoaXMud2lkdGggPSBsYWJlbFdpZHRoID49IG1pbmltdW1XaWR0aCA/IGxhYmVsV2lkdGggOiBtaW5pbXVtV2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBsYWJlbEhlaWdodCA+PSBtaW5pbXVtSGVpZ2h0ID8gbGFiZWxIZWlnaHQgOiBtaW5pbXVtSGVpZ2h0O1xuXG4gICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSlcbiAgICAgIC5vbigncG9pbnRlcm92ZXInLCB0aGlzLmVudGVyTWVudUJ1dHRvbkhvdmVyU3RhdGUpXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCB0aGlzLmVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSlcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmVudGVyTWVudUJ1dHRvbkFjdGl2ZVN0YXRlKVxuICAgICAgLm9uKCdwb2ludGVydXAnLCB0aGlzLmVudGVyTWVudUJ1dHRvbkhvdmVyU3RhdGUpO1xuXG4gICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgIHRoaXMub24oJ3BvaW50ZXJ1cCcsIG9uQ2xpY2spO1xuICAgIH1cblxuICAgIHRoaXMuZW50ZXJNZW51QnV0dG9uUmVzdFN0YXRlKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0T3JpZ2luKHg6IG51bWJlciwgeTogbnVtYmVyKTogdGhpcyB7XG4gICAgc3VwZXIuc2V0T3JpZ2luKHgsIHkpO1xuICAgIC8vIEJ1dCB0aGUgbGFiZWwgZ2V0cyBtZXNzZWQgdXAuIEhhY2t5IGZpeDpcbiAgICBpZiAodGhpcy5vcmlnaW5YID09PSAxICYmIHRoaXMubGFiZWwpIHtcbiAgICAgIHRoaXMubGFiZWwuc2V0WCh0aGlzLnggKyB0aGlzLnBhZGRpbmcgLSB0aGlzLndpZHRoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKiogV2hlbiB0aGVyZSdzIGhvdmVyLiAqL1xuICBwcml2YXRlIGVudGVyTWVudUJ1dHRvbkhvdmVyU3RhdGUoKSB7XG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignI0ZDRkNGQycpO1xuICAgIHRoaXMuc2V0RmlsbFN0eWxlKDB4NDA0MDQwKTtcbiAgfVxuXG4gIC8qKiBXaGVuIHRoZXJlJ3Mgbm8gaXRlcmFjdGlvbi4gKi9cbiAgcHJpdmF0ZSBlbnRlck1lbnVCdXR0b25SZXN0U3RhdGUoKSB7XG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignI0ZGRkZGRicpO1xuICAgIHRoaXMuc2V0RmlsbFN0eWxlKDB4NDQ0NDQ0KTtcbiAgfVxuXG4gIC8qKiBXaGVuIHRoZXJlJ3MgcHJlc3MuICovXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uQWN0aXZlU3RhdGUoKSB7XG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignI0VFRUVFRScpO1xuICAgIHRoaXMuc2V0RmlsbFN0eWxlKDB4MzMzMzMzKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==