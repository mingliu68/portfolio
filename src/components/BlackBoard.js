import React, { useState, useEffect, useCallback } from "react";

const BlackBoard = () => {
    const [status, setStatus] = useState(false);
    const [statusToggle, setStatusToggle] = useState(false)

    const styles = {
        blackboard: {
            width: 800,
            // height: 650,
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, 0)",
            // top: 40, 
            backgroundColor: "#686e51",
            borderWidth: 20,
            borderStyle: "solid",
            borderColor: "#541717",
            zIndex: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            // top: -600, 
            transitionDuration: "1.5s"
        },
        boardOn: {
            top: 40,
            height: 650
        },
        bordOff: {
            top: -50,
            height: 200,
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
            paddingBottom: "0.5em"
        }
    }

    const setBlackBoard = useCallback((stat) => {
        setStatus(stat);
    })

    useEffect(() => {
        setBlackBoard(!status);
    }, [statusToggle])
    return (
        <div style={styles.blackboard} className={status ? "boardOn" : "boardOff"}>

            <h1 style={styles.title} onClick={(statusToggle) => setStatusToggle(!statusToggle)}>
                Ming Liu
                <span style={{ transform: "scale(1.5,1)", color: "red", paddingLeft: 20, paddingRight: 20 }}> ♥ </span>
                The Girl Who Codes
            </h1>
        </div>
    )
}

export default BlackBoard;

// width: 800px;
// height: 850px;
// position: absolute;
// left: 50%;
// transform: translate(-50%, 0px);
// background-color: rgb(104, 110, 81);
// border-width: 20px;
// border-style: solid;
// border-color: rgb(84, 23, 23);
// z-index: 10;
// display: flex;
// justify-content: center;
// align-items: flex-end;
// top: -600px;
// height: 200px;
// top: -150px;
// transition-duration: .8s;