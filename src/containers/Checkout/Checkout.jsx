import React from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import {Route} from "react-router";
import Contact from "./Contact";
import "./Contact.css";

class Checkout extends React.Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  }
  continueHandler = () => {
    console.log("check");
    this.props.history.replace("/checkout/contact");
  }
  cancelHandler = () => {
    this.props.history.goBack();
  }
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let params of query.entries()) {
      ingredients[params[0]] = params[1];
    }
    this.setState({ingredients: ingredients});
  }
  
  render() {
    console.log(this.props.match);
    return (
      <>
          <CheckoutSummary
                  ingredients={this.state.ingredients}
                  continueOrder={this.continueHandler}
                  cancelOrder={this.cancelHandler}
                />
          <Route
            path={this.props.match.path + "/contact"}
            render={(props) => (<Contact  ingredients={this.state.ingredients} />)}
          />
      </>
    );
  }
}

export default Checkout;