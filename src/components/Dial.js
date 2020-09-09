import React, { useState, useEffect } from "react";

const Dial = () => {
    let temp = -90
    const [secDial, setSecDial] = useState(temp)


    const secDialCounter = () => {
        function sec() {
            temp = temp + 6 === 270 ? -90 : temp + 6
            setSecDial(temp)
            console.log(temp)
        }
        setInterval(sec, 1000)
    }

    useEffect(() => {
        secDialCounter()
    }, [])

    return (
        <div
            style={{
                width: 80,
                borderWidth: 2,
                borderColor: "black",
                borderStyle: "solid",
                position: "absolute",
                left: 100,
                top: 100,
                backgroundColor: "black",
                transformOrigin: "left",
                transform: `rotate(${secDial}deg)`
            }}
        />
    )
}

export default Dial;