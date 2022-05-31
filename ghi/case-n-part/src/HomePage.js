import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

    slidesToShow: 3,
    slidesToScroll: 3

  };
  

  return (
    <>
      <h1>Builds of the Month</h1>
      <h1>Our Cases</h1>
      
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default HomePage;
