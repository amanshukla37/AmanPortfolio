import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setFormStatus(null);

    const formData = new FormData(event.target);
    formData.append("access_key", "37c83178-7b6a-4f0d-8627-2b64e015c03b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await res.json();

      if (result.success) {
        setFormStatus("Message sent successfully!");
        event.target.reset();
      } else {
        setFormStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setFormStatus("Error occurred. Please check your network.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-content">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm available for new projects, so feel free to reach out for
            collaborations or inquiries.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Email" />
              <p>shuklaamanjbd@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Phone" />
              <p>+91-9554370283</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location" />
              <p>Kanpur, Uttar Pradesh, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
          <label>Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
          <label>Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="contact-submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
          {formStatus && <p className="form-status">{formStatus}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
