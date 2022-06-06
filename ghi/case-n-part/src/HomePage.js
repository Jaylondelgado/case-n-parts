import React from "react";
import Slider from "react-slick";
import "./index.css";
import "slick-carousel/slick/slick.css";

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
      <h1>Builds of the Month</h1>
      <h1>Our Cases</h1>

      <div className="container">
        <Slider {...settings}>
          <div>
            <img
              src="https://c1.neweggimages.com/ProductImage/11-129-268-36.jpg"
              alt="an case"
            />
          </div>
          <div>
            <img
              src="https://c1.neweggimages.com/ProductImage/AFSTS2112102mvyB.jpg"
              alt="an case2"
            />
          </div>
          <div>
            <img
              src="https://c1.neweggimages.com/ProductImage/11-173-041-V01.jpg"
              alt="an case3"
            />
          </div>
          <div>
            <img
              src="https://c1.neweggimages.com/ProductImage/11-129-268-36.jpg"
              alt="an case4"
            />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default HomePage;
