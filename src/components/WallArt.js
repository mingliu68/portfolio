import React from "react";

const WallArt = (props) => {
    const { type, link, name, top, bottom, left, right, transform } = { ...props.item }

    return (
        <div key={props.index} className={name} style={{ left: left, top: top, transform: transform }} >
            <a href={link} target="_blank" rel="noreferrer">
                <div style={{ cursor: "pointer", width: 105, height: 105 }} />
            </a>
        </div>
    )
}

export default WallArt;