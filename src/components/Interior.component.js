import React from "react";


function importAll(r) {
        return r.keys().map(r);
}

const images = importAll(require.context('../../public/images/interior', false, /\.(jpg|bmp|ico|png|jpe?g|svg)$/));



const Interior = () => {
        return (
                < div style={{ height: 'inherit' }}>
                        <div id="interior-container">
                                {
                                        images.map(element => {
                                                return (
                                                        <img src={element.default} style={{ width: "15rem", height: ' 10rem' }} />
                                                )
                                        })
                                }
                        </div>
                </div >
        );
}

export default Interior;