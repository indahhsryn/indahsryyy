import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import indahImage from "../assets/indah.jpeg";
import indah2Image from "../assets/indahh2.jpeg";
import uiuxImage from "../assets/uiux.svg";
import frontendImage from "../assets/frontend.svg";
import contentImage from "../assets/content.svg";
import moobileImage from "../assets/mobile.jpg";
import pythonImage from "../assets/python.jpg";
import SkillsSection from "./SkillsSection";
import AskSection from "./AskSection";
import WhatsAppButton from "./WhatsAppButton";
import Footer from "./Footer";
import CertificateCardProps from "./CertificateSection";
import { Link } from 'react-router-dom';





export default function HeroSection() {
  const [activeNav, setActiveNav] = useState("Home");

  const handleNavClick = (nav: string) => {
    setActiveNav(nav);
  };


  return (
    <div
  className="w-100 overflow-x-hidden pb-5"
  style={{
    background: "linear-gradient(to right, #ffffff 0%, #e6f0fa 60%, #add8e6 100%)",
  }}
>

  
      {/* Sticky Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top w-100 py-3">
        <div className="container justify-content-center">
          <ul className="navbar-nav d-flex flex-row gap-4">
            {["Home", "Journey",  "Skills", "Portfolio", "Contact"].map((nav) => (
              <li className="nav-item" key={nav}>
                <a
                  className={`nav-link fw-bold ${
                    activeNav === nav ? "text-primary" : "text-secondary"
                  }`}
                  href={`#${nav.toLowerCase()}`}
                  onClick={() => handleNavClick(nav)}
                  style={{
                    transition: "all 0.3s ease",
                    transform: activeNav === nav ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  {nav}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mt-5 pt-5" id="home">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-md-6 text-center text-md-start">
            <span className="badge bg-light text-primary fw-semibold fs-6 py-2 px-3 rounded-pill mb-3">
              Indah Suryaningsih
            </span>
            <h1 className="display-4 fw-bold text-dark">
              From Vision to Interaction
            </h1>
            <p className="lead text-muted mt-3">
              I transform creative visions into engaging, responsive, and
              intuitive interfaces.
            </p>
          </div>

          {/* Image Content */}
          <div className="col-md-6 d-flex justify-content-center position-relative mt-5 mt-md-0">
            <div
              className="rounded-circle overflow-hidden shadow-lg"
              style={{ width: "240px", height: "240px" }}
            >
              <img
                src={indahImage}
                alt="Indah"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Journey Section */}
      <div className="container mt-5 pt-5" id="journey">
        <div className="row align-items-center">
          {/* Image & Labels */}
          <div className="col-md-5 d-flex justify-content-center mb-4 mb-md-0">
            <div className="position-relative">
              <img
                src={indah2Image}
                alt="Indah"
                className="img-fluid rounded-circle shadow"
                style={{ width: "220px", height: "220px" }}
              />
            <div className="position-relative">
                <Link to="" style={{ textDecoration: 'none' }}>
                  <div
                    className="position-absolute bg-warning text-dark fw-semibold px-3 py-2 rounded-pill"
                    style={{ top: "10%", left: "-30%", transform: "rotate(-15deg)" }}
                  >
                    Frontend Developer
                  </div>
                </Link>
                </div>

              <div
                className="position-absolute bg-primary text-white fw-semibold px-3 py-2 rounded-pill"
                style={{ top: "40%", left: "-40%", transform: "rotate(-15deg)" }}
              >
                Backend Developer
              </div>
              <div
                className="position-absolute bg-danger text-white fw-semibold px-3 py-2 rounded-pill"
                style={{ top: "70%", left: "-20%", transform: "rotate(-15deg)" }}
              >
                Tech Content Creator
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="col-12 col-md-7">
  <h2 className="fw-bold text-dark mb-3 text-center text-md-start">My Journey</h2>
  <p className="text-muted text-center text-md-start">
    The journey in technology began in vocational high school, majoring in Software Engineering, and continued through an internship as a Graphic Designer & Digital Marketing, which sparked a deeper interest in the digital world. That curiosity eventually grew into solid skills in application development, both front-end and back-end.

    Involved in various end-to-end development projects, from designing user interfaces to building complex systems. Experienced in direct client communication and delivering projects using diverse technologies. For a developer, technology is not just about writing code — it's about creating meaningful solutions, continuous learning, and growing through every challenge.
  </p>
</div>

        </div>
        <SkillsSection />

          {/* Portfolio Section */}
          <div className="container mt-4 pt-3" id="portfolio">
  <h2 className="fw-bold text-center mb-5">Portofolio</h2>
  <div className="row justify-content-center">
    {/* UI/UX */}
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0 rounded-4">
        <div className="text-center bg-light p-4 rounded-top-4" style={{ backgroundColor: "#e8e6fb" }}>
          <img src={uiuxImage} alt="UI/UX" style={{ height: "120px" }} />
        </div>
        <div className="card-body text-center">
          <h5 className="fw-bold">FrontEnd Developer</h5>
          <p className="text-muted">
          Building clean, responsive interfaces while ensuring optimal performance and SEO best practices.          </p>
          <a href="/frontend" className="btn btn-dark rounded-pill px-4">View more</a>
        </div>
      </div>
    </div>

    {/* Frontend */}
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0 rounded-4">
        <div className="text-center bg-light p-4 rounded-top-4" style={{ backgroundColor: "#dbf4db" }}>
          <img src={frontendImage} alt="Frontend" style={{ height: "120px" }} />
        </div>
        <div className="card-body text-center">
          <h5 className="fw-bold">Fullstack Developer</h5>
          <p className="text-muted">
          Experienced in building full-cycle web solutions—from intuitive UI design to efficient backend logic—using modern frameworks and best practices          </p>
          <a href="fullstack" className="btn btn-dark rounded-pill px-4">View more</a>
        </div>
      </div>
    </div>

    {/* Content Creation */}
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0 rounded-4">
        <div className="text-center bg-light p-4 rounded-top-4" style={{ backgroundColor: "#fdf0d6" }}>
          <img src={contentImage} alt="Content Creation" style={{ height: "120px" }} />
        </div>
        <div className="card-body text-center">
          <h5 className="fw-bold">Tech Talent</h5>
          <p className="text-muted">
          Explaining technology in a fun and easy-to-understand way. Creating educational and motivating content.          </p>
          <a href="https://www.tiktok.com/@razenteknologi?" className="btn btn-dark rounded-pill px-4">View more</a>
        </div>
      </div>
    </div>
     {/* Mobile Developer */}
     <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0 rounded-4">
        <div className="text-center bg-light p-4 rounded-top-4" style={{ backgroundColor: "#fdf0d6" }}>
          <img src={moobileImage} alt="Content Creation" style={{ height: "120px" }} />
        </div>
        <div className="card-body text-center">
          <h5 className="fw-bold">Mobile Developer</h5>
          <p className="text-muted">
          Turning ideas into functional and engaging mobile applications.                  </p>
          <a href="mobile" className="btn btn-dark rounded-pill px-4">View more</a>
        </div>
      </div>
    </div>  
        {/* Python Developer */}
        <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm border-0 rounded-4">
        <div className="text-center bg-light p-4 rounded-top-4" style={{ backgroundColor: "#fdf0d6" }}>
          <img src={pythonImage} alt="Content Creation" style={{ height: "120px" }} />
        </div>
        <div className="card-body text-center">
          <h5 className="fw-bold">Python Developer</h5>
          <p className="text-muted">
          Creating smart solutions using the power of Python language                   </p>
          <a href="python" className="btn btn-dark rounded-pill px-4">View more</a>
        </div>
      </div>
    </div>  
    <CertificateCardProps/>
    <AskSection />
    <WhatsAppButton />
    <Footer />

  </div>
</div>


</div>
 </div>
    
    
  );


}
