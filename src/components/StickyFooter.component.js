import React from "react";
import { Link } from "react-router-dom";


const Footer = (props) => {

    return (

        <div id="stickyFooter">
            <div id="first-footer">
                <ul>
                        <Link class="footer-link" to={'/' + props.language + '/inquire'}>
                    <li>
                            {
                                props.language === "LT" ? "Siųsti užklausą"
                                    : props.language === "EN" && "Inquire"
                            }
                    </li>
                        </Link>

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
