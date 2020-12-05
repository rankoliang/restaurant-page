class Paragraph {
  constructor(text) {
    this.text = text;
  }

  get component() {
    const paragraph = document.createElement("p");
    paragraph.textContent = this.text;
    return new TextBox(paragraph).component;
  }
}

class TextBox {
  constructor(...children) {
    this.children = [...children];
  }

  get component() {
    const textBox = document.createElement("div");
    textBox.classList.add("text-box");
    for (const child of this.children) {
      textBox.appendChild(child);
    }
    return textBox;
  }
}

export { Paragraph, TextBox };
