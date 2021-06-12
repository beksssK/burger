import React from "react";
import "./Toolbar.css";
import Logo from "../../Logo/Logo";

const Toolbar = () => {
  return (
    <header className="Toolbar">
      <Logo />
      <nav>navigation</nav>
    </header>
  );
}

export default Toolbar;