import React  from "react";
import {useLocation} from "react-router-dom";
const BcAndLanguages = () => {
    const location = useLocation();

    return (
        <ul style={{ background: 'rgba(255, 255, 240, 0.651)' }} id="bcnl-container">

            {/*  if kalba === lt {PAGRINDINIS/INTERJERAS*/}
            <p style={{ paddingLeft: '1rem', transition: '0.55s', cursor: 'pointer', fontFamily: 'Roboto', color:  'black', textTransform: 'uppercase' }}>pagrindinis{location.pathname}</p>
            {/* if kalba === en {MAIN/INTERIOR} */}

            <div style={{ paddingRight: '1rem', right: '1', display: 'grid', gridTemplateColumns: '90% 5% 5%' }}>
                <div>
                </div>
                <li style={{ transition: '0.55s', fontFamily: 'Roboto', fontWeight: 'bold', color:  'black' }}>
                    LT
                    </li>


                <li style={{ transition: '0.55s', fontFamily: 'Roboto', color:  'black' }}>
                    EN
                </li>
            </div>
        </ul>
    );
}

export default BcAndLanguages;