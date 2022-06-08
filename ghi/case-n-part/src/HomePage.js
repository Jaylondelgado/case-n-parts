import React from "react";
import Slider from "react-slick";
import "./index.css";
import "./HomePage.css";

function HomePage() {
  //   const [appointments, setAppointments] = useState([]);

  //   const fetchAppointmentData = async () => {
  //     const responseAppointment = await fetch(
  //       "http://localhost:8080/api/appointments/"
  //     );
  //     const appointmentData = await responseAppointment.json();
  //     const filteredAppointmentData = appointmentData.appointments.filter(
  //       (appointment) => appointment.finished === false
  //     );
  //     setAppointments(filteredAppointmentData);
  //   };

  //   useEffect(() => {
  //     fetchAppointmentData();
  //   }, []);

  //   const deleteAppointment = async (id) => {
  //     await fetch(`http://localhost:8080/api/appointments/${id}/`, {
  //       method: "DELETE",
  //       headers: { "Content-Type": "application/json" },
  //     });
  //   };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

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

      <h1>Our Cases</h1>
      <div
        id='case-carousel'
        className='carousel slide'
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
              src='https://c1.neweggimages.com/ProductImage/11-129-268-36.jpg'
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
      {/* <Slider {...settings}>
          <div>
            <img
              src='https://c1.neweggimages.com/ProductImage/11-129-268-36.jpg'
              alt='an case'
            />
          </div>
          <div>
            <img
              src='https://c1.neweggimages.com/ProductImage/AFSTS2112102mvyB.jpg'
              alt='an case2'
            />
          </div>
          <div>
            <img
              src='https://c1.neweggimages.com/ProductImage/11-173-041-V01.jpg'
              alt='an case3'
            />
          </div>
          <div>
            <img
              src='https://c1.neweggimages.com/ProductImage/11-129-268-36.jpg'
              alt='an case4'
            />
          </div>
        </Slider> */}
    </>
  );
}

export default HomePage;
