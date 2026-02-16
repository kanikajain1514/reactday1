import React,{useState} from 'react'

function Header({appName, menuItems}) {     //using props
  const [count,setcount]=useState(0);
  
  return (
    <header>
        
        <nav>
          <div className="logo">
          <h1 onClick={()=> {setcount(count+1)}}  >{appName}{count}</h1>
          </div>
          <ul>
            {menuItems.map((item,index)=>(       //mapping through menuItems array to create list items
              <li key={index}>{item}</li>
            ))}
            </ul>
          </nav>
      
    </header>
  )
}

export default Header
