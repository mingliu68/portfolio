import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ProjectDetail = (props) => {

    const { project } = { ...props }

    if (project) {
        return (

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: "100%", height: 250, overflow: "hidden", boxShadow: "1px 1px 5px #cccccc" }}>
                    <img src={project.img} style={{ width: "100%", opacity: 0.8 }} />
                </div>
                <div style={{ width: "100%", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                    <h1 style={{ fontFamily: "Montserrat", textTransform: "uppercase" }}>{project.boardDisplay}</h1>
                    {/* <div style={{ fontFamily: "source sans pro", fontSize: 16, fontWeight: 400 }}>{project.description}</div> */}
                    <div style={{ height: 0, width: 300, border: "2px solid #333333", display: "flex", justifyContent: "center", alignItems: "center", margin: "0 10px" }}>
                        <FontAwesomeIcon icon={faStar} size="2x" style={{ backgroundColor: "white", padding: "0 10px", fontSize: 24 }} />
                    </div>

                    <div style={{ display: "flex", padding: "25px 5% 15px", flexWrap: "wrap", justifyContent: "center", alignItems: "center", fontFamily: "source sans pro", fontSize: 14 }}>
                        {

                            project.tech.map((item, index) => {
                                if (index < project.tech.length - 1) {
                                    return <span>{item}<span style={styles.spanDiamond}>&diams; </span> </span>
                                } else {
                                    return <span>{item}</span>
                                }
                            })
                        }
                        {/* <div style={{ display: "flex", padding: "30px 25px 15px", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                            {project.description}
                        </div> */}

                    </div>
                    <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly", fontFamily: "source sans pro", fontSize: 15, lineHeight: 1.3 }}>
                        <div style={{ width: "45%", display: "inline-block", float: "left", textAlign: "right" }}>

                            <div style={{ fontWeight: 600 }}><span style={{ backgroundImage: "linear-gradient(0deg, #daebd4 50%, transparent 50%)" }}>{project.role[0]}</span></div>
                            <div style={{ marginBottom: 10, fontSize: 13, textTransform: "lowercase" }}>{project.role[1]}</div>
                            {project.description}
                        </div>
                        <div style={{ width: "45%", display: "inline-block", float: "right", textAlign: "left" }}>
                            <ul style={{ margin: 0, paddingInlineStart: 20 }}>
                                {
                                    project.techDescription.map((tech, index) => {
                                        return (
                                            <li key={index}>
                                                {tech}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div style={{ position: "absolute", right: 0, top: 0, display: "flex", justifyContent: "flex-end", alignItems: "flex-end", padding: "10px 20px" }}>
                        {
                            project.github
                                ? <a href={project.github} target="_blank" rel="noopener noreferrer nofollow" style={{ padding: 5 }}>
                                    <img src="/img/github_bw.png" style={{ width: 40, height: 40 }} />
                                </a>
                                : null
                        }
                        {
                            project.link
                                ? <a href={project.link} target="_blank" rel="noopener noreferrer nofollow" style={{ padding: 5 }}>
                                    <img src="/img/web_bw.png" style={{ width: 40, height: 40 }} />
                                </a>
                                : null
                        }
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }

}

export default ProjectDetail;

const styles = {
    spanDiamond: {
        marginLeft: 7,
        marginRight: 7,
        fontSize: 9,
        animation: "none",
    }
}