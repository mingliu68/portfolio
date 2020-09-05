import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'


const BlackBoard = () => {
    const [status, setStatus] = useState(false);
    const [mouseOver, setMouseOver] = useState(0);

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
        }
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
            <div style={{ position: 'relative', height: 580, width: "100%", paddingTop: 30, backgroundColor: 'green', display: 'flex', flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box", overflow: "hidden" }}>
                <div
                    style={{
                        borderTopWidth: 20, borderStyle: "solid", borderColor: "#333", position: "absolute", width: "45%", left: "5%", top: "8%", zIndex: (mouseOver == 1 ? 15 : 10), height: "auto",
                        backgroundColor: "white",
                        padding: 5,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        transitionDuration: "0.5s",
                        transform: (mouseOver == 1 ? "rotate(0deg)" : "rotate(10deg)")
                    }}
                    onMouseEnter={() => setMouseOver(1)}
                >
                    {/* <div style={{ width: 15, height: 15, borderWidth: 2, borderColor: "white", borderStyle: "solid", position: "absolute", right: 0, top: -18, boxSizing: "border-box" }}></div> */}
                    <img src="http://www.brooksidemediaco.com/wp-content/uploads/2018/05/sarama_home.png" style={{ width: "100%" }} />
                </div>

                <div style={{
                    borderTopWidth: 20, borderStyle: "solid", borderColor: "#333", position: "absolute", width: "45%", left: "4%", bottom: "8%", zIndex: (mouseOver == 2 ? 15 : 10), height: "auto",
                    backgroundColor: "white",
                    padding: 5,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    transitionDuration: "0.5s",
                    transform: (mouseOver == 2 ? "rotate(0deg)" : "rotate(-7deg)")
                }}
                    onMouseEnter={() => setMouseOver(2)}
                >
                    <img src="https://www.brooksidemediaco.com/wp-content/uploads/2020/09/Screen-Shot-2020-09-05-at-4.22.10-PM.png" style={{ width: "100%" }} />
                </div>


                <div
                    style={{
                        borderTopWidth: 20, borderStyle: "solid", borderColor: "#333", position: "absolute", width: "50%", right: "7%", top: "10%", zIndex: (mouseOver == 3 ? 15 : 10), height: "auto",
                        backgroundColor: "white",
                        padding: 5,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        transitionDuration: "0.5s",
                        transform: (mouseOver == 3 ? "rotate(0deg)" : "rotate(-5deg)")

                    }}
                    onMouseEnter={() => setMouseOver(3)}
                >

                    <img src="https://www.brooksidemediaco.com/wp-content/uploads/2020/09/brooksidemedia_home.png" style={{ width: "100%" }} />
                </div>
                <div
                    style={{
                        borderTopWidth: 20, borderStyle: "solid", borderColor: "#333", position: "absolute", width: "40%", right: "5%", bottom: "8%", zIndex: (mouseOver == 4 ? 15 : 10), height: "auto",
                        backgroundColor: "white",
                        padding: 5,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        transitionDuration: "0.5s",
                        transform: (mouseOver == 4 ? "rotate(0deg)" : "rotate(5deg)")

                    }}
                    onMouseEnter={() => setMouseOver(4)}
                >
                    <img src="https://www.brooksidemediaco.com/wp-content/uploads/2020/09/skinDecoded_2.png" style={{ width: "100%" }} />

                </div>
                <div
                    style={{
                        borderTopWidth: 20, borderStyle: "solid", borderColor: "#333", position: "absolute", width: "35%", left: "35%", bottom: "5%", zIndex: (mouseOver == 5 ? 15 : 10), height: "auto",
                        backgroundColor: "white",
                        padding: 5,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        transitionDuration: "0.5s",
                        transform: (mouseOver == 5 ? "rotate(0deg)" : "rotate(-4deg)")

                    }}
                    onMouseEnter={() => setMouseOver(5)}
                >
                    <img src="https://www.brooksidemediaco.com/wp-content/uploads/2020/09/peachLemonHome.png" style={{ width: "100%" }} />

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