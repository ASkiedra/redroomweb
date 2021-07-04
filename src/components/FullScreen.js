import React from 'react'

// set a dark backrgound and enlarge the clicked image
export const enlargeImage = (imgSrc, editableComponent) => {
    if (typeof imgSrc !== 'string' || !imgSrc)
        return;
        
    if (editableComponent)
        document.getElementById(editableComponent).style.opacity = '0.5';

    document.getElementById('background-container').style.top = window.pageYOffset + 'px';
    document.getElementById('background-container').classList.toggle('display-none');

    document.getElementById('enlarged-img').src = imgSrc;

    document.getElementsByTagName('body')[0].classList.toggle('setHeightLimit');
};

const toggleFullscreen = editableComponent => {
    if (editableComponent && typeof editableComponent === 'string')
        document.getElementById(editableComponent).style.opacity = '1';

    document.getElementsByTagName('body')[0].classList.toggle('setHeightLimit');
    document.getElementById('background-container').classList.toggle('display-none');
};


const FullScreen = ({editableComponent}) => {
    return (
        // hidden by default
        <div onClick={() => { toggleFullscreen(editableComponent) }}
            className='display-none'
            id='background-container'
        >
            <div id='background-container-2'>
                <img className='big-img-container'
                    id='enlarged-img'
                    onClick={() => { document.getElementById(editableComponent || null).style.opacity = '1'}}
                    src='https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg'
                    alt='enlarged'
                />
            </div>
        </div>
    )
}

export default FullScreen;