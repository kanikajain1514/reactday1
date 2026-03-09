import React from 'react'
import { useState } from 'react';
 
function Userlist() {

  const [input,setInput]=useState("");
  const [task,setTask]=useState([]);


  //add task
  const addTask=()=>{
    if(input ===''){
      alert("Please enter a user name");
      return;
    }

    //clear input field after adding task
    setTask([...task,input]);
    setInput("");
  };

  //delete task
  const deleteTask=(index)=>{
    const updated=task.filter((_,i)=> i !== index);
    setTask(updated);
  }


  return (
    <div style={{textAlign:'center',marginTop:'50px',border:'1px solid black',padding:'20px' ,width:'400px',margin:'60px auto'}}>
      <h1>User List</h1>
          
          <input
          type='text'
          placeholder='Enter User Name'
          required
          value={input}
          onChange={(e)=> setInput(e.target.value)}
          />

          <button onClick={addTask}>Add User</button>
           <ul>
            {task.map((task,index)=>(
              <li key={index}>
                {task} <button onClick={()=>deleteTask(index)}>Delete</button>
              </li>
            ))} 
           </ul>
      
    </div>
  )
}

export default Userlist
