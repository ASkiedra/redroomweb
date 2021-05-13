import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from '../logos/redroom-logo-black.png';
import threeLinesLogo from '../logos/three-lines-logo.png';
import translateMainCats, { translateMainItems, translateSubCats } from "../modules/translate";
import { mainCategoriesArr, subCategoriesArr } from '../modules/filteredData'
import LanguagesContainer from './LanguagesContainer';



const Header = (props) => {
    const [openedProductsDropdown, setOPD] = useState(false);
    const [openedThreeLines, setOTL] = useState(false);

    React.useEffect(() => {
        const handleKeyPress = event => {
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

        // these event listeners only "fire off" once because an empty array is provided to this function
        // this is handy because state updates WILL NOT create additional event listeners
        document.addEventListener('click', handleMouseClick);
        document.addEventListener('keydown', handleKeyPress);
    }, []);


    // mobile menu button stylised as three lines
    const MobileMenu = () => {
        return (
            <div onClick={() => { setOTL(!openedThreeLines) }}
                id="threeLines" style={{ cursor: 'pointer', height: 'inherit', margin: "0 auto" }} >
                <div id="threeLinesDiv" className="flexbox-container" style={{ height: 'inherit', margin: "0 auto" }}>
                    <img
                        style={{ margin: '0 auto', cursor: 'pointer', transform: 'scale(0.6)', height: 'inherit' }}
                        src={threeLinesLogo}
                        className="icon-button clickable"
                        alt="threeLines-logo"
                        id='three-lines-img'
                    />
                </div>

                {openedThreeLines && <DropdownMenu2 />}
            </div>
        );
    };

    // mobile dropdown
    const DropdownMenu2 = () => {
        // items for the mobile dropdown
        const dropdown2Collection = ['PRODUCTS', 'INTERIOR', 'MANUFACTURERS', 'CONTACTS', 'PRIVACY POLICY'];

        return (
            <ul className="dropdown2" >
                {dropdown2Collection.map(collectionPart => {
                    return (
                        <li key={collectionPart} style={{ textTransform: 'uppercase', fontWeight: "550", color: 'white' }} >
                            <Link
                                style={{ fontSize: '1.2rem', color: 'white', paddingBottom: '0.5rem' }}
                                to={`/${props.language}/${collectionPart.toLowerCase()}`}>
                                {props.language === "LT" ? translateMainItems(collectionPart) : collectionPart}
                            </Link>
                        </li>)
                })}
            </ul>
        );
    }


    const ProductsMenu = () => {
        return (
            <div id='products-header-container' style={{ height: "inherit" }} >
                <div style={{ cursor: 'pointer', height: "inherit" }} onClick={() => setOPD(!openedProductsDropdown)}>
                    <div id="produktai" className="flexbox-container" style={{ height: "inherit" }}>
                        <p id="produktai" className="header-item-onhover">
                            {
                                props.language === "LT" ? "PRODUKTAI" : "PRODUCTS"
                            }
                        </p>
                    </div>

                    {openedProductsDropdown && <DropdownMenu />}
                </div>
            </div>
        );
    };

    const DropdownMenu = () => {
        // everything for the main dropdown. these are checked and if any products of this type are available - displayed in the dropdown
        const dropdownCollection = [
            ['DAY SYSTEMS', 'SALON FURNITURE SYSTEMS', 'WORKPLACE FURNITURE', 'BOOKSHELVES', 'SOFA BEDS'],
            ['WARDROBE SYSTEMS', 'INDIVIDUALLY PLANNED WARDROBES', 'CLOTHING HANGERS'],
            ['DINING ROOM FURNITURE', 'CHAIRS', 'SOFAS', 'COFFEE TABLES', 'ARMCHAIRS', 'POUFS', 'DINING TABLES'],
            ['BEDROOM FURNITURE', 'BEDS', 'BEDSIDE CABINETS', 'CHESTS OF DRAWERS', 'BEDROOM BENCHES'],
        ];

        return (
            <ul className="dropdown" >
                <div id="dropdown-grid">
                    {
                        // collectionPart items in the dropdown are displayed like this
                        //   1, 2
                        //   3, 4
                        //   5, ...
                        dropdownCollection.map(collectionPart => {
                            if (mainCategoriesArr.indexOf(collectionPart[0].toLowerCase()) !== -1)
                                return <li key={collectionPart[0]} style={{ textTransform: 'uppercase', fontWeight: "550", color: 'white' }} >
                                    {/* // if any items with the particular main category are in stock and also the first element in the collection, show them in the dropdown with a different style than the other items  */}
                                    {mainCategoriesArr.indexOf(collectionPart[0].toLowerCase()) !== -1 &&
                                        <Link style={{ color: 'white', paddingBottom: '0.5rem' }}
                                            to={`/${props.language}/products/${collectionPart[0].toLowerCase()}`}>
                                            {
                                                props.language === "LT" ? translateMainCats(collectionPart[0]) : collectionPart[0]
                                            }
                                        </Link>
                                    }



                                    <ul style={{ width: '100%', marginTop: '0.5rem', paddingLeft: '1rem', listStyle: 'none' }}>
                                        {collectionPart.map(item => {
                                            // if its not the first item in the collection (not the big text) AND it exists in subCategoriesArr
                                            if (collectionPart.indexOf(item) !== 0 && subCategoriesArr.indexOf(item.toLowerCase()) !== -1)
                                                return <div key={item}>
                                                    <Link to={`/${props.language}/products//${item.toLowerCase()}`} className="dropdown-subtext" >
                                                        {
                                                            props.language === "LT" ? translateSubCats(item) : item
                                                        }
                                                    </Link>
                                                </div>
                                            else
                                                return null;
                                        })}
                                    </ul>

                                </li>
                            else
                                // .map has to return something. if there are cases without a return - it's a bad practice
                                return null;
                        })
                    }
                </div>

                <div>
                    <li style={{ color: 'white', textTransform: 'uppercase', fontWeight: "550" }}>
                        <Link to={`/${props.language}/products/outdoor furniture and accessories`}
                            style={{ color: 'white', paddingTop: '0', paddingBottom: '0.5rem' }}
                        >
                            {
                                props.language === "LT" ? "lauko baldai ir aksesuarai" :
                                    props.language === "EN" && "outdoor furniture and accessories"
                            }
                        </Link>
                    </li>

                    <li style={{ color: 'white', textTransform: 'uppercase', fontWeight: "550", }} >
                        <Link to={`/${props.language}/products`}
                            style={{ fontWeight: 'bold', color: 'white', paddingTop: '0', paddingBottom: '0.5rem' }}
                        >
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







    return (
        <header style={{ display: 'block' }}>
            <ul id="header-list">
                <MobileMenu id="produktai" />
                <ProductsMenu id="produktai" className="header-item-onhover" />

                <Link to={`/${props.language}/interior`} className="headerText header-item-onhover flexbox-container" >
                    <div>
                        <p>
                            {props.language === "LT" ? translateMainItems("INTERIOR") : "INTERIOR"}
                        </p>
                    </div>
                </Link>

                <div id="header-logo-container" className="header-img-onhover" style={{ height: 'inherit', transition: '0.5s all' }}>
                    <Link to={`/${props.language}`}
                        style={{ height: ' 100%' }}
                        className="flexbox-container"
                    >
                        <div className="flexbox-container" style={{ margin: '0 auto', height: 'inherit' }}>
                            <img id="header-logo" alt="header-logo" src={logo} />
                        </div>
                    </Link>
                </div>


                <Link to={`/${props.language}/manufacturers`}
                    className="headerText header-item-onhover flexbox-container"
                >
                    <div>
                        <p>
                            {props.language === "LT" ? translateMainItems("MANUFACTURERS") : "MANUFACTURERS"}
                        </p>
                    </div>
                </Link>


                <Link to={`/${props.language}/contacts`}
                    className="headerText header-item-onhover flexbox-container"
                >
                    <div>
                        <p>
                            {props.language === "LT" ? translateMainItems("CONTACTS") : "CONTACTS"}
                        </p>
                    </div>
                </Link>

                <div className="flexbox-container" id="lang-container-parent">
                    <LanguagesContainer setLanguage={props.setLanguage} language={props.language} onlyOneLang={props.language === "LT" ? "EN" : "LT"} />
                </div>
            </ul>
        </header >
    );
}

export default Header;