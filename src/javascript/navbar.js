class Navbar {
  constructor() {
    this.items = [];
  }

  get component() {
    const component = document.createElement("nav");
    const nav = document.createElement("ul");
    nav.classList.add("nav");
    for (const item of this.items) {
      nav.appendChild(item.navComponent);
    }
    component.appendChild(nav);
    return component;
  }

  addItem(item) {
    this.items.push(item);
  }
}

class NavItem {
  constructor(name) {
    this.name = name;
  }

  get navComponent() {
    const component = document.createElement("li");
    component.classList.add("nav__item");
    const navLink = document.createElement("a");
    navLink.textContent = this.name;
    component.appendChild(navLink);
    return component;
  }
}

export { Navbar, NavItem };
