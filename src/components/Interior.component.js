import React from "react";

function importAll(r) {
        return r.keys().map(r);
}

const images = importAll(require.context('../../public/images/interior', false, /\.(jpg|bmp|ico|png|jpe?g|svg)$/));

const enlargeImage = (imgSrc) => {
        if (document.getElementById("background-container") !== undefined) {
                document.getElementById("background-container").style.top = window.pageYOffset + 'px';
                document.getElementById("background-container").classList.toggle("display-none");
                document.getElementsByTagName("body")[0].classList.toggle("setHeightLimit");
                document.getElementById("enlarged-img").src = imgSrc;
        }
}

const Interior = () => {
        return (
                <div style={{ minHeight: 'inherit' }}>
                        <div style={{ cursor: 'pointer' }} onClick={() => {
                                document.getElementById("background-container").classList.toggle("display-none");
                                document.getElementsByTagName("body")[0].classList.toggle("setHeightLimit");
                        }} className="display-none" id="background-container">

                                <div id="background-container-2">
                                        <img id="enlarged-img" alt='enlarged' src="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg" />
                                </div>
                        </div>


                        <div id="interior-container" style={{ paddingBottom: '12rem' }}>
                                {
                                        images.map(element => {
                                                return (
                                                        <div key={images.indexOf(element) + 'interior-photo'} id="interior-photo-container">
                                                                <img style={{ transform: 'scale(2.3)', cursor: 'pointer' }} onClick={(e) => enlargeImage(e.target.src)} src={element.default} alt={element.default + '-photo'} />
                                                        </div>
                                                )
                                        })
                                }
                        </div>
                </div>
        );
}

export default Interior;