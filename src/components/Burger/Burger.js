import React from 'react';
import './Burger.css';
import Ingredient from "./Ingredient/Ingredient";

const Burger = props => {
  const ingredientKeys = Object.keys(props.ingredients);
  let ingredients = ingredientKeys.reduce((acc, currentKey) => {
    let amount = props.ingredients[currentKey];
    for (let i = 0; i < amount; i++) {
      acc.push(<Ingredient type={currentKey} key={currentKey + i} />)
    }
    return acc;
  }, []);
  if (!ingredients.length) {
    ingredients = <div>Add Ingredients</div>
  }
  console.log('BURGER JS')
  return (
    <div className="Burger">
      <Ingredient type="bread-top" />
      {ingredients}
      <Ingredient type="bread-bottom" />
    </div>
  )
};

export default Burger;