import React from "react";

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

  //   const updateAppointment = async (id) => {
  //     const appointmentUrl = `http://localhost:8080/api/appointments/${id}/`;
  //     const fetchConfig = {
  //       method: "PUT",
  //       body: JSON.stringify({
  //         finished: true,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };
  //     const response = await fetch(appointmentUrl, fetchConfig);

  //     if (response.ok) {
  //       await fetchAppointmentData();
  //     }
  //   };

  //   const handleClick = (id) => {
  //     updateAppointment(id);
  //   };

  return (
    <>
      <h1>Custom Builds</h1>
      <h1>Featured Builds</h1>
    </>
  );
}

export default HomePage;
