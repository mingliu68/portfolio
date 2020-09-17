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
                    <br />
                    A creative who truly lives by my motto
                    "<span className="yellow_highlight">If you put your mind to it, you can accomplish anything</span>".
                </div>
            </div>
        </div>
    )
}

export default ModalMe;