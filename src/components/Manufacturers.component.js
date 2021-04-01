import { Link } from "react-router-dom";
import React, { Component } from "react";
import Products from '../components/products';
import findAllManufacturers from './findSomething';

export default class Gamintojai extends Component {
    constructor() {
        // 'super' initialises 'this' in the constructor
        super();
        this.state = { fetchedProducts: Products };
    }

    filter(manufacturers) {
        // client requested manufacturers to be displayed even if they have no products
        var otherManufs = [
            'PIANCA', 'ROBERTI RATTAN', 'SOVET', 'LE COMFORT',
            'Gaber', 'Saba', 'Accento', 'Porada'
        ];
        // 'Novamobili', 'Chairs&More','Longhi', 'Frigerio',  'Desalto', 'Potocco','Montbell',
        //  'Connubia','Frei frau', 


        // check for lowercase here
        // add unique manufacturers from the products to the manufacturers that the client wants (typically they will have no available products)
        var allManufs = [...new Set(this.state.fetchedProducts.map(product => product.manufacturer))].concat(otherManufs);
        console.log(allManufs)
        // pass an array that has the manufacturers. NO DUPLICATES 
        manufacturers = findAllManufacturers([...new Set(allManufs)]);

        return manufacturers;
    }


    render() {
        var manufacturers = [];



        manufacturers = this.filter(manufacturers);

        return <ManufacturersContainer language={this.props.match.params.lang} filteredManufacturers={manufacturers} />

    }
}

const ManufacturersContainer = (props) => {
    return (
        <div style={{ paddingBottom: '12rem', height: 'inherit' }}>

            <div id='gamintoju-grid' style={{ paddingBottom: '5rem' }}>

                {props.filteredManufacturers.map(manufacturer => {
                    return (
                        <div class="manufacturer-div" key={manufacturer}>

                            <Link className="flexbox-container" style={{
                                width: "100%", height: "100%"
                            }} to={"/" + props.language + "/products/null/null/" + manufacturer}>

                                <img alt={manufacturer + "-logo"} src={"/images/logos/" + manufacturer + ".png"} />
                            </Link>

                        </div>
                    )
                })}

                <div style={{ height: "10rem" }}></div>

            </div>

        </div >
    );
}
