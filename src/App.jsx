import './App.css'
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
      {/* <Hero/> */}
      <Hero2/>
      <Stats/>
      <Services/>
    </div>
  )
}

export default App
