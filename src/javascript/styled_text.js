class StyledText {
  constructor({ color = "white", elementType = "div", text }) {
    this.elementType = elementType;
    this.text = text;
    this.color = color;
  }

  get component() {
    const component = document.createElement(this.elementType);
    component.classList.add("styled-text", `styled-text__${this.color}`);
    component.textContent = this.text;
    component.style.width = `${this.text.length + 1}ch`;
    return component;
  }
}

export default StyledText;
