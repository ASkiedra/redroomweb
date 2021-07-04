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
                                        images.map((el, i) => <div id="interior-photo-container" key={i + '-interior-photo'}>
                                                <img 
                                                        src={el.default}
                                                        onClick={e => enlargeImage(e.target.src)}
                                                        style={{ transform: 'scale(2.3)', cursor: 'pointer' }}
                                                        alt={el.default + '-photo'}
                                                />
                                        </div>)
                                }
                        </div>
                </div>
        );
}

export default Interior;