import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MyBuilds(props) {
  const [builds, setBuild] = useState([]);

  useEffect(() => {
    const getBuildData = async () => {
      const buildResponse = await fetch(
        `${process.env.REACT_APP_ACCOUNTS_HOST}/api/builds/mine`,
        {
          credentials: "include",
        }
      );
      const buildData = await buildResponse.json();
      setBuild(buildData.builds);
    };

    getBuildData();
  }, []);

  const deleteBuild = async (id) => {
    await fetch(`${process.env.REACT_APP_ACCOUNTS_HOST}/api/build/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    window.location.reload();
  };

  return (
    <div className="container justify-content-center pt-5 my-5">
      {builds.length > 0 && (
        <div className="row">
          {builds.map((build) => {
            return (
              <div key={build.id} className="col-sm m-3">
                <div className="card h-100 border-light bg-transparent">
                  <img
                    src={build.picture}
                    className="card-img-top p-3"
                    alt="..."
                  />
                  <div className="card-body">
                    {console.log(build.name)}
                    <h5 className="card-title text-info">{build.Name}</h5>
                    <p className="card-text text-primary">
                      {build.gpu.chipset}
                    </p>
                    <Link
                      to={`/builds/detailbuild/${build.id}`}
                      className="btn btn-outline-primary"
                    >
                      Build Detail
                    </Link>
                    <div style={{ color: "lightblue" }} className="pt-3">
                      <i
                        type="button"
                        onClick={() => {
                          deleteBuild(build.id);
                        }}
                        className="fa fa-trash fa-xl"
                        aria-hidden="true"
                      ></i>
                    </div>
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
export default MyBuilds;
