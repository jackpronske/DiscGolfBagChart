import React, { Component } from "react";
import FlightChart from "./FlightChart.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h2>Flight Chart</h2>
        <FlightChart />
      </>
    );
  }
}

export default App;
