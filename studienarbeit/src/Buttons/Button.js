import React from "react";
import "../css/Button.css";


function Button() {
  
   function Country(){
     console.log("Country")
   }

   function State(){
    console.log("State")
  }

  function year2015(){
    console.log("chartof2015")
  }

  function year2016(){
    console.log("chartof2016")
  }

  return (
    <div className="parentbox">
        <button data-testid="country" className ="country" onClick = {Country}>Country</button>
        <button data-testid="state" className ="state" onClick = {State}>State</button>
        <div/>
        <button data-testid="year1" className ="year1" onClick = {year2015}>2015</button>
        <button data-testid="year2" className ="year2" onClick = {year2016}>2016</button>
    </div>
  );
}

export default Button;