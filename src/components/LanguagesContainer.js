import React from 'react';
import { useLocation, Link } from "react-router-dom";

const LanguagesContainer = ({ onlyOneLang, language, setLanguage }) => {
    const location = useLocation();
    // possible to add as many languages as necessary
    const languages = ['LT', 'EN'];

    return (
        <div id="lang-container">
            {
                onlyOneLang ?
                    <Link key={onlyOneLang} to={`/${onlyOneLang}${location.pathname.substr(3)}`}
                        onClick={() => setLanguage(onlyOneLang)}
                        className={language === onlyOneLang ? 'bold-text' : undefined}>
                        {onlyOneLang}
                    </Link>

                    :

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