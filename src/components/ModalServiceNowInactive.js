import React from "react";
import { certificates } from "../data";


const ModalServiceNowInactive = () => {

    return (
        <div className="serviceNowModalContentContainer">
            <div className="serviceNowModalContentTitle">
                Homepage
            </div>
            <div className="serviceNowModalContentMain">
                <div className="cardContainer">
                    {
                        certificates.map((item, index) => {
                            return (
                                <div className="contentCard" index={index}>
                                    <div className="cardImg">
                                        <img src={item.img} />
                                    </div>
                                    <div className="cardInfoContainer">
                                        <h5 className="cardTitle">Certificate</h5>
                                        <p className="cardInfo"><strong>{item.boldDesc + " "}</strong>{item.description + " (" + item.year + ")"}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <h5>Currently in the process of obtaining <strong>ServiceNow</strong> Certified Application Developer certificate</h5>



            </div>
        </div>
    )
}

export default ModalServiceNowInactive;