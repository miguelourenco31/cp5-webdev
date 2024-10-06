import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link to="/projetos" className="text-white hover:text-gray-400">Projetos</Link>
        </li>
        <li>
          <Link to="/contato" className="text-white hover:text-gray-400">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
