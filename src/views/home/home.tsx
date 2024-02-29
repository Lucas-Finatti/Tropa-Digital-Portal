import React, { useState } from 'react';
import { useAuth } from '../../auth/authContext'; 
import { Navigate } from 'react-router-dom';
import Sidebar from '../../components/sidebar/sidebar'
import { ButtonStates } from '../../models/buttonStates';
import './home.css'
import Inicio from '../../components/inicio/inicio';
import Relatorios from '../../components/relatorios/relatorios';
import Contatos from '../../components/contatos/contatos';

const Home: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [activeButton, setActiveButton] = useState<keyof ButtonStates>('inicio');

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="home">
      <div className="sidebar">
        <Sidebar onButtonClick={(buttonName) => setActiveButton(buttonName)} />
      </div>
      <div>
        {activeButton === 'inicio' && <Inicio />}
        {activeButton === 'contacto' && <Contatos />}
        {activeButton === 'relatorio1' && <Relatorios />}
        {activeButton === 'contacto1' && <Contatos />}
        {activeButton === 'contacto2' && <Contatos />}
        {activeButton === 'contacto3' && <Contatos />}
      </div>
    </div>
  );
};

export default Home;