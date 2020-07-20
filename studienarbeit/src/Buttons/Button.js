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
    <div>
      <div class="button-box1">
        <button class ="country" onClick = {Country}>Country</button>
        <button class ="state" onClick = {State}>State</button>
      </div>


      <div class = "button-box2">
        <button class ="year1" onClick = {year2015}>2015</button>
        <button class ="year2" onClick = {year2016}>2016</button>
      </div>
    </div>
  );
}

export default Button;