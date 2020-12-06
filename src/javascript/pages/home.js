import { NavItem } from "../navbar.js";
import { Paragraph } from "../text_box.js";
import Figure from "../figure.js";

class HomePage extends NavItem {
  constructor() {
    super("Home");
    this.children = [this._description, this._delicious_tacos, this._spicy_sauces];
  }

  get _description() {
    return new Paragraph(
      "Dolor dolore delectus illo dolore ab Voluptates autem hic voluptates blanditiis amet. Fugiat mollitia ullam laborum quasi similique quam Placeat!"
    ).component;
  }

  get _delicious_tacos() {
    return new Figure({
      src: "images/tacos-chad-montano-unsplash.jpg",
      alt: "Tacos being drizzled with lime",
      caption: "Delicious Tacos",
      aspectRatio: 0.9,
      captionColor: "blue",
    }).component;
  }

  get _spicy_sauces() {
    return new Figure({
      src: "images/jarritos-tacos-unsplash.jpg",
      alt: "Tacos with sauces and soda",
      caption: "Spicy sauces",
      aspectRatio: 0.6,
      captionColor: "purple",
    }).component;
  }
}

export default new HomePage();
