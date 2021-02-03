import React from "react";

function importAll(r) {
        return r.keys().map(r);
}

const images = importAll(require.context('../../public/images/interior', false, /\.(jpg|bmp|ico|png|jpe?g|svg)$/));

const enlargeImage = (imgSrc) => {
        console.log(imgSrc)
        if (document.getElementById(imgSrc) !== null && document.getElementById(imgSrc) !== undefined)
                document.getElementById(imgSrc).classList.toggle("enlarged");
}

const Interior = () => {
        return (
                < div style={{ minHeight: 'inherit' }}>
                        <div id="interior-container">
                                {
                                        images.map(element => {
                                                return (
                                                        <img id={element.default} onClick={() =>enlargeImage(element.default)} src={element.default} />
                                                )
                                        })
                                }
                        </div>
                </div >
        );
}

export default Interior;