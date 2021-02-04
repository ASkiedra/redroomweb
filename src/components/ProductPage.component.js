import React, { Component } from "react";
import Products from '../components/products';


export default class ProductPage extends Component {
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
                                        manufacturer: this.props.location.product.manufacturer,
                                        name: this.props.location.product.name,
                                        imageName: this.props.location.product.imageName,
                                        info: this.props.location.product.info,
                                        path: "/images/products/" + this.props.location.product.manufacturer + '/' + this.props.location.product.name + '/',
                                },
                                this.setState({
                                        loading: false,
                                })
                        );
                }
                else {
                        // maybe state.product = product.find... would be simpler instead of state.manuf, state.name 
                        var productFromJson = Products.find(el => el.name === this.props.match.params.name && el.manufacturer === this.props.match.params.manufacturer);


                        this.setState({
                                manufacturer: productFromJson.manufacturer,
                                name: productFromJson.name,
                                imageName: productFromJson.imageName,
                                info: productFromJson.info,
                                path: "/images/products/" + this.props.match.params.manufacturer + '/' + this.props.match.params.name + '/',

                        },
                                this.setState({
                                        loading: false,
                                })
                        )
                }

        }


        // imageExists(imageurl) {
        //         var http = new XMLHttpRequest();

        //         http.open('HEAD', imageurl, false);
        //         http.send();
        //         // dukart alertina kazkodel
        //         // alert(imageurl)
        //         if (http.status !== 200)
        //                 console.log(imageurl)
        //         // alert(http.status + imageurl)
        //         return http.status !== 404;

        // }

        swapImages(target) {
                // if the click was on one of the side images and main picture is defined or not null (loaded in general)
                if (target.id === "img1" || target.id === 'img2' && document.getElementById('main-product-img') !== undefined && document.getElementById('main-product-img') !== null) {

                        let temp = document.getElementById('main-product-img').src;
                        document.getElementById('main-product-img').src = target.src;
                        target.src = temp;
                }
        }
        render() {
                var i = 0;
                // useeeffect reikia.

                return (
                        <div style={{ paddingBottom: '8rem', minHeight: 'inherit' }} >
                                <div id="product-page-grid">

                                        <p id="product-text">{this.props.match.params.lang === "LT" ? this.state.info[0] : this.props.match.params.lang === "EN" && this.state.info[1]}</p>

                                        {/* <div id='big-container' style={{height: '33rem', width: 'auto'}}>

                                                <div style={{maxHeight: 'inherit', width: 'inherit', textAlign: 'center', height: 'inherit'}} id="prod-photo-container">

                                                        {!this.state.loading && <img id="main-product-img"  width={300} height={200} src={this.state.path + this.state.imageName[i]} style={{ width: '100%', height: 'auto', maxHeight: 'inherit', fontSize: '0' }} alt="main-product-photo" />}


                                                        <p style={{position: 'relative', zIndex: '9999'}} id="product-name"><b>{this.state.manufacturer}</b> {this.state.name}</p>
                                                </div>
                                        </div> */}

                                        <div style={{ maxWidth: '100%', height: '30rem' }}>

                                        <div style={{height: 'inherit', textAlign: 'center', maxWidth: 'inherit', maxHeight: 'inherit'}} id="container-1">

                                                {!this.state.loading && <img  src={this.state.path + this.state.imageName[i]} style={{ maxWidth: '50rem', maxHeight:'43rem', minWidth: '20rem', width: 'auto', minHeight: '26rem',  fontSize: '0' }}  alt="main-product-photo" />}


                                                <p style={{ position: 'relative', zIndex: '9999' }} id="product-name"><b>{this.state.manufacturer}</b> {this.state.name}</p>

                                        </div>
                                        </div>



                                        <div id="addit-photo-container" style={{ textAlign: 'center' }}>

                                                {!this.state.loading &&
                                                        this.state.imageName.map(() => {
                                                                i++;

                                                                if (this.state.imageName[i] !== undefined)
                                                                        return (
                                                                                <img onClick={(e) => this.swapImages(e.target)} width={300} height={200} src={this.state.path + this.state.imageName[i]} style={{ fontSize: '0', cursor: 'pointer' }} id={'img' + i} alt="logo" />


                                                                        );
                                                        })}

                                        </div>

                                </div>
                        </div >
                );


        }

}

