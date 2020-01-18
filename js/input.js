export default class Input{
  constructor(){
    this.up = false;
    this.left = false;
    this.down = false;
    this.right = false;
  }
  push_key(){
    addEventListener("keydown", () => {
      const key_code = event.keyCode;
      if (key_code === 37) this.left = true;
      if (key_code === 38) this.up = true;
      if (key_code === 39) this.right = true;
      if (key_code === 40) this.down = true;
      event.preventDefault();
    }, false);
    addEventListener("keyup", () => {
      const key_code = event.keyCode;
      if (key_code === 37) this.left = false;
      if (key_code === 38) this.up = false;
      if (key_code === 39) this.right = false;
      if (key_code === 40) this.down = false;
    }, false);
  }
}
