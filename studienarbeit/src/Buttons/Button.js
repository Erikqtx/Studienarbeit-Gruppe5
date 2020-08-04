import React, { useState, render } from "react";
import "../css/Button.css";
import ReactDOM from "react-dom";
import { Button, ButtonGroup } from "reactstrap";
import PoliceKillings2015Provider from "./../police-killings-context/police-killings-context-2015";
import PoliceKillings2016Provider from "./../police-killings-context/police-killings-context-2016";
import USAChart2015 from "./../charts/USAChart2015";
import USAChart2016 from "./../charts/USAChart2016";
import Map2015 from "../Map/Map2015";
import Map2016 from "../Map/Map2016";
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
      <USAChart2015 />
      <Map2015></Map2015>
    </PoliceKillings2015Provider>
  );
}

function Button2016(props) {
  return (
    <PoliceKillings2016Provider>
      <USAChart2016 />
      <Map2016></Map2016>
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
  return <button onClick={props.onClick}>2015</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>2016</button>;
}

ReactDOM.render(<LoginControl />, document.getElementById("root"));

export default LoginControl;
