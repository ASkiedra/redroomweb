import React, { Component } from "react";


const Contacts = () => {

    return (
        < div style ={{transition: '0.5s all',height: 'inherit', background: 'rgba(255, 255, 240, 0.651)'}}>

            <div className="fast-fix" >
                <div id="container-contacts-text-grid">
                    <div style={{ paddingBottom: '1rem' }}>
                        <span>RED ROOM</span>
                        <span style={{ color: 'red' }}>SHOWROOM</span>
                    </div>

                    <p>A. JUOZAPAVIČIAUS PR. 31, KAUNAS</p>
                    <p>LIETUVA, LT-45257/LITHUANIA</p>
                </div>

                <div id="container-contacts-text-grid" className="fast-fix-2">
                    <p>SUSISIEKIME:</p>
                    <p>+370 6 431 `0657</p>
                    <p>INFO@RED-ROOM.LT</p>
                </div>
            </div>
        </div >
    );
}

export default Contacts;