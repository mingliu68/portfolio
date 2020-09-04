import React from "react";

const ModalFolder = () => {
    return (
        <div id="folder" class="modal fade" role="dialog">
            <div class="modal-frame" />
            <div class="modal-header">
                <h4 class="modal-title">FOLDER</h4>
                <button type="button" class="close modal-header-botton" data-dismiss="modal" />
            </div>
            <div class="modal-inner">
                <div class="portfolio_img_box"></div>
                <div class="portfolio_img_box"></div>
            </div>
        </div>
    )
}

export default ModalFolder;