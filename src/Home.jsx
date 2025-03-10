import React from 'react';
import { motion } from 'framer-motion';
import "./App.css";

const Home = () => {
  return (
      <div className='container mx-auto'>
        <header className='flex mt-12 justify-between items-center px-4'>
          <motion.span 
            className='logo rounded-full flex justify-center items-center p-1 border-2 border-white'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }} 
          >
            <img 
              src="Portfolio logo.png" 
              alt="Logo" 
              className="w-16 h-16 sm:w-12 sm:h-12 object-contain rounded-full"
            />
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Blog
          </motion.span>
        </header>
        <main>
          <section className='flex mt-12 intro_container justify-center text-center px-4'>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
              <h1 className='mt-0'>HELLO</h1>
              <div className='-mt-18'>
                <span className='text-4xl'>I'm</span>
                <span className='span_color ms-2 text-4xl'>Chikwado Favour Chibuike</span>
                <p className='text-4xl'>I'm <span className='ms-2 text-4xl'>Frontend Developer</span></p>
              </div>
            </motion.div>
          </section>
        </main>
      </div>
  );
};

export default Home;
