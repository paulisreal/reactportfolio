import React from 'react'
import "./Contactpage.css";
import { MdOutlineAttachEmail } from 'react-icons/md';
import {BsPhone} from 'react-icons/bs';
import {HiLocationMarker} from 'react-icons/hi';
import {HiOutlineDownload} from 'react-icons/hi';
import { Link } from 'react-router-dom';
function Contactpage() {
  return (
  <div className='contact-me'>
     
        <div className='text-box'>
        <h2 className='contact'>Contact.</h2>
          <input type="text" className='box-sze' placeholder='firstname' ></input>
          <br/>
          <input type="text" className='box-sze' placeholder='username@mail'></input>
          <br/>
          <input type="text" className='box-sze' placeholder='subject'></input>
          <br/>
          <input type="text" className='text-box' placeholder='write a message here...'></input>
          <br/>
           
          <button className='btn'><HiOutlineDownload className='icon'/>download a file attachment</button>
          <br/>
          <button className='btn-szn'>send message</button>
        </div>
        <div className='info'>
          <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Iure nihil similique et perspiciatis, rem delectus dolores,<br/> ani
            Lorem ipsum dolor sit amet consectetur <br/>adipisicing elitsimilique eperspiciatis,<br/> rem delectus dolores, ani</li>
        <li><HiLocationMarker className='icon'/>Accra</li>
        <li><BsPhone className='icon'/><a href="call">+233541014239</a></li>
        <li ><MdOutlineAttachEmail className='icon'/><Link to="https://www.paulisreal@gmail.com">paulisrael965@gmail.com</Link></li>
        </ul>
        </div>
      
        
     
  </div>
  )
}

export default Contactpage