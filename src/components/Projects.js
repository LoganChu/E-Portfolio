import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:1337/Project');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects', error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="container mt-4">
      <h1>My Portfolio</h1>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={`http://localhost:1337${project.image.url}`}
                className="card-img-top"
                alt={project.title}
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
