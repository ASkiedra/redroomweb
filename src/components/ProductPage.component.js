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
                                        imageName: response.data.imageName,
                                        loading: false
                                },
                                console.log(response.data.imageName))
                        })
        }


        render() {
                var linkWithoutSpaces = this.props.match.params.name.replace(/\s/g, '');
                return (
                        <div style={{ height: 'inherit' }} >
                                {!this.state.loading && <img src={"/images/products/"+linkWithoutSpaces+'/'+this.state.imageName+'.png'} alt="nx"/>}
                                { this.props.match.params.name}
                        </div >
                );
        }
}

export default ProductPage;