import { Navbar } from "./navbar.js";
import Header from "./header.js";
import home from "./pages/home.js";

class Page {
  constructor() {
    this.content = document.querySelector("#content");
  }

  render() {
    while (this.content.firstChild) {
      this.content.removeChild(this.content.lastChild);
    }
    this.content.appendChild(this.header.component);
    if (this.activeItem) {
      this.content.appendChild(this.activeItem.mainComponent);
    }
  }

  get header() {
    return new Header("The Taco Project", this.navbar);
  }

  get activeItem() {
    return this.navbar.activeItem;
  }

  get navbar() {
    const navbar = new Navbar(this);
    navbar.addItem(home, true);
    return navbar;
  }
}

export default Page;
