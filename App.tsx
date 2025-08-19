import './App.css'
import Home from './sections/Home'
import Navbar from './componets/Navbar'
import Hero from './sections/Hero'
import Rec from './sections/Rec'
import Fqc from './sections/Fqc'
import Maz from './sections/Maz'
import Footer from './sections/Footer'
import End from './sections/End'
import Sims from './sections/Sims'
import CustomCursor from './componets/CustomCursor'


export default function App() {
  return (
    <div className='Momo'>
      <div>
        <Navbar />
        <CustomCursor />
        <Home />
        <Hero />
        <Rec />
        <Maz />
        <Fqc />
        <Sims />
        <Footer />
        <End />
      </div>
    </div> 
  )
}