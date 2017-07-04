var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.Game = (function($){
    var Game = function(){
        this.init = function(){
            $(".but_start_game").bind("click", stratGame);
        };
        var startGame = function(){
        };
    };
    return Game;
})(jQuery);
