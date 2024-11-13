import './services.css'
import { Feature } from '../../components';
import { SERVICES} from '../../constants/data';

const Services = () => {
  return (
    <section className='initial services flex__center ' id='services'>
      <h2 className='services__heading head-text'>Mis <span className='span-text'>SERVICIOS</span></h2>
       <div className='services__container head-text section__padding flex__center '>
        {SERVICES.map((item,index) =>(
          <Feature  title={item.title} 
                    text={item.tag} 
                    description={item.description} 
                    key={index}/>
      ))}      
   </div>  
  </section>   
  )
}

export default Services