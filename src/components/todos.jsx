import React, { Component } from "react";
import TodoList from "./todolist";
import Todo from "./todo";

class Todos extends Component {
  state = { todos: [], todoToShow: "all", toogleAllComplete: true };

  addTodo = (todo) => {
    this.setState((state) => ({ todos: [todo, ...state.todos] }));
  };

  toogleComplete = (id) => {
    this.setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    }));
  };

  updateTodoToShow = (string) => {
    this.setState({
      todoToShow: string,
    });
  };

  handleDeleteTodo = (id) => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  };

  removeAllTodosThatAreCompleted = (id) => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => !todo.complete),
    }));
  };

  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter((todo) => todo.complete);
    }
    return (
      <React.Fragment>
        <div>
          <TodoList onSubmit={this.addTodo} />
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              toogleComplete={() => this.toogleComplete(todo.id)}
              todo={todo}
              onDelete={() => this.handleDeleteTodo(todo.id)}
            />
          ))}
        </div>
        <div className="todosLeft">
          todos left: {this.state.todos.filter((todo) => !todo.complete).length}
        </div>
        <div className="action">
          <button
            className="btn btn-warning btn-sm m-1"
            onClick={() => this.updateTodoToShow("all")}
          >
            All
          </button>
          <button
            className="btn btn-warning btn-sm m-1"
            onClick={() => this.updateTodoToShow("active")}
          >
            Active
          </button>
          <button
            className="btn btn-warning btn-sm m-1"
            onClick={() => this.updateTodoToShow("complete")}
          >
            Complete
          </button>
        </div>
        <div className="actionGlobal">
          {this.state.todos.some((todo) => todo.complete) ? (
            <button
              className="btn btn-danger btn-sm m-1"
              onClick={this.removeAllTodosThatAreCompleted}
            >
              Remove all complete todos
            </button>
          ) : null}
          <button
            className="btn btn-success btn-sm m-1"
            onClick={() =>
              this.setState((state) => ({
                todos: state.todos.map((todo) => ({
                  ...todo,
                  complete: state.toogleAllComplete,
                })),
                toogleAllComplete: !state.toogleAllComplete,
              }))
            }
          >
            Toogle all complete: {`${this.state.toogleAllComplete}`}
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Todos;
