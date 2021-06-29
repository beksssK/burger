import React from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import { connect } from "react-redux";
import {addIngredient, initIngredients, removeIngredient} from "../../store/actions/burgerBuildrer";

export const INGREDIENT_PRICES = {
  salad: 20,
  meat: 50,
  cheese: 30,
  bacon: 40,
};

class BurgerBuilder extends React.Component {
  state = {
    purchasing: false,
  }
  
  componentDidMount() {
    this.props.initIngredients();
  }
  
  isPurchasable = () => {
    const sum = Object.keys(this.props.ingredients)
      .map(ingKey => this.props.ingredients[ingKey])
      .reduce((acc, ingCount) => acc + ingCount, 0);
    
    return sum > 0;
  }
  
  purchaseHandler = () => {
    this.setState({purchasing: true});
  };
  
  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  };
  
  purchaseContinueHandler = () => {
    this.props.history.push( "/checkout");
  };
  render() {
    let disabledInfo = {...this.props.ingredients};
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
        <>
          <Burger ingredients={this.props.ingredients}/>
          <BuildControls
            ordered={this.purchaseHandler}
            purchasable={this.isPurchasable()}
            disabledInfo={disabledInfo}
            totalPrice={this.props.totalPrice}
            addIngredient={this.props.onAddIngredient}
            removeIngredient={this.props.onRemoveIngredient}
          />
          <Modal
            show={this.state.purchasing}
            closed={this.purchaseCancelHandler}
          
          >
            <OrderSummary
              ingredients={this.props.ingredients}
              price={this.props.totalPrice}
              purchaseCancelled={this.purchaseCancelHandler}
              purchaseContinued={this.purchaseContinueHandler}
            />
          </Modal>
        </>
    )
  }
}

const mapStateToProps = (state) => ({
  ingredients: state.bb.ingredients,
  totalPrice: state.bb.totalPrice
});

const mapDispatchToProps = (dispatch) => ({
  onAddIngredient: ingName => dispatch(addIngredient(ingName)),
  onRemoveIngredient: ingName => dispatch(removeIngredient(ingName)),
  initIngredients: () => dispatch(initIngredients()),
});


export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
