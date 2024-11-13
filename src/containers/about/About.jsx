import {ABOUT} from '../../constants/data';
import './about.css'
import ScrollReveal from 'scrollreveal'

const About = () => {
  ScrollReveal().reveal('.about', {    
    delay: 1075,
    duration: 4000,
    interval:100,
    opacity:0.8,   
});

  ScrollReveal().reveal('.about__img, .about__content',
  {origin:'top'})
  
  return (
    <section className='about initial section__padding flex__center ' id='Sobre mi' >      
      <div className=' about__img flex__center initial'>      
        <img 
        src={ABOUT.photo}
        width={300}
        height={300}
        alt="photo2" 
        />
      </div>
    <div className='about__content initial'>
      <div className ='about__content-item' >      
     
        <h2 className='head-text'>{ABOUT.tag}<span className='span-text'>Mi</span></h2>
        <h3>{ABOUT.title}</h3>
        <h6 className='p-text'>{ABOUT.description}</h6>          
      </div>
          
    </div>  
        
  </section>
  )
}

export default About