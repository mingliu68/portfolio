import React, { useState } from "react";
import axios from 'axios';

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false);
    const [buttonText, setButtonText] = useState("Send");

    const formSubmit = e => {
        e.preventDefault()
        setButtonText("...sending")

        let data = {
            name: name,
            email: email,
            message: message
        }

        axios.post('API_URI', data)
            .then(res => {
                setSent(true)
                resetForm();
            })
            .catch(() => {
                console.log("message not sent")
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

    return (
        <form id="contact-form" className="contact-form" onSubmit={e => formSubmit(e)}>
            <div className="field">
                {/* <label for="name">Name:</label>
                <input type="text" id="name" name="name" /> */}
                <label className="message-name" htmlFor="message-name">Name</label>
                <input onChange={e => setName(e.target.value)} name="name" className="message-name" type="text" value={name} />
            </div>
            {/* <div className="field">
                <label for="phone">Phone:</label>
                <input type="text" id="phone" name="phone" />
            </div> */}
            <div className="field">
                {/* <label for="email">Email:</label>
                <input type="text" id="email" name="email" /> */}
                <label className="message-email" htmlFor="message-email">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} name="email" className="message-email" type="email" required value={email} />
            </div>
            <div className="field">
                {/* <label for="message">Message:</label>
                <textarea id="message" name="message" /> */}
                <label className="message" htmlFor="message-input">Message</label>
                <textarea onChange={e => setMessage(e.target.value)} name="message" className="message-input" type="text" value={message} required />
            </div>
            <div>
                <input type="button" className="form-btn clear" id="clearBtn" value="Clear" onClick={() => clearForm()} />
                <input type="submit" className="form-btn send" value={buttonText} />
            </div>
        </form>

    )
}

export default ContactForm;