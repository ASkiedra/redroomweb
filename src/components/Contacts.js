import React from 'react';

const Contacts = ({ language }) => {
    return (
        <div style={{ height: 'inherit', marginTop: '1rem' }}>
            <div className="contacts-additional-container" >
                <div id="container-contacts-text-grid">
                    <div id="redroom-large-text">
                        <span>RED-ROOM</span>
                        <span style={{ color: 'red' }}>SHOWROOM</span>
                    </div>

                    <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/A.+Juozapavi%C4%8Diaus+pr.+31,+Kaunas+45257/@54.8668655,23.9344156,15z/data=!4m5!3m4!1s0x46e722ed909bb75d:0xf8d9bafe7a1e18c1!8m2!3d54.8696559!4d23.9405218">A. JUOZAPAVIČIAUS PR. 31, KAUNAS</a>
                    <p>LIETUVA, LT-45257/LITHUANIA</p>
                </div>

                <div id="container-contacts-text-grid" className="contacts-additional-container-2">
                    <p style={{ fontWeight: '550' }}> {
                        language === "EN" ? "GET IN TOUCH:" : "SUSISIEKIME:"
                    }
                    </p>

                    <a style={{ paddingBottom: '0.55rem' }} href="tel:+37064310657">+370 643 10 657</a>
                    <a href="mailto:info@red-room.lt">info@red-room.lt</a>
                    <p>MB „Studio Red" {language === "EN" ? "Company code " : "Įmonės kodas "}305434886</p>
                    <p>TAIKOS PR. 61-51, LT-50433 KAUNAS</p>
                    <a style={{ fontWeight: 'bold' }} target="_blank" rel="noreferrer" href="https://rekvizitai.vz.lt/imone/studio_red/">REKVIZITAI</a>
                </div>


            </div>
        </div >
    );
}

export default Contacts;