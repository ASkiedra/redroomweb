import { useLocation } from 'react-router-dom'
import React, { Component } from "react";


const BcAndLanguages = () => {
    const location = useLocation();


    var spalva = 'black',
        backgroundas = 'white';

    if (location.pathname === '/contacts') {
        backgroundas = 'rgba(255, 255, 240, 0.651)';
    }
    else {
        spalva = 'rgba(0, 0, 0, 0.751)';
        backgroundas = '#E4E9ED';
    }
    return (
        <ul style={{ background: backgroundas }} id="bcnl-container">

            {/*  if kalba === lt {PAGRINDINIS/INTERJERAS*/}
            <p style={{ paddingLeft: '1rem', transition: '0.55s', cursor: 'pointer', fontFamily: 'Roboto', color: spalva, textTransform: 'uppercase' }}>pagrindinis{location.pathname}</p>
            {/* if kalba === en {MAIN/INTERIOR} */}

            <div style={{ paddingRight: '1rem', right: '1', display: 'grid', gridTemplateColumns: '90% 5% 5%' }}>
                <div>
                </div>
                <li style={{ transition: '0.55s', fontFamily: 'Roboto', fontWeight: 'bold', color: spalva }}>
                    LT
                    </li>


                <li style={{ transition: '0.55s', fontFamily: 'Roboto', color: spalva }}>
                    EN
                </li>
            </div>
        </ul>
    );
}

export default BcAndLanguages;