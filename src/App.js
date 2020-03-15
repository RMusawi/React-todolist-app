import React, { Component } from 'react';
import axios from 'axios';
import AddTask from './AddTask'
import TaskList from './TaskList'
import './App.css';

const API_URL = 'http://127.0.0.1:8000/api/tasks';


class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: []
    }

    this.deleteTask = this.deleteTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.createTask = this.createTask.bind(this);

  }
  


  componentDidMount() {
    axios.get(API_URL)
      .then((response) => {
        this.setState({tasks: response.data.tasks});
      });
  }

  deleteTask(taskId) {
    axios.post(`${API_URL}/delete`,{id: taskId})
      .then(() => {
        const tasks = this.state.tasks.filter((task) => task.id !== taskId);

        this.setState({tasks});
      })
  }

  completeTask(taskId) {
    axios.post(`${API_URL}/complete`,{id: taskId})
      .then(() => {
        const tasks = this.state.tasks.map((task) => {
          if (task.id === taskId) {
            task.completed = !task.completed; 
          }

          return task;
        });

        this.setState({tasks});
      })
  }

  createTask(content) {
    axios.post(API_URL,{content})
      .then((response) => {
        const tasks = this.state.tasks.concat([response.data.task]);

        this.setState({tasks});
      })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <AddTask createTask={this.createTask}/>
          <TaskList tasks={this.state.tasks}
            completeTask={this.completeTask}
            deleteTask={this.deleteTask}/>
        </div>
      </div>
    );
  }
}



export default App;
