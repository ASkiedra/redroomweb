import React from "react";
import { Link } from "react-router-dom";


const Footer = (props) => {

    return (

        <div id="stickyFooter">
            <div id="first-footer">
                <ul>
                    <li>
                        <Link class="footer-link" to={'/' + props.language + '/inquire'}>
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


        </div>

    );
}

export default Footer;
