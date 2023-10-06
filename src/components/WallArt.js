import React, { useState, useEffect, useRef } from 'react'

const WallArt = (props) => {
  const { type, link, name, top, left, transform, width, height } = {
    ...props.item,
  }
  const [pos, setPos] = useState({ left: left, top: top })

  const [move, setMove] = useState(false)
  const [transformPos, setTransformPos] = useState(transform)
  const [mouseDown, setMouseDown] = useState(false)

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
    if (mouseDown && !move && type === 'social') {
      openLink(link)
    }

     setMove(false)
    setMouseDown(false)
  }

  const openLink = (externalLink) => {
    const features = 'ref=noreferrer'
    window.open(externalLink, features)
  }

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePos)

    return () => {
       window.removeEventListener('mousemove', updateMousePos)
    }
  })

  return (
    <div
      className={name}
      ref={objRef}
      style={{
        left: pos.left,
        top: pos.top,
        transform: transformPos,
        zIndex: mouseDown ? 100 : 10,
      }}
      onMouseDown={(e) => handleMouseDown(e)}
      onMouseUp={(e) => closeMouseDragEvent(e)}
    >
      <div
        style={{
          cursor: move ? 'grabbing' : mouseDown ? 'grab' : 'pointer',
          width: width + 10,
          height: height + 10,
        }}
      />
    </div>
  )
}

export default WallArt

