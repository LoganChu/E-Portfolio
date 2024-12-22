import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./styles.css";
import Footer from "./Footer";
import {useState} from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log(response);

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  return (
    <div className = "container-fluid background-grey">
          <nav className = "navbar navbar-collapse navbar-expand-lg navbar-grey navbar-dark text-light fixed-top" style = {{opacity: 0.9, height: "4rem"}}>
            <div className = "navbar-brand mx-3"> Logan Chu </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-3">
                  <a className="nav-link" href="\about" style = {{fontSize: "18px"}}>About</a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link" href="\projects" style = {{fontSize: "18px"}}>Projects</a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link active" href = "\contact" style = {{fontSize: "18px"}}>Contact</a>
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
    <div className="container py-5">
      <header className="text-center m-4">
        <h1 className="display-4">Contact Me</h1>
        <p className="lead">
          Feel free to reach out for collaborations, inquiries, or just to say hello!
        </p>
      </header>
      <div className="row justify-content-center my-5">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <h4 className="card-title text-center mb-4">Get in Touch</h4>
              <form onSubmit = {handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    onChange = {handleChange}
                    value = {formData.name}
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
                    value = {formData.email}
                    onChange = {handleChange}
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
                    value = {formData.message}
                    onChange = {handleChange}
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
      <Footer/>
    </div>
    </div>
  );
};

export default Contact;
