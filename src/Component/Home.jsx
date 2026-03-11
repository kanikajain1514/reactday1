import React from 'react'
import Counter from './Counter'
import Userlist from './Userlist'
import ContactForm from './ContactForm'
import Api from '../Api'
import Footer from './Footer'
import Imageapi from './Imageapi'
import './Style.css'
import Header from './Header'



function Home({heading, content}) {
  return (
    <div className="home">
    <h2>{heading}</h2>
    <p>{content}</p>


                                             
    
    <Counter />


    <Userlist />

    <ContactForm />

    <Api />

     <Imageapi /> 

    {/* <Footer /> */}

    {/*using props to display heading and content
    // heading="Welcome to the Home Page"}*/}

    
    
    </div>
  )
}

export default Home
