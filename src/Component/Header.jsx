import React from 'react'

function Header({appName, menuItems}) {     //using props
  return (
    <header>
        <h1>{appName}</h1>
        <nav>
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
