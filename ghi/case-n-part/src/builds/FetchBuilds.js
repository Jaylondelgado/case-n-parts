import React, { useState, useEffect } from "react";
import "./FetchBuilds.css";

function BuildList() {
  const [builds, setBuild] = useState([]);

  useEffect(() => {
    const getBuildData = async () => {
      const buildResponse = await fetch("http://localhost:8000/api/builds/");
      const buildData = await buildResponse.json();
      setBuild(buildData.builds);
    };

    getBuildData();
  }, []);
  console.log(builds);

  return (
    <div class="container justify-content-center pt-5 my-5">
      <div class="row">
        {builds.map((build) => {
          return (
            // <div class="col-lg-6 mb-4 justify-content-md-center">
            <div className="col-sm m-3">
              <div
                className="card h-100 border-light bg-transparent"
                key={build.id}
              >
                <img
                  src={build.picture}
                  className="card-img-top p-3"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-primary">{build.Name}</h5>
                  <p className="card-text text-primary">{build.gpu.chipset}</p>
                  <a href="#" className="btn btn-outline-primary">
                    Build Detail
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BuildList;
