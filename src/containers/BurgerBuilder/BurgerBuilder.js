import React from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 20,
  meat: 50,
  cheese: 30,
  bacon: 40,
};

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 2,
      bacon: 1
    },
    totalPrice: 20
  }
  addIngredientHandler = (type) => {
    let oldCount = this.state.ingredients[type];
    let ingredients = {...this.state.ingredients};
    ingredients[type] = oldCount + 1;
    
    let oldPrice = this.state.totalPrice;
    let newPrice = oldPrice + INGREDIENT_PRICES[type];
    
    this.setState({ ingredients: ingredients, totalPrice: newPrice })
  }
  array = [
    { name: "Volodya", age: 30},
    { name: "Beks", age: 22},
    { name: "Dima", age: 25},
    { name: "Nurs", age: 35},
  ];
  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls addIngredient={this.addIngredientHandler}/>
      </>
    )
  }
}

export default BurgerBuilder;
