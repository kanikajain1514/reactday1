import React from 'react'
import { useState } from 'react';
import './Style.css';

function ContactForm() {

 
const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[message,setMessage]=useState("");

const handleSubmit=(e)=>{
  e.preventDefault();

  //required field validation
  if(name ==='' || email ==='' || message ===''){
    alert("Please fill in all fields");
    return;
  }

  //email format validation
  if (!email.includes('@')){
    alert("Please enter a valid email address");
    return;
  }

console.log("name:",name,"email:",email,"message:",message);

setName('');
setEmail('');
setMessage('');  
};


  return (
    <div  style={{textAlign:'center',marginTop:'50px',border:'1px solid black',padding:'20px' ,width:'300px',margin:'50px auto', height:'200px',lineHeight:'20px'}}>
      <h2>Contact Us</h2> 
      <form onSubmit={handleSubmit} className='contact-form'>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='Enter Your Name'
          required
          value={name}
           onChange={(e)=> setName(e.target.value)}
        />
        {name ==='' &&  <p className="error">*Name is required</p>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Enter Your Email'
          required
          value={email}
           onChange={(e)=> setEmail(e.target.value)}
        />
        
        {email ==="" && <p className="error">*Email is required</p>}
        
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder='Enter Your Message'
          required
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
        ></textarea>

        {message ==='' && <p className="error">*Message is required</p>}

        <button type="submit">Submit</button>
        </form>
        

          
      
    </div>
  ) 
}

export default ContactForm
