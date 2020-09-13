import React from 'react';
import { colors } from '../data';

const ColorPalette = (props) => {
    const { setInk, ink, setIsEraser, isEraser } = { ...props }
    return (
        <div
            style={{ display: "flex", alignItems: "flex-end", width: 290, height: 20, position: "absolute", left: 60, bottom: 30 }}
        >
            {
                colors.map((color, index) => {
                    return (
                        <div
                            style={{ width: 40, height: (isEraser === true ? 20 : ink === color ? 30 : 20), marginRight: (index < colors.length - 1 ? 10 : 0), backgroundColor: color }}
                            onClick={() => { setInk(color); setIsEraser(false) }}
                        />
                    )
                })
            }

        </div>
    )
}

export default ColorPalette;