import React, { useState, useEffect } from "react";

const DrawingBoard = () => {
    const [isDrawing, setIsDrawing] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 })
    const [boardContext, setBoardContext] = useState(null)

    const handleMouseDown = e => {
        e.preventDefault();
        // if (!context) {
        //     setContext(drawingBoard.getContext('2d'))
        //     // setContext(e.target.getContext('2d'));
        // }
        if (!boardContext) {
            // context = document.getElementById("drawingBoard").getContext('2d');
            setBoardContext(e.target.getContext('2d'))
        }
        setPos({ ...pos, x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
        setIsDrawing(true);
        console.log("mouse down", pos, boardContext)
    }

    const handleDrawing = e => {
        e.preventDefault();
        if (isDrawing) {
            drawLine(boardContext, pos.x, pos.y, e.nativeEvent.offsetX, e.nativeEvent.offsetY);
            setPos({ ...pos, x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
            console.log("drawing", pos)

        }
    }

    const handleMouseUp = e => {
        if (isDrawing) {
            drawLine(boardContext, pos.x, pos.y, e.nativeEvent.offsetX, e.nativeEvent.offsetY);
            setPos({ ...pos, x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
            setIsDrawing(false)
            console.log("mouse up")
        }

    }

    const drawLine = (context, x1, y1, x2, y2) => {
        context.beginPath();
        context.strokeStyle = "black";
        context.lineWidth = 1;
        context.moveTo(x1, y1 / 2);
        context.lineTo(x2, y2 / 2);
        context.stroke();
        context.closePath();
    }

    useEffect(() => {
        setBoardContext(document.getElementById("drawingBoard").getContext('2d'))
    }, [])

    return (
        <canvas
            id="drawingBoard"
            style={{ zIndex: 20, position: "absolute", left: "50%", top: 350, transform: "translate(300px, 0)", width: 300, height: 300, backgroundColor: "green" }}
            onMouseDown={e => handleMouseDown(e)}
            onMouseMove={e => handleDrawing(e)}
            onMouseUp={e => handleMouseUp(e)}
        >
        </canvas>
    )
}

export default DrawingBoard;