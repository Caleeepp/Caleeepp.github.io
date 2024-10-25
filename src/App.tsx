import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import TemasPage from './components/TemasPage';
import VideosPage from './components/VideosPage';
import PresentacionesPage from './components/PresentacionesPage'; // Nueva importación
import TemaDetailPage from './components/TemaDetailPage';
import InformeTermoquimico from './components/InformeTermoquimico';
import ElHierro from './components/ElHierro';
import EnsayoDeMateriales from './components/EnsayoDeMateriales';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <nav className="horizontal-nav">
          <ul>
            <li><Link to="/">Introducción</Link></li>
            <li><Link to="/temas">Temas</Link></li>
            <li><Link to="/videos">Videos</Link></li>
            <li><Link to="/presentaciones">Presentaciones</Link></li> {/* Nuevo enlace */}
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route 
              path="/" 
              element={
                <div>
                  <h1 style={{ color: '#000', textDecoration: 'underline' }}>INTRODUCCIÓN</h1>
                  <h2 className="intro-text" style={{ color: '#000', textTransform: 'uppercase' }}>
                  La siderurgia es una rama fundamental de la industria que se encarga de la producción de acero a partir del mineral de hierro. Este proceso se lleva a cabo en altos hornos y hornos convertidores, donde se realiza la fundición y se pueden producir productos, aleaciones y diferentes clasificaciones de acero. Para optimizar las características del material, se emplean tratamientos termoquímicos que mejoran su resistencia y durabilidad. Asimismo, la calidad del acero se asegura mediante ensayos destructivos y no destructivos, que permiten evaluar sus propiedades mecánicas y estructurales. La  siderurgia es esencial para diversos sectores, como la construcción, la fabricación de maquinaria, etc.
                  </h2>

                  {/* Sección de Participantes */}
                  <section className="participants-section">
                    <h2 style={{ color: '#000', textDecoration: 'underline' }}>Participantes</h2>
                    <ul style={{ color: '#000' }}>
                      <li>Pia Santillan</li>
                      <li>Morena Perez</li>
                      <li>Caleb Manzaneda</li>
                      <li>Lautaro Lagraña</li>
                    </ul>
                  </section>
                </div>
              } 
            />
            <Route path="/temas" element={<TemasPage />} />
            <Route path="/temas/:temaId" element={<TemaDetailPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/presentaciones" element={<PresentacionesPage />} /> {/* Nueva ruta */}
            <Route path="/informe-termoquimico" element={<InformeTermoquimico />} />
            <Route path="/el-hierro" element={<ElHierro />} />
            <Route path="/ensayo-materiales" element={<EnsayoDeMateriales />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
