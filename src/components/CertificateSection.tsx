import React from "react";
import cert1 from "../assets/cert1.png";
import cert2 from "../assets/cert2.png";
import cert3 from "../assets/cert3.png";
import cert4 from "../assets/cert4.png";
import cert8 from "../assets/cert8.png";
import cert9 from "../assets/cert9.png";
import cert10 from "../assets/cert10.png";
import cert11 from "../assets/cert11.png";
import cert12 from "../assets/cert12.png";



const CertificateSection: React.FC = () => {
  const certificates = [
    { image: cert1, title: "", description: "", link: "https://sanbercode.com/sertifikat/generate/1b82b54e-8127-49ad-8310-430f12638e91" },
    { image: cert2, title: "", description: "", link: "https://sanbercode.com/sertifikat-training/generate/8d28c44d-a3ca-4ee4-9517-0fb4e00076d9" },
    { image: cert3, title: "", description: "", link: "https://sanbercode.com/certificate/em/8edf40a6-7773-44d3-ba51-7ce7ff5b7578" },
    { image: cert4, title: "", description: "", link: "https://sanbercode.com/sertifikat/generate/e240e34e-1f0a-492b-a1c4-8693aa526307" },
    { image: cert8, title: "", description: "", link: "https://drive.google.com/file/d/1xNHJykpxt-VtUXvNNvGkIc9nT63FJYcz/view?usp=sharing" },
    { image: cert9, title: "", description: "", link: "https://www.dicoding.com/certificates/N9ZODJDM8PG5" },
    { image: cert10, title: "", description: "", link: "https://www.dicoding.com/certificates/KEXL465QMXG2" },
    { image: cert11, title: "", description: "", link: "https://www.dicoding.com/certificates/2VX32L714PYQ" },
    { image: cert12, title: "", description: "", link: "https://www.dicoding.com/certificates/53XE00VO0XRN" },

  ];

  return (
    <section
      style={{
        padding: "60px 20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "40px",
          color: "#2c3e50",
        }}
      >
        Certificate
      </h2>

      {/* STYLE UNTUK RESPONSIVE */}
      <style>
        {`
          .cert-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
          }

          @media (max-width: 767px) {
            .cert-grid {
              display: flex;
              overflow-x: auto;
              scroll-snap-type: x mandatory;
              -webkit-overflow-scrolling: touch;
            }

            .cert-card {
              flex: 0 0 auto;
              width: 240px;
              scroll-snap-align: start;
              margin-right: 16px;
            }

            ::-webkit-scrollbar {
              display: none;
            }
          }
        `}
      </style>

      {/* Grid Container */}
      <div className="cert-grid">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="cert-card"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ width: "100%", height: "180px", overflow: "hidden" }}>
              <img
                src={cert.image}
                alt={`Certificate ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div style={{ padding: "20px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "10px" }}>
                {cert.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#555", marginBottom: "20px" }}>
                {cert.description}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  backgroundColor: "#2c3e50",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "999px",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
Detail              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificateSection;
