import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from './logo minus black.png';
import threeLinesLogo from './three-lines-logo.png';

const Header = (props) => {
    // LEFT PART OF THE NAVBAR
    // renders the threelines image or the dropdown if its clicked.
    const Menu = () => {
        return (
            <div style={{ width: "inherit", height: 'inherit', margin: "0 auto" }} >
                <div style={{ width: "inherit", height: 'inherit' }} >
                    <ThreeLines />
                </div>

                {openedThreeLines &&
                    <DropdownMenu2 />
                }
            </div>
        );
    };


    const ThreeLines = (props) => {
        return (
            <div class="flexbox-container" style={{ width: "inherit", height: 'inherit', margin: "0 auto" }}>
                <img
                    style={{ margin: '0 auto', transform: 'scale(0.6)', width: "inherit", height: 'inherit' }}
                    src={threeLinesLogo}
                    className="icon-button clickable"
                    alt="threeLines-logo"
                    id='three-lines-img'
                />

                {/* dropdown */}
                {props.children}
            </div>
        );
    }


    // need more dropdown levels? 11:40 https://www.youtube.com/watch?v=IF6k0uZuypA
    const DropdownMenu2 = () => {
        function DropdownItem(props) {
            return props.children;
        }

        return (
            <ul className="dropdown2" >
                <DropdownItem>
                    <li style={{ textTransform: 'uppercase', fontWeight: "550",  color: 'white' }} >
                        {/* heading text */}
                        <Link
                            style={{ fontSize: '1.2rem', color: 'white', paddingBottom: '0.5rem' }} to={"/" + props.language + "/products"}                        >
                            {
                                props.language === "LT" ? "PRODUKTAI" :
                                    props.language === "EN" && "PRODUCTS"
                            }
                        </Link>
                    </li>
                </DropdownItem>

                <DropdownItem>
                    <li style={{ textTransform: 'uppercase', fontWeight: "550",  color: 'white' }} >
                        {/* heading text */}
                        <Link
                            style={{ fontSize: '1.2rem', color: 'white', paddingBottom: '0.5rem' }} to={"/" + props.language + "/interior"}                        >
                            {
                                props.language === "LT" ? "INTERJERAS" :
                                    props.language === "EN" && "INTERIOR"
                            }
                        </Link>
                    </li>
                </DropdownItem>

                <DropdownItem>
                    <li style={{ textTransform: 'uppercase', fontWeight: "550",  color: 'white' }} >
                        {/* heading text */}
                        <Link
                            style={{ fontSize: '1.2rem', color: 'white', paddingBottom: '0.5rem' }} to={"/" + props.language + "/manufacturers"}                        >
                            {
                                props.language === "LT" ? "GAMINTOJAI" :
                                    props.language === "EN" && "MANUFACTURERS"
                            }
                        </Link>
                    </li>
                </DropdownItem>
                <DropdownItem>
                    <li style={{ textTransform: 'uppercase', fontWeight: "550",  color: 'white' }} >
                        {/* heading text */}
                        <Link
                            style={{ fontSize: '1.2rem', color: 'white', paddingBottom: '0.5rem' }} to={"/" + props.language + "/contacts"}                        >
                            {
                                props.language === "LT" ? "KONTAKTAI" :
                                    props.language === "EN" && "CONTACTS"
                            }
                        </Link>
                    </li>
                </DropdownItem>

            </ul>
        );
    }
    // END OF LEFT PART OF THE NAVBAR
    ///////////////////////////////////////////////////////////////////////////////////////////









    // temporary fix
    const checkIfMobile = () => {
        // if the screen is larger than from an ordinary phone
        if (window.innerHeight > 1000 || window.innerWidth > 1000) {
            setOPD(!openedProductsDropdown)

        }
        else {
            window.location.replace("/" + props.language + '/products')
            console.log(openedProductsDropdown)

        }
    }

    const ProductsMenu = () => {
        return (
            <div id='products-header-container' style={{ height: "inherit" }} >
                {/* OPENED */}
                { openedProductsDropdown &&
                    <div style={{ cursor: 'pointer', height: "inherit" }} onClick={() => { checkIfMobile() }}>
                        <div id="produktai" className="flexbox-container" style={{ height: "inherit" }}>
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
                    <div id="produktai" className="flexbox-container" style={{ transition: '0.25s', cursor: 'pointer', height: "inherit" }} onClick={() => { checkIfMobile() }}>
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
                    <li style={{ textTransform: 'uppercase', fontWeight: "550",  color: 'white' }} >
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
                    <li style={{ textTransform: 'uppercase', fontWeight: "550",  color: 'white' }} >
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
                    <li style={{ color: 'white', textTransform: 'uppercase', fontWeight: "550",  }} >
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
                    <li style={{ color: 'white', textTransform: 'uppercase', fontWeight: "550",  }} >
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
                    <div>

                        <li style={{ color: 'white', textTransform: 'uppercase', fontWeight: "550",  }} >
                            <Link style={{ color: 'white', paddingTop: '0', paddingBottom: '0.5rem' }} to={"/" + props.language + "/products/outdoor furniture and accessories"}>
                                {
                                    props.language === "LT" ? "lauko baldai ir aksesuarai" :
                                        props.language === "EN" && "outdoor furniture and accessories"
                                }
                            </Link>
                        </li>
                        <li style={{ color: 'white', textTransform: 'uppercase', fontWeight: "550",  }} >
                            <Link style={{ fontWeight: 'bold', color: 'white', paddingTop: '0', paddingBottom: '0.5rem' }} to={"/" + props.language + "/products"}>
                                {
                                    props.language === "LT" ? "VISI PRODUKTAI" :
                                        props.language === "EN" && "ALL PRODUCTS"
                                }                                </Link>
                        </li>
                    </div>
                </DropdownItem>

            </ul>
        );
    }



    // HIDE-SHOW DROPDOWNS
    const [openedProductsDropdown, setOPD] = useState(false);
    const [openedThreeLines, setOTL] = useState(false);




    React.useEffect(() => {
        function handleKeyPress(event) {
            if (event.key === 'Escape') {
                console.log('Escape pressed in useEffect')
                setOPD(false);
                setOTL(false);
            }
        }


        const handleMouseClick = (event) => {
            console.log(event.target.id)
            console.log(event.target.id === "three-lines-img")
            // if the click wasnt on the products button
            if (event.target.id !== "produktai" && event.target.id !== "three-lines-img") {
                console.log('uzdarom')
                setOPD(false);
                setOTL(false);

            }
        }
        document.addEventListener('click', handleMouseClick);

        document.addEventListener('keydown', handleKeyPress);
    }, []); // end of React.useEffect()
    // END OF HIDE-SHOW DROPDOWNS
    ///////////////////////////////////////////////////////////////////////////////////////////




    return (
        <header style={{ display: 'block' }}>
            <ul id="header-list">
                {console.log('stateupdate')}

                <div id="produktai" onClick={() => { setOTL(!openedThreeLines) }} style={{ height: 'inherit', width: 'inherit' }} id="threeLines">
                    <Menu id="produktai" />

                </div>
                <ProductsMenu id="produktai " className="header-item-onhover" />


                <Link className="headerText header-item-onhover flexbox-container" to={"/" + props.language + "/interior"}>
                    <div>

                        {props.language === "LT" ? "INTERJERUI"
                            : props.language === "EN" && "INTERIOR"}
                    </div>

                </Link>

                <div className="header-img-onhover" style={{ height: 'inherit', transition: '0.5s all' }}>
                    <Link style={{ height: ' 100%' }} class="flexbox-container" to={"/" + props.language}>
                        <div className="flexbox-container" style={{ margin: '0 auto', height: 'inherit' }}>
                            <img id="header-logo" alt="header-logo" src={logo} />
                        </div>
                    </Link>
                </div>

                <Link className="headerText header-item-onhover flexbox-container" to={"/" + props.language + "/manufacturers"}>
                    <div >

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
    );

}

export default Header;