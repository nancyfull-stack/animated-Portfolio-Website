// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#home">Soni Prajapati</a>
        </div>
        <div className="space-x-6">
          <a href="#about" className="hover:text-yellow-500">About</a>
          <a href="#projects" className="hover:text-yellow-500">Projects</a>
          <a href="#contact" className="hover:text-yellow-500">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
