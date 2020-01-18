export default class Sprite{
  constructor(img, left, top, size){
    this.left = left || 0;
    this.top = top || 0;
    this.img = new Image();
    this.img.src = img;
    this.width = size || 32;
    this.height = size || 32;
  }
}
