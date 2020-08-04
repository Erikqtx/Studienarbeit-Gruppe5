import React, { useState, render } from "react";
import ReactDOM from "react-dom";
import "../css/App.css";
import { Button, ButtonGroup } from "reactstrap";
import PoliceKillings2015Provider from "./../police-killings-context/police-killings-context-2015";
import PoliceKillings2016Provider from "./../police-killings-context/police-killings-context-2016";
import USAChart2015 from "./../charts/USAChart2015";
import USAChart2016 from "./../charts/USAChart2016";
import Map2015 from "../Map/Map2015";
import Map2016 from "../Map/Map2016";
import AlabamaChart2015 from "../charts/2015/Alabama";
import AlabamaChart2016 from "../charts/2016/Alabama";
import AlaskaChart2015 from "../charts/2015/Alabama";
import AlaskaChart2016 from "../charts/2016/Alabama";
import ArizonaChart2015 from "../charts/2015/Arizona";
import ArizonaChart2016 from "../charts/2016/Arizona";
import ArkansasChart2015 from "../charts/2015/Arkansas";
import ArkansasChart2016 from "../charts/2016/Arkansas";
import CaliforniaChart2015 from "../charts/2015/California";
import CaliforniaChart2016 from "../charts/2016/California";
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Buttoncountry isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function Button2015(props) {
  return (
    <PoliceKillings2015Provider>
      <AlaskaChart2015 />
    </PoliceKillings2015Provider>
  );
}

function Button2016(props) {
  return (
    <PoliceKillings2016Provider>
      <AlaskaChart2016 />
    </PoliceKillings2016Provider>
  );
}

function Buttoncountry(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <Button2015 />;
  }
  return <Button2016 />;
}

function LoginButton(props) {
  return <button onClick={props.onClick}>States 2015</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>States 2016</button>;
}

ReactDOM.render(<LoginControl />, document.getElementById("root"));

export default LoginControl;
