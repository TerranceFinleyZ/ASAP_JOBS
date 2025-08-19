import './Sims.css'
import { motion } from 'framer-motion'




const Sims = () => {

  const variants = {
    hidden:{opacity:0, y:100},
    visible:{opacity:1, y:-0}
  }

  return (
    <div className="Matrix">
        <section className='min-h-screen relative flex flex-col items-center justify-center px-4' id="Sims">
            <div className="mt-7">
      <div 
      className=" w-full max-w-7xl mx-auto">
        <motion.h2
        variants={variants}
            initial='hidden'
            whileInView='visible'
            transition={{duration:0.5}}
        className=" Rolo text-5xl sm:text-7xl font-bold text-center text-white mb-12 leading-tight">
          Simulations
        </motion.h2>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">

          {/* Box 1: Seamless Integration */}
          <a href='https://www.livechat.com/typing-speed-test/#/'>
            <div
            className={`relative p-6 rounded-xl shadow-xl border border-gray-700 overflow-hidden
                         flex flex-col justify-between items-start transition-all duration-300 ease-in-out
                         hover:shadow-2xl hover:scale-[1.02] bg-gradient-to-br from-purple-700 to-indigo-800`}
          >

            <div className="mb-4 text-4xl text-blue-400">
              
              <svg xmlns="https://i.pinimg.com/originals/9a/41/d4/9a41d483b7dabd46026af83b0ea62c7d.gif" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plug-zap"><path d="M13 2v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2"/><path d="m10 11-2 2-2-2"/><path d="M19 2v5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V2"/><path d="m16 7-2 2-2-2"/><path d="M7 22v-4"/><path d="M17 22v-4"/><path d="M12 22v-4"/><path d="M10 19h4"/><path d="M12 19v-6"/></svg>
            </div>
            <h3 className={`text-2xl font-bold mb-2 text-pink-400`}>
              Typing Test 
            </h3>
            <p className={`text-base text-purple-100 opacity-80`}>
              Challenge your typing speed with this incredible test! The average is 25 WPM—think you can beat it?
            </p>
            
          </div>
          </a>

          {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-2"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg> */}
          <div
            className={`relative p-6 rounded-xl shadow-xl border border-gray-700 overflow-hidden
                         flex flex-col justify-between items-start transition-all duration-300 ease-in-out
                          bg-gradient-to-br from-green-700 to-teal-800`}
          >
            <div className="mb-4 text-4xl text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <h3 className={`text-2xl font-bold mb-2 text-green-100`}>
              AI-Resume Builder
            </h3>
            <p className={`text-base text-green-100 opacity-80`}>
              Optimize your resume to 2025 standards with the most effective AI resume builder available.
            </p>
          </div>

          {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.78 1.28a2 2 0 0 0 .73 2.73l.15.08a2 2 0 0 1 1 1.74v.44a2 2 0 0 1-1 1.73l-.15.08a2 2 0 0 0-.73 2.73l.78 1.28a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 1-1.74v.44a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.78-1.28a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.44a2 2 0 0 1 1-1.73l.15-.08a2 2 0 0 0 .73-2.73l-.78-1.28a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-1-1.74V2a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg> */}
          <div
            className={`relative p-6 rounded-xl shadow-xl border border-gray-700 overflow-hidden
                         flex flex-col justify-between items-start transition-all duration-300 ease-in-out
                        ] bg-gradient-to-br from-red-700 to-orange-800`}
          >
            <div className="mb-4 text-4xl text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              
            </div>
            <h3 className={`text-2xl font-bold mb-2 text-red-100`}>
              Memory-Trainning
            </h3>
            <p className={`text-base text-red-100 opacity-80`}>
              Let's play a game! This fun and interactive number memory game will help you sharpen your recall skills. Good luck and have fun!
            </p>
          </div>

          {/* Box 4: Secure & Scalable */}
          <div
            className={`relative p-6 rounded-xl shadow-xl border border-gray-700 overflow-hidden
                         flex flex-col justify-between items-start transition-all duration-300 ease-in-out
                          bg-gradient-to-br from-blue-700 to-cyan-800`}
          >
            <div className="mb-4 text-4xl text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <h3 className={`text-2xl font-bold mb-2 text-pink-400`}>
              The Matrix
            </h3>
            <p className={`text-base text-blue-100 opacity-80`}>
              In this simulation, you'll practice a standerd call flow to prepare for a Call Center Representative position.
            </p>
          </div>

        </div>
      </div>
    </div>
        </section>
    </div>
  )
}

export default Sims