import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'


const BlackBoard = () => {
    const [status, setStatus] = useState(false);

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
            paddingBottom: "0.5em"
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
            <h1 style={styles.title}>
                Ming Liu
                <span style={{ transform: "scale(1.5,1)", color: "red", paddingLeft: 20, paddingRight: 20 }}> ♥ </span>
                The Girl Who Codes
            </h1>
        </div>
    )
}

export default BlackBoard;