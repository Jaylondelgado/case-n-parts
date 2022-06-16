import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useApiData from "../parts/ApiFetch";

function DetailBuild() {
  const { id } = useParams();

  const [build, setBuild] = useState();
  const basePath = "http://localhost:8000";

  //   const build = useApiData(`${basePath}/api/build/${id}`, "build");
  useEffect(() => {
    const getBuildData = async () => {
      const buildResponse = await fetch(`${basePath}/api/build/${id}`);
      const buildData = await buildResponse.json();
      setBuild(buildData);
    };

    getBuildData();
  }, []);

  console.log(build);

  return (
    <div className='container-fluid my-5 pt-5'>
      <div className='row row-cols-4'>
        <img src={build.picture} alt='pc case' />
        <div className='row'>{build.Name}</div>
        <div className='row'>{build.size}</div>
        <div className='row'>{build.color}</div>
      </div>
    </div>
  );
}

export default DetailBuild;
