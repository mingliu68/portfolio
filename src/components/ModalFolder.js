import React from "react";

const ModalFolder = () => {
    return (
        <div id="folder" className="modal fade" role="dialog">
            <div className="modal-frame" />
            <div className="modal-header">
                <h4 className="modal-title">CERTIFICATES</h4>
                <button type="button" className="close modal-header-botton" data-dismiss="modal" />
            </div>
            <div className="modal-inner">
                <b>ServiceNow</b> Certified System Administrator (2022)
            </div>
        </div>
    )
}

export default ModalFolder;