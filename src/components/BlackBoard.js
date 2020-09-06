import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'


const BlackBoard = () => {
    const [status, setStatus] = useState(false);
    const [mouseOver, setMouseOver] = useState(6);
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
            <div style={{ position: 'relative', height: 580, width: "100%", paddingTop: 30, backgroundColor: 'rgb(23 84 23)', display: 'flex', flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box", overflow: "hidden" }}>
                <div
                    style={{
                        borderTopWidth: 20, borderStyle: "solid", borderColor: (enlarge == 1 ? "black" : "#333"), position: "absolute", left: "35%", top: "3%", zIndex: (mouseOver == 1 ? 15 : 10), height: "auto",
                        width: "40%",
                        backgroundColor: "white",
                        padding: 10,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        transitionDuration: "0.5s",
                        transform: (enlarge == 1 ? "rotate(0deg) scale(1.25) translate(0, 35px) translateZ(0)" : "rotate(-4deg) scale(1)"),
                        backfaceVisibility: "hidden",
                        webkitBackfaceVisibility: "hidden",

                        display: "flex",
                        flexDirection: "column"
                    }}
                    onMouseEnter={() => { setMouseOver(1); setEnlarge(1) }}
                    onMouseLeave={() => setEnlarge(0)}
                >
                    <img src="https://www.brooksidemediaco.com/wp-content/uploads/2020/09/Screen-Shot-2020-09-05-at-11.34.50-PM.png"
                        style={{
                            boxShadow: "0px 0px 5px #bbbbbb", width: "100%", border: "1px solid #eeeeee", opacity: (mouseOver == 1 ? 1 : 0.65),
                            webkitBackfaceVisibility: "hidden",
                            msTransform: "translateZ(0)",
                            webkitTransform: "translateZ(0)",
                            transform: "translateZ(0)"
                        }} />



                    <div style={{ paddingTop: 15, color: (mouseOver == 1 ? "#333" : "#ccc") }}>Personal Portfolio - React App</div>
                </div>

                <div
                    style={{
                        borderTopWidth: 20, borderStyle: "solid", borderColor: (enlarge == 2 ? "black" : "#333"), position: "absolute", left: "5%", top: "8%", zIndex: (mouseOver == 2 ? 15 : 10), height: "auto",
                        // width: (enlarge == 2 ? "60%" : "40%"),
                        width: "40%",
                        backgroundColor: "white",
                        padding: 10,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        transitionDuration: "0.5s",
                        transform: (enlarge == 2 ? "rotate(0deg) scale(1.25) translate(25px, 10px) translateZ(0)" : "rotate(10deg) scale(1)"),
                        webkitBackfaceVisibility: "hidden",
                        backfaceVisibility: "hidden",
                        display: "flex",
                        flexDirection: "column"
                    }}
                    onMouseEnter={() => { setMouseOver(2); setEnlarge(2) }}
                    onMouseLeave={() => setEnlarge(0)}

                >
                    {/* <div style={{ width: 15, height: 15, borderWidth: 2, borderColor: "white", borderStyle: "solid", position: "absolute", right: 0, top: -18, boxSizing: "border-box" }}></div> */}
                    <img src="http://www.brooksidemediaco.com/wp-content/uploads/2018/05/sarama_home.png"
                        style={{
                            boxShadow: "0px 0px 5px #bbbbbb", width: "100%", border: "1px solid #eeeeee", opacity: (mouseOver == 2 ? 1 : 0.65),
                            webkitBackfaceVisibility: "hidden",
                            msTransform: "translateZ(0)",
                            webkitTransform: "translateZ(0)",
                            transform: "translateZ(0)"
                        }} />
                    <div style={{ paddingTop: 15, color: (mouseOver == 2 ? "#333" : "#ccc") }}>Sarama Rescue - WordPress Site</div>

                </div>
                <div style={{
                    borderTopWidth: 20, borderStyle: "solid", borderColor: (enlarge == 3 ? "black" : "#333"), position: "absolute", left: "4%", bottom: "8%", zIndex: (mouseOver == 3 ? 15 : 10), height: "auto",
                    // width: (enlarge == 3 ? "60%" : "45%"),
                    width: "45%",
                    backgroundColor: "white",
                    padding: 10,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    transitionDuration: "0.5s",
                    transform: (enlarge == 3 ? "rotate(0deg) scale(1.25) translate(25px, -10px) translateZ(0)" : "rotate(-7deg) scale(1)"),
                    backfaceVisibility: "hidden",
                    webkitBackfaceVisibility: "hidden",

                    display: "flex",
                    flexDirection: "column"
                }}
                    onMouseEnter={() => { setMouseOver(3); setEnlarge(3) }}
                    onMouseLeave={() => setEnlarge(0)}

                >
                    <img src="https://www.brooksidemediaco.com/wp-content/uploads/2020/09/Screen-Shot-2020-09-05-at-4.22.10-PM.png" alt="pawsnfind"
                        style={{
                            boxShadow: "0px 0px 5px #bbbbbb", width: "100%", border: "1px solid #eeeeee", opacity: (mouseOver == 3 ? 1 : 0.65),
                            webkitBackfaceVisibility: "hidden",
                            msTransform: "translateZ(0)",
                            webkitTransform: "translateZ(0)",
                            transform: "translateZ(0)"
                        }} />
                    <div style={{ paddingTop: 15, color: (mouseOver == 3 ? "#333" : "#ccc") }}>PawsnFind - React App</div>

                </div>
                <div
                    style={{
                        borderTopWidth: 20, borderStyle: "solid", borderColor: (enlarge == 4 ? "black" : "#333"), position: "absolute", right: "7%", top: "15%", zIndex: (mouseOver == 4 ? 15 : 10), height: "auto",
                        // width: (enlarge == 4 ? "60%" : "40%"),
                        width: "40%",
                        backgroundColor: "white",
                        padding: 10,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        transitionDuration: "0.5s",
                        transform: (enlarge == 4 ? "rotate(0deg) scale(1.25) translateZ(0)" : "rotate(-5deg) scale(1)"),
                        backfaceVisibility: "hidden",
                        webkitBackfaceVisibility: "hidden",

                        display: "flex",
                        flexDirection: "column"

                    }}
                    onMouseEnter={() => { setMouseOver(4); setEnlarge(4) }}
                    onMouseLeave={() => setEnlarge(0)}

                >

                    <img src="https://www.brooksidemediaco.com/wp-content/uploads/2020/09/brooksidemedia_home.png"
                        style={{
                            boxShadow: "0px 0px 5px #bbbbbb", width: "100%", border: "1px solid #eeeeee", opacity: (mouseOver == 4 ? 1 : 0.65),
                            webkitBackfaceVisibility: "hidden",
                            msTransform: "translateZ(0)",
                            webkitTransform: "translateZ(0)",
                            transform: "translateZ(0)"
                        }} />
                    <div style={{ paddingTop: 15, color: (mouseOver == 4 ? "#333" : "#ccc") }}>Broodside Media - WordPress Site</div>

                </div>
                <div
                    style={{
                        borderTopWidth: 20, borderStyle: "solid", borderColor: (enlarge == 5 ? "black" : "#333"), position: "absolute", right: "5%", bottom: "8%", zIndex: (mouseOver == 5 ? 15 : 10), height: "auto",
                        // width: (enlarge == 5 ? "60%" : "40%"),
                        width: "40%",
                        backgroundColor: "white",
                        padding: 10,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        transitionDuration: "0.5s",
                        transform: (enlarge == 5 ? "rotate(0deg) scale(1.25) translate(-25px, -10px) translateZ(0)" : "rotate(5deg) scale(1)"),
                        backfaceVisibility: "hidden",
                        webkitBackfaceVisibility: "hidden",

                        display: "flex",
                        flexDirection: "column"

                    }}
                    onMouseEnter={() => { setMouseOver(5); setEnlarge(5) }}
                    onMouseLeave={() => setEnlarge(0)}

                >
                    <img src="https://www.brooksidemediaco.com/wp-content/uploads/2020/09/skinDecoded_2.png"
                        style={{
                            boxShadow: "0px 0px 5px #bbbbbb", width: "100%", border: "1px solid #eeeeee", opacity: (mouseOver == 5 ? 1 : 0.65),
                            webkitBackfaceVisibility: "hidden",
                            msTransform: "translateZ(0)",
                            webkitTransform: "translateZ(0)",
                            transform: "translateZ(0)"
                        }} />
                    <div style={{ paddingTop: 15, color: (mouseOver == 5 ? "#333" : "#ccc") }}>eCommerce Site - PrestaShop</div>

                </div>
                <div
                    style={{
                        borderTopWidth: 20, borderStyle: "solid", borderColor: (enlarge == 6 ? "black" : "#333"), position: "absolute", left: "25%", bottom: "5%", zIndex: (mouseOver == 6 ? 15 : 10), height: "auto",
                        // width: (enlarge == 6 ? "60%" : "40%"),
                        width: "40%",
                        backgroundColor: "white",
                        padding: 10,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                        transitionDuration: "0.5s",
                        transform: (enlarge == 6 ? "rotate(0deg) scale(1.25) translate(0, -25px) translateZ(0)" : "rotate(3deg) scale(1)"),
                        backfaceVisibility: "hidden",
                        webkitBackfaceVisibility: "hidden",
                        display: "flex",
                        flexDirection: "column"
                    }}
                    onMouseEnter={() => { setMouseOver(6); setEnlarge(6) }}
                    onMouseLeave={() => setEnlarge(0)}
                >
                    <img src="https://www.brooksidemediaco.com/wp-content/uploads/2020/09/peachLemonHome.png"
                        style={{
                            boxShadow: "0px 0px 5px #bbbbbb", width: "100%", border: "1px solid #eeeeee", opacity: (mouseOver == 6 ? 1 : 0.65),
                            webkitBackfaceVisibility: "hidden",
                            msTransform: "translateZ(0)",
                            webkitTransform: "translateZ(0)",
                            transform: "translateZ(0)"
                        }} />
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