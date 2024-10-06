import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-center text-white">
      <p>&copy; 2024 Miguel. Todos os direitos reservados.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://github.com/miguelourenco31" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white hover:text-gray-400" />
        </a>
        <a href="https://www.linkedin.com/in/miguel-louren%C3%A7o-183b05305/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white hover:text-gray-400" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
