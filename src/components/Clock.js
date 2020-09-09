import React, { useState, useEffect, useCallback } from "react";
import Dial from './Dial';

const Clock = () => {

    return (
        <div style={{ position: "absolute", width: 200, height: 200, right: 50, top: 150, backgroundColor: "white" }}>
            <div style={{ position: "relative", width: "100%", height: "100%" }} >
                <Dial />
            </div>
        </div>
    )
}

export default Clock;
