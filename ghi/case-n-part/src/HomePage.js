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

  function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }

  return (
    <>
      <h1>Builds of the Month</h1>
      <h1>Our Cases</h1>
      <div>{SimpleSlider}</div>
    </>
  );
}

export default HomePage;
