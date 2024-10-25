import React from 'react';
import './AltosHornosImages.css'; // Asegúrate de que esta importación sea correcta

const AltosHornos: React.FC = () => {
  return (
    <div className="fondoaltoshornos">
      <h1 className="titulo">ALTOS HORNOS</h1>
      <div className="imagenes">
        <img src="/images/Hornos1.jpg" alt="Hornos 1" />
        <img src="/images/Hornos2.jpg" alt="Hornos 2" />
        <img src="/images/Hornos3.jpg" alt="Hornos 3" />
        <img src="/images/Hornos4.jpg" alt="Hornos 4" />
      </div>
    </div>
  );
};

export default AltosHornos;
