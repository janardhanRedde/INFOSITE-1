import React ,{useState}from "react";
import "./styles/index.css";
import Navbar from "./components/navbar/index";
import Main from "./components/Main";

function App() {
  const [darkTheme,setDarkTheme] = useState(true)

  const toggleDarkTheme=()=>{
setDarkTheme(prevTheme => !prevTheme)
  }
  return (
    <div>
      <Navbar  darkTheme= {darkTheme}
      toggleDarkTheme={toggleDarkTheme}/>
      <Main darkTheme={darkTheme}/>
    </div>
  );
}

export default App;
