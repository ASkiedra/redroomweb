import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Products from '../components/products';

// cant store these in the state because it would update too often
var paramsFiltersApplied = false,
        subCatFilterArr = [], mainCatFilterArr = [], manufFilterArr = [];

export default class AllProducts extends Component {
        constructor(props) {
                super(props);

                this.state = { curProducts: [], fetchedProducts: [], loading: true, filtered: false };
        }

        componentDidUpdate(prevProps) {
                if ((prevProps.location.key !== this.props.location.key || prevProps.location.pathname !== this.props.location.pathname)) {
                        subCatFilterArr = []; 
                        mainCatFilterArr = []; 
                        manufFilterArr = [];

                        if (this.props.match.params.manufacturer !== undefined && this.props.match.params.manufacturer !== 'null')
                                manufFilterArr.push(this.props.match.params.manufacturer)
                        if (this.props.match.params.subCategory !== undefined && this.props.match.params.subCategory !== 'null')
                                subCatFilterArr.push(this.props.match.params.subCategory)
                        if (this.props.match.params.mainCategory !== undefined && this.props.match.params.mainCategory !== 'null')
                                mainCatFilterArr.push(this.props.match.params.mainCategory)

                        this.setState({ loading: false }, this.filter())
                }

        }

        componentDidMount() {
                subCatFilterArr = [];
                mainCatFilterArr = [];
                manufFilterArr = [];

                if (this.props.match.params.manufacturer !== undefined && this.props.match.params.manufacturer !== 'null')
                        manufFilterArr.push(this.props.match.params.manufacturer)
                if (this.props.match.params.subCategory !== undefined && this.props.match.params.subCategory !== 'null')
                        subCatFilterArr.push(this.props.match.params.subCategory)
                if (this.props.match.params.mainCategory !== undefined && this.props.match.params.mainCategory !== 'null')
                        mainCatFilterArr.push(this.props.match.params.mainCategory)

                this.setState({ fetchedProducts: Products, curProducts: Products, loading: false });

                paramsFiltersApplied = false;
        }

        filter() {
                if (manufFilterArr.length > 0 || subCatFilterArr.length > 0 || mainCatFilterArr.length > 0) {
                        let tempArr = [];

                        // for some reason if i use 'len' instead of what it is equal to, the loop doesnt stop
                        let len = this.state.fetchedProducts.length;

                        for (var i = 0; i < len; i++) {
                                let found = false;
                                let curProduct = this.state.fetchedProducts[i];

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

                                // console.log('checked subs')

                                // check if the product matches any of the maincategory in their filter array
                                if (mainCatFilterArr.length > 0)
                                        found = false;

                                for (let j = 0; j < mainCatFilterArr.length; j++) {

                                        if (mainCatFilterArr[j].toUpperCase() === curProduct.mainCategory.toUpperCase()) {
                                                console.log(mainCatFilterArr[j].toUpperCase())
                                                console.log(curProduct.mainCategory.toUpperCase())
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

                                else if (value === undefined) {
                                        this.filter()
                                }
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

                                else if (value === undefined) {
                                        this.filter()
                                }

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

                                else if (value === undefined) {
                                        this.filter()
                                }

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


        findAllManufacturers(manufacturersArr) {
                this.state.fetchedProducts.forEach(product => {
                        var found = false;

                        for (let i = 0; i < manufacturersArr.length; i++)
                                if (manufacturersArr[i] === product.manufacturer) {
                                        found = true;
                                        break;
                                }

                        if (!found && product.manufacturer !== "")
                                manufacturersArr.push(product.manufacturer)
                });
        }

        findAllMainCategories(mainCategoriesArr) {
                this.state.fetchedProducts.forEach(product => {
                        var found = false;

                        for (let i = 0; i < mainCategoriesArr.length; i++)
                                if (mainCategoriesArr[i] === product.mainCategory) {
                                        found = true;
                                        break;
                                }

                        if (!found && product.mainCategory !== "")
                                mainCategoriesArr.push(product.mainCategory)
                });
        }

        findAllSubCategories(subCategoriesArr) {
                this.state.fetchedProducts.forEach(product => {
                        var found = false;
                        for (let i = 0; i < subCategoriesArr.length; i++)
                                if (subCategoriesArr[i] === product.subCategory) {
                                        found = true;
                                        break;
                                }
                        if (!found && product.subCategory !== "") {

                                subCategoriesArr.push(product.subCategory)
                        }
                });
        }



        render() {
                // using setState is too slow and for the purposes of this webpage state is not required for these items because they are only initialized and then get their data ONCE.
                var typesArr = [], manufacturersArr = [], mainCategoriesArr = [], subCategoriesArr = [],
                        returnable = <div style={{ height: 'inherit', background: 'white' }}></div>;

                if (!this.state.loading) {
                        // if the length is above 0, then the types have been found 
                        this.findAllManufacturers(manufacturersArr);
                        this.findAllMainCategories(mainCategoriesArr);
                        this.findAllSubCategories(subCategoriesArr);


                        // works only for the params of the url
                        if (this.props.match.params.manufacturer !== undefined || this.props.match.params.subCategory !== undefined || this.props.match.params.mainCategory !== undefined) {
                                if ((!paramsFiltersApplied) && (subCatFilterArr.length > 0 || mainCatFilterArr.length > 0 || manufFilterArr.length > 0)) {

                                        this.filter();
                                        paramsFiltersApplied = true;
                                }

                                // dont render it if its not filtered
                                if (this.state.filtered)
                                        returnable = <MainContainer mainCategoriesArr={mainCategoriesArr} subCategoriesArr={subCategoriesArr} typesArr={typesArr} this={this} manufacturersArr={manufacturersArr} lang={this.props.match.params.lang} curProducts={this.state.curProducts} />;
                        }
                        // case no params in the url
                        else
                                returnable = <MainContainer mainCategoriesArr={mainCategoriesArr} subCategoriesArr={subCategoriesArr} typesArr={typesArr} this={this} manufacturersArr={manufacturersArr} lang={this.props.match.params.lang} curProducts={this.state.curProducts} />;


                }
                return returnable;
        }
}

const MainContainer = (props) => {
        const language = useLocation().pathname[1] + useLocation().pathname[2];
        const [showFilter, setSF] = useState(false);

        // scroll up on every route change
        useEffect(() => {
                window.scrollTo(0, 0)
                window.scroll(0, 0)

                // if not on a mobile device, show filter by default
                if (window.innerWidth > 1149) {
                        setSF(true);
                }

        }, [props.this.state]);

        return (
                <div id='allproducts-container' >
                        {/* sidebar */}
                        <div id="sidebar-container-2">
                                {!showFilter && window.innerWidth < 1149 &&
                                        <div className="flexbox-container">

                                                <p onClick={() => setSF(!showFilter)} id="filter-btn">
                                                        {language === "LT" ? "filtrai" : language === "EN" && "filters"}
                                                </p>
                                        </div>

                                }
                                {
                                        showFilter &&

                                        <div id="sidebar-container" >

                                                <div id="sidebar-btn-container">
                                                        {
                                                                window.innerWidth < 1149 &&

                                                                <div className="flexbox-container">
                                                                        <p onClick={() => setSF(!showFilter)} id="filter-btn">
                                                                                {language === "LT" ? "filtrai" : language === "EN" && "filters"}
                                                                        </p>
                                                                </div>
                                                        }
                                                        <Link onClick={() => function () {
                                                                if (window.innerWidth < 1149)
                                                                        setSF(false)
                                                        }} id="clear-btn" to={"/" + language + "/products"}>{language === "LT" ? "išvalyti filtrus" : language === "EN" && "clear filters"}</Link>

                                                </div>

                                                <ul id={"products-sidebar"}>

                                                        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                                                                {props.mainCategoriesArr.map(curMainCat => {
                                                                        return <SidebarItem key={curMainCat} language={language} translatable={"main"} filterArr={mainCatFilterArr} type={"MAIN"} this={props.this} value={curMainCat} />
                                                                })}
                                                        </div>

                                                        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                                                                {props.subCategoriesArr.map(curSubCat => {
                                                                        return <SidebarItem key={curSubCat} language={language} translatable={"second"} filterArr={subCatFilterArr} type={"SUB"} this={props.this} value={curSubCat} />
                                                                })}
                                                        </div>


                                                        <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
                                                                {props.manufacturersArr.map(curManufacturer => {
                                                                        return <SidebarItem key={curManufacturer} language={language} translatable={false} filterArr={manufFilterArr} type={"MANUFACTURER"} this={props.this} value={curManufacturer} />
                                                                })}

                                                        </div>


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
        );
}

const SidebarItem = (props) => {
        var text = props.value;

        if (props.translatable === "main" && props.language === "LT") {
                switch (props.value.toUpperCase()) {
                        case "DINING ROOM FURNITURE":
                                text = "SVETAINĖS IR VALGOMOJO BALDAI";
                                break;

                        case "DAY SYSTEMS":
                                text = "DIENOS SISTEMOS";
                                break;

                        case "BEDROOM FURNITURE":
                                text = "MIEGAMOJO BALDAI";
                                break;

                        case "OUTDOOR FURNITURE AND ACCESSORIES":
                                text = "LAUKO BALDAI IR AKSESUARAI";
                                break;


                        case "WARDROBE SYSTEMS":
                                text = "SPINTŲ SISTEMOS";
                                break;

                        default:
                                break;
                }
        }
        else if (props.translatable === "second" && props.language === "LT") {
                switch (props.value.toUpperCase()) {
                        case "INDIVIDUALLY PLANNED WARDROBES":
                                text = "INDIVIDUALIAI PROJEKTUOJAMOS DRABUŽINĖS";
                                break;

                        case "SOFA BEDS":
                                text = "SOFA LOVOS";
                                break;

                        case "ARMCHAIRS":
                                text = "FOTELIAI";
                                break;

                        case "BEDS":
                                text = "LOVOS";
                                break;

                        case "BOOKSHELVES":
                                text = "KNYGŲ LENTYNOS";
                                break;


                        case "COFFEE TABLES":
                                text = "KAVOS STALIUKAI";
                                break;

                        case "DINING TABLES":
                                text = "VALGOMOJO STALAI";
                                break;

                        case "SOFAS":
                                text = "SOFOS";
                                break;


                        case "CHAIRS":
                                text = "KĖDĖS";
                                break;

                        case "POUFS":
                                text = "SUOLIUKAI IR PUFAI";
                                break;

                        case "CLOTHING HANGERS":
                                text = "RŪBŲ KABYKLOS";
                                break;


                        case "BEDSIDE CABINETS":
                                text = "SPINTELĖS PRIE LOVOS";
                                break;

                        case "CHESTS OF DRAWERS":
                                text = "KOMODOS";
                                break;

                        case "BEDROOM BENCHES":
                                text = "SUOLAI PRIE LOVOS";
                                break;

                        case "SALON FURNITURE SYSTEMS":
                                text = "SVETAINĖS IR TV BALDŲ SISTEMOS";
                                break;

                        case "WORKPLACE FURNITURE":
                                text = "DARBO VIETOS";
                                break;


                        default:
                                break;
                }
        }
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
        var path = "/images/products/" + props.product.manufacturer + '/' + props.product.name + '/' + props.product.imageName[0];

        return (
                <Link key={props.product.productCode + props.product.name}
                        style={{ height: '20rem', width: '100%' }}
                        to={{
                                pathname: "/" + props.lang + "/products/" + props.product.mainCategory + "/" + props.product.subCategory + '/' + props.product.manufacturer + "/" + props.product.name + "/",
                                product: props.product,
                        }}>
                        <div className={"product-container"} style={{ height: 'inherit', width: 'inherit', textAlign: 'center' }}>
                                {
                                        <img className="product-list-photo" src={path} alt="logo" />
                                }

                                <p className={"product-name"}><b>{props.product.manufacturer} </b>{props.product.name}</p>
                        </div>
                </Link>
        );
}