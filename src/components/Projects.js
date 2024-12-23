import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/projects?populate=*');
        setProjects(response.data.data);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className = "container-fluid">
      <nav className = "navbar navbar-collapse navbar-expand-lg bg-dark navbar-dark text-light fixed-top" style = {{opacity: 0.85, height: "4rem"}}>
        <div className = "navbar-brand mx-3"> Logan Chu </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-3">
              <a className="nav-link" href="\about">About</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link active" href="\projects">Projects</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href = "\contact">Contact</a>
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
      <header
      className="text-center text-white py-5"
      style={{
        backgroundImage: "url('https://via.placeholder.com/1920x400')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "15rem"
      }}
    >
      <div
        className="bg-dark bg-opacity-50 p-3 rounded"
        style={{ display: "inline-block" }}
      >
        <h1 className="display-4 fw-bold" style={{height: "5rem"}}>My Projects</h1>
        <p className="lead">
          Explore the projects I’ve worked on, showcasing my skills and
          creativity.
        </p>
      </div>
    </header>
      <div className = "row mx-5">
      {projects.map((project) => ( 
        <div className = "col-3">
          <div className="card my-3" style={{ width: "20rem" }}>
            <img src={"http://localhost:1337"+project.Image.formats.large.url} class="card-img-top" style={{ height: "15rem" }} alt="Project"/>
            <div className="card-body" style={{height: "15rem", overflow: "hidden"}}>
              <h5 className="card-title heading-style fw-bold" style={{height: "3rem", overflow: "hidden"}}>{project.Title}</h5>
              <p className="card-text text-style"  style={{height: "6rem", overflow: "hidden"}}>{project.Description}</p>
              <a href={"https://github.com/LoganChu/"+project.Title.split(" ").join("")} className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>  
      ))}
    </div>
  </div>
  );
};

export default Projects;
