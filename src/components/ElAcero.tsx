import React from 'react';
import './ElAceroImages.css'; // Asegúrate de que la ruta sea correcta

const ElAcero: React.FC = () => {
  return (
    <div className="el-acero-container">
      <h1>El Acero</h1> {/* Título del componente */}
      <div className="imagenes-acero">
        <img src="/images/Acero1.jpg" alt="Página 1" />
        <img src="/images/Acero2.jpg" alt="Página 2" />
        <img src="/images/Acero3.jpg" alt="Página 3" />
        <img src="/images/Acero4.jpg" alt="Página 4" />
        <img src="/images/Acero5.jpg" alt="Página 5" />
        <img src="/images/Acero6.jpg" alt="Página 6" />
        <img src="/images/Acero7.jpg" alt="Página 7" />
      </div>
    </div>
  );
};

export default ElAcero;
