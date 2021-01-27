//var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');
var button;

var startDialog = function(game) {};

startDialog.prototype = {

  preload: function () {
    game.load.image('starfield',   '/assets/starfield.png');
    game.load.spritesheet('button', '/assets/button_sprite_sheet.png', 193, 71);
    //game.load.image('brand',    'assets/images/logo.png');
    game.load.script('game',    '/JS/Game.js');
  },

  create: function () {

    //add gamestates
    game.state.add('tutorial', tutorial);
    


    //game.state.start('Splash');
    game.add.tileSprite(0, 0, 800, 600, 'starfield');
    //game.add.tileSprite(0, 0, 800, 600, 'button');
    button = game.add.button(game.world.centerX, game.world.centerY, 'button', actionOnClick, this, 2, 1, 0);
    console.log(button);
    //  setting the anchor to the center
    button.anchor.setTo(0.5, 0.5);
    //game.state.start('Game');

    function actionOnClick() {
      game.state.start('Game');
    }
  },

  

};