export class page {
  #div;
  #content;
  #hasRendered = false;

  constructor() {
    this.#div = document.createElement("div");
    this.#content = document.querySelector("#content");
    this.fadeIn = this.fadeIn.bind(this);
    this.render = this.render.bind(this);
    this.remove = this.remove.bind(this);
  }

  render() {
    this.fadeIn();

    if(!this.#hasRendered){
      this.firstRender();
      this.#hasRendered = true;
    }

    this.#content.appendChild(this.#div);
  }

  remove() {
    this.#content.removeChild(this.#div);
  }

  getDiv = () => this.#div;
  getContent = () => this.#content;
  firstRender() {
    throw new Error("FirstRender() must be implemented by subclass")
  }

  fadeIn() {
    if (this.#div == undefined) return;
    this.#div.style.opacity = "0%";
    setTimeout(() => {
      this.#div.style.opacity = "100%";
    }, 1);
  }
}
