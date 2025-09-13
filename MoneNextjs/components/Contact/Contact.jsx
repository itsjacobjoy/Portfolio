import React from 'react';
import { contactData } from './ContactData';
// import { Map } from '..';

const Contact = () => {
  const { email, phone, linkedin } = contactData.mainData;

  return (
    <div id="contact" className="section">
      <div className="container">
        <div className="row g-4 g-xl-5">
          {/* Heading */}
          <div className="col-12 col-xl-4">
            <span className="title-heading text-white-04">Contact</span>
            <h1 className="display-3 fw-medium mb-0">
              Let&apos;s <span className="text-gradient">Talk</span>
            </h1>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-xl-8">
            <div className="row g-4 g-lg-5 contact-meta">
              {/* Email */}
              <div className="col-12 col-md-6">
                <h6 className="sm-heading">Email:</h6>
                <h3 className="mb-0">
                  <a href={`mailto:${email}`} className="contact-link" title="Send me an email">
                    <i className="bi bi-envelope me-2" aria-hidden="true" />
                    {email}
                  </a>
                </h3>
              </div>

              {/* Phone */}
              <div className="col-12 col-md-6">
                <h6 className="sm-heading">Call:</h6>
                <h3 className="mb-0">
                  <a href={`tel:${phone}`} className="contact-link" title="Call me">
                    <i className="bi bi-telephone me-2" aria-hidden="true" />
                    {phone}
                  </a>
                </h3>
              </div>

              {/* LinkedIn */}
              <div className="col-12 col-md-6">
                <h6 className="sm-heading">LinkedIn:</h6>
                <h3 className="mb-0">
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                    title="Open my LinkedIn profile"
                  >
                    <i className="bi bi-linkedin me-2" aria-hidden="true" />
                    Open LinkedIn Profile
                    <i className="bi bi-box-arrow-up-right ms-2" aria-hidden="true" />
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* <Map /> */}
      </div>
    </div>
  );
};

export default Contact;
