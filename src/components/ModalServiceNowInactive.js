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
                                        <p className="cardInfo"><b>{item.boldDesc + " "}</b>{item.description + " (" + item.year + ")"}</p>
                                    </div>
                                </div>
                            )
                        })
                    }


                    {/* <div className="contentCard">
                        <div className="cardImg"></div>

                    </div>
                    <div className="contentCard">
                        <div className="cardImg"></div>
                    </div> */}

                </div>



            </div>
        </div>
    )
}

export default ModalServiceNowInactive;