import React from 'react';
import { useLocation, Link } from "react-router-dom";

const LanguagesContainer = ({ language, setLanguage }) => {
    const location = useLocation();
    // possible to add as many languages as necessary
    const languages = ['LT', 'EN'];

    return (
        <div id="lang-container">
            {
                languages.map(lang => {
                    return <Link key={lang} to={`/${lang}${location.pathname.substr(3)}`}
                        onClick={() => setLanguage(lang)}
                        className={language === lang ? 'bold-text' : undefined}>
                        {lang}
                    </Link>
                })
            }
        </div>
    )
}

export default LanguagesContainer;