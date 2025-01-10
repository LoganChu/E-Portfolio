import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./styles.css";
import Footer from "./Footer";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className = "container-fluid background-grey">
          <nav className = "navbar navbar-collapse navbar-expand-lg navbar-grey navbar-dark text-light fixed-top" style = {{opacity: 0.9, height: "4rem"}}>
          <div className = "navbar-brand mx-3">  
            <img
            src="/images/Logo.png"
            alt="Your Profile"
            className="img-fluid shadow"
            style={{ width: "55px", height: "50px", background: "transparent"}}
          />              
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-3">
                  <a className="nav-link active" href="\about" style = {{fontSize: "18px"}}>About</a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link" href="\projects" style = {{fontSize: "18px"}}>Projects</a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link" href = "\contact" style = {{fontSize: "18px"}}>Contact</a>
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
        <h1 className="display-4 m-4">About Me</h1>
        <p className="lead">
          Discover more about me, my background, and what drives me every day!
        </p>
      </header>

      {/* Profile Section */}
      <section className="row align-items-center mb-5">
        <div className="col-md-4 text-center">
          <img
            src="/images/Profile.jpg"
            alt="Your Profile"
            className="rounded-circle img-fluid shadow"
            style={{ width: "250px", height: "250px" }}
          />
        </div>
        <div className="col-md-8">
          <h2 className="mb-3">Hi, I'm Logan!</h2>
          <p>
            I'm a passionate software and hardware engineer with a love
            for building projects that solve real-world problems and
            inspire innovation.
          </p>
          <p>
            Outside of work, I enjoy playing basketball, playing piano, and spending time with family and friends. My journey is driven by a
            curiosity to learn and a desire to make a meaningful impact.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <Skills/>
      <section className="mb-5">
        <h3 className="text-center mb-4">Skills</h3>
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Frontend Development</h5>
                <p className="card-text">React, HTML, CSS, JavaScript, Bootstrap</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Backend Development</h5>
                <p className="card-text">Node.js, Express.js</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Other Skills</h5>
                <p className="card-text">Git, Jest, Strapi, AI Integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section>
        <h3 className="text-center mb-4">Interests</h3>
        <p className="text-center">
          Beyond coding, I enjoy exploring nature, experimenting with
          photography, and diving into the latest tech trends. I also love
          connecting with like-minded individuals and contributing to open-source
          projects. Insert Downloadable Resume or CV here. 
        </p>
      </section>
      <Footer/>
    </div>
    </div>
  );
};

export default Home;
