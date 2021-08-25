import "./TodoList.css";
import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoListName: props.name, taskName: "", tasks: [] };
  }

  myTaskChangeHandler = (event) => {
    this.setState({ taskName: event.target.value });
    // console.log("myTaskChangeHandler", event.target.value);
  };
  addTask = () => {
    console.log("addTask", this.state.taskName);
    if (this.state.taskName === "") {
      return;
    }
    const id = this.state.tasks.length;
    const name = this.state.taskName;
    this.state.tasks.push({ id, name, done: false });
    this.setState({ taskName: "" });
  };

  deleteTask = (id) => {
    // console.log("list task", this.state.tasks);
    // console.log("delete task id: ", id);
    const tasksFilter = this.state.tasks.filter((task) => task.id !== id);
    console.log("List task after filter :", tasksFilter);
    this.setState({ tasks: tasksFilter });
  };

  completeTask = (id) => {
    console.log("Complete Task had id :", id);
    const taskList = this.state.tasks;
    taskList.forEach((task) => {
      if (task.id === id) {
        task.done = true;
      }
    });
    console.log("Tasks wanna to complete: ", taskList);
    this.setState({ tasks: taskList });
  };

  render() {
    return (
      <div className="TodoList">
        <header className="TodoList-header">
          <div>{this.state.todoListName}</div>
          <div className="aligned">
            <img
              src="./assets/2561291_plus_circle_icon.png"
              alt="add Task"
              width="25"
              style={{ cursor: "pointer" }}
              title="click to add task"
              onClick={() => this.addTask()}
            />
            <input
              type="text"
              onChange={this.myTaskChangeHandler}
              value={this.state.taskName}
            />
          </div>
          <div>
            <ul>
              {this.state.tasks.map((value, index) => {
                // return <li key={index}>{value}</li>
                console.log("map", value);
                return (
                  <Todo
                    key={index}
                    id={value.id}
                    value={value.name}
                    done={value.done}
                    deleteTask={this.deleteTask}
                    completeTask={this.completeTask}
                  />
                );
              })}
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default TodoList;
