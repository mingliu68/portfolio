import React, { useState } from "react";
import ModalServiceNowActiveImages from "./ModalServiceNowActiveImages";



const ModalServiceNowActive = (props) => {
    const { project, index, activeImg, setActiveImg } = { ...props }
    //const [activeImg, setActiveImg] = useState(0);

    return (
        <div className="serviceNowModalContentContainer">
            <div className="serviceNowModalContentTitle">
                {project.name}
            </div>

            <div className="serviceNowModalContentMain">
                {
                    project.img.length > 0 ?
                        <ModalServiceNowActiveImages images={project.img} activeImg={activeImg} setActiveImg={setActiveImg} />
                        :
                        null
                }
                <div className="serviceNowModalContent">
                    <p style={{ borderLeft: "10px solid rgb(41, 62, 64)", paddingLeft: "10px" }}>{project.techDescription}</p>
                    <p>{project.description}</p>
                    <div><a href={project.github} target="_blank">github</a></div>
                </div>

            </div>
        </div>
    )
}

export default ModalServiceNowActive;