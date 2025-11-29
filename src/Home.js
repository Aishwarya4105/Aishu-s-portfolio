import React from "react";
import "./App.css";
import image from './assets/image.webp';



/*export default function Home() {
  return (
    <div className="home-page">
      <h1>Hi, I'm Aish 👋</h1>
      <p>MERN Stack Developer • Final-year BCA Student</p>
    </div>
  );
}*/


export default function Home() {
  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero">
        <div>
        <h1 className="hero-title">Hi, I'm <span>Aishwarya</span> 👋</h1>
        <p className="hero-subtitle">
          MERN Stack Learner | Final-year BCA Student | Passionate Coder
        </p>

      <p>Always learing,always building.</p>
        </div>
         <img src={image} className="profile-img"/>
      </section>

      {/* EXTRA CONTENT SECTION 
      <section className="features">
        <h2>What I Do</h2>
        <div className="cards">
          <div className="card">
            <h3>Frontend Development</h3>
            <p>I build clean, smooth and modern UI using React.</p>
          </div>

          <div className="card">
            <h3>Backend Development</h3>
            <p>Experience with Node, Express and APIs.</p>
          </div>

          <div className="card">
            <h3>Responsive Design</h3>
            <p>Mobile-friendly layouts using pure CSS.</p>
          </div>
        </div>
      </section>
      */}

    </div>
  );
}

