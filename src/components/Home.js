import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className = "container-fluid">
        <title>Logan Chu Personal Website</title>
          <nav className = "navbar navbar-collapse navbar-expand-lg bg-dark navbar-dark text-light fixed-top" style = {{opacity: 0.9, height: "4rem"}}>
            <div className = "navbar-brand mx-3"> Logan Chu </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-3">
                  <a className="nav-link" href="\about" style = {{fontSize: "18px"}}>About</a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link active" href="\projects" style = {{fontSize: "18px"}}>Projects</a>
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
        <h1>Welcome to My E-Portfolio</h1>
        <p>This is where I showcase my skills and projects.</p>
        <section className = ""></section>
        <Footer/>
    </div>
  );
};

export default Home;
