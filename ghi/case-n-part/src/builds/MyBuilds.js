import React, { useState, useEffect, useContext, cloneElement } from "react";


function MyBuilds() {
  const [builds, setBuild] = useState([]);

  useEffect(() => {
    const getBuildData = async () => {
      const buildResponse = await fetch(`${process.env.REACT_APP_ACCOUNTS_HOST}/api/builds/mine`, {
        credentials: 'include',
      });
      const buildData = await buildResponse.json();
      console.log(buildData)
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
          <div class="col-sm m-3">
            <div className="card h-100 border-light bg-transparent" key={build.id}>
              <img src={build.picture} className="card-img-top p-3" alt="..."/>
              <div className="card-body">
                <h5 className="card-title text-primary">{build.Name}</h5>
                <p className="card-text text-primary">{build.gpu.chipset}</p>
                <a href="#" className="btn btn-outline-primary">Build Detail</a>
              </div>
            </div> 
          </div>
        );
      })}
    </div>
    </div>
  );
}
export default MyBuilds;
