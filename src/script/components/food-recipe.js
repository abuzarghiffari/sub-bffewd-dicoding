/* eslint-disable func-names */
/* eslint-disable no-shadow */
class FoodRecipe extends HTMLElement {
  set food(food) {
    this._food = food
    this.createIngredientListElement = function (food) {
      let result = ''
      for (let i = 1; i < 21; i++) {
        const measure = food[`strMeasure${i}`]
        const ingredients = food[`strIngredient${i}`]
        result = `${result}<li>${measure} ${ingredients}</li>`
      }
      return result
    }
    this.render()
  }

  render() {
    this.innerHTML = `
      <div class="modal fade" id="detailRecipe${
        this._food.idMeal
      }" tabindex="-1" role="dialog" aria-labelledby="detailRecipe" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-area">
              <h5 class="modal-title" id="detailRecipe">${this._food.strMeal}</h5>
              <div class="ingretions">
                <ul>
                  <li class="title">Ingredients</li>
                  <li>${this.createIngredientListElement(this._food)}</li>
                </ul>
              </div>
              <div class="ingretions">
                <ul>
                  <li class="title">Intructions</li>
                  <li class="intructions">${this._food.strInstructions}</li>
                </ul>
              </div>
            </div>
            <button type="button" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('food-recipe', FoodRecipe)
