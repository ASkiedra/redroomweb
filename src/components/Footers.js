import React from "react";
import { Link, useLocation } from "react-router-dom";
import facebookLogo from '../logos/facebook.png';
import instagramLogo from '../logos/instagram.png';


const Footer = ({ language }) => {
    return (
        <footer>
            <div id="second-footer">
                <div id='div-for-text'>
                    <span>RED-ROOM</span>
                    <span style={{ color: '#a4161a' }}>SHOWROOM</span>
                </div>

                <div id="social-media-logos">
                    <a href="https://www.facebook.com/redroom.lt/">
                        <img src={facebookLogo} />
                    </a>

                    <a href="https://www.facebook.com/redroom.lt/">
                        <img src={instagramLogo} />
                    </a>
                </div>

                <a href="tel:+37064310657">+370 643 10 657</a>

                <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/A.+Juozapavi%C4%8Diaus+pr.+31,+Kaunas+45257/@54.8668655,23.9344156,15z/data=!4m5!3m4!1s0x46e722ed909bb75d:0xf8d9bafe7a1e18c1!8m2!3d54.8696559!4d23.9405218">A. Juozapavičiaus pr. 31, Kaunas, Lietuva, LT-45257</a>

                <Link style={{ padding: '0' }} className="smaller-text centered" to={`/${language}/privacy policy`}>{language === "EN" ? 'PRIVACY POLICY' : 'PRIVATUMO POLITIKA'}</Link>

                <a href="mailto:info@red-room.lt">info@red-room.lt</a>
            </div>
        </footer>
    );
}

export const StickyFooter = ({ language }) => {
    const url = useLocation().pathname;

    // if there are at least 6 '/' characters, it means the user is on a product page
    const productName = url.split('/')[2] === 'products' && url.split('/').length >= 6 && url.split('/')[5] + ' ' + url.split('/')[6] + '. ';


    return (
        <div id="stickyFooter">
            <div id="first-footer">
                <ul>
                    <Link className="footer-link" to={
                        {
                            pathname: '/' + language + '/inquire',
                            productName: productName
                        }}>

                        <li>
                            {
                                language === "LT" ? "Siųsti užklausą dėl prekės"
                                    : language === "EN" && "Send an inquiry"}
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Footer;