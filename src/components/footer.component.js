import React from "react";


const Footer = (props) => {

    return (

        <footer>
            <div id="first-footer">
                <ul>
                    <li>
                        {
                            props.language === "LT" ? "Siųsti užklausą"
                                : props.language === "EN" && "Inquire"
                        }
                    </li>

                    <li>
                        {
                            props.language === "LT" ? "Kaip išsirinkti tinkamus baldus savo namams?"
                                : props.language === "EN" && "How to choose the correct furniture?"
                        }
                    </li>

                    <li>
                        {
                            props.language === "LT" ? "Pristatymo sąlygos ir terminai"
                                : props.language === "EN" && "Delivery information"
                        }
                    </li>

                    <li>
                        {
                            props.language === "LT" ? "Medžiagos ir jų pavyzdžiai"
                                : props.language === "EN" && "Materials and samples"
                        }
                    </li>
                </ul>

            </div>

            <div id="second-footer">
                <div id='div-for-text'>
                    <span>RED-ROOM</span>
                    <span style={{ color: '#a4161a' }}>SHOWROOM</span>
                </div>
                <p>+370 6 431 0657</p>
                <p>A. Juozapavičiaus pr. 31, Kaunas, Lietuva, LT-45257</p>
                <p>info@red-room.lt</p>
            </div>

        </footer>

    );
}

export default Footer;