import React, { Component } from 'react';
import './App.css';
import TaskAdd from './TaskAdd';
import TaskDisplay from './TaskDisplay';

import { firestore } from "./Firebase";

class App extends Component {
  state={
    tasks:[
    ],
    task:''
  }

  componentDidMount(){
    const tasks = [...this.state.tasks]
    firestore.collection('tasks').get()
      .then(docs=>{
        docs.forEach(doc=>{
          tasks.push({ todo:doc.data().todo, id:doc.id})
        })
        this.setState({tasks})
      })    
  }

  onClickHandler = (e) => {
    e.preventDefault();
    firestore.collection('tasks').add({todo:this.state.task})
      .then(r=>{
        const tasks = [...this.state.tasks, {todo:this.state.task, id:r.id}];
        this.setState({
          tasks,
          task:''
        })
      })
  }

  onChangeHandler = (e) => {
    this.setState({
      task:e.target.value
    })
  }

  deleteHandler = (id) => {
    firestore.collection('tasks').doc(id).delete()
      .then(()=>{
        const tasks = this.state.tasks.filter((task) => task.id!==id)
        this.setState({tasks});
      })
  }

  render(){
    return (
      
      <div>
        <div>
          <text style={{display:"flex", justifyContent:"center", fontSize:"45px", marginTop:"6.5rem", fontFamily: "Oswald"}}> To Do List</text>
        </div>
        <div className="container">
          <TaskAdd
            value={this.state.task} 
            changeHandler={this.onChangeHandler}
            clickHandler={this.onClickHandler}
          />
          <div>
            {/* 할일출력부분 */}
            <TaskDisplay
              tasks={this.state.tasks}
              deleteHandler={this.deleteHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
