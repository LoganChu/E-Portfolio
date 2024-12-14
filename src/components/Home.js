import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Row className="mt-5">
      <Col>
          <h1>Welcome to My E-Portfolio</h1>
          <p>This is where I showcase my skills and projects.</p>
          <Button variant="primary" href="/projects">View Projects</Button>
          <Button variant="primary" href="/about">View About</Button>
      </Col>
    </Row>
  );
};

export default Home;
