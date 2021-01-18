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
                            <p>PRODUKTAI</p>
                            <DropdownMenu />
                        </div>
                    </div>}


                {/* CLOSED */}
                { !openedProductsDropdown &&
                    <div style={{ cursor: 'pointer', height: "inherit" }} onClick={() => { setOPD(true) }}>
                        <p>PRODUKTAI</p>
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
                    <li style={{ textTransform: 'uppercase', fontWeight: "550", backgroundColor: 'rgba(0, 0, 0, 0.83)', color: 'white' }} >
                        <Link style={{ paddingTop: '0', paddingBottom: '0.5rem' }} to="/">
                            DIENOS SISTEMOS
                            </Link>

                        <ul style={{ width: '100%', marginTop: '0.5rem', paddingLeft: '1rem', listStyle: 'none' }}>
                            <li style={{ padding: '0', fontSize: '0.9rem', fontWeight: '300', textTransform: 'uppercase' }} >
                                SOFOS IR TV BALDŲ SISTEMOS
                            </li>

                            <li style={{ padding: '0', fontSize: '0.9rem', fontWeight: '300', textTransform: 'uppercase' }} >
                                DARBO VIETOS
                            </li>

                            <li style={{ padding: '0', fontSize: '0.9rem', fontWeight: '300', textTransform: 'uppercase' }} >
                                STALAI IR KĖDĖS
                            </li>

                        </ul>
                    </li>
                    {/* sarasiuka cia? */}
                </DropdownItem>

                <DropdownItem>
                    <Link to="/" >
                        <li style={{ textTransform: 'uppercase', fontWeight: "550", backgroundColor: 'rgba(0, 0, 0, 0.83)' }} >
                            <Link style={{ paddingTop: '0', paddingBottom: '0.5rem' }} to="/">
                                NAKTIES SISTEMOS 25
                                </Link>
                            <ul style={{ paddingLeft: '1rem', paddingTop: '0.5rem', listStyle: 'none' }}>
                                <li style={{ padding: '0', fontSize: '0.9rem', fontWeight: '300', textTransform: 'uppercase' }} >
                                    SOFOS IR TV BALDŲ SISTEMOS 20
                            </li>

                            </ul>

                        </li>
                        {/* sarasiuka cia? */}
                    </Link>
                </DropdownItem>

                <DropdownItem>
                    <li style={{ textTransform: 'uppercase', fontWeight: "550", backgroundColor: 'rgba(0, 0, 0, 0.83)' }} >
                        <Link style={{ paddingTop: '0', paddingBottom: '0.5rem' }} to="/">
                            LUXURY GAMINTOJAI 30
                    </Link>
                    </li>
                    {/* sarasiuka cia? */}
                </DropdownItem>

                <DropdownItem>
                    <li style={{ textTransform: 'uppercase', fontWeight: "550", backgroundColor: 'rgba(0, 0, 0, 0.83)' }} >
                        <Link style={{ paddingTop: '0', paddingBottom: '0.5rem' }} to="/">
                            VISI PRODUKTAI
                    </Link>
                    </li>
                    {/* sarasiuka cia? */}
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
        <div style={{ filter: 'drop-shadow(0rem 0.5rem0.5rem black' }}>

            <navbar>
                <ul id="navbar-list">
                    {/* pervadint i Products */}
                    <Menu></Menu>
                    <a>INTERJERUI</a>
                    <div>

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
                    <Link to="/gamintojai">GAMINTOJAI</Link>
                    <Link to="/kontaktai">KONTAKTAI</Link>
                </ul>




            </navbar>
            {/* <DropdownMenu /> */}
        </div>


    );

}

export default Navbar;