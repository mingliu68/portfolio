import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { project_position, projects } from '../data';
import ProjectBox from './ProjectBox';
import ProjectBoard from './ProjectBoard';

const BlackBoard = () => {
    const [status, setStatus] = useState(false);
    const [mouseOver, setMouseOver] = useState(projects.length);
    const [enlarge, setEnlarge] = useState(0)
    const [active, setActive] = useState(0)

    return (
        <div className={status ? "blackboard boardOn" : "blackboard boardOff"} >
            <div
                className="pulltag-container"
                onClick={() => { setStatus(!status); setActive(0) }}
            >
                <div style={{ width: "100%", minHeight: 40, backgroundColor: "yellow" }} />
                <div style={styles.triangle} />
                {
                    status
                        ? <FontAwesomeIcon icon={faAngleDoubleUp} size="2x" style={styles.arrow} />
                        : <FontAwesomeIcon icon={faAngleDoubleDown} size="2x" style={styles.arrow} />
                }
            </div>

            <div className="project-container">
                {
                    projects.map((project, index) => {
                        return (
                            <ProjectBox
                                mouseOver={mouseOver}
                                setMouseOver={setMouseOver}
                                enlarge={enlarge}
                                setEnlarge={setEnlarge}
                                project_position={project_position[index]}
                                project={project}
                                index={index}
                                key={index}
                                setActive={setActive}
                                active={active}
                            />
                        )
                    })
                }

                <ProjectBoard
                    project={projects[active - 1]}
                    active={active}
                    setActive={setActive}
                />

            </div>

            <h1 className={"blackboard-title"}>
                Ming Liu
                <span style={{ transform: "scale(1.5,1)", color: "red", paddingLeft: 20, paddingRight: 20 }}> ♥ </span>
                The Girl Who Codes
            </h1>
        </div>
    )
}

export default BlackBoard;

const styles = {
    // boardOn: {
    //     top: 40,
    // },
    // boardOff: {
    //     top: -600,
    // },
    title: {
        color: "white",
        width: "100%",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottomStyle: "solid",
        borderBottomWidth: 5,
        borderBottomColor: "white",
        marginBottom: 0,
        paddingBottom: "0.5em",
        fontSize: 28,
        height: 32,
    },
    arrow: {
        position: "absolute",
        left: "50%",
        top: "18%",
        transform: " translate(-50%, 0)"
    },
    triangle: {
        width: 0,
        height: 0,
        borderLeftWidth: 30,
        borderLeftStyle: "solid",
        borderLeftColor: "transparent",
        borderRightWidth: 30,
        borderRightStyle: "solid",
        borderRightColor: "transparent",
        borderTopWidth: 20,
        borderTopStyle: "solid",
        borderTopColor: "yellow",
    }
}