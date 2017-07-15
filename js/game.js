// import {BubbleShoot} from "./ui.js";

$(function() {

var BubbleShoot = window.BubbleShoot || {};

BubbleShoot.Game = (function($){
    var Game = function(){
        var curBubble;
        this.init = function(){
            $(".but_start_game").bind("click", startGame);
        };
        var startGame = function(){
            $(".but_start_game").unbind("click");
            // BubbleShoot.ui.hideDialog();
            $(".dialog").fadeOut(300);
            curBubble = getNextBubble();
            $(".game").bind("click", clickGameScreen)
        };
        var getNextBubble = function(){
            var bubble = BubbleShoot.Bubble.create();
            bubble.getSprite().addClass("cur_bubble");
            $("#board").append(bubble.getSprite());
            return bubble;
        };
        var clickGameScreen = function(){
            var angle = BubbleShoot.ui.getBubbleAngle(curBubble.getSprite(),e);
            var duration = 750;
            var distance = 1000;
            var distX = Math.sin(angle) * distance;
            var distY = Math.cos(angle) * distance;
            var bubbleCoords = BubbleShoot.ui.getBubbleCoords(curBubble.getSprite());
            var coords = {
                x : bubbleCoords.left + distX,
                y : bubbleCoords.top - distY
            };
            BubbleShoot.ui.fireBubble(curBubble,coords,duration);
        };
    };
    return Game;
})(jQuery);

var game = new BubbleShoot.Game();
game.init();

});
