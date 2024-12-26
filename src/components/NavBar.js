import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const NavBar = () =>{
    <nav className = "navbar navbar-collapse navbar-expand-lg bg-dark navbar-dark text-light fixed-top" style = {{opacity: 0.9, height: "4rem"}}>
            <div className = "navbar-brand mx-3"> Logan Chu </div>
            <img src = "/images/Logo.png"> </img>
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
}

export default NavBar;