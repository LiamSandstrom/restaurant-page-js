export class page {
  #div;
  #content;

  constructor() {
    this.#div = document.createElement("div");
    this.#content = document.querySelector("#content");
    this.fadeIn = this.fadeIn.bind(this);
  }

  render() {
    this.fadeIn();
    if (this.#div.children.length >= 1) {
      this.#content.appendChild(this.#div);
      return false;
    }
    this.#content.appendChild(this.#div);
    return true;
  }

  remove() {
    this.#content.removeChild(this.#div);
  }

  getDiv = () => this.#div;
  getContent = () => this.#content;

  fadeIn() {
    if (this.#div == undefined) return;
    this.#div.style.opacity = "0%";
    setTimeout(() => {
      this.#div.style.opacity = "100%";
    }, 1);
  }
}
