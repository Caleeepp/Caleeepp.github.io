import React from 'react';
import './TemasPage.css'; // Asegúrate de que esta importación sea correcta
import { Link } from 'react-router-dom'; // Usa Link para las rutas

const TemasPage: React.FC = () => {
  return (
    <div className="temas-container">
      <div className="temas-box">
        <h2>Temas</h2>
        <ul>
          <li><Link to="/temas/altos-hornos">Altos Hornos y Hornos Convertidores</Link></li>
          <li><Link to="/temas/el-acero">El Acero</Link></li>
          <li><Link to="/temas/fundicion-chapa">Fundición y Chapa</Link></li>
          <li><Link to="/temas/informe-termoquimico">Informe Termoquímico</Link></li>
          <li><Link to="/temas/procesos-productos">Procesos y Productos Siderúrgicos</Link></li>
          <li><Link to="/el-hierro">El Hierro</Link></li> {/* Enlace correcto para El Hierro */}
          <li><Link to="/ensayo-materiales">Ensayo de Materiales</Link></li> {/* Enlace correcto para Ensayo de Materiales */}
        </ul>
      </div>
    </div>
  );
};

export default TemasPage;
