import rest1 from "./restaurant-1.jpg";
import { page } from "./page.js";

export class homepage extends page {
  #restImg;
  #title;

  constructor() {
    super();
    this.remove = this.remove.bind(this);
    this.render = this.render.bind(this);
  }

  render() {
    if(!super.render()) return;

    //if already rendered

    this.#restImg = new Image();

    //create div
    this.getDiv().classList.add("home-container");
    this.getDiv().classList.add("page");

    //create #title
    this.#title = document.createElement("h1");
    this.#title.textContent = "Welcome to [Restaurant]";
    this.getDiv().appendChild(this.#title);

    //create img
    this.#restImg.src = rest1;
    this.#restImg.classList.add("home-img");
    this.#restImg.classList.add("full-img");
    this.getDiv().appendChild(this.#restImg);
  }
}
