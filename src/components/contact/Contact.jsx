import React, { useRef } from "react";
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import "./contact.css";
import emailjs from "emailjs-com";
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_7r90uws",
      "template_zre8d77",
      form.current,
      "3jnFUdsogbyklZNx5"
    );
    e.target.reset();
  };

  return (
    <section className="page-section" id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>duypnl219@gmail.com</h5>
            <a target="_blank" href="mailto:duypnl219@gmail.com">
              Send Message
            </a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Linh Duy</h5>
            <a target="_blank" href="https://www.facebook.com/duypnl219">
              Send Message
            </a>
          </article>
          <article className="contact__option">
            <AiFillPhone className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>+84 842002639</h5>
            <a target="_blank" href="tel:0842002639">
              Send Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Your Message "
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
