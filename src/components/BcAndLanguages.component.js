import React from "react";
import { useLocation, Link } from "react-router-dom";
import translateMainCats, { translateSubCats, translateMainItems } from "./Translate.component";

const BcAndLanguages = (props) => {
    const location = useLocation();
    var modifiedPathname = [];

    // if breadcrumbs are longer than PAGRINDINIS/*PAGE*
    // example: PAGRINDINIS/*PAGE*/*CRITERIA*
    // 0th element is nonexistent because the string starts with /
    for (let i = location.pathname.split("/").length - 1; i > 0; i--)
        modifiedPathname[i - 2] = (location.pathname.split("/")[i]);

    // if the 3rd element of modifiedPathname is 'null' (a string because its a string in the url), a manufacturer exists and there is no need to translate it. 
    // it has to be !undefined and !null, because manufExists would be true even when modifiedPathname has <3 elements
    //if modifiedPathname[2] is undefined or 'null'', it means that a word before manufacturer exists therefore manufacturer wont be in the breadcrumbs
    var manufExists = modifiedPathname[3] !== 'null' && modifiedPathname[3] !== undefined && modifiedPathname[3] !== null && (modifiedPathname[2] === undefined || modifiedPathname[2] === 'null');


    var pathnameWO = "";
    for (let i = 3; i < location.pathname.length; i++)
        pathnameWO += location.pathname[i];



    // remove empty strings. possible to make into 1 line?
    modifiedPathname = modifiedPathname.filter(el => el !== "");
    modifiedPathname = modifiedPathname.filter(el => el !== "undefined" && el !== undefined);
    modifiedPathname = modifiedPathname.filter(el => el !== "null" && el !== null);

    var untranslatedPathname = [modifiedPathname[0], modifiedPathname[1]];
    // translation of the second word in the breadcrumbs
    if (props.language === "LT" && modifiedPathname[0] !== undefined)
        modifiedPathname[0] = translateMainItems(modifiedPathname[0]);


    // translation of the third word in the breadcrumbs. can be maincat, subcat, manuf ...
    if (props.language === "LT" && modifiedPathname[1] !== undefined && !manufExists)
        if (translateMainCats(modifiedPathname[1]) !== null)
            modifiedPathname[1] = translateMainCats(modifiedPathname[1]);
        else
            modifiedPathname[1] = translateSubCats(modifiedPathname[1]);

    return (

        <ul style={{ background: "transparent" }} id="bcnl-container">
            <div id="breadcrumbs-links">
                <Link to={"/" + props.language} style={{ paddingLeft: '1rem', transition: '0.55s', cursor: 'pointer', fontFamily: 'Roboto', color: ' rgba(0, 0, 0, 0.7501)' }}>
                    {/* kalba == lt? pagrindinis: main */}
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
                        <Link to={location.pathname.split(untranslatedPathname[1])[0] + untranslatedPathname[1]} style={{  transition: '0.55s', cursor: 'pointer', fontFamily: 'Roboto', color: 'rgba(0, 0, 0, 0.7501)', textTransform: 'uppercase' }}>
                            <h2 style={{fontWeight: 'bold'}}>
                                {modifiedPathname[1]}
                            </h2>
                        </Link>
                    </>
                }

            </div>

            <div id="lang-container">


                <div>
                </div>

                {props.language === "LT" ?
                    <>
                        <Link to={"/LT" + pathnameWO} onClick={() => props.setLanguage("LT")} style={{ fontFamily: 'Roboto', fontWeight: 'bold', color: ' rgba(0, 0, 0, 0.7501)' }}>
                            LT
                        </Link>

                        <Link to={"/EN" + pathnameWO} onClick={() => props.setLanguage("EN")} style={{ fontFamily: 'Roboto', color: ' rgba(0, 0, 0, 0.7501)' }}>
                            EN
                        </Link>
                    </>
                    : props.language === "EN" &&
                    <>

                        <Link to={"/LT" + pathnameWO} onClick={() => props.setLanguage("LT")} style={{ fontFamily: 'Roboto', color: ' rgba(0, 0, 0, 0.7501)' }}>
                            LT
            </Link>


                        <Link to={"/EN" + pathnameWO} onClick={() => props.setLanguage("EN")} style={{ fontFamily: 'Roboto', color: 'black', fontWeight: ' rgba(0, 0, 0, 0.7501)', }}>
                            EN
        </Link>
                    </>

                }
            </div>
        </ul >
    );
}

export default BcAndLanguages;
