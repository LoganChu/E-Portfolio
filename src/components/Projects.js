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
  
      <h1 className = "m-4">Projects</h1>
      <NavBar/>
      <div className = "row mx-3">
      {projects.map((project) => ( 
          <div className = "col-3 mx-5">
        <div className="card m-3" style={{ width: "25rem" }}>
        <img src={"http://localhost:1337"+project.Image.formats.large.url} class="card-img-top" alt="Project"/>
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
