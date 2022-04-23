import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ProjectDetail from './ProjectDetail';

const ProjectBoard = (props) => {
    const { active, setActive, project } = { ...props }
    const [delayStyle, setDelayStyle] = useState({});

    const delaySetActive = () => {
        setDelayStyle({ bottom: "-750px" });
        setTimeout(() => {
            setDelayStyle({})
            setActive(0);
        }, 800);
    }

    return (
        <div className={active ? "projectBoard boardActive" : "projectBoard"} style={delayStyle}>
            <div className="closeButton" onClick={() => delaySetActive()} style={{ cursor: "pointer" }}  >
                <FontAwesomeIcon icon={faTimes} size="1x" />
            </div>
            <ProjectDetail project={project} />
        </div>
    )
}

export default ProjectBoard;

