import React, { Component } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';

export default class Main extends Component {
        constructor(props) {
                super(props);
                this.state = { fetchedProducts: [], loading: true };
        }

        componentDidMount() {

                axios.get("http://localhost:5000/products/")
                        .then(response => {
                                this.setState({ fetchedProducts: response.data, loading: false });
                        })
                        .catch((error) => {
                                console.log(error);
                        })
        }


        filter(filteredArr) {
                this.state.fetchedProducts.map(product => {
                        // sitam turi but filtruotas o ne fetched
                        if (product.manufacturer === this.props.match.params.manufacturer) {
                                filteredArr.push(product)
                        }
                });


        }

        render() {
                if (this.props.match.params.manufacturer) {
                        var filteredProducts = [];
                        this.filter(filteredProducts)

                        return (
                                <MainContainer fetchedProducts={filteredProducts} />
                        );
                }
                else
                        return (

                                <MainContainer fetchedProducts={this.state.fetchedProducts} />
                        );
        }
}

const MainContainer = (props) => {
        // CIA PADARYT KAD LANGUAGE PERMESTU IS APP.JS. ILGAI APRASINET BET TAIP TIKRAI REIKIA

        const location = useLocation();
        let language;

        // cant do props.match.param because some people may land on "/" instead of "/lt" or "/en"
        if (location.pathname.length > 2)
                language = location.pathname[1] + location.pathname[2];
        else
                language = "LT";


        return (

                < div style={{ background: 'white',height: 'inherit', display: 'grid', gridTemplateColumns: '33.33333% 33.33333% 33.33333%' }}>
                        {/* {language === "LT" ? "Sveiki atvyke" : "Welcome"} */}
                        {props.fetchedProducts.map(curProduct => {
                                return <Product product={curProduct} />;
                        })
                        }
                </div >
        );
}





const Product = (props) => {
        // cia masyva padaryt kad vienakart kviestu fja o ji pereitu per visus bmp jpg tt. jei rado -break
        function imageExists(image_url) {

                var http = new XMLHttpRequest();

                http.open('HEAD', image_url, false);
                http.send();

                console.log(http.status != 404)
                return http.status != 404;

        }
        return (
                <div className={props.product.name} style={{ textAlign: 'center' }}>
                        {/* cant use <picture> because IE support is bad and some customers definitely use IE or opera mini */}

                        {

                                imageExists("/images/products/" + props.product.imagename + ".jpg") ? <img width={400} height={300} src={"/images/products/" + props.product.imagename + '.jpg'} alt="logo" />
                                        :
                                        imageExists("/images/products/" + props.product.imagename + ".png") ? <img width={400} height={300} src={"/images/products/" + props.product.imagename + '.png'} alt="logo" />
                                                :
                                                imageExists("/images/products/" + props.product.imagename + ".jpeg") ? <img width={400} height={300} src={"/images/products/" + props.product.imagename + '.jpeg'} alt="logo" />
                                                        :
                                                        imageExists("/images/products/" + props.product.imagename + ".svg") ? <img width={400} height={300} src={"/images/products/" + props.product.imagename + '.svg'} alt="logo" />
                                                                :
                                                                imageExists("/images/products/" + props.product.imagename + ".bmp") ? <img width={400} height={300} src={"/images/products/" + props.product.imagename + '.bmp'} alt="logo" />
                                                                        :

                                                                        <img width={400} height={300} src={"/images/products/" + props.product.imagename + '.404'} alt="404-img-logo" />
                        }




                        <p>{props.product.name}</p>
                </div>

        );
}