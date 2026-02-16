import React from 'react'
import Counter from './Counter'

function Home({heading, content}) {
  return (
    <div className="home">
    <h2>{heading}</h2>
    <p>{content}</p>
    <Counter />
    
    {/*using props to display heading and content
    // heading="Welcome to the Home Page"}*/}
    
    
    </div>
  )
}

export default Home
