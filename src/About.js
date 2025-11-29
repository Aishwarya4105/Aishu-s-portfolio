import React from "react";
import "./App.css";

/*export default function About() {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      <p>
        I’m a MERN Stack developer passionate about clean UI, responsive layouts,
        and solving real-world problems.
      </p>
    </div>
  );
}
*/

export default function About() {
  return (
    <div className="about-page fade-in">
      <section className="about-hero">
        <h1>About Me</h1>
        <p>
          I’m Aishwarya, a passionate MERN Stack Developer and a final-year BCA student
          who loves creating meaningful and visually appealing web experiences.
        </p>
        <p>
          I enjoy turning ideas into working projects, experimenting with UI/UX and constantly improving my development skills.
        </p>
      </section>

      <section className="about-cards-section">
        <h2>Why Work With Me?</h2>

        <div className="about-cards">
          <div className="about-card">
            <h3>Problem Solver</h3>
            <p>I approach challenges logically and love finding clean solutions.</p>
          </div>

          <div className="about-card">
            <h3>Fast Learner</h3>
            <p>I pick up new technologies quickly and adapt to new tools easily.</p>
          </div>

          <div className="about-card">
            <h3>Team-Friendly</h3>
            <p>Easy to work with,helpful,and comfortable collaborating with others.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
