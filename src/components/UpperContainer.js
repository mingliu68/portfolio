import React from "react";
import BlackBoard from './BlackBoard';
import { wallart } from '../data';
import WallArt from './WallArt';
import Clock from './Clock';
import DrawingBoard from './DrawingBoard';


const UpperContainer = () => {

    return (
        <div className="upper-container">
            <BlackBoard />
            <div className="desk" style={{ zIndex: -1 }}>
                <div className="desk-trim" />
            </div>
            <div className="container" style={{ zIndex: 5 }}>
                {/* new serviceNow logo tag */}
                <div className="icon-servicenow">
                    <button title="ServiceNow" type="button" data-toggle="modal" data-target="#servicenow">
                        servicen
                        <span style={{ color: "#80b611" }}>o</span>
                        w
                    </button>
                </div>

                <div className="desktop">
                    <div className="pc_frame" id="pc_frame">
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
                            <p>I'm Ming, a full stack developer </p>
                            <p>based in New York, NY. </p>
                            <p>I build web & mobile apps on </p>
                            <p>weekdays and run wild with my two </p>
                            <p>obnoxious Beagles on the weekends. </p>
                            <p>Feel free to click around my</p>
                            <p>pixelated world<span>|</span></p>
                        </div>

                        <div className="icon-disk">
                            <button title="Tech Skills" className="button" type="button" data-toggle="modal" data-target="#disk" />
                        </div>
                        <div className="icon-msg">
                            <button title="Contact Me" className="button" type="button" data-toggle="modal" data-target="#contact" />
                        </div>
                        <div className="icon-folder">
                            <button title="Certificates" className="button" type="button" data-toggle="modal" data-target="#folder" />
                        </div>
                        <div className="icon-about">
                            <button title="About Me" className="button" type="button" data-toggle="modal" data-target="#about" />
                        </div>
                    </div>
                </div>
            </div>
            {
                wallart.map((item, index) => {
                    return (
                        <WallArt key={index} item={item} index={index} />
                    )
                })
            }
            <Clock />
            <DrawingBoard />
        </div>
    )
}

export default UpperContainer;