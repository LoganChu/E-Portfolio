import React from 'react';

const Home = () => {
  return (
    <div className = "container-fluid">
      <nav className = "navbar navbar-collapse navbar-expand-lg bg-dark navbar-dark text-light fixed-top" style = {{opacity: 0.85, height: "4rem"}}>
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
    <div className="container py-5">
      {/* Page Header */}
      <header className="text-center mb-4">
        <h1 className="display-4">About Me</h1>
        <p className="lead">
          Discover more about me, my background, and what drives me every day!
        </p>
      </header>

      {/* Profile Section */}
      <section className="row align-items-center mb-5">
        <div className="col-md-4 text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Your Profile"
            className="rounded-circle img-fluid shadow"
            style={{ width: "150px", height: "150px" }}
          />
        </div>
        <div className="col-md-8">
          <h2 className="mb-3">Hi, I'm Logan!</h2>
          <p>
            I'm a passionate [Your Profession, e.g., Web Developer] with a love
            for creating intuitive and dynamic user experiences. With a strong
            background in [Your Specializations, e.g., React and JavaScript],
            I've been building projects that solve real-world problems and
            inspire innovation.
          </p>
          <p>
            Outside of work, I enjoy playing basketball, playing piano, and spending time with family and friends. My journey is driven by a
            curiosity to learn and a desire to make a meaningful impact.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-5">
        <h3 className="text-center mb-4">Skills</h3>
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Frontend Development</h5>
                <p className="card-text">React, HTML, CSS, JavaScript</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Backend Development</h5>
                <p className="card-text">Node.js, Express, MongoDB</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Other Skills</h5>
                <p className="card-text">Git, API Integration, Responsive Design</p>
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
          projects.
        </p>
      </section>

      {/* Footer Section */}
      <footer className="text-center mt-5">
        <p className="text-muted">
          © 2024 Your Name. Built with ❤️ using React and Bootstrap.
        </p>
      </footer>
    </div>
    </div>
  );
};

export default Home;
