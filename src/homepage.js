import { renderFooter } from "./footer";
import rest1 from "./restaurant-1.jpg";
const content = document.querySelector("#content");

export function renderHomepage() {
  const restImg = new Image();

  //create div
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home-container");
  content.appendChild(homeDiv);

  //create title
  const title = document.createElement("h1");
  title.textContent = "Welcome to [Restaurant]";
  homeDiv.appendChild(title);

  //create img
  restImg.src = rest1;
  restImg.classList.add("home-img");
  restImg.classList.add("full-img");
  homeDiv.appendChild(restImg);
  renderFooter();
}
