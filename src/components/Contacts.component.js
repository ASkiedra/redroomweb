import React from 'react';

const Contacts = (props) => {
    return (
        < div style={{ height: 'inherit' }}>

            <div className="fast-fix" >
                <div id="container-contacts-text-grid">
                    <div id="redroom-large-text">
                        <span>RED-ROOM</span>
                        <span style={{ color: 'red' }}>SHOWROOM</span>
                    </div>

                    <p>A. JUOZAPAVIČIAUS PR. 31, KAUNAS</p>
                    <p>LIETUVA, LT-45257/LITHUANIA</p>
                </div>

                <div id="container-contacts-text-grid" className="fast-fix-2">
                    <p> {
                        props.match.params.lang === "LT" ? "SUSISIEKIME:" :
                            props.match.params.lang === "EN" && "GET IN TOUCH:"
                    }
                    </p>

                    <a href="tel:+37064310657">+370 643 10 657</a> 
                    <a href="mailto:info@red-room.lt">info@red-room.lt</a>
                </div>
            </div>
        </div >
    );
}


export default Contacts
