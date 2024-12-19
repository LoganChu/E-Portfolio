import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

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
    <div>
  
      <h1>Projects</h1>
      <NavBar/>
      <h1> Hi</h1>
      {projects.map((project) => (
        <div className="card" style={{ width: "25rem" }}>
        <div className="card-body">
          <h5 className="card-title">{project.Title}</h5>
          <p className="card-text">{project.Description}</p>
          <a href="/" className="btn btn-primary">See More</a>
        </div>
      </div>
  
      ))}
    </div>
  );
};

export default Projects;
