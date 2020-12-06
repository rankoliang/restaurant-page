class Navbar {
  constructor(parentElement) {
    this.items = [];
    this.parentElement = parentElement;
  }

  get component() {
    const component = document.createElement("nav");
    const nav = document.createElement("ul");
    nav.classList.add("nav");
    for (const item of this.items) {
      const navItemComponent = item.navComponent;
      navItemComponent.addEventListener("click", this.activateItem.bind(this, item));
      if (this.activeItem === item) {
        navItemComponent.classList.add("nav__item-active");
      }
      nav.appendChild(navItemComponent);
    }
    component.appendChild(nav);
    return component;
  }

  activateItem(item) {
    this.activeItem = item;
    this.parentElement.render();
  }

  addItem(item, isActive = false) {
    this.items.push(item);
    if (isActive) {
      this.activeItem = item;
    }
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

  get mainComponent() {
    const main = document.createElement("main");

    for (const child of this.children) {
      main.appendChild(child);
    }
    return main;
  }
}

export { Navbar, NavItem };
