import React from 'react';
import './PresentacionesPage.css'; // Asegúrate de tener este archivo de estilo

const PresentacionesPage: React.FC = () => {
  return (
    <div className="presentaciones-container">
      <h1 style={{ color: '#000', textDecoration: 'underline' }}>Presentaciones</h1>

      {/* Presentación 1 */}
      <div className="presentacion-item">
        <h2>Presentación 1: El Hierro</h2>
        <iframe
          src="https://docs.google.com/presentation/d/1cbx_2cTM03nYgWAA0PHECTNVKaX7PKd-/preview"
          frameBorder="0"
          width="800"
          height="500"
          allowFullScreen
          title="Presentación 1"
        ></iframe>
      </div>

      {/* Presentación 2 */}
      <div className="presentacion-item">
        <h2>Presentación 2: Procesos Termoquímicos</h2>
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vRMg1EXAMPLE/embed?start=true&loop=true&delayms=5000"
          frameBorder="0"
          width="800"
          height="500"
          allowFullScreen
          title="Presentación 2"
        ></iframe>
      </div>

    </div>
  );
};

export default PresentacionesPage;

