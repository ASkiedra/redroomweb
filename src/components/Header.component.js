import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from './logo minus black.png';
import threeLinesLogo from './three-lines-logo.png';
import translateMainCats, { translateMainItems, translateSubCats } from "../modules/translate";
import { mainCategoriesArr, subCategoriesArr } from '../modules/filteredData'




const Header = (props) => {
    // everything for the main dropdown. these are checked and if any products of this type are available - displayed in the dropdown
    const dropdownCollection = [
        ['DAY SYSTEMS', 'SALON FURNITURE SYSTEMS', 'WORKPLACE FURNITURE', 'BOOKSHELVES', 'SOFA BEDS'],
        ['WARDROBE SYSTEMS', 'INDIVIDUALLY PLANNED WARDROBES', 'CLOTHING HANGERS'],
        ['DINING ROOM FURNITURE', 'CHAIRS', 'SOFAS', 'COFFEE TABLES', 'ARMCHAIRS', 'POUFS', 'DINING TABLES'],
        ['BEDROOM FURNITURE', 'BEDS', 'BEDSIDE CABINETS', 'CHESTS OF DRAWERS', 'BEDROOM BENCHES'],
    ];

    // items for the mobile dropdown
    const dropdown2Collection = ['PRODUCTS', 'INTERIOR', 'MANUFACTURERS', 'CONTACTS', 'PRIVACY POLICY'];

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

    // mobile dropdown button stylised as three lines
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

    // mobile dropdown
    const DropdownMenu2 = () => {
        return (
            <ul className="dropdown2" >
                {dropdown2Collection.map(collectionPart => {
                    return (
                        <li key={collectionPart} style={{ textTransform: 'uppercase', fontWeight: "550", color: 'white' }} >
                            <Link
                                style={{ fontSize: '1.2rem', color: 'white', paddingBottom: '0.5rem' }} to={"/" + props.language + "/" + collectionPart.toLowerCase()}                        >
                                {
                                    props.language === "LT" ? translateMainItems(collectionPart) :
                                        props.language === "EN" && collectionPart
                                }
                            </Link>
                        </li>)

                })}
            </ul>
        );
    }



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

    const DropdownMenu = () => {
        return (
            <ul className="dropdown" >
                <div id="dropdown-grid">
                    {
                        // collectionPart items in the dropdown are displayed like this
                        //   1, 2
                        //   3, 4
                        //   5, ..
                        dropdownCollection.map(collectionPart => {
                            if (mainCategoriesArr.indexOf(collectionPart[0].toLowerCase()) !== -1)
                                return <li key={collectionPart[0]} style={{ textTransform: 'uppercase', fontWeight: "550", color: 'white' }} >
                                    {/* // if any items with the particular main category are in stock and also the first element in the collection  */}
                                    {mainCategoriesArr.indexOf(collectionPart[0].toLowerCase()) !== -1 &&
                                        <Link style={{ color: 'white', paddingBottom: '0.5rem' }}
                                            to={"/" + props.language + "/products/" + collectionPart[0].toLowerCase()}>
                                            {
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
                            else
                                // .map has to return something. if there are cases without a return - its a bad practice
                                return null;
                        })
                    }
                </div>

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
                            }
                        </Link>
                    </li>
                </div>
            </ul >

        );
    }







    // HIDE/SHOW DROPDOWNS
    const [openedProductsDropdown, setOPD] = useState(false);
    const [openedThreeLines, setOTL] = useState(false);



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
                        {props.language === "LT" ? translateMainItems("INTERIOR") :
                            props.language === "EN" && "INTERIOR"}
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

                        {props.language === "LT" ? translateMainItems("MANUFACTURERS") :
                            props.language === "EN" && "MANUFACTURERS"}
                    </div>

                </Link>

                <Link className="headerText header-item-onhover flexbox-container" to={"/" + props.language + "/contacts"}>
                    <div>
                        {props.language === "LT" ? translateMainItems("CONTACTS") :
                            props.language === "EN" && "CONTACTS"}
                    </div>

                </Link>
            </ul>
        </header >
    );
}

export default Header;