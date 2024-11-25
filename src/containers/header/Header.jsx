import './header.css'

import { HEADER } from '../../constants/data';
import { ReactTyped } from "react-typed";

const Header = () => { 
  
  return (
    <section className='header initial flex__center' id='home'>
      <div className='header__content initial'>       
      
      <div className='head__text'>
        <h3 >{HEADER.title}</h3>
        <h1>{HEADER.tag}</h1>
        <h3 className='head__text'>y soy un <span ></span></h3>
        <ReactTyped className ='span__text'strings={['CONSULTOR' ,'SPEAKER','YOUTUBER']}       
        typeSpeed={100}
        backSpeed={100}
        backDelay={1000}
        loop={true}                   
        />       
        <p className='p__text'>{HEADER.description}</p>
        </div>
                
      </div>

    <div className='header__photo initial'>
        <img src={HEADER.photo}  
         width = {300}
         height={250}          
         alt="photo1" 
         />
    </div>            

    </section>
  )
}

export default Header