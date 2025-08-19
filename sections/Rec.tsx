import './Rec.css'
import { motion } from 'framer-motion'
import Phone from '../assets/Phones.mp4'

const Rec = () => {
  const variants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: -0 }
  }

  return (
    <div className="Romo">
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4" id="Req">
        {/* The video element now has z-0 */}
        <a href='www.linkedin.com/in/asap-jobs-049b5a37a'>
          <video 
          src={Phone} 
          width={950} 
          height={700} 
          className='Phoness absolute inset-0  object-cover z-0' // Added absolute positioning to make z-index effective
          autoPlay 
          loop 
          muted 
          playsInline 
        />
        </a>

        {/* Use a flex container to arrange content side-by-side on top of the video */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl relative z-10"> {/* This div needs a higher z-index */}
          
          {/* Text content on the left */}
          <div className="Texts flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <motion.h3 
              variants={variants}
              initial='hidden'
              whileInView='visible'
              transition={{ duration: 0.5 }}
              className='Lane text-white'> {/* Added text-white for visibility against video */}
              Requirements
            </motion.h3>
            <ul className="Max list-disc list-inside leading-relaxed space-y-2 text-5xl">
              <p className='text-white'>Valid ID.</p>
              <p className='text-white'>No criminal background.</p>
              <p className='text-white'>Reliable Transport.</p>
              <p className='text-white'>Typing Skills.</p>
            </ul>
          </div>

          {/* This div previously held the video; now it's empty or can be removed if not needed for layout */}
          <div className="flex-1 hidden md:block"> {/* Hidden on small screens, block on medium and up to maintain flex structure */}
            {/* The video is now absolutely positioned in the section, so no need for it here */}
          </div>
        </div>
        
        {/* Get Started button */}
        <div className="mt-8 pt-9 relative z-10"> {/* Ensure the button is also above the video */}
          <a href='https://meetings-na2.hubspot.com/asap-jobs' className='Cosmic bg-white hover:bg-red-600
            text-black font-semibold py-2 px-5
            rounded-full shadow-md
            transition-all duration-300 ease-in-out
            transform hover:scale-105
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75'>
            Get Started
          </a>
        </div>
      </section>
    </div>
  )
}

export default Rec;