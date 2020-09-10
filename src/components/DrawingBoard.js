import React, { useState, useEffect } from "react";

const DrawingBoard = () => {

    let board;
    const [isDrawing, setIsDrawing] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 })
    const [boardContext, setBoardContext] = useState(null)
    const [isEraser, setIsEraser] = useState(false)
    const [isActive, setIsActive] = useState(false)


    const handleMouseDown = e => {
        e.preventDefault();
        if (!boardContext) {
            setBoardContext(e.target.getContext('2d'))
        }
        setPos({ ...pos, x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
        setIsDrawing(true);
    }

    const handleDrawing = e => {
        e.preventDefault();
        if (isDrawing) {
            drawLine(boardContext, pos.x, pos.y, e.nativeEvent.offsetX, e.nativeEvent.offsetY);
            setPos({ ...pos, x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
        }
    }

    const handleMouseUp = e => {
        if (isDrawing) {
            drawLine(boardContext, pos.x, pos.y, e.nativeEvent.offsetX, e.nativeEvent.offsetY);
            setPos({ ...pos, x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
            setIsDrawing(false)
        }
    }

    const drawLine = (context, x1, y1, x2, y2) => {
        context.beginPath();
        context.strokeStyle = isEraser ? "#366F2B" : "white";
        context.lineWidth = isEraser ? 6 : 2;
        context.moveTo(x1 / 1.3, y1 / 2.1);
        context.lineTo(x2 / 1.3, y2 / 2.1);
        context.stroke();
        context.closePath();
    }

    const handleClearScreen = () => {
        boardContext.clearRect(0, 0, 398, 198);
    }

    useEffect(() => {
        // board = document.getElementById("drawingBoard")
        setBoardContext(document.getElementById("drawingBoard").getContext('2d'))
    }, [])

    return (
        // <div style={{ zIndex: (isActive ? 25 : 1), position: "absolute", left: "50%", top: (isActive ? 200 : 350), transform: (isActive ? "translate(-50%, 0)" : "translate(250px, 0)"), width: (isActive ? 520 : 260), height: (isActive ? 420 : 210) }}>
        <div className={isActive ? "drawingBoard_lg-container" : "drawingBoard-container"} >
            <canvas
                id="drawingBoard"
                className={isActive ? "canvas_active" : "canvas_notActive"}
                // style={{ position: "absolute", left: (isActive ? 60 : 30), top: (isActive ? 40 : 20), width: (isActive ? 398 : 198), height: (isActive ? 328 : 162) }}

                onMouseDown={e => {
                    if (isActive) {
                        handleMouseDown(e)
                    }
                }}
                onMouseMove={e => {
                    if (isActive) {
                        handleDrawing(e)
                    }
                }}
                onMouseUp={e => {
                    if (isActive) {
                        handleMouseUp(e)
                    }
                }}
                onClick={e => {
                    if (!isActive) {
                        setIsActive(true)
                    }
                }}
            >
            </canvas>
            <div className={isActive ? "drawingBoard_lg" : "drawingBoard"} style={{ zIndex: -1 }} />
            <div
                style={{ position: "absolute", right: 30, bottom: 15, width: 30, height: 15, backgroundColor: (isEraser ? "black" : "grey"), borderColor: (isEraser ? "red" : null), borderStyle: "solid" }}
                onClick={() => setIsEraser(!isEraser)}
            >
                ERASER
            </div>
            <div
                style={{ position: "absolute", right: 100, top: 250, borderColor: "#333333", borderWidth: 1, borderStyle: "solid" }}
                onClick={handleClearScreen}
            >
                Clear
            </div>
            <div
                style={{ position: "absolute", right: 100, top: 350, borderColor: "#333333", borderWidth: 1, borderStyle: "solid" }}
                onClick={() => setIsActive(false)}
            >
                Close
            </div>

        </div>
    )
}

export default DrawingBoard;