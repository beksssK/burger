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
    <div className="BurgerControls">
      {controls.map((ingredient, index) => {
          return (
            <BuildControl
              addIngredientHandler={props.addIngredient}
              type={ingredient.type}
              key={index}
            />
            )
        }
      )}
    </div>
  );
};

export default BuildControls;