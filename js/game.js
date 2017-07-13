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
            console.log("hello");
            $(".but_start_game").unbind("click");
            // BubbleShoot.ui.hideDialog();
            $(".dialog").fadeOut(300);
            var bubble = BubbleShoot.Bubble.create();
            bubble.getSprite().addClass("cur_bubble");
            $("#board").append(bubble.getSprite());
            return bubble;
        };
    };
    return Game;
})(jQuery);

var game = new BubbleShoot.Game();
game.init();

});
