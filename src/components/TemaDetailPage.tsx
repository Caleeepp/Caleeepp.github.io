import React from 'react';
import { useParams } from 'react-router-dom';
import ElAcero from './ElAcero';
import InformeTermoquimico from './InformeTermoquimico';
import FundicionChapa from './FundicionChapa';
import AltosHornos from './AltosHornos';
import ProcesosProductos from './ProcesosProductos';

const TemaDetailPage: React.FC = () => {
  const params = useParams<{ temaId: string }>();
  const temaId = params.temaId;

  return (
    <div>
      {/* Eliminamos el título que aparece en minúsculas */}
      {temaId === "el-acero" && <ElAcero />}
      {temaId === "informe-termoquimico" && <InformeTermoquimico />}
      {temaId === "fundicion-chapa" && <FundicionChapa />}
      {temaId === "altos-hornos" && <AltosHornos />}
      {temaId === "procesos-productos" && <ProcesosProductos />}
    </div>
  );
};

export default TemaDetailPage;
