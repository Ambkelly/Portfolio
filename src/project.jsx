import React from 'react';
import { motion } from 'framer-motion';

const Project = () => {
  return (
    <>
      <section className="Project_section mt-40 container mx-auto px-4">
        <motion.h1 
          className="text-4xl mb-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <motion.div 
            className="profile_image flex flex-col justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='mb-4 mt-4 text-2xl'>She Rise Chat Assistance</h1>
            <img src="sherise.PNG" alt="She Rise Chat Assistance project image" className="w-full rounded-lg" onError={(e) => (e.target.src = '/fallback.PNG')} />
            <p className="mt-4 text-lg text-left">
              A chatbot application designed to provide assistance and support, offering an interactive and user-friendly experience for users seeking help or information.
            </p>
            <div className='mt-4 flex flex-wrap gap-2'>
              <span className='links py-2 px-4 text-xs rounded-full'>HTML</span>
              <span className='links py-2 px-4 text-xs rounded-full'>CSS</span>
              <span className='links py-2 px-4 text-xs rounded-full'>REACT</span>
              <a href="https://she-rise-chat-assistance.vercel.app/" className='links py-2 px-4 text-xs rounded-full text-white'>VISIT</a>
            </div>
          </motion.div>
          
          {/* Project 2 */}
          <motion.div 
            className="profile_image flex flex-col justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='mb-4 mt-4 text-2xl'>OzoneGuard</h1>
            <img src="Ozone.PNG" alt="OzoneGuard project image" className="w-full rounded-lg" onError={(e) => (e.target.src = '/fallback.PNG')} />
            <p className="mt-4 text-lg text-left">
              An application focused on environmental monitoring, providing users with tools to track and manage air quality and other environmental factors.
            </p>
            <div className='mt-4 flex flex-wrap gap-2'>
              <span className='links py-2 px-4 text-xs rounded-full'>HTML</span>
              <span className='links py-2 px-4 text-xs rounded-full'>CSS</span>
              <span className='links py-2 px-4 text-xs rounded-full'>REACT</span>
              <a href="https://ozoneguard-d1jw0oftn-chikwado-favour-chibuikes-projects.vercel.app/login" className='links py-2 px-4 text-xs rounded-full text-white'>VISIT</a>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="Project_section mt-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 3 */}
          <motion.div 
            className="profile_image flex flex-col justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='mb-4 mt-4 text-2xl'>Eyra</h1>
            <img src="Eyra.PNG" alt="Eyra project image" className="w-full rounded-lg" onError={(e) => (e.target.src = '/fallback.PNG')} />
            <p className="mt-4 text-lg text-left">
              A platform designed to enhance user engagement through innovative features, offering a seamless and interactive experience.
            </p>
            <div className='mt-4 flex flex-wrap gap-2'>
              <span className='links py-2 px-4 text-xs rounded-full'>HTML</span>
              <span className='links py-2 px-4 text-xs rounded-full'>CSS</span>
              <span className='links py-2 px-4 text-xs rounded-full'>REACT</span>
              <a href="https://eyra-w28m.vercel.app/" className='links py-2 px-4 text-xs rounded-full text-white'>VISIT</a>
            </div>
          </motion.div>
          
          {/* Project 4 */}
          <motion.div 
            className="profile_image flex flex-col justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='mb-4 mt-4 text-2xl'>Her Cycle</h1>
            <img src="HerCycle.PNG" alt="Her Cycle project image" className="w-full rounded-lg" onError={(e) => (e.target.src = '/fallback.PNG')} />
            <p className="mt-4 text-lg text-left">
              A health-focused application aimed at helping users track and manage their wellness cycles with a user-friendly interface.
            </p>
            <div className='mt-4 flex flex-wrap gap-2'>
              <span className='links py-2 px-4 text-xs rounded-full'>HTML</span>
              <span className='links py-2 px-4 text-xs rounded-full'>CSS</span>
              <span className='links py-2 px-4 text-xs rounded-full'>REACT</span>
              <a href="https://her-cycle-iota.vercel.app/" className='links py-2 px-4 text-xs rounded-full text-white'>VISIT</a>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="Project_section mt-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 5 */}
          <motion.div 
            className="profile_image flex flex-col justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='mb-4 mt-4 text-2xl'>Chat App</h1>
            <img src="Chat App.PNG" alt="Chat App project image" className="w-full rounded-lg" onError={(e) => (e.target.src = '/fallback.PNG')} />
            <p className="mt-4 text-lg text-left">
              A real-time chat application that enables seamless communication between users with a clean and intuitive interface.
            </p>
            <div className='mt-4 flex flex-wrap gap-2'>
              <span className='links py-2 px-4 text-xs rounded-full'>HTML</span>
              <span className='links py-2 px-4 text-xs rounded-full'>CSS</span>
              <span className='links py-2 px-4 text-xs rounded-full'>REACT</span>
              <a href="https://chat-app-rosy-seven-56.vercel.app/" className='links py-2 px-4 text-xs rounded-full text-white'>VISIT</a>
            </div>
          </motion.div>
          
          {/* Project 6 */}
          <motion.div 
            className="profile_image flex flex-col justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='mb-4 mt-4 text-2xl'>Tech Study</h1>
            <img src="Techly.PNG" alt="Tech Study project image" className="w-full rounded-lg" onError={(e) => (e.target.src = '/fallback.PNG')} />
            <p className="mt-4 text-lg text-left">
              An educational platform designed to provide resources and tools for tech enthusiasts to learn and grow their skills.
            </p>
            <div className='mt-4 flex flex-wrap gap-2'>
              <span className='links py-2 px-4 text-xs rounded-full'>HTML</span>
              <span className='links py-2 px-4 text-xs rounded-full'>CSS</span>
              <span className='links py-2 px-4 text-xs rounded-full'>REACT</span>
              <a href="https://tech-study.vercel.app/" className='links py-2 px-4 text-xs rounded-full text-white'>VISIT</a>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="Project_section mt-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 7 */}
          <motion.div 
            className="profile_image flex flex-col justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='mb-4 mt-4 text-2xl'>Drip City</h1>
            <img src="Dripcity.PNG" alt="Drip City project image" className="w-full rounded-lg" onError={(e) => (e.target.src = '/fallback.PNG')} />
            <p className="mt-4 text-lg text-left">
              An e-commerce platform focused on fashion, offering a sleek and modern shopping experience for users.
            </p>
            <div className='mt-4 flex flex-wrap gap-2'>
              <span className='links py-2 px-4 text-xs rounded-full'>HTML</span>
              <span className='links py-2 px-4 text-xs rounded-full'>CSS</span>
              <span className='links py-2 px-4 text-xs rounded-full'>REACT</span>
              <a href="https://drip-city.vercel.app/" className='links py-2 px-4 text-xs rounded-full text-white'>VISIT</a>
            </div>
          </motion.div>
          
          {/* Project 8 */}
          <motion.div 
            className="profile_image flex flex-col justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='mb-4 mt-4 text-2xl'>DocOnCall</h1>
            <img src="Doconcall.PNG" alt="DocOnCall project image" className="w-full rounded-lg" onError={(e) => (e.target.src = '/fallback.PNG')} />
            <p className="mt-4 text-lg text-left">
              A telemedicine platform that connects users with healthcare professionals for virtual consultations and medical advice.
            </p>
            <div className='mt-4 flex flex-wrap gap-2'>
              <span className='links py-2 px-4 text-xs rounded-full'>HTML</span>
              <span className='links py-2 px-4 text-xs rounded-full'>CSS</span>
              <span className='links py-2 px-4 text-xs rounded-full'>REACT</span>
              <a href="https://doconcall-pi.vercel.app/login" className='links py-2 px-4 text-xs rounded-full text-white'>VISIT</a>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="Project_section mt-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 9 */}
          <motion.div 
            className="profile_image flex flex-col justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='mb-4 mt-4 text-2xl'>Task Management App</h1>
            <img src="Task management.PNG" alt="Task Management project image" className="w-full rounded-lg" onError={(e) => (e.target.src = '/fallback.PNG')} />
            <p className="mt-4 text-lg text-left">
              A productivity tool that helps users organize tasks, set deadlines, and track progress with an intuitive interface.
            </p>
            <div className='mt-4 flex flex-wrap gap-2'>
              <span className='links py-2 px-4 text-xs rounded-full'>HTML</span>
              <span className='links py-2 px-4 text-xs rounded-full'>CSS</span>
              <span className='links py-2 px-4 text-xs rounded-full'>REACT</span>
              <a href="https://task-management-app-pi-puce.vercel.app/" className='links py-2 px-4 text-xs rounded-full text-white'>VISIT</a>
            </div>
          </motion.div>
          
          {/* Project 10 */}
          <motion.div 
            className="profile_image flex flex-col justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='mb-4 mt-4 text-2xl'>PageTurner</h1>
            <img src="pagetuner.PNG" alt="PageTurner project image" className="w-full rounded-lg" onError={(e) => (e.target.src = '/fallback.PNG')} />
            <p className="mt-4 text-lg text-left">
              A digital bookshelf application that allows users to organize, track, and discover books with an engaging and intuitive interface.
            </p>
            <div className='mt-4 flex flex-wrap gap-2'>
              <span className='links py-2 px-4 text-xs rounded-full'>HTML</span>
              <span className='links py-2 px-4 text-xs rounded-full'>CSS</span>
              <span className='links py-2 px-4 text-xs rounded-full'>REACT</span>
              <a href="https://pageturner-eight.vercel.app/" className='links py-2 px-4 text-xs rounded-full text-white'>VISIT</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Project;