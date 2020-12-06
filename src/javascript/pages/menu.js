import { NavItem } from "../navbar.js";
import { TextBox } from "../text_box.js";
import StyledText from "../styled_text.js";

class MenuPage extends NavItem {
  constructor() {
    super("Menu");
    this.menu = {
      Tacos: {
        "Carne Asada": 4.25,
        "Pollo Asado": 3.95,
        Adobada: 3.95,
        Nopal: 3.75,
      },
      Quesadillas: {
        "Carne Asada": 5.25,
        "Pollo Asado": 4.95,
        Adobada: 4.95,
        Nopal: 4.75,
        Especial: 7,
      },
      "On a Plate": {
        "Nopal Plate": 8,
      },
      Sides: {
        "Chips y Salsa": 3.95,
        "Chips y Guacamole": 4.95,
      },
      Drinks: {
        "Aguas Frescas": 3.95,
        "Mexican Sodas": 3.95,
        "Bottled Sodas": 3.25,
        Water: 2.75,
      },
    };
    this.children = [...this.categories];
  }

  get categories() {
    return Object.entries(this.menu).map(([category, entries]) => {
      return this.categoryComponent(category, entries);
    });
  }

  categoryComponent(category, entries) {
    const component = document.createElement("div");
    const header = new StyledText({ text: category }).component;

    const prices = new TextBox(
      ...Object.entries(entries).map(([item, price]) => {
        const entryContainer = document.createElement("div");
        entryContainer.classList.add("menu-entry");

        const itemComponent = document.createElement("span");
        itemComponent.classList.add("menu-entry__item");
        itemComponent.textContent = item;

        const priceComponent = document.createElement("span");
        priceComponent.classList.add("menu-entry__price");
        priceComponent.textContent = `$${price.toFixed(2)}`;

        entryContainer.appendChild(itemComponent);
        entryContainer.appendChild(priceComponent);

        return entryContainer;
      })
    ).component;

    component.appendChild(header);
    component.appendChild(prices);
    return component;
  }
}

export default new MenuPage();
