import React, { useState, useEffect, useCallback } from "react";
import Dial from './Dial';

const Clock = () => {
    const today = new Date();
    const hour = today.getHours() % 12
    const min = today.getMinutes()
    const sec = today.getSeconds()

    return (
        <div style={{ position: "absolute", width: 200, height: 200, right: 50, top: 150, backgroundColor: "white" }}>
            <div style={{ position: "relative", width: "100%", height: "100%" }} >
                <div>{hour % 12} {min} {sec}</div>


                <Dial hour={hour} min={min} sec={sec} type="second" />
                <Dial hour={hour} min={min} sec={sec} type="minute" />
                <Dial hour={hour} min={min} sec={sec} type="hour" />
            </div>
        </div>
    )
}

export default Clock;
