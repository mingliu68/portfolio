import React from 'react';
import { projects } from '../data';

const ProjectBoard = (props) => {
    const { active, setActive } = { ...props }
    return (
        <div
            style={{
                position: "absolute",
                width: "100%",
                height: 580,
                backgroundColor: "white",
                transitionDuration: "0.5s",
                zIndex: 20,
                bottom: (active ? 0 : -580),
                transitionDelay: "0.5s"
            }}
            onClick={() => setActive(0)}
        >
            {
                active
                    ? <h1>{projects[active - 1].name}</h1>
                    : null
            }
        </div>
    )
}

export default ProjectBoard;