import { Navbar } from "./navbar.js";
import Header from "./header.js";
import home from "./pages/home.js";
import menu from "./pages/menu.js";

class Page {
  constructor() {
    this.content = document.querySelector("#content");
    this._navbar = (() => {
      const navbar = new Navbar(this);
      navbar.addItem(home);
      navbar.addItem(menu, true);
      return navbar;
    })();
  }

  render() {
    while (this.content.firstChild) {
      this.content.removeChild(this.content.lastChild);
    }
    this.content.appendChild(this.header.component);
    if (typeof this.activeItem !== "undefined") {
      console.log(this.activeItem);
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
    return this._navbar;
  }
}

export default new Page();
