import './header.css'
import { photo1 } from '../../assets';
import { HEADER_CONTENT } from '../../constants/data';
import { ReactTyped } from "react-typed";

const Header = () => { 
  
  return (
    <section className='header initial flex__center' id='Inicio'>
      <div className='header__content initial'>       
      {HEADER_CONTENT.map((item ) =>
      (<div className='head-text'key={item}>
        <h3 >{item.title}</h3>
        <h1>{item.name}</h1>
        <h3 className='head-text'>y soy un <span ></span></h3>
        <ReactTyped className ='span-text'strings={['CONSULTOR' ,'SPEAKER','YOUTUBER']}       
        typeSpeed={100}
        backSpeed={100}
        backDelay={1000}
        loop={true}                   
        />       
        <p className='p-text'>{item.description}</p>
        </div>
      ))}             
      </div>

    <div className='header__photo initial'>
        <img src={photo1}  
         width = {300}
         height={250}          
         alt="photo1" 
         />
    </div>            

    </section>
  )
}

export default Header