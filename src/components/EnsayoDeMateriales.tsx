import React from 'react';
import './EnsayoDeMaterialesImages.css'; // Asegúrate de que la ruta sea correcta

const EnsayoDeMateriales: React.FC = () => {
  return (
    <div className="ensayo-de-materiales-container">
      <h1>Ensayo de Materiales</h1>
      <div className="imagenes-ensayo">
        <img src="/images/ensayo1.jpg" alt="Ensayo Página 1" />
        <img src="/images/ensayo2.jpg" alt="Ensayo Página 2" />
        <img src="/images/ensayo3.jpg" alt="Ensayo Página 3" />
        <img src="/images/ensayo4.jpg" alt="Ensayo Página 4" />
        <img src="/images/ensayo5.jpg" alt="Ensayo Página 5" />
      </div>
    </div>
  );
};

export default EnsayoDeMateriales;
