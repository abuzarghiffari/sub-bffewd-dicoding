class FoodTer extends HTMLElement {
  connectedCallback() {
    this.render();
    document.getElementById('year').innerHTML = (new Date()).getFullYear();
  }

  render() {
    this.innerHTML = `
      <h5>
        Copyright &copy; <span id="year"></span> Abuzar Ghiffari <br>
        Belajar Fundamental Front-End Web Development
      </h5>
    `;
  }
}

customElements.define('food-ter', FoodTer);
