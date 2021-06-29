import {ADD_INGREDIENT, INIT_INGREDIENTS, REMOVE_INGREDIENT} from "./actionTypes";

export const addIngredient = (ingName) => ({type: ADD_INGREDIENT, ingName});

export const removeIngredient = (ingName) => ({type: REMOVE_INGREDIENT, ingName});

export const initIngredients = () => ({type: INIT_INGREDIENTS});