import React from 'react';

const Form = () => {
  return (
    <section className="Project_section mt-20 md:mt-40 container mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl mb-10 md:mb-20 text-center">Let's Connect!</h1>
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Form Section */}
          <div className="w-full md:w-[49%] flex flex-col justify-center mb-6 md:mb-0">
            <form action="" className="p-4 md:p-6 shadow-lg rounded-lg">
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded bg-inherit" placeholder="Enter your name" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input type="email" className="w-full p-3 border border-gray-300 rounded bg-inherit" placeholder="Enter your email" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea className="w-full p-3 border border-gray-300 rounded bg-inherit" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" className="w-full button text-white p-3 rounded-lg hover:bg-purple-700 transition">Send Message</button>
            </form>
          </div>
          
          {/* Socials Section */}
          <div className="w-full md:w-[49%] flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-4xl mb-6 md:mb-10 text-center">Socials</h1>
            <div className='flex flex-wrap items-center justify-center gap-4 md:gap-6 w-full'>
              <img src="facebook-circled.gif" alt="facebook" className="w-10 md:w-12 rounded-full" />
              <img src="linkedin-circled.gif" alt="linkedin" className="w-10 md:w-12 rounded-full" />
              <img src="gmail-logo.gif" alt="gmail" className="w-10 md:w-12 rounded-full" />
              <img src="github-logo.gif" alt="Github" className="w-10 md:w-12 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>    
  )
}

export default Form;
