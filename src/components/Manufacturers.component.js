import { Link } from "react-router-dom";
import React, { Component } from "react";
import Products from '../components/products';


export default class Gamintojai extends Component {
    constructor(props) {
        super(props);
        this.state = { fetchedProducts: [], loading: true };
    }

    componentDidMount() {
        console.log('mounted')

        this.setState({ fetchedProducts: Products, loading: false });

    }

    filter(manufacturers) {

        this.state.fetchedProducts.forEach(product => {
            var found = false;
            // sitam turi but filtruotas o ne fetched
            for (let i = 0; i < manufacturers.length; i++)
                if (manufacturers[i] === product.manufacturer) {
                    found = true;
                    break;
                }


            if (!found && product.manufacturer !== "")
                manufacturers.push(product.manufacturer)


        });


    }


    render() {
        var manufacturers = [];

        if (!this.state.loading) {
            this.filter(manufacturers);

        }
        return <GamintojaiContainer language={this.props.match.params.lang} filteredManufacturers={manufacturers} />

    }
}

const GamintojaiContainer = (props) => {
    return (
        <div style={{ paddingBottom: '12rem',height: 'inherit' }}>
            <div id='gamintoju-grid' style={{ paddingBottom: '5rem' }}>
                {props.filteredManufacturers.map(manufacturer => {
                    return (
                        <div key={manufacturer}>
                            <Link class="flexbox-container" style={{
                                width: "100%", height: "100%"
                            }} to={"/" + props.language + "/products/null/null/" + manufacturer}>
                                {/* pritaikyt ta komponenta kur tikrina ar jpg ar bmp ar png ir tt */}
                                <img alt={manufacturer + "-logo"} src={"/images/logos/" + manufacturer + ".png"} />
                            </Link>
                        </div>
                    )
                })}
                <div style={{height: "10rem"}}></div>
            </div>
        </div >
    );
}
