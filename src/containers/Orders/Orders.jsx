import React, { useState, useEffect } from "react";
import axios from "./../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import OrderItem from "../../components/Order/OrderItem/OrderItem";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const getOrders = async () => {
    const response = await axios.get("/orders.json");
    const orders = Object.keys(response.data).map(order => {
      return {...response.data[order], id: order};
    })
    setOrders(orders);
    setLoading(false);
  }
  
  useEffect(() => {
    getOrders().catch(e => {
      console.error(e);
      setLoading(false);
    });
  }, []);
  
  const orderItems = orders.map(order => <OrderItem key={order.id} ingredients={order.ingredients} price={order.price} />)
  console.log(orders);
  return (
    <div>
      {loading ? <Spinner /> : orderItems}
    </div>
  );
}

export default Orders;