import React from "react";

const ModalServiceNowCard = (props) => {

    const {key, item} = { ...props };

    return (
        <div className="contentCard" key={key}>
            <div className="cardImg">
                <img src={item.img} alt={item.alt} />
            </div>
            <div className="cardInfoContainer">
                <h4 className="cardTitle">Certificate</h4>
                <p className="cardInfo"><strong>{item.boldDesc + " "}</strong>{item.description}</p>
            </div>
        </div>
    )
}

export default ModalServiceNowCard;
