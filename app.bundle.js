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
        // temporary hack for gh-pages: prefix with repo name "keep-it-alive"
        this.load.image('tiles', 'keep-it-alive/assets/tilesets/tilesheet-extruded.png');
        // Load each of the main levels.
        for (var i = 1; i <= state_1.NUM_LEVELS; i++) {
            this.load.tilemapTiledJSON(state_1.getLevelKey(i), "keep-it-alive/assets/tilemaps/level-" + i + ".json");
        }
        // Hack to use the tilemap as a spritesheet.
        // https://www.html5gamedevs.com/topic/4827-creating-a-sprite-from-a-tilemaps-tileset/
        this.load.spritesheet('spritesheet', 'keep-it-alive/assets/tilesets/tilesheet-extruded.png', { margin: 1, spacing: 2, frameWidth: 16 });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXJhY3RlcnMvbWluaW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYm9vdC1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2dhbWUtc2NlbmUtMi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbGV2ZWwtc2VsZWN0LXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1tZW51LXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvbWVudS1idXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFF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QUM7SUFFRCwwQkFBMEI7SUFDbEIsK0NBQTBCLEdBQWxDO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLENBakUrQixNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FpRTNEO0FBakVZLGdDQUFVIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImV4cG9ydCBjbGFzcyBNaW5pb24ge1xuICAvKiogVGhlIHByZXZpb3VzIG1pbmlvbiBpbiB0aGUgY2hhaW4uIEZvbGxvdyB0aGlzIG9uZS4gKi9cbiAgcHVibGljIHByZXY/OiBNaW5pb247XG4gIC8qKiBUaGUgb25lIGZvbGxvd2luZy4gKi9cbiAgcHVibGljIG5leHQ/OiBNaW5pb247XG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoaXMgbWluaW9uIGlzIGFsaXZlIGFuZCB3ZWxsLiAqL1xuICBwdWJsaWMgaXNBbGl2ZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3ByaXRlOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlKSB7XG4gICAgdGhpcy5pc0FsaXZlID0gdHJ1ZTtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XG5cbmV4cG9ydCBjb25zdCBnZXRHYW1lV2lkdGggPSAoc2NlbmU6IFBoYXNlci5TY2VuZSkgPT4ge1xuICAgIHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLndpZHRoO1xuICB9O1xuXG5leHBvcnQgY29uc3QgZ2V0R2FtZUhlaWdodCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XG4gICAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUuaGVpZ2h0O1xuICB9O1xuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgeyBHQU1FX0hFSUdIVCwgR0FNRV9XSURUSCwgR0FNRV9aT09NLCBTQ0VORVMgfSBmcm9tICcuL3NjZW5lcyc7XG5cbmNvbnN0IGdhbWVDb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XG4gIHRpdGxlOiAnU2FtcGxlJyxcblxuICB0eXBlOiBQaGFzZXIuQVVUTyxcblxuICBzY2FsZToge1xuICAgIHdpZHRoOiBHQU1FX1dJRFRILFxuICAgIGhlaWdodDogR0FNRV9IRUlHSFQsXG4gIH0sXG4gIC8vIFRvIG1ha2Ugb3VyIHBpeGVsIGFydCBsYXJnZXIuXG4gIHpvb206IEdBTUVfWk9PTSxcbiAgc2NlbmU6IFNDRU5FUyxcblxuICBwaHlzaWNzOiB7XG4gICAgZGVmYXVsdDogJ2FyY2FkZScsXG4gICAgYXJjYWRlOiB7XG4gICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgcmVuZGVyOiB7XG4gICAgLy8gYW50aWFsaWFzOiBmYWxzZSxcbiAgICBwaXhlbEFydDogdHJ1ZSxcbiAgfSxcbiAgcGFyZW50OiAnZ2FtZScsXG4gIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAnLFxufTtcblxuZXhwb3J0IGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZyk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gIGdhbWUuc2NhbGUucmVmcmVzaCgpO1xufSk7XG4iLCJpbXBvcnQgeyBnZXRHYW1lSGVpZ2h0LCBnZXRHYW1lV2lkdGggfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IGdldExldmVsS2V5LCBOVU1fTEVWRUxTIH0gZnJvbSAnLi4vc3RhdGUnO1xuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogJ0Jvb3QnLFxufTtcblxuLyoqXG4gKiBUaGUgaW5pdGlhbCBzY2VuZSB0aGF0IGxvYWRzIGFsbCBuZWNlc3NhcnkgYXNzZXRzIHRvIHRoZSBnYW1lIGFuZCBkaXNwbGF5cyBhIGxvYWRpbmcgYmFyLlxuICovXG5leHBvcnQgY2xhc3MgQm9vdFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xuICB9XG5cbiAgcHVibGljIHByZWxvYWQoKSB7XG4gICAgY29uc3QgaGFsZldpZHRoID0gZ2V0R2FtZVdpZHRoKHRoaXMpICogMC41O1xuICAgIGNvbnN0IGhhbGZIZWlnaHQgPSBnZXRHYW1lSGVpZ2h0KHRoaXMpICogMC41O1xuXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJIZWlnaHQgPSAxMDA7XG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJXaWR0aCA9IDQwMDtcblxuICAgIGNvbnN0IHByb2dyZXNzQmFyQ29udGFpbmVyID0gdGhpcy5hZGQucmVjdGFuZ2xlKGhhbGZXaWR0aCwgaGFsZkhlaWdodCwgcHJvZ3Jlc3NCYXJXaWR0aCwgcHJvZ3Jlc3NCYXJIZWlnaHQsIDB4MDAwMDAwKTtcbiAgICBjb25zdCBwcm9ncmVzc0JhciA9IHRoaXMuYWRkLnJlY3RhbmdsZShoYWxmV2lkdGggKyAyMCAtIHByb2dyZXNzQmFyQ29udGFpbmVyLndpZHRoICogMC41LCBoYWxmSGVpZ2h0LCAxMCwgcHJvZ3Jlc3NCYXJIZWlnaHQgLSAyMCwgMHg4ODg4ODgpO1xuXG4gICAgY29uc3QgbG9hZGluZ1RleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDc1LCBoYWxmSGVpZ2h0IC0gMTAwLCAnTG9hZGluZy4uLicpLnNldEZvbnRTaXplKDI0KTtcbiAgICBjb25zdCBwZXJjZW50VGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gMjUsIGhhbGZIZWlnaHQsICcwJScpLnNldEZvbnRTaXplKDI0KTtcbiAgICBjb25zdCBhc3NldFRleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDI1LCBoYWxmSGVpZ2h0ICsgMTAwLCAnJykuc2V0Rm9udFNpemUoMjQpO1xuXG4gICAgdGhpcy5sb2FkLm9uKCdwcm9ncmVzcycsICh2YWx1ZSkgPT4ge1xuICAgICAgcHJvZ3Jlc3NCYXIud2lkdGggPSAocHJvZ3Jlc3NCYXJXaWR0aCAtIDMwKSAqIHZhbHVlO1xuXG4gICAgICBjb25zdCBwZXJjZW50ID0gdmFsdWUgKiAxMDA7XG4gICAgICBwZXJjZW50VGV4dC5zZXRUZXh0KGAke3BlcmNlbnR9JWApO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sb2FkLm9uKCdmaWxlcHJvZ3Jlc3MnLCAoZmlsZSkgPT4ge1xuICAgICAgYXNzZXRUZXh0LnNldFRleHQoZmlsZS5rZXkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sb2FkLm9uKCdjb21wbGV0ZScsICgpID0+IHtcbiAgICAgIGxvYWRpbmdUZXh0LmRlc3Ryb3koKTtcbiAgICAgIHBlcmNlbnRUZXh0LmRlc3Ryb3koKTtcbiAgICAgIGFzc2V0VGV4dC5kZXN0cm95KCk7XG4gICAgICBwcm9ncmVzc0Jhci5kZXN0cm95KCk7XG4gICAgICBwcm9ncmVzc0JhckNvbnRhaW5lci5kZXN0cm95KCk7XG5cbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ01haW5NZW51Jyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxvYWRBc3NldHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGwgYXNzZXRzIHRoYXQgbmVlZCB0byBiZSBsb2FkZWQgYnkgdGhlIGdhbWUgKHNwcml0ZXMsIGltYWdlcywgYW5pbWF0aW9ucywgdGlsZXMsIG11c2ljLCBldGMpXG4gICAqIHNob3VsZCBiZSBhZGRlZCB0byB0aGlzIG1ldGhvZC4gT25jZSBsb2FkZWQgaW4sIHRoZSBsb2FkZXIgd2lsbCBrZWVwIHRyYWNrIG9mIHRoZW0sXG4gICAqIGluZGVwZWRlbnQgb2Ygd2hpY2ggc2NlbmUgaXMgY3VycmVudGx5IGFjdGl2ZSwgc28gdGhleSBjYW4gYmUgYWNjZXNzZWQgYW55d2hlcmUuXG4gICAqL1xuICBwcml2YXRlIGxvYWRBc3NldHMoKSB7XG4gICAgLy8gTG9hZCBzYW1wbGUgYXNzZXRzXG5cbiAgICAvLyBFcnJvciBvbmx5IG9uIGdoLXBhZ2VzOiBGYWlsZWQ6IGh0dHBzOi8venVmZW5ndy5naXRodWIuaW8vYXNzZXRzL3RpbGVtYXBzL2xldmVsLTcuanNvblwiLlxuICAgIC8vIHRlbXBvcmFyeSBoYWNrIGZvciBnaC1wYWdlczogcHJlZml4IHdpdGggcmVwbyBuYW1lIFwia2VlcC1pdC1hbGl2ZVwiXG5cbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3RpbGVzJywgJ2tlZXAtaXQtYWxpdmUvYXNzZXRzL3RpbGVzZXRzL3RpbGVzaGVldC1leHRydWRlZC5wbmcnKTtcbiAgICAvLyBMb2FkIGVhY2ggb2YgdGhlIG1haW4gbGV2ZWxzLlxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IE5VTV9MRVZFTFM7IGkrKykge1xuICAgICAgdGhpcy5sb2FkLnRpbGVtYXBUaWxlZEpTT04oZ2V0TGV2ZWxLZXkoaSksIGBrZWVwLWl0LWFsaXZlL2Fzc2V0cy90aWxlbWFwcy9sZXZlbC0ke2l9Lmpzb25gKTtcblxuICAgIH1cblxuICAgIC8vIEhhY2sgdG8gdXNlIHRoZSB0aWxlbWFwIGFzIGEgc3ByaXRlc2hlZXQuXG4gICAgLy8gaHR0cHM6Ly93d3cuaHRtbDVnYW1lZGV2cy5jb20vdG9waWMvNDgyNy1jcmVhdGluZy1hLXNwcml0ZS1mcm9tLWEtdGlsZW1hcHMtdGlsZXNldC9cbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3Nwcml0ZXNoZWV0JywgJ2tlZXAtaXQtYWxpdmUvYXNzZXRzL3RpbGVzZXRzL3RpbGVzaGVldC1leHRydWRlZC5wbmcnLFxuICAgICAgICB7bWFyZ2luOiAxLCBzcGFjaW5nOiAyLCBmcmFtZVdpZHRoOiAxNn0pO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE1pbmlvbiB9IGZyb20gJy4uL2NoYXJhY3RlcnMvbWluaW9uJztcbmltcG9ydCB7IGdldEdhbWVIZWlnaHQsIGdldEdhbWVXaWR0aCB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgZ2V0TGV2ZWxLZXksIGdldExldmVsTnVtYmVyLCBnZXROdW1NaW5pb25zLCBOVU1fTEVWRUxTLCBzZXRMZXZlbE51bWJlciwgc2V0TGV2ZWxDb21wbGV0ZWQgfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQgeyBNZW51QnV0dG9uIH0gZnJvbSAnLi4vdWkvbWVudS1idXR0b24nO1xuXG4vLyBUaWxlcyBhcmUgMS1pbmRleGVkLlxuLyoqIEdsb3dpbmcgb3JiIHJpbmcuICovXG5jb25zdCBPUkJfVElMRV9JTkRFWCA9IDQ3O1xuLyoqIEdsb3dpbmcgYXJyb3cgaW4gdGhlIHRpbGUgbWFwLiAqL1xuY29uc3QgQVJST1dfVElMRV9JTkRFWCA9IDMzO1xuLyoqIFNwaWtlICovXG5jb25zdCBTUElLRV9USUxFX0lOREVYID0gMzY7XG4vKiogTWluaW9uIHNwYXduIGNyb3NzIGluIHRoZSB0aWxlIG1hcC4gKi9cbmNvbnN0IFNQQVdOX1RJTEVfSU5ERVggPSA0NTtcbmNvbnN0IEVYSVRfVElMRV9JTkRFWCA9IFNQQVdOX1RJTEVfSU5ERVggKyAxO1xuY29uc3QgQlVUVE9OX1RJTEVfSU5ERVggPSA0MTtcbi8qKiBMaWtlIHJlZHN0b25lLCBidXQgb25lIHVzZS4gTGlrZSBhbiB1bmxpdCBmdXNlLiAqL1xuY29uc3QgV0lSRV9USUxFX0lOREVYID0gNDM7XG4vKiogQ2xvc2VkIGRvb3IuICovXG5jb25zdCBET09SX1RJTEVfSU5ERVggPSA1MTtcbi8qKiBUaGUgc3Bpa2UgdGhhdCBjYW4gbW92ZS4gKi9cbmNvbnN0IE1PVklOR19TUElLRV9USUxFX0lOREVYID0gNTY7XG4vKiogSnVzdCBhIGJsYWNrIHNxdWFyZS4gKi9cbmNvbnN0IFZPSURfVElMRV9JTkRFWCA9IDI2O1xuXG4vLyBTcHJpdGVzIGFyZSAwLWluZGV4ZWQuXG4vKiogTWluaW9ucyAqL1xuY29uc3QgTUlOSU9OX1NQUklURV9JTkRFWCA9IDYwO1xuY29uc3QgTUlOSU9OX0RFQVRIX1NQUklURV9JTkRFWCA9IDYzO1xuY29uc3QgTUlOSU9OX0JMRVNTRURfU1BSSVRFX0lOREVYID0gNzA7XG5jb25zdCBNSU5JT05fQkxFU1NFRF9ERUFUSF9TUFJJVEVfSU5ERVggPSA3Mztcbi8qKiBEZW1vbnMgKi9cbmNvbnN0IERFTU9OX1NQUklURV9JTkRFWCA9IDgwO1xuY29uc3QgREVNT05fREVBVEhfU1BSSVRFX0lOREVYID0gODM7XG5jb25zdCBERU1PTl9CTEVTU0VEX1NQUklURV9JTkRFWCA9IDkwO1xuY29uc3QgREVNT05fQkxFU1NFRF9ERUFUSF9TUFJJVEVfSU5ERVggPSA5MztcblxuLyoqIFdhbGtpbmcgc3BlZWQgb2YgbWluaW9uLiAqL1xuY29uc3QgTUlOSU9OX1NQRUVEID0gMTUwO1xuY29uc3QgREVNT05fU1BFRUQgPSAxMDA7XG5cbi8qKiBEYXRhIGtleXMuICovXG4vKiogVGhlIGFsbGVnaWFuY2Ugb2YgdGhlIHNwcml0ZS4gU2VlIFwiRmFjdGlvbl8qXCIuICovXG5jb25zdCBEQVRBX0ZBQ1RJT04gPSAnZmFjdGlvbic7XG5jb25zdCBGQUNUSU9OX01JTklPTiA9ICdtaW5pb24nO1xuY29uc3QgRkFDVElPTl9ERU1PTiA9ICdkZW1vbic7XG4vKiogV2hldGhlciBvciBub3QgdGhpcyBzcHJpdGUgaXMgYmxlc3NlZC4gSW50ZW5kZWQgdmFsdWUgaXMgYm9vbGVhbi4gKi9cbmNvbnN0IERBVEFfQkxFU1NFRCA9ICdibGVzc2VkJztcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6ICdHYW1lJyxcbn07XG5cbmV4cG9ydCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICBwcml2YXRlIGN1cnNvcktleXM6IFBoYXNlci5UeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzO1xuXG4gIHByaXZhdGUgd29ybGRMYXllcjogUGhhc2VyLlRpbGVtYXBzLkR5bmFtaWNUaWxlbWFwTGF5ZXI7XG4gIC8qKiBDb250YWlucyB3aXJlLiAqL1xuICBwcml2YXRlIHdvcmxkTGF5ZXIyOiBQaGFzZXIuVGlsZW1hcHMuRHluYW1pY1RpbGVtYXBMYXllcjtcblxuICAvKiogVGhlIGFjdGl2ZSBtaW5pb25zIGZvbGxvdyBlYWNoIG90aGVyLiBUaGUgZmlyc3Qgb25lIGlzIHRoZSBsZWFkZXIuICovXG4gIHByaXZhdGUgbWluaW9uczogTWluaW9uW10gPSBbXTtcblxuICBwcml2YXRlIGRlbW9uR3JvdXA6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Hcm91cDtcblxuICBwcml2YXRlIHNwYXduVGlsZTogUGhhc2VyLlRpbGVtYXBzLlRpbGU7XG5cbiAgLy8gVUkgZWxlbWVudHMuXG4gIC8qKiBUaGUgdGV4dCBmaWVsZCBhdCB0aGUgdG9wLiBEaXNwbGF5cyB0aGUgb2JqZWN0aXZlLiAqL1xuICBwcml2YXRlIG9iamVjdGl2ZVRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xuICAvKiogT24gdGhlIGxlZnQgb2YgdGhlIGFycm93LiAqL1xuICBwcml2YXRlIG9iamVjdGl2ZUltYWdlTGVmdDogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xuICBwcml2YXRlIG9iamVjdGl2ZUFycm93SW1hZ2U6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZTtcbiAgLyoqIE9uIHRoZSByaWdodCBvZiB0aGUgYXJyb3cuICovXG4gIHByaXZhdGUgb2JqZWN0aXZlSW1hZ2VSaWdodDogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlO1xuXG4gIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGlzIGxldmVsIGlzIHdvbi4gV2luIGJ5IGJyaW5naW5nIHRoZSBvcmIgdG8gdGhlIGV4aXQuICovXG4gIHByaXZhdGUgaGFzV29uID0gZmFsc2U7XG4gIC8qKiBTcHJpdGUgdGhhdCBjYXVzZWQgdGhlIHdpbi4gKi9cbiAgcHJpdmF0ZSB3aW5uaW5nU3ByaXRlPzogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlKCkge1xuICAgIC8vIGNvbnN0IG1hcCA9IHRoaXMubWFrZS50aWxlbWFwKHtrZXk6ICdtYXAtMSd9KTtcbiAgICBjb25zdCBtYXAgPSB0aGlzLm1ha2UudGlsZW1hcCh7a2V5OiBnZXRMZXZlbEtleShnZXRMZXZlbE51bWJlcigpKX0pO1xuICAgIC8vIENhbGN1bGF0ZSBzdWl0YWJsZSBvZmZzZXRzIHRvIHB1dCB0aGUgbWFwIGluIHRoZSBtaWRkbGUgb2YgdGhlIHNjZW5lLlxuICAgIGNvbnN0IGxlZnRNYXBPZmZzZXQgPSBNYXRoLmZsb29yKChnZXRHYW1lV2lkdGgodGhpcykgLSBtYXAud2lkdGhJblBpeGVscykgLyAyKTtcbiAgICBjb25zdCB0b3BNYXBPZmZzZXQgPSBNYXRoLmZsb29yKChnZXRHYW1lSGVpZ2h0KHRoaXMpIC0gbWFwLmhlaWdodEluUGl4ZWxzKSAvIDIpO1xuXG4gICAgY29uc3QgdGlsZXNldCA9IG1hcC5hZGRUaWxlc2V0SW1hZ2UoJ2xkLTQ2JywgJ3RpbGVzJywgMTYsIDE2LCAxLCAyKTtcbiAgICBjb25zdCBncm91bmRMYXllciA9IG1hcC5jcmVhdGVTdGF0aWNMYXllcignR3JvdW5kJywgdGlsZXNldCwgbGVmdE1hcE9mZnNldCwgdG9wTWFwT2Zmc2V0KVxuICAgICAgICAuc2V0Q29sbGlzaW9uQnlQcm9wZXJ0eSh7Y29sbGlkZXM6IHRydWV9KTtcbiAgICBjb25zdCB3b3JsZExheWVyID0gbWFwLmNyZWF0ZUR5bmFtaWNMYXllcignV29ybGQnLCB0aWxlc2V0LCBsZWZ0TWFwT2Zmc2V0LCB0b3BNYXBPZmZzZXQpXG4gICAgICAgIC5zZXRDb2xsaXNpb25CeVByb3BlcnR5KHtjb2xsaWRlczogdHJ1ZX0pO1xuICAgIGNvbnN0IHdvcmxkTGF5ZXIyID0gbWFwLmNyZWF0ZUR5bmFtaWNMYXllcignV29ybGQgMicsIHRpbGVzZXQsIGxlZnRNYXBPZmZzZXQsIHRvcE1hcE9mZnNldClcbiAgICAgICAgLnNldENvbGxpc2lvbkJ5UHJvcGVydHkoe2NvbGxpZGVzOiB0cnVlfSk7XG4gICAgdGhpcy53b3JsZExheWVyID0gd29ybGRMYXllcjtcblxuICAgIC8vIEFkZCBhbmltYXRpb25zLlxuICAgIHtcbiAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAga2V5OiAnbWluaW9uLWRlYXRoJyxcbiAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKFxuICAgICAgICAgICdzcHJpdGVzaGVldCcsXG4gICAgICAgICAge3N0YXJ0OiBNSU5JT05fREVBVEhfU1BSSVRFX0lOREVYLCBlbmQ6IE1JTklPTl9ERUFUSF9TUFJJVEVfSU5ERVggKyA1fSxcbiAgICAgICAgICApLFxuICAgICAgICBmcmFtZVJhdGU6IDgsXG4gICAgICAgIHJlcGVhdDogMCxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICBrZXk6ICdtaW5pb24taWRsZScsXG4gICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyhcbiAgICAgICAgICAnc3ByaXRlc2hlZXQnLFxuICAgICAgICAgIHsgc3RhcnQ6IE1JTklPTl9TUFJJVEVfSU5ERVgsIGVuZDogTUlOSU9OX1NQUklURV9JTkRFWH0sXG4gICAgICAgICAgKSxcbiAgICAgICAgZnJhbWVSYXRlOiAxLFxuICAgICAgICByZXBlYXQ6IC0xLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgIGtleTogJ21pbmlvbi13YWxrJyxcbiAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKFxuICAgICAgICAgICdzcHJpdGVzaGVldCcsXG4gICAgICAgICAge3N0YXJ0OiBNSU5JT05fU1BSSVRFX0lOREVYLCBlbmQ6IE1JTklPTl9TUFJJVEVfSU5ERVggKyAxfSxcbiAgICAgICAgICApLFxuICAgICAgICBmcmFtZVJhdGU6IDgsXG4gICAgICAgIHJlcGVhdDogLTEsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAga2V5OiAnbWluaW9uLWJsZXNzZWQtZGVhdGgnLFxuICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoXG4gICAgICAgICAgJ3Nwcml0ZXNoZWV0JyxcbiAgICAgICAgICB7c3RhcnQ6IE1JTklPTl9CTEVTU0VEX0RFQVRIX1NQUklURV9JTkRFWCwgZW5kOiBNSU5JT05fQkxFU1NFRF9ERUFUSF9TUFJJVEVfSU5ERVggKyA1fSxcbiAgICAgICAgICApLFxuICAgICAgICBmcmFtZVJhdGU6IDgsXG4gICAgICAgIHJlcGVhdDogMCxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICBrZXk6ICdtaW5pb24tYmxlc3NlZC1pZGxlJyxcbiAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKFxuICAgICAgICAgICdzcHJpdGVzaGVldCcsXG4gICAgICAgICAgeyBzdGFydDogTUlOSU9OX0JMRVNTRURfU1BSSVRFX0lOREVYLCBlbmQ6IE1JTklPTl9CTEVTU0VEX1NQUklURV9JTkRFWH0sXG4gICAgICAgICAgKSxcbiAgICAgICAgZnJhbWVSYXRlOiAxLFxuICAgICAgICByZXBlYXQ6IC0xLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgIGtleTogJ21pbmlvbi1ibGVzc2VkLXdhbGsnLFxuICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoXG4gICAgICAgICAgJ3Nwcml0ZXNoZWV0JyxcbiAgICAgICAgICB7c3RhcnQ6IE1JTklPTl9CTEVTU0VEX1NQUklURV9JTkRFWCwgZW5kOiBNSU5JT05fQkxFU1NFRF9TUFJJVEVfSU5ERVggKyAxfSxcbiAgICAgICAgICApLFxuICAgICAgICBmcmFtZVJhdGU6IDgsXG4gICAgICAgIHJlcGVhdDogLTEsXG4gICAgICB9KTtcbiAgICAgIC8vIEVuZW15IChkZW1vbikuXG4gICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgIGtleTogJ2RlbW9uLWRlYXRoJyxcbiAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKFxuICAgICAgICAgICdzcHJpdGVzaGVldCcsXG4gICAgICAgICAge3N0YXJ0OiBERU1PTl9ERUFUSF9TUFJJVEVfSU5ERVgsIGVuZDogREVNT05fREVBVEhfU1BSSVRFX0lOREVYICsgNX0sXG4gICAgICAgICAgKSxcbiAgICAgICAgZnJhbWVSYXRlOiA4LFxuICAgICAgICByZXBlYXQ6IDAsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAga2V5OiAnZGVtb24taWRsZScsXG4gICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyhcbiAgICAgICAgICAnc3ByaXRlc2hlZXQnLFxuICAgICAgICAgIHsgc3RhcnQ6IERFTU9OX1NQUklURV9JTkRFWCwgZW5kOiBERU1PTl9TUFJJVEVfSU5ERVh9LFxuICAgICAgICAgICksXG4gICAgICAgIGZyYW1lUmF0ZTogMSxcbiAgICAgICAgcmVwZWF0OiAtMSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICBrZXk6ICdkZW1vbi13YWxrJyxcbiAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKFxuICAgICAgICAgICdzcHJpdGVzaGVldCcsXG4gICAgICAgICAge3N0YXJ0OiBERU1PTl9TUFJJVEVfSU5ERVgsIGVuZDogREVNT05fU1BSSVRFX0lOREVYICsgMX0sXG4gICAgICAgICAgKSxcbiAgICAgICAgZnJhbWVSYXRlOiA4LFxuICAgICAgICByZXBlYXQ6IC0xLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgIGtleTogJ2RlbW9uLWJsZXNzZWQtZGVhdGgnLFxuICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoXG4gICAgICAgICAgJ3Nwcml0ZXNoZWV0JyxcbiAgICAgICAgICB7c3RhcnQ6IERFTU9OX0JMRVNTRURfREVBVEhfU1BSSVRFX0lOREVYLCBlbmQ6IERFTU9OX0JMRVNTRURfREVBVEhfU1BSSVRFX0lOREVYICsgNX0sXG4gICAgICAgICAgKSxcbiAgICAgICAgZnJhbWVSYXRlOiA4LFxuICAgICAgICByZXBlYXQ6IDAsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAga2V5OiAnZGVtb24tYmxlc3NlZC1pZGxlJyxcbiAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKFxuICAgICAgICAgICdzcHJpdGVzaGVldCcsXG4gICAgICAgICAgeyBzdGFydDogREVNT05fQkxFU1NFRF9TUFJJVEVfSU5ERVgsIGVuZDogREVNT05fQkxFU1NFRF9TUFJJVEVfSU5ERVh9LFxuICAgICAgICAgICksXG4gICAgICAgIGZyYW1lUmF0ZTogMSxcbiAgICAgICAgcmVwZWF0OiAtMSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICBrZXk6ICdkZW1vbi1ibGVzc2VkLXdhbGsnLFxuICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoXG4gICAgICAgICAgJ3Nwcml0ZXNoZWV0JyxcbiAgICAgICAgICB7c3RhcnQ6IERFTU9OX0JMRVNTRURfU1BSSVRFX0lOREVYLCBlbmQ6IERFTU9OX0JMRVNTRURfU1BSSVRFX0lOREVYICsgMX0sXG4gICAgICAgICAgKSxcbiAgICAgICAgZnJhbWVSYXRlOiA4LFxuICAgICAgICByZXBlYXQ6IC0xLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqIFRvdGFsIG51bWJlciBvZiBtaW5pb25zIHRoYXQgd2lsbCBzcGF3biBmb3IgdGhpcyBtYXAuICovXG4gICAgY29uc3QgTlVNX01JTklPTlMgPSBnZXROdW1NaW5pb25zKGdldExldmVsTnVtYmVyKCkpO1xuXG4gICAgLy8gQ3JlYXRlIGEgbGlzdCBvZiBtaW5pb25zLlxuICAgIGNvbnN0IG1pbmlvbnM6IE1pbmlvbltdID0gW107XG5cbiAgICAvLyBGaW5kIHRoZSBzcGF3biBwb2ludCB0aWxlLiBOZWVkIHRvIHByb3ZpZGUgdGhlIGxheWVyICdXb3JsZCcsIG90aGVyd2lzZSBpdCBkb2Vzbid0IHdvcmsuXG4gICAgdGhpcy5zcGF3blRpbGUgPSBtYXAuZmluZFRpbGUodGlsZSA9PiB0aWxlLmluZGV4ID09PSBTUEFXTl9USUxFX0lOREVYLCB0aGlzLFxuICAgICAgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsICdXb3JsZCcpO1xuICAgIGlmICghdGhpcy5zcGF3blRpbGUpIHtcbiAgICAgIGNvbnNvbGUud2FybignU3Bhd24gdGlsZSBub3QgZm91bmQhJyk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTlVNX01JTklPTlM7IGkrKykge1xuICAgICAgY29uc3QgbWluaW9uU3ByaXRlID0gdGhpcy5waHlzaWNzLmFkZC5zcHJpdGUodGhpcy5zcGF3blRpbGUuZ2V0Q2VudGVyWCgpLFxuICAgICAgICAgIHRoaXMuc3Bhd25UaWxlLmdldENlbnRlclkoKSwgJ3Nwcml0ZXNoZWV0JywgTUlOSU9OX1NQUklURV9JTkRFWClcbiAgICAgICAgICAgICAgLnNldFNpemUoMTIsIDEyKTtcbiAgICAgIG1pbmlvblNwcml0ZS5zZXREYXRhKERBVEFfRkFDVElPTiwgRkFDVElPTl9NSU5JT04pO1xuICAgICAgY29uc3QgbWluaW9uID0gbmV3IE1pbmlvbihtaW5pb25TcHJpdGUpO1xuICAgICAgbWluaW9ucy5wdXNoKG1pbmlvbik7XG4gICAgfVxuICAgIGNvbnN0IG1pbmlvbkdyb3VwID0gdGhpcy5waHlzaWNzLmFkZC5ncm91cChtaW5pb25zLm1hcCh4ID0+IHguc3ByaXRlKSk7XG4gICAgdGhpcy5taW5pb25zID0gbWluaW9ucztcblxuICAgIC8vIFRoaXMgaXMgYSBuaWNlIGhlbHBlciBQaGFzZXIgcHJvdmlkZXMgdG8gY3JlYXRlIGxpc3RlbmVycyBmb3Igc29tZSBvZiB0aGUgbW9zdCBjb21tb24ga2V5cy5cbiAgICB0aGlzLmN1cnNvcktleXMgPSB0aGlzLmlucHV0LmtleWJvYXJkLmNyZWF0ZUN1cnNvcktleXMoKTtcblxuICAgIC8vIEV4cGVyaW1lbnQ6IFJlcGxhY2UgYXJyb3dzIHdpdGggc3BlY2lhbCB0aGluZ3MuXG4gICAgLy8gQ3JlYXRlIGEgcGh5c2ljcyBncm91cCAtIHVzZWZ1bCBmb3IgY29sbGlkaW5nIHRoZSBwbGF5ZXIgYWdhaW5zdCBhbGwgdGhlIHNwaWtlcyAvIG9yYnMuXG4gICAgY29uc3QgbW92aW5nU3Bpa2VHcm91cCA9IHRoaXMucGh5c2ljcy5hZGQuZ3JvdXAoKTtcbiAgICB0aGlzLmRlbW9uR3JvdXAgPSB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKCk7XG4gICAgbGV0IG9yYjogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZTtcblxuICAgIC8vIExvb3Agb3ZlciBlYWNoIFRpbGUgYW5kIHRpbGVzIHdpdGggY3VzdG9tIHNwcml0ZXMuXG4gICAgd29ybGRMYXllcjIuZm9yRWFjaFRpbGUodGlsZSA9PiB7XG4gICAgICBjb25zdCB4ID0gdGlsZS5nZXRDZW50ZXJYKCk7XG4gICAgICBjb25zdCB5ID0gdGlsZS5nZXRDZW50ZXJZKCk7XG4gICAgICBpZiAodGlsZS5pbmRleCA9PT0gT1JCX1RJTEVfSU5ERVgpIHtcbiAgICAgICAgLy8gQSBzcHJpdGUgaGFzIGl0cyBvcmlnaW4gYXQgdGhlIGNlbnRlciwgc28gcGxhY2UgdGhlIHNwcml0ZSBhdCB0aGUgY2VudGVyIG9mIHRoZSB0aWxlXG4gICAgICAgIG9yYiA9IHRoaXMucGh5c2ljcy5hZGQuc3ByaXRlKHgsIHksICdzcHJpdGVzaGVldCcsIE9SQl9USUxFX0lOREVYIC0gMSlcbiAgICAgICAgICAgIC5zZXREcmFnKDgwMCkuc2V0Q2lyY2xlKDcsIDEsIDEpO1xuICAgICAgICB3b3JsZExheWVyMi5yZW1vdmVUaWxlQXQodGlsZS54LCB0aWxlLnkpO1xuICAgICAgfSBlbHNlIGlmICh0aWxlLmluZGV4ID09PSBNT1ZJTkdfU1BJS0VfVElMRV9JTkRFWCkge1xuICAgICAgICBjb25zdCBtb3ZpbmdTcGlrZTogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSA9IG1vdmluZ1NwaWtlR3JvdXAuY3JlYXRlKHgsIHksICdzcHJpdGVzaGVldCcsXG4gICAgICAgICAgICBNT1ZJTkdfU1BJS0VfVElMRV9JTkRFWCAtIDEpLnNldERyYWcoODAwKTtcbiAgICAgICAgbW92aW5nU3Bpa2Uuc2V0Q2lyY2xlKDcsIDEsIDEpO1xuICAgICAgICB3b3JsZExheWVyMi5yZW1vdmVUaWxlQXQodGlsZS54LCB0aWxlLnkpO1xuICAgICAgfSBlbHNlIGlmICh0aWxlLmluZGV4ID09PSBERU1PTl9TUFJJVEVfSU5ERVggKyAxKSB7XG4gICAgICAgIC8vIEdvdGNoYTogdGlsZSBpbmRleCBpcyBzcHJpdGUgaW5kZXggKyAxLlxuICAgICAgICBjb25zdCBkZW1vbjogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSA9IHRoaXMuZGVtb25Hcm91cC5jcmVhdGUoeCwgeSwgJ3Nwcml0ZXNoZWV0JyxcbiAgICAgICAgICAgIERFTU9OX1NQUklURV9JTkRFWCk7XG4gICAgICAgIGRlbW9uLnNldFNpemUoMTIsIDEyKTtcbiAgICAgICAgZGVtb24uc2V0RGF0YShEQVRBX0ZBQ1RJT04sIEZBQ1RJT05fREVNT04pO1xuICAgICAgICB3b3JsZExheWVyMi5yZW1vdmVUaWxlQXQodGlsZS54LCB0aWxlLnkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMud29ybGRMYXllcjIgPSB3b3JsZExheWVyMjtcblxuICAgIHtcbiAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIobWluaW9uR3JvdXAsIHdvcmxkTGF5ZXIpO1xuICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihtaW5pb25Hcm91cCwgZ3JvdW5kTGF5ZXIpO1xuICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLmRlbW9uR3JvdXAsIHdvcmxkTGF5ZXIpO1xuICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcih0aGlzLmRlbW9uR3JvdXAsIGdyb3VuZExheWVyKTtcblxuICAgICAgdGhpcy5waHlzaWNzLmFkZC5jb2xsaWRlcihtb3ZpbmdTcGlrZUdyb3VwLCB3b3JsZExheWVyKTtcbiAgICAgIHRoaXMucGh5c2ljcy5hZGQuY29sbGlkZXIobW92aW5nU3Bpa2VHcm91cCwgZ3JvdW5kTGF5ZXIpO1xuXG4gICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKG9yYiwgd29ybGRMYXllcik7XG4gICAgICB0aGlzLnBoeXNpY3MuYWRkLmNvbGxpZGVyKG9yYiwgZ3JvdW5kTGF5ZXIpO1xuXG4gICAgICB0aGlzLnBoeXNpY3MuYWRkLm92ZXJsYXAobWluaW9uR3JvdXAsIG1vdmluZ1NwaWtlR3JvdXAsXG4gICAgICAgICAgdGhpcy5oaXRNb3ZpbmdTcGlrZSwgYm90aEFjdGl2ZSwgdGhpcyk7XG4gICAgICB0aGlzLnBoeXNpY3MuYWRkLm92ZXJsYXAob3JiLCBtaW5pb25Hcm91cCwgdGhpcy5oaXRPcmIsIGJvdGhBY3RpdmUsIHRoaXMpO1xuICAgICAgdGhpcy5waHlzaWNzLmFkZC5vdmVybGFwKHRoaXMuZGVtb25Hcm91cCwgbW92aW5nU3Bpa2VHcm91cCxcbiAgICAgICAgICB0aGlzLmhpdE1vdmluZ1NwaWtlLCBib3RoQWN0aXZlLCB0aGlzKTtcbiAgICAgIHRoaXMucGh5c2ljcy5hZGQub3ZlcmxhcChvcmIsIHRoaXMuZGVtb25Hcm91cCwgdGhpcy5oaXRPcmIsIGJvdGhBY3RpdmUsIHRoaXMpO1xuICAgICAgLy8gRGVtb25zIGNhbiBhdHRhY2sgbWluaW9ucy5cbiAgICAgIHRoaXMucGh5c2ljcy5hZGQub3ZlcmxhcChtaW5pb25Hcm91cCwgdGhpcy5kZW1vbkdyb3VwLCB0aGlzLmhpdERlbW9uLCBib3RoQWN0aXZlLCB0aGlzKTtcblxuICAgICAgLy8gTG9naWMgZm9yIG92ZXJsYXAgd2l0aCBzcGVjaWZpYyB0aWxlcy5cbiAgICAgIHdvcmxkTGF5ZXIuc2V0VGlsZUluZGV4Q2FsbGJhY2soQVJST1dfVElMRV9JTkRFWCwgaGl0QXJyb3csIHRoaXMpO1xuICAgICAgd29ybGRMYXllci5zZXRUaWxlSW5kZXhDYWxsYmFjayhTUElLRV9USUxFX0lOREVYLCB0aGlzLmhpdFNwaWtlLCB0aGlzKTtcbiAgICAgIHdvcmxkTGF5ZXIuc2V0VGlsZUluZGV4Q2FsbGJhY2soQlVUVE9OX1RJTEVfSU5ERVgsIHRoaXMuaGl0QnV0dG9uLCB0aGlzKTtcbiAgICAgIHdvcmxkTGF5ZXIuc2V0VGlsZUluZGV4Q2FsbGJhY2soRVhJVF9USUxFX0lOREVYLCB0aGlzLmhpdEV4aXRUaWxlLCB0aGlzKTtcbiAgICAgIHRoaXMucGh5c2ljcy5hZGQub3ZlcmxhcChtaW5pb25Hcm91cCwgd29ybGRMYXllcik7XG4gICAgICB0aGlzLnBoeXNpY3MuYWRkLm92ZXJsYXAodGhpcy5kZW1vbkdyb3VwLCB3b3JsZExheWVyKTtcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVmYXVsdCBmb250IGlzIG1vbm9zcGFjZWQuXG4gICAgdGhpcy5vYmplY3RpdmVUZXh0ID0gdGhpcy5hZGQudGV4dChsZWZ0TWFwT2Zmc2V0LCB0b3BNYXBPZmZzZXQgLSAyNCxcbiAgICAgICAgJ1Rha2UgdGhlIG9yYicsIHsgZmlsbDogJyNGRkZGRkYnIH0pXG4gICAgICAgICAgICAuc2V0Rm9udFNpemUoMzIpLnNldFNjYWxlKDAuNSk7XG4gICAgdGhpcy5vYmplY3RpdmVJbWFnZUxlZnQgPSB0aGlzLmFkZC5pbWFnZShcbiAgICAgICAgbGVmdE1hcE9mZnNldCArIG1hcC53aWR0aEluUGl4ZWxzIC0gMzIsIHRvcE1hcE9mZnNldCAtIDE2LCAnc3ByaXRlc2hlZXQnLFxuICAgICAgICBWT0lEX1RJTEVfSU5ERVggLSAxKVxuICAgICAgICAgICAgLnNldE9yaWdpbigxLCAwLjUpO1xuICAgIHRoaXMub2JqZWN0aXZlSW1hZ2VSaWdodCA9IHRoaXMuYWRkLmltYWdlKFxuICAgICAgICBsZWZ0TWFwT2Zmc2V0ICsgbWFwLndpZHRoSW5QaXhlbHMsIHRvcE1hcE9mZnNldCAtIDE2LCAnc3ByaXRlc2hlZXQnLCBPUkJfVElMRV9JTkRFWCAtIDEpXG4gICAgICAgICAgICAuc2V0T3JpZ2luKDEsIDAuNSk7XG4gICAgLy8gQXJyb3cgcG9pbnRpbmcgdG8gb2JqZWN0aXZlLiAtMSBmb3Igc3ByaXRlLiArMSBmb3IgbmV4dCBpbmRleC5cbiAgICB0aGlzLm9iamVjdGl2ZUFycm93SW1hZ2UgPSB0aGlzLmFkZC5pbWFnZShcbiAgICAgICAgbGVmdE1hcE9mZnNldCArIG1hcC53aWR0aEluUGl4ZWxzIC0gMTYsIHRvcE1hcE9mZnNldCAtIDE2LCAnc3ByaXRlc2hlZXQnLCBBUlJPV19USUxFX0lOREVYIClcbiAgICAgICAgICAgICAuc2V0T3JpZ2luKDEsIDAuNSk7XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVudXNlZC1leHByZXNzaW9uXG4gICAgbmV3IE1lbnVCdXR0b24odGhpcywgbGVmdE1hcE9mZnNldCArIG1hcC53aWR0aEluUGl4ZWxzLCB0b3BNYXBPZmZzZXQgKyBtYXAuaGVpZ2h0SW5QaXhlbHMgKyA4LCAnTWVudScsICgpID0+IHtcbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ0xldmVsU2VsZWN0Jyk7XG4gICAgfSwge1xuICAgICAgZm9udFNpemU6IDEyLCBwYWRkaW5nOiA0LFxuICAgIH0pLnNldE9yaWdpbigxLCAwKTtcbiAgICAvLyBSZXN0YXJ0IGJ1dHRvblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICBuZXcgTWVudUJ1dHRvbih0aGlzLCBsZWZ0TWFwT2Zmc2V0LCB0b3BNYXBPZmZzZXQgKyBtYXAuaGVpZ2h0SW5QaXhlbHMgKyA4LCAnUmVzZXQnLCAoKSA9PiB7XG4gICAgICB0aGlzLmNhbWVyYXMubWFpbi5mYWRlKDUwMCwgMCwgMCwgMCk7XG4gICAgfSwge1xuICAgICAgZm9udFNpemU6IDEyLCBwYWRkaW5nOiA0LFxuICAgIH0pO1xuXG4gICAgdGhpcy5jYW1lcmFzLm1haW4ub24oJ2NhbWVyYWZhZGVvdXRjb21wbGV0ZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2NlbmUucmVzdGFydCgpO1xuICAgIH0sIHRoaXMpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZSgpIHtcbiAgICBsZXQgbGVhZE1pbmlvbjogTWluaW9ufHVuZGVmaW5lZDtcblxuICAgIGxldCBtaW5pb25JbmRleCA9IHRoaXMubWluaW9ucy5maW5kSW5kZXgobWluaW9uID0+IG1pbmlvbi5zcHJpdGUuYWN0aXZlKTtcbiAgICBpZiAobWluaW9uSW5kZXggPCAwKSB7XG4gICAgICAvLyBUaGUgbGV2ZWwgaXMgbG9zdC4gVW5sZXNzIHlvdSBjYW4gZ2V0IGludG8gYSBzdGF0ZSB3aGVyZSBhIGRlbW9uXG4gICAgICAvLyByZWFjaGVzIHRoZSBleGl0IGFmdGVyIHRoZSBsYXN0IG1pbmlvbnMgZGllLlxuICAgICAgLy8gY29uc29sZS5sb2coJ05vIG1vcmUgYWN0aXZlIG1pbmlvbnMnKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGVhZE1pbmlvbiA9IHRoaXMubWluaW9uc1ttaW5pb25JbmRleF07XG4gICAgfVxuICAgIC8vIEV2ZXJ5IGZyYW1lLCB3ZSBjcmVhdGUgYSBuZXcgdmVsb2NpdHkgZm9yIHRoZSBzcHJpdGUgYmFzZWQgb24gd2hhdCBrZXlzXG4gICAgLy8gdGhlIHBsYXllciBpcyBob2xkaW5nIGRvd24uXG4gICAgLy8gRGVzaXJlZCBkaXJlY3Rpb24uXG4gICAgY29uc3QgdmVsb2NpdHkgPSBuZXcgUGhhc2VyLk1hdGguVmVjdG9yMigwLCAwKTtcblxuICAgIGlmICh0aGlzLmN1cnNvcktleXMubGVmdC5pc0Rvd24pIHtcbiAgICAgIHZlbG9jaXR5LnggLT0gMTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3Vyc29yS2V5cy5yaWdodC5pc0Rvd24pIHtcbiAgICAgIHZlbG9jaXR5LnggKz0gMTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3Vyc29yS2V5cy51cC5pc0Rvd24pIHtcbiAgICAgIHZlbG9jaXR5LnkgLT0gMTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3Vyc29yS2V5cy5kb3duLmlzRG93bikge1xuICAgICAgdmVsb2NpdHkueSArPSAxO1xuICAgIH1cblxuICAgIC8vIERlc2lyZWQgdmVsb2NpdHkgYWxzbyBzZXRzIHVwIHRoZSBtYXggc3BlZWQuXG4gICAgY29uc3QgZGVzaXJlZFZlbG9jaXR5ID0gdmVsb2NpdHkubm9ybWFsaXplKCkuc2NhbGUoTUlOSU9OX1NQRUVEKTtcbiAgICBpZiAoZGVzaXJlZFZlbG9jaXR5Lmxlbmd0aCgpID4gMCkge1xuICAgICAgYW5pbWF0ZU1pbmlvbihsZWFkTWluaW9uLnNwcml0ZSwgJ3dhbGsnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYW5pbWF0ZU1pbmlvbihsZWFkTWluaW9uLnNwcml0ZSwgJ2lkbGUnKTtcbiAgICB9XG5cbiAgICAvLyBUaGUgZmlyc3QgYWN0aXZlIG1pbmlvbiBpcyBjb250cm9sbGVkIGJ5IHRoZSBwbGF5ZXIuXG4gICAgY29uc3QgTUlOSU9OX0FDQ0VMRVJBVElPTl9NQUdOSVRVREUgPSAyMDtcbiAgICBhY2NlbGVyYXRlVG93YXJkc0Rlc2lyZWRWZWxvY2l0eShsZWFkTWluaW9uLnNwcml0ZSxcbiAgICAgIGRlc2lyZWRWZWxvY2l0eSwgTUlOSU9OX0FDQ0VMRVJBVElPTl9NQUdOSVRVREUpO1xuXG4gICAgLy8gVGhlIG90aGVyIG1pbmlvbnMgZm9sbG93IGluIHRoZSBsaW5lLi4uXG4gICAgbGV0IHByZXZQb3MgPSBuZXcgUGhhc2VyLk1hdGguVmVjdG9yMihsZWFkTWluaW9uLnNwcml0ZS54LCBsZWFkTWluaW9uLnNwcml0ZS55KTtcbiAgICBmb3IgKG1pbmlvbkluZGV4Kys7IG1pbmlvbkluZGV4IDwgdGhpcy5taW5pb25zLmxlbmd0aDsgbWluaW9uSW5kZXgrKykge1xuICAgICAgY29uc3QgY3VyciA9IHRoaXMubWluaW9uc1ttaW5pb25JbmRleF07XG4gICAgICBpZiAoIWN1cnIuc3ByaXRlLmFjdGl2ZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIC8vIE1vdmUgdG93YXJkcyBwcmV2LlxuICAgICAgY29uc3QgY3VyclBvcyA9IG5ldyBQaGFzZXIuTWF0aC5WZWN0b3IyKGN1cnIuc3ByaXRlLngsIGN1cnIuc3ByaXRlLnkpO1xuICAgICAgLy8gUGF0aCBmcm9tIGN1cnIgdG8gcHJldi5cbiAgICAgIGNvbnN0IHBhdGggPSBwcmV2UG9zLnN1YnRyYWN0KGN1cnJQb3MpO1xuICAgICAgaWYgKHBhdGgubGVuZ3RoU3EoKSA+IDIwMCkge1xuICAgICAgICAvLyBNb3ZlIHRvd2FyZHMgcHJldiFcbiAgICAgICAgcGF0aC5ub3JtYWxpemUoKS5zY2FsZShNSU5JT05fU1BFRUQpO1xuICAgICAgICBhbmltYXRlTWluaW9uKGN1cnIuc3ByaXRlLCAnd2FsaycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU3RhbmQgc3RpbGwuXG4gICAgICAgIHBhdGguc2NhbGUoMCk7XG4gICAgICAgIGFuaW1hdGVNaW5pb24oY3Vyci5zcHJpdGUsICdpZGxlJyk7XG4gICAgICB9XG4gICAgICBhY2NlbGVyYXRlVG93YXJkc0Rlc2lyZWRWZWxvY2l0eShjdXJyLnNwcml0ZSwgcGF0aCwgTUlOSU9OX0FDQ0VMRVJBVElPTl9NQUdOSVRVREUpO1xuXG4gICAgICBwcmV2UG9zID0gY3VyclBvcztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVtb25zIGFsbCBjaGFzZSB0aGUgbGVhZCBtaW5pb24hIChPciB0aGUgY2xvc2VzdCBtaW5pb24/KVxuICAgIHRoaXMuZGVtb25Hcm91cC5jaGlsZHJlbi5pdGVyYXRlKGNoaWxkID0+IHtcbiAgICAgIGlmICghY2hpbGQuYWN0aXZlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNwcml0ZSA9IChjaGlsZCBhcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlKTtcbiAgICAgIGNvbnN0IHBhdGggPSBuZXcgUGhhc2VyLk1hdGguVmVjdG9yMigpLmNvcHkobGVhZE1pbmlvbi5zcHJpdGUuYm9keS5wb3NpdGlvbik7XG4gICAgICBwYXRoLnN1YnRyYWN0KHNwcml0ZS5ib2R5LnBvc2l0aW9uKTtcbiAgICAgIHBhdGgubm9ybWFsaXplKCkuc2NhbGUoREVNT05fU1BFRUQpO1xuICAgICAgaWYgKHBhdGgubGVuZ3RoKCkgPiAwKSB7XG4gICAgICAgIGFuaW1hdGVEZW1vbihzcHJpdGUsICd3YWxrJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbmltYXRlRGVtb24oc3ByaXRlLCAnaWRsZScpO1xuICAgICAgfVxuICAgICAgYWNjZWxlcmF0ZVRvd2FyZHNEZXNpcmVkVmVsb2NpdHkoc3ByaXRlLCBwYXRoLCBNSU5JT05fQUNDRUxFUkFUSU9OX01BR05JVFVERSk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy53aW5uaW5nU3ByaXRlKSB7XG4gICAgICAvLyBTaHJpbmtpbmcgYW5pbWF0aW9uLlxuICAgICAgdGhpcy53aW5uaW5nU3ByaXRlLnNldFNjYWxlKHRoaXMud2lubmluZ1Nwcml0ZS5zY2FsZSAqIDAuOTkpO1xuICAgIH1cblxuICAgIC8vIERlcHRoIHNvcnRpbmchXG4gICAgZm9yIChjb25zdCBtaW5pb24gb2YgdGhpcy5taW5pb25zKSB7XG4gICAgICBtaW5pb24uc3ByaXRlLnNldERlcHRoKG1pbmlvbi5zcHJpdGUueSArIG1pbmlvbi5zcHJpdGUuaGVpZ2h0ICogbWluaW9uLnNwcml0ZS5vcmlnaW5ZKTtcbiAgICB9XG4gICAgdGhpcy5kZW1vbkdyb3VwLmNoaWxkcmVuLml0ZXJhdGUoY2hpbGQgPT4ge1xuICAgICAgY29uc3Qgc3ByaXRlID0gKGNoaWxkIGFzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUpO1xuICAgICAgc3ByaXRlLnNldERlcHRoKHNwcml0ZS55ICsgc3ByaXRlLmhlaWdodCAqIHNwcml0ZS5vcmlnaW5ZKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBIYW5kbGVyIGZvciB3aGVuIGEgc3ByaXRlIGhpdHMgYSBzcGlrZS4gKi9cbiAgcHJpdmF0ZSBoaXRTcGlrZShzcHJpdGU6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUsIHRpbGU6IFBoYXNlci5UaWxlbWFwcy5UaWxlKSB7XG4gICAgaWYgKCFzcHJpdGUuYWN0aXZlIHx8ICFzcHJpdGUuZ2V0RGF0YShEQVRBX0ZBQ1RJT04pKSB7XG4gICAgICAvLyBPbmx5IGFjdGl2ZSBtaW5pb25zIGFyZSBhZmZlY3RlZCBieSBzcHJpdGVzLlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBUaGUgbWluaW9uIGRpZXMgaWYgaXQgd2FzIG1vdmluZyB3aXRoIGhpZ2ggZW5vdWdoIHNwZWVkLlxuICAgIGlmIChzcHJpdGUuYm9keS52ZWxvY2l0eS5sZW5ndGgoKSA+IDE2MCkge1xuICAgICAgLy8gT2Zmc2V0IHRvIG1ha2UgdGhlIG1pbmlvbiBvdmVybGFwIHRoZSBzcGlrZSBtb3JlLlxuICAgICAgY29uc3Qgb2Zmc2V0ID0gc3ByaXRlLmJvZHkudmVsb2NpdHkuY2xvbmUoKS5ub3JtYWxpemUoKS5zY2FsZSg2KTtcbiAgICAgIHRoaXMuY3JlYXR1cmVEZWF0aChzcHJpdGUsIG9mZnNldCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEhhbmRsZXIgZm9yIHdoZW4gYSBzcHJpdGUgaGl0cyBhIG1vdmluZyBzcGlrZS4gKi9cbiAgcHJpdmF0ZSBoaXRNb3ZpbmdTcGlrZShzcHJpdGU6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgc3Bpa2U6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUpIHtcbiAgICBpZiAoIXNwcml0ZS5hY3RpdmUgfHwgIXNwcml0ZS5nZXREYXRhKERBVEFfRkFDVElPTikpIHtcbiAgICAgIC8vIE9ubHkgYWN0aXZlIG1pbmlvbnMgYXJlIGFmZmVjdGVkIGJ5IHNwcml0ZXMuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIFRoZSBtaW5pb24gZGllcyBpZiB0aGUgZGlzdGFuY2UgaXMgc21hbGwgZW5vdWdoLlxuICAgIGNvbnN0IHNwaWtlUG9zaXRpb24gPSBzcGlrZS5ib2R5LnBvc2l0aW9uO1xuICAgIGNvbnN0IGRpc3RhbmNlU3EgPSBNYXRoLm1heChzcGlrZVBvc2l0aW9uLmRpc3RhbmNlU3Eoc3ByaXRlLmJvZHkucG9zaXRpb24pLCAxKTtcbiAgICBpZiAoZGlzdGFuY2VTcSA8IDgwKSB7XG4gICAgICB0aGlzLmNyZWF0dXJlRGVhdGgoc3ByaXRlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgYSBjcmVhdHVyZSBkeWluZyBhbmltYXRpb24uIEFuZCByZW1vdmUgdGhlIGNyZWF0dXJlLiBXb3JrcyBvbiBtaW5pb25zIGFuZCBkZW1vbnMuXG4gICAqXG4gICAqIEBwYXJhbSBvZmZzZXQgVG8gbWFrZSB0aGUgZGVhdGggc3ByaXRlIGFwcGVhciBpbiBhbiBvZmZzZXQgcG9zaXRpb24uXG4gICAqL1xuICBwcml2YXRlIGNyZWF0dXJlRGVhdGgobWluaW9uOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlLCBvZmZzZXQ/OiBQaGFzZXIuTWF0aC5WZWN0b3IyKSB7XG4gICAgLy8gTWFrZSBzdXJlIHRvIGdldCB0aGUgYWN0dWFsIG1pZGRsZSBwb3NpdGlvbiBvZiB0aGUgbWluaW9uLlxuICAgIGNvbnN0IGRlYXRoU3ByaXRlID0gdGhpcy5hZGQuc3ByaXRlKFxuICAgICAgbWluaW9uLnggKyAob2Zmc2V0Py54IHx8IDApLFxuICAgICAgbWluaW9uLnkgKyAob2Zmc2V0Py55IHx8IDApLFxuICAgICAgJ3Nwcml0ZXNoZWV0JyxcbiAgICApO1xuICAgIGlmIChtaW5pb24uZ2V0RGF0YShEQVRBX0JMRVNTRUQpKSB7XG4gICAgICBkZWF0aFNwcml0ZS5zZXREYXRhKERBVEFfQkxFU1NFRCwgdHJ1ZSk7XG4gICAgfVxuICAgIGlmIChtaW5pb24uZ2V0RGF0YShEQVRBX0ZBQ1RJT04pID09PSBGQUNUSU9OX01JTklPTikge1xuICAgICAgYW5pbWF0ZU1pbmlvbihkZWF0aFNwcml0ZSwgJ2RlYXRoJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFuaW1hdGVEZW1vbihkZWF0aFNwcml0ZSwgJ2RlYXRoJyk7XG4gICAgfVxuICAgIG1pbmlvbi5ib2R5Lm9uQ29sbGlkZSA9IGZhbHNlO1xuICAgIG1pbmlvbi5zZXRBY3RpdmUoZmFsc2UpO1xuICAgIG1pbmlvbi5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICBtaW5pb24uc2V0QWNjZWxlcmF0aW9uKDAsIDApO1xuICAgIG1pbmlvbi5zZXRWZWxvY2l0eSgwLCAwKTtcbiAgICBtaW5pb24uYm9keS5lbmFibGUgPSB0cnVlO1xuXG4gICAgLy8gTG9zZSBjb25kaXRpb246IENvdWxkbid0IGtlZXAgdGhlIGJsZXNzZWQgbWluaW9uIGFsaXZlLlxuICAgIGlmIChtaW5pb24uZ2V0RGF0YShEQVRBX0JMRVNTRUQpID09PSB0cnVlKSB7XG4gICAgICB0aGlzLm9iamVjdGl2ZVRleHQuc2V0VGV4dCgnRmFpbHVyZScpO1xuICAgICAgdGhpcy5vYmplY3RpdmVBcnJvd0ltYWdlLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgdGhpcy5vYmplY3RpdmVJbWFnZUxlZnQuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICB0aGlzLm9iamVjdGl2ZUltYWdlUmlnaHQuc2V0VGV4dHVyZSgnc3ByaXRlc2hlZXQnLFxuICAgICAgICAgIG1pbmlvbi5nZXREYXRhKERBVEFfRkFDVElPTikgPT09IEZBQ1RJT05fTUlOSU9OXG4gICAgICAgICAgPyBNSU5JT05fQkxFU1NFRF9TUFJJVEVfSU5ERVggKyA3IDogREVNT05fQkxFU1NFRF9TUFJJVEVfSU5ERVggKyA3KTtcbiAgICB9XG4gIH1cblxuICAvKiogSGFuZGxlciBmb3Igd2hlbiBzb21ldGhpbmcgaGl0cyBhbiBvcmIuICovXG4gIHByaXZhdGUgaGl0T3JiKHMxOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlLCBzMjogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSkge1xuICAgIGNvbnNvbGUubG9nKCdoaXRPcmIgZmFjdGlvbnM6ICcsIHMxLmdldERhdGEoREFUQV9GQUNUSU9OKSwgczIuZ2V0RGF0YShEQVRBX0ZBQ1RJT04pKTtcbiAgICAvLyBUaGUgbWluaW9uIGJlY29tZXMgYmxlc3NlZC5cbiAgICAvLyBHb3RjaGE6IFRoZSBtaW5pb24gbWlnaHQgYWx3YXlzIGJlIHMyIG5vIG1hdHRlciB0aGUgb3JkZXIgb2ZcbiAgICAvLyBtaW5pb25Hcm91cC9vcmIgaW4gdGhlIG92ZXJsYXAgZnVuY3Rpb24uXG4gICAgbGV0IG1pbmlvbjogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZTtcbiAgICBsZXQgb3JiOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlO1xuICAgIGlmIChzMS5nZXREYXRhKERBVEFfRkFDVElPTikgPT09IEZBQ1RJT05fTUlOSU9OKSB7XG4gICAgICBtaW5pb24gPSBzMTtcbiAgICAgIG9yYiA9IHMyO1xuICAgIH0gZWxzZSB7XG4gICAgICBtaW5pb24gPSBzMjtcbiAgICAgIG9yYiA9IHMxO1xuICAgIH1cbiAgICBpZiAoIW1pbmlvbi5hY3RpdmUgfHwgIW9yYi5hY3RpdmUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbWluaW9uLnNldERhdGEoREFUQV9CTEVTU0VELCB0cnVlKTtcbiAgICBvcmIuYWN0aXZlID0gZmFsc2U7XG4gICAgb3JiLnZpc2libGUgPSBmYWxzZTtcbiAgICAvLyBDcmVhdGUgYSBzcHJpdGUgcmVwcmVzZW50aW5nIHRoZSBzaGF0dGVyZWQgcmVtYWlucyBvZiB0aGUgb3JiLlxuICAgIHRoaXMuYWRkLnNwcml0ZShcbiAgICAgIG9yYi54LFxuICAgICAgb3JiLnksXG4gICAgICAnc3ByaXRlc2hlZXQnLFxuICAgICAgT1JCX1RJTEVfSU5ERVgsICAvLyAtMSBmb3Igc3ByaXRlIGluZGV4LCArMSBmb3IgbmV4dCBzcHJpdGUgaW4gdGhlIHNoZWV0LlxuICAgICk7XG5cbiAgICAvLyBVbmxvY2sgcGhhc2UgMjogS2VlcCBpdCBhbGl2ZS5cbiAgICAvLyBDaGFuZ2UgdGhlIHNwYXduIHRpbGUgYXMgaW5kaWNhdGlvbi5cbiAgICB0aGlzLndvcmxkTGF5ZXIucHV0VGlsZUF0KHRoaXMuc3Bhd25UaWxlLmluZGV4ICsgMSwgdGhpcy5zcGF3blRpbGUueCwgdGhpcy5zcGF3blRpbGUueSk7XG4gICAgdGhpcy5vYmplY3RpdmVUZXh0LnNldFRleHQoJ0tlZXAgaXQgYWxpdmUnKTtcbiAgICB0aGlzLm9iamVjdGl2ZUltYWdlTGVmdC5zZXRUZXh0dXJlKCdzcHJpdGVzaGVldCcsXG4gICAgICAgIG1pbmlvbi5nZXREYXRhKERBVEFfRkFDVElPTikgPT09IEZBQ1RJT05fTUlOSU9OXG4gICAgICAgID8gTUlOSU9OX0JMRVNTRURfU1BSSVRFX0lOREVYIDogREVNT05fQkxFU1NFRF9TUFJJVEVfSU5ERVgpO1xuICAgIHRoaXMub2JqZWN0aXZlSW1hZ2VSaWdodC5zZXRUZXh0dXJlKCdzcHJpdGVzaGVldCcsIEVYSVRfVElMRV9JTkRFWCAtIDEpO1xuICB9XG5cbiAgLyoqIEhhbmRsZXIgZm9yIHdoZW4gYSBtaW5pb24gYW5kIGRlbW9uIGNvbGxpZGUuICovXG4gIHByaXZhdGUgaGl0RGVtb24oczE6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUsIHMyOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlKSB7XG4gICAgaWYgKCFzMS5hY3RpdmUgfHwgIXMyLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgbWluaW9uOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlO1xuICAgIGxldCBkZW1vbjogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZTtcbiAgICBpZiAoczEuZ2V0RGF0YShEQVRBX0ZBQ1RJT04pID09PSBGQUNUSU9OX01JTklPTikge1xuICAgICAgbWluaW9uID0gczE7XG4gICAgICBkZW1vbiA9IHMyO1xuICAgIH0gZWxzZSB7XG4gICAgICBtaW5pb24gPSBzMjtcbiAgICAgIGRlbW9uID0gczE7XG4gICAgfVxuICAgIC8vIE9mZnNldCB0byBtYWtlIHRoZSBkZW1vbiBhbmQgbWluaW9uIG92ZXJsYXAgbW9yZS5cbiAgICBjb25zdCBvZmZzZXQgPSBkZW1vbi5ib2R5LnZlbG9jaXR5LmNsb25lKCkubm9ybWFsaXplKCkuc2NhbGUoOCk7XG4gICAgdGhpcy5jcmVhdHVyZURlYXRoKGRlbW9uLCBvZmZzZXQpO1xuICAgIHRoaXMuY3JlYXR1cmVEZWF0aChtaW5pb24sIG9mZnNldC5jbG9uZSgpLnNjYWxlKC0xKSk7XG4gIH1cblxuICAvKiogSGFuZGxlciBmb3Igd2hlbiBhIG1pbmlvbiBoaXRzIGEgYnV0dG9uLiAqL1xuICBwcml2YXRlIGhpdEJ1dHRvbihtaW5pb246IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUsIHRpbGU6IFBoYXNlci5UaWxlbWFwcy5UaWxlKSB7XG4gICAgaWYgKCFtaW5pb24uYWN0aXZlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIE1pbmlvbiBuZWVkcyB0byBiZSBjbG9zZSBlbm91Z2ggdG8gdGhlIG1pZGRsZSB0byB0cmlnZ2VyIGl0LlxuICAgIGNvbnN0IHYxID0gbmV3IFBoYXNlci5NYXRoLlZlY3RvcjIodGlsZS5nZXRDZW50ZXJYKCksIHRpbGUuZ2V0Q2VudGVyWSgpKTtcbiAgICBjb25zdCB2MiA9IG5ldyBQaGFzZXIuTWF0aC5WZWN0b3IyKG1pbmlvbi54LCBtaW5pb24ueSk7XG4gICAgaWYgKHYxLmRpc3RhbmNlU3EodjIpID4gNTApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBSZXBsYWNlIHRoZSBidXR0b24gd2l0aCBhbm90aGVyIHRpbGUuXG4gICAgdGhpcy53b3JsZExheWVyLnB1dFRpbGVBdCh0aWxlLmluZGV4ICsgMSwgdGlsZS54LCB0aWxlLnkpO1xuXG4gICAgY29uc3QgdG9Qcm9jZXNzOiBBcnJheTx7eDogbnVtYmVyLCB5OiBudW1iZXJ9PiA9IFt7eDogdGlsZS54LCB5OiB0aWxlLnl9XTtcbiAgICAvKiogRm91ciBkaXJlY3Rpb25zLiAqL1xuICAgIGNvbnN0IE9GRlNFVFMgPSBbe3g6IDAsIHk6IDF9LCB7eDogMCwgeTogLTF9LCB7eDogMSwgeTogMH0sIHt4OiAtMSwgeTogMH1dO1xuICAgIC8vIENhdXNlIGEgY2hhaW4gcmVhY3Rpb24uXG4gICAgd2hpbGUgKHRvUHJvY2Vzcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjdXJyID0gdG9Qcm9jZXNzLnBvcCgpO1xuICAgICAgZm9yIChjb25zdCBvZmZzZXQgb2YgT0ZGU0VUUykge1xuICAgICAgICAvLyBnZXRUaWxlQXQgaGFzIGluY29ycmVjdCB0eXBlLiBBY3R1YWxseSBudWxsYWJsZS5cbiAgICAgICAgY29uc3QgYWRqYWNlbnRUaWxlID0gdGhpcy53b3JsZExheWVyLmdldFRpbGVBdChcbiAgICAgICAgICAgIGN1cnIueCArIG9mZnNldC54LCBjdXJyLnkgKyBvZmZzZXQueSk7XG4gICAgICAgIGlmIChhZGphY2VudFRpbGUpIHtcbiAgICAgICAgICBpZiAoYWRqYWNlbnRUaWxlLmluZGV4ID09PSBXSVJFX1RJTEVfSU5ERVgpIHtcbiAgICAgICAgICAgIC8vIENvbnRpbnVlIHRoZSByZWFjdGlvbi5cbiAgICAgICAgICAgIHRvUHJvY2Vzcy5wdXNoKHt4OiBhZGphY2VudFRpbGUueCwgeTogYWRqYWNlbnRUaWxlLnl9KTtcbiAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIHdpcmUgd2l0aCBhIGRlcGxldGVkIHdpcmUuXG4gICAgICAgICAgICB0aGlzLndvcmxkTGF5ZXIucHV0VGlsZUF0KGFkamFjZW50VGlsZS5pbmRleCArIDEsIGFkamFjZW50VGlsZS54LCBhZGphY2VudFRpbGUueSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChhZGphY2VudFRpbGUuaW5kZXggPT09IERPT1JfVElMRV9JTkRFWCkge1xuICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgZG9vciB3aXRoIGFuIG9wZW4gZG9vci5cbiAgICAgICAgICAgIHRoaXMud29ybGRMYXllci5wdXRUaWxlQXQoYWRqYWNlbnRUaWxlLmluZGV4ICsgMSwgYWRqYWNlbnRUaWxlLngsIGFkamFjZW50VGlsZS55KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWxzbyBjaGVjayB3b3JsZExheWVyMiBmb3Igd2lyZXMgb25seS5cbiAgICAgICAgY29uc3QgYWRqYWNlbnRUaWxlMiA9IHRoaXMud29ybGRMYXllcjIuZ2V0VGlsZUF0KFxuICAgICAgICAgICAgY3Vyci54ICsgb2Zmc2V0LngsIGN1cnIueSArIG9mZnNldC55KTtcbiAgICAgICAgaWYgKGFkamFjZW50VGlsZTIgJiYgYWRqYWNlbnRUaWxlMi5pbmRleCA9PT0gV0lSRV9USUxFX0lOREVYKSB7XG4gICAgICAgICAgICAvLyBDb250aW51ZSB0aGUgcmVhY3Rpb24uXG4gICAgICAgICAgICB0b1Byb2Nlc3MucHVzaCh7eDogYWRqYWNlbnRUaWxlMi54LCB5OiBhZGphY2VudFRpbGUyLnl9KTtcbiAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIHdpcmUgd2l0aCBhIGRlcGxldGVkIHdpcmUuXG4gICAgICAgICAgICB0aGlzLndvcmxkTGF5ZXIyLnB1dFRpbGVBdChhZGphY2VudFRpbGUyLmluZGV4ICsgMSwgYWRqYWNlbnRUaWxlMi54LCBhZGphY2VudFRpbGUyLnkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIEhhbmRsZXIgZm9yIHdoZW4gc29tZXRoaW5nIGhpdHMgdGhlIGV4aXQgdGlsZS4gKi9cbiAgcHJpdmF0ZSBoaXRFeGl0VGlsZShtaW5pb246IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5TcHJpdGUsIHRpbGU6IFBoYXNlci5UaWxlbWFwcy5UaWxlKSB7XG4gICAgaWYgKCFtaW5pb24uYWN0aXZlIHx8ICFtaW5pb24uZ2V0RGF0YShEQVRBX0JMRVNTRUQpKSB7XG4gICAgICAvLyBPbmx5IGNhcmUgaWYgdGhlIG1pbmlvbiBpcyBhY3RpdmUgYW5kIGJsZXNzZWQuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIE1pbmlvbiBuZWVkcyB0byBiZSBjbG9zZSB0byB0aGUgbWlkZGxlLlxuICAgIGNvbnN0IHYxID0gbmV3IFBoYXNlci5NYXRoLlZlY3RvcjIodGlsZS5nZXRDZW50ZXJYKCksIHRpbGUuZ2V0Q2VudGVyWSgpKTtcbiAgICBjb25zdCB2MiA9IG5ldyBQaGFzZXIuTWF0aC5WZWN0b3IyKG1pbmlvbi54LCBtaW5pb24ueSk7XG4gICAgaWYgKHYxLmRpc3RhbmNlU3EodjIpIDwgNTApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdXSU4hJyk7XG4gICAgICBtaW5pb24ueCA9IHRpbGUuZ2V0Q2VudGVyWCgpO1xuICAgICAgbWluaW9uLnkgPSB0aWxlLmdldENlbnRlclkoKTtcbiAgICAgIG1pbmlvbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIG1pbmlvbi5ib2R5LmVuYWJsZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLm9iamVjdGl2ZVRleHQuc2V0VGV4dCgnU3VjY2VzcycpO1xuICAgICAgdGhpcy5vYmplY3RpdmVJbWFnZUxlZnQuc2V0VGV4dHVyZSgnc3ByaXRlc2hlZXQnLCBWT0lEX1RJTEVfSU5ERVggLSAxKTtcbiAgICAgIHRoaXMub2JqZWN0aXZlQXJyb3dJbWFnZS5zZXRUZXh0dXJlKCdzcHJpdGVzaGVldCcsIFZPSURfVElMRV9JTkRFWCAtIDEpO1xuICAgICAgdGhpcy5vYmplY3RpdmVJbWFnZVJpZ2h0LnNldFRleHR1cmUoJ3Nwcml0ZXNoZWV0JyxcbiAgICAgICAgICBtaW5pb24uZ2V0RGF0YShEQVRBX0ZBQ1RJT04pID09PSBGQUNUSU9OX01JTklPTlxuICAgICAgICAgID8gTUlOSU9OX0JMRVNTRURfU1BSSVRFX0lOREVYIDogREVNT05fQkxFU1NFRF9TUFJJVEVfSU5ERVgpO1xuICAgICAgdGhpcy5oYXNXb24gPSB0cnVlO1xuICAgICAgc2V0TGV2ZWxDb21wbGV0ZWQoKTtcbiAgICAgIHRoaXMud2lubmluZ1Nwcml0ZSA9IG1pbmlvbjtcbiAgICB9XG4gIH1cbn1cblxuLyoqIEhhbmRsZXIgZm9yIHdoZW4gYSBtaW5pb24gaGl0cyBhbiBhcnJvdyB0aWxlLiAqL1xuZnVuY3Rpb24gaGl0QXJyb3cobWluaW9uOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlLCB0aWxlOiBQaGFzZXIuVGlsZW1hcHMuVGlsZSkge1xuICBpZiAoIW1pbmlvbi5hY3RpdmUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gTWFrZSBhIHZlY3RvciB3aXRoIHRoZSBhcnJvdyB0aWxlJ3Mgcm90YXRpb24uXG4gIGNvbnN0IHVuaXRWZWN0b3IgPSBuZXcgUGhhc2VyLk1hdGguVmVjdG9yMihNYXRoLmNvcyh0aWxlLnJvdGF0aW9uKSwgTWF0aC5zaW4odGlsZS5yb3RhdGlvbikpO1xuICBjb25zdCB0aWxlUG9zaXRpb24gPSBuZXcgUGhhc2VyLk1hdGguVmVjdG9yMih0aWxlLnBpeGVsWCwgdGlsZS5waXhlbFkpO1xuXG4gIGNvbnN0IG1pbmlvbkJvZHkgPSAobWluaW9uLmJvZHkgYXMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkJvZHkpO1xuICBjb25zdCBkaXN0YW5jZSA9IE1hdGgubWF4KHRpbGVQb3NpdGlvbi5kaXN0YW5jZShtaW5pb25Cb2R5LnBvc2l0aW9uKSwgMSk7XG4gIC8vIFNtYWxsZXIgZGlzdGFuY2UgbWVhbnMgbGFyZ2VyIG1vdmVtZW50LlxuICBtaW5pb25Cb2R5LnZlbG9jaXR5LmFkZCh1bml0VmVjdG9yLnNjYWxlKCgyMDAgLyBkaXN0YW5jZSkgKyAxMDApKTtcbn1cblxuICAvKipcbiAgICogSW5zdGVhZCBvZiBzZXR0aW5nIHRoZSB2ZWxvY2l0eSBkaXJlY3RseSwgc2V0IGFjY2VsZXJhdGlvbi5cbiAgICogVGhlIGZhcnRoZXIgYXdheSBmcm9tIGRlc2lyZWQgdmVsb2NpdHksIHRoZSBoaWdoZXIgdGhlIGFjY2VsZXJhdGlvbi5cbiAgICovXG5mdW5jdGlvbiBhY2NlbGVyYXRlVG93YXJkc0Rlc2lyZWRWZWxvY2l0eSh0aGluZzogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLlNwcml0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2lyZWRWZWxvY2l0eTogUGhhc2VyLk1hdGguVmVjdG9yMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VsZXJhdGlvbk1hZ25pdHVkZTogbnVtYmVyKSB7XG4gIC8vIERpZmZlcmVuY2UgYmV0d2VlbiBkZXNpcmVkIHZlbG9jaXR5IGFuZCBhY3R1YWwuXG4gIGNvbnN0IGRpZmYgPSBkZXNpcmVkVmVsb2NpdHkuY2xvbmUoKS5zdWJ0cmFjdCh0aGluZy5ib2R5LnZlbG9jaXR5KTtcbiAgdGhpbmcuc2V0QWNjZWxlcmF0aW9uKFxuICBkaWZmLnggKiBhY2NlbGVyYXRpb25NYWduaXR1ZGUsIGRpZmYueSAqIGFjY2VsZXJhdGlvbk1hZ25pdHVkZSk7XG59XG5cbi8qKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IGJvdGggczEgYW5kIHMyIGFyZSBhY3RpdmUuICovXG5mdW5jdGlvbiBib3RoQWN0aXZlKHMxOiBhbnksIHMyOiBhbnkpIHtcbiAgcmV0dXJuIHMxLmFjdGl2ZSAmJiBzMi5hY3RpdmU7XG59XG5cbi8qKiBBbmltYXRlIGEgbWluaW9uLiBXaXRoIGRpZmZlcmVudCBhbmltYXRpb25zIGRlcGVuZGluZyBvbiBibGVzc2VkIGRhdGEuICovXG5mdW5jdGlvbiBhbmltYXRlTWluaW9uKG1pbmlvbjogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSwgYW5pbWF0aW9uOiAnd2Fsayd8J2lkbGUnfCdkZWF0aCcpIHtcbiAgaWYgKG1pbmlvbi5nZXREYXRhKERBVEFfQkxFU1NFRCkpIHtcbiAgICBzd2l0Y2ggKGFuaW1hdGlvbikge1xuICAgICAgY2FzZSAnd2Fsayc6XG4gICAgICAgIG1pbmlvbi5wbGF5KCdtaW5pb24tYmxlc3NlZC13YWxrJywgdHJ1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaWRsZSc6XG4gICAgICAgIG1pbmlvbi5wbGF5KCdtaW5pb24tYmxlc3NlZC1pZGxlJywgdHJ1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGVhdGgnOlxuICAgICAgICBtaW5pb24ucGxheSgnbWluaW9uLWJsZXNzZWQtZGVhdGgnLCB0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIHN3aXRjaCAoYW5pbWF0aW9uKSB7XG4gICAgY2FzZSAnd2Fsayc6XG4gICAgICBtaW5pb24ucGxheSgnbWluaW9uLXdhbGsnLCB0cnVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2lkbGUnOlxuICAgICAgbWluaW9uLnBsYXkoJ21pbmlvbi1pZGxlJywgdHJ1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdkZWF0aCc6XG4gICAgICBtaW5pb24ucGxheSgnbWluaW9uLWRlYXRoJywgdHJ1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuLyoqIEFuaW1hdGUgYSBkZW1vbi4gV2l0aCBkaWZmZXJlbnQgYW5pbWF0aW9ucyBkZXBlbmRpbmcgb24gYmxlc3NlZCBkYXRhLiAqL1xuZnVuY3Rpb24gYW5pbWF0ZURlbW9uKGRlbW9uOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlLCBhbmltYXRpb246ICd3YWxrJ3wnaWRsZSd8J2RlYXRoJykge1xuICBpZiAoZGVtb24uZ2V0RGF0YShEQVRBX0JMRVNTRUQpKSB7XG4gICAgc3dpdGNoIChhbmltYXRpb24pIHtcbiAgICAgIGNhc2UgJ3dhbGsnOlxuICAgICAgICAvLyBUT0RPOiBBbHNvIGZsaXAgYmFzZWQgb24gdmVsb2NpdHkuXG4gICAgICAgIGRlbW9uLnBsYXkoJ2RlbW9uLWJsZXNzZWQtd2FsaycsIHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2lkbGUnOlxuICAgICAgICBkZW1vbi5wbGF5KCdkZW1vbi1ibGVzc2VkLWlkbGUnLCB0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkZWF0aCc6XG4gICAgICAgIGRlbW9uLnBsYXkoJ2RlbW9uLWJsZXNzZWQtZGVhdGgnLCB0cnVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIHN3aXRjaCAoYW5pbWF0aW9uKSB7XG4gICAgY2FzZSAnd2Fsayc6XG4gICAgICBkZW1vbi5wbGF5KCdkZW1vbi13YWxrJywgdHJ1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdpZGxlJzpcbiAgICAgIGRlbW9uLnBsYXkoJ2RlbW9uLWlkbGUnLCB0cnVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2RlYXRoJzpcbiAgICAgIGRlbW9uLnBsYXkoJ2RlbW9uLWRlYXRoJywgdHJ1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cbn1cbiIsIi8qKiBAZmlsZW92ZXJ2aWV3IERlZmluZXMgdGhlIHNjZW5lcyBpbiB0aGUgZ2FtZSBhbmQgc29tZSBjb25zdGFudHMuICovXG5cbmltcG9ydCB7IEJvb3RTY2VuZSB9IGZyb20gJy4vYm9vdC1zY2VuZSc7XG5pbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tICcuL2dhbWUtc2NlbmUtMic7XG5pbXBvcnQgeyBMZXZlbFNlbGVjdFNjZW5lIH0gZnJvbSAnLi9sZXZlbC1zZWxlY3Qtc2NlbmUnO1xuaW1wb3J0IHsgTWFpbk1lbnVTY2VuZSB9IGZyb20gJy4vbWFpbi1tZW51LXNjZW5lJztcblxuLyoqIFpvb20gaW4gdG8gbWFrZSBvdXIgMTZweCBzcHJpdGVzIGxvb2sgYmlnZ2VyLiAqL1xuZXhwb3J0IGNvbnN0IEdBTUVfWk9PTSA9IDI7XG5cbi8vIFRPRE86IENvbnNpZGVyIGFkanVzdGluZyBhZnRlciByZXNpemUuXG5leHBvcnQgY29uc3QgR0FNRV9XSURUSCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gR0FNRV9aT09NO1xuZXhwb3J0IGNvbnN0IEdBTUVfSEVJR0hUID0gd2luZG93LmlubmVySGVpZ2h0IC8gR0FNRV9aT09NO1xuXG4vLyBUaGUgc2NlbmVzIGluIHRoZSBnYW1lLlxuZXhwb3J0IGNvbnN0IFNDRU5FUyA9IFtcbiAgQm9vdFNjZW5lLFxuICBNYWluTWVudVNjZW5lLFxuICBMZXZlbFNlbGVjdFNjZW5lLFxuICBHYW1lU2NlbmUsXG5dO1xuIiwiLyoqIEBmaWxlb3ZlcnZpZXcgTGV2ZWwgc2VsZWN0LiBBbHNvIGtlZXBzIHRyYWNrIG9mIGdsb2JhbCBnYW1lIHN0YXRlLiAqL1xuXG5pbXBvcnQgeyBnZXRHYW1lSGVpZ2h0LCBnZXRHYW1lV2lkdGggfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IE5VTV9MRVZFTFMsIHNldExldmVsTnVtYmVyLCBnZXRMZXZlbENvbXBsZXRlZCB9IGZyb20gJy4uL3N0YXRlJztcbmltcG9ydCB7IE1lbnVCdXR0b24gfSBmcm9tICcuLi91aS9tZW51LWJ1dHRvbic7XG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiAnTGV2ZWxTZWxlY3QnLFxufTtcblxuLyoqXG4gKiBUaGUgaW5pdGlhbCBzY2VuZSB0aGF0IHN0YXJ0cywgc2hvd3MgdGhlIHNwbGFzaCBzY3JlZW5zLCBhbmQgbG9hZHMgdGhlIG5lY2Vzc2FyeSBhc3NldHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBMZXZlbFNlbGVjdFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcblxuICBwcml2YXRlIGxldmVsQnV0dG9uczogTWVudUJ1dHRvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmFkZC50ZXh0KDUwLCA1MCwgJ1NlbGVjdCBMZXZlbCcsIHsgZmlsbDogJyNGRkZGRkYnIH0pLnNldEZvbnRTaXplKDI0KTtcblxuICAgIC8vIE51bWJlciBvZiBsZXZlbHMgcGVyIHJvdy5cbiAgICBjb25zdCByb3dMZW5ndGggPSBNYXRoLmZsb29yKChnZXRHYW1lV2lkdGgodGhpcykgLSAxMDApIC8gMTAwKTtcblxuICAgIC8vIERyYXcgdGhlIGxldmVsIGJ1dHRvbnMuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOVU1fTEVWRUxTOyBpKyspIHtcbiAgICAgIC8vIExldmVsIG51bWJlcnMgYXJlIDEtaW5kZXhlZC5cbiAgICAgIGNvbnN0IGxldmVsTnVtID0gaSArIDE7XG4gICAgICBjb25zdCBidXR0b25YID0gNTAgKyAoaSAlIHJvd0xlbmd0aCkgKiAxMDA7XG4gICAgICBjb25zdCBidXR0b25ZID0gMTAwICsgKDUwICogTWF0aC5mbG9vcihpIC8gcm93TGVuZ3RoKSk7XG4gICAgICBjb25zdCBsZXZlbEJ1dHRvbiA9IG5ldyBNZW51QnV0dG9uKHRoaXMsXG4gICAgICAgICAgYnV0dG9uWCxcbiAgICAgICAgICBidXR0b25ZLFxuICAgICAgICAgIGBMZXZlbCAke2xldmVsTnVtfWAsXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICBzZXRMZXZlbE51bWJlcihsZXZlbE51bSk7XG4gICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ0dhbWUnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0aW5nIGxldmVsJywgbGV2ZWxOdW0pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmxldmVsQnV0dG9ucy5wdXNoKGxldmVsQnV0dG9uKTtcbiAgICAgIC8vIEFsc28gcmVuZGVyIGlmIHRoZSBsZXZlbCB3YXMgY29tcGxldGVkLlxuICAgICAgaWYgKGdldExldmVsQ29tcGxldGVkKGxldmVsTnVtKSkge1xuICAgICAgICB0aGlzLmFkZC5pbWFnZShidXR0b25YICsgbGV2ZWxCdXR0b24ud2lkdGggLSA4LFxuICAgICAgICAgICAgYnV0dG9uWSArIGxldmVsQnV0dG9uLmhlaWdodCAtIDgsICdzcHJpdGVzaGVldCcsIDQ2KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVudXNlZC1leHByZXNzaW9uXG4gICAgbmV3IE1lbnVCdXR0b24odGhpcywgNTAsIGdldEdhbWVIZWlnaHQodGhpcykgLSA1MCwgJ0JhY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdNYWluTWVudScpO1xuICAgIH0sIHtcbiAgICAgIGZvbnRTaXplOiAxMiwgcGFkZGluZzogNCxcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTWVudUJ1dHRvbiB9IGZyb20gJy4uL3VpL21lbnUtYnV0dG9uJztcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6ICdNYWluTWVudScsXG59O1xuXG4vKipcbiAqIFRoZSBpbml0aWFsIHNjZW5lIHRoYXQgc3RhcnRzLCBzaG93cyB0aGUgc3BsYXNoIHNjcmVlbnMsIGFuZCBsb2FkcyB0aGUgbmVjZXNzYXJ5IGFzc2V0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIE1haW5NZW51U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlKCkge1xuICAgIC8vIFRPRE86IENoYW5nZSBmb250LlxuICAgIHRoaXMuYWRkLnRleHQoNTAsIDUwLCAnS2VlcCBpdCBhbGl2ZScsIHsgZmlsbDogJyNGRkZGRkYnIH0pLnNldEZvbnRTaXplKDI0KTtcblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW51c2VkLWV4cHJlc3Npb25cbiAgICBuZXcgTWVudUJ1dHRvbih0aGlzLCA1MCwgMTAwLCAnU3RhcnQgR2FtZScsICgpID0+IHtcbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ0xldmVsU2VsZWN0Jyk7XG4gICAgfSk7XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVudXNlZC1leHByZXNzaW9uXG4gICAgLy8gbmV3IE1lbnVCdXR0b24odGhpcywgNTAsIDIwMCwgJ0hlbHAnLCAoKSA9PiBjb25zb2xlLmxvZygnaGVscCBidXR0b24gY2xpY2tlZCcpKTtcbiAgfVxufVxuIiwiLyoqIEBmaWxlb3ZlcnZpZXcgTWFuYWdlcyB0aGUgc3RhdGUgaW4gdGhlIGdhbWUuICovXG5cbi8qKiBOdW1iZXIgb2YgbGV2ZWxzIGluIHRoZSBnYW1lICovXG5leHBvcnQgY29uc3QgTlVNX0xFVkVMUyA9IDg7XG5cbmNvbnN0IFNUT1JBR0VfS0VZID0gJ2xkLTQ2LWxldmVsLXN0YXRlJztcblxuLyoqIE51bWJlciBvZiBtaW5pb25zIHlvdSBnZXQgaW4gZWFjaCBsZXZlbC4gKi9cbmNvbnN0IE5VTV9NSU5JT05TX1BFUl9MRVZFTCA9IFtcbiAgMSwgMSwgMSwgMiwgNSwgNSwgMiwgMyxcbl07XG5cbmludGVyZmFjZSBMZXZlbEluZm8ge1xuICAvKiogV2hldGhlciBvciBub3QgdGhlIGxldmVsIGhhcyBiZWVuIGNvbXBsZXRlZC4gKi9cbiAgY29tcGxldGU6IGJvb2xlYW47XG59XG5cbmxldCBzZWxlY3RlZExldmVsOiBudW1iZXIgPSAwO1xuXG5pbnRlcmZhY2UgTGV2ZWxTdGF0ZSB7XG4gIFtrZXk6IHN0cmluZ106IExldmVsSW5mbztcbn1cblxuLy8gQXR0ZW1wdCB0byBsb2FkIGZyb20gbG9jYWxTdG9yYWdlLlxuY29uc3QgbGV2ZWxTdGF0ZTogTGV2ZWxTdGF0ZSA9IGF0dGVtcHRMb2FkRnJvbVN0b3JhZ2UoKTtcblxuLyoqIEVpdGhlciBsb2FkcyBmcm9tIHN0b3JhZ2Ugb3IgcmV0dXJucyBlbXB0eSBvYmplY3QuICovXG5mdW5jdGlvbiBhdHRlbXB0TG9hZEZyb21TdG9yYWdlKCk6IExldmVsU3RhdGUge1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oU1RPUkFHRV9LRVkpO1xuICAgIGNvbnN0IHBhcnNlZDogTGV2ZWxTdGF0ZSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgaWYgKHBhcnNlZCAmJiB0eXBlb2YgcGFyc2VkID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgcmV0dXJuIHt9O1xufVxuXG4vKiogU2F2ZXMgdGhlIGxldmVsIHN0YXRlLiAqL1xuZnVuY3Rpb24gd3JpdGVUb1N0b3JhZ2UoKSB7XG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShTVE9SQUdFX0tFWSwgSlNPTi5zdHJpbmdpZnkobGV2ZWxTdGF0ZSkpO1xufVxuXG4vKiogU2V0IHRoZSBsZXZlbCB0byBwbGF5LiAxLWluZGV4ZWQuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0TGV2ZWxOdW1iZXIobGV2ZWw6IG51bWJlcikge1xuICBzZWxlY3RlZExldmVsID0gbGV2ZWw7XG59XG5cbi8qKiBHZXQgdGhlIGN1cnJlbnQgc2VsZWN0ZWQgbGV2ZWwuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGV2ZWxOdW1iZXIoKSB7XG4gIHJldHVybiBzZWxlY3RlZExldmVsO1xufVxuXG4vKiogU2V0IGEgbGV2ZWwgYXMgY29tcGxldGVkLiBFaXRoZXIgcHJvdmlkZSBhIGxldmVsIG9yIGl0IHVzZXMgdGhlIGN1cnJlbnQgb25lLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldExldmVsQ29tcGxldGVkKGxldmVsPzogbnVtYmVyKSB7XG4gIGNvbnN0IGxldmVsS2V5ID0gZ2V0TGV2ZWxLZXkobGV2ZWwgfHwgZ2V0TGV2ZWxOdW1iZXIoKSk7XG4gIGlmICghbGV2ZWxTdGF0ZVtsZXZlbEtleV0pIHtcbiAgICBsZXZlbFN0YXRlW2xldmVsS2V5XSA9IHtjb21wbGV0ZTogdHJ1ZX07XG4gIH0gZWxzZSB7XG4gICAgbGV2ZWxTdGF0ZVtsZXZlbEtleV0uY29tcGxldGUgPSB0cnVlO1xuICB9XG4gIHdyaXRlVG9TdG9yYWdlKCk7XG59XG5cbi8qKiBSZXR1cm4gd2hldGhlciBvciBub3QgdGhlIGxldmVsIGlzIGNvbXBsZXRlZC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMZXZlbENvbXBsZXRlZChsZXZlbDogbnVtYmVyKTogYm9vbGVhbiB7XG4gIGNvbnN0IHN0YXRlID0gbGV2ZWxTdGF0ZVtnZXRMZXZlbEtleShsZXZlbCldO1xuICBpZiAoc3RhdGU/LmNvbXBsZXRlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKiogR2V0IHRoZSBzdHJpbmcgaWRlbnRpZmllciBmb3IgYSBsZXZlbC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMZXZlbEtleShsZXZlbDogbnVtYmVyKTogc3RyaW5nIHtcbiAgcmV0dXJuIGBsZXZlbC0ke2xldmVsfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROdW1NaW5pb25zKGxldmVsOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gTlVNX01JTklPTlNfUEVSX0xFVkVMW2xldmVsIC0gMV0gfHwgNDA7ICAvLyA0MCBpcyBlcnJvci5cbn1cblxuLy8gVE9ETzogU3RvcmUgZGF0YS5cbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xuXG5jb25zdCBtaW5pbXVtV2lkdGggPSAyMDtcbmNvbnN0IG1pbmltdW1IZWlnaHQgPSAyMDtcblxuaW50ZXJmYWNlIE1lbnVCdXR0b25PcHRpb25zIHtcbiAgZm9udFNpemU/OiBudW1iZXI7XG4gIHBhZGRpbmc/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBNZW51QnV0dG9uIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZSB7XG4gIHByaXZhdGUgbGFiZWw6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xuICBwcml2YXRlIHBhZGRpbmc6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dDogc3RyaW5nLFxuICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB2b2lkLCBvcHRpb25zPzogTWVudUJ1dHRvbk9wdGlvbnMpIHtcbiAgICBzdXBlcihzY2VuZSwgeCwgeSk7XG4gICAgY29uc3QgcGFkZGluZyA9IG9wdGlvbnM/LnBhZGRpbmcgfHwgMTA7ICAvLyBEZWZhdWx0IDEwIHBhZGRpbmcuXG4gICAgdGhpcy5wYWRkaW5nID0gcGFkZGluZztcbiAgICBzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XG4gICAgdGhpcy5zZXRPcmlnaW4oMCwgMCk7XG5cbiAgICB0aGlzLmxhYmVsID0gc2NlbmUuYWRkLnRleHQoeCArIHBhZGRpbmcsIHkgKyBwYWRkaW5nLCB0ZXh0KVxuICAgICAgICAuc2V0Rm9udFNpemUob3B0aW9ucz8uZm9udFNpemUgfHwgMTgpLnNldEFsaWduKCdjZW50ZXInKTtcblxuICAgIC8vIGlmICh0aGlzLm9yaWdpblggPT09IDAgJiYgdGhpcy5sYWJlbCkge1xuICAgIC8vICAgdGhpcy5sYWJlbC5zZXRYKHRoaXMueCAtIHRoaXMud2lkdGgpO1xuICAgIC8vICAgY29uc29sZS5sb2coJ3RoaXMgc2V0Jyk7XG4gICAgLy8gfVxuXG4gICAgY29uc3QgbGFiZWxXaWR0aCA9IHRoaXMubGFiZWwud2lkdGggKyBwYWRkaW5nICogMjtcbiAgICBjb25zdCBsYWJlbEhlaWdodCA9IHRoaXMubGFiZWwuaGVpZ2h0ICsgcGFkZGluZyAqIDI7XG5cbiAgICB0aGlzLndpZHRoID0gbGFiZWxXaWR0aCA+PSBtaW5pbXVtV2lkdGggPyBsYWJlbFdpZHRoIDogbWluaW11bVdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gbGFiZWxIZWlnaHQgPj0gbWluaW11bUhlaWdodCA/IGxhYmVsSGVpZ2h0IDogbWluaW11bUhlaWdodDtcblxuICAgIHRoaXMuc2V0SW50ZXJhY3RpdmUoeyB1c2VIYW5kQ3Vyc29yOiB0cnVlIH0pXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgdGhpcy5lbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgdGhpcy5lbnRlck1lbnVCdXR0b25SZXN0U3RhdGUpXG4gICAgICAub24oJ3BvaW50ZXJkb3duJywgdGhpcy5lbnRlck1lbnVCdXR0b25BY3RpdmVTdGF0ZSlcbiAgICAgIC5vbigncG9pbnRlcnVwJywgdGhpcy5lbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKTtcblxuICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICB0aGlzLm9uKCdwb2ludGVydXAnLCBvbkNsaWNrKTtcbiAgICB9XG5cbiAgICB0aGlzLmVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSgpO1xuICB9XG5cbiAgcHVibGljIHNldE9yaWdpbih4OiBudW1iZXIsIHk6IG51bWJlcik6IHRoaXMge1xuICAgIHN1cGVyLnNldE9yaWdpbih4LCB5KTtcbiAgICAvLyBCdXQgdGhlIGxhYmVsIGdldHMgbWVzc2VkIHVwLiBIYWNreSBmaXg6XG4gICAgaWYgKHRoaXMub3JpZ2luWCA9PT0gMSAmJiB0aGlzLmxhYmVsKSB7XG4gICAgICB0aGlzLmxhYmVsLnNldFgodGhpcy54ICsgdGhpcy5wYWRkaW5nIC0gdGhpcy53aWR0aCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIFdoZW4gdGhlcmUncyBob3Zlci4gKi9cbiAgcHJpdmF0ZSBlbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKCkge1xuICAgIHRoaXMubGFiZWwuc2V0Q29sb3IoJyNGQ0ZDRkMnKTtcbiAgICB0aGlzLnNldEZpbGxTdHlsZSgweDQwNDA0MCk7XG4gIH1cblxuICAvKiogV2hlbiB0aGVyZSdzIG5vIGl0ZXJhY3Rpb24uICovXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uUmVzdFN0YXRlKCkge1xuICAgIHRoaXMubGFiZWwuc2V0Q29sb3IoJyNGRkZGRkYnKTtcbiAgICB0aGlzLnNldEZpbGxTdHlsZSgweDQ0NDQ0NCk7XG4gIH1cblxuICAvKiogV2hlbiB0aGVyZSdzIHByZXNzLiAqL1xuICBwcml2YXRlIGVudGVyTWVudUJ1dHRvbkFjdGl2ZVN0YXRlKCkge1xuICAgIHRoaXMubGFiZWwuc2V0Q29sb3IoJyNFRUVFRUUnKTtcbiAgICB0aGlzLnNldEZpbGxTdHlsZSgweDMzMzMzMyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=