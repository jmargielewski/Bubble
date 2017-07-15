/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BubbleShoot = window.BubbleShoot || {};

BubbleShoot.ui = function ($) {
    var ui = {
        BUBBLE_DIMS: 44,
        init: function init() {},
        hideDialog: function hideDialog() {
            $(".dialog").fadeOut(300);
        },
        getMouseCoords: function getMouseCoords(e) {
            var coords = { x: e.pageX, y: e.pageY };
            return coords;
        },
        getBubbleCoords: function getBubbleCoords(bubble) {
            var bubbleCoords = bubble.position();
            bubbleCoords.left += ui.BUBBLE_DIMS / 2;
            bubbleCoords.top += ui.BUBBLE_DIMS / 2;
            return bubbleCoords;
        },
        getBubbleAngle: function getBubbleAngle(bubble, e) {
            var mouseCoords = ui.getMouseCoords(e);
            var bubbleCoords = ui.get.bubbleCoords(bubble);
            var gameCoords = $("#game").position();
            var boardLeft = 120;
            var angle = Math.atan((mouseCoords.x - bubbleCoords.left - boardLeft)(bubbleCoords.top + gameCoords.top - mouseCoords.y));
            if (mouseCoords.y > bubbleCoords.top + gameCoords.top) {
                angle += Math.PI;
            }
            return angle;
        },
        fireBubble: function fireBubble(bubble, coords, duration) {
            bubble.getSprite().animate({
                left: coords.x - ui.BUBBLE_DIMS / 2,
                top: coords.y - ui.BUBBLE_DIMS / 2
            }, {
                duration: duration,
                easing: "linear"
            });
        }
    };
    return ui;
};

// export { BubbleShoot }

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.Bubble = function ($) {
    var Bubble = function Bubble(sprite) {
        var that = this;
        this.getSprite = function () {
            return sprite;
        };
    };
    Bubble.create = function () {
        var sprite = $(document.createElement("div"));
        sprite.addClass("bubble");
        sprite.addClass("bubble_0");
        var bubble = new Bubble(sprite);
        return bubble;
    };
    return Bubble;
}(jQuery);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// import {BubbleShoot} from "./ui.js";

$(function () {

    var BubbleShoot = window.BubbleShoot || {};

    BubbleShoot.Game = function ($) {
        var Game = function Game() {
            var curBubble;
            this.init = function () {
                $(".but_start_game").bind("click", startGame);
            };
            var startGame = function startGame() {
                $(".but_start_game").unbind("click");
                // BubbleShoot.ui.hideDialog();
                $(".dialog").fadeOut(300);
                curBubble = getNextBubble();
                $(".game").bind("click", clickGameScreen);
            };
            var getNextBubble = function getNextBubble() {
                var bubble = BubbleShoot.Bubble.create();
                bubble.getSprite().addClass("cur_bubble");
                $("#board").append(bubble.getSprite());
                return bubble;
            };
            var clickGameScreen = function clickGameScreen() {
                var angle = BubbleShoot.ui.getBubbleAngle(curBubble.getSprite(), e);
                var duration = 750;
                var distance = 1000;
                var distX = Math.sin(angle) * distance;
                var distY = Math.cos(angle) * distance;
                var bubbleCoords = BubbleShoot.ui.getBubbleCoords(curBubble.getSprite());
                var coords = {
                    x: bubbleCoords.left + distX,
                    y: bubbleCoords.top - distY
                };
                BubbleShoot.ui.fireBubble(curBubble, coords, duration);
            };
        };
        return Game;
    }(jQuery);

    var game = new BubbleShoot.Game();
    game.init();
});

/***/ })
/******/ ]);