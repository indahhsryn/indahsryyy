import avatar1 from "../assets/avatar.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar.png";
import avatar4 from "../assets/avatar2.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function AskSection() {
  return (
    <div
      className="ask-section"
      id="Contact"
      style={{
        padding: "100px 20px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Radial Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at center, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          zIndex: 0,
        }}
      />

      {/* Floating Avatars */}
      <img src={avatar1} alt="avatar" style={{ position: "absolute", top: "10%", left: "10%", width: "50px" }} />
      <img src={avatar2} alt="avatar" style={{ position: "absolute", top: "10%", right: "10%", width: "50px" }} />
      <img src={avatar3} alt="avatar" style={{ position: "absolute", bottom: "15%", left: "15%", width: "50px" }} />
      <img src={avatar4} alt="avatar" style={{ position: "absolute", bottom: "10%", right: "20%", width: "50px" }} />

      {/* "Find Me On" Section */}
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#333",
          zIndex: 1,
          position: "relative",
          marginBottom: "10px",
        }}
      >
        Find me on
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          fontSize: "24px",
          color: "#2c3e50",
          zIndex: 1,
          position: "relative",
          marginBottom: "40px",
        }}
      >
        <a href="https://github.com/indahhsryn" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/iindhhsryn_" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/indahsry/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
     
      </div>

      {/* Quote */}
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#333",
          zIndex: 1,
          position: "relative",
        }}
      >
        Every question is an <br />
        opportunity to learn and <br />
        grow together
      </h2>

      {/* Email Button */}
      <a
        href="mailto:indahh.suryaningsihh@gmail.com"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 24px",
          backgroundColor: "#2c3e50",
          color: "#fff",
          borderRadius: "999px",
          textDecoration: "none",
          fontWeight: "500",
          zIndex: 1,
          position: "relative",
        }}
      >
        Ask Me Anything
      </a>
    </div>
  );
}
