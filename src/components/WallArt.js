import React, { useState, useEffect } from "react";

const WallArt = (props) => {
    const { type, link, name, top, left, transform, width, height } = { ...props.item }
    const [origPos, setOrigPos] = useState(undefined)
    const [pos, setPos] = useState({ left: left, top: top })
    const [transformPos, setTransformPos] = useState(transform)
    const [mouseDown, setMouseDown] = useState(false);
    const [move, setMove] = useState(false);
    const [pc, setPc] = useState(undefined)

    const handleMouseDown = (e) => {
        e.preventDefault();
        setPcBounding();
        const rect = e.target.getBoundingClientRect()
        setMouseDown(true);
        setPos({ ...pos, left: rect.left, top: rect.top })
        //set original position to return to if item is dropped to a forbidden zone
        setOrigPos({ left: rect.left, top: rect.top })
        setTransformPos(null)
    }

    const mouseDrag = (e) => {
        e.preventDefault();
        if (mouseDown) {
            if (!move) setMove(true);
            setPos({ ...pos, left: e.clientX - width * 0.5, top: e.clientY - height * 0.5 })
        }
    }

    const closeMouseDragEvent = (e) => {
        if (mouseDown && !move && type === "social") {
            openLink(link)
        }

        if ((pos.left + width > pc.left && pos.left < pc.right) && (pos.top + height > pc.top - 150 && pos.top < pc.bottom + 150)) {
            setPos({ ...pos, left: origPos.left, top: origPos.top })
        }

        setMouseDown(false)
        setMove(false)
        setOrigPos(undefined)
    }

    const openLink = (externalLink) => {
        const features = "ref=noreferrer"
        window.open(externalLink, features)
    }

    const setPcBounding = () => {
        setPc(document.querySelector('#pc_frame').getBoundingClientRect());
        console.log(pc)
    }

    useEffect(() => {
        setPcBounding();
    }, [])

    return (
        <div
            className={name}
            style={{
                left: pos.left,
                top: pos.top,
                transform: transformPos,
                zIndex: (mouseDown ? 15 : 0),
            }}
            onMouseDown={e => handleMouseDown(e)}
            onMouseMove={e => mouseDrag(e)}
            onMouseUp={e => closeMouseDragEvent(e)}
        >
            <div style={{ cursor: (move ? "grabbing" : mouseDown ? "grab" : "pointer"), width: (width + 10), height: (height + 10) }} />
        </div>
    )
}

export default WallArt;