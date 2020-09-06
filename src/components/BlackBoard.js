import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { project_position, projects } from '../data';


const BlackBoard = () => {
    const [status, setStatus] = useState(false);
    const [mouseOver, setMouseOver] = useState(projects.length);
    const [enlarge, setEnlarge] = useState(0)

    const styles = {
        boardOn: {
            top: 40,
        },
        boardOff: {
            top: -600,
        },
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
        pullTag: {
            cursor: 'pointer',
            width: 60,
            height: 40,
            backgroundColor: "yellow",
            position: "absolute",
            bottom: -60,
            right: 0,
        },
    }

    const setBlackBoard = useCallback(() => {
        setStatus(!status);
    })

    return (
        <div className="blackboard" style={status ? styles.boardOn : styles.boardOff}>
            <div
                style={styles.pullTag}
                onClick={() => setBlackBoard()}
            >
                {
                    status
                        ? <FontAwesomeIcon icon={faAngleDoubleUp} size="2x" style={{ marginTop: 10 }} />
                        : <FontAwesomeIcon icon={faAngleDoubleDown} size="2x" style={{ marginTop: 10 }} />
                }
                <div
                    style={{
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
                        // position: "absolute",
                        // bottom: -20,
                        marginTop: -2,
                    }}
                />
            </div>

            <div className="project-container">
                <div
                    className="project"
                    style={{
                        borderColor: (enlarge == 1 ? "black" : "#333"),
                        left: project_position[0].left,
                        top: project_position[0].top,
                        zIndex: (mouseOver == 1 ? 15 : 10),
                        transform: (enlarge == 1 ? project_position[0].transformPost : project_position[0].transformPre),
                    }}
                    onMouseEnter={() => { setMouseOver(1); setEnlarge(1) }}
                    onMouseLeave={() => setEnlarge(0)}
                >
                    <img src="https://www.brooksidemediaco.com/wp-content/uploads/2020/09/portfolio_home.png" style={{ opacity: (mouseOver == 1 ? 1 : 0.65), }} />
                    <div style={{ paddingTop: 15, color: (mouseOver == 1 ? "#333" : "#ccc") }}>Personal Portfolio - React App</div>
                </div>

                <div
                    className="project"
                    style={{
                        borderColor: (enlarge == 2 ? "black" : "#333"),
                        left: project_position[1].left,
                        top: project_position[1].top,
                        zIndex: (mouseOver == 2 ? 15 : 10),
                        transform: (enlarge == 2 ? project_position[1].transformPost : project_position[1].transformPre),
                    }}
                    onMouseEnter={() => { setMouseOver(2); setEnlarge(2) }}
                    onMouseLeave={() => setEnlarge(0)}

                >
                    <img src="http://www.brooksidemediaco.com/wp-content/uploads/2018/05/sarama_home.png" style={{ opacity: (mouseOver == 2 ? 1 : 0.65), }} />
                    <div style={{ paddingTop: 15, color: (mouseOver == 2 ? "#333" : "#ccc") }}>Sarama Rescue - WordPress Site</div>
                </div>
                <div
                    className="project"
                    style={{
                        borderColor: (enlarge == 3 ? "black" : "#333"),
                        left: project_position[2].left,
                        bottom: project_position[2].bottom,
                        zIndex: (mouseOver == 3 ? 15 : 10),
                        transform: (enlarge == 3 ? project_position[2].transformPost : project_position[2].transformPre),
                    }}
                    onMouseEnter={() => { setMouseOver(3); setEnlarge(3) }}
                    onMouseLeave={() => setEnlarge(0)}
                >
                    <img src="https://www.brooksidemediaco.com/wp-content/uploads/2020/09/Screen-Shot-2020-09-05-at-4.22.10-PM.png" alt="pawsnfind" style={{ opacity: (mouseOver == 3 ? 1 : 0.65) }} />
                    <div style={{ paddingTop: 15, color: (mouseOver == 3 ? "#333" : "#ccc") }}>PawsnFind - React App</div>

                </div>
                <div
                    className="project"
                    style={{
                        borderColor: (enlarge == 4 ? "black" : "#333"),
                        right: project_position[3].right,
                        top: project_position[3].top,
                        zIndex: (mouseOver == 4 ? 15 : 10),
                        transform: (enlarge == 4 ? project_position[3].transformPost : project_position[3].transformPre)
                    }}
                    onMouseEnter={() => { setMouseOver(4); setEnlarge(4) }}
                    onMouseLeave={() => setEnlarge(0)}
                >

                    <img src="https://www.brooksidemediaco.com/wp-content/uploads/2020/09/brooksidemedia_home.png" style={{ opacity: (mouseOver == 4 ? 1 : 0.65) }} />
                    <div style={{ paddingTop: 15, color: (mouseOver == 4 ? "#333" : "#ccc") }}>Brookside Media - WordPress Site</div>

                </div>
                <div
                    className="project"
                    style={{
                        borderColor: (enlarge == 5 ? "black" : "#333"),
                        right: project_position[4].right,
                        bottom: project_position[4].bottom,
                        zIndex: (mouseOver == 5 ? 15 : 10),
                        transform: (enlarge == 5 ? project_position[4].transformPost : project_position[4].transformPre),
                    }}
                    onMouseEnter={() => { setMouseOver(5); setEnlarge(5) }}
                    onMouseLeave={() => setEnlarge(0)}
                >
                    <img src="https://www.brooksidemediaco.com/wp-content/uploads/2020/09/skinDecoded_2.png" style={{ opacity: (mouseOver == 5 ? 1 : 0.65) }} />
                    <div style={{ paddingTop: 15, color: (mouseOver == 5 ? "#333" : "#ccc") }}>eCommerce Site - PrestaShop</div>

                </div>
                <div
                    className="project"
                    style={{
                        borderColor: (enlarge == 6 ? "black" : "#333"),
                        left: project_position[5].left,
                        bottom: project_position[5].bottom,
                        zIndex: (mouseOver == 6 ? 15 : 10),
                        transform: (enlarge == 6 ? project_position[5].transformPost : project_position[5].transformPre),
                    }}
                    onMouseEnter={() => { setMouseOver(6); setEnlarge(6) }}
                    onMouseLeave={() => setEnlarge(0)}
                >
                    <img src="https://www.brooksidemediaco.com/wp-content/uploads/2020/09/peachLemonHome.png" style={{ opacity: (mouseOver == 6 ? 1 : 0.65) }} />
                    <div style={{ paddingTop: 15, color: (mouseOver == 6 ? "#333" : "#ccc") }}>eCommerce Site - PrestaShop</div>

                </div>

            </div>
            <h1 style={styles.title}>
                Ming Liu
                <span style={{ transform: "scale(1.5,1)", color: "red", paddingLeft: 20, paddingRight: 20 }}> ♥ </span>
                The Girl Who Codes
            </h1>
        </div>
    )
}

export default BlackBoard;