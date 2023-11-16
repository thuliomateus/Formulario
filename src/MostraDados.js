// MostraDados.js
import React from 'react';

const MostraDados = ({ dados }) => {
  return (
    <div>
      <h2>Dados Recebidos:</h2>
      <p>Nome: {dados.nome}</p>
      <p>Email: {dados.email}</p>
    </div>
  );
};

export default MostraDados;
