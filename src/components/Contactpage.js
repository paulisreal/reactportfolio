import React from 'react'
import "./Contactpage.css";
function Contactpage() {
  return (
    <div className='contact-me'>
        <div>
         
        </div>
        <div>
            <input type="text"  placeholder='firstname'></input>
            <br/>
            <input type="text"  placeholder='mail'></input>
            <br/>
            <input type="text"  placeholder='subject'></input>
            <br/>
            <input type="text"  placeholder='write a message here...'></input>
            <br/>
            <button>download a file attachment</button>
            <br/>
            <button>send message</button>
        </div>
    </div>
  )
}

export default Contactpage