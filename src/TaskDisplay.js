import React from 'react';

const TaskDisplay = ({tasks, deleteHandler}) => {
    return (
      tasks.map((task)=>{
        return (
            <div style={{marginLeft:"24rem", marginRight:"24rem", marginTop:"2.2rem"}}>
                <div key={task.id} className="box">
                    <div className="level" style={{height: "0.5rem"}}>
                        <div className="level-left">
                            <p className="title" style={{fontSize:"20px", heigh:"0.2rem", fontFamily: "Oswald"}}>{task.todo }</p>
                        </div>
                        <div className="level-right">
                            <button className="button is-danger" style={{ backgroundColor: "#ef9e9f", float:"right", width:"5rem", fontFamily: "Oswald"}} onClick={()=>deleteHandler(task.id)}>삭제</button>
                        </div>
                    </div>
                </div>
            </div> 
        )
      })
    )
  }


  export default TaskDisplay;