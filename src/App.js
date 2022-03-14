import "./styles.css";
import { useState } from "react"

export default function App() {

 const [toggle, setToggle]= useState(false);
 const toggleColor =()=> { setToggle((e)=> !e)};
  return (
    <div className="App">
      <h1 style={toggle ? {color: "red"} : {color : "black"}}>Hello CodeSandbox</h1>
      <button onClick={()=> toggleColor()}> Button </button>
      <h2 style={ toggle ? {color: "black"} : {color : "red"}}>Start editing to see some magic happen!</h2>
    </div>
  );
}
