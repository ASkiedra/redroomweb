import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';

export default class ProductList extends Component {
        constructor(props) {
                super(props);
                this.state = { fetchedProducts: [], loading: true };
        }

        constcomponentDidMount() {
                document.title = 'P L A S T I C F U T U R E '

                axios.get("http://localhost:5000/products/")
                        .then(response => {
                                this.setState({ fetchedProducts: response.data, loading: false });
                        })
                        .catch((error) => {
                                console.log(error);
                        })
        }

        render() {
                return (
                        <Main fetchedProducts={this.state.fetchedProducts} />
                );
        }
}

const Main = (props) => {
        // CIA PADARYT KAD LANGUAGE PERMESTU IS APP.JS. ILGAI APRASINET BET TAIP TIKRAI REIKIA

        const location = useLocation();
        let language;

        // cant do props.match.param because some people may land on "/" instead of "/lt" or "/en"
        if (location.pathname.length > 2)
                language = location.pathname[1] + location.pathname[2];
        else
                language = "LT";


        return (

                < div style={{ height: 'inherit' }}>
                        {language === "LT" ? "KANYE WESTAS" : "KANYE WEST"}
                        {props.fetchedProducts.forEach(element => {
                                console.log(element)
                        })}
                </div >
        );
}
