import React from 'react'
import './Workpage.css';

function Workpage() {
  return (
    <div className='all-card'>
         <div className='card1'>
        <img className='cardpic' src={process.env.PUBLIC_URL + '/matebook.png'} alt="logo" />
        <p className='project-about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nihil similique et perspiciatis, rem delectus dolores, ani</p>
        <button className='view-btn'>view</button>
        </div>
        <div className='card1'>
        <img className='cardpic' src={process.env.PUBLIC_URL + '/matebook.png'} alt="logo" />
        <p className='project-about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nihil similique et perspiciatis, rem delectus dolores, ani</p>
        <button className='view-btn'>view</button>
        </div>
        <div className='card1'>
        <img className='cardpic' src={process.env.PUBLIC_URL + '/matebook.png'} alt="logo" />
        <p className='project-about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nihil similique et perspiciatis, rem delectus dolores, ani</p>
        <button className='view-btn'>view</button>
        </div>
        
    </div>
   
  )
}

export default Workpage