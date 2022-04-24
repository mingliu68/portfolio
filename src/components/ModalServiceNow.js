import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { serviceNowProjects } from '../data';
import ModalServiceNowActive from "./ModalServiceNowActive";
import ModalServiceNowInactive from "./ModalServiceNowInactive";


const ModalServiceNow = () => {

    const [activeProject, setActiveProject] = useState(-1);

    return (
        <div id="servicenow" className="modal fade serviceNowModal" role="dialog">
            <div data-dismiss="modal" className="serviceNowModalClose" >
                <FontAwesomeIcon icon={faTimes} size="1.5x" />
            </div>
            {/* dark: #1e2c2e, med: #293e40, light: #3c4d4f */}
            <div className="serviceNowModalContainer">
                <div className="serviceNowModalHeader" onClick={() => setActiveProject(-1)} >
                    <span style={{ cursor: "pointer" }}>servicen<span style={{ color: "rgb(128, 182, 17)" }}>o</span>w</span>
                </div>
                <div className="serviceNowModalNavPanel">
                    <ul>
                        {serviceNowProjects.map((project, index) => {
                            return (
                                <li
                                    className={activeProject === index ? "activeProj" : null}
                                    onClick={() => setActiveProject(activeProject != index ? index : -1)}
                                >
                                    {project.name}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="serviceNowModalContentFrame">
                    {
                        activeProject >= 0 ?
                            <ModalServiceNowActive project={serviceNowProjects[activeProject]} index={activeProject} />
                            :
                            <ModalServiceNowInactive />
                    }
                </div>
            </div>
        </div>
    )
}

export default ModalServiceNow;