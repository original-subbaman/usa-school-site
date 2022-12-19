import React from 'react';
import './css/contact_us_styles.css';
import Footer from './Footer';
function ContactUs() {
    return (
        <section>
            <div className="d-flex mb-4 flex-sm-row flex-column">
                <div class="container p-4">
                    <h1 class="fw-bold fs-3">Contact Us</h1>
                    <p class="lead">Please reach out to us if you have any queries.</p>
                    <form>
                        <div class="mb-2">
                            <label for="name" id="contactFormLabel" class="form-label fw-bold float-start">Name</label>
                            <input type="text" class="form-control" id="name" aria-describedby="name" />
                        </div>
                        <div class="mb-2">
                            <label for="email" class="form-label fw-bold float-start">Email</label>
                            <input type="email" class="form-control" id="email" />
                        </div>
                        <div class="mb-2">
                            <label for="subject" class="form-label fw-bold float-start">Subject</label>
                            <input type="text" class="form-control" id="subject" />
                        </div>
                        <div className="mb-2">
                            <label for="message" class="form-label fw-bold float-start">Message</label>
                            <textarea id="message" class="form-control" name="message" rows="4" cols="50"/>
                        </div>
                        <button type="submit" class="btn btn-primary btn-lg" id="submit-btn">Submit</button>
                    </form>
                </div>
                <div class="container p-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28371.59628787525!2d88.07455984588064!3d27.267788438946358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e67c0f4bb2da51%3A0x2ff1d0dfeb904a31!2sUttarey%2C%20Sikkim!5e0!3m2!1sen!2sin!4v1671125343202!5m2!1sen!2sin" width="600" height="450" style={{ border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;