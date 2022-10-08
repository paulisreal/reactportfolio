import React from 'react'
import './Socials.css';
import { SiFacebook} from 'react-icons/si';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter} from 'react-icons/bs';
import { FiLinkedin} from 'react-icons/fi';
import { AiOutlineGithub} from 'react-icons/ai';


function Socials() {
  return (

 <div className='icons'>
    <SiFacebook />
    <BsInstagram />
    <BsTwitter />
    <FiLinkedin />
    <AiOutlineGithub/>
</div> 
   
  )
}

export default Socials