import { page } from "./page.js";
import rest1 from "./restaurant-3.jpg";

export class booking extends page {
  #restImg;
  #title;
  #form;
  #nameLabel;
  #nameInput;
  #nameDiv;
  #dateLabel;
  #dateInput;
  #dateDiv;
  #peopleLabel;
  #peopleInput;
  #peopleDiv;
  #submitBtn;

  constructor() {
    super();
  }

  render() {
    if (!super.render()) return;

    //if already rendered

    this.#restImg = new Image();

    //create div
    this.getDiv().classList.add("booking-container");
    this.getDiv().classList.add("page");

    //create img
    this.#restImg.src = rest1;
    this.#restImg.classList.add("home-img");
    this.#restImg.classList.add("full-img");
    this.getDiv().appendChild(this.#restImg);

    this.#form = document.createElement("div");
    this.#form.classList.add("booking-form");
    this.getDiv().appendChild(this.#form);

    this.#nameDiv = document.createElement("div");
    this.#form.appendChild(this.#nameDiv);
    this.#nameLabel = document.createElement("label");
    this.#nameLabel.textContent = "Name";
    this.#nameDiv.appendChild(this.#nameLabel);
    this.#nameInput = document.createElement("input");
    this.#nameDiv.appendChild(this.#nameInput);

    this.#dateDiv = document.createElement("div");
    this.#form.appendChild(this.#dateDiv);
    this.#dateLabel = document.createElement("label");
    this.#dateLabel.textContent = "Date";
    this.#dateDiv.appendChild(this.#dateLabel);
    this.#dateInput = document.createElement("input");
    this.#dateInput.type = "date";
    this.#dateInput.min = new Date().toISOString().split("T")[0];
    this.#dateDiv.appendChild(this.#dateInput);


    this.#peopleDiv = document.createElement("div");
    this.#peopleDiv.classList.add("people-input")
    this.#form.appendChild(this.#peopleDiv);
    this.#peopleLabel = document.createElement("label");
    this.#peopleLabel.textContent = "people";
    this.#peopleDiv.appendChild(this.#peopleLabel);
    this.#peopleInput = document.createElement("input");
    this.#peopleInput.type = "number";
    this.#peopleInput.min = 1;
    this.#peopleInput.max = 8;
    this.#peopleDiv.appendChild(this.#peopleInput);

    this.#submitBtn = document.createElement("button");
    this.#submitBtn.textContent = "Submit";
    this.#form.appendChild(this.#submitBtn);
  }
}
