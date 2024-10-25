import React from 'react';
import './InformeTermoquimicoImages.css'; // Asegúrate de que la ruta sea correcta

const InformeTermoquimico: React.FC = () => {
  return (
    <div className="informe-termoquimico-container">
      <h1 className="titulo">INFORME TERMOQUÍMICO</h1>
      <div className="imagenes">
        <img src="/images/pagina1.jpg" alt="Página 1" />
        <img src="/images/pagina2.jpg" alt="Página 2" />
        <img src="/images/pagina3.jpg" alt="Página 3" />
        <img src="/images/pagina4.jpg" alt="Página 4" />
        <img src="/images/pagina5.jpg" alt="Página 5" />
        <img src="/images/pagina6.jpg" alt="Página 6" />
      </div>
    </div>
  );
};

export default InformeTermoquimico;
