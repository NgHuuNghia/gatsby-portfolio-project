import React from 'react'
import Footer from '../footer'
import './index.scss'

const Contact = () => {
    return (
        <div id="contact" className='contact'>
            <div className="section-title-block-2">
                <h1 className="section-title">
                    <strong>CONTACT</strong>
                </h1>
                <p style={{ color: "#757575" }}>If you would like to get in touch with me, please visit my social networks or send me a message. Thanks a lot!</p>
            </div>
            <div style={{ padding: '0 10rem 5rem 10rem' }}>
                <form method="POST" action="https://formspree.io/xzbaegyw">
                    <input style={{ width: '100%', height: '2.5rem', marginTop: '1rem' }} type="text" id="yname" name="Name" placeholder="Name" required />
                    <input style={{ width: '100%', height: '2.5rem', marginTop: '1rem' }} type="email" id="yemail" name="Email" placeholder="Email" required />
                    <textarea style={{ width: '100%', height: '6rem', marginTop: '1rem' }} type="text" id="ymsg" name="Message" placeholder="Message" required></textarea>
                    <button style={{ width: '100%', marginTop: '1rem' }} className="btn btn-primary" type="submit" id="send"><strong>Send Message</strong></button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;