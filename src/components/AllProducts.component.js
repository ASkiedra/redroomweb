import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// these should not be global but they cant be in the state too. maybe set them in render(), pass them to components and functions
var paramsFiltersApplied = false,
        subCatFilterArr = [], mainCatFilterArr = [], manufFilterArr = [];

export default class AllProducts extends Component {
        constructor(props) {
                super(props);
                this.state = { curProducts: [], fetchedProducts: [], loading: true };
                // setstate would be better here but async wouldnt be too good
                if (this.props.match.params.manufacturer !== undefined)
                        manufFilterArr.push(this.props.match.params.manufacturer)

        }
        componentDidUpdate(prevProps, prevState, snapshot) {

                // // update the state
                // if (prevProps.location.key !== this.props.location.key) {

                //         // ne vien subcategroy. taip pat ir boldint turi
                //         if (this.props.match.params.subCategory !== undefined) {
                //                 console.log('asd')
                //                 subCatFilterArr.push(this.props.match.params.subCategory)
                //                 this.filter()
                //         }
                // }

        }

        componentDidMount() {
                axios.get("http://localhost:5000/products/")
                        .then(response => {
                                this.setState({ fetchedProducts: response.data, curProducts: response.data, loading: false });
                        })
                        .catch((error) => {
                                console.log(error);
                        })


                console.log('mounted')
                paramsFiltersApplied = false;
        }

        filter() {
                if (manufFilterArr.length > 0 || subCatFilterArr.length > 0 || mainCatFilterArr.length > 0) {
                        var tempArr = [];

                        // for some reason if i use 'len' instead of what it is equal to, the loop doesnt stop
                        var len = this.state.fetchedProducts.length;

                        for (var i = 0; i < len; i++) {
                                var found = false;
                                var curProduct = this.state.fetchedProducts[i];

                                for (let j = 0; j < manufFilterArr.length; j++) {

                                        if (manufFilterArr[j].toUpperCase() === curProduct.manufacturer.toUpperCase()) {
                                                found = true;
                                                break;
                                        }

                                }

                                if (!found && manufFilterArr.length > 0)
                                        continue;


                                // manufacturer was found OR manufacturer wasnt selected 
                                if (found || manufFilterArr.length === 0) {
                                        // if there are sub category filters selected
                                        if (subCatFilterArr.length > 0)
                                                found = false;

                                        for (let j = 0; j < subCatFilterArr.length; j++) {

                                                if (subCatFilterArr[j].toUpperCase() === curProduct.subCategory.toUpperCase()) {
                                                        found = true;
                                                        break;
                                                }

                                        }
                                }

                                if (!found && subCatFilterArr.length > 0)
                                        continue;

                                //  subcategory was found or sub category wasnt selected
                                if (found || subCatFilterArr.length === 0) {
                                        if (mainCatFilterArr.length > 0)
                                                found = false;

                                        for (let j = 0; j < mainCatFilterArr.length; j++) {

                                                if (mainCatFilterArr[j].toUpperCase() === curProduct.mainCategory.toUpperCase()) {
                                                        found = true;
                                                        break;
                                                }

                                        }
                                }


                                if (found) {
                                        tempArr.push(curProduct)
                                }
                        }
                        this.setState({ curProducts: tempArr },)

                }
                // no filters were present so curProducts are set to the products fetched from the db (all products)
                else {
                        this.setState({ curProducts: this.state.fetchedProducts },)
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
                        case undefined:
                                this.filter()
                                break;
                        default:
                                break;

                        // case if params are getting set to the arrays and products are filtered

                }
        }


        findAllManufacturers(manufacturersArr) {
                this.state.fetchedProducts.forEach(product => {
                        var found = false;
                        // sitam turi but filtruotas o ne fetched
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
                        // sitam turi but filtruotas o ne fetched
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
                        // sitam turi but filtruotas o ne fetched
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
                console.log('state update')

                if (!this.state.loading) {
                        // if the length is above 0, then the types have been found 
                        this.findAllManufacturers(manufacturersArr);
                        this.findAllMainCategories(mainCategoriesArr);
                        this.findAllSubCategories(subCategoriesArr);
                        console.log(manufFilterArr)

                        // works only for the params
                        if (this.props.match.params.manufacturer !== undefined || this.props.match.params.subCategory !== undefined || this.props.match.params.mainCategory !== undefined)
                                if (!paramsFiltersApplied && subCatFilterArr.length > 0) {
                                        console.log('renderif')
                                        console.log(manufFilterArr)


                                        this.addAndRemoveFilters();
                                        paramsFiltersApplied = true;
                                }


                        returnable = <MainContainer mainCategoriesArr={mainCategoriesArr} subCategoriesArr={subCategoriesArr} typesArr={typesArr} this={this} manufacturersArr={manufacturersArr} lang={this.props.match.params.lang} curProducts={this.state.curProducts} />;

                }
                return returnable;
        }
}

const MainContainer = (props) => {
        const language = useLocation().pathname[1] + useLocation().pathname[2];
        console.log(useLocation().pathname)

        // scroll up on every route change
        useEffect(() => {

                if (document.getElementsByClassName('container')[0] !== undefined) {
                        // document.getElementsByClassName('container')[0].scrollTop = 0;
                        document.getElementsByClassName('container')[0].scrollTo({
                                top: 0, behavior: 'smooth'
                        });


                }
        }, [props.this.state]);

        return (

                < div style={{ background: 'white', display: 'grid', minHeight: 'inherit', paddingBottom: '5rem', gridTemplateColumns: '25% 75%' }}>
                        {/* sidebar */}
                        <div >
                                <ul id={"products-sidebar"}>

                                        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                                                <p className={"sidebar-subtext"}>{language === "LT" ? "PAGRINDINĖ KATEGORIJA" : language === "EN" && "MAIN CATEGORY"}</p>
                                                {props.mainCategoriesArr.map(curMainCat => {
                                                        // jei keiciu sita returna  - keist ir apacioj
                                                        return <Type filterArr={mainCatFilterArr} type={"MAIN"} this={props.this} value={curMainCat} />
                                                })}
                                        </div>

                                        <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                                                <p className={"sidebar-subtext"}>{language === "LT" ? "ANTRINĖ KATEGORIJA" : language === "EN" && "SUB CATEGORY"}</p>
                                                {props.subCategoriesArr.map(curSubCat => {
                                                        // jei keiciu sita returna  - keist ir apacioj
                                                        return <Type filterArr={subCatFilterArr} type={"SUB"} this={props.this} value={curSubCat} />
                                                })}
                                        </div>
                                        {/* <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                                                <p className={"sidebar-subtext"}>{language === "LT" ? "ANTRINĖ KATEGORIJA" : language === "EN" && "SUB CATEGORY"}</p>
                                                {props.subCategoriesArr.map(curSubCat => {
                                                        // jei keiciu sita returna  - keist ir apacioj
                                                        return <Type type={"SUB"} this={props.this} value={curSubCat} />
                                                })}
                                        </div> */}


                                        {/*
 CIA NE TYPE o manufacturer turetu but arba sidebar-item
*/}
                                        <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
                                                <p className={"sidebar-subtext"}>{language === "LT" ? "GAMINTOJAI" : language === "EN" && "MANUFACTURERS"}</p>
                                                {props.manufacturersArr.map(curManufacturer => {
                                                        // jei keiciu sita returna  - keist ir apacioj
                                                        return <Type filterArr={manufFilterArr} type={"MANUFACTURER"} this={props.this} value={curManufacturer} />
                                                })}
                                        </div>



                                </ul>
                        </div>
                        {/* products */}
                        < div style={{ height: 'inherit', display: 'grid', minHeight: 'inherit', gridTemplateColumns: '33.3333% 33.3333% 33.3333%', marginRight: '5rem' }}>
                                {props.curProducts.map(curProduct => {
                                        return <Product key={curProduct.name + curProduct.imageName[0]} type lang={props.lang} product={curProduct} />;
                                })
                                }
                        </div>


                </div >
        );
}

const Type = (props) => {
        return (

                // cia galima keist tik p o ne p ir li
                // if its in the filter array, make it bold to show the filter is selected
                props.filterArr.includes(props.value) ?
                        <li key={props.value} className={"type-li"} onClick={(e) => {
                                e.target.classList.toggle("bold-text");
                                props.this.addAndRemoveFilters(props.value, props.type)
                        }}
                                style={{ textAlign: 'right', listStyle: 'none' }}>
                                <p key={props.value + 'p'} id={props.value} style={{ fontSize: '1.15rem', }} className={"product-type bold-text"}> {props.value}</p>
                        </li>
                        : <li key={props.value} className={"type-li"} onClick={(e) => {
                                e.target.classList.toggle("bold-text");
                                props.this.addAndRemoveFilters(props.value, props.type)
                        }}
                                style={{ textAlign: 'right', listStyle: 'none' }}>
                                <p key={props.value + 'p'} id={props.value} style={{ fontSize: '1.15rem', }} className={"product-type"}> {props.value}</p>
                        </li>


        );
}



const Product = (props) => {
        // cia masyva padaryt kad vienakart kviestu fja o ji pereitu per visus bmp jpg tt. jei rado -break
        function imageExists(imageurl) {
                var http = new XMLHttpRequest();

                http.open('HEAD', imageurl, false);
                http.send();

                if (http.status !== 200)
                        console.log(imageurl)
                // dukart alertina kazkodel
                return http.status !== 404;

        }

        var path = "/images/products/" + props.product.manufacturer + '/' + props.product.name + '/' + props.product.imageName[0];

        return (
                <Link key={props.product.productCode + props.product.name}
                        style={{ height: '20rem', width: '100%' }}
                        to={{
                                pathname: "/" + props.lang + "/products/" + props.product.mainCategory + "/" + props.product.subCategory + '/' + props.product.manufacturer + "/" + props.product.productCode + "/" + props.product._id + "/" + props.product.name + "/" + props.product.color,
                                product: props.product,
                        }}>
                        <div className={"product-container"} style={{ height: 'inherit', width: 'inherit', textAlign: 'center' }}>
                                {/* cant use <picture> because browser support is bad and some customers definitely use IE or opera mini */}
                                {

                                        imageExists(path + ".jpg") ? <img className="product-list-photo" src={path + ".jpg"} alt="logo" />
                                                :
                                                imageExists(path + ".png") ? <img className="product-list-photo" src={path + '.png'} alt="logo" />
                                                        :
                                                        imageExists(path + ".jpeg") ? <img className="product-list-photo" src={path + '.jpeg'} alt="logo" />
                                                                :
                                                                imageExists(path + ".svg") ? <img className="product-list-photo" src={path + '.svg'} alt="logo" />
                                                                        :
                                                                        imageExists(path + ".bmp") ? <img className="product-list-photo" src={path + '.bmp'} alt="logo" />
                                                                                :

                                                                                <img className="product-list-photo" src={"/images/no_image.png"} alt="not-found" />
                                }




                                <p className={"product-name"}><b>{props.product.manufacturer} </b>{props.product.name}</p>
                        </div>
                </Link>
        );
}