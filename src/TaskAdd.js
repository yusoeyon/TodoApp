import React from 'react';

const TaskAdd = ({value, changeHandler, clickHandler}) => {
    return (
        <div style={{marginLeft:"28rem", marginRight:"28rem", paddingTop: "3rem", marginBottom:"3.5rem"}}>            
            <form className="field has-addons">
            {/* 할일입력부분 */}
              <div className="control is-expanded">
                <input className="input" value={value} onChange={changeHandler}></input>
              </div>
              <div className="control">
                <button className="button is-primary" style={{ backgroundColor: "#FFC37A"}} onClick={clickHandler}>저장</button>
              </div>
            </form>
        </div>

    )
  }

  export default TaskAdd;