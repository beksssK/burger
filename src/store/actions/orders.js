import {ORDERS_ERROR, ORDERS_REQUEST, ORDERS_SUCCESS} from "./actionTypes";
import axios from "./../../axios-orders";

export const getOrdersRequest = () => ({ type: ORDERS_REQUEST });
export const getOrdersSuccess = (orders) => ({type: ORDERS_SUCCESS, orders});
export const getOrdersError = (error) => ({type: ORDERS_ERROR, error});

export const getOrders = () => {
  return async dispatch => {
    dispatch(getOrdersRequest());
    try {
      const response = await axios.get("/orders.json");
      dispatch(getOrdersSuccess(response.data));
    } catch(e) {
      dispatch(getOrdersError(e));
    }
  }
}