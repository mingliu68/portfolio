import React from "react";

const ModalServiceNowCard = (props) => {

    const {key, img, alt, boldDesc, description} = {...props}

    return (
        <div className="contentCard" key={key}>
            <div className="cardImg">
                <img src={img} alt={alt} />
            </div>
            <div className="cardInfoContainer">
                <h4 className="cardTitle">Certificate</h4>
                <p className="cardInfo"><strong>{boldDesc + " "}</strong>{description}</p>
            </div>
        </div>
    )
}

export default ModalServiceNowCard;
