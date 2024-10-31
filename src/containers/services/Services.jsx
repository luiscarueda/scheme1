import './services.css'
import { Feature } from '../../components';
import { SERVICES_CONTENT} from '../../constants/data';

const Services = () => {
  return (
    <section className='initial services flex__center ' id='Servicios'>
      <h2 className='services__heading head-text'>Mis <span className='span-text'>SERVICIOS</span></h2>
       <div className='services__container head-text section__padding flex__center '>
        {SERVICES_CONTENT.map((item,index) =>(
          <Feature  title={item.title} 
                    text={item.text} 
                    description={item.description} 
                    key={item.title + index}/>
      ))}      
   </div>  
  </section>   
  )
}

export default Services