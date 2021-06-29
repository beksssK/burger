import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "./../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import OrderItem from "../../components/Order/OrderItem/OrderItem";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import ErrorBoundary from "../../components/errorBoundary/errorBoundary";
import {getOrders} from "../../store/actions/orders";

class Orders extends Component {
  componentDidMount() {
    this.props.getOrders();
  }
  
  render() {
    const orders = this.props.orders && Object.keys(this.props.orders)
      .map(key => ({...this.props.orders[key], id: key}));
    const orderItems = orders && orders.map(order => (
      <ErrorBoundary key={order.id}>
        <OrderItem ingredients={order.ingredients} price={order.price} />
      </ErrorBoundary>
    ));
    return (
      <div className="Orders">
        {this.props.loading ? <Spinner /> : orderItems}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  orders: state.orders.orders,
  loading: state.orders.loading,
});

const mapDispatchToProps = dispatch => ({
  getOrders: () => dispatch(getOrders())
});

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));