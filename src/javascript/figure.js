class Figure {
  constructor({ src, alt, caption, captionColor = "blue", aspectRatio }) {
    this.src = src;
    this.alt = alt;
    this.caption = caption;
    this.captionColor = captionColor;
    this.aspectRatio = aspectRatio;
  }

  get component() {
    const component = document.createElement("figure");
    component.appendChild(this._image);
    component.appendChild(this._caption);
    return component;
  }

  get _image() {
    const img = document.createElement("img");
    img.src = this.src;
    img.alt = this.alt;
    img.style.backgroundImage = `url(${this.src})`;
    if (typeof this.aspectRatio !== "undefined") {
      img.style.paddingTop = `${this.aspectRatio * 100}%`;
    }
    return img;
  }

  get _caption() {
    const figcaption = document.createElement("figcaption");
    figcaption.classList.add(`figcaption__${this.captionColor}`);
    figcaption.textContent = this.caption;
    return figcaption;
  }
}

export default Figure;
