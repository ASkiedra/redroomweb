import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import logo from './Logo_V4.png';

const Navbar = () => {
    const Menu = () => {
        return (
            <div style={{ height: "inherit" }} >
                {/* OPENED */}
                { openedProductsDropdown &&
                    <div style={{ cursor: 'pointer', height: "inherit" }} onClick={() => { setOPD(false) }}>
                        <div style={{ height: "inherit" }}>
                            <p class="navbar-item-onhover">PRODUKTAI</p>
                            <DropdownMenu />
                        </div>
                    </div>}


                {/* CLOSED */}
                { !openedProductsDropdown &&
                    <div style={{ cursor: 'pointer', height: "inherit" }} onClick={() => { setOPD(true) }}>
                        <p class="navbar-item-onhover">PRODUKTAI</p>
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
            // change to state rendering instead of a href asap
            <ul className="dropdown" >
                <DropdownItem>
                    <li style={{ color: 'white', textTransform: 'uppercase', fontWeight: "550", backgroundColor: 'rgba(0, 0, 0, 0.83)', color: 'white' }} >
                        {/* heading text */}
                        <Link style={{ color: 'white', paddingTop: '0', paddingBottom: '0.5rem' }} to="/">
                            DIENOS SISTEMOS
                            </Link>

                        <ul style={{ width: '100%', marginTop: '0.5rem', paddingLeft: '1rem', listStyle: 'none' }}>
                            <div>
                                <Link className="dropdown-subtext">
                                    SOFOS IR TV BALDŲ SISTEMOS
                                </Link>
                            </div>

                            <div>
                                <Link className="dropdown-subtext" >
                                    DARBO VIETOS
                                </Link>
                            </div>

                            <div>
                                <Link className="dropdown-subtext" >
                                    STALAI IR KĖDĖS
                                </Link>
                            </div>

                        </ul>
                    </li>
                </DropdownItem>


                <DropdownItem>
                    <li style={{ color: 'white', textTransform: 'uppercase', fontWeight: "550", backgroundColor: 'rgba(0, 0, 0, 0.83)', color: 'white' }} >
                        {/* heading text */}
                        <Link style={{ color: 'white', paddingTop: '0', paddingBottom: '0.5rem' }} to="/">
                            NAKTIES SISTEMOS 25
                            </Link>

                        <ul style={{ width: '100%', marginTop: '0.5rem', paddingLeft: '1rem', listStyle: 'none' }}>
                            <div>
                                <Link className="dropdown-subtext">
                                    SOFOS IR TV BALDŲ SISTEMOS 20

                                </Link>
                            </div>
                        </ul>
                    </li>
                </DropdownItem>


                <DropdownItem>
                    <Link to="/" >
                        <li style={{ color: 'white', textTransform: 'uppercase', fontWeight: "550", backgroundColor: 'rgba(0, 0, 0, 0.83)' }} >
                            <Link style={{ color: 'white', paddingTop: '0', paddingBottom: '0.5rem' }} to="/">
                                LUXURY GAMINTOJAI 30
                                </Link>
                        </li>
                    </Link>
                </DropdownItem>

                

                <DropdownItem>
                    <Link to="/" >
                        <li style={{ color: 'white', textTransform: 'uppercase', fontWeight: "550", backgroundColor: 'rgba(0, 0, 0, 0.83)' }} >
                            <Link style={{ fontWeight: 'bold', color: 'white', paddingTop: '0', paddingBottom: '0.5rem' }} to="/">
                                VISI GAMINTOJAI
                                </Link>
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

        // const handleMouseClick = (event) => {
        //     // if the click wasnt on threelines or cart or purchase button
        //     if (event.target.id !== "three-lines-img" && event.target.id !== 'cart-img' && event.target.id !== 'buyBtn' && event.target.id !== 'decrease-amount' && event.target.id !== 'increase-amount' && event.target.parentNode.classList[0] !== 'productSizing') {
        //         setOPD(false);
        //     }
        // }
        // document.addEventListener('click', handleMouseClick);

        document.addEventListener('keydown', handleKeyPress);
    }, []); // end of React.useEffect()
    // END OF HIDE-SHOW DROPDOWNS
    ///////////////////////////////////////////////////////////////////////////////////////////




    return (
        <div >
            <navbar style={{ display: 'block' }}>
                <ul id="navbar-list">
                    {/* pervadint i Products */}
                    <Menu class="navbar-item-onhover"></Menu>
                    <a class="navbar-item-onhover">INTERJERUI</a>
                    <div class="navbar-img-onhover" style={{ transition: '0.5s all' }}>

                        <Link to="/">
                            <div id="navbar-logo-center">
                                <div></div>
                                <div>
                                    <img id="navbar-logo" style={{ height: "70%", width: "60%", transform: 'scale(0.75)' }} src={logo} />
                                </div>
                                <div></div>
                            </div>
                        </Link>
                    </div>
                    <Link class="navbar-item-onhover" to="/gamintojai">GAMINTOJAI</Link>
                    <Link class="navbar-item-onhover" to="/kontaktai">KONTAKTAI</Link>
                </ul>




            </navbar>
            {/* <DropdownMenu /> */}
        </div>


    );

}

export default Navbar;