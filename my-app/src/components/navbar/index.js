import React from "react";
import "./index.css";
import Logo from '../../Assets/Images/Logo.png';



const Navbar = () => {
  return (
    <>
      <div className="nav" >
      <img src={Logo} alt="icon" className="react-logo" />
            <h3 className="nav-icon-text">ReactFacts</h3>
            <h4 className="nav-title">React Course - Project 1</h4>
      </div>
    </>
  );
};

export default Navbar;
