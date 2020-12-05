class Logo {
  constructor(text) {
    this.text = text;
  }

  get background() {
    const bg = document.createElement("div");
    bg.classList.add("logo__background");
    return bg;
  }

  get header() {
    const header = document.createElement("h1");
    header.classList.add("logo");
    header.textContent = this.text;
    return header;
  }

  get component() {
    const component = this.background;
    component.appendChild(this.header);
    return component;
  }
}

class Header {
  constructor(logoText, navbar) {
    this.navbar = navbar;
    this.logo = new Logo(logoText);
  }

  get component() {
    const component = document.createElement("header");
    component.appendChild(this.logo.component);
    component.appendChild(this.navbar.component);
    return component;
  }
}

export default Header;
