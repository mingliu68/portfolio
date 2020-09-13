import React, { useState, useEffect } from "react";
import ColorPalette from './ColorPalette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEraser, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const DrawingBoard = () => {

    // let board;
    const [isDrawing, setIsDrawing] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 })
    const [boardContext, setBoardContext] = useState(null)
    const [isEraser, setIsEraser] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [ink, setInk] = useState("white")



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
        context.strokeStyle = isEraser ? "#366F2B" : ink;
        context.lineWidth = isEraser ? 6 : 2;
        context.moveTo(x1 / 1.65, y1 / 2.6);
        context.lineTo(x2 / 1.65, y2 / 2.6);
        context.stroke();
        context.closePath();
    }

    const handleClearScreen = () => {
        boardContext.clearRect(0, 0, 498, 398);
    }

    useEffect(() => {

        let context = document.getElementById("drawingBoard").getContext('2d')
        setBoardContext(context)
        let starter = new Image();
        starter.onload = function () {
            context.drawImage(starter, 0, 0);
        }
        starter.src = '/img/drawingBoard_starter.png';
    }, [])

    return (
        // <div style={{ zIndex: (isActive ? 25 : 1), position: "absolute", left: "50%", top: (isActive ? 200 : 350), transform: (isActive ? "translate(-50%, 0)" : "translate(250px, 0)"), width: (isActive ? 520 : 260), height: (isActive ? 420 : 210) }}>
        <div className={isActive ? "drawingBoard_lg-container" : "drawingBoard-container"} >
            <canvas
                id="drawingBoard"
                className={isActive ? "canvas_active" : "canvas_notActive"}
                // style={{ position: "absolute", left: (isActive ? 60 : 30), top: (isActive ? 40 : 20), width: (isActive ? 398 : 198), height: (isActive ? 328 : 162) }}
                // onLoad={e => initializeStarterCanvas(e)}
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
                className="eraser"
                style={{
                    height: (isEraser ? 35 : 30),
                    display: (isActive ? "flex" : "none"),
                    borderBottom: (isEraser ? "5px solid green" : "none"),
                }}
                onClick={() => setIsEraser(!isEraser)}
            >
                <FontAwesomeIcon icon={faEraser} size="1x" />
            </div>
            <div
                className="clearCanvas"
                style={{ display: (isActive ? "flex" : "none") }}
                onClick={handleClearScreen}
            >
                <FontAwesomeIcon icon={faTrashAlt} size="1x" />

            </div>
            <div
                style={{ display: (isActive ? "flex" : "none"), borderLeft: "5px solid brown", justifyContent: "center", alignItems: "center", width: 35, height: 35, backgroundColor: "yellow", position: "absolute", right: 0, bottom: 100 }}
                onClick={() => setIsActive(false)}
            >
                <FontAwesomeIcon icon={faTimes} size="2x" />
            </div>
            {
                isActive
                    ? <ColorPalette setInk={setInk} ink={ink} setIsEraser={setIsEraser} isEraser={isEraser} />
                    : null
            }
            {/* <div
                style={{ display: (isActive ? "flex" : "none"), borderLeft: "5px solid brown", justifyContent: "center", alignItems: "center", width: 35, height: 35, backgroundColor: "yellow", position: "absolute", right: 0, bottom: 200 }}
                onClick={saveImg}
            >
                save
            </div> */}
        </div>
    )
}

export default DrawingBoard;