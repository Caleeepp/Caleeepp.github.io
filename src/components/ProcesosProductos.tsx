import React from 'react';
import './ProcesosProductosImages.css'; // Asegúrate de que esta línea esté escrita correctamente

const ProcesosProductos: React.FC = () => {
  return (
    <div className="contenedor-procesos">
      <h1 className="titulo">PROCESOS SIDERÚRGICOS</h1>
      <div className="imagenes">
        <img src="/images/Procesos1.jpg" alt="Proceso 1" />
        <img src="/images/Procesos2.jpg" alt="Proceso 2" />
        <img src="/images/Procesos3.jpg" alt="Proceso 3" />
        <img src="/images/Procesos4.jpg" alt="Proceso 4" />
        <img src="/images/Procesos5.jpg" alt="Proceso 5" />
      </div>
    </div>
  );
};

export default ProcesosProductos;

