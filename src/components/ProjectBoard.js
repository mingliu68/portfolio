import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ProjectDetail from './ProjectDetail';

const ProjectBoard = (props) => {
    const { active, setActive, project } = { ...props }

    return (
        <div className={active ? "projectBoard boardActive" : "projectBoard"}   >
            <div className="closeButton">
                <FontAwesomeIcon icon={faTimes} size="1x" style={{ cursor: "pointer" }} onClick={() => setActive(0)} />
            </div>
            <ProjectDetail project={project} />
        </div>
    )
}

export default ProjectBoard;

