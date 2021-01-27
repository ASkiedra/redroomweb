import React, { Component } from "react";
import axios from 'axios';



class ProductPage extends Component {
        constructor(props) {
                super(props)
                this.state = {
                        imageName: undefined,
                        loading: true
                }
        }


        componentDidMount() {
                axios.get('http://localhost:5000/products/' + this.props.match.params.productid)
                        .then(response => {
                                this.setState({
                                        imageName: response.data.imagename,
                                        loading: false
                                },
                                        console.log(response.data.imageName))
                        })
        }

        imageExists(imageurl) {
                var http = new XMLHttpRequest();

                // http.open('HEAD', imageurl, false);
                // http.send();

                // dukart alertina kazkodel
                // alert(http.status + imageurl)
                return http.status !== 404;

        }

        render() {
                var linkWithoutSpaces = this.props.match.params.name.replace(/\s/g, ''),
                        path = "/images/products/" + this.props.match.params.name + '/' + this.state.imageName;
                return (
                        <div style={{ height: 'inherit' }} >
                                {/* {!this.state.loading && <img src={"/images/products/" + linkWithoutSpaces + '/' + this.state.imageName + '.png'} alt="nx" />} */}
                                { this.props.match.params.name}
                                {console.log(path + ".png")}
                                { !this.state.loading &&

                                        this.imageExists(path + ".png") ? <img width={400} height={300} src={path + ".png"} alt="logo" />
                                        // ifo netirkina cia kazkodel
                                                :
                                                true ? console.log(123)
                                                :
                                                this.imageExists(path + ".png") ? <img width={400} height={300} src={path + '.png'} alt="logo" />
                                                        :
                                                        this.imageExists(path + ".jpeg") ? <img width={400} height={300} src={path + '.jpeg'} alt="logo" />
                                                                :
                                                                this.imageExists(path + ".svg") ? <img width={400} height={300} src={path + '.svg'} alt="logo" />
                                                                        :
                                                                        this.imageExists(path + ".bmp") ? <img width={400} height={300} src={path + '.bmp'} alt="logo" />
                                                                                :

                                                                                <img width={400} height={300} src={"/images/no_image.png"} alt="no image" />
                                }


                        </div >
                );
        }
}

export default ProductPage;