import React from "react";

function importAll(r) {
        return r.keys().map(r);
}

const images = importAll(require.context('../../public/images/interior', false, /\.(jpg|bmp|ico|png|jpe?g|svg)$/));

const enlargeImage = (imgSrc) => {
        if (document.getElementById("background-container") !== undefined) {
                console.log(document.getElementById("background-container"))
                document.getElementById("background-container").classList.toggle("display-none");
                document.getElementById("enlarged-img").src = imgSrc;

        }
}

const Interior = () => {
        var img;
        return (
                < div style={{ minHeight: 'inherit' }}>
                        <div style={{ cursor: 'pointer' }} onClick={() => document.getElementById("background-container").classList.toggle("display-none")} className="display-none" id="background-container">
                                <div id="background-container-2">
                                        <img id="enlarged-img" alt='enlarged' src="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg" />
                                </div>

                        </div>


                        <div id="interior-container" style={{ paddingBottom: '12rem' }}>
                                {
                                        images.map(element => {
                                                img = new Image();
                                                img.src = element.default;

                                                img.onload = function () {
                                                        var transAmount = 1;
                                                        console.log(img.naturalWidth)
                                                        if (img.naturalWidth / img.naturalHeight < 1.4)
                                                        {
                                                                // alert(this.width + 'x' + this.  height + element.default);
                                                                transAmount=2.7;
                                                                console.log(img.src+' '+transAmount)
                                                                
                                                        }
                                                        console.log(img.src+' '+transAmount)
                                                        
                                                        return (
                                                                <div key={img.src+'-photo'} id="interior-photo-container">
                                                                        <img style={{ transform: 'scale('+transAmount+')',cursor: 'pointer' }} onClick={(e) => enlargeImage(e.target.src)} src={element.default} alt={element.default + '-photo'} />
                                                                </div>
                                                        )

                                                }

                                                return img.onload()

                                              
                                        })
                                }
                        </div>
                </div >
        );
}

export default Interior;