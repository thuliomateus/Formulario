// App.js
import React, { useState } from 'react';
import Formulario from './Formulario';
import MostraDados from './MostraDados';

function App() {
  const [dadosFormulario, setDadosFormulario] = useState(null);

  const handleFormSubmit = (formData) => {
    setDadosFormulario(formData); // Recebe os dados do formulário e atualiza o estado
  };

  return (
    <div className="App">
      <h1>Formulário em React com Comunicação entre Componentes</h1>
      <Formulario onSubmit={handleFormSubmit} />
      {dadosFormulario && <MostraDados dados={dadosFormulario} />}
    </div>
  );
}

export default App;
