import React from 'react';
import './Introduccion.css'; // Asegúrate de que esta ruta sea correcta

const Introduccion: React.FC = () => {
  return (
    <div className="introduccion-container">
      <h1>Introducción</h1>
      <p>
        La siderurgia es una rama fundamental de la industria que se encarga de la producción de acero a partir del mineral de hierro. Este proceso se lleva a cabo en altos hornos y hornos convertidores, donde se realiza la fundición y se pueden producir productos, aleaciones y diferentes clasificaciones de acero. Para optimizar las características del material, se emplean tratamientos termoquímicos que mejoran su resistencia y durabilidad. Asi mismo, la calidad del acero se asegura mediante ensayos destructivos y no destructivos, que permiten evaluar sus propiedades mecánicas y estructurales. La siderurgia es esencial para diversos sectores, como la construcción, la fabricación de maquinaria, etc.
      </p>
    </div>
  );
};

export default Introduccion;
