import React from 'react';
import './BuildControls.css';
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  {type: "meat"},
  {type: "salad"},
  {type: "bacon"},
  {type: "cheese"},
];

const BuildControls = (props) => {
  return (
    <div className="BuildControls">
      <p>Current Price: <strong>{props.totalPrice}</strong> KGS</p>
      {controls.map((ingredient, index) => {
          return (
            <BuildControl
              disabled={props.disabledInfo[ingredient.type]}
              addIngredientHandler={() => props.addIngredient(ingredient.type)}
              removeIngredientHandler={() => props.removeIngredient(ingredient.type)}
              type={ingredient.type}
              key={index}
            />
            )
        }
      )}
      <button className="OrderButton" onClick={props.ordered} disabled={!props.purchasable}>ORDER NOW</button>
    </div>
  );
};

export default BuildControls;