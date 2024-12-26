// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white">

      {/* About Header */}
      <h2 className="text-3xl mb-6">About Me</h2>
      <p className="text-lg mb-8">
        I am a passionate full-stack developer with experience in building modern, user-friendly web applications. I specialize in React, Node.js, and JavaScript technologies. Let’s create something amazing together!
      </p>

      {/* Skills Section */}
      <div className="mb-8">
        <h3 className="text-2xl mb-4">Skills</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {/* Skill Logos */}
          <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript" className="w-16 h-16" />
          <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React" className="w-16 h-16" />
          <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node.js" className="w-16 h-16" />
          <img src="https://img.icons8.com/color/48/000000/python.png" alt="Python" className="w-16 h-16" />
          <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS" className="w-16 h-16" />
          <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML" className="w-16 h-16" />
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-8">
        <h3 className="text-2xl mb-4">Experience</h3>
        <div className="space-y-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="text-xl font-semibold">Frontend Developer - ABC Tech</h4>
            <p className="text-md text-gray-300">January 2022 - Present</p>
            <ul className="list-disc pl-5">
              <li>Developed and maintained web applications using React.js.</li>
              <li>Collaborated with UI/UX designers to improve user experience.</li>
              <li>Optimized front-end performance and ensured responsive design.</li>
            </ul>
          </div>

          {/* <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="text-xl font-semibold">Full-Stack Developer - XYZ Solutions</h4>
            <p className="text-md text-gray-300">June 2020 - December 2021</p>
            <ul className="list-disc pl-5">
              <li>Built scalable back-end services using Node.js and Express.</li>
              <li>Implemented RESTful APIs and integrated them with front-end applications.</li>
              <li>Worked on database design and optimization using MongoDB and MySQL.</li>
            </ul>
          </div> */}
        </div>
      </div>

      {/* Education Section */}
      <div>
        <h3 className="text-2xl mb-4">Education</h3>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h4 className="text-xl font-semibold">Bachelor of Technology in Computer Science</h4>
          <p className="text-md text-gray-300">XYZ University - Graduated in 2020</p>
          <p className="text-md">Focus on Software Development, Web Development, and Data Structures.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
