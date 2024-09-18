import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./contactpage.css";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fromName: "",
    fromEmail: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6vi6tkh", // Replace with your EmailJS service ID
        "template_5488fxl", // Replace with your EmailJS template ID
        e.target, // Form element
        "rVziNsJ-I6HuirQG0" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
          setFormSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email.");
        }
      );
  };

  const formAnimation = useSpring({
    opacity: formSubmitted ? 0 : 1,
    transform: formSubmitted ? "translateY(-20px)" : "translateY(0px)",
  });

  const contactDetailsAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(20px)" },
    delay: 200,
  });

  const mapAnimation = useSpring({
    opacity: 1,
    transform: "scale(1)",
    from: { opacity: 0, transform: "scale(0.9)" },
    delay: 300,
  });
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <div className="contact-us-page">
      <section className="contact-details">
        <animated.div
          style={contactDetailsAnimation}
          className="details-container"
        >
          <animated.div style={fadeIn} className="colorful-bar">
            <h1>Get in Touch</h1>
          </animated.div>
          <p>
            <strong>Location:</strong> Andiyagala, Kekirawa, Sri Lanka
          </p>
          <p>
            <strong>Phone:</strong> +94 71 157 5356 / +94 71 412 3116
          </p>
          <p>
            <strong>Email:</strong> bluewaveaquafarm@gmail.com
          </p>
        </animated.div>
        <animated.div style={mapAnimation} className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5588.891711464349!2d80.51803392491558!3d7.901000291548829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcb974777f1f19%3A0xeefef16dbd8e774d!2sAndiyagala!5e0!3m2!1sen!2slk!4v1725076905062!5m2!1sen!2slk"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Company Location"
          ></iframe>
        </animated.div>
      </section>

      <section className="contact-form">
        <animated.form
          className="form-container"
          style={formAnimation}
          onSubmit={handleSubmit}
        >
          <h2>Send Us a Message</h2>
          <input
            type="text"
            name="fromName"
            placeholder="Your Name"
            value={formData.fromName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="fromEmail"
            placeholder="Your Email"
            value={formData.fromEmail}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </animated.form>
      </section>

      {formSubmitted && (
        <div className="thank-you-message">
          <h2>Thank you for reaching out!</h2>
          <p>We will get back to you as soon as possible.</p>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
