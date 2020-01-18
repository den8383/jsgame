import Input from './input.js';
export default class Game{
  constructor(map, width, height){
    this.map = map;
    this.width = width || 320;
    this.height = height || 320;
    
    this.canvas = document.getElementById('canvas');
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.ctx = this.canvas.getContext('2d');
  }
  gameover(url){
    location.href = url;
  }
  gameclear(url){
    location.href = url;
  }
  add(sprite, x, y){
    if (typeof x === "undefined") sprite.x = 0;
    else sprite.x = x;
    if (typeof y === "undefined") sprite.y = 0;
    else sprite.y = y;
    this.ctx.drawImage(sprite.img, sprite.left, sprite.top, sprite.width, sprite.height, sprite.x, sprite.y, sprite.width, sprite.height);
  }
  add_chara(sprite, x, y){
    if (typeof x === "undefined") sprite.x = 0;
    else sprite.x = x;
    if (typeof y === "undefined") sprite.y = 0;
    else sprite.y = y;
    this.ctx.drawImage(sprite.img, sprite.left, sprite.top, sprite.width, sprite.height, sprite.x, sprite.y, sprite.width, sprite.height);
  }
  add_map(map, floor, wall){
    this.map = map;
    for (var y=0; y<this.map.length; y++){
      for (var x = 0; x<this.map[y].length; x++){
        if (this.map[y][x] === 0) this.add(floor, 32*x, 32*y);
        if (this.map[y][x] === 1) this.add(wall, 32*x, 32*y);
      }
    }
  }
  move_sp_key(player, input){
    this.input = input;
    this.player = player;
    this.input.push_key();
    this.add(this.player.sprite, this.player.x, this.player.y);
    if (this.player.move === 0){
      if (this.input.left === true){
        var x = this.player.x/this.player.width;
        var y = this.player.y/this.player.height;
        x--;
        if (this.map[y][x] === 0){
          this.player.move = this.player.size;
          this.input.push = 'left';
        }
      }
      if (this.input.up === true){
        var x = this.player.x/this.player.width;
        var y = this.player.y/this.player.height;
        if (y > 0){
          y--;
          if (this.map[y][x] === 0){
            this.player.move = this.player.size;
            this.input.push = 'up';
          }
        }
      }
      if (this.input.right === true){
        var x = this.player.x/this.player.width;
        var y = this.player.y/this.player.height;
        x++;
        if (this.map[y][x] === 0){
          this.player.move = this.player.size;
          this.input.push = 'right';
        }
      }
      if (this.input.down === true){
        var x = this.player.x/this.player.width;
        var y = this.player.y/this.player.height;
        if (y < this.map.length-1){
          y++;
          if (this.map[y][x] === 0){
            this.player.move = this.player.size;
            this.input.push = 'down';
          }
        }
      }
    }
    if (this.player.move > 0){
      //alert('x:'+this.player.x+', y:'+this.player.y)
      this.player.move -= this.player.size/this.player.div_num;
      if (this.input.push === 'left') this.player.x -= this.player.size/this.player.div_num;
      if (this.input.push === 'up') this.player.y -= this.player.size/this.player.div_num;
      if (this.input.push === 'right') this.player.x += this.player.size/this.player.div_num;
      if (this.input.push === 'down') this.player.y += this.player.size/this.player.div_num;
    }
  }
}
