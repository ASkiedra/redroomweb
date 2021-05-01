import React, { useState } from 'react';
import { Link } from "react-router-dom";


const btnClicked = (setNotHidden) => {
    localStorage.setItem('agreedToPP', true);
    setNotHidden();
}


const FirstTimeBox = ({ language }) => {
    const [notHidden, setNotHidden] = useState(true);

    return notHidden ?
        <div id="FirstTimeBox-container">
            <p>
                {
                    language === "EN" ?
                        'WE MAY USE COOKIES AND OTHER TRACKING TECHNOLOGIES FOR VARIOUS PURPOSES SUCH AS FUNCTIONALITY AND ANALYTICS. BY BROWSING THIS WEBSITE YOU AGREE WITH OUR '
                        :
                        'MES GALIME NAUDOTI SLAPUKUS (ANGL. „COOKIES“) IR KITAS INFORMACIJOS RINKIMO TECHNOLOGIJAS ĮVAIRIOMS PASKIRTIMS, KURIOS GALI APIMTI (BET TUO NEAPSIRIBOJA) SVETAINĖS FUNKCIONALUMĄ IR ANALITIKĄ. NAUDODAMIESI ŠIA SVETAINE, JŪS SUTINKATE SU MŪSŲ '
                }

                <Link to={`/${language}/PRIVACY POLICY`}>
                    {language === "EN" ? "PRIVACY POLICY." : "PRIVATUMO POLITIKA."}
                </Link>
            </p>

            <button onClick={() => { btnClicked(setNotHidden) }}>{language === "EN" ? "I AGREE" : "SUTINKU"}</button>
        </div>
        :
        null;
}

export default FirstTimeBox;