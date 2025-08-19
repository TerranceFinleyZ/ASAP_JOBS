import './Fqc.css'; // Make sure your CSS file is updated or Tailwind CSS is configured
import { motion } from 'framer-motion'

const Fqc = () => {


  const variants = {
    hidden:{opacity:0, y:50},
    visible:{opacity:1, y:0}
  }
  return (
    <div className="Vomo">
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16">
        <motion.div
         variants={variants}
            initial='hidden'
            whileInView='visible'
            transition={{duration:0.5}}
             className='Texture mb-12 text-center'>
          <h2 className='text-6xl md:text-8xl font-bold text-white massive'>
            FAQs
          </h2>
        </motion.div>

        {/* You can adjust the grid layout as needed for responsiveness */}
        <div className='Boba grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full'>

          {/* FAQ Item 1: Call Back Time */}
          <div className='bg--300 p-6 rounded-lg shadow-xl border border-gray-500'>
            <h3 className='text-green-400 text-2xl font-semibold mb-3'>When can I expect to hear back?</h3>
            <p className='text-gray-300 text-lg Billz'>
              We aim to connect with candidates as quickly as possible, typically within **1-3 business days** of receiving your application. We appreciate your patience!
            </p>
          </div>

          {/* FAQ Item 2: Number of Interviews */}
          <div className='bg--300 p-6 rounded-lg shadow-xl border border-pink-500'>
            <h3 className='text-purple-500 text-2xl font-semibold mb-3'>How many interview stages are there?</h3>
            <p className='text-gray-300 text-lg Billz'>
              Our interview process typically involves **three stages**. This allows us to ensure a comprehensive evaluation and find the best mutual fit for both you and our team, especially given the high volume of talented applicants.
            </p>
          </div>

          {/* FAQ Item 3: Remote Work Policy */}
          <div className='bg--300 p-6 rounded-lg shadow-xl border border-gray-500'>
            <h3 className='text-red-500 text-2xl font-semibold mb-3'>Is this a remote position?</h3>
            <p className='text-gray-300 text-lg Billz'>
              This role is primarily an **on-site position**. We believe in the benefits of in-person collaboration for this specific role.
            </p>
          </div>

          {/* You can add more FAQ items here */}
          {/* Example of another FAQ item */}


        </div>
      </section>
    </div>
  );
};

export default Fqc;
