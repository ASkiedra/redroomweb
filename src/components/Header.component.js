import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from './logo minus black.png';
import threeLinesLogo from './three-lines-logo.png';
import translateMainCats, { translateSubCats } from './Translate.component';
import { mainCategoriesArr, subCategoriesArr } from './filteredData'




const Header = (props) => {
    var headerCollection = [
        ['DAY SYSTEMS', 'SALON FURNITURE SYSTEMS', 'WORKPLACE FURNITURE', 'BOOKSHELVES', 'SOFA BEDS'],
        ['WARDROBE SYSTEMS', 'INDIVIDUALLY PLANNED WARDROBES', 'CLOTHING HANGERS'],
        ['DINING ROOM FURNITURE', 'CHAIRS', 'SOFAS', 'COFFEE TABLES', 'ARMCHAIRS', 'POUFS', 'DINING TABLES'],
        ['BEDROOM FURNITURE', 'BEDS', 'BEDSIDE CABINETS', 'CHESTS OF DRAWERS', 'BEDROOM BENCHES'],
    ];



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
            <div id="threeLinesDiv" className="flexbox-container" style={{ width: "inherit", height: 'inherit', margin: "0 auto" }}>
                <img
                    style={{ margin: '0 auto', cursor: 'pointer', transform: 'scale(0.6)', width: "inherit", height: 'inherit' }}
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


    const DropdownMenu2 = () => {
        function DropdownItem(props) {
            return props.children;
        }

        return (
            <ul className="dropdown2" >
                <DropdownItem>
                    <li style={{ textTransform: 'uppercase', fontWeight: "550", color: 'white' }} >
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
                    <li style={{ textTransform: 'uppercase', fontWeight: "550", color: 'white' }} >
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
                    <li style={{ textTransform: 'uppercase', fontWeight: "550", color: 'white' }} >
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
                    <li style={{ textTransform: 'uppercase', fontWeight: "550", color: 'white' }} >
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









    const ProductsMenu = () => {
        return (
            <div id='products-header-container' style={{ height: "inherit" }} >
                {/* OPENED */}
                { openedProductsDropdown &&
                    <div style={{ cursor: 'pointer', height: "inherit" }} onClick={() => setOPD(!openedProductsDropdown)}>
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
                    <div id="produktai" className="flexbox-container" style={{ transition: '0.25s', cursor: 'pointer', height: "inherit" }} onClick={() => setOPD(!openedProductsDropdown)}>
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
            <ul className="dropdown" >
                <div id="dropdown-grid">
                    {
                        // collectionPart = 1, 2
                        //                  3, 4
                        headerCollection.map(collectionPart => {
                            if (mainCategoriesArr.indexOf(collectionPart[0].toLowerCase()) !== -1)
                                return <DropdownItem key={collectionPart[0]+'-parent'} >
                                    {/* // if the big text category in in stock and also the first element in the collection  */}
                                    <li key={collectionPart[0]} style={{ textTransform: 'uppercase', fontWeight: "550", color: 'white' }} >
                                        {mainCategoriesArr.indexOf(collectionPart[0].toLowerCase()) !== -1 &&
                                            <Link style={{ color: 'white', paddingBottom: '0.5rem' }}
                                                to={"/" + props.language + "/products/" + collectionPart[0].toLowerCase()}>
                                                {
                                                    // translate(item) vietoj item kur lt
                                                    props.language === "LT" ? translateMainCats(collectionPart[0]) :
                                                        props.language === "EN" && collectionPart[0]
                                                }
                                            </Link>
                                        }



                                        < ul style={{ width: '100%', marginTop: '0.5rem', paddingLeft: '1rem', listStyle: 'none' }}>
                                            {collectionPart.map(item => {
                                                // if its not the first item in the collection (not the big text) AND it exists in subCategoriesArr
                                                if (collectionPart.indexOf(item) !== 0 && subCategoriesArr.indexOf(item.toLowerCase()) !== -1)
                                                    return <div key={item}>
                                                        <Link to={"/" + props.language + "/products//" + item.toLowerCase()} className="dropdown-subtext" >
                                                            {
                                                                props.language === "LT" ? translateSubCats(item) :
                                                                    props.language === "EN" && item
                                                            }
                                                        </Link>
                                                    </div>
                                                else
                                                    return null;
                                            })}
                                        </ul>

                                    </li>
                                </DropdownItem>
                            else
                                return null;
                        })
                    }
                </div>

                <DropdownItem>
                    <div>
                        <li style={{ color: 'white', textTransform: 'uppercase', fontWeight: "550", }} >
                            <Link style={{ color: 'white', paddingTop: '0', paddingBottom: '0.5rem' }} to={"/" + props.language + "/products/outdoor furniture and accessories"}>
                                {
                                    props.language === "LT" ? "lauko baldai ir aksesuarai" :
                                        props.language === "EN" && "outdoor furniture and accessories"
                                }
                            </Link>
                        </li>

                        <li style={{ color: 'white', textTransform: 'uppercase', fontWeight: "550", }} >
                            <Link style={{ fontWeight: 'bold', color: 'white', paddingTop: '0', paddingBottom: '0.5rem' }} to={"/" + props.language + "/products"}>
                                {
                                    props.language === "LT" ? "VISI PRODUKTAI" :
                                        props.language === "EN" && "ALL PRODUCTS"
                                }                                </Link>
                        </li>
                    </div>
                </DropdownItem>
            </ul >

        );
    }



    // HIDE/SHOW DROPDOWNS
    const [openedProductsDropdown, setOPD] = useState(false);
    const [openedThreeLines, setOTL] = useState(false);

    // esu /lt (curLoc) 
    // keiciu page i /en , pradzioj newLoc = uselocation
    // tada curLoc ?== newLoc
    // ir tik tada curLoc == newLoc



    React.useEffect(() => {
        function handleKeyPress(event) {
            if (event.key === 'Escape') {
                setOPD(false);
                setOTL(false);
            }
        }


        const handleMouseClick = (event) => {
            // if the click wasnt on the products button
            if (event.target.id !== "produktai" && event.target.id !== "three-lines-img" && event.target.id !== "threeLinesDiv") {
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

                <div onClick={() => { setOTL(!openedThreeLines) }} style={{ color: 'red', height: 'inherit', width: 'inherit' }} id="threeLines">
                    <Menu id="produktai" />

                </div>
                <ProductsMenu id="produktai " className="header-item-onhover" />


                <Link className="headerText header-item-onhover flexbox-container" to={"/" + props.language + "/interior"}>
                    <div>

                        {props.language === "LT" ? "INTERJERUI"
                            : props.language === "EN" && "INTERIOR"}
                    </div>

                </Link>

                <div id="header-logo-container" className="header-img-onhover" style={{ height: 'inherit', transition: '0.5s all' }}>
                    <Link style={{ height: ' 100%' }} className="flexbox-container" to={"/" + props.language}>
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