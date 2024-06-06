import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='Contact'>
      <div className='up'>
        <div className='upinside'>
          
            <input type='text' className='text' placeholder='Full name'></input>
            <input type='text' className='text' placeholder='Email'></input>
            <input type='textarea' className='text' placeholder='Subject'></input>
            <button className='button'>Contact Me</button>
        </div>
      </div>
      <div className='down'> 
          <div className='downinside'>
             <h1>GET IN TOUCH</h1>
             <h2>Hey!We are looking forward to start a project with you!</h2>
             <p>I'm excited about the opportunity to be considered me in a junior web developer role,it would make me a great fit. Please reach out to me if you need any additional information. I look forward to finding out more about the opportunity.</p>
          </div>
          <div className='side'>
            <h4>Call Us:</h4>
            <p>9876543210</p> 
            <h4>Email Us:</h4>
            <p>anuskpk1208@mail.com</p>
            <h4>Location:</h4>
            <p> Palani,Dindigul,Coimbatore</p>
          </div>
      </div>
    
    </div>
  )
}

export default Contact