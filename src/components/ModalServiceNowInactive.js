import React from "react";
import { certificates } from "../data";
import ModalServiceNowCard from './ModalServiceNowCard';


const ModalServiceNowInactive = () => {
    return (
        <div className="serviceNowModalContentContainer">
            <div className="serviceNowModalContentTitle">
                Homepage
            </div>
            <div className="serviceNowModalContentMain" >
               
                <div className="cardContainer">
                    {
                        certificates.map((item, index) => {
                            return <ModalServiceNowCard {...item} key={index} />
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