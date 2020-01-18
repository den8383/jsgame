export default class Chara{
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
}
