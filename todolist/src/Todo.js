import "./Todo.css";
import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    // console.log("props of chill: ", props);
    this.state = { id: props.id, name: props.value, done: props.done };
    console.log("props of chill: ", this.state.done);
  }

  completeTask = () => {
    console.log("Todo completete task id: ", this.state.id);
    this.setState({ done: true });
    console.log("Todo parent: ", this.props.id);
    this.props.completeTask(this.props.id);
  };

  render() {
    let checkDone = "";
    if (!this.state.done) {
      checkDone = (
        <img
          src="./assets/2561353_check_circle_icon.png"
          alt="Finish Task"
          width="25"
          style={{ cursor: "pointer" }}
          title="click to finish task"
          onClick={() => this.completeTask(this.props.id)}
        />
      );
    } else if (this.state.done) {
      checkDone = (
        <img
          className="hiddenIcoin"
          src="./assets/2561353_check_circle_icon.png"
          alt="Finish Task"
          width="25"
          style={{ cursor: "pointer" }}
          title="click to finish task"
          onClick={() => this.completeTask(this.props.id)}
        />
      );
    }
    return (
      <div className="App">
        <div className="Aligned">
          {checkDone}
          <img
            src="./assets/2849797_trash_basket_multimedia_icon.png"
            alt="Delete Task"
            width="25"
            style={{ cursor: "pointer" }}
            title="click to delete task"
            onClick={() => this.props.deleteTask(this.props.id)}
          />
          {/* todo
           phan tu done= false trong ds van con dinh' gach ngang*/}
          <span className={this.state.done ? "done" : ""}>
            {this.props.value}
          </span>
        </div>
      </div>
    );
  }
}

export default Todo;
