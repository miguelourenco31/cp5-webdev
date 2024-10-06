import React from 'react';

const Projeto = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Meu Projeto</h2>
      <h3 className="text-xl font-semibold mb-2">GS-WebDev</h3>
      <p className="mb-4">
        Este repositório foi usado para fazer a GS da matéria de Web-Dev.
      </p>
      <a 
        href="https://github.com/miguelourenco31/GS-WebDev" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 underline"
      >
        Acesse o repositório do projeto no GitHub
      </a>
    </div>
  );
};

export default Projeto;
