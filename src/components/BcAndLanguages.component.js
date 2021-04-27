import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import translateMainCats, { translateSubCats, translateMainItems } from "../components/translate";

const BcAndLanguages = (props) => {
    const location = useLocation();
    let modifiedPathname = [],
        pathnameWO = "";

    // if you go back, the boldness doesnt change without this, e.g. you can be on /lt/products after being in /en/products and only EN will be bold
    useEffect(() => {
        const language = (location.pathname[1] + location.pathname[2]).toUpperCase();

        if (language === "LT") {
            document.getElementById('bc-en').classList.remove('bold-text');
            document.getElementById('bc-lt').classList.add('bold-text');
        }
        else if (language === "EN") {
            document.getElementById('bc-en').classList.add('bold-text');
            document.getElementById('bc-lt').classList.remove('bold-text');
        }
    }, [location]);



    // 0th element is nonexistent because the string starts with /
    for (let i = location.pathname.split("/").length - 1; i > 0; i--)
        modifiedPathname[i - 2] = (location.pathname.split("/")[i]);

    // if the 3rd element of modifiedPathname is 'null' (a string because its a string in the url), a manufacturer exists and there is no need to translate it. 
    // it has to be !undefined and !null, because manufExists would be true even when modifiedPathname has <3 elements
    // if modifiedPathname[2] is undefined or 'null'', it means that a word before manufacturer exists therefore manufacturer wont be in the breadcrumbs
    const manufExists = modifiedPathname[3] !== 'null' && modifiedPathname[3] !== undefined && modifiedPathname[3] !== null && (modifiedPathname[2] === undefined || modifiedPathname[2] === 'null');


    for (let i = 3; i < location.pathname.length; i++)
        pathnameWO += location.pathname[i];



    // remove empty strings.
    modifiedPathname = modifiedPathname.filter(el => el !== "" && el !== "undefined" && el !== undefined && el !== "null" && el !== null);

    const untranslatedPathname = [modifiedPathname[0], modifiedPathname[1]];

    // translation of the second word in the breadcrumbs
    if (props.language === "LT" && modifiedPathname[0] !== undefined)
        modifiedPathname[0] = translateMainItems(modifiedPathname[0]);


    // translation of the third word in the breadcrumbs. can be maincat, subcat, manuf. If it's the manufacturer - no translation is required.
    if (props.language === "LT" && modifiedPathname[1] !== undefined && !manufExists)
        if (translateMainCats(modifiedPathname[1]) !== null)
            modifiedPathname[1] = translateMainCats(modifiedPathname[1]);
        else
            modifiedPathname[1] = translateSubCats(modifiedPathname[1]);

    return (
        <ul style={{ background: "transparent" }} id="bcnl-container">
            <div id="breadcrumbs-links">
                <Link to={"/" + props.language} style={{ paddingLeft: '1rem', transition: '0.55s', cursor: 'pointer', fontFamily: 'Roboto', color: ' rgba(0, 0, 0, 0.7501)' }}>
                    {props.language === "LT" ? "PAGRINDINIS" : "MAIN"}
                </Link>

                {/* length is > 0 when at least one item is present. the item starts at index 0, therefore untranslatedPathname[0] is required */}
                {modifiedPathname.length > 0 &&
                    <>
                        <span style={{ color: 'rgba(0, 0, 0, 0.7501)' }}>/</span>
                        <Link to={"/" + props.language + "/" + untranslatedPathname[0]} style={{ transition: '0.55s', cursor: 'pointer', fontFamily: 'Roboto', color: ' rgba(0, 0, 0, 0.7501)', textTransform: 'uppercase' }}>
                            <h1>
                                {modifiedPathname[0]}
                            </h1>
                        </Link>
                    </>
                }



                {modifiedPathname.length > 1 && modifiedPathname[1] !== "null" && modifiedPathname[1] !== "undefined" &&
                    <>
                        <span style={{ color: 'rgba(0, 0, 0, 0.7501)' }}>/</span>
                        <Link to={location.pathname.split(untranslatedPathname[1])[0] + untranslatedPathname[1]} style={{ transition: '0.55s', cursor: 'pointer', fontFamily: 'Roboto', color: 'rgba(0, 0, 0, 0.7501)', textTransform: 'uppercase' }}>
                            <h2 style={{ fontWeight: 'bold' }}>
                                {modifiedPathname[1]}
                            </h2>
                        </Link>
                    </>
                }

            </div>

            <div id="lang-container">
                <div>
                    {/* planning to implement some more functionality here */}
                </div>

                {/* bold by default in case of no language (e.g. red.room.lt has no lang pathname) */}
                <Link className="bold-text" id="bc-lt" to={"/LT" + pathnameWO} onClick={() => props.setLanguage("LT")} style={{ fontFamily: 'Roboto', color: ' rgba(0, 0, 0, 0.7501)' }}>
                    LT
                </Link>

                <Link id="bc-en" to={"/EN" + pathnameWO} onClick={() => props.setLanguage("EN")} style={{ fontFamily: 'Roboto', color: ' rgba(0, 0, 0, 0.7501)' }}>
                    EN
                </Link>
            </div>
        </ul >
    );
}

export default BcAndLanguages;