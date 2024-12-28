import React from 'react';
import "./styles.css"

const Skills = () => {
  return (
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="d-flex">
          <div class="carousel-item-content">
            <img src="https://via.placeholder.com/300x200" class="d-block w-100" alt="Slide 1"/>
            <p>Slide 1</p>
          </div>
          <div class="carousel-item-content">
            <img src="https://via.placeholder.com/300x200" class="d-block w-100" alt="Slide 2"/>
            <p>Slide 2</p>
          </div>
          <div class="carousel-item-content">
            <img src="https://via.placeholder.com/300x200" class="d-block w-100" alt="Slide 3"/>
            <p>Slide 3</p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="d-flex">
          <div class="carousel-item-content">
            <img src="https://via.placeholder.com/300x200" class="d-block w-100" alt="Slide 4"/>
            <p>Slide 4</p>
          </div>
          <div class="carousel-item-content">
            <img src="https://via.placeholder.com/300x200" class="d-block w-100" alt="Slide 5"/>
            <p>Slide 5</p>
          </div>
          <div class="carousel-item-content">
            <img src="https://via.placeholder.com/300x200" class="d-block w-100" alt="Slide 6"/>
            <p>Slide 6</p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  );
};


export default Skills;