import {ORDERS_ERROR, ORDERS_REQUEST, ORDERS_SUCCESS} from "../actions/actionTypes";

const initialState = {
  orders: null,
  loading: false,
  error: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.orders,
        loading: false,
      };
    case ORDERS_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    default:
      return state;
  }
}

export default reducer;