import React from "react";
import { Link, useLocation } from "react-router-dom";


const Footer = (props) => {
    return (
        <footer>
            <div id="second-footer">
                <div id='div-for-text'>
                    <span>RED-ROOM</span>
                    <span style={{ color: '#a4161a' }}>SHOWROOM</span>
                </div>

                <a href="tel:+37064310657">+370 6 431 0657</a>

                <div style={{ display: 'grid', gridTemplateColumns: '40% 60%' }}>
                    <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/A.+Juozapavi%C4%8Diaus+pr.+31,+Kaunas+45257/@54.8668655,23.9344156,15z/data=!4m5!3m4!1s0x46e722ed909bb75d:0xf8d9bafe7a1e18c1!8m2!3d54.8696559!4d23.9405218">A. Juozapavičiaus pr. 31, Kaunas, Lietuva, LT-45257</a>
                    <Link to={`/${props.language}/privacy policy`}>{props.language === "EN" ? 'PRIVACY POLICY' : 'PRIVATUMO POLITIKA'}</Link>
                </div>

                <a href="mailto:info@red-room.lt">info@red-room.lt</a>
            </div>
        </footer>
    );
}

export const StickyFooter = (props) => {
    const url = useLocation().pathname;

    // if there are at least 6 '/' characters, it means the user is on a product page
    const productName = url.split('/')[2] === 'products' && url.split('/').length >= 6 && url.split('/')[5] + ' ' + url.split('/')[6] + '. ';


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
                </ul>
            </div>
        </div>
    );
}

export default Footer;