import React from 'react'
import './ContactUs.css'

function ContactUs() {
    return (
        <div className="contactUs">
            <div className="contact__links">
                <p>Kontakt</p>
                <p>Informacije</p>
                <p>Zaposlenje</p>
                <p>Uslovi korišćenja</p>
            </div>

            <img className="contact__icon" src="images/contacticon.svg" alt=""/>

            <div className="socialMedia__links">
                <img src="images/facebook.svg" alt="facebook icon"/>
                <img src="images/twitter.svg" alt="twitter icon"/>
                <img src="images/instagram.svg" alt="instagram icon"/>
            </div>
        </div>
    )
}

export default ContactUs
