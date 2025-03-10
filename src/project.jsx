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
            <h1 className='mb-4 mt-4 text-2xl'>Task Management App</h1>
            <img src="tracker.PNG" alt="tracker project image" className="w-full rounded-lg" />
            <p className="mt-4 text-lg text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente architecto culpa veniam accusantium accusamus est in porro dolorum. Repudiandae, temporibus in deleniti dolore eius ipsam aspernatur culpa quaerat dolor atque!
            </p>
            <div className='mt-4 flex flex-wrap gap-2'>
              <span className='links py-2 px-4 text-xs rounded-full'>HTML</span>
              <span className='links py-2 px-4 text-xs rounded-full'>CSS</span>
              <span className='links py-2 px-4 text-xs rounded-full'>REACT</span>
              <a href="https://task-management-app-pi-puce.vercel.app/" className='links py-2 px-4 text-xs rounded-full text-white'>VISIT</a>
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
            <h1 className='mb-4 mt-4 text-2xl'>SMFest Redesign</h1>
            <img src="smfest.PNG" alt="SMFest project image" className="w-full rounded-lg" />
            <p className="mt-4 text-lg text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores ullam molestiae sint ipsum odit eum sed! Aperiam alias nam at perferendis aliquid eligendi maiores. Voluptatem ea labore doloribus nostrum ipsa.
            </p>
            <div className='mt-4 flex flex-wrap gap-2'>
              <span className='links py-2 px-4 text-xs rounded-full'>HTML</span>
              <span className='links py-2 px-4 text-xs rounded-full'>CSS</span>
              <span className='links py-2 px-4 text-xs rounded-full'>REACT</span>
              <a href="https://midterm-project-navy.vercel.app/" className='links py-2 px-4 text-xs rounded-full text-white'>VISIT</a>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="Project_section mt-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 3*/}
          <motion.div 
            className="profile_image flex flex-col justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='mb-4 mt-4 text-2xl'>Rad5 Redesign</h1>
            <img src="Rad5.PNG" alt="tracker project image" className="w-full rounded-lg" />
            <p className="mt-4 text-lg text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam incidunt ipsam. Est ut culpa natus placeat incidunt, dolores minima qui non, quae voluptatibus repellat ea cumque? Exercitationem, ipsam amet.
            </p>
            <div className='mt-4 flex flex-wrap gap-2'>
              <span className='links py-2 px-4 text-xs rounded-full'>HTML</span>
              <span className='links py-2 px-4 text-xs rounded-full'>CSS</span>
              <span className='links py-2 px-4 text-xs rounded-full'>REACT</span>
              <a href="https://rad5-project.vercel.app/" className='links py-2 px-4 text-xs rounded-full text-white'>VISIT</a>
            </div>
          </motion.div>
          
          {/* Project 4*/}
          <motion.div 
            className="profile_image flex flex-col justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='mb-4 mt-4 text-2xl'>Sharif's Cusine Redesign</h1>
            <img src="shaff.PNG" alt="Shaff Redesign" className="w-full rounded-lg" />
            <p className="mt-4 text-lg text-left">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui culpa provident alias quae aperiam accusamus aliquam in iusto exercitationem veritatis quos porro expedita quam harum, ipsum totam hic iste reprehenderit.
            </p>
            <div className='mt-4 flex flex-wrap gap-2'>
              <span className='links py-2 px-4 text-xs rounded-full'>HTML</span>
              <span className='links py-2 px-4 text-xs rounded-full'>CSS</span>
              <span className='links py-2 px-4 text-xs rounded-full'>REACT</span>
              <a href="https://capstonechibuike.vercel.app/" className='links py-2 px-4 text-xs rounded-full text-white'>VISIT</a>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="Project_section mt-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 5*/}
          <motion.div 
            className="profile_image flex flex-col justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='mb-4 mt-4 text-2xl'>Orphanage Website</h1>
            <img src="orphanage.PNG" alt="tracker project image" className="w-full rounded-lg" />
            <p className="mt-4 text-lg text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam incidunt ipsam. Est ut culpa natus placeat incidunt, dolores minima qui non, quae voluptatibus repellat ea cumque? Exercitationem, ipsam amet.
            </p>
            <div className='mt-4 flex flex-wrap gap-2'>
              <span className='links py-2 px-4 text-xs rounded-full'>HTML</span>
              <span className='links py-2 px-4 text-xs rounded-full'>CSS</span>
              <span className='links py-2 px-4 text-xs rounded-full'>REACT</span>
              <a href="https://boostrap-project-topaz.vercel.app/" className='links py-2 px-4 text-xs rounded-full text-white'>VISIT</a>
            </div>
          </motion.div>
          
          {/* Project 6*/}
          <motion.div 
            className="profile_image flex flex-col justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='mb-4 mt-4 text-2xl'>SMFest Redesign</h1>
            <img src="smfest.PNG" alt="SMFest project image" className="w-full rounded-lg" />
            <p className="mt-4 text-lg text-left">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui culpa provident alias quae aperiam accusamus aliquam in iusto exercitationem veritatis quos porro expedita quam harum, ipsum totam hic iste reprehenderit.
            </p>
            <div className='mt-4 flex flex-wrap gap-2'>
              <span className='links py-2 px-4 text-xs rounded-full'>HTML</span>
              <span className='links py-2 px-4 text-xs rounded-full'>CSS</span>
              <span className='links py-2 px-4 text-xs rounded-full'>REACT</span>
              <a href="https://midterm-project-navy.vercel.app/" className='links py-2 px-4 text-xs rounded-full text-white'>VISIT</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Project;