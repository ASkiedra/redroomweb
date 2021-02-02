import React from "react";
import { Link } from "react-router-dom";


const Footer = (props) => {

    return (

        <footer>
            <div id="first-footer">
                <ul>
                    <li>
                        <Link class="footer-link" to={'/' + props.language + '/contacts'}>
                            {
                                props.language === "LT" ? "Siųsti užklausą"
                                    : props.language === "EN" && "Inquire"
                            }
                        </Link>
                    </li>

                    <li>
                        {
                            props.language === "LT" ? "Pristatymo sąlygos ir terminai"
                                : props.language === "EN" && "Delivery information"
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
