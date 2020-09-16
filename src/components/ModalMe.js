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
                <div className="modal-description modal-description-large">
                    I am a self-motivated, self-taught full stack engineer w/ finance and entrepreneurial background,
                    who is passionate about developing apps that solve user problems and learning new technologies.
                    <br />A creative who truly lives by my motto
                    "<span className="yellow_highlight">If you put your mind to it, you can accomplish anything</span>".
                    {/* Lover of shoes and dogs, hater of deadlines.
                    Holistic nut, herbal fanatic, but constantly craving junk food,
                    which also leads to my expertise in yo-yo diet.
                    <br /><br />
                    Slogan: If you put your mind to it, you can accomplish anything! */}
                    {/* Hi, I am the girl chased by the two beagles and the brain behind Beagle Bits.
                    I am a full stack web developer and iOS mobile developer.
                    I have been building websites since 2003 and it has always been a passion of mine.
                    If you are interested in having me building your dream site, contact me via the contact form and let's get to work! */}
                </div>
            </div>
        </div>
    )
}

export default ModalMe;