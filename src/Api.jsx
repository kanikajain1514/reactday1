import React,{useState,useEffect} from 'react'
import axios from "axios"

function Api() {

    const [users,setusers]=useState([])

    const getusers = async()=>{
        const response =await axios.get("https://jsonplaceholder.typicode.com/users")
        setusers(response.data)
    }
    useEffect(()=>{
        getusers()
    },[])

  return (
    <div>
        <h2>Users List</h2>
         <ul>
            {users.map((user)=>(
                <li key={user.id}>{user.name}</li>
            ))}
         </ul>
    </div>
  )
}

export default Api
