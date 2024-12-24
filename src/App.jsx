import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Education from './Components/Education/Education'
import './App.css'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import CertificationsAndProfiles from './Components/CertificationsAndProfiles/CertificationsAndProfiles'
import CustomCursor from './Components/CustomCursor/CustomCursor';
const App = () => {
  return (
    <div className='App-back'>
       <Navbar/>
       <Hero/>
       <About/>
        <Education/>
       <Projects/>
       <CertificationsAndProfiles/>
       <Contact/>
       <Footer/>
       {/* <CustomCursor/> */}
    </div>
      
    
  )
}

export default App
