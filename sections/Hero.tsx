import dont from '../assets/dont.mp4'
import './Hero.css'
import Cool from '../assets/Cool.png'

const Hero = () => {
  return (
    <div className="Zomo">
        <section className='min-h-screen relative flex flex-col items-center justify-center px-4' id="Hero">
              <div>
                <video src={dont} controls width={1000} height={700} className='rounded-3xl border border-pink-300/20 p-1 '/>
              </div>
              <img src={Cool} alt='product' className='Lennit w-[600px] absolute z-10' style={{ left: '20.3%', transform: 'translateX(-50%)' }} /> {/* Absolute position for Cooler */}
        </section>
    </div>
  )

}

export default Hero