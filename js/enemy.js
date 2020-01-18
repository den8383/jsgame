export default class Enemy{
  constructor(sprite, x, y, size, div_num){
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.size = size || 32;
    this.div_num = div_num || 8;
    this.width = this.size || 32;
    this.height = this.size || 32;
    this.move = 0;
  }
  chase_player(player){
    if (player.x - this.x > 0) this.x++;
    if (player.x - this.x < 0) this.x--;
    if (player.y - this.y > 0) this.y++;
    if (player.y - this.y < 0) this.y--;
  }
}
