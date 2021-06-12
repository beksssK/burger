import React from "react";
import logo from "./../../assets/images/burger_logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="Logo">
      <img src={logo} alt="Burger"/>
    </div>
  );
}

export default Logo;