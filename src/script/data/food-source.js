/* eslint-disable prefer-promise-reject-errors */
// eslint-disable-next-line max-classes-per-file
class FoodSource {
  static async searchFood(keyword) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
    const responseJson = await response.json()
    if (responseJson.meals) {
      return Promise.resolve(responseJson.meals)
    }
    return Promise.reject(`${keyword} is not found`)
  }
}
class Main {
  static async listFoods() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    const responseJson = await response.json()
    if (responseJson.meals) {
      return Promise.resolve(responseJson.meals)
    }
  }
}

export { FoodSource, Main }
