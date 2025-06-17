import 'bootstrap/dist/css/bootstrap.min.css';
import webrs from "../assets/webbbrs.jpeg";
import tekno from "../assets/tekno.png";
import studio from "../assets/studio.png";
import project from "../assets/project.png";
import tanswa from "../assets/TANSWA.png";
import donasi from "../assets/donasi.png";
import dlh from "../assets/dlh.png";
import blogvue from "../assets/blogvue.png";
import pasarmalam from "../assets/pasarmalam.png";
import kopigarasi from "../assets/kopigarasi.png";
import undangan from "../assets/undangan.png";
import wisata from "../assets/wisata.png";





const projects = [
  {
    image: webrs,
    company: 'PT. Sistem Kesehatan',
    project: 'Codeigniter3, JavaScript, PHP',
    title: 'Hospital Information System',
    description: 'Developed a web-based front-end hospital system interface',
    button: 'Preview',
    link: '', 
  },
  {
    image: tekno,
    company: 'Razen Teknologi',
    project: 'Laravel, JavaScript, PHP, HTML, CSS, Bootstrap',
    title: 'Company Website',
    description: 'Populated content based on the brief and designed UI as per client’s requirements',
    button: 'Preview',
    // link: 'https://razenteknologi.com/',
    link: '',

  },
  {
    image: studio,
    company: 'Razen Studio',
    project: 'Laravel, JavaScript, PHP, HTML, CSS, Bootstrap',
    title: 'Company Website',
    description: 'Populated content based on the brief and designed UI as per client’s requirements',
    button: 'Preview',
    // link: 'https://razenstudio.com/',
    link: "#"
  },
  {
    image: project,
    company: 'Razen Project',
    project: 'Laravel, JavaScript, PHP, HTML, CSS, Bootstrap',
    title: 'Company Website',
    description: 'Populated content based on the brief and designed UI as per client’s requirements',
    button: 'Preview',
    link: '#',
  },
  {
    image: tanswa,
    company: 'TanswaEnergi',
    project: 'Laravel, JavaScript, PHP, HTML, CSS, Bootstrap',
    title: 'Company Website',
    description: 'develop from 0 to create a web company using Laravel, and the appearance is according to client needs',
    button: 'Preview',
    link: 'https://tanswaenergi.com/',
  },
  {
    image: donasi,
    company: '',
    project: 'Laravel 11 ,PHP, Boostrap , Tailwind , Javascript',
    title: 'donation system',
    description: 'A web-based donation system designed to streamline and manage mosque contributions with transparency, efficiency, and ease of access for the community.',
    button: 'Preview',
    link: 'https://drive.google.com/file/d/1L-aUjalKVUAkMrvPdc4k-f9q9dTMzQaQ/view?usp=sharing',
  },

  {
    image: dlh,
    company: 'DLH Kabupaten Madiun',
    project: 'Laravel 11, Bootstrap, Tailwind, JavaScript',
    title: 'RatuSampah Waste Management System',
    description: 'A collaborative project developed with the team to build an integrated waste management system for RatuSampah. ',
    button: 'Preview',
    link: 'https://ratusampah.smartservice.co.id/',
  },

  {
    image: blogvue,
    company: 'Personal Project',
    project: 'Vue.js, JavaScript, Bootstrap, CSS',
    title: 'Simple Blog App',
    description: 'A personal project developed using Vue.js to create a minimalistic blog platform where users can view and explore posts in a clean and responsive layout.',
    button: 'Preview',
    link: 'https://blogappvue.netlify.app/',
  },
  {
    image: pasarmalam,
    company: 'Fitoria01',
    project: 'Pure HTML, CSS, Bootstrap',
    title: 'Pasar Malam Website',
    description: 'A static client-side website built using pure HTML, CSS, and Bootstrap to showcase a night market theme. Designed with engaging visuals and responsive layout to deliver a lively and immersive user experience.',
    button: 'Preview',
    link: 'https://www.fitoria01.com/',
  },
  {
    image: kopigarasi,
    company: 'Kopi Garasi Madiun',
    project: 'OrderOnline Platform, HTML Structure, UI Customization',
    title: 'Kopi Garasi Landing Page',
    description: 'A landing page for Kopi Garasi built using the OrderOnline platform, featuring product showcases, ordering features, and a user-friendly layout to enhance the customer experience and drive online sales.',
    button: 'Preview',
    link: 'https://razendigital.orderonline.id/page/kopi-garasi',
  },
  {
    image: undangan,
    company: 'Client Project',
    project: 'React.js, JavaScript, CSS',
    title: 'Wedding Invitation Website',
    description: 'A personalized digital wedding invitation built with React.js. The website includes event details, RSVP features, and elegant design to provide a memorable and interactive guest experience.',
    button: 'Preview',
    link: 'https://invite-weeding.vercel.app/',
  },
  
  
  {
    image: wisata,
    company: 'College Project',
    project: 'HTML, CSS, Bootstrap',
    title: 'Jelajah Jogja PWA',
    description: 'A Progressive Web App (PWA) developed as a college project to promote tourism in Yogyakarta. Built using HTML, CSS, and Bootstrap with a responsive and offline-capable design to enhance accessibility and user engagement.',
    button: 'Preview',
    link: 'https://jelajahjogja.vercel.app/',
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
      <h2 className="text-center fw-bold mb-5">Frontend</h2>
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
