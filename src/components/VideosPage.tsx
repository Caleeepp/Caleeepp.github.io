import React from 'react';
import './VideosPage.css'; // Asegúrate de que la ruta sea correcta

const VideosPage: React.FC = () => {
  return (
    <div>
      <h1>VIDEOS</h1>

      {/* Contenedor para los videos */}
      <div className="video-container">
        <div className="video-item">
          <h2>Chapas y Fundición</h2>
          <video controls width="600"> {/* Ancho cambiado a 600px */}
            <source src="/videos/chapas-fundicion.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>

        <div className="video-item">
          <h2>El Hierro</h2>
          <video controls width="600"> {/* Ancho cambiado a 600px */}
            <source src="/videos/ElHierro.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>

        {/* Nuevo video de Altos Hornos */}
        <div className="video-item">
          <h2>Altos Hornos</h2>
          <video controls width="600"> {/* Ancho cambiado a 600px */}
            <source src="/videos/AltosHornos.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideosPage;

