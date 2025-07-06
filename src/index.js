import "./styles.css";
import { homepage } from "./homepage.js";
import { booking } from "./booking.js";
import { menu } from "./menu.js";
import { renderFooter } from "./footer";

class pageHandler {
  #pages = {};
  #currentPage;

  constructor(pages) {
    this.#pages = pages;
    this.#currentPage = null;
  }

  init(pageKey = "home") {
    this.changePage(pageKey);
  }

  changePage(pageKey) {
    const newPage = this.#pages[pageKey];
    if(newPage == this.#currentPage || newPage == null) return;

    if (this.#currentPage != null) {
      this.#currentPage.remove();
    }
    this.#currentPage = newPage;
    this.#currentPage.render();
  }
}

  const pages = {
    home : new homepage(),
    menu : new menu(),
    booking : new booking()
  }
  const myPageHandler = new pageHandler(pages);
  myPageHandler.init();
  renderFooter();

(() => {
  const title = document.querySelector("#title");
  const bookingBtn = document.querySelector("#booking-btn");
  const menuBtn = document.querySelector("#menu-btn")

  title.addEventListener("click", () => {
    myPageHandler.changePage("home");
  });

  bookingBtn.addEventListener("click", () => {
    myPageHandler.changePage("booking");
  });

  menuBtn.addEventListener("click", () => {
    myPageHandler.changePage("menu");
  });
})();
