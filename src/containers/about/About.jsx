import { photo2 } from '../../assets';
import { ABOUT_CONTENT} from '../../constants/data';
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
        src={photo2}
        width={300}
        height={300}
        alt="photo2" 
        />
      </div>
    <div className='about__content initial'>
      {ABOUT_CONTENT.map((item ) =>
      (<div className ='about__content-item'key={item} >
        <h2 className='head-text'>{item.title}<span className='span-text'>Mi</span></h2>
        <h3>{item.name}</h3>
        <h6 className='p-text'>{item.description}</h6>
            
        </div>
      ))}     
    </div>  
        
  </section>
  )
}

export default About