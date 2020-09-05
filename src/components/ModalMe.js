import React from "react";

const ModalMe = () => {
    return (
        <div id="about" className="modal fade" role="dialog">
            <div className="modal-frame" />
            <div className="modal-header">
                <h4 className="modal-title">ABOUT ME</h4>
                <button type="button" className="close modal-header-botton" data-dismiss="modal" />
            </div>
            <div className="modal-inner scroller">
                <div style={{ lineHeight: 1.2, textAlign: "left" }}>
                    Hi, I am the girl chased by the two beagles and the brain behind Beagle Bits.
                    I am a full stack web developer and iOS mobile developer.
                    I have been building websites since 2003 and it has always been a passion of mine.
                    If you are interested in having me building your dream site, contact me via the contact form and let's get to work!
                </div>
            </div>
        </div>
    )
}

export default ModalMe;