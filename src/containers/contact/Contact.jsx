import './contact.css'
import { Social } from '../../components'

const Contact = () => {
  return (
    <section className='initial contact section__padding'id='contact'>
      <div className='contact__text initial'>
        <h2 className='head-text'>Contact <span className='span-text'>Me!</span></h2>
        <h4>Algun proyecto en mente?</h4>
        <p className='p__text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, hic nesciunt voluptatem iste nobis repellat?</p>
        <a href=""></a>
        <div>
          <li><a href="">email</a></li>
          <li><a href="">celular</a></li>           
        </div>
        <section className='contact__text-social'>
          <Social/>
        </section>
      </div>
    <div className='contact__form initial'>
          <form action="">
            <input type="text" placeholder='Tu nombre'required/>
            <input type="text" placeholder='Email'required/>
            <input type="text" placeholder='Numero Celular'required/>
            <textarea name="" id="" cols="35" rows="10" placeholder='Como te puedo apoyar'></textarea>
            <input className='submit' type="submit" value='ENVIA MENSAJE' required/>
          </form>
        </div>
    
    </section>
  )
}

export default Contact