import React, { useState, useEffect, useCallback } from "react";

const WallArt = (props) => {
    const { type, link, name, top, left, transform, width, height } = { ...props.item }
    const [origPos, setOrigPos] = useState(undefined)
    const [leftPos, setLeftPos] = useState(left);
    const [topPos, setTopPos] = useState(top)
    const [transformPos, setTransformPos] = useState(transform)
    const [mouseDown, setMouseDown] = useState(false);
    const [move, setMove] = useState(false);
    const [pc, setPc] = useState(undefined)

    const handleMouseDown = (e) => {
        e.preventDefault();
        const rect = e.target.getBoundingClientRect()
        setMouseDown(true);
        setLeftPos(rect.left)
        setTopPos(rect.top)
        //set original position to return to if item is dropped to a forbidden zone
        setOrigPos([rect.left, rect.top])
        setTransformPos(null)
    }

    const mouseDrag = (e) => {
        e.preventDefault();
        if (mouseDown) {
            setMove(true);
            setTopPos(e.clientY - height * 0.5);
            setLeftPos(e.clientX - width * 0.5);
        }
    }

    const closeMouseDragEvent = (e) => {
        if (mouseDown && !move && type === "social") {
            openLink(link)
        }
        if ((leftPos + width > pc.left && leftPos < pc.right) && (topPos + height > pc.top && topPos < pc.bottom)) {
            setLeftPos(origPos[0])
            setTopPos(origPos[1])
        }
        console.log("leftPos : ", leftPos,
            "PcLeft : ", pc.left, "PcRight : ", pc.right,
            "topPos : ", topPos,
            "PcTop : ", pc.top, "PcBottom : ", pc.bottom)
        setMouseDown(false)
        setMove(false)
        setOrigPos(undefined)
    }

    const openLink = (externalLink) => {
        const features = "ref=noreferrer"
        window.open(externalLink, features)
    }

    const setPcBounding = useCallback(() => {
        setPc(document.querySelector('#pc_frame').getBoundingClientRect());
        console.log(pc)
    })

    useEffect(() => {
        setPcBounding();
    }, [])

    window.onresize = setPcBounding;

    return (
        <div
            className={name}
            style={{
                left: leftPos,
                top: topPos,
                transform: transformPos,
                zIndex: (mouseDown ? 15 : 0),
            }}
            onMouseDown={e => handleMouseDown(e)}
            onMouseMove={e => mouseDrag(e)}
            onMouseUp={e => closeMouseDragEvent(e)}
        >
            <div style={{ cursor: "pointer", width: (width + 10), height: (height + 10) }} />
        </div>
    )
}

export default WallArt;