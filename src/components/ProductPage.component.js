import React, { Component } from "react";
import axios from 'axios';



class ProductPage extends Component {
        constructor(props) {
                super(props)

                this.state = {
                        imageName: ['none'],
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
                                        imageName: this.props.location.product.imageName,
                                        info: this.props.location.product.info,
                                        path: "/images/products/" + this.props.location.product.manufacturer + '/' + this.props.location.product.name + '/',
                                },
                                this.setState({
                                        loading:false,
                                })
                        );
                }
                else {
                        // console.log('no cache is present, therefore we get data from the database');
                        axios.get('http://localhost:5000/products/' + this.props.match.params.productid)
                                .then(response => {
                                        this.setState({
                                                imageName: response.data.imageName,
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
                if (http.status !== 200)
                console.log(imageurl)
                // alert(http.status + imageurl)
                return http.status !== 404;

        }

        render() {
                var i = 0;
                return (
                        <div style={{ height: 'inherit' }} >
                                {!this.state.loading &&
                                // async causes problems because imageNames array takes too long to load
                                        this.state.imageName[0] !== 'none' &&
                                        <div>
                                                {console.log(this.state.imageName)}
                                                {console.log(this.state.path + this.state.imageName[0] + ".jpg")}
                                                <p>{this.props.match.params.lang === "LT" ? this.state.info[0] : this.props.match.params.lang === "EN" && this.state.info[1]}</p>

                                                {this.imageExists(this.state.path + this.state.imageName[0] + ".jpg") ? <img width={400} height={300} src={this.state.path + this.state.imageName[0] + ".jpg"} style={{fontSize: '0'}}alt="logo" /> // sometimes the alt loads before the image so font size 0 hides it
                                                        :
                                                        this.imageExists(this.state.path + this.state.imageName[0] + ".png") ? <img width={400} height={300} src={this.state.path + this.state.imageName[0] + '.png'} alt="logo" />
                                                                :
                                                                this.imageExists(this.state.path + this.state.imageName[0] + ".jpeg") ? <img width={400} height={300} src={this.state.path + this.state.imageName[0] + '.jpeg'} alt="logo" />
                                                                        :
                                                                        this.imageExists(this.state.path + this.state.imageName[0] + ".svg") ? <img width={400} height={300} src={this.state.path + this.state.imageName[0] + '.svg'} alt="logo" />
                                                                                :
                                                                                this.imageExists(this.state.path + this.state.imageName[0] + ".bmp") ? <img width={400} height={300} src={this.state.path + this.state.imageName[0] + '.bmp'} alt="logo" />
                                                                                        :

                                                                                        <img width={400} height={300} src={"/images/no_image.png"} alt="no image" />}


                                        </div>
                                }

                                {
                                        // at least 2 product images defined in the databse
                                        this.state.imageName.length > 1 &&
                                        this.state.imageName.map(product => {
                                                i++;
                                                if (this.state.imageName[i] != undefined)
                                                        return <img src={this.state.path + this.state.imageName[i] + '.jpg'} />;
                                        })

                                }
                        </div >
                );
        }
}

export default ProductPage;