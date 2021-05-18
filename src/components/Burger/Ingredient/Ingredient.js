import React from 'react';
import './Ingredient.css';

const Ingredient = props => {
  switch (props.type) {
    case 'salad':
      return <div className="Salad"/>
    case 'meat':
      return <div className="Meat"/>
    case 'bacon':
      return <div className="Bacon"/>
    case 'cheese':
      return <div className="Cheese"/>
    case 'bread-top':
      return (
          <div className="BreadTop">
            <div className="Seeds1"/>
            <div className="Seeds2"/>
          </div>
        );
    case 'bread-bottom':
      return <div className="BreadBottom"/>
    default:
      return null;
  }
};

export default Ingredient;