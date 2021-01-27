import React from "react";
import { useLocation, Link } from "react-router-dom";

const BcAndLanguages = (props) => {
    const location = useLocation();
    var modifiedPathname = [];


    // if any location is present ( [0] is always /, so im checking the 1st element), e.g. /lt or /en
    if (location.pathname[1] !== undefined)
        if (location.pathname[1].toUpperCase() + location.pathname[2].toUpperCase() === "LT" || location.pathname[1].toUpperCase() + location.pathname[2].toUpperCase() === "EN")
            props.setLanguage(location.pathname[1].toUpperCase() + location.pathname[2].toUpperCase())

    // if breadcrumbs are longer than PAGRINDINIS/*PAGE*
    // example: PAGRINDINIS/*PAGE*/*CRITERIA*
    // 0th element is nonexistent because the string starts with /

    for (let i = location.pathname.split("/").length - 1; i > 0; i--)
        modifiedPathname[i - 2] = (location.pathname.split("/")[i]);


    var pathnameWO = "";
    for (let i = 3; i < location.pathname.length; i++)
        pathnameWO += location.pathname[i];


    // remove empty strings 
    modifiedPathname = modifiedPathname.filter(el => el !== "");
    modifiedPathname = modifiedPathname.filter(el => el !== "undefined" && el !== undefined);
    
    var untranslatedPathname = [modifiedPathname[0], modifiedPathname[1]];

    // translation of the second word in the breadcrumbs
    if (props.language === "LT" && modifiedPathname[0] !== undefined)
        switch (modifiedPathname[0].toUpperCase()) {
            case "CONTACTS":
                modifiedPathname[0] = "KONTAKTAI";
                break;

            case "MANUFACTURERS":
                modifiedPathname[0] = "GAMINTOJAI";
                break;

            case "INTERIOR":
                modifiedPathname[0] = "INTERJERAS";
                break;

            case "PRODUCTS":
                modifiedPathname[0] = "PRODUKTAI";
                break;

            default:
                break;
        }

    // translation of the mainCategory in the breadcrumbs
    if (props.language === "LT" && modifiedPathname[1] !== undefined)
        switch (modifiedPathname[1].toUpperCase()) {
            case "SALON FURNITURE SYSTEMS":
                modifiedPathname[1] = "SVETAINĖS IR TV BALDŲ SISTEMOS";
                break;

            case "WORKPLACE FURNITURE":
                modifiedPathname[1] = "DARBO VIETOS";
                break;

            case "INTERIOR":
                modifiedPathname[1] = "INTERJERAS";
                break;

            case "BOOKSHELVES":
                modifiedPathname[1] = "KNYGŲ LENTYNOS";
                break;

            default:
                break;
        }

    // this variable is only used on the third word of the breadcrumbs, so there are already 2 slashes in the link. there may be more therefore we need to calculate the amount
    var slashAmount='', inTheLink = location.pathname.split('/').length-3;
    if (location.pathname[location.pathname.length-1] === '/')
        inTheLink--;

    for (let i = 0; i < inTheLink; i++ )
        slashAmount+= '/';
    return (

        <ul style={{ background: "transparent" }} id="bcnl-container">
            <div>
                <Link to={"/" + props.language} style={{ paddingLeft: '1rem', transition: '0.55s', cursor: 'pointer', fontFamily: 'Roboto', color: 'black' }}>
                    {/* kalba == lt? pagrindinis: main */}
                    {props.language === "LT" ? "PAGRINDINIS" : "MAIN"}
                </Link>

                {/* length is > 0 when at least one item is present. the item starts at index 0, therefore untranslatedPathname[0] is required */}
                {modifiedPathname.length > 0 &&
                    <>
                        <span style={{ color: 'black' }}>/</span>
                        <Link to={"/" + props.language + "/" + untranslatedPathname[0]} style={{ transition: '0.55s', cursor: 'pointer', fontFamily: 'Roboto', color: 'black', textTransform: 'uppercase' }}>
                            {modifiedPathname[0]}
                        </Link>
                    </>
                }



                {modifiedPathname.length > 1 && modifiedPathname[1] !== "null" && modifiedPathname[1] !== "undefined" &&
                    <>
                        <span style={{ color: 'black' }}>/</span>
                        <Link to={"/" + props.language + "/" + untranslatedPathname[0] + slashAmount + untranslatedPathname[1]} style={{ transition: '0.55s', cursor: 'pointer', fontFamily: 'Roboto', color: 'black', textTransform: 'uppercase' }}>
                            {modifiedPathname[1]}
                        </Link>
                    </>
                }

            </div>

            <div style={{ paddingRight: '1rem', right: '1', display: 'grid', gridTemplateColumns: '90% 5% 5%' }}>
                <div>
                </div>

                {props.language === "LT" ?
                    <>
                        <Link to={"/LT" + pathnameWO} onClick={() => props.setLanguage("LT")} style={{ fontFamily: 'Roboto', fontWeight: 'bold', color: 'black' }}>
                            LT
                        </Link>

                        <Link to={"/EN" + pathnameWO} onClick={() => props.setLanguage("EN")} style={{ fontFamily: 'Roboto', color: 'black' }}>
                            EN
                        </Link>
                    </>
                    : props.language === "EN" &&
                    <>

                        <Link to={"/LT" + pathnameWO} onClick={() => props.setLanguage("LT")} style={{ fontFamily: 'Roboto', color: 'black' }}>
                            LT
            </Link>


                        <Link to={"/EN" + pathnameWO} onClick={() => props.setLanguage("EN")} style={{ fontFamily: 'Roboto', color: 'black', fontWeight: 'bold', }}>
                            EN
        </Link>
                    </>

                }
            </div>
        </ul >
    );
}

export default BcAndLanguages;