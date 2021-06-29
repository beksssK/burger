import {ADD_INGREDIENT, INIT_INGREDIENTS, REMOVE_INGREDIENT} from "../actions/actionTypes";

const INGREDIENT_PRICES = {
  salad: 20,
  meat: 50,
  cheese: 30,
  bacon: 40,
};

const INITIAL_INGREDIENTS = {
  salad: 0,
  meat: 0,
  bacon: 0,
  cheese: 0,
}

const initialState = {
  ingredients: {
    salad: 0,
    meat: 0,
    bacon: 0,
    cheese: 0,
  },
  totalPrice: 20,
}

const burgerBuilder = (state = initialState, action) => {
  switch (action.type){
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingName]: state.ingredients[action.ingName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingName]
      };
    case REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingName]: state.ingredients[action.ingName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingName]
      }
    case INIT_INGREDIENTS:
      return {
        ...state,
        ingredients: {...INITIAL_INGREDIENTS},
        totalPrice: 20,
      }
    default:
      return state;
  }
}

export default burgerBuilder;