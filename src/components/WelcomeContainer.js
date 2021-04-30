import React from 'react';
import { Link } from "react-router-dom";
import LanguagesContainer from './LanguagesContainer';

const WelcomeContainer = ({ language, setLanguage }) => {
    return (
        <div id="welcome-container">
            <span>BY PRESSING THE "AGREE" BUTTON YOU AGREE WITH OUR WEBSITE'S <Link to={`${language}/PRIVACY POLICY`}>PRIVACY POLICY</Link>.</span>
            <LanguagesContainer language={language} setLanguage={{ setLanguage }} />
        </div>
    );
}

export default WelcomeContainer;