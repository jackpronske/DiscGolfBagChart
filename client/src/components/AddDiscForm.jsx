import React from "react";

class AddDiscForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      speed: "",
      glide: "",
      turn: "",
      fade: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const discObj = {
      name: this.state.name,
      speed: [
        Number(this.state.speed),
        Number(this.state.glide),
        Number(this.state.turn),
        Number(this.state.fade),
      ],
    };

    this.props.addDisc(discObj);
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          ></input>
        </label>
        <br />
        <label>
          Speed:
          <input
            type="text"
            name="speed"
            value={this.state.speed}
            onChange={this.handleInputChange}
          ></input>
        </label>
        <br />
        <label>
          Glide:
          <input
            type="text"
            name="glide"
            value={this.state.glide}
            onChange={this.handleInputChange}
          ></input>
        </label>
        <br />
        <label>
          Turn:
          <input
            type="text"
            name="turn"
            value={this.state.turn}
            onChange={this.handleInputChange}
          ></input>
        </label>
        <br />
        <label>
          Fade:
          <input
            type="text"
            name="fade"
            value={this.state.fade}
            onChange={this.handleInputChange}
          ></input>
        </label>
        <br />
        <input type="submit"></input>
      </form>
    );
  }
}

export default AddDiscForm;
