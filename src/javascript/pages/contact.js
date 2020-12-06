import { NavItem } from "../navbar.js";
import { TextBox } from "../text_box.js";
import StyledText from "../styled_text.js";

class ContactPage extends NavItem {
  constructor({ phone, address, email }) {
    super("Contact");
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.children = [this._header, this._card];
  }

  get _header() {
    return new StyledText({ text: this.name }).component;
  }

  get _card() {
    const card = new TextBox(this._address, this._phone, this._email).component;
    card.classList.add("contact");
    return card;
  }

  get _address() {
    const address = document.createElement("address");
    address.classList.add("contact__address");
    address.textContent = this.address;
    return address;
  }

  get _phone() {
    const phone = document.createElement("a");
    phone.classList.add("contact__phone");
    phone.href = `tel:${this.phone}`;
    phone.textContent = this._formatted_phone;
    return phone;
  }

  get _email() {
    const email = document.createElement("a");
    email.classList.add("contact__email");
    email.href = `mailto:${this.email}`;
    email.textContent = this.email;
    return email;
  }

  get _formatted_phone() {
    return this.phone.replace(/((\d{3})(\d{3})(\d{4}))/, "($2)-$3-$4");
  }
}

export default new ContactPage({
  phone: "8001234567",
  address: "100 Taco Street, TC 10101",
  email: "Order@TheTacoProject.com",
});
