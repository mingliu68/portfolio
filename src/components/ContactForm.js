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

        axios
            .post('https://ml-portfolio-api.herokuapp.com/api/sendgrid', data)
            .then(res => {
                console.log(res)
                setSent(true)
                resetForm();
            })
            .catch(error => {
                setButtonText("Failed")
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

    return (
        <form id="contact-form" className="contact-form" onSubmit={e => formSubmit(e)}>
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

    )
}

export default ContactForm;