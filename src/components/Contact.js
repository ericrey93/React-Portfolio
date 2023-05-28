import React from "react";
import emailjs from 'emailjs-com';

function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_2pvt768', 'template_nq1bxev', e.target, 'xLwL3S1W24bVkg-I5')
        .then((result) => {
            window.location.reload()
        }, (error) => {
            console.log(error);
        });
    }



    return (
        <form onSubmit={sendEmail}>
            <label className="contact">Name</label>
        <input className="input-info" type='text' name="from_name" style={{alignItems: 'center'}} />
        <label className="contact">Email</label>
        <input className="input-info" type='email' name="from_email" style={{alignItems: 'center'}} />
        <label className="contact">Message</label>
        <textarea  className="description" type='text' name="message" style={{alignItems: 'center'}} />

        <input type="submit" value="Send" className="contact-submit" />
        </form>
    )
}

export default Contact;