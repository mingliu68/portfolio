import React from "react";

const ModalDisk = () => {
    return (
        <div id="disk" className="modal fade" role="dialog">
            <div className="modal-frame" />
            <div className="modal-header">
                <h4 className="modal-title">DISK</h4>
                <button type="button" class="close modal-header-botton" data-dismiss="modal" />
            </div>
            <div className="modal-inner" />
        </div>
    )
}

export default ModalDisk;