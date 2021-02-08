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
                if (target.id === "img1" || target.id === 'img2' && document.getElementById('main-product-image') !== undefined && document.getElementById('main-product-image') !== null) {

                        let temp = document.getElementById('main-product-image').src;
                        document.getElementById('main-product-image').src = target.src;
                        target.src = temp;
                }
        }
        render() {
                var i = 0;
                // useeeffect reikia.

                return (
                        <div style={{ paddingTop: '1rem', paddingBottom: '18rem', minHeight: 'inherit' }} >
                                <div id="product-page-grid">

                                        <p id="product-text">{this.props.match.params.lang === "LT" ? this.state.info[0] : this.props.match.params.lang === "EN" && this.state.info[1]}</p>

                                        {/* <div id='big-container' style={{height: '33rem', width: 'auto'}}>

                                                <div style={{maxHeight: 'inherit', width: 'inherit', textAlign: 'center', height: 'inherit'}} id="prod-photo-container">

                                                        {!this.state.loading && <img id="main-product-img"  width={300} height={200} src={this.state.path + this.state.imageName[i]} style={{ width: '100%', height: 'auto', maxHeight: 'inherit', fontSize: '0' }} alt="main-product-photo" />}


                                                        <p style={{position: 'relative', zIndex: '9999'}} id="product-name"><b>{this.state.manufacturer}</b> {this.state.name}</p>
                                                </div>
                                        </div> */}

                                        {/* used to be30 */}
                                        <div style={{ maxWidth: '100%', maxHeight: '100%', height: '23rem' }}>

                                                <div style={{ height: 'inherit', textAlign: 'center', maxWidth: 'inherit', maxHeight: 'inherit' }} id="container-1">

                                                        {!this.state.loading && <img id="main-product-image" src={this.state.path + this.state.imageName[i]} style={{ maxHeight: 'inherit', minWidth: 'inherit', width: 'inherit', minHeight: '48%', fontSize: '0' }} alt="main-product-photo" />}


                                                        <p style={{ position: 'relative', marginTop: '2rem', zIndex: '9999' }} id="product-name"><b>{this.state.manufacturer}</b> {this.state.name}</p>

                                                </div>
                                        </div>

                                        {/* 23 rem because mainproductphoto container has a height of 23rem */}
                                        <div id="addit-photo-container" style={{ width: '100%', maxWidth: '100%', overflow: 'hidden', display: 'grid', height: '23rem' }}>

                                                {!this.state.loading &&
                                                        this.state.imageName.map(() => {
                                                                i++;

                                                                if (this.state.imageName[i] !== undefined)
                                                                        return (
                                                                                <img
                                                                                        style={{ maxWidth: '100%',  cursor: 'pointer', fontSize: '0', margin: '0 auto' }}
                                                                                        onClick={(e) => this.swapImages(e.target)} src={this.state.path + this.state.imageName[i]} id={'img' + i} alt={this.state.imageName[i] + "-additional-photo"} />


                                                                        );
                                                                        // if there arent enough additionla photos, the grid would portray them improperly therefore an empty picture seems like a decent solution
                                                                        // 3 because max 3 photos and it starts from 0
                                                                else if(i !== 3)
                                                                        return <img style={{ maxWidth: '100%',  cursor: 'pointer', fontSize: '0',margin: '0 auto' }} ></img>
                                                        })}

                                        </div>

                                </div>
                        </div >
                );


        }

}

