import React from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

export const INGREDIENT_PRICES = {
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
    purchasing: false,
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
    this.updatePurchaseState(ingredients);
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
    this.updatePurchaseState(ingredients);
  }
  updatePurchaseState = (ingredients) => {
    let ingredientsCount = Object.keys(ingredients).map(key => {
      return ingredients[key];
    })
    
    let sum = ingredientsCount.reduce((acc, ingredientCount) => {
      acc = acc + ingredientCount;
      return acc;
    });
    this.setState({ purchasable: sum > 0 })
  }
  
  purchaseHandler = () => {
    this.setState({purchasing: true});
  };
  
  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  };
  
  purchaseContinueHandler = () => {
    const queryParams = [];
    
    for (let i in this.state.ingredients) {
      let query = encodeURI(i) + "=" + encodeURI(this.state.ingredients[i]);
      queryParams.push(query);
    }
    
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryParams.join("&"),
    });
  };
  
  render() {
    let disabledInfo = {...this.state.ingredients};
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
        <>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls ordered={this.purchaseHandler} purchasable={this.state.purchasable} disabledInfo={disabledInfo} totalPrice={this.state.totalPrice} addIngredient={this.addIngredientHandler} removeIngredient={this.removeIngredientHandler}/>
          <Modal show={this.state.purchasing}
                 closed={this.purchaseCancelHandler}
            >
            <OrderSummary
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
              purchaseCancelled={this.purchaseCancelHandler}
              purchaseContinued={this.purchaseContinueHandler}
            />
          </Modal>
        </>
    )
  }
}

export default BurgerBuilder;
