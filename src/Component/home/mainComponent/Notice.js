import React from 'react'
import cv1 from '../../assests/cv1.jpg';
import cv2 from '../../assests/cv2.jpg';
import cv3 from '../../assests/cv3.jpg';
import './Notice.css'
export default function Notice() {
    return (
     <div className='mm'>  
        <div id="carouselExampleDark"  className="carousel carousel-dark slide " data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"  className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div  className="mmDiv carousel-inner">
          <div  className="carousel-item active" data-bs-interval="10000">
            <img src={cv1}  className="mmImg d-block w-100" alt="..."/>
            <div  className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div  className="mmDiv carousel-item" data-bs-interval="2000">
            <img src={cv2}  className="mmImg d-block w-100" alt="..."/>
            <div  className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div  className="mmDiv carousel-item ">
            <img src={cv3} className="mmImg d-block w-100" alt="..."/>
            <div  className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button  className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span  className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span  className="visually-hidden">Previous</span>
        </button>
        <button  className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span  className="carousel-control-next-icon" aria-hidden="true"></span>
          <span  className="visually-hidden">Next</span>
        </button>
      </div>
      </div> 
    )
}
