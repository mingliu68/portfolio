import React, { useState } from "react";

const WallArt = (props) => {
    const { type, link, name, top, bottom, left, right, transform, width, height } = { ...props.item }

    const [leftPos, setLeftPos] = useState(left);
    const [topPos, setTopPos] = useState(top)
    const [transformPos, setTransformPos] = useState(transform)
    const [mouseDown, setMouseDown] = useState(false);
    const [move, setMove] = useState(false);

    const handleMouseDown = (e) => {
        e.preventDefault();
        const rect = e.target.getBoundingClientRect()
        setMouseDown(true);
        setLeftPos(rect.left)
        setTopPos(rect.top)
        setTransformPos(null)
    }

    const mouseDrag = (e) => {
        e.preventDefault();
        // const rect = e.target.getBoundingClientRect()
        if (mouseDown) {
            setMove(true);
            setLeftPos(e.clientX + width > window.innerWidth ? window.innerWidth - width - 10 : e.clientX - width * 0.5);
            setTopPos(e.clientY - height * 0.5);
        }
    }

    const closeMouseDragEvent = (e) => {
        if (mouseDown && !move && type === "social") {
            openLink(link)
        }
        setMouseDown(false)
        setMove(false)
    }

    const openLink = (externalLink) => {
        const features = "ref=noreferrer"
        window.open(externalLink, features)
    }

    return (
        <div
            key={props.index}
            className={name}
            style={{ left: leftPos, right: right, top: topPos, bottom: bottom, transform: transformPos }}
            onMouseDown={e => handleMouseDown(e)}
            onMouseMove={e => mouseDrag(e)}
            onMouseUp={e => closeMouseDragEvent(e)}
        >
            <div style={{ cursor: "pointer", width: (width + 10), height: (height + 10) }} />
        </div>
    )
}

export default WallArt;