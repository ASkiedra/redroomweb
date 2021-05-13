import React from 'react';
import { useLocation, Link } from "react-router-dom";

const LanguagesContainer = ({ onlyOneLang, language, setLanguage }) => {
    const location = useLocation();

    // possible to add as many languages as necessary
    const languages = ['LT', 'EN'];

    return (
        <div id="lang-container">
            {
                // if only one language has to be displayed (e.g. mobile header)
                onlyOneLang ?
                    <Link to={`/${onlyOneLang}${location.pathname.substr(3)}`}
                        key={onlyOneLang}
                        onClick={() => setLanguage(onlyOneLang)}
                        className={language === onlyOneLang ? 'bold-text' : undefined}
                    >
                        {onlyOneLang}
                    </Link>

                    :

                    languages.map(lang => {
                        return <Link to={`/${lang}${location.pathname.substr(3)}`}
                            key={lang}
                            onClick={() => setLanguage(lang)}
                            className={language === lang ? 'bold-text' : undefined}
                        >
                            {lang}
                        </Link>
                    })
            }
        </div>
    )
}

export default LanguagesContainer;