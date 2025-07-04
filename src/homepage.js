import rest1 from "./restaurant-1.jpg";

export class homepage {
  #homeDiv;
  #restImg;
  #title;

  constructor() {
    this.content = document.querySelector("#content");
    this.remove = this.remove.bind(this);
    this.render = this.render.bind(this);
  }

  render() {
    this.#restImg = new Image();

    //create div
    this.#homeDiv = document.createElement("div");
    this.#homeDiv.classList.add("home-container");
    this.content.appendChild(this.#homeDiv);
    setTimeout(this.fadeIn, 10);

    //create #title
    this.#title = document.createElement("h1");
    this.#title.textContent = "Welcome to [Restaurant]";
    this.#homeDiv.appendChild(this.#title);

    //create img
    this.#restImg.src = rest1;
    this.#restImg.classList.add("home-img");
    this.#restImg.classList.add("full-img");
    this.#homeDiv.appendChild(this.#restImg);
  }

  remove() {
    this.content.removeChild(this.#homeDiv);
  }

  getDiv = () => this.#homeDiv;
}
