import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./styles.css";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className = "container-fluid custom-grey">
          <nav className = "navbar navbar-collapse navbar-expand-lg bg-dark navbar-dark text-light fixed-top" style = {{opacity: 0.9, height: "4rem"}}>
            <div className = "navbar-brand mx-3"> Logan Chu </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-3">
                  <a className="nav-link" href="\about" style = {{fontSize: "18px"}}>About</a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link" href="\projects" style = {{fontSize: "18px"}}>Projects</a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link active" href = "\contact" style = {{fontSize: "18px"}}>Contact</a>
                </li>
                <li className = "nav-item mx-3">
                  <a
                    href="https://github.com/LoganChu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-3"
                  >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>  
                </li>
                <li className = "nav-item mx-3">
                  <a
                    href="https://www.linkedin.com/in/LoganChu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-3"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
    <div className="container py-5">
      {/* Page Header */}
      <header className="text-center mb-4">
        <h1 className="display-4">Contact Me</h1>
        <p className="lead">
          Feel free to reach out for collaborations, inquiries, or just to say hello!
        </p>
      </header>

      {/* Contact Form Section */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <h4 className="card-title text-center mb-4">Get in Touch</h4>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-block">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </div>
  );
};

export default Home;
