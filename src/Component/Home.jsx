import React from 'react'
import Counter from './Counter'
import Userlist from './Userlist'
import ContactForm from './ContactForm'
import Api from '../Api'
import Footer from './Footer'

function Home({heading, content}) {
  return (
    <div className="home">
    <h2>{heading}</h2>
    <p>{content}</p>
    <Counter />


    <Userlist />

    <ContactForm />

    <Api />

    {/* <Footer /> */}

    {/*using props to display heading and content
    // heading="Welcome to the Home Page"}*/}

    
    
    </div>
  )
}

export default Home
