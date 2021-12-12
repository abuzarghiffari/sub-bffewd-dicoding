import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.min';
import './food-recipe';

class FoodItem extends HTMLElement {
  set food(food) {
    this._food = food;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="food-area" data-aos="fade-up">
        <img class="food-image" src="${this._food.strMealThumb}" alt="Food Image">
        <div class="food-info">
          <div class="foodtent">
            <p><img src="./img/info-light.svg">${this._food.strArea}</p>
            <h2>${this._food.strMeal}</h2>
            <small>${this._food.strCategory}</small>
          </div>
          <div class="foodton">
            <button type="button" data-toggle="modal" data-target="#/detail/${this._food.idMeal}">
              Recipe
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('food-item', FoodItem);
