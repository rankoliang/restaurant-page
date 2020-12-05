class TextBox {
  constructor(text) {
    this.text = text;
  }

  get component() {
    const textBox = document.createElement("p");
    textBox.classList.add("text-box");
    textBox.textContent = this.text;
    return textBox;
  }
}

export default TextBox;
