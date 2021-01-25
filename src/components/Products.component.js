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
                        if (product.manufacturer.toUpperCase() === this.props.match.params.manufacturer.toUpperCase()) {
                                filteredArr.push(product)
                        }
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

                var productsArr = [], typesArr = [];

                // only call functions if its loaded (if the data is fetched from the db)
                if (!this.state.loading) {
                        this.findAllTypes(typesArr);

                        if (this.props.match.params.manufacturer) {
                                this.filter(productsArr)
                        }
                        else
                                productsArr = this.state.fetchedProducts;

                }
                return (
                        <MainContainer typesArr={typesArr} lang={this.props.match.params.lang} productsArr={productsArr} />
                );
        }
}

const MainContainer = (props) => {
        return (

                < div style={{ background: 'white', display: 'grid', minHeight: 'inherit', paddingBottom: '5rem', gridTemplateColumns: '25% 75%' }}>
                        {/* sidebar */}
                        <div >
                                <ul id={"products-sidebar"}>
                                        {props.typesArr.map(curType => {
                                                return <Type type={curType} />
                                        })}
                                </ul>
                        </div>
                        {/* products */}
                        < div style={{ height: 'inherit', display: 'grid', minHeight: 'inherit', gridTemplateColumns: '33.3333% 33.3333% 33.3333%', marginRight: '5rem' }}>
                                {props.productsArr.map(curProduct => {
                                        return <Product lang={props.lang} product={curProduct} />;
                                })
                                }
                        </div>
                </div >
        );
}

const Type = (props) => {
        return (
                <li style={{ textAlign: 'center' }}>
                        <p className={"product-type"}>{props.type}</p>
                </li>
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
                <Link to={"/" + props.lang + "/products/" + props.product.maincategory + "/" + props.product.type + "/" + props.product.manufacturer + "/" + props.product.productCode + "/" + props.product.name + "/" + props.product.color}>
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




                                <p className={"product-name"}>{props.product.name}</p>
                        </div>
                </Link>
        );
}