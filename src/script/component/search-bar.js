class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  set searchEvent(event) {
    this._searchEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchElement').value;
  }

  render() {
    this.innerHTML = `
        <div class="search-food">
          <div class="tab">
            <img src="./img/button.svg">
            <h5>
                Search Food
            </h5>
          </div>
          <div class="search_area">
            <input id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
          </div>
        </div>
      `;
    this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
