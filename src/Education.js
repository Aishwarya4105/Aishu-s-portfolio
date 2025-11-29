import React from "react";
import "./App.css";

/*export default function Education() {
  return (
    <div className="education-page">
      <h1>Education</h1>
      <ul className="edu-list">
        <li><strong>BCA (2023–2025)</strong> — Final Year</li>
        <li>PCMB — Scored 95 in Maths</li>
      </ul>
    </div>
  );
}*/

export default function Education() {
  return (
    <div className="education-page fade-in">

      <section className="edu-hero">
        <h1>Education</h1>
        <p>My academic journey</p>
      </section>

      <section className="edu-list-section">
        <div className="edu-card">
          <h2>Bachelor of Computer Applications (BCA)</h2>
         
          <p>
          @ Mulki sundar ram shetty college,shirva
          </p>
           <p><strong>2023 - 2026</strong></p>
        </div>

        <div className="edu-card">
          <h2>PCMB (Pre-University)</h2>

          <p>@ Govt. PU Belmannu</p>
                    <p><strong>2021-2023</strong></p>
        </div>
      </section>

    </div>
  );
}
