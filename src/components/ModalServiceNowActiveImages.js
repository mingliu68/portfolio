import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';



const ModalServiceNowActiveImages = (props) => {

    const { images, activeImg, setActiveImg } = { ...props }
    //const [activeImg, setActiveImg] = useState(index);

    const changeImg = (value) => {
        let current = activeImg
        setActiveImg(current + value);
    }


    return (
        <div className="serviceNowProjectImgContainer" style={{ position: "relative" }}>
            <div style={{ backgroundImage: `url(${images[activeImg]})` }} className="serviceNowProjectImg" />
            {activeImg > 0 ?
                <div onClick={() => changeImg(-1)} className="sliderArrow leftArrow">
                    <FontAwesomeIcon icon={faAngleLeft} size="2x" />
                </div>
                : null}
            {activeImg < images.length - 1 ?
                <div onClick={() => changeImg(1)} className="sliderArrow rightArrow">
                    <FontAwesomeIcon icon={faAngleRight} size="2x" />
                </div>
                : null}
        </div>
    )
}

export default ModalServiceNowActiveImages;