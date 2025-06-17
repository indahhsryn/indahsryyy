import 'bootstrap/dist/css/bootstrap.min.css';
import Bigdata from "../assets/bigdata.png";
import Machine from "../assets/machinelearning.jpeg";









const projects = [
    {
        image: Bigdata,
        company: 'Campus Project',
        project: 'Python, Google Colab',
        title: 'Big Data Analysis',
        description: 'Conducted data analysis and visualization tasks using Python for Big Data coursework, focusing on classification, clustering, and regression techniques.',
        button: 'Preview',
        link: 'https://drive.google.com/drive/folders/1W4GlMzoGin3IA9H1ySv4gIfk97LzGU71?usp=sharing',
      },
      {
        image: Machine,
        company: 'Campus Project',
        project: 'Python, Google Colab',
        title: 'Machine Learning Project',
        description: 'Implemented machine learning models such as KNN, SVM, and Logistic Regression using Python in Google Colab for campus assignments.',
        button: 'Preview',
        link: 'https://drive.google.com/drive/folders/1oaEjyohV9m-I8n9KzxNuPkzG09UaPPQq?usp=sharing',
      }
      
      
      
   
      
      
  
];

const FrontendProjects: React.FC = () => {
    return (
      <div
        className="container-fluid px-0 py-5"
        style={{
          background: 'linear-gradient(to right, #ffffff 0%, #e6f0fa 60%, #add8e6 100%)',
          overflowX: 'hidden',
          fontFamily: "'Poppins', sans-serif", // tambahkan font menarik
        }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ fontSize: '2.5rem', color: '#0d3b66' }}>
            Python Developer
          </h2>
          <p
            className="mx-auto mt-3"
            style={{
              maxWidth: '800px',
              fontSize: '1.1rem',
              lineHeight: '1.7',
              color: '#333',
            }}
          >
            Developed campus-based Python projects involving data clustering, classification, and regression using various machine learning models such as KNN, SVM, and Logistic Regression, implemented within Google Colab and Bing datasets.
          </p>
        </div>
  
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
