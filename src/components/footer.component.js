import React from "react";


const Footer = () => {

    return (

        <footer>
            <div id="first-footer">
                <ul>
                    <li>Siųsti užklausą</li>
                    <li>Kaip išsirinkti tinkamus baldus savo namams?</li>
                    <li>Pristatymo sąlygos ir terminai</li>
                    <li>Medžiagos ir jų pavyzdžiai</li>
                </ul>
            
    </div>

            <div id="second-footer">
                <div id='div-for-text'>
                    <span>RED-ROOM</span>
                    <span style={{color: '#a4161a'}}>SHOWROOM</span>
                </div>
                <p>+370 6 431 0657</p>
                <p>A. Juozapavičiaus pr. 31, Kaunas, Lietuva, LT-45257</p>
                <p>info@red-room.lt</p>
            </div>

        </footer>

    );
}

export default Footer;