import React from "react";
import "./style.css";
import Header from "./Header.js"
import useState from "react"
export default function App() {
  const [style,setStyle]=useState({
    color:"red"
  });
  const colorHand=()=>{
    setStyle({
      color:"blue"
    })
  }
  return (
    <div>
      <Header name={"we  got"}/>
      <h1  styles={style} onClick={colorHand}>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <br/>
      {
         
      }
      
    </div>
  );
}
