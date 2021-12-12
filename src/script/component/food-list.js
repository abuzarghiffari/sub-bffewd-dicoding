import './food-item';

class FoodList extends HTMLElement {
  set foods(foods) {
    this._foods = foods;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._foods.forEach((food) => {
      const foodItemElement = document.createElement('food-item');
      foodItemElement.food = food;
      this.appendChild(foodItemElement);
      const recipeElement = document.createElement('food-recipe');
      recipeElement.food = food;
      this.append(recipeElement);
    });
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('food-list', FoodList);
