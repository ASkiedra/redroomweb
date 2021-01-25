import React, { Component } from "react";
import { Link } from "react-router-dom";
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
                console.log(this.props.match.params.lang)
                if (this.props.match.params.manufacturer) {
                        var filteredProducts = [];
                        this.filter(filteredProducts)

                        // sita visa grozi pakeist i viena returna ir bus ne fetched ar filtered o tiesiog arrayofproducts
                        return (
                                <MainContainer lang={this.props.match.params.lang} fetchedProducts={filteredProducts} />
                        );
                }
                else
                        return (

                                <MainContainer lang={this.props.match.params.lang} fetchedProducts={this.state.fetchedProducts} />
                        );
        }
}

const MainContainer = (props) => {

      

        return (

                < div style={{ background: 'white',height: 'inherit', display: 'grid', minHeight: 'inherit',paddingBottom: '5rem', gridTemplateColumns: '33.33333% 33.33333% 33.33333%' }}>
                        {/* {language === "LT" ? "Sveiki atvyke" : "Welcome"} */}
                        {props.fetchedProducts.map(curProduct => {
                                return <Product lang={props.lang} product={curProduct} />;
                        })
                        }
                </div >
        );
}





const Product = (props) => {
        // cia masyva padaryt kad vienakart kviestu fja o ji pereitu per visus bmp jpg tt. jei rado -break
        function imageExists(imageurl) {

                var http = new XMLHttpRequest();

                http.open('HEAD', imageurl, false);
                http.send();

                // dukart alertina kazkodel
                // alert(http.status + imageurl)
                return http.status !== 404;

        }
        return (
                <Link to ={"/"+props.lang+"/products/"+props.product.maincategory+"/"+props.product.type+"/"+props.product.manufacturer+"/"+props.product.productCode+"/"+props.product.name+"/"+props.product.color}>
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
                </Link>
        );
}