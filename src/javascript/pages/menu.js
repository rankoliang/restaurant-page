import { NavItem } from "../navbar.js";
import { Paragraph } from "../text_box.js";
import Figure from "../figure.js";

class Menu extends NavItem {
  constructor() {
    super("Menu");
    this.children = [this._description, this._delicious_tacos, this._spicy_sauces];
  }

  get _description() {
    return new Paragraph(
      "Come to the taco project to eat the most delicious tacos. Pair them with our open sauces developed by our award winning chefs that will keep you coming back."
    );
  }

  get _delicious_tacos() {
    return new Figure({
      src: "images/tacos-chad-montano-unsplash.jpg",
      alt: "Tacos being drizzled with lime",
      caption: "Delicious Tacos",
      aspectRatio: 0.9,
      captionColor: "blue",
    });
  }

  get _spicy_sauces() {
    return new Figure({
      src: "images/jarritos-tacos-unsplash.jpg",
      alt: "Tacos with sauces and soda",
      caption: "Spicy sauces",
      aspectRatio: 0.6,
      captionColor: "purple",
    });
  }

  get mainComponent() {
    const main = document.createElement("main");

    for (const child of this.children) {
      main.appendChild(child.component);
    }
    return main;
  }
}

export default new Menu();
