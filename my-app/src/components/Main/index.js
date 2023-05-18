import React from "react";
import './index.css';


const Main = (props) => {
  return (
  <main className={props.darkTheme ? "dark" : ""}>
   
      <h1 className="main-title">Fun facts about React</h1>
      <ul className="main-list">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
  
    </main>
   
  );
};

export default Main;
