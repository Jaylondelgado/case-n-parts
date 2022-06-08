import React, { useState, useEffect } from "react";

function ViewBuildsList() {
  const [showBuilds, SetViewBuilds] = useState([]);

  useEffect(() => {
    const getCpuData = async () => {
      const viewBuildResponse = await fetch(
        "http://localhost:8000/api/caseimage/"
      );
      const caseData = await viewBuildResponse.json();
      SetViewBuilds(caseData.caseimages);
    };
    getCpuData();
  }, []);

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://live.staticflickr.com/65535/52130464139_8c2cbf315a_w.jpg"
            className="d-block w-25 img-fluid"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://live.staticflickr.com/65535/52130228011_42181ea446.jpg"
            className="d-block w-25 img-fluid"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://live.staticflickr.com/65535/52130229211_ff64ea0d17.jpg"
            className="d-block w-25 img-fluid"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default ViewBuildsList;
