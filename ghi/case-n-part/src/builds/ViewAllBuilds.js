import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

  return (
    <div className='container justify-content-center pt-5 my-5'>
      {builds.length > 0 && (
        <div className='row'>
          {builds.map(build => {
            return (
              <div className='col-sm m-3' key={build.id}>
                <div className='card h-100 border-light bg-transparent'>
                  <img
                    src={build.picture}
                    className='card-img-top p-3'
                    alt='...'
                  />
                  <div className='card-body'>
                    <h5 className='card-title text-info'>{build.Name}</h5>
                    <p className='card-text text-primary'>{build.userid}</p>
                    <Link
                      to={`/builds/detailbuild/${build.id}`}
                      className='btn btn-outline-primary'
                    >
                      Build Detail
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {builds.length === 0 && <h2>No builds available</h2>}
    </div>
  );
}

export default BuildList;
