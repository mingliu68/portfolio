import React from "react";

const ProjectBox = (props) => {

    const { project_position, project, mouseOver, setMouseOver, enlarge, setEnlarge, index, setActive, active } = { ...props }

    return (
        <div style={{ zIndex: (mouseOver === index + 1 ? 15 : 10) }}>
            <div
                className="project"
                style={{
                    borderColor: (enlarge === index + 1 ? "black" : "#333"),
                    right: project_position.right,
                    left: project_position.left,
                    top: project_position.top,
                    bottom: project_position.bottom,
                    transform: (enlarge === index + 1 ? project_position.transformPost : project_position.transformPre),
                }}
                onMouseEnter={() => { setMouseOver(index + 1); setEnlarge(index + 1) }}
                onMouseLeave={() => setEnlarge(0)}
                onClick={() => setActive(index + 1)}
            >
                <img src={project.img} className={mouseOver === index + 1 ? "opacity_100" : "opacity_65"} alt={"Project - " + project.display} />
                <div style={{ paddingTop: 15, color: (mouseOver === index + 1 ? "#333" : "#ccc") }}>{project.display}
                    <div
                        className={active === index + 1 ? "project-mobile mobileActive" : "project-mobile mobileNotActive"}
                    >
                        {
                            project.tech.map((item, index) => {
                                if (index < project.tech.length - 1) {
                                    return <span key={index}>{item}<span style={styles.spanDiamond}>&diams; </span> </span>
                                } else {
                                    return <span key={index}>{item}</span>
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectBox;

const styles = {
    spanDiamond: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 10,
        animation: "none",
    }
}