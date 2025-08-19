import './Footer.css'
import { motion } from 'framer-motion'
import Hire from '../assets/Hire.png'


const Footer = () => {

  const variants = {
    hidden:{opacity:0, y:200},
    visible:{opacity:1, y:-0}
  }
  return (
   <div className='Abut'>
    <section className='Greed min-h-screen relative flex flex-col  px-4'>
        <div className="Texts">
                <div className="flex-shrink-0 mr-6">
        <a href="#" className="Lamo text-9xl font-bold transition-colors duration-300 relative inline-block">
          {/*
            The parent <a> tag is set to relative and inline-block to contain the absolutely
            positioned children correctly and allow text flow around it.
          */}
          {/* ASAP in the background */}
          <span
            className="text-white italic absolute top-0 left-0 z-10 "
            style={{ fontSize: '1.2em' }} // Make ASAP slightly larger to be a background
          >
            ASAP
          </span>
          {/* JOBS in the foreground, overlapping and below ASAP */}
          <span
            className="text-pink-400 italic absolute left-0 z-20"
            style={{
              textShadow: '0 0 18px rgba(216, 64, 140, 1.7), 0 0 15px rgba(211, 88, 149, 1.4)', // Added glow effect
              fontSize: '0.8em', // Make JOBS larger to be foreground
              top: '0.7em', // Adjust this value to control how much JOBS is below ASAP
              left: '2.3em' // Adjust this value to control horizontal overlap
            }}
          >
            JOBS
          </span>
          {/*
            A placeholder span or div is needed to ensure the parent <a> tag
            has a height and width that accommodates both absolutely positioned elements.
            We'll make it invisible.
          */}
          <span className="invisible opacity-0" style={{ fontSize: '1.2em', lineHeight: '1.5em' }}>
            ASAP JOBS {/* This span helps define the overall size of the container */}
          </span>
        </a>
        
      </div>
                <ul className="Mech list-disc list-inside leading-relaxed  space-y-2 flex flex-col rid  text-5xl">
                <p className='text-white'>Email: asapjobs.ref@gmail.com.</p>
                <p className='text-white'>Support: 520-490-1336.</p>
                <p className='text-white'>Location: Tucson, AZ.</p>

                <>
                  <a href='https://github.com/TerranceFinleyZ/ASAP_JOBS'>
                    <img src={Hire} alt='product' className=' Monoot w-[1100px] absolute inset-0  object-cover z-30' style={{ left: '20.3%', transform: 'translateX(-50%)' }} /> {/* Absolute position for Cooler */}
                  </a>
                </>
                <motion.div
                variants={variants}
            initial='hidden'
            whileInView='visible'
            transition={{duration:0.5}} className="mt-0 pt-9">
            <a href='https://meetings-na2.hubspot.com/asap-jobs' className=' Lord bg-red-500 hover:bg-red-600
      text-black font-semibold py-2 px-5
      rounded-full shadow-md
      transition-all duration-300 ease-in-out
      transform hover:scale-105
      focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75'>
              Get Started
            </a>
          </motion.div>
                </ul>
            </div>
    </section>
   </div>
  )
}

export default Footer