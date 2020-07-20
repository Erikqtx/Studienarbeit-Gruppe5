import React from "react";
import "../css/Button.css";

function Button() {
  return (
    <div>
      <div class="button-box1" id="cs">
        <input type="radio" name="us" id="country" checked hidden />
        <label for="country">Country</label>
        <input type="radio" name="us" id="state" hidden />
        <label for="state">State</label>
      </div>

      <div class="button-box2">
        <input type="radio" name="year" id="year1" checked hidden />
        <label for="year1">2015</label>
        <input type="radio" name="year" id="year2" hidden />
        <label for="year2">2016</label>
      </div>
    </div>
  );
}

export default Button;
