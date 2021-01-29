import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
var paramsFiltersApplied = false;

export default class AllProducts extends Component {
        constructor(props) {
                super(props);
                this.state = { allTypes: [], curProducts: [], fetchedProducts: [], manufFilterArr: [], loading: true };
        }


        componentDidMount() {
                axios.get("http://localhost:5000/products/")
                        .then(response => {
                                this.setState({ fetchedProducts: response.data, curProducts: response.data, loading: false });
                        })
                        .catch((error) => {
                                console.log(error);
                        })

                if (this.props.match.params.manufacturer !== undefined) {
                        this.setState({ manufFilterArr: [this.props.match.params.manufacturer] })
                }
                console.log('mounted')
                paramsFiltersApplied = false;
        }



        brr() {
                if (this.state.manufFilterArr.length > 0) {
                        console.log('manufacturer filters have been found')
                        console.log(this.state.manufFilterArr)
                        var tempArr = this.state.curProducts;

                        // for some reason if i use 'len' instead of what it is equal to, the loop doesnt stop
                        var len = this.state.fetchedProducts.length;
                        for (var i = 0; i < len; i++) {
                                var found = false;
                                var curProduct = this.state.fetchedProducts[i];

                                for (var j = 0; j < this.state.manufFilterArr.length; j++) {
                                        if (this.state.manufFilterArr[j] === curProduct.manufacturer) {
                                                found = true;
                                                break;
                                        }

                                }


                                if (found) {

                                        tempArr.push(curProduct)
                                }
                        }

                        console.log(tempArr)
                        this.setState({ curProducts: tempArr }, console.log(this.state.curProducts))

                }
                else
                        this.setState({ curProducts: this.state.fetchedProducts }, console.log(this.state.curProducts))
        }

        // main filtering function. if this gets called - we need to start with a fresh empty array
        asd(manufacturer) {
                // remove the value from the filter arr
                if (this.state.manufFilterArr.includes(manufacturer)) {
                        console.log('if')
                        console.log(manufacturer)

                        this.setState({
                                curProducts: [],
                                manufFilterArr: this.state.manufFilterArr.filter(el => el !== manufacturer)

                        },

                                this.brr)
                }
                else if (manufacturer === undefined) {
                        console.log('undefined')
                        console.log(this.state.manufFilterArr)

                        this.setState(
                                {
                                        curProducts: [],
                                }
                                ,
                                this.brr
                        );
                }

                else {
                        console.log('else')
                        console.log(manufacturer)
                        console.log(this.state.manufFilterArr)

                        this.setState(
                                {
                                        curProducts: [],
                                        manufFilterArr: [...this.state.manufFilterArr, manufacturer]
                                }
                                ,
                                this.brr
                        );
                }
        }


        findAllManufacturers(manufacturersArr) {
                this.state.fetchedProducts.map(product => {
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




        findAllTypes(typesArr) {
                this.state.fetchedProducts.map(product => {
                        var found = false;
                        // sitam turi but filtruotas o ne fetched
                        for (let i = 0; i < typesArr.length; i++)
                                if (typesArr[i].toUpperCase() === product.type.toUpperCase()) {
                                        found = true;
                                        break;
                                }


                        if (!found && product.type !== "")
                                typesArr.push(product.type.toUpperCase());

                });
        }

        render() {
                // using setState is too slow and for the purposes of this webpage state is not required for these items because they are only initialized and then get their data ONCE.
                var typesArr = [], manufacturersArr = [], returnable = <div style={{ height: 'inherit', background: 'white' }}></div>;
                if (!this.state.loading) {
                        // if the length is above 0, then the types have been found 
                        this.findAllTypes(typesArr);
                        this.findAllManufacturers(manufacturersArr);

                        console.log(paramsFiltersApplied)

                        // works only for the params
                        if (this.props.match.params.manufacturer !== undefined || this.props.match.params.subCategory !== undefined || this.props.match.params.mainCategory !== undefined || this.props.match.params.type1 !== undefined)
                                if (!paramsFiltersApplied && this.state.manufFilterArr.length > 0) {
                                        console.log('renderif')
                                        console.log(this.state.manufFilterArr)


                                        this.asd();
                                        paramsFiltersApplied = true;
                                }

                        returnable = <MainContainer typesArr={typesArr} this={this} manufacturersArr={manufacturersArr} lang={this.props.match.params.lang} curProducts={this.state.curProducts} />;

                }
                return returnable;
        }
}

const MainContainer = (props) => {
        const language = useLocation().pathname[1] + useLocation().pathname[2];

        // scroll up on every route change
        useEffect(() => {
                if (document.getElementsByClassName('container')[0] !== undefined) {
                        // document.getElementsByClassName('container')[0].scrollTop = 0;
                        document.getElementsByClassName('container')[0].scrollTo({
                                top: 0,
                                behavior: 'smooth'
                        });


                }
        }, [props.this.state]);

        return (

                < div style={{ background: 'white', display: 'grid', minHeight: 'inherit', paddingBottom: '5rem', gridTemplateColumns: '25% 75%' }}>
                        {/* sidebar */}
                        <div >
                                <ul id={"products-sidebar"}>
                                        <div style={{ textAlign: 'center' }}>
                                                <p className={"sidebar-subtext"}>{language === "LT" ? "TIPAS" : language === "EN" && "TYPE"}</p>
                                                {props.typesArr.map(curType => {
                                                        // jei keiciu sita returna  - keist ir apacioj
                                                        return <Type this={props.this} type={curType} />
                                                })}
                                        </div>

                                        {/*
 CIA NE TYPE o manufacturer turetu but arba sidebar-item
*/}
                                        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                                                <p className={"sidebar-subtext"}>{language === "LT" ? "GAMINTOJAI" : language === "EN" && "MANUFACTURERS"}</p>
                                                {props.manufacturersArr.map(curManufacturer => {
                                                        // jei keiciu sita returna  - keist ir apacioj
                                                        return <Type this={props.this} type={curManufacturer} />
                                                })}
                                        </div>


                                </ul>
                        </div>
                        {/* products */}
                        < div style={{ height: 'inherit', display: 'grid', minHeight: 'inherit', gridTemplateColumns: '33.3333% 33.3333% 33.3333%', marginRight: '5rem' }}>
                                {props.curProducts.map(curProduct => {
                                        return <Product type lang={props.lang} product={curProduct} />;
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
                props.this.state.manufFilterArr.includes(props.type) ?
                        <li className={"type-li"} onClick={(e) => {
                                e.target.classList.toggle("bold-text");
                                props.this.asd(props.type)
                        }}
                                style={{ textAlign: 'right', listStyle: 'none' }}>
                                <p id={props.type} style={{ fontSize: '1.15rem', }} className={"product-type bold-text"}> {props.type}</p>
                        </li>
                        : <li classname={"type-li"} onClick={(e) => {
                                e.target.classList.toggle("bold-text");
                                props.this.asd(props.type)
                        }}
                                style={{ textAlign: 'right', listStyle: 'none' }}>
                                <p id={props.type} style={{ fontSize: '1.15rem', }} className={"product-type"}> {props.type}</p>
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
                                pathname: "/" + props.lang + "/products/" + props.product.mainCategory + "/" + props.product.subCategory + '/' + props.product.type + "/" + props.product.manufacturer + "/" + props.product.productCode + "/" + props.product._id + "/" + props.product.name + "/" + props.product.color,
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