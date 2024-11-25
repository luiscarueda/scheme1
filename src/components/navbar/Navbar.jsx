import { NAVLINKS } from '../../constants/data'
import './navbar.css'

const Navbar = () => {
  return (
    <section className="initial navbar">           
        <h2 className='navbar__logo span__text'>PORTAFOLIO</h2>
        <i className='bx bx-menu' id='menu-icon'></i>
        <ul className="navbar__links">
        {NAVLINKS.map((item)=>(
                <li key={item.label}>
                <a href={item.href}>{item.label}</a>
                </li>
              ))}
        </ul>        
    </section>
  )
}

export default Navbar