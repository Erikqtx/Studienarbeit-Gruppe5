import React from "react";
import "../css/Button.css";
import ReactDOM from "react-dom";
import PoliceKillings2015Provider from "./../police-killings-context/police-killings-context-2015";
import PoliceKillings2016Provider from "./../police-killings-context/police-killings-context-2016";
import USAChart2015 from "./../charts/USAChart2015";
import USAChart2016 from "./../charts/USAChart2016";
import RaceChart2015 from "./../charts/RaceUSAChart2015";
import RaceChart2016 from "./../charts/RaceUSAChart2016";
import Map2015 from "../Map/Map2015";
import Map2016 from "../Map/Map2016";
class ChartControl extends React.Component {
  constructor(props) {
    super(props);
    //Binding to make 'this' work in the Callback
    this.handleChartClick = this.handleChartClick.bind(this);
    this.handleSecChartClick = this.handleSecChartClick.bind(this);
    this.state = { isThere: false };
  }

  handleChartClick() {
    this.setState({ isThere: true });
  }

  handleSecChartClick() {
    this.setState({ isThere: false });
  }
  //Check actual 'this' state and handle the clicks
  render() {
    const isThere = this.state.isThere;
    let button;

    if (isThere) {
      button = <SecChartBtn onClick={this.handleSecChartClick} />;
    } else {
      button = <ChartBtn onClick={this.handleChartClick} />;
    }

    return (
      <div>
        <Buttoncountry isThere={isThere} />
        {button}
      </div>
    );
  }
}

function Button2015(props) {
  //Return 2015
  return (
    <PoliceKillings2015Provider>
      <USAChart2015 />
      <RaceChart2015></RaceChart2015>
      <div className="legend">
        <p className="leg one"> ■ 0-5 Tode </p>
        <p className="leg two"> ■ 5-10 Tode </p>
        <p className="leg three"> ■ 10-20 Tode </p>
        <p className="leg four"> ■ 20-40 Tode </p>
        <p className="leg five"> ■ 40-100 Tode </p>
        <p className="leg six"> ■ 100-250 Tode </p>
      </div>
      <Map2015 />
    </PoliceKillings2015Provider>
  );
}

function Button2016(props) {
  //Return 2016
  return (
    <PoliceKillings2016Provider>
      <USAChart2016 />
      <RaceChart2016></RaceChart2016>
      <div className="legend">
        <p className="leg one"> ■ 0-5 Tode </p>
        <p className="leg two"> ■ 5-10 Tode </p>
        <p className="leg three"> ■ 10-20 Tode </p>
        <p className="leg four"> ■ 20-40 Tode </p>
        <p className="leg five"> ■ 40-100 Tode </p>
        <p className="leg six"> ■ 100-250 Tode </p>
      </div>
      <Map2016 />
    </PoliceKillings2016Provider>
  );
}

//Check if isThere to change the ButtonFunction
function Buttoncountry(props) {
  const isThere = props.isThere;
  if (isThere) {
    return <Button2015 />;
  }
  return <Button2016 />;
}

//Actual Button
function ChartBtn(props) {
  return (
    <button className="year" onClick={props.onClick}>
      2015
    </button>
  );
}
//Actual Button
function SecChartBtn(props) {
  return (
    <button className="year" onClick={props.onClick}>
      2016
    </button>
  );
}
//render in Document
ReactDOM.render(<ChartControl />, document.getElementById("root"));

export default ChartControl;
