import { useState } from 'react';
import inicioIcon from '../../assets/inicio.png';
import contactoIcon from '../../assets/contatos.svg';
import relatorioIcon from '../../assets/relatórios.svg';
import inicioActiveIcon from '../../assets/inicio-active.svg';
import contactoActiveIcon from '../../assets/contatos-active.png';
import relatorioActiveIcon from '../../assets/ralatórios-active.png';
import { ButtonStates } from '../../models/buttonStates'; 

interface SidebarStyles {
    sidebarStyle: React.CSSProperties;
    logoContainerStyle: React.CSSProperties;
    logoStyle: React.CSSProperties;
    iconStyle: React.CSSProperties;
    defaultButtonStyle: React.CSSProperties;
}

interface UseSidebarStylesProps {
    onButtonClick: (buttonName: keyof ButtonStates) => void;
}

const useSidebarStyles = (props: UseSidebarStylesProps): { handleButtonClick: (buttonName: keyof ButtonStates) => void; getDynamicButtonStyle: (buttonName: keyof ButtonStates) => React.CSSProperties; getIcon: (buttonName: keyof ButtonStates) => string; styles: SidebarStyles } => {
    const [buttonStates, setButtonStates] = useState<ButtonStates>({
        inicio: true,
        relatorio1: false,
        contacto: false,
        contacto1: false,
        contacto2: false,
        contacto3: false,
    });

    const handleButtonClick = (buttonName: keyof ButtonStates) => {
        setButtonStates(() => {
            const newState: ButtonStates = {
                inicio: false,
                relatorio1: false,
                contacto: false,
                contacto1: false,
                contacto2: false,
                contacto3: false,
            };
    
            newState[buttonName] = true;
    
            return newState;
        });
    
        props.onButtonClick(buttonName);
    };
    

    const getDynamicButtonStyle = (buttonName: keyof ButtonStates): React.CSSProperties => ({
        border: 'none',
        padding: '15px',
        backgroundColor: buttonStates[buttonName] ? '#F3F3F3' : '#2EAFB2',
        color: buttonStates[buttonName] ? 'black' : 'white',
        borderRadius: buttonStates[buttonName] ? '5px 0 0 5px' : '5px', 
        width: buttonStates[buttonName] ? '96%' : '90%',
        height: '4.63vh !important',
        display: 'flex',
        alignItems: 'center',
        alignContent: 'flex-start',
        margin: '0 0 5% 10%',
        cursor: 'pointer',
        fontWeight: '600',
        fontSize:'14px'
    });

    const getIcon = (buttonName: keyof ButtonStates): string => {
        const isActive = buttonStates[buttonName];
        switch (buttonName) {
            case 'inicio':
                return isActive ? inicioActiveIcon : inicioIcon;
            case 'relatorio1':
                return isActive ? relatorioActiveIcon : relatorioIcon;
            case 'contacto':
            case 'contacto1':
            case 'contacto2':
            case 'contacto3':
                return isActive ? contactoActiveIcon : contactoIcon;
            default:
                return '';
        }
    };

    const sidebarStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gridColumn: '1fr',
        padding: '5%',
        backgroundColor: 'white',
        minHeight: '100vh',
        width: '100%',
        boxSizing: 'border-box',
    };

    const logoContainerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        boxSizing: 'border-box',
    };

    const logoStyle: React.CSSProperties = {
        boxSizing: 'border-box',
        height: 'auto',
        width: '9.90vw',
        margin: '20% 0 20% 0',
    };

    const iconStyle: React.CSSProperties = {
        color: 'white',
        width: 'auto',
        maxWidth: '1.09vw',
        maxHeight:'1.94vh',
        marginRight: '6px',
    };

    const defaultButtonStyle: React.CSSProperties = {
        border: 'none',
        padding: '10px',
        backgroundColor: '#2EAFB2',
        borderRadius: '5px', 
        color: 'white',
        margin: '0 0 5% 10%',
        display: 'flex',
        alignItems: 'center',
        alignContent: 'flex-start',
        width: '90%',
        height: '4.63vh !important',
        transition: 'width 0.3s ease',
        cursor: 'pointer',
        fontWeight: '600',
        fontSize: '14px !important'
    };

    const styles: SidebarStyles = {
        sidebarStyle,
        logoContainerStyle,
        logoStyle,
        iconStyle,
        defaultButtonStyle,
    };

    return {
        handleButtonClick,
        getDynamicButtonStyle,
        getIcon,
        styles,
    };
};

export default useSidebarStyles;
