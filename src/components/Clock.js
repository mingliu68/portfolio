import React, { useState, useEffect } from "react";

const Clock = () => {
    const [time, setTime] = useState(null)




    return (
        <div style={{ position: "absolute", width: 200, height: 200, right: 50, top: 150, backgroundColor: "white" }}>
            <div style={{ position: "relative", width: "100%", height: "100%" }} >
                <div
                    style={{
                        width: 80,
                        borderWidth: 3,
                        borderColor: "black",
                        borderStyle: "solid",
                        position: "absolute",
                        left: 100,
                        top: 100,
                        backgroundColor: "black",
                        transformOrigin: "left",
                        transform: "rotate(270deg)"
                    }}
                />
            </div>

        </div>
    )
}

export default Clock;
