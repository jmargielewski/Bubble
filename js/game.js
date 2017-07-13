import {BubbleShoot} from "./ui.js";

$(function() {

var BubbleShoot = window.BubbleShoot || {};

BubbleShoot.Game = (function($){
    var Game = function(){
        this.init = function(){
            $(".but_start_game").bind("click", startGame);
        };
        var startGame = function(){
            console.log("hello");
            $(".but_start_game").unbind("click");
            // BubbleShoot.ui.hideDialog();
            $(".dialog").fadeOut(300);
        };
    };
    return Game;
})(jQuery);

var game = new BubbleShoot.Game();
game.init();

});

console.log(BubbleShoot);
