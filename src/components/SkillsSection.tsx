// src/components/SkillsSection.tsx
import "react-circular-progressbar/dist/styles.css";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

const skillsData = [
  {
    title: "FrontEnd Developer",
    percentage: 95,
  },
  {
    title: "Fullstack Developer",
    percentage: 85,
  },
  {
    title: "Tech Talent ",
    percentage: 90,
  },
  {
    title: "Mobile Developer ",
    percentage: 75,
  },
  {
    title: "Python Developer ",
    percentage: 80,
  },
];

const SkillsSection = () => {
  return (
    <div
    id="skills"
    className="py-5 d-flex flex-column justify-content-center align-items-center px-3"
  
      style={{
        background: "linear-gradient(to right, #ffffff 0%, #e6f0fa 60%, #add8e6 100%)",
      }}
    >
      <div className="text-center mb-5">
        <h2 className="fw-bold">Skills</h2>
        <p className="text-muted">
        I have expertise in development ranging from web, mobile, and content creation skills.          <br />
        
        </p>
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-5">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            style={{ width: 140, height: 140 }}
            className="d-flex flex-column align-items-center"
          >
            <CircularProgressbar
              value={skill.percentage}
              text={`${skill.percentage}%`}
              styles={buildStyles({
                textColor: "#000",
                pathColor: "url(#gradient)",
                trailColor: "#eee",
              })}
            />
            <h6 className="mt-3 fw-semibold">{skill.title}</h6>
          </div>
        ))}
      </div>

      {/* Gradient definition */}
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#a445b2" />
            <stop offset="100%" stopColor="#ff6a00" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default SkillsSection;
