import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ProjectDetail = (props) => {

    const { project } = { ...props }


    if (project) {
        return (
            <div style={styles.container}>
                <div style={styles.imgContainer}>
                    <img src={project.img} style={{ width: "100%", opacity: 0.8 }} />
                </div>
                <div style={styles.detailContainer}>
                    <h1 style={styles.title}>{project.boardDisplay}</h1>
                    <div style={styles.titleYear}>- {project.year} -</div>
                    {/* <div style={{ fontFamily: "source sans pro", fontSize: 16, fontWeight: 400 }}>{project.description}</div> */}
                    <div style={styles.starDivContainer}>
                        <FontAwesomeIcon icon={faStar} size="2x" style={styles.star} />
                    </div>
                    <div style={styles.techContainer}>
                        {
                            project.tech.map((item, index) => {
                                if (index < project.tech.length - 1) {
                                    return <span>{item}<span style={styles.spanDiamond}>&diams; </span> </span>
                                } else {
                                    return <span>{item}</span>
                                }
                            })
                        }
                    </div>
                    <div style={styles.descContainer}>
                        <div style={styles.descContainer_left}>
                            <div><span style={styles.role_span}>{project.role[0]}</span></div>
                            <div style={{ marginBottom: 10, fontSize: 13, textTransform: "lowercase" }}>{project.role[1]}</div>
                            {project.description}
                        </div>
                        <div style={styles.techDescContainer}>
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
                    <div style={styles.iconContainer}>
                        {
                            project.github
                                ? <a href={project.github} target="_blank" rel="noopener noreferrer nofollow" style={styles.icon_a}>
                                    <img src="/img/github_bw.png" style={styles.icon_img} />
                                </a>
                                : null
                        }
                        {
                            project.link
                                ? <a href={project.link} target="_blank" rel="noopener noreferrer nofollow" style={styles.icon_a}>
                                    <img src="/img/web_bw.png" style={styles.icon_img} />
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
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    imgContainer: {
        width: "100%",
        height: 250,
        overflow: "hidden",
        boxShadow: "1px 1px 5px #cccccc"
    },
    detailContainer: {
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontFamily: "Montserrat, sans-serif",
        textTransform: "uppercase",
        marginBottom: 0
    },
    titleYear: {
        marginBottom: 22,
        fontSize: 14,
        textTransform: "lowercase",
        fontWeight: "bold"
    },
    starDivContainer: {
        height: 0,
        width: 300,
        border: "2px solid #333333",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 10px"
    },
    star: {
        backgroundColor: "white",
        padding: "0 10px",
        fontSize: 24
    },
    techContainer: {
        display: "flex",
        padding: "22px 5% 15px",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "source sans pro",
        fontSize: 14
    },
    descContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        fontFamily: "source sans pro",
        fontSize: 15,
        lineHeight: 1.3
    },
    descContainer_left: {
        width: "45%",
        display: "inline-block",
        float: "left",
        textAlign: "right"
    },
    spanDiamond: {
        marginLeft: 7,
        marginRight: 7,
        fontSize: 9,
        animation: "none",
    },
    iconContainer: {
        position: "absolute",
        right: 0,
        top: 0,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: "15px 15px 0 0",
        width: "100%"
    },
    icon_a: {
        padding: 5,
        width: "8%",
        height: "8%",
        maxWidth: 45,
        maxHeight: 45
    },
    icon_img: {
        width: "100%",
        height: "100%"
    },
    techDescContainer: {
        width: "45%",
        display: "inline-block",
        float: "right",
        textAlign: "left"
    },
    role_span: {
        fontWeight: 600,
        backgroundImage: "linear-gradient(0deg, #daebd4 50%, transparent 50%)"
    }

}