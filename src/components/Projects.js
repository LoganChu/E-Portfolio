import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      <nav className = "navbar navbar-collapse navbar-expand-lg bg-dark navbar-dark text-light opacity-100">
        <div className = "navbar-brand"> Navbar Name </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="\about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="\projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href = "\contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <h1 className = "m-3">Projects</h1>
      <div className = "row mx-5">
      {projects.map((project) => ( 
        <div className = "col-3">
          <div className="card my-3" style={{ width: "20rem" }}>
            <img src={"http://localhost:1337"+project.Image.formats.large.url} class="card-img-top" style={{ height: "12rem" }} alt="Project"/>
            <div className="card-body">
              <h5 className="card-title">{project.Title}</h5>
              <p className="card-text">{project.Description}</p>
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
