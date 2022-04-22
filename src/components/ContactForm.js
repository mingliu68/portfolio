import React, { useState } from "react";
import axios from 'axios';

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false);
    const [buttonText, setButtonText] = useState("Send");
    const [formSent, setFormSent] = useState("");

    const formSubmit = e => {
        e.preventDefault()
        setButtonText("...sending")

        let data = {
            name: name,
            email: email,
            message: message
        }

        axios
            .post('https://ml-portfolio-api.herokuapp.com/api/sendgrid', data)
            .then(res => {
                console.log(res)
                setFormSent("sent");
                setSent(true);
                resetForm();
            })
            .catch(error => {
                setButtonText("Failed")
                setFormSent("fail");
                console.log(error)
            })
    }

    const resetForm = () => {
        clearForm()
        setButtonText("Message Sent")
    }

    const clearForm = () => {
        setName("")
        setEmail("")
        setMessage("")
    }

    const sendAnother = () => {
        setFormSent("");
        setButtonText("Send");
    }

    return (
        <>
            <form id="contact-form" className="contact-form" onSubmit={e => formSubmit(e)} style={{ display: formSent === "" ? "block" : "none" }}>
                <div className="field">

                    <label className="message-name" htmlFor="message-name">Name</label>
                    <input onChange={e => setName(e.target.value)} name="name" className="message-name" type="text" value={name} />
                </div>

                <div className="field">

                    <label className="message-email" htmlFor="message-email">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} name="email" className="message-email" type="email" required value={email} />
                </div>
                <div className="field">

                    <label className="message" htmlFor="message-input">Message</label>
                    <textarea onChange={e => setMessage(e.target.value)} name="message" className="message-input" type="text" value={message} required />
                </div>
                <div>
                    <input type="button" className="form-btn clear" id="clearBtn" value="Clear" onClick={() => clearForm()} />
                    <input type="submit" className="form-btn send" value={buttonText} />
                </div>
            </form>
            <div style={{ display: formSent === "sent" ? "block" : "none" }}>
                <h2>You have just sent Ming and her two Beagles a message.</h2>
                <button className="form-msg-btn send" onClick={() => sendAnother()}>Send another message</button>
                <button type="button" className="close form-msg-btn clear" data-dismiss="modal">Close</button>
            </div>
            <div style={{ display: formSent === "fail" ? "block" : "none" }}>
                <h2>Oopsie!!! Ming and her two Beagles are sad that your message didn't get through! Wanna give it another try?</h2>
                <button className="form-msg-btn send" onClick={() => sendAnother()}>Try sending again</button>
                <button type="button" className="close form-msg-btn clear" data-dismiss="modal">Close</button>
            </div>
        </>

    )
}

export default ContactForm;