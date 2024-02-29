import React, { useEffect, useState } from 'react';
import InfoBox from '../../components/infobox/infoBox';
import './inicio.css'

const Inicio = () => {



  return (
    <div className='header'>
      <div className='inicio-container'>
        <a className='inicio-title'>
          Olá <span className='inicio-span'>Usuário</span>
        </a>
        <div className='inicio-content'>
          <InfoBox />
          <InfoBox />
          <InfoBox />
          <InfoBox />
          <InfoBox />
          <InfoBox />
          <InfoBox />
          <InfoBox />
          <InfoBox />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
