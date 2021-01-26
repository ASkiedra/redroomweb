import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from './Logo-V4.png';

const Header = (props) => {
    /* pervadint i Products ProductsMenu */
    const ProductsMenu = () => {
        return (
            <div id="produktai" style={{ height: "inherit" }} >
                {/* OPENED */}
                { openedProductsDropdown &&
                    <div style={{ cursor: 'pointer', height: "inherit" }} onClick={() => { setOPD(false) }}>
                        <div style={{ height: "inherit" }}>
                            <p id="produktai" style={{ height: 'calc(100% - 1.8rem)' }} className="header-item-onhover">
                                {
                                    props.language === "LT" ? "PRODUKTAI" :
                                        props.language === "EN" && "PRODUCTS"
                                }
                            </p>
                            <DropdownMenu />
                        </div>
                    </div>}


                {/* CLOSED */}
                { !openedProductsDropdown &&
                    <div style={{ cursor: 'pointer', height: "inherit" }} onClick={() => { setOPD(true) }}>
                        <p id="produktai" style={{ height: 'calc(100% - 1.8rem)' }} className="header-item-onhover">
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
                        <Link to={"/" + props.language + "/products/day systems/"}
                            style={{ color: 'white', paddingTop: '0', paddingBottom: '0.5rem' }} to={"/" + props.language + "/products/day systems"}                        >
                            {
                                props.language === "LT" ? "DIENOS SISTEMOS" :
                                    props.language === "EN" && "DAY SYSTEMS"
                            }
                        </Link>

                        <ul style={{ width: '100%', marginTop: '0.5rem', paddingLeft: '1rem', listStyle: 'none' }}>
                            <div>
                                <Link className="dropdown-subtext">
                                    {
                                        props.language === "LT" ? "SOFOS IR TV BALDŲ SISTEMOS" :
                                            props.language === "EN" && "SOFA AND TV FURNITURE SYSTEMS"
                                    }

                                </Link>
                            </div>

                            <div>
                                <Link to={"/" + props.language + "/products/workplace furniture"} className="dropdown-subtext" >
                                    {
                                        props.language === "LT" ? "DARBO VIETOS" :
                                            props.language === "EN" && "WORKPLACE FURNITURE"
                                    }
                                </Link>
                            </div>

                            <div>
                                <Link to={"/" + props.language + "/products/workplace furniture"} className="dropdown-subtext" >
                                    {
                                        props.language === "LT" ? "STALAI IR KĖDĖS" :
                                            props.language === "EN" && "TABLES AND CHAIRS"
                                    }
                                </Link>
                            </div>

                        </ul>
                    </li>
                </DropdownItem>


                <DropdownItem>
                    <li style={{ textTransform: 'uppercase', fontWeight: "550", backgroundColor: 'rgba(0, 0, 0, 0.83)', color: 'white' }} >
                        {/* heading text */}
                        <Link style={{ color: 'white', paddingTop: '0', paddingBottom: '0.5rem' }} to="/">
                            {
                                props.language === "LT" ? "NAKTIES SISTEMOS 25" :
                                    props.language === "EN" && "NIGHT SYSTEMS 25"
                            }
                        </Link>

                        <ul style={{ width: '100%', marginTop: '0.5rem', paddingLeft: '1rem', listStyle: 'none' }}>
                            <div>
                                <Link className="dropdown-subtext">
                                    {
                                        props.language === "LT" ? "SOFOS IR TV BALDŲ SISTEMOS 20" :
                                            props.language === "EN" && "SOFA AND TV FURNITURE SYSTEMS 20"
                                    }
                                </Link>
                            </div>
                        </ul>
                    </li>
                </DropdownItem>


                <DropdownItem>
                    <Link to="/" >
                        <li style={{ color: 'white', textTransform: 'uppercase', fontWeight: "550", backgroundColor: 'rgba(0, 0, 0, 0.83)' }} >
                            <Link style={{ color: 'white', paddingTop: '0', paddingBottom: '0.5rem' }} to="/">
                                {
                                    props.language === "LT" ? "LUXURY GAMINTOJAI 30" :
                                        props.language === "EN" && "LUXURY MANUFACTURERS 30"
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

                    <Link className="header-item-onhover" to={"/" + props.language + "/interior"}>
                        {props.language === "LT" ? "INTERJERUI"
                            : props.language === "EN" && "INTERIOR"}
                    </Link>

                    <div className="header-img-onhover" style={{ transition: '0.5s all' }}>
                        <Link to={"/" + props.language}>
                            <div id="header-logo-center">
                                <div></div>
                                <div>
                                    <img id="header-logo" alt="header-logo" style={{ height: "70%", width: "60%", transform: 'scale(0.75)' }} src={logo} />
                                </div>
                                <div></div>
                            </div>
                        </Link>
                    </div>

                    <Link className="header-item-onhover" to={"/" + props.language + "/manufacturers"}>
                        {props.language === "LT" ? "GAMINTOJAI" :
                            props.language === "EN" && "MANUFACTURERS"}

                    </Link>

                    <Link className="header-item-onhover" to={"/" + props.language + "/contacts"}>
                        {props.language === "LT" ? "KONTAKTAI" :
                            props.language === "EN" && "CONTACTS"}
                    </Link>
                </ul>
            </header>
            {/* <DropdownMenu /> */}
        </div>


    );

}

export default Header;