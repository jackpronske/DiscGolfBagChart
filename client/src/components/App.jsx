import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";
import FlightChart from "./FlightChart.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBag: [
        { id: 1, name: "Pure", speed: [3, 3, -1, 1] },
        { id: 2, name: "Maverick", speed: [7, 5, -1.5, 2] },
        { id: 3, name: "Explorer", speed: [7, 5, 0, 2] },
      ],
    };
    this.retieveDiscs = this.retieveDiscs.bind(this);
  }

  componentDidMount() {
    this.retieveDiscs();
  }

  retieveDiscs() {
    axios("http://localhost:3000/discs")
      .then((data) => {
        this.setState({
          currentBag: data.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { currentBag } = this.state;
    return (
      <>
        <FlightChart currentBag={currentBag} />
      </>
    );
  }
}

export default App;
