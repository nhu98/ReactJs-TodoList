import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {taskName:"",
                  tasks:["di cho", "di xem phim"]              
    };
  }

  myTaskChangeHandler = (event) => {
    this.setState({taskName: event.target.value});
    console.log("myTaskChangeHandler", event.target.value);
  }
  addTask = () => {
    console.log("addTask", this.state.taskName);
    this.setState({taskName:""});
    this.state.tasks.push(this.state.taskName)
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div>
              Todo List
          </div>
          <div className="aligned">
              <img src="./assets/2561291_plus_circle_icon.png"
                alt ="add Task"
                width = "25"
                style ={{cursor:"pointer"}}
                title = "click to add task"
                onClick={() => this.addTask()}
              />
              <input type="text"
                onChange={this.myTaskChangeHandler}
                value={this.state.taskName}
              />
            </div>
            <div>
              <ul>
                {this.state.tasks.map((value,index)=>{
                    return <li key={index}>{value}</li>
                })}
              </ul>
            </div>
        </header>
      </div>
    );
  }
}

export default App;
