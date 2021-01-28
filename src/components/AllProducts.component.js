import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useLocation } from "react-router-dom";

export default class AllProducts extends Component {
        constructor(props) {
                super(props);
                this.state = { curProducts: [], fetchedProducts: [], loading: true };
        }


        componentDidMount() {
                axios.get("http://localhost:5000/products/")
                        .then(response => {
                                this.setState({ fetchedProducts: response.data, curProducts: response.data, loading: false });
                        })
                        .catch((error) => {
                                console.log(error);
                        })
        }


        filter(filteredArr) {
                this.state.fetchedProducts.map(product => {
                        if (product.manufacturer.toUpperCase() === this.props.match.params.manufacturer.toUpperCase()) {
                                filteredArr.push(product)
                        }
                });

                console.log(this)
        }

        asd(manufacturer) {
                console.log(manufacturer);
                this.setState({ curProducts: this.state.fetchedProducts.filter(product => product.manufacturer === manufacturer) })
                console.log(this.state.fetchedProducts.filter(el => el === manufacturer))
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
                var productsArr = [], manufacturersArr = [], typesArr = [], returnable = <div style={{ height: 'inherit', background: 'white' }}></div>;
                // only call functions if its loaded (if the data is fetched from the db)
                if (!this.state.loading) {
                        // jei konkretaus gamintojo page esu nefiltruoja kitu 
                        this.findAllTypes(typesArr);
                        this.findAllManufacturers(manufacturersArr);

                        if (this.props.match.params.manufacturer !== undefined) {
                                this.filter(productsArr)
                        }
                        else {

                                productsArr = this.state.fetchedProducts;
                        }

                        returnable = <MainContainer this={this} manufacturersArr={manufacturersArr} typesArr={typesArr} lang={this.props.match.params.lang} productsArr={this.state.curProducts} />;

                }
                console.log(productsArr)

                return returnable;
        }
}

const MainContainer = (props) => {
        const language = useLocation().pathname[1] + useLocation().pathname[2];


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
                                {props.productsArr.map(curProduct => {
                                        return <Product type lang={props.lang} product={curProduct} />;
                                })
                                }
                        </div>
                </div >
        );
}

const Type = (props) => {
        return (
                <li classname={"type-li"} onClick={(e) => {
                        e.target.classList.toggle("bold-text");
                        props.this.asd(props.type)
                }} style={{ textAlign: 'right', listStyle: 'none' }}>
                        <p style={{ fontSize: '1.15rem', }} className={"product-type"}>{props.type}</p>
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