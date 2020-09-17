import React from "react";

const ModalFolder = () => {
    return (
        <div id="folder" className="modal fade" role="dialog">
            <div className="modal-frame" />
            <div className="modal-header">
                <h4 className="modal-title">FOLDER</h4>
                <button type="button" className="close modal-header-botton" data-dismiss="modal" />
            </div>
            <div className="modal-inner">
                Something Interesting Coming Soon...
            </div>
        </div>
    )
}

export default ModalFolder;