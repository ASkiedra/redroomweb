import React from "react";
import { Link, useLocation } from "react-router-dom";

const StickyFooter = (props) => {
    const url = useLocation().pathname;
    let productName;

    // if there are at least 6 '/' characters, it means the user is on a product page
    if (url.split('/')[2] === 'products' && url.split('/').length >= 6)
        productName = url.split('/')[5] + ' ' + url.split('/')[6] + '. ';

    return (
        <div id="stickyFooter">
            <div id="first-footer">
                <ul>
                    <Link className="footer-link" to={
                        {
                            pathname: '/' + props.language + '/inquire',
                            productName: productName
                        }
                    }>
                        <li>
                            {
                                props.language === "LT" ? "Siųsti užklausą dėl prekės"
                                    : props.language === "EN" && "Send an inquiry"
                            }
                        </li>
                    </Link>
{/* 
                    <Link className="footer-link" to={'/' + props.language + '/delivery'}>
                        <li>
                            {
                                props.language === "LT" ? "Pristatymo sąlygos ir terminai"
                                    : props.language === "EN" && "Delivery information"
                            }
                        </li>
                    </Link> */}

                </ul>

            </div>


        </div>

    );
}

export default StickyFooter;