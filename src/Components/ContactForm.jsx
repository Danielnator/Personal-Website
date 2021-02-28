import React from "react";

function ContactForm() {
  const messageFormAlert = () => {
    alert(
      "This website is currently not connected to its backend. To contact me, please go on my LinkedIn!"
    );
  };

  return (
    <div>
      <div className="contact-me">
        <h1>Contact Me</h1>
      </div>
      <div className="container-fluid row contact-container">
        <div className="col-lg-2">
          <p>CONTACT</p>
          <a href="https://www.linkedin.com/in/daniel-r-62b449b6">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        <div className="col-lg-10">
          <ul>
            <li>
              <input
                className="contact-text-field"
                type="text"
                readOnly={true}
                value="Full Name"
                onClick={messageFormAlert}
              />
            </li>
            <li>
              <input
                className="contact-text-field"
                type="email"
                readOnly={true}
                value="Email"
                onClick={messageFormAlert}
              />
            </li>
            <li>
              <input
                className="contact-text-field"
                type="text"
                readOnly={true}
                value="Message"
                onClick={messageFormAlert}
              />
            </li>
            <li>
              <button type="button" className="btn contact-button">
                Send
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
