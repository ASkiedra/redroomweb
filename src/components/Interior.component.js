import React from "react";

function importAll(r) {
        return r.keys().map(r);
}

const images = importAll(require.context('../../public/images/interior', false, /\.(jpg|bmp|ico|png|jpe?g|svg)$/));

const enlargeImage = (imgSrc) => {
        if ( document.getElementById("background-container") !== undefined)
        {
                console.log(document.getElementById("background-container"))
                document.getElementById("background-container").classList.toggle("display-none");
                document.getElementById("enlarged-img").src = imgSrc;

        }
}

const Interior = () => {
        return (
                < div style={{ minHeight: 'inherit' }}>
                        <div onClick={() => document.getElementById("background-container").classList.toggle("display-none")} class="display-none" id="background-container">
                                <div id="background-container-2">
                                <img id="enlarged-img" src="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg"/>
                                </div>

                        </div>
                        <div id="interior-container" style={{ paddingBottom: '12rem' }}>
                                {
                                        images.map(element => {
                                                return (
                                                        <img onClick={(e) => enlargeImage(e.target.src)} src={element.default} />
                                                )
                                        })
                                }
                        </div>
                </div >
        );
}

export default Interior;