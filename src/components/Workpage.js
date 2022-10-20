import React from 'react'
import './Workpage.css';

function Workpage() {
  return (
    // <div>
    //   <h2 className='work1'>Work.</h2>
    //   <div className='all-card'> 
    
    //     <div className='card1'>
          
    //       <img className='cardpic' src={process.env.PUBLIC_URL + '/matebook.png'} alt="logo" />
    //       <h2 className='project-name'>PROJECT NAME</h2>
    //       {/* <p className='project-about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nihil similique et perspiciatis, rem delectus dolores</p> */}
    //       <button className='view-btn'>view</button>
    //     </div>
    //     <div className='card1'>
    //       <img className='cardpic' src={process.env.PUBLIC_URL + '/matebook.png'} alt="logo" />
    //       <h2 className='project-name'>PROJECT NAME</h2>
    //       {/* <p className='project-about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nihil similique et perspiciatis, rem delectus dolores</p> */}
    //       <button className='view-btn'>view</button>
    //     </div>
    //     <div className='card1'>
    //       <img className='cardpic' src={process.env.PUBLIC_URL + '/matebook.png'} alt="logo" />
    //       <h2 className='project-name'>PROJECT NAME</h2>
    //       {/* <p className='project-about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nihil similique et perspiciatis, rem delectus dolores</p> */}
    //       <button className='view-btn'>view</button>
    //     </div>
       
       
    //   </div>
    // </div>
    <div className='carrousel'>
      <article className='card'>
        <h1>PROJECT 1</h1>
        </article>
      <article className='card'>
        <h1>PROJECT 2</h1>
      </article>
      <article className='card'>
        <h1>PROJECT 3</h1>
      </article>
      <article className='card'>
        <h1>PROJECT 4</h1>
      </article>
      <article className='card'>
        <h1>PROJECT 5</h1>
      </article>
      <article className='card'>
        <h1>PROJECT 6</h1>
      </article>
    </div>
  )
}

export default Workpage