import React from "react";
import "./index.css";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <h1>Top 3 Builds of the Month</h1>
      <div className='container d-flex justify-content-center'>
        <div className='row'>
          <div className='col-sm'>
            <div className='card'>
              <h5 className='card-title'>Chad's Build</h5>
            </div>
          </div>
          <div className='col-sm'>
            <div className='card'>
              <h5 className='card-title'>Chad's Build</h5>
            </div>
          </div>
          <div className='col-sm'>
            <div className='card'>
              <h5 className='card-title'>Chad's Build</h5>
            </div>
          </div>
        </div>
      </div>
      <div className='our-cases'>
        <h1>Our Cases</h1>
        <div
          id='case-carousel'
          className='carousel slide pb-5'
          data-bs-ride='carousel'
          data-bs-interval='false'
        >
          <div className='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#case-carousel'
              data-bs-slide-to='0'
              class='active'
              aria-current='true'
              aria-label='Slide 1'
            ></button>
            <button
              type='button'
              data-bs-target='#case-carousel'
              data-bs-slide-to='1'
              aria-label='Slide 2'
            ></button>
            <button
              type='button'
              data-bs-target='#case-carousel'
              data-bs-slide-to='2'
              aria-label='Slide 3'
            ></button>
          </div>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img
                src='https://i.ibb.co/pKn8MJ7/black.png'
                alt='an case'
                className='img-fluid'
              />
            </div>
            <div className='carousel-item'>
              <img
                src='https://c1.neweggimages.com/ProductImage/AFSTS2112102mvyB.jpg'
                alt='an case2'
                className='img-fluid'
              />
            </div>
            <div className='carousel-item'>
              <img
                src='https://c1.neweggimages.com/ProductImage/11-173-041-V01.jpg'
                alt='an case3'
                className='img-fluid'
              />
            </div>
          </div>
          <button
            className='carousel-control-prev w-50'
            type='button'
            data-bs-target='#case-carousel'
            data-bs-slide='prev'
          >
            <span class='carousel-control-prev-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Previous</span>
          </button>
          <button
            class='carousel-control-next w-50'
            type='button'
            data-bs-target='#case-carousel'
            data-bs-slide='next'
          >
            <span class='carousel-control-next-icon' aria-hidden='true'></span>
            <span class='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
