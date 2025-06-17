import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import webrs from "../assets/webbbrs.jpeg";
import tanswa from "../assets/TANSWA.png";
import donasi from "../assets/donasi.png";
import dlh from "../assets/dlh.png";
import gigi from "../assets/gigipalsu.png";
import pariwisata from "../assets/pariwisata.avif";







const projects = [
    {
        image: webrs,
        company: 'PT. Sistem Kesehatan',
        project: 'Codeigniter3, JavaScript, PHP',
        title: 'Hospital Information System',
        description: 'Built front-end interface and integrated back-end logic for hospital system using CI3 and PHP.',
        button: 'Preview',
        link: '', 
      },
      {
        image: tanswa,
        company: 'TanswaEnergi',
        project: 'Laravel, JavaScript, PHP, HTML, CSS, Bootstrap',
        title: 'Company Website',
        description: 'Developed full website from scratch using Laravel and implemented responsive UI as per client needs.',
        button: 'Preview',
        link: 'https://tanswaenergi.com/',
      },
      {
        image: donasi,
        company: '',
        project: 'Laravel 11, PHP, Bootstrap, Tailwind, JavaScript',
        title: 'Donation System',
        description: 'Created donation platform with secure backend and clean frontend for user transparency and ease.',
        button: 'Preview',
        link: 'https://drive.google.com/file/d/1L-aUjalKVUAkMrvPdc4k-f9q9dTMzQaQ/view?usp=sharing',
      },
      {
        image: dlh,
        company: 'DLH Kabupaten Madiun',
        project: 'Laravel 11, Bootstrap, Tailwind, JavaScript',
        title: 'RatuSampah Waste Management System',
        description: 'Worked on both backend and frontend to build a digital waste tracking system for local government.',
        button: 'Preview',
        link: 'https://ratusampah.smartservice.co.id/',
      },
      
      {
        image: gigi,
        company: 'Spesialis Gigi Palsu',
        project: 'Laravel, PHP, Bootstrap, JavaScript',
        title: 'Dental Specialist Website',
        description: 'Developed a responsive website for dental prosthesis services using Laravel, including service info and booking features.',
        button: 'Preview',
        link: 'https://spesialisgigipalsu.co.id/',
      },
      
        
      {
        image: pariwisata,
        company: 'Client Project',
        project: 'Laravel, PHP, Bootstrap, JavaScript',
        title: 'Madiun Tourism Web',
        description: 'Created an informative tourism website for Madiun, integrating Laravel backend with a responsive front-end to promote local destinations and services.',
        button: 'Preview',
        link: 'https://github.com/indahhsryn/madiunpariwisata.git',
      },
      
      
  
];

const FrontendProjects: React.FC = () => {
  return (
    <div
      className="container-fluid px-0 py-5"
      style={{
        background: 'linear-gradient(to right, #ffffff 0%, #e6f0fa 60%, #add8e6 100%)',
        overflowX: 'hidden',
      }}
    >
      <h2 className="text-center fw-bold mb-5">Portofolio Fullstack</h2>
      <div className="container">
        <div className="row g-4">
          {projects.map((proj, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={proj.image}
                  className="card-img-top"
                  alt={proj.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center bg-light p-2 rounded mb-3">
                    <div>
                      <small className="text-muted d-block" style={{ fontSize: '0.75rem' }}>Company</small>
                      <strong style={{ fontSize: '0.85rem' }}>{proj.company}</strong>
                    </div>
                    <div className="border-start ps-3">
                      <small className="text-muted d-block" style={{ fontSize: '0.75rem' }}>Project</small>
                      <strong style={{ fontSize: '0.85rem' }}>{proj.project}</strong>
                    </div>
                  </div>
                  <h5 className="card-title mb-1">{proj.title}</h5>
                  <p className="card-text mb-3">{proj.description}</p>
                  <div className="mt-auto d-flex gap-2">
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-dark w-100 text-decoration-none text-white text-center"
                    >
                      {proj.button}
                    </a>
                   
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrontendProjects;
