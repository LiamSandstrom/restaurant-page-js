import rest1 from "./restaurant-1.jpg";
import rest2 from "./restaurant-2.jpg";
import rest3 from "./restaurant-3.jpg";
import chef from "./chef.jpg";

const content = document.querySelector("#content");

export function renderHomepage() {
  const restImg = new Image();
  const restImg2 = new Image();
  const chefImg = new Image();

  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home-container");
  content.appendChild(homeDiv);

  const title = document.createElement("h1");
  title.textContent = "Welcome to [Restaurant]";
  homeDiv.appendChild(title);

  restImg.src = rest1;
  restImg.classList.add("home-img");
  restImg.classList.add("full-img");
  homeDiv.appendChild(restImg);
}
