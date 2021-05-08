import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Products from '../modules/products';
import { translateSubCats } from "../modules/translate";
import filterLowercase, { mainCategoriesArr, subCategoriesArr, manufacturersArr } from '../modules/filteredData';


// cant store these in the state because it would update too often
let paramsFiltersApplied = false, subCatFilterArr = [], mainCatFilterArr = [], manufFilterArr = [];

export default class AllProducts extends Component {
        state = { curProducts: [], fetchedProducts: [], loading: true, filtered: false };

        componentDidUpdate(prevProps) {
                // prevent infinite state update. if prev location is not the current location
                if ((prevProps.location.key !== this.props.location.key || prevProps.location.pathname !== this.props.location.pathname)) {
                        subCatFilterArr = [];
                        mainCatFilterArr = [];
                        manufFilterArr = [];

                        if (this.props.match.params.manufacturer)
                                manufFilterArr.push(this.props.match.params.manufacturer)
                        if (this.props.match.params.subCategory)
                                subCatFilterArr.push(this.props.match.params.subCategory)
                        if (this.props.match.params.mainCategory)
                                mainCatFilterArr.push(this.props.match.params.mainCategory)

                        this.setState({ loading: false }, this.filter())
                }

        }

        componentDidMount() {
                subCatFilterArr = [];
                mainCatFilterArr = [];
                manufFilterArr = [];

                // if any props match params are in the url, push them to appropriate arrays
                if (this.props.match.params.manufacturer)
                        manufFilterArr.push(this.props.match.params.manufacturer)
                if (this.props.match.params.subCategory)
                        subCatFilterArr.push(this.props.match.params.subCategory)
                if (this.props.match.params.mainCategory)
                        mainCatFilterArr.push(this.props.match.params.mainCategory)

                this.setState({ fetchedProducts: Products, curProducts: Products, loading: false });

                paramsFiltersApplied = false;
        }

        filter() {
                if (manufFilterArr.length > 0 || subCatFilterArr.length > 0 || mainCatFilterArr.length > 0) {
                        let tempArr = [];

                        // for some reason if i use 'len' instead of what it is equal to, the loop doesnt stop
                        const len = this.state.fetchedProducts.length;

                        for (let i = 0; i < len; i++) {
                                let found = false;
                                const curProduct = this.state.fetchedProducts[i];

                                // check if the product matches any of the manufacturers in their filter array
                                for (let j = 0; j < manufFilterArr.length; j++) {
                                        if (manufFilterArr[j].toUpperCase() === curProduct.manufacturer.toUpperCase()) {
                                                found = true;
                                                break;
                                        }

                                }

                                // if a manufacturer filter was selected and a product wasnt found, go to the next product
                                if (!found && manufFilterArr.length > 0)
                                        continue;


                                // check if the product matches any of the subcategory in their filter array
                                if (subCatFilterArr.length > 0)
                                        found = false;

                                for (let j = 0; j < subCatFilterArr.length; j++) {
                                        if (subCatFilterArr[j].toUpperCase() === curProduct.subCategory.toUpperCase()) {
                                                found = true;
                                                break;
                                        }
                                }

                                // if there are sub category filters selected and a product wasnt found, go to the next product
                                if (!found && subCatFilterArr.length > 0)
                                        continue;


                                // check if the product matches any of the maincategory in their filter array
                                if (mainCatFilterArr.length > 0)
                                        found = false;

                                for (let j = 0; j < mainCatFilterArr.length; j++) {
                                        if (mainCatFilterArr[j].toUpperCase() === curProduct.mainCategory.toUpperCase()) {
                                                found = true;
                                                break;
                                        }
                                }


                                if (found) {
                                        tempArr.push(curProduct)
                                }
                        }

                        this.setState({ curProducts: tempArr, filtered: true },)

                }
                // no filters were present so curProducts are set to the products fetched from the db (all products)
                else {
                        this.setState({ curProducts: this.state.fetchedProducts, filtered: true },)
                }
        }

        // main filtering function
        addAndRemoveFilters(value, type) {
                switch (type) {
                        case 'MANUFACTURER':
                                // remove the value from the filter arr
                                if (manufFilterArr.includes(value)) {
                                        manufFilterArr = manufFilterArr.filter(el => el !== value);
                                        this.filter()
                                }

                                else if (value === undefined)
                                        this.filter()
                                else {
                                        manufFilterArr.push(value);
                                        this.filter()
                                }
                                break;

                        case 'SUB':
                                // remove the value from the filter arr
                                if (subCatFilterArr.includes(value)) {
                                        subCatFilterArr = subCatFilterArr.filter(el => el !== value)
                                        this.filter()
                                }
                                else if (value === undefined)
                                        this.filter()
                                else {
                                        subCatFilterArr.push(value)
                                        this.filter()

                                }
                                break;


                        case 'MAIN':
                                // remove the value from the filter arr
                                if (mainCatFilterArr.includes(value)) {
                                        mainCatFilterArr = mainCatFilterArr.filter(el => el !== value);
                                        this.filter();
                                }
                                else if (value === undefined)
                                        this.filter()
                                else {
                                        mainCatFilterArr.push(value);
                                        this.filter();
                                }
                                break;
                        // case if params are getting set to the arrays and products are filtered
                        case undefined:
                                this.filter()
                                break;
                        default:
                                break;

                }
        }




        render() {
                // using setState is too slow and for the purposes of this webpage state is not required for these items because they are only initialized and then get their data ONCE.
                let typesArr = [], availSubCats = [], returnable = <div style={{ height: 'inherit', background: 'white' }} />;

                if (this.props.match.params.manufacturer) {
                        const filteredByManuf = Products.filter(x => x.manufacturer.toLowerCase() === this.props.match.params.manufacturer.toLowerCase() && x.manufacturer);
                        availSubCats = (filterLowercase([...new Set(filteredByManuf.map(product => product.subCategory))]));
                }

                if (this.props.match.params.mainCategory) {
                        const filteredByMainCat = Products.filter(x => x.mainCategory.toLowerCase() === this.props.match.params.mainCategory.toLowerCase() && x.mainCategory);
                        availSubCats = (filterLowercase([...new Set(filteredByMainCat.map(product => product.subCategory))]));
                }

                if (!this.state.loading) {
                        // works only for the params of the url
                        if (this.props.match.params.manufacturer || this.props.match.params.subCategory || this.props.match.params.mainCategory) {
                                if ((!paramsFiltersApplied) && (subCatFilterArr.length > 0 || mainCatFilterArr.length > 0 || manufFilterArr.length > 0)) {

                                        this.filter();
                                        paramsFiltersApplied = true;
                                }

                                // dont render it if its not filtered
                                if (this.state.filtered)
                                        returnable = <MainContainer availSubCats={availSubCats} mainCategoriesArr={mainCategoriesArr} subCategoriesArr={subCategoriesArr} typesArr={typesArr} this={this} manufacturersArr={manufacturersArr} lang={this.props.match.params.lang} curProducts={this.state.curProducts} />;
                        }
                        // case no params in the url
                        else
                                returnable = <MainContainer availSubCats={availSubCats} mainCategoriesArr={mainCategoriesArr} subCategoriesArr={subCategoriesArr} typesArr={typesArr} this={this} manufacturersArr={manufacturersArr} lang={this.props.match.params.lang} curProducts={this.state.curProducts} />;
                }

                return returnable;
        }
}

const MainContainer = (props) => {
        const [showFilter, setSF] = useState(false);

        useEffect(() => {
                window.scrollTo(0, 0)
                window.scroll(0, 0)

                // if not on a mobile device, show filter by default
                if (window.innerWidth > 1149) {
                        setSF(true);
                }

        }, [props.this.state]);


        // if user is on a manufacturer page, set the link to the manufacturer link. otherwise - make it /products.
        const clearBtnLink = props.this.props.match.params.manufacturer ? "/" + props.lang + "/products///" + props.this.props.match.params.manufacturer : "/" + props.lang + "/products";



        return (
                <div>
                        {props.curProducts.length === 0 &&
                                <p id="no-products-available-text">{props.lang === "LT" ? "Šiuo metu produktų neturime." : "No products available."}</p>
                        }

                        <div id='allproducts-container' >
                                {/* sidebar */}

                                <div id="sidebar-container-2">
                                        {!showFilter && window.innerWidth < 1149 &&
                                                <div className="flexbox-container">
                                                        <p onClick={() => setSF(!showFilter)} id="filter-btn">
                                                                {props.lang === "LT" ? "filtrai" : props.lang === "EN" && "filters"}
                                                        </p>
                                                </div>

                                        }

                                        {showFilter &&
                                                <div id="sidebar-container" >
                                                        <div id="sidebar-btn-container">
                                                                {
                                                                        window.innerWidth < 1149 &&
                                                                        <div className="flexbox-container">
                                                                                <p onClick={() => setSF(!showFilter)} id="filter-btn">
                                                                                        {props.lang === "LT" ? "filtrai" : props.lang === "EN" && "filters"}
                                                                                </p>
                                                                        </div>
                                                                }
                                                                <Link onClick={() => window.innerWidth < 1149 && setSF(false)}
                                                                        id="clear-btn" to={clearBtnLink

                                                                        }>{props.lang === "LT" ? "išvalyti filtrus" : props.lang === "EN" && "clear filters"}</Link>

                                                        </div>

                                                        <ul id={"products-sidebar"}>

                                                                {/* <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                                                                {props.mainCategoriesArr.map(curMainCat => {
                                                                        return <SidebarItem key={curMainCat} language={language} translatable={"main"} filterArr={mainCatFilterArr} type={"MAIN"} this={props.this} value={curMainCat} />
                                                                })}
                                                        </div> */}

                                                                <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                                                                        {props.availSubCats.length === 0 ?
                                                                                props.subCategoriesArr.map(curSubCat => {
                                                                                        return <SidebarItem key={curSubCat} language={props.lang} translatable={"second"} filterArr={subCatFilterArr} type={"SUB"} this={props.this} value={curSubCat} />
                                                                                })
                                                                                :
                                                                                props.availSubCats.map(curSubCat => {
                                                                                        return <SidebarItem key={curSubCat} language={props.lang} translatable={"second"} filterArr={subCatFilterArr} type={"SUB"} this={props.this} value={curSubCat} />
                                                                                })
                                                                        }
                                                                </div>


                                                                {/* <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
                                                                {props.manufacturersArr.map(curManufacturer => {
                                                                        return <SidebarItem key={curManufacturer} language={language} translatable={false} filterArr={manufFilterArr} type={"MANUFACTURER"} this={props.this} value={curManufacturer} />
                                                                })}

                                                        </div> */}


                                                        </ul>
                                                </div>
                                        }
                                </div>



                                <div id='products-container'>
                                        {props.curProducts.map(curProduct => {
                                                return <Product key={curProduct.name + curProduct.imageName[0]} lang={props.lang} product={curProduct} />
                                        })}
                                </div>
                        </div>
                </div>
        );
}

// filters
const SidebarItem = (props) => {
        let text = props.value;

        // whether the filter is a mainCategory or a subCategory
        //if (props.translatable === "main" && props.language === "LT")
        //        text = translateMainCats(text);
        //else
        if (props.translatable === "second" && props.language === "LT")
                text = translateSubCats(text);

        return (
                // if its in the filter array, make it bold to show the filter is selected
                props.filterArr.includes(props.value) ?
                        <li key={props.value} className={"type-li"} onClick={(e) => {
                                e.target.classList.toggle("bold-text");
                                props.this.addAndRemoveFilters(props.value, props.type)
                        }}
                                style={{ textAlign: 'right', listStyle: 'none' }}>

                                <p key={props.value + 'p'} id={props.value} className={"product-type bold-text"}>
                                        {text}
                                </p>
                        </li>
                        : <li key={props.value} className={"type-li"} onClick={(e) => {
                                e.target.classList.toggle("bold-text");
                                props.this.addAndRemoveFilters(props.value, props.type)
                        }}
                                style={{ textAlign: 'right', listStyle: 'none' }}>
                                <p key={props.value + 'p'} id={props.value} className={"product-type"}> {text}</p>
                        </li>
        );
}



const Product = (props) => {
        const path = "/images/products/" + props.product.manufacturer + '/' + props.product.name + '/' + props.product.imageName[0];

        return (
                <Link key={props.product.manufacturer + props.product.name}
                        style={{ padding: '0.2rem 0', height: '22rem', width: '100%' }}
                        to={{
                                pathname: "/" + props.lang + "/products/" + props.product.mainCategory + "/" + props.product.subCategory + '/' + props.product.manufacturer + "/" + props.product.name + "/",
                                product: props.product,
                        }}>
                        <div className={"flexbox-container product-container"} style={{ height: '94%', width: 'inherit', textAlign: 'center' }}>
                                <img style={{ margin: '0 auto' }} className="product-list-photo" src={path} alt={`${props.product.name}-logo`} />
                        </div>

                        <p className={"product-name"}><b>{props.product.manufacturer}</b> {props.product.name}</p>
                </Link>
        );
}
