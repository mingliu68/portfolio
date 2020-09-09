import React from "react";
import Dial from './Dial';
import { dials } from '../data';

const Clock = () => {
    const today = new Date();
    const hour = today.getHours() % 12
    const min = today.getMinutes()
    const sec = today.getSeconds()

    return (

        <div style={{ position: "absolute", width: 145, height: 145, right: 50, top: 150, }}>

            <div style={{ position: "relative", width: "100%", height: "100%" }} >
                {
                    dials.map((dial, index) => {
                        return <Dial key={index} hour={hour} min={min} sec={sec} type={dial} />
                    })
                }
                <div class="clock" style={{ zIndex: -1 }}>
                </div>
            </div>
        </div>

    )
}

export default Clock;
