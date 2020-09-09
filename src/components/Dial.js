import React, { useState, useEffect } from "react";

const Dial = (props) => {
    const { hour, min, type, sec } = { ...props }
    console.log(hour, min, sec, type)

    let setup = {};
    (() => {
        if (type === "second") {
            setup = {
                temp: -90 + (6 * sec),
                intervalTime: 1000,
                intervalRotate: 6
            }
        } else if (type === "minute") {
            setup = {
                temp: -90 + (6 * min),
                intervalTime: 60000,
                intervalRotate: 6
            }
        } else if (type === "hour") {
            setup = {
                temp: -90 + (30 * hour),
                intervalTime: 600000,
                intervalRotate: 5
            }
        }
    })()

    const [dial, setDial] = useState(setup.temp)

    const startDial = () => {

        function dialRotation() {
            setup.temp = setup.temp + setup.intervalRotate === 270 ? -90 : setup.temp + setup.intervalRotate;
            setDial(setup.temp)
            console.log(type, setup.temp)
        }
        setInterval(dialRotation, setup.intervalTime)
    }

    useEffect(() => {
        startDial()
        console.log(type, setup.temp)
    }, [])

    return (
        <div
            style={{
                width: (type === "hour" ? 60 : 80),
                borderWidth: (type === "second" ? 2 : type === "minute" ? 3 : 4),
                borderColor: (type === "hour" ? "red" : "black"),
                borderStyle: "solid",
                position: "absolute",
                left: 100,
                top: 100,
                backgroundColor: "black",
                transformOrigin: "left",
                transform: `rotate(${dial}deg)`
            }}
        />
    )
}

export default Dial;