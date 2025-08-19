import './HomeText.css'
import { motion } from 'framer-motion'
import Cools from '../assets/Cools.png'
import Cooler from '../assets/Cooler.png'

const HomeText = () => {

  const variants = {
    hidden:{opacity:0, y:200},
    visible:{opacity:1, y:-0}
  }

  return (
    <section
    id='home'
    className='relative min-h-screen flex flex-col items-center justify-center px-4'>
       <img src={Cools} alt='product' className='deskker w-[2400] absolute inset-0 object-contain z-0' />
      {/* Added space-y-0 and gap-0 to explicitly remove vertical space between children */}
      <div className="flex flex-col items-center justify-center space-y-0 gap-0 relative"> {/* Added relative here for positioning context */}

        {/* Cools image as the background for the text */}
       

        {/* Used !mb-0 to forcefully remove bottom margin from h1 */}
        <h1 className="Mass mt-0 !mb-0 relative z-10 flex items-center justify-center"> {/* Added relative and z-index to h1 */}
          <span className='text-white italic font-bold transition-colors duration-300 relative z-10'>ASAP</span> {/* ASAP in front of Cooler for slight overlap */}
          
          {/* Cooler image positioned between ASAP and JOBS */}
          <img src={Cooler} alt='product' className='Draggo w-[700px] absolute z-10' style={{ left: '48.3%', transform: 'translateX(-50%)' }} /> {/* Absolute position for Cooler */}
          
          <span
            className="text-[#ff66ff] italic font-bold transition-colors duration-300 relative z-20" style={{ right: '2%'}} // JOBS in front of Cooler
          >
            JOBS
          </span>
        </h1>
        {/* Used !mb-0 to forcefully remove bottom margin from h2 and !m-0 to p tag */}
        <h2 className='flex flex-col items-center justify-center !mb-0 relative z-10'> {/* Added relative and z-index */}
          <p className='Fomo text-white underline italic !m-0'>
            Need a Job, get a Job!
          </p>
        </h2>
        {/* Ensured no extra margin/padding from this div */}
        <motion.div
        variants={variants}
          initial='hidden'
          whileInView='visible'
          transition={{duration:0.5}}
            className="mt-0 pt-9 relative z-10"> {/* Added relative and z-index */}
          <a href='https://meetings-na2.hubspot.com/asap-jobs' className=' Cosmic bg-white hover:bg-red-600
      text-black font-semibold py-2 px-5
      rounded-full shadow-md
      transition-all duration-300 ease-in-out
      transform hover:scale-105
      focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75'>
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default HomeText