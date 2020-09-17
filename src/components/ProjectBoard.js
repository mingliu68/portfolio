import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ProjectDetail from './ProjectDetail';

const ProjectBoard = (props) => {
    const { active, setActive, project } = { ...props }

    return (
        <div className={active ? "projectBoard boardActive" : "projectBoard"} >
            <div className="closeButton" onClick={() => setActive(0)} style={{ cursor: "pointer" }}  >
                <FontAwesomeIcon icon={faTimes} size="1x" />
            </div>
            <ProjectDetail project={project} />
        </div>
    )
}

export default ProjectBoard;

