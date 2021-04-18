import React from 'react';
import { Link } from "react-router-dom";

const Delivery = (props) => {
    return (
        < div style={{ textAlign: 'center', height: 'inherit' }}>
            <Link to={"/" + props.match.params.lang + '/contacts'} style={{ color:'black', textDecoration:'none', marginTop: '13rem', fontSize: '2rem' }}>

                {
                    props.match.params.lang === "LT" ? "Informacija ruošiama, susisiekite dėl tikslaus atsakymo." :
                        props.match.params.lang === "EN" && "Contact us for exact information as it is not ready yet."
                }
            </Link>
        </div >
    );
}

export default Delivery;