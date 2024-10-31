import { Navbar } from './components'
import { Header,Footer,About,Services,Contact} from './containers'
import './App.css'



const App = () => {
  return (
    <section>      
      <Navbar/>
      <Header/>           
      <About/>
      <Services/>
      <Contact/>
      <Footer/>            
    </section>
  )
}

export default App