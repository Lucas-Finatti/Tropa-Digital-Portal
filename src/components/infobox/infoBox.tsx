import React from 'react';
import './infoBox.css';
import calendary from '../../assets/calendary.png'

const InfoBox = () => {
    const storedData = localStorage.getItem('inputBoxData');
    let inputBoxData

    if (storedData) {
        inputBoxData = JSON.parse(storedData);
    }
    
    const selectedItem = inputBoxData[0];
    
    return (
        <div className="info-box-content">
            <div className="info-box-container">
                <img className="info-img" src={selectedItem.bgImg} />
                <h2 className="info-box-title">{selectedItem.title}</h2>
                <p className="info-box-description">{selectedItem.subTitle}</p>
                <div className='wireframe'>
                    <img className='wireframe-img' src={calendary} alt="Calendary" />
                    <a className='wireframe-text'>{selectedItem.time}</a>
                </div>
            </div>
        </div>
    );
};

export default InfoBox;
