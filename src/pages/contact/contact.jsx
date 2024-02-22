import React from "react";
import "./contact.scss";
import { CopyBtn } from "../../component";

export const Contact = () => {
  const handleCalendlyClick = () => {
    
    const calendlyLink = "https://calendly.com/isagarjaiswal";
    window.open(calendlyLink, "_blank");
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <div className="heading-description">
          <div className="contact-heading">Contact</div>
          <div className="contact-description">Get in touch for web works</div>
        </div>
        <div className="contact-information">
          <div className="contact-line"></div>
          <div className="email-phone-contact">
            <div className="email-container-contact">
              <div className="address">sagarjaiswal81555@gmail.com</div>
              <div className="label">E-mail</div>
            </div>
            <div className="email-container-contact">
              <div className="address">+91 8959829465</div>
              <div className="label">Phone</div>
            </div>
          </div>
        </div>
        <div className="btn-container-contact">
          <button className="btn-call" onClick={handleCalendlyClick}>
            Schedule a call
          </button>
          <CopyBtn />
        </div>
      </div>
      <div className="form-main-container">
        <div className="form-heading">Send a message</div>
        <div className="form-container">
          <div className="name-email-container">
            <input className="input-name" type="text" placeholder="Name" />
            <input className="input-email" type="email" placeholder="Email" />
          </div>
          <textarea
            rows={6}
            placeholder="Message"
            className="text-area-contact"
          ></textarea>
          <button className="contact-form-btn">Send Message</button>
        </div>
      </div>
    </div>
  );
};
