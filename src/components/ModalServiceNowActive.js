import React from "react";
import ModalServiceNowActiveImages from "./ModalServiceNowActiveImages";



const ModalServiceNowActive = (props) => {
    const { project, index } = { ...props }

    return (
        <div className="serviceNowModalContentContainer">
            <div className="serviceNowModalContentTitle">
                {project.name}

            </div>

            <div className="serviceNowModalContentMain">
                {
                    project.img.length > 0 ?
                        <ModalServiceNowActiveImages images={project.img} />
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