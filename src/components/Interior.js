import React from "react";
import FullScreen, { enlargeImage } from "./FullScreen";

const importAll = r => r.keys().map(r);


const images = importAll(require.context('../../public/images/interior', false, /\.(jpg|bmp|ico|png|jpe?g|svg)$/));


const Interior = () => {
        return (
                <div style={{ minHeight: 'inherit' }}>
                        <FullScreen />

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