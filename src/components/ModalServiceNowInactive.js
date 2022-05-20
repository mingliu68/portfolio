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
                                <div className="contentCard" index={index} key={index}>
                                    <div className="cardImg">
                                        <img src={item.img} alt={item.alt} />
                                    </div>
                                    <div className="cardInfoContainer">
                                        <h4 className="cardTitle">Certificate</h4>
                                        {/* <p className="cardInfo"><strong>{item.boldDesc + " "}</strong>{item.description + " (" + item.year + ")"}</p> */}
                                        <p className="cardInfo"><strong>{item.boldDesc + " "}</strong>{item.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <h4>Currently in the process of obtaining the following certificates:</h4>
                <ul style={{ lineHeight: "1.4" }}>
                    <li><strong>ServiceNow</strong> Certified Application Developer certificate</li>
                </ul>
            </div>
        </div>
    )
}

export default ModalServiceNowInactive;