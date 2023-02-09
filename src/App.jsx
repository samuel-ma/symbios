import './App.css'
import Email from './components/Email'
import Faqs from './components/Faqs'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import Navbar from './components/Navbar'
import Offices from './components/Offices'
import Services from './components/Services'
import Socials from './components/Socials'
import Stats from './components/Stats'
import Trainees from './components/Trainees'

function App() {

  return (
    <div className="App">
      <Socials/>
      <Navbar/>
      <Hero/>
      {/* <Hero2/> */}
      <Stats/>
      <Services/>
      <Trainees/>
      <Offices/>
      <Faqs/>
      <Email/>
      <Footer/>
    </div>
  )
}

export default App




