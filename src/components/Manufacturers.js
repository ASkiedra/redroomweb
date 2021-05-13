import { Link } from "react-router-dom";
import React from "react";
import filterLowercase, { manufacturersArr } from '../modules/filteredData';

const Manufacturers = ({ language }) => {
    // the client requested manufacturers to be displayed even if they have no products
    // extra ones for the future: 'Novamobili', 'Chairs&More','Longhi', 'Frigerio', 'Desalto', 'Potocco','Montbell', 'Connubia','Frei frau', 
    const otherManufs = ['PIANCA', 'ROBERTI RATTAN', 'SOVET', 'LE COMFORT', 'Gaber', 'Saba', 'Accento', 'Porada'];

    // pass an array that has all of the the manufacturers. NO DUPLICATES, but some problems with case sensitivity are possible 
    const manufacturers = filterLowercase([...new Set(manufacturersArr.concat(otherManufs))]);

    return (
        <div style={{ paddingBottom: '11rem', height: 'inherit' }}>
            <div id='gamintoju-grid' style={{ paddingBottom: '5rem' }}>
                {manufacturers.map(manufacturer => {
                    return (
                        <div className="manufacturer-div" key={manufacturer}>
                            <Link to={`/${language}/products///${manufacturer}`}
                                className="flexbox-container"
                                style={{ width: "100%", height: "100%" }}
                            >
                                <img alt={manufacturer + "-logo"} src={"/images/logos/" + manufacturer + ".png"} />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div >
    );
}

export default Manufacturers;