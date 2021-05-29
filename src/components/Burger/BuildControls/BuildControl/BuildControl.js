import React from 'react';
import './BuildControl.css';

const BuildControl = props => {
  return (
    <div className="BuildControl">
      <div className="Label">{props.type}</div>
      <button className="Less" disabled={props.disabled} onClick={props.removeIngredientHandler}>-</button>
      <button className="More" onClick={props.addIngredientHandler}>+</button>
    </div>
  )
};

export default BuildControl;