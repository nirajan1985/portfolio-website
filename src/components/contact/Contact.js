import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_k6wr2oe",
      "template_5p4grak",
      form.current,
      "bAYKbbjdxlwX7iTgu"
    );
    alert("Message sent! You will be contacted soon!");
    e.target.reset();
  };

  return (
    <section id="contact">
      <h1>Contact</h1>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>nirajankarki1985@gmail.com</h5>
            <a href="mailto:nirajankarki1985@gmail.com" target="_blank">
              Send an Email
            </a>
          </article>

          <article className="contact_option">
            <FaMobileAlt className="contact_option-icon" />
            <h4>Mobile</h4>
            <h5>+47 93951099</h5>
            <a href="tel:+4793951099" target="_blank">
              Call me
            </a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>nirajankarki</h5>
            <a href="https://m.me/nirajan.karki.33" target="_blank">
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile"
            maxLength={8}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
