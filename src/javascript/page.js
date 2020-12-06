import { Navbar } from "./navbar.js";
import Header from "./header.js";
import home from "./pages/home.js";
import menu from "./pages/menu.js";
import contact from "./pages/contact.js"

class Page {
  constructor() {
    this.content = document.querySelector("#content");
    this._navbar = (() => {
      const navbar = new Navbar(this);
      navbar.addItem(home, true);
      navbar.addItem(menu);
      navbar.addItem(contact);
      return navbar;
    })();
  }

  render() {
    while (this.content.firstChild) {
      this.content.removeChild(this.content.lastChild);
    }
    this.content.appendChild(this.header.component);
    if (typeof this.activeItem !== "undefined") {
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
