import React from "react";
import BlackBoard from './BlackBoard';



const UpperContainer = () => {


    return (
        <div className="upper-container">
            <BlackBoard />
            <div className="desk" style={{ zIndex: 4 }}>
                <div className="desk-trim" />
            </div>
            <div className="container" style={{ zIndex: 5 }}>
                <div className="desktop">
                    <div className="pc_frame">
                        <div className="girl_box">
                            <div id="girl" />
                        </div>
                        <div className="beagle1_box">
                            <div id="beagle" />
                        </div>
                        <div className="beagle2_box">
                            <div id="beagle2" />
                        </div>
                        <div className="msg">
                            <p></p>
                            <p>Hi there!</p>
                            <p>I'm Ming, a full stack engineer </p>
                            <p>based in New York, NY. </p>
                            <p>I build web & mobile apps on </p>
                            <p>weekdays and run wild with my two </p>
                            <p>obnoxious Beagles on weekends. </p>
                            <p>Feel free to click around my</p>
                            <p>pixelated world<span>|</span></p>
                        </div>

                        <div className="icon-disk">
                            <button className="button" type="button" data-toggle="modal" data-target="#disk" />
                        </div>
                        <div className="icon-msg">
                            <button className="button" type="button" data-toggle="modal" data-target="#contact" />
                        </div>
                        <div className="icon-folder">
                            <button className="button" type="button" data-toggle="modal" data-target="#folder" />
                        </div>
                        <div className="icon-about">
                            <button className="button" type="button" data-toggle="modal" data-target="#about" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default UpperContainer;