import React,{useState} from 'react'

function Counter() {
    const[count, setcount]=useState(0);
  return (
    <div className='counter-container'>
        <p className='message'>You Clicked {count} times</p>
        <button className='btn' onClick={()=>{setcount(count+1)}} >Click Me Increment</button>
        <button disabled={count <= 0}  className='btn' onClick={()=>{setcount(count-1)}} > Click Me Decrement</button>
        <button className='btn' onClick={()=>{setcount(0)}} > Restart</button>

        {count === 0 ? <p>Counter is empty</p> : <p>Counter is active</p>}
        

        {/* if(count === 0){
            <p>Counter is empty</p>
        }else{
            <p>Counter is active</p>
        } */}
    </div>
  )
}

export default Counter
