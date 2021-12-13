/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
class FoodBar extends HTMLElement {
  connectedCallback() {
    this.render()
    const toggle = document.getElementById('toggle')
    toggle.addEventListener('change', e => {
      document.body.classList.toggle('dark', e.target.checked)
      localStorage.setItem('darkMode', e.target.checked)
    })
    window.addEventListener('load', event => {
      if (localStorage.getItem('darkMode') == 'true') {
        document.body.classList.add('dark')
        document.getElementById('toggle').checked = true
      }
    })
  }

  render() {
    this.innerHTML = `
      <h1 class="header_title">Fooder</h1>
      <div class="dark-toggle">
        <input type="checkbox" id="toggle">
        <label for="toggle" id="toggle"></label>
      </div>
    `
  }
}

customElements.define('food-bar', FoodBar)
