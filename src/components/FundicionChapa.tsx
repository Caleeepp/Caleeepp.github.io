import React from 'react';
import './FundicionChapaImages.css'; // Asegúrate de que esta importación sea correcta

const FundicionChapa: React.FC = () => {
  return (
    <div className="fondo-fundicion">
      <h1 className="titulo">FUNDICIÓN Y CHAPA</h1>
      <div className="imagenes">
        <img src="/images/Fundicion1.jpg" alt="Fundición 1" />
        <img src="/images/Fundicion2.jpg" alt="Fundición 2" />
        <img src="/images/Fundicion3.jpg" alt="Fundición 3" />
        <img src="/images/Fundicion4.jpg" alt="Fundición 4" />
        <img src="/images/Fundicion5.jpg" alt="Fundición 5" />
        <img src="/images/Fundicion6.jpg" alt="Fundición 6" />
        <img src="/images/Fundicion7.jpg" alt="Fundición 7" />
      </div>
    </div>
  );
};

export default FundicionChapa;
