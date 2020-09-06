import React from "react";

const ProjectBox = (props) => {

    const { project_position, project, mouseOver, setMouseOver, enlarge, setEnlarge, index } = { ...props }

    return (
        <div
            className="project"
            style={{
                borderColor: (enlarge === index + 1 ? "black" : "#333"),
                right: project_position.right,
                left: project_position.left,
                top: project_position.top,
                bottom: project_position.bottom,
                zIndex: (mouseOver === index + 1 ? 15 : 10),
                transform: (enlarge === index + 1 ? project_position.transformPost : project_position.transformPre),
            }}
            onMouseEnter={() => { setMouseOver(index + 1); setEnlarge(index + 1) }}
            onMouseLeave={() => setEnlarge(0)}
        >
            <img src={project.img} style={{ opacity: (mouseOver === index + 1 ? 1 : 0.65) }} alt={"Project - " + project.display} />
            <div style={{ paddingTop: 15, color: (mouseOver === index + 1 ? "#333" : "#ccc") }}>{project.display}</div>
        </div>
    )
}

export default ProjectBox;