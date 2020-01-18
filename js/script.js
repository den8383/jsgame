import Sprite from './sprite.js';
import Input from './input.js';
import Player from './player.js';
import Game from './game.js';
import Home from './map/home.js';
import Floor from './map/floormap.js';
import Chara from './chara.js';
import Enemy from './enemy.js';


let map = new Home().map;
//let map = new Floor().map;
let input = new Input();
let game = new Game(map, 640, 576);
let ippan = new Sprite('img/sample_chara.png');
let yajuu = new Sprite('img/sample_enemy.png');
let player = new Player(ippan, 0, 0);
let chara = new Chara(ippan, 608, 544);
let enemy = new Enemy(yajuu, 320, 576);
let floor = new Sprite('img/map.png', 0, 0);
let wall = new Sprite('img/map.png', 33, 0);

function main(){
  //ctx.fillStyle = "rgb(0, 0, 0)";
  //ctx.fillRect(0, 0, 640, 640);
  enemy.chase_player(player);

  game.add_map(map, floor, wall);
  game.move_sp_key(player, input);
  game.add_chara(player.sprite, player.x, player.y);
  game.add_chara(chara.sprite, chara.x, chara.y);
  game.add_chara(enemy.sprite, enemy.x, enemy.y);

  if (Math.sqrt(Math.pow(player.x - enemy.x, 2) + Math.pow(player.y - enemy.y, 2)) < 20){
    alert('gameover');
    game.gameover("./gameover.html");
    exit;
  } 
  if (Math.sqrt(Math.pow(player.x - chara.x, 2) + Math.pow(player.y - chara.y, 2)) < 10){
    alert('gamecleare');
    game.gameclear("./gameover.html");
    exit;
  } 

  requestAnimationFrame(main);
}
addEventListener('load', main(), false);
