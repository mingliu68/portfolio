import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const modalServiceNow = () => {
    return (
        <div id="servicenow" className="modal fade serviceNowModal" role="dialog">
            {/* <button type="button" className="close modal-header-botton" data-dismiss="modal" /> */}
            <div data-dismiss="modal" className="serviceNowModalClose" >
                <FontAwesomeIcon icon={faTimes} size="1.5x" />
            </div>
            <div className="serviceNowModalContainer">
                ServiceNow
            </div>
        </div>
    )
}

export default modalServiceNow;