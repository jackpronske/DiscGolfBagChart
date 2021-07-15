import React from "react";

class AddDiscForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      speed: 0,
      glide: 0,
      turn: 0,
      fade: 0,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { name, speed, glide, turn, fade } = this.state;
    const { addDisc } = this.props;
    const formObj = {
      name,
      speed: Number(speed),
      glide: Number(glide),
      turn: Number(turn),
      fade: Number(fade),
    };
    addDisc(formObj);
  }

  render() {
    const { name, speed, glide, turn, fade } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
          ></input>
        </label>
        <br />
        <label>
          Speed:
          <input
            type="text"
            name="speed"
            value={speed}
            onChange={this.handleInputChange}
          ></input>
        </label>
        <br />
        <label>
          Glide:
          <input
            type="text"
            name="glide"
            value={glide}
            onChange={this.handleInputChange}
          ></input>
        </label>
        <br />
        <label>
          Turn:
          <input
            type="text"
            name="turn"
            value={turn}
            onChange={this.handleInputChange}
          ></input>
        </label>
        <br />
        <label>
          Fade:
          <input
            type="text"
            name="fade"
            value={fade}
            onChange={this.handleInputChange}
          ></input>
        </label>
        <br />
        <input type="submit" value="ADD DISC"></input>
      </form>
    );
  }
}

export default AddDiscForm;
