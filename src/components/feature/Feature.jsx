
import './feature.css'


// eslint-disable-next-line react/prop-types
const Feature = ({title,text,description}) => {
  return (
    <div  className=' feature__container '>
      
      <div  >        
        <h2 className='head-text'>{title}</h2>
      </div>
     <div >
      <h3 className='p-text'>{text}</h3>
     <details>
      <summary className='button__details'>saber mas</summary>
      <p className='p-text'>{description}</p>
     </details>     
    </div>     
    </div>
  )
}

export default Feature
