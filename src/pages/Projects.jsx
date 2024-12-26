// src/pages/Projects.js
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A web application built with React and Node.js.',
      technologies: ['React', 'Node.js', 'Express'],
      link: 'https://github.com/yourusername/project-one',
      image: 'https://via.placeholder.com/400x300?text=Project+One',
    },
    {
      title: 'Project Two',
      description: 'A full-stack project with React, Redux, and MongoDB.',
      technologies: ['React', 'Redux', 'MongoDB'],
      link: 'https://github.com/yourusername/project-two',
      image: 'https://via.placeholder.com/400x300?text=Project+Two',
    },
    {
      title: 'Project Three',
      description: 'A mobile app built with React Native and Expo.',
      technologies: ['React Native', 'Expo'],
      link: 'https://github.com/yourusername/project-three',
      image: 'https://via.placeholder.com/400x300?text=Project+Three',
    },
    // Add more projects as needed
  ];

  return (
    <div className="p-8 bg-gray-900 text-white">
      <h2 className="text-3xl mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              {/* Project Title */}
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              {/* Project Description */}
              <p className="text-gray-300 mb-4">{project.description}</p>
              {/* Project Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-yellow-500 text-black py-1 px-3 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* Project Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 font-semibold hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
