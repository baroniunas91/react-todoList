import React, { Component } from "react";
import shortid from "shortid";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      list: [],
      id: 0,
    };
  }

  changeUserInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      userInput: this.state.userInput,
      complete: false,
    });
    this.setState({
      userInput: "",
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="title">Your todo list</h1>
        <form className="inputForm" onSubmit={this.handleSubmit}>
          <input
            name="userInput"
            value={this.state.userInput}
            onChange={this.changeUserInput}
            placeholder="What do you need to do?"
          ></input>
          <button
            className="btn btn-primary btn-sm"
            onClick={this.handleSubmit}
            type="submit"
          >
            Add
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default TodoList;
