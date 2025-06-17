import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mobile from "../assets/mobi;ewisata.jpeg";
import pilkosis from "../assets/pilkosis.png";









const projects = [
    {
        image: Mobile, 
        company: 'Campus Project',
        project: 'Flutter (Dart)',
        title: 'Travel App',
        description: 'Developed a mobile travel application using Flutter to showcase and explore tourist destinations with clean UI and smooth navigation.',
        button: 'Preview',
        link: 'https://github.com/indahhsryn/travelapp.git',
      },
      {
        image: pilkosis,
        company: 'SMK Competition',
        project: 'Flutter (Dart)',
        title: 'Pilkosis App',
        description: 'Created a student council election app using Flutter, enabling digital voting and real-time vote tracking in a secure mobile interface.',
        button: 'Preview',
        link: 'https://github.com/indahhsryn/pilkosiapp.git',
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
      <h2 className="text-center fw-bold mb-5">Portofolio Mobile</h2>
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
