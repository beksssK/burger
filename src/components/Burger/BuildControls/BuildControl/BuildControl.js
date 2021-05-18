import React from 'react';
import './BuildControl.css';



const BuildControl = props => {
  return (
    <div className="BuildControl">
      <div className="Label">{props.type}</div>
      <button className="Less">-</button>
      <button className="More" onClick={() => props.addIngredientHandler(props.type)}>+</button>
    </div>
  )
};

export default BuildControl;