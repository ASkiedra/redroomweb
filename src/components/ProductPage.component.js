import React, { Component } from "react";
import axios from 'axios';



class ProductPage extends Component {
        constructor(props) {
                super(props)

                this.state = {
                        info: [],
                        path: undefined,
                        loading: true
                }
        }


        componentDidMount() {
                if (this.props.location.product) {
                        console.log('cache exists, no data from the database is necessary')
                        this.setState(
                                {
                                        info: this.props.location.product.info,
                                        path: "/images/products/" + this.props.location.product.manufacturer + '/' + this.props.location.product.name + '/' + this.props.location.product.imageName,
                                        loading: false,
                                },
                        );
                }
                else {
                        console.log('no cache is present, therefore we get data from the database');
                        axios.get('http://localhost:5000/products/' + this.props.match.params.productid)
                                .then(response => {
                                        this.setState({
                                                info: response.data.info,
                                                path: "/images/products/" + this.props.match.params.manufacturer + '/' + this.props.match.params.name + '/' + response.data.imageName,
                                                loading: false,
                                        }
                                        )
                                }
                                )
                }




        }


        imageExists(imageurl) {
                var http = new XMLHttpRequest();

                http.open('HEAD', imageurl, false);
                http.send();
                console.log(imageurl)
                // dukart alertina kazkodel
                // alert(imageurl)
                // alert(http.status + imageurl)
                return http.status !== 404;

        }

        render() {
                return (
                        <div style={{ height: 'inherit' }} >
                                <div>
                                        {console.log(this.props)}
                                        <p>{this.props.match.params.lang === "LT" ? this.state.info[0] : this.props.match.params.lang === "EN" && this.state.info[1]}</p>

                                        {this.imageExists(this.state.path + ".jpg") ? <img width={400} height={300} src={this.state.path + ".jpg"} alt="logo" />
                                                :
                                                this.imageExists(this.state.path + ".png") ? <img width={400} height={300} src={this.state.path + '.png'} alt="logo" />
                                                        :
                                                        this.imageExists(this.state.path + ".jpeg") ? <img width={400} height={300} src={this.state.path + '.jpeg'} alt="logo" />
                                                                :
                                                                this.imageExists(this.state.path + ".svg") ? <img width={400} height={300} src={this.state.path + '.svg'} alt="logo" />
                                                                        :
                                                                        this.imageExists(this.state.path + ".bmp") ? <img width={400} height={300} src={this.state.path + '.bmp'} alt="logo" />
                                                                                :

                                                                                <img width={400} height={300} src={"/images/no_image.png"} alt="no image" />}

                                </div>

                        </div >
                );
        }
}

export default ProductPage;