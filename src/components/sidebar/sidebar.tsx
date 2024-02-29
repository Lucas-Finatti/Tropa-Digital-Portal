import React from 'react';
import logo from '../../assets/tropa-digital-logo.png';
import useSidebarStyles from './useSidebarStyles';
import { ButtonStates } from '../../models/buttonStates';
import './sidebar.css'

interface SidebarProps {
    onButtonClick: (buttonName: keyof ButtonStates) => void;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
    const { handleButtonClick, getDynamicButtonStyle, getIcon, styles } = useSidebarStyles(props);

    return (
        <div className="sidebar" style={styles.sidebarStyle}>
            <div style={styles.logoContainerStyle}>
                <img style={styles.logoStyle} src={logo} alt="Logo" />
            </div>
            <button
                style={getDynamicButtonStyle('inicio')}
                onClick={() => handleButtonClick('inicio')}
            >
                <img src={getIcon('inicio')} style={styles.iconStyle} alt="Icon" /> <a className='sidebar-button'>Início</a>
            </button>
            <button
                style={getDynamicButtonStyle('contacto')}
                onClick={() => handleButtonClick('contacto')}
            >
                <img src={getIcon('contacto')} style={styles.iconStyle} alt="Icon" /><a className='sidebar-button'>Contato</a>
            </button>
            <button
                style={getDynamicButtonStyle('relatorio1')}
                onClick={() => handleButtonClick('relatorio1')}
            >
                <img src={getIcon('relatorio1')} style={styles.iconStyle} alt="Icon" /> <a className='sidebar-button'>Relatório</a>
            </button>
            <button
                style={getDynamicButtonStyle('contacto1')}
                onClick={() => handleButtonClick('contacto1')}
            >
                <img src={getIcon('contacto1')} style={styles.iconStyle} alt="Icon" /> <a className='sidebar-button'>Contato</a>
            </button>
            <button
                style={getDynamicButtonStyle('contacto2')}
                onClick={() => handleButtonClick('contacto2')}
            >
                <img src={getIcon('contacto2')} style={styles.iconStyle} alt="Icon" /> <a className='sidebar-button'>Contato</a>
            </button>
            <button
                style={getDynamicButtonStyle('contacto3')}
                onClick={() => handleButtonClick('contacto3')}
            >
                <img src={getIcon('contacto3')} style={styles.iconStyle} alt="Icon" /> <a className='sidebar-button'>Contato</a>
            </button>
        </div>
    );
};

export default Sidebar;
