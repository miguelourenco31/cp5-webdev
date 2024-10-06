
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/projetos" className="text-white hover:text-gray-300">Projetos</Link>
          </li>
          <li>
            <Link to="/contato" className="text-white hover:text-gray-300">Contato</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;

