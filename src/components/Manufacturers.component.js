import { Link } from "react-router-dom";
import React, { Component } from "react";
import filterLowercase, { manufacturersArr } from './filteredData';

export default class Gamintojai extends Component {
    render() {
        // the client requested manufacturers to be displayed even if they have no products
        // 'Novamobili', 'Chairs&More','Longhi', 'Frigerio',  'Desalto', 'Potocco','Montbell',
        //  'Connubia','Frei frau', 
        var otherManufs = [
            'PIANCA', 'ROBERTI RATTAN', 'SOVET', 'LE COMFORT',
            'Gaber', 'Saba', 'Accento', 'Porada'
        ];

        // pass an array that has all of the the manufacturers. NO DUPLICATES, but some problems with case sensitivity are possible 
        var manufacturers = filterLowercase([...new Set(manufacturersArr.concat(otherManufs))]);

        return <ManufacturersContainer language={this.props.match.params.lang} filteredManufacturers={manufacturers} />
    }
}

const ManufacturersContainer = (props) => {
    return (
        <div style={{ paddingBottom: '12rem', height: 'inherit' }}>

            <div id='gamintoju-grid' style={{ paddingBottom: '5rem' }}>

                {props.filteredManufacturers.map(manufacturer => {
                    return (
                        <div className="manufacturer-div" key={manufacturer}>

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
