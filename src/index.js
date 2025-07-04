import "./styles.css";
import { homepage } from "./homepage.js";
import { booking } from "./booking.js";
import { renderFooter } from "./footer";

class pageHandler {
  constructor() {
    this.homepage = new homepage();
    this.booking = new booking();

    this.currentPage = this.homepage;
  }
  init() {
    this.currentPage.render();
    renderFooter();
    this.fadeIn();
  }

  setBooking() {
    if (this.currentPage === this.booking) return;
    this.changePage(this.booking);
  }

  setHomepage() {
    if (this.currentPage === this.homepage) return;
    this.changePage(this.homepage);
  }

  fadeIn() {
    if (this.currentPage.getDiv() == undefined) return;
    setTimeout(() => {
      this.currentPage.getDiv().style.opacity = "100%";
    }, 10);
  }

  changePage(newPage) {
    console.log("change");
    this.currentPage.remove();
    this.currentPage = newPage;
    this.currentPage.render();
    this.fadeIn();
  }
}

(() => {
  const title = document.querySelector("#title");
  const bookingBtn = document.querySelector("#booking-btn");

  const myPageHandler = new pageHandler();
  myPageHandler.init();

  title.addEventListener("click", () => {
    myPageHandler.setHomepage();
  });

  bookingBtn.addEventListener("click", () => {
    myPageHandler.setBooking();
  });
})();
