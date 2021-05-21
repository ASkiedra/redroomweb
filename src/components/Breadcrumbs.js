import React from "react";
import { useLocation, Link } from "react-router-dom";

import translateMainCats, { translateSubCats, translateMainItems } from "../modules/translate";
import LanguagesContainer from './LanguagesContainer';

const Breadcrumbs = ({ language, setLanguage }) => {
    const location = useLocation();
    let modifiedPathname = [];

    // form a string without '/' and language and falsy values
    // 0th element is nonexistent because the string starts with /
    for (let i = location.pathname.split("/").length - 1; i > 1; i--)
        modifiedPathname[i - 2] = (location.pathname.split("/")[i]);

    modifiedPathname = modifiedPathname.filter(el => el)

    // used for links to clickable breadcrumbs' words
    const untranslatedPathname = [modifiedPathname[0], modifiedPathname[1]];

    // translate breadcrumbs
    if (language === "LT")
        // only 2 strings (0, 1) need to be translated for the breadcrumbs. the first one is always 'PAGRINDINIS' or 'MAIN'
        for (let i = 0; i < 2; i++)
            if (modifiedPathname[i])
                if (translateMainItems(modifiedPathname[i]))
                    modifiedPathname[i] = translateMainItems(modifiedPathname[i]);
                else if (translateSubCats(modifiedPathname[i]))
                    modifiedPathname[i] = translateSubCats(modifiedPathname[i]);
                else if (translateMainCats(modifiedPathname[i]))
                    modifiedPathname[i] = translateMainCats(modifiedPathname[i]);

    return (
        <ul id="breadcrumbs-container">
            <nav id="breadcrumbs-links">
                <Link to={`/${language}`} style={{ paddingLeft: '1rem' }}>
                    {language === "LT" ? "PAGRINDINIS" : "MAIN"}
                </Link>

                {/* length is > 0 when at least one item is present. the item starts at index 0, therefore untranslatedPathname[0] is required */}
                {modifiedPathname.length > 0 &&
                    <>
                        <span>/</span>
                        <Link to={`/${language}/${untranslatedPathname[0]}`}>
                            {/* using headings because this particular website will not have headings on most pages due to their simplicity and headings in the breadcrumbs component (which is loaded in every route) will boost the page's SEO */}
                            <h1>
                                {/* client asked to change 'products' to 'furniture' everywhere therefore a workaround is needed for the breadcrumbs which reads the URL */}
                                {/* restructuring the whole routing system could cause bugs so this is the best solution */}
                                {
                                    language === "LT" ?
                                        modifiedPathname[0].toUpperCase() === "PRODUKTAI" ? 'BALDAI' : modifiedPathname[0]
                                        :
                                        modifiedPathname[0].toUpperCase() === "PRODUCTS" ? 'FURNITURE' : modifiedPathname[0]
                                }
                            </h1>
                        </Link>
                    </>}



                {modifiedPathname.length > 1 &&
                    <>
                        <span>/</span>
                        <Link to={location.pathname.split(untranslatedPathname[1])[0] + untranslatedPathname[1]} >
                            <h2 style={{ fontWeight: 'bold' }}>
                                {modifiedPathname[1]}
                            </h2>
                        </Link>
                    </>}
            </nav>

            <LanguagesContainer language={language} setLanguage={setLanguage} />
        </ul >
    );
}

export default Breadcrumbs;