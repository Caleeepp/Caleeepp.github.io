import React from 'react';
import './ElHierroImages.css'; // Asegúrate de que esta ruta sea correcta

const ElHierro: React.FC = () => {
  return (
    <div className="fondo-hierro">
      <h1 className="titulo">EL HIERRO</h1>
      <div className="imagenes">
        <img src="/images/ElHierro1.jpg" alt="El Hierro 1" />
        <img src="/images/ElHierro2.jpg" alt="El Hierro 2" />
        <img src="/images/ElHierro3.jpg" alt="El Hierro 3" />
        <img src="/images/ElHierro4.jpg" alt="El Hierro 4" />
      </div>
    </div>
  );
};

export default ElHierro;
