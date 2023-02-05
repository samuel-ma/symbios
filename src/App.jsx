import './App.css'
import Email from './components/Email'
import Faqs from './components/Faqs'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Socials from './components/Socials'
import Stats from './components/Stats'

function App() {

  return (
    <div className="App">
      <Socials/>
      <Navbar/>
      <Hero/>
      {/* <Hero2/> */}
      <Stats/>
      <Services/>
      <Faqs/>
      <Email/>
    </div>
  )
}

export default App
