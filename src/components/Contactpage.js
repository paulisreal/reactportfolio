import React from 'react'
import "./Contactpage.css";
function Contactpage() {
  return (
    <div className='contact-me'>
      
          <div className='text-box'>
          <input type="text" className='box-sze' placeholder='firstname' ></input>
          <br/>
          <input type="text" className='box-sze' placeholder='mail'></input>
          <br/>
          <input type="text" className='box-sze' placeholder='subject'></input>
          <br/>
          <input type="text" className='text-box' placeholder='write a message here...'></input>
          <br/>
           
          <button className='btn-szn'>download a file attachment</button>
          <br/>
          <button className='btn-szn'>send message</button>

          <div>
            
          </div>
      
          </div>
        
      
        
     
    </div>
  )
}

export default Contactpage