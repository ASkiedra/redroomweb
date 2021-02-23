import { Link } from "react-router-dom";
import React, { Component } from "react";
import Products from '../components/products';


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
            'Gaber', 'Saba', 'Accento', 'Porada'];


        this.state.fetchedProducts.forEach(product => {
            var found = false;

            for (let i = 0; i < manufacturers.length; i++)
                if (manufacturers[i] === product.manufacturer) {
                    found = true;
                    break;
                }


            if (!found && product.manufacturer !== "")
                manufacturers.push(product.manufacturer)
        });


        otherManufs.forEach(manuf => {
            var found = false;

            for (let i = 0; i < manufacturers.length; i++)
                if (manufacturers[i] === manuf) {
                    found = true;
                    break;
                }


            if (!found && manuf !== "")
                manufacturers.push(manuf)
        });

    }


    render() {
        var manufacturers = [];

        // 'Novamobili', 'Chairs&More','Longhi', 'Frigerio',  'Desalto', 'Potocco','Montbell',
        // blogos kokybes 'Connubia','Frei frau', 
        this.filter(manufacturers);

        return <ManufacturersContainer language={this.props.match.params.lang} filteredManufacturers={manufacturers} />

    }
}

const ManufacturersContainer = (props) => {
    var i = -1;
    return (
        <div style={{ paddingBottom: '12rem', height: 'inherit' }}>
            <div id='gamintoju-grid' style={{ paddingBottom: '5rem' }}>
                {props.filteredManufacturers.map(manufacturer => {
                    i++;
                    return (
                        <div class="manufacturer-div" key={manufacturer}>
                            <Link className="flexbox-container" style={{
                                width: "100%", height: "100%"
                            }} to={"/" + props.language + "/products/null/null/" + manufacturer}>
                                {/* pritaikyt ta komponenta kur tikrina ar jpg ar bmp ar png ir tt */}
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
