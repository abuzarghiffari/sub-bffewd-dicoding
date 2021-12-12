/* eslint-disable no-use-before-define */
import '../component/food-list';
import '../component/search-bar';
import { FoodSource, Main } from '../data/food-source';

const search = () => {
  const searchElement = document.querySelector('search-bar');
  const foodListElement = document.querySelector('food-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await FoodSource.searchFood(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };
  const renderResult = (results) => {
    foodListElement.foods = results;
  };
  const fallbackResult = (message) => {
    foodListElement.renderError(message);
  };
  searchElement.clickEvent = onButtonSearchClicked;
};

const main = () => {
  const foodListElement = document.querySelector('food-list');

  const mainView = async () => {
    try {
      const result = await Main.listFoods();
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };
  const renderResult = (results) => {
    foodListElement.foods = results;
  };
  const fallbackResult = (message) => {
    foodListElement.renderError(message);
  };
  mainView();
};

export { search, main };
