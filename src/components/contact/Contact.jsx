import React from "react";
import "../../styles/contact.css";
import "../../styles/query/_contact-query.css";
import { FiMail } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs, { send } from "emailjs-com";
import {MdPermContactCalendar} from "react-icons/md";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ewn7vao",
        "template_o3aq99f",
        form.current,
        "4eOz5UvoAsLcezOXl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    alert("Message Sent!");
  };

  return (
    <section id="contact">
      <h1><MdPermContactCalendar /></h1>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>luismorfin64@gmail.com</h5>
            <a href="mailto:luismorfin64@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>Luis Morfin</h5>
            <a
              href="https://api.whatsapp.com/send?phone=4083935439"
              target="_blank"
            >
              Send a message
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
            rows="7"
            placeholder="Your Message"
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
