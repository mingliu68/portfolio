import React from "react";
import ContactForm from './ContactForm';

const ModalContact = () => {

    return (
        <div id="contact" className="modal fade" role="dialog">
            <div className="modal-frame" />
            <div className="modal-header">
                <h4 className="modal-title">CONTACT ME</h4>
                <button type="button" className="close modal-header-botton" data-dismiss="modal" />
            </div>
            <div className="modal-inner">
                <div id="submit-msg" />
                <ContactForm />
            </div>
        </div>
    )
}

export default ModalContact;