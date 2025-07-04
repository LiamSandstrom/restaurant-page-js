import { page } from "./page.js";
import image from "./chef.jpg";

export class menu extends page {
  #restImg;
  #title;

  constructor() {
    super();
  }

  render() {
    //if already rendered
    if (!super.render()) return;

    //create div
    this.getDiv().classList.add("home-container");
    this.getDiv().classList.add("page");

    //create #title
    this.#title = document.createElement("h1");
    this.#title.textContent = "Here is [menu]";
    this.getDiv().appendChild(this.#title);

    //create img
    this.#restImg = new Image();
    this.#restImg.src = image;
    this.#restImg.classList.add("home-img");
    this.#restImg.classList.add("full-img");
    this.getDiv().appendChild(this.#restImg);
  }
}
