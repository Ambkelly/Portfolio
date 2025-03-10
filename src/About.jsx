import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section 
      className="About_section container mx-auto px-4 mt-20 md:mt-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="text-3xl md:text-4xl mb-10 md:mb-20 text-center md:text-left"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        About Me
      </motion.h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Image Section */}
        <motion.span 
          className="profile_image w-full md:w-[49%] flex justify-center"
          initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80, delay: 0.4 }}
        >
          <img 
            src="about.jpg" 
            alt="Chikwado Favour Chibuike's image" 
            className="w-3/4 md:w-full rounded-lg shadow-lg"
          />
        </motion.span>

        {/* Text Section */}
        <motion.span 
          className="profile_description w-full md:w-[49%] text-center md:text-left px-4"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.6 }}
        >
          <p className="text-lg leading-relaxed">
            I’m <strong>Chikwado Favour Chibuike</strong>, a Frontend Developer passionate about crafting sleek, responsive, and user-friendly web experiences. I specialize in <strong>HTML, CSS, JavaScript</strong>, and modern frameworks like <strong>React</strong>, ensuring that every project I build is both visually appealing and highly functional.
            <br /><br />
            With a strong eye for design and performance, I focus on creating intuitive user interfaces, optimizing web performance, and delivering seamless digital experiences. My approach blends creativity with technical expertise to bring ideas to life on the web.
            <br /><br />
            Whether it's building websites from scratch, optimizing existing projects, or implementing pixel-perfect designs, I’m committed to writing clean, maintainable code that enhances user engagement and meets industry standards.
            <br /><br />
            <strong>Let’s build something amazing together! 🚀</strong>
          </p>
        </motion.span>
      </div>
    </motion.section>
  );
};

export default About;