import React from "react";
import "./index.css";
import Logo from '../../Assets/Images/Logo.png';



const Navbar = (props) => {
  return (
    <>
    <nav className={props.darkTheme ? "dark":""} >
     
      <img src={Logo} alt="icon" className="react-logo" />
            <h3 className="nav-icon-text">ReactFacts</h3>
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkTheme}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
    
      </nav>
    </>
  );
};

export default Navbar;
