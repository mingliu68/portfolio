import React from "react";

const ModalContact = () => {
    return (
        <div id="contact" className="modal fade" role="dialog">
            <div className="modal-frame" />
            <div className="modal-header">
                <h4 className="modal-title">CONTACT ME</h4>
                <button type="button" className="close modal-header-botton" data-dismiss="modal"></button>
            </div>
            <div className="modal-inner">
                <div id="submit-msg" />
                <form id="contact-form" action="mailer.php" method="post">
                    <div className="field">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="field">
                        <label for="phone">Phone:</label>
                        <input type="text" id="phone" name="phone" />
                    </div>
                    <div className="field">
                        <label for="email">Email:</label>
                        <input type="text" id="email" name="email" />
                    </div>
                    <div className="field">
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" />
                    </div>
                    <div>
                        <input type="button" className="form-btn clear" id="clearBtn" value="Clear" />
                        <input type="submit" className="form-btn send" value="Send" style={{ marginLeft: 5 }} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalContact;