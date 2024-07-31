import React, { useRef } from "react";
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
      "3H8kDa1Mh_YSc_ANx"
    );
    alert("Message sent! You will be contacted soon!");
    e.target.reset();
  };

  return (
    <section id="contact">
      <h1>Kontakt meg</h1>
      <h1>Kontakt meg</h1>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>E-post</h4>
            <h5>nirajankarki1985@gmail.com</h5>
            <a
              href="mailto:nirajankarki1985@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send e-post
            </a>
          </article>

          <article className="contact_option">
            <FaMobileAlt className="contact_option-icon" />
            <h4>Mobil</h4>
            <h5>+47 93951099</h5>
            <a href="tel:+4793951099" target="_blank" rel="noreferrer">
              Ring meg
            </a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>nirajankarki</h5>
            <a
              href="https://m.me/nirajan.karki.33"
              target="_blank"
              rel="noreferrer"
            >
              Send beskjed
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Navn" required />
          <input type="email" name="email" placeholder="E-post" required />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobil"
            maxLength={8}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Skriv beskjed her..."
            required
            style={{ fontSize: "1rem" }}
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send melding
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
