import React, { Component } from "react";
import quintiLogo from '../images/quinti.png';
import piancaLogo from '../images/pianca.png';
import sovetLogo from '../images/sovet.png';
import poradaLogo from '../images/porada.png';
import natuzziLogo from '../images/natuzzi.png';
import bontempiLogo from '../images/bontempi.png';
import dienneLogo from '../images/dienne.png';
import { useLocation } from 'react-router-dom'
import Footer from './footer.component';

// taip papt kaip pfe produktus cia daryt

const Gamintojai = () => {
    const location = useLocation();
    console.log(location.pathname);
    var xd = location.pathname;
    return (
        <div>

        <div id='gamintoju-grid'>
                    <div>

                        <img alt='quintilogo' src={quintiLogo} />
                    </div>

                    <div>
                        <img alt='piancalogo' src={piancaLogo} />
                    </div>

                    <div>
                        <img alt='sovetLogo' src={sovetLogo} />
                    </div>

                    <div>
                        <img alt='dienneLogo' src={dienneLogo} />

                    </div>

                    <div>
                        <img alt='bontempiLogo' src={bontempiLogo} />

                    </div>

                    <div>
                        <img alt='natuzziLogo' src={natuzziLogo} />

                    </div>

                    <div>
                        <img alt='poradaLogo' src={poradaLogo} />

                    </div>








                    <div>
                        <img alt='bontempiLogo' src={bontempiLogo} />

                    </div>

                    <div>
                        <img alt='natuzziLogo' src={natuzziLogo} />

                    </div>

                    <div>
                        <img alt='poradaLogo' src={poradaLogo} />

                    </div>

                    <div>
                        <img alt='bontempiLogo' src={bontempiLogo} />

                    </div>

                    <div>
                        <img alt='natuzziLogo' src={natuzziLogo} />

                    </div>

                    <div>
                        <img alt='poradaLogo' src={poradaLogo} />

                    </div>

                    <div>
                        <img alt='bontempiLogo' src={bontempiLogo} />

                    </div>

                    <div>
                        <img alt='natuzziLogo' src={natuzziLogo} />

                    </div>

                    <div>
                        <img alt='poradaLogo' src={poradaLogo} />

                    </div>






        </div>
                </div>
    );
}

export default Gamintojai;