// Formulario.js
import React, { useState } from 'react';

const Formulario = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Envia os dados para o componente pai
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
