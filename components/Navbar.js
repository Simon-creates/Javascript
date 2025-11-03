export class Navbar {
  render() {
    const nav = document.createElement("nav");
    nav.textContent = "Detta är navigeringen";
    document.body.prepend(nav);
    nav.classList.add("Navbar");

  }
}


