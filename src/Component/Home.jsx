import React from 'react'

function Home({heading, content}) {
  return (
    <div className="home">
    <h2>{heading}</h2>
    <p>{content}</p>
    {/*using props to display heading and content
    // heading="Welcome to the Home Page"}*/}
    
    
    </div>
  )
}

export default Home
