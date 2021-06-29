import React from "react";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";
import {Route} from "react-router";
import { connect } from "react-redux";
import Contact from "./Contact";
import "./Contact.css";

class Checkout extends React.Component {
  continueHandler = () => {
    this.props.history.replace("/checkout/contact");
  }
  cancelHandler = () => {
    this.props.history.goBack();
  }
  
  render() {
    return (
      <>
          <CheckoutSummary
              ingredients={this.props.ingredients}
              continueOrder={this.continueHandler}
              cancelOrder={this.cancelHandler}
          />
          <Route
              path={this.props.match.path + "/contact"}
              render={(props) => (<Contact {...props} />)}
          />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ingredients: state.bb.ingredients,
  totalPrice: state.bb.totalPrice
});

export default connect(mapStateToProps)(Checkout);