import "./styles.css";
import { homepage } from "./homepage.js";
import { booking } from "./booking.js";
import { menu } from "./menu.js";
import { renderFooter } from "./footer";

class pageHandler {
  constructor() {
    this.homepage = new homepage();
    this.booking = new booking();
    this.menu = new menu(); 
  }

  init() {
    this.setHomePage();
    renderFooter();
  }

  setBookingPage() {
    if (this.currentPage === this.booking) return;
    this.changePage(this.booking);
    console.log("changed to booking");
  }

  setHomePage() {
    if (this.currentPage === this.homepage) return;
    this.changePage(this.homepage);
    console.log("changed to home");
  }

  setMenuPage() {
    if (this.currentPage === this.menu) return;
    this.changePage(this.menu);
    console.log("changed to menu");
  }

  setAboutPage(){
    if(this.currentPage === this.about) return;
    this.changePage(this.about);
    console.log("changed to about");
  }

  changePage(newPage) {
    if (this.currentPage != null) {
      this.currentPage.remove();
    }
    this.currentPage = newPage;
    this.currentPage.render();
  }
}
  const myPageHandler = new pageHandler();
  myPageHandler.init();


(() => {
  const title = document.querySelector("#title");
  const bookingBtn = document.querySelector("#booking-btn");
  const menuBtn = document.querySelector("#menu-btn")

  title.addEventListener("click", () => {
    myPageHandler.setHomePage();
  });

  bookingBtn.addEventListener("click", () => {
    myPageHandler.setBookingPage();
  });

  menuBtn.addEventListener("click", () => {
    myPageHandler.setMenuPage();
  });

})();
