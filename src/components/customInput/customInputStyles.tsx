import { CSSProperties } from 'react';

const fontFamily = "'Advent Pro', sans-serif";

export const inputStyle: CSSProperties = {
    width: '16.30vw',
    height: '4.07vh',
    boxSizing: 'border-box',
    borderRadius: '5px',
    outline: 'none',
    paddingLeft: '5%',
    fontSize: '12px',
    marginBottom: '5%',
    fontFamily: fontFamily, 
};

export const placeholderStyle: CSSProperties = {
    color: '#00000059',
};

export const imgStyle: CSSProperties = {
    width: '24px',
    height: '24px',
    cursor: 'pointer',
    position: 'absolute',
    right: '10px',
    top: '37%',
    transform: 'translateY(-50%)',
};
