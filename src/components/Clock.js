import React, { useState, useEffect, useRef } from "react";
import Dial from './Dial';
import { dials } from '../data';

const Clock = () => {
    const today = new Date();
    const hour = today.getHours() % 12
    const min = today.getMinutes()
    const [width, height] = [145, 145]

     const [pos, setPos] = useState({ left: "50%", top: 190 })
    const [transformPos, setTransformPos] = useState("translate(305px, 0)")
    const [mouseDown, setMouseDown] = useState(false);
    const [move, setMove] = useState(false);
 
    const objRef = useRef()

    const handleMouseDown = (e) => {
        e.preventDefault()
        const rect = e.target.getBoundingClientRect()
    
     
        setPos({ ...pos, left: rect.left, top: rect.top })
        //set original position to return to if item is dropped to a forbidden zone
        setTransformPos(null)
        setMouseDown(true)
      }
    
      const updateMousePos = (e) => {
     
        if (mouseDown) {
          objRef.current.style.left = `${e.clientX - width * 0.5}px`
          objRef.current.style.top = `${e.clientY - height * 0.5}px`
          if (!move) setMove(true)
        }
      }
    
      const closeMouseDragEvent = (e) => {
    
  
        setMove(false)
        setMouseDown(false)
      }

      useEffect(() => {
        window.addEventListener('mousemove', updateMousePos)
    
        return () => {
           window.removeEventListener('mousemove', updateMousePos)
        }
      })
 
 
    return (

        <div
            className="clock-container"
            ref={objRef}

            style={{
                position: "absolute",
                width: width,
                height: height,
                top: pos.top,
                left: pos.left,
                transform: transformPos,
                cursor: (move ? "grabbing" : "grab"),
                zIndex: (mouseDown ? 100 : 10),
            }}
            onMouseDown={e => handleMouseDown(e)}

            onMouseUp={e => closeMouseDragEvent(e)}
        >

            <div style={{ position: "relative", width: "100%", height: "100%" }} >
                {
                    dials.map((dial, index) => {
                        return <Dial key={index} hour={hour} min={min} type={dial} />
                    })
                }
                <div className="clock" style={{ zIndex: -1 }} />
            </div>
        </div>

    )
}

export default Clock;


// import React, { useState, useEffect } from "react";
// import Dial from './Dial';
// import { dials } from '../data';

// const Clock = () => {
//     const today = new Date();
//     const hour = today.getHours() % 12
//     const min = today.getMinutes()
//     const [width, height] = [145, 145]

//     const [origPos, setOrigPos] = useState(undefined)
//     const [pos, setPos] = useState({ left: "50%", top: 190 })
//     const [transformPos, setTransformPos] = useState("translate(305px, 0)")
//     const [mouseDown, setMouseDown] = useState(false);
//     const [move, setMove] = useState(false);
//     const [pc, setPc] = useState(undefined);

//     const handleMouseDown = (e) => {
//         e.preventDefault();
//         setPcBounding();
//         const rect = e.target.getBoundingClientRect()
//         setMouseDown(true);
//         setPos({ ...pos, left: rect.left, top: rect.top })
//         //set original position to return to if item is dropped to a forbidden zone
//         setOrigPos({ left: rect.left, top: rect.top })
//         setTransformPos(null)
//     }

//     const mouseDrag = (e) => {
//         e.preventDefault();
//         if (mouseDown) {
//             if (!move) setMove(true);
//             setPos({ ...pos, left: e.clientX - width * 0.5, top: e.clientY - height * 0.5 })
//         }
//     }

//     const closeMouseDragEvent = (e) => {

//         if ((move && pos.left + width > pc.left && pos.left < pc.right) && (pos.top + height > pc.top - 150 && pos.top < pc.bottom + 150)) {
//             setPos({ ...pos, left: origPos.left, top: origPos.top })
//         }
//         setMouseDown(false)
//         setMove(false)
//         setOrigPos(undefined)
//     }

//     const setPcBounding = () => {
//         setPc(document.querySelector('#pc_frame').getBoundingClientRect());
//     }

//     useEffect(() => {
//         setPcBounding();
//     }, [])

//     return (

//         <div
//             className="clock-container"
//             style={{
//                 position: "absolute",
//                 width: width,
//                 height: height,
//                 top: pos.top,
//                 left: pos.left,
//                 transform: transformPos,
//                 cursor: (move ? "grabbing" : "grab"),
//                 zIndex: (mouseDown ? 15 : 0),
//             }}
//             onMouseDown={e => handleMouseDown(e)}
//             onMouseMove={e => mouseDrag(e)}
//             onMouseUp={e => closeMouseDragEvent(e)}
//         >

//             <div style={{ position: "relative", width: "100%", height: "100%" }} >
//                 {
//                     dials.map((dial, index) => {
//                         return <Dial key={index} hour={hour} min={min} type={dial} />
//                     })
//                 }
//                 <div className="clock" style={{ zIndex: -1 }} />
//             </div>
//         </div>

//     )
// }

// export default Clock;
