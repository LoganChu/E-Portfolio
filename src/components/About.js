import React from 'react';

const Home = () => {
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
              <a className="nav-link" href="\projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href = "\contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <h1>Hello My name is Logan and I am a Freshman at Duke University</h1>
    </div>
  );
};

export default Home;
