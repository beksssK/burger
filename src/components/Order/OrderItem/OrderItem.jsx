import React from "react";
import "./OrderItem.css";

const OrderItem = (props) => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({name: ingredientName, amount: props.ingredients[ingredientName]});
  }
  const ingredientOutput = ingredients.map(ingredient => {
    return <span key={ingredient.name}> {ingredient.name}: {ingredient.amount}</span>
  });
  if (Math.random() > 0.8) throw new Error("Well, error happened");
  return (
    <div className="OrderItem">
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price: <strong>{props.price} KGS</strong></p>
    </div>
  );
}

export default OrderItem;