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
            <a className="nav-link active" href = "\contact">Contact</a>
            </li>
        </ul>
        </div>
        </nav>
    <div className="container py-5">
      {/* Page Header */}
      <header className="text-center mb-4">
        <h1 className="display-4">Contact Me</h1>
        <p className="lead">
          Feel free to reach out for collaborations, inquiries, or just to say hello!
        </p>
      </header>

      {/* Contact Form Section */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <h4 className="card-title text-center mb-4">Get in Touch</h4>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-block">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

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
