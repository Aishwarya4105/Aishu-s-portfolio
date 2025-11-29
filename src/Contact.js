import React from "react";
import "./App.css";

/*export default function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p>Email: youremail@example.com</p>
    </div>
  );
}*/
export default function Contact() {
  return (
    <div className="contact-page fade-in">

      <section className="contact-hero">
        <h1>Contact Me</h1>
        <p>Let’s work together</p>
      </section>

      <section className="contact-details">
        <div className="contact-card">
          <h3>Email</h3>
          <p>aishwarya4102025@gmail.com</p>
        </div>

        <div className="contact-card">
          <h3>LinkedIn</h3>
          <p>linkedin.com/in/Aishwarya J</p>
        </div>

        <div className="contact-card">
          <h3>GitHub</h3>
          <p>https://github.com/Aishwarya4105</p>
        </div>
      </section>

    </div>
  );
}
