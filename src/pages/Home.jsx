// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section (Intro + Profile Pic) */}
      <section
        id="home"
        className="flex items-center justify-center min-h-screen bg-gray-800 text-white px-6 py-12"
      >
        {/* Left Section - Intro */}
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12 max-w-6xl mx-auto">
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-4xl font-bold animate__animated animate__fadeIn">
              Hello, I'm Soni Prajapati
            </h1>
            <p className="text-lg animate__animated animate__fadeIn animate__delay-1s">
              Welcome to my Portfolio
            </p>
          </div>

          {/* Right Section - Profile Pic */}
          <div className="flex justify-center animate__animated animate__fadeIn animate__delay-2s">
            <img
              src="src/assets/profile picture.jpeg" // Replace with your actual profile pic path
              alt="Soni Prajapati"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-yellow-500 object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="mb-6">
            I am a passionate software developer with experience in creating beautiful and functional websites and applications. My skills include React, Tailwind CSS, JavaScript, and more.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Skills:</h3>
          <ul className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {/* Example skills */}
            <li className="flex justify-center items-center">
              <img src="/path/to/react-logo.png" alt="React" className="h-12 w-12" />
            </li>
            <li className="flex justify-center items-center">
              <img src="/path/to/js-logo.png" alt="JavaScript" className="h-12 w-12" />
            </li>
            <li className="flex justify-center items-center">
              <img src="/path/to/tailwind-logo.png" alt="Tailwind CSS" className="h-12 w-12" />
            </li>
            {/* Add more logos for other skills here */}
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-700 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <p className="mb-6">
            Below are some of the projects I have worked on. You can check them out to see the skills I've applied and the solutions I have built.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Project 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-900 transition duration-300">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p className="text-sm mb-4">A short description of the project goes here.</p>
              <a href="#" className="text-yellow-500 hover:text-yellow-300">View Project</a>
            </div>
            {/* Example Project 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-900 transition duration-300">
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <p className="text-sm mb-4">A short description of the project goes here.</p>
              <a href="#" className="text-yellow-500 hover:text-yellow-300">View Project</a>
            </div>
            {/* Example Project 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-900 transition duration-300">
              <h3 className="text-xl font-semibold mb-2">Project 3</h3>
              <p className="text-sm mb-4">A short description of the project goes here.</p>
              <a href="#" className="text-yellow-500 hover:text-yellow-300">View Project</a>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="mb-6">
            I would love to hear from you! Feel free to reach out to me using the form below, or contact me through social media.
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg"
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black p-3 rounded-lg hover:bg-yellow-400 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
