import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from './logo minus black.png';

const Header = (props) => {
    // temporary fix
    const checkIfMobile = () => {
        // if the screen is larger than from an ordinary phone
        if (window.innerHeight > 1000 || window.innerWidth > 1000)
            setOPD(!openedProductsDropdown)
        else
            window.location.replace("/" + props.language + '/products')
    }

    const ProductsMenu = () => {
        return (
            <div id="produktai" style={{ height: "inherit" }} >
                {/* OPENED */}
                { openedProductsDropdown &&
                    <div style={{ cursor: 'pointer', height: "inherit" }} onClick={() => { checkIfMobile() }}>
                        <div className="flexbox-container" style={{ height: "inherit" }}>
                            <p id="produktai" className="header-item-onhover">
                                {
                                    props.language === "LT" ? "PRODUKTAI" :
                                        props.language === "EN" && "PRODUCTS"
                                }
                            </p>
                        </div>
                        <DropdownMenu />
                    </div>}


                {/* CLOSED */}
                { !openedProductsDropdown &&
                    <div className="flexbox-container" style={{ cursor: 'pointer', height: "inherit" }} onClick={() => { checkIfMobile() }}>
                        <p id="produktai" className="header-item-onhover">
                            {
                                props.language === "LT" ? "PRODUKTAI" :
                                    props.language === "EN" && "PRODUCTS"
                            }</p>

                    </div>}
            </div>
        );
    };


    // need more dropdown levels? 11:40 https://www.youtube.com/watch?v=IF6k0uZuypA
    const DropdownMenu = () => {
        function DropdownItem(props) {
            return props.children;
        }



        return (
            // could have used `:` instead of `props.language === "EN"` but this seems more stable
            <ul className="dropdown" >
                <DropdownItem>
                    <li style={{ textTransform: 'uppercase', fontWeight: "550", backgroundColor: 'rgba(0, 0, 0, 0.83)', color: 'white' }} >
                        {/* heading text */}
                        <Link
                            style={{ color: 'white', paddingBottom: '0.5rem' }} to={"/" + props.language + "/products/day systems"}                        >
                            {
                                props.language === "LT" ? "DIENOS SISTEMOS" :
                                    props.language === "EN" && "DAY SYSTEMS"
                            }
                        </Link>

                        <ul style={{ width: '100%', marginTop: '0.5rem', paddingLeft: '1rem', listStyle: 'none' }}>
                            <div>
                                <Link to={"/" + props.language + "/products//salon furniture systems"}
                                    className="dropdown-subtext">
                                    {
                                        props.language === "LT" ? "SVETAINĖS IR TV BALDŲ SISTEMOS" :
                                            props.language === "EN" && "SALON FURNITURE SYSTEMS"
                                    }

                                </Link>
                            </div>

                            <div>
                                <Link to={"/" + props.language + "/products//workplace furniture"} className="dropdown-subtext" >
                                    {
                                        props.language === "LT" ? "DARBO VIETOS" :
                                            props.language === "EN" && "WORKPLACE FURNITURE"
                                    }
                                </Link>
                            </div>

                            <div>
                                <Link to={"/" + props.language + "/products//bookshelves"} className="dropdown-subtext" >
                                    {
                                        props.language === "LT" ? "KNYGŲ LENTYNOS" :
                                            props.language === "EN" && "BOOKSHELVES"
                                    }
                                </Link>
                            </div>

                            <div>
                                <Link to={"/" + props.language + "/products//sofa beds"} className="dropdown-subtext" >
                                    {
                                        props.language === "LT" ? "SOFA LOVOS" :
                                            props.language === "EN" && "SOFA BEDS"
                                    }
                                </Link>
                            </div>
                        </ul>
                    </li>
                </DropdownItem>


                <DropdownItem>
                    <li style={{ textTransform: 'uppercase', fontWeight: "550", backgroundColor: 'rgba(0, 0, 0, 0.83)', color: 'white' }} >
                        {/* heading text */}
                        <Link style={{ color: 'white', paddingTop: '0', paddingBottom: '0.5rem' }} to={"/" + props.language + "/products/wardrobe systems"}>
                            {
                                props.language === "LT" ? "SPINTŲ SISTEMOS" :
                                    props.language === "EN" && "WARDROBE SYSTEMS"
                            }
                        </Link>

                        <ul style={{ width: '100%', marginTop: '0.5rem', paddingLeft: '1rem', listStyle: 'none' }}>
                            <div>
                                <Link to={"/" + props.language + "/products//individually planned wardrobes"} className="dropdown-subtext">
                                    {
                                        props.language === "LT" ? "individualiai projektuojamos drabužinės " :
                                            props.language === "EN" && "individually planned wardrobes"
                                    }
                                </Link>
                            </div>

                            <div>
                                <Link to={"/" + props.language + "/products//clothing hangers"} className="dropdown-subtext">
                                    {
                                        props.language === "LT" ? "RŪBŲ KABYKLOS " :
                                            props.language === "EN" && "CLOTHING HANGERS"
                                    }
                                </Link>
                            </div>
                        </ul>
                    </li>
                </DropdownItem>


                <DropdownItem>
                    <li style={{ color: 'white', textTransform: 'uppercase', fontWeight: "550", backgroundColor: 'rgba(0, 0, 0, 0.83)' }} >
                        <Link style={{ color: 'white', paddingTop: '0', paddingBottom: '0.5rem' }} to={"/" + props.language + "/products/dining room furniture"}  >
                            {
                                props.language === "LT" ? "svetainės ir valgomojo baldai" :
                                    props.language === "EN" && "dining room furniture"
                            }
                        </Link>

                        <ul style={{ width: '100%', marginTop: '0.5rem', paddingLeft: '1rem', listStyle: 'none' }}>
                            <div>
                                <Link to={"/" + props.language + "/products//chairs"} className="dropdown-subtext">
                                    {
                                        props.language === "LT" ? "kėdės " :
                                            props.language === "EN" && "chairs"
                                    }
                                </Link>
                            </div>

                            <div>
                                <Link to={"/" + props.language + "/products//sofas"} className="dropdown-subtext">
                                    {
                                        props.language === "LT" ? "sofos " :
                                            props.language === "EN" && "sofas"
                                    }
                                </Link>
                            </div>



                            <div>
                                <Link to={"/" + props.language + "/products//coffee tables"} className="dropdown-subtext">
                                    {
                                        props.language === "LT" ? "kavos staliukai" :
                                            props.language === "EN" && "coffee tables"
                                    }
                                </Link>
                            </div>


                            <div>
                                <Link to={"/" + props.language + "/products//armchairs"} className="dropdown-subtext">
                                    {
                                        props.language === "LT" ? "foteliai" :
                                            props.language === "EN" && "armchairs"
                                    }
                                </Link>
                            </div>


                            <div>
                                <Link to={"/" + props.language + "/products//poufs"} className="dropdown-subtext">
                                    {
                                        props.language === "LT" ? "suoliukai ir pufai" :
                                            props.language === "EN" && "poufs"
                                    }
                                </Link>
                            </div>

                            <div>
                                <Link to={"/" + props.language + "/products//dining tables"} className="dropdown-subtext">
                                    {
                                        props.language === "LT" ? "valgomojo stalai" :
                                            props.language === "EN" && "dining tables"
                                    }
                                </Link>
                            </div>
                        </ul>
                    </li>
                </DropdownItem>

                <DropdownItem>
                    <li style={{ color: 'white', textTransform: 'uppercase', fontWeight: "550", backgroundColor: 'rgba(0, 0, 0, 0.83)' }} >
                        <Link style={{ color: 'white', paddingTop: '0', paddingBottom: '0.5rem' }} to={"/" + props.language + "/products/bedroom furniture"}>
                            {
                                props.language === "LT" ? "MIEGAMOJO BALDAI" :
                                    props.language === "EN" && "bedroom furniture"
                            }
                        </Link>

                        <ul style={{ width: '100%', marginTop: '0.5rem', paddingLeft: '1rem', listStyle: 'none' }}>
                            <div>
                                <Link to={"/" + props.language + "/products//bedside cabinets"} className="dropdown-subtext">
                                    {
                                        props.language === "LT" ? "spintelĖs prie lovos " :
                                            props.language === "EN" && "bedside cabinets"
                                    }
                                </Link>
                            </div>

                            <div>
                                <Link to={"/" + props.language + "/products//chests of drawers"} className="dropdown-subtext">
                                    {
                                        props.language === "LT" ? "komodos" :
                                            props.language === "EN" && "chests of drawers"
                                    }
                                </Link>
                            </div>


                            <div>
                                <Link to={"/" + props.language + "/products//bedroom benches"} className="dropdown-subtext">
                                    {
                                        props.language === "LT" ? "suolai prie lovos" :
                                            props.language === "EN" && "bedroom benches"
                                    }
                                </Link>
                            </div>


                        </ul>
                    </li>
                </DropdownItem>

                <DropdownItem>
                    <Link to={"/" + props.language + "/products"} >
                        <li style={{ color: 'white', textTransform: 'uppercase', fontWeight: "550", backgroundColor: 'rgba(0, 0, 0, 0.83)' }} >
                            <Link style={{ color: 'white', paddingTop: '0', paddingBottom: '0.5rem' }} to={"/" + props.language + "/products/outdoor furniture and accessories"}>
                                {
                                    props.language === "LT" ? "lauko baldai ir aksesuarai" :
                                        props.language === "EN" && "outdoor furniture and accessories"
                                }
                            </Link>
                        </li>
                    </Link>
                </DropdownItem>

                <DropdownItem>
                    <Link to={"/" + props.language + "/products"} >
                        <li style={{ color: 'white', textTransform: 'uppercase', fontWeight: "550", backgroundColor: 'rgba(0, 0, 0, 0.83)' }} >
                            <Link style={{ fontWeight: 'bold', color: 'white', paddingTop: '0', paddingBottom: '0.5rem' }} to={"/" + props.language + "/products"}>
                                {
                                    props.language === "LT" ? "VISI GAMINTOJAI" :
                                        props.language === "EN" && "ALL MANUFACTURERS"
                                }                                </Link>
                        </li>
                    </Link>
                </DropdownItem>

            </ul>
        );
    }



    // HIDE-SHOW DROPDOWNS
    const [openedProductsDropdown, setOPD] = useState(false);




    React.useEffect(() => {
        function handleKeyPress(event) {
            if (event.key === 'Escape') {
                console.log('Escape pressed in useEffect')
                setOPD(false);
            }
        }

        const handleMouseClick = (event) => {
            // if the click wasnt on the products button
            if (event.target.id !== "produktai") {
                setOPD(false);
            }
        }
        document.addEventListener('click', handleMouseClick);

        document.addEventListener('keydown', handleKeyPress);
    }, []); // end of React.useEffect()
    // END OF HIDE-SHOW DROPDOWNS
    ///////////////////////////////////////////////////////////////////////////////////////////




    return (
        <div >
            <header style={{ display: 'block' }}>
                <ul id="header-list">



                    <ProductsMenu id="produktai" className="header-item-onhover" />


                    <Link className="headerText header-item-onhover flexbox-container" to={"/" + props.language + "/interior"}>
                        <div>

                            {props.language === "LT" ? "INTERJERUI"
                                : props.language === "EN" && "INTERIOR"}
                        </div>

                    </Link>

                    <div className="header-img-onhover" style={{ transition: '0.5s all' }}>
                        <Link style={{ height: ' 100%' }} class="flexbox-container" to={"/" + props.language}>
                            <div>
                                <img id="header-logo" alt="header-logo" style={{ height: "70%", width: "60%", transform: 'scale(0.75)' }} src={logo} />
                            </div>
                        </Link>
                    </div>

                    <Link className="headerText header-item-onhover flexbox-container" to={"/" + props.language + "/manufacturers"}>
                        <div>

                            {props.language === "LT" ? "GAMINTOJAI" :
                                props.language === "EN" && "MANUFACTURERS"}
                        </div>

                    </Link>

                    <Link className="headerText header-item-onhover flexbox-container" to={"/" + props.language + "/contacts"}>
                        <div>
                            {props.language === "LT" ? "KONTAKTAI" :
                                props.language === "EN" && "CONTACTS"}
                        </div>

                    </Link>
                </ul>
            </header >
            {/* <DropdownMenu /> */}
        </div >


    );

}

export default Header;