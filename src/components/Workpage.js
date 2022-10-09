import React from 'react'
import './Workpage.css';

function Workpage() {
  return (
    <div>
      <h2 className='work1'>Work.</h2>
      <div className='all-card'> 
    
        <div className='card1'>
          
          <img className='cardpic' src={process.env.PUBLIC_URL + '/matebook.png'} alt="logo" />
          <h2 className='project-name'>PROJECT NAME</h2>
          {/* <p className='project-about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nihil similique et perspiciatis, rem delectus dolores</p> */}
          <button className='view-btn'>view</button>
        </div>
        <div className='card1'>
          <img className='cardpic' src={process.env.PUBLIC_URL + '/matebook.png'} alt="logo" />
          <h2 className='project-name'>PROJECT NAME</h2>
          {/* <p className='project-about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nihil similique et perspiciatis, rem delectus dolores</p> */}
          <button className='view-btn'>view</button>
        </div>
        <div className='card1'>
          <img className='cardpic' src={process.env.PUBLIC_URL + '/matebook.png'} alt="logo" />
          <h2 className='project-name'>PROJECT NAME</h2>
          {/* <p className='project-about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nihil similique et perspiciatis, rem delectus dolores</p> */}
          <button className='view-btn'>view</button>
        </div>
       
       
      </div>
    </div>
  )
}

export default Workpage