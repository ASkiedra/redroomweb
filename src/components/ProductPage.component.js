import React, { Component } from "react";
import axios from 'axios';



class ProductPage extends Component {
        constructor(props) {
                super(props)

                this.state = {
                        in: [],
                        info: [],
                        path: undefined,
                        loading: true
                }
        }


        componentDidMount() {
                if (this.props.location.product) {
                        // console.log('cache exists, no data from the database is necessary')
                        this.setState(
                                {
                                        info: this.props.location.product.info,
                                        path: "/images/products/" + this.props.location.product.manufacturer + '/' + this.props.location.product.name + '/' + this.props.location.product.imageName[0],
                                        loading: false,
                                },
                        );
                }
                else {
                        // console.log('no cache is present, therefore we get data from the database');
                        axios.get('http://localhost:5000/products/' + this.props.match.params.productid)
                                .then(response => {
                                        this.setState({
                                                in: response.data.imageName,
                                                info: response.data.info,
                                                path: "/images/products/" + this.props.match.params.manufacturer + '/' + this.props.match.params.name + '/',

                                        },
                                                this.setState({
                                                        loading: false,
                                                })
                                        )
                                }
                                )
                }




        }


        imageExists(imageurl) {
                var http = new XMLHttpRequest();

                http.open('HEAD', imageurl, false);
                http.send();
                // dukart alertina kazkodel
                // alert(imageurl)
                // alert(http.status + imageurl)
                return http.status !== 404;

        }

        render() {
                var i = 0;
                return (
                        <div style={{ height: 'inherit' }} >
                                {!this.state.loading &&
                                        <div>
                                                <p>{this.props.match.params.lang === "LT" ? this.state.info[0] : this.props.match.params.lang === "EN" && this.state.info[1]}</p>

                                                {this.imageExists(this.state.path + this.state.in[0] + ".jpg") ? <img width={400} height={300} src={this.state.path + this.state.in[0] + ".jpg"} alt="logo" />
                                                        :
                                                        this.imageExists(this.state.path + this.state.in[0] + ".png") ? <img width={400} height={300} src={this.state.path + this.state.in[0] + '.png'} alt="logo" />
                                                                :
                                                                this.imageExists(this.state.path + this.state.in[0] + ".jpeg") ? <img width={400} height={300} src={this.state.path + this.state.in[0] + '.jpeg'} alt="logo" />
                                                                        :
                                                                        this.imageExists(this.state.path + this.state.in[0] + ".svg") ? <img width={400} height={300} src={this.state.path + this.state.in[0] + '.svg'} alt="logo" />
                                                                                :
                                                                                this.imageExists(this.state.path + this.state.in[0] + ".bmp") ? <img width={400} height={300} src={this.state.path + this.state.in[0] + '.bmp'} alt="logo" />
                                                                                        :

                                                                                        <img width={400} height={300} src={"/images/no_image.png"} alt="no image" />}


                                        </div>
                                }

                                {
                                        // at least 2 product images defined in the databse
                                        this.state.in.length > 1 &&
                                        this.state.in.map(product => {
                                                i++;
                                                if (this.state.in[i] != undefined)
                                                        return <img src={this.state.path + this.state.in[i] + '.jpg'} />;
                                        })

                                }
                        </div >
                );
        }
}

export default ProductPage;