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
                        var productFromJson = Products.find(el => el.name === this.props.match.params.name);
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

        render() {
                var i = 0;

                return (
                        <div style={{ height: 'inherit' }} >
                                <div id="product-page-grid">

                                        <p id="product-text">{this.props.match.params.lang === "LT" ? this.state.info[0] : this.props.match.params.lang === "EN" && this.state.info[1]}</p>

                                        <div>

                                                <div id="prod-photo-container">

                                                        {!this.state.loading && <img id="main-product-img" width={300} height={200} src={this.state.path + this.state.imageName[i]} style={{ fontSize: '0' }} alt="main-product-photo" />}


                                                        {/* 
                                                                // // BUTINAI PERDARYT KITA SPRENDIMA DEL IMG KAD NESIKARTOTU
                                                                // this.imageExists(this.state.path + this.state.imageName[i] + ".jpg") ? <img id={"main-product-img"} width={400} height={300} src={this.state.path + this.state.imageName[i] + ".jpg"} style={{ fontSize: '0' }} alt="logo" /> // sometimes the alt loads before the image so font size 0 hides it
                                                                // :
                                                                // this.imageExists(this.state.path + this.state.imageName[i] + ".png") ? <img width={400} height={300} src={this.state.path + this.state.imageName[i] + '.png'} alt="logo" />
                                                                //         :
                                                                //         this.imageExists(this.state.path + this.state.imageName[i] + ".jpeg") ? <img width={400} height={300} src={this.state.path + this.state.imageName[i] + '.jpeg'} alt="logo" />
                                                                //                 :
                                                                //                 this.imageExists(this.state.path + this.state.imageName[i] + ".svg") ? <img width={400} height={300} src={this.state.path + this.state.imageName[i] + '.svg'} alt="logo" />
                                                                //                         :
                                                                //                         this.imageExists(this.state.path + this.state.imageName[i] + ".bmp") ? <img width={400} height={300} src={this.state.path + this.state.imageName[i] + '.bmp'} alt="logo" />
                                                                //                                 :

                                                                //                                 <img width={400} height={300} src={"/images/no_image.png"} alt="404img" /> */}

                                                        <p id="product-name"><b>{this.state.manufacturer}</b> {this.state.name}</p>
                                                </div>
                                        </div>

                                        <div>

                                                {!this.state.loading &&
                                                        this.state.imageName.map(() => {
                                                                i++;

                                                                if (this.state.imageName[i] !== undefined)
                                                                        return (
                                                                                <div id="prod-photo-container">
                                                                                        <img width={300} height={200} src={this.state.path + this.state.imageName[i]} style={{ fontSize: '0' }} alt="logo" />
                                                                                        {console.log(this.state.imageName[i])}

                                                                                        {/* {this.imageExists(this.state.path + this.state.imageName[i] + ".jpg") ? <img width={350} height={200} src={this.state.path + this.state.imageName[i] + ".jpg"} style={{ fontSize: '0' }} alt="logo" /> // sometimes the alt loads before the image so font size 0 hides it
                                                                                                :
                                                                                                this.imageExists(this.state.path + this.state.imageName[i] + ".png") ? <img width={400} height={300} src={this.state.path + this.state.imageName[i] + '.png'} alt="logo" />
                                                                                                        :
                                                                                                        this.imageExists(this.state.path + this.state.imageName[i] + ".jpeg") ? <img width={400} height={300} src={this.state.path + this.state.imageName[i] + '.jpeg'} alt="logo" />
                                                                                                                :
                                                                                                                this.imageExists(this.state.path + this.state.imageName[i] + ".svg") ? <img width={400} height={300} src={this.state.path + this.state.imageName[i] + '.svg'} alt="logo" />
                                                                                                                        :
                                                                                                                        this.imageExists(this.state.path + this.state.imageName[i] + ".bmp") ? <img width={400} height={300} src={this.state.path + this.state.imageName[i] + '.bmp'} alt="logo" />
                                                                                                                                :

                                                                                                                                <img width={400} height={300} src={"/images/no_image.png"} alt="404img" />} */}

                                                                                </div>
                                                                        );
                                                        })}

                                        </div>
                            
                                                {/* <Footer/> */}
                                </div>
                        </div >
                );


        }

}
