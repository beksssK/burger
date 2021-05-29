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
      salad: 0,
      meat: 0,
      cheese: 0,
      bacon: 0
    },
    totalPrice: 20,
    purchasable: false,
  }
  
  componentDidMount() {
    console.log("first console");
  }
  
  addIngredientHandler = (type) => {
    let oldCount = this.state.ingredients[type];
    let ingredients = {...this.state.ingredients};
    ingredients[type] = oldCount + 1;
    
    let oldPrice = this.state.totalPrice;
    let newPrice = oldPrice + INGREDIENT_PRICES[type];
    
    this.setState({ ingredients: ingredients, totalPrice: newPrice });
    this.updatePurchaseState();
  }
  removeIngredientHandler = (type) => {
    let oldCount = this.state.ingredients[type];
    let ingredients = {...this.state.ingredients};
    
    if (oldCount <= 0) {
      return
    }
    
    ingredients[type] = oldCount - 1;
    
    let oldPrice = this.state.totalPrice;
    let newPrice = oldPrice - INGREDIENT_PRICES[type];
    
    this.setState({ ingredients: ingredients, totalPrice: newPrice });
    this.updatePurchaseState();
  }
  updatePurchaseState = () => {
    let ingredientsCount = Object.keys(this.state.ingredients).map(key => {
      return this.state.ingredients[key];
    })
    
    let sum = ingredientsCount.reduce((acc, ingredientCount) => {
      acc = acc + ingredientCount;
      return acc;
    });
    this.setState({ purchasable: sum > 0 })
  }

  render() {
    
    console.log("hello")
    let disabledInfo = {...this.state.ingredients};
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls purchasable={this.state.purchasable} disabledInfo={disabledInfo} totalPrice={this.state.totalPrice} addIngredient={this.addIngredientHandler} removeIngredient={this.removeIngredientHandler}/>
      </>
    )
  }
}

export default BurgerBuilder;
