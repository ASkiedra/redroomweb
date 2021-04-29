import React, { Component } from "react";
import Products from '../modules/products';
import { Link } from "react-router-dom";


export default class ProductPage extends Component {
        state = {
                imageName: ['none'],
                manufacturer: undefined,
                info: [],
                name: undefined,
                path: undefined,
                loading: true
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
                        const productFromJson = Products.find(el => el.name === this.props.match.params.name && el.manufacturer === this.props.match.params.manufacturer);

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



        swapImages(target) {
                // if the click was on one of the side images and main picture is defined or not null (loaded in general)
                if ((target.id === "img1" || target.id === 'img2') && document.getElementById('main-product-image')) {
                        const temp = document.getElementById('main-product-image').src;
                        document.getElementById('main-product-image').src = target.src;
                        target.src = temp;
                }
        }

        separateWords(text) {
                let char = text[0], index = 0;

                // find the index where the text needs to be cut
                while (char !== ' ') {
                        index++;
                        char = text[index]

                        // if the text is over
                        if (index === text.length) {
                                index = -1;
                                break;
                        }
                }

                return [text.substr(0, index), text.substr(index)]
        }


        enlargeImage = (imgSrc) => {
                if (document.getElementById("background-container")) {
                        document.getElementById("background-container").style.top = window.pageYOffset + 'px';
                        document.getElementById("product-page-grid").style.opacity = "0.5";
                        document.getElementById("background-container").classList.toggle("display-none");
                        document.getElementsByTagName("body")[0].classList.toggle("setHeightLimit");
                        document.getElementById("enlarged-img").src = imgSrc;
                }
        }

        render() {
                let i = 0;

                return (
                        <div style={{ paddingTop: '1rem', paddingBottom: '18rem', minHeight: 'inherit' }} >
                                {/* hidden by default */}
                                <div style={{ cursor: 'pointer', background: 'rgb(0 0 0 / 85%)' }} onClick={() => {
                                        document.getElementById("background-container").classList.toggle("display-none");
                                        document.getElementById("product-page-grid").style.opacity = "1";
                                        document.getElementsByTagName("body")[0].classList.toggle("setHeightLimit");
                                }} className="display-none" id="background-container">

                                        <div id="background-container-2">
                                                <img className="big-img-container" style={{ borderRadius: '5px', zIndex: '111' }} onClick={() => {
                                                        document.getElementById("product-page-grid").style.opacity = "1";

                                                }} id="enlarged-img" alt='enlarged' src="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg" />

                                        </div>

                                </div>

                                <div id="product-page-grid">
                                        {this.state.info[0] === "Susisiekite su mumis dėl daugiau informacijos." ?
                                                <Link id="product-text" to={{
                                                        pathname: '/' + this.props.match.params.lang + '/inquire',
                                                        productName: this.state.manufacturer + ' ' + this.state.name + '. '
                                                }}>
                                                        <span>
                                                                {this.props.match.params.lang === "LT" ?
                                                                        <>
                                                                                <b>{this.separateWords(this.state.info[0])[0]}</b>{this.separateWords(this.state.info[0])[1]}
                                                                        </>
                                                                        :
                                                                        <>
                                                                                <b>{this.separateWords(this.state.info[1])[0]}</b>{this.separateWords(this.state.info[1])[1]}
                                                                        </>
                                                                }
                                                        </span>

                                                </Link>
                                                :

                                                <p id="product-text">
                                                        {
                                                                !this.state.loading &&
                                                                        this.props.match.params.lang === "LT" ? this.state.info[0] : this.props.match.params.lang === "EN" && this.state.info[1]
                                                        }
                                                </p>
                                        }

                                        <div style={{ maxWidth: '100%', maxHeight: '23rem', height: 'auto' }}>
                                                <div style={{ height: 'inherit', textAlign: 'center', maxWidth: 'inherit', minHeight: '20rem', marginBottom: '1rem', maxHeight: 'inherit' }} id="container-1">
                                                        {!this.state.loading &&
                                                                <img onClick={(e) => this.enlargeImage(e.target.src)}
                                                                        id="main-product-image"
                                                                        src={this.state.path + this.state.imageName[i]}
                                                                        style={{ cursor: 'pointer', maxHeight: 'inherit', minWidth: 'inherit', width: 'inherit', minHeight: '48%', fontSize: '0' }}
                                                                        alt="main-product" />}
                                                </div>

                                                <div id="product-text-container">
                                                        <h3 style={{ display: 'inline', fontWeight: 'normal', textAlign: 'CENTER', position: 'relative', marginTop: '3rem', zIndex: '0' }} id="product-name"><b>{this.state.manufacturer}</b> {this.state.name}</h3>
                                                </div>
                                        </div>

                                        {this.state.imageName.length > 1 &&
                                                <div id="addit-photo-container" style={{ paddingTop: '1.5rem', marginBottom: '-8rem', width: '100%', maxWidth: '100%', overflow: 'hidden', display: 'grid', height: 'auto', maxHeight: '23rem' }}>
                                                        {/* 23 rem because mainproductphoto container has a height of 23rem */}
                                                        {!this.state.loading &&
                                                                this.state.imageName.map(() => {
                                                                        i++;

                                                                        if (this.state.imageName[i])
                                                                                return (
                                                                                        <div key={i + '-item'} id="additional-photo-container2">
                                                                                                <img style={{ maxWidth: '100%', cursor: 'pointer', fontSize: '0', margin: '0 auto' }}
                                                                                                        onClick={(e) => this.swapImages(e.target)} src={this.state.path + this.state.imageName[i]} id={'img' + i} alt={this.state.imageName[i] + "-additional-photo"} />
                                                                                        </div>
                                                                                );
                                                                        // if there arent enough additional photos, the grid would portray them improperly therefore an empty picture seems like a decent solution
                                                                        // 3 because max 3 photos and it starts from 0
                                                                        if (i !== 3) {
                                                                                return <div key={i + '-item'} id="additional-photo-container2">
                                                                                        <img alt='additional-empty-pic' style={{ opacity: '0', height: 'inherit', maxWidth: '100%', cursor: 'pointer', fontSize: '0', margin: '0 auto' }} />
                                                                                </div>
                                                                        }

                                                                        return null;
                                                                })}

                                                </div>
                                        }
                                </div>
                        </div >
                );
        }

}