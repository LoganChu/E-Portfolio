import React from 'react';


const Home = () => {
  return (
    <div className = "container-fluid">
          <title>Logan Chu Personal Website</title>
        <nav className = "navbar navbar-collapse navbar-expand-lg bg-dark navbar-dark text-light opacity-100">
          <div className = "navbar-brand"> Navbar Name </div>
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="\about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="\projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href = "\contact">Contact</a>
        </li>
      </ul>
    </div>
        </nav>
          <h1>Welcome to My E-Portfolio</h1>
          <p>This is where I showcase my skills and projects.</p>
      <section className = ""></section>

    </div>
  );
};

export default Home;
