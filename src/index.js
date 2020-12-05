import "normalize.css";
import { Navbar, NavItem } from "./javascript/navbar.js";
import Header from "./javascript/header.js";

(() => {
  const content = document.querySelector("#content");

  const navbar = (() => {
    const navbar = new Navbar();
    navbar.addItem(new NavItem("Home"));
    navbar.addItem(new NavItem("Menu"));
    navbar.addItem(new NavItem("Contact"));
    return navbar;
  })();
  const header = new Header("The Taco Project", navbar).component;
  content.appendChild(header);
})();
