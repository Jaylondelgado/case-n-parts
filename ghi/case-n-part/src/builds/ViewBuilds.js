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
    <>
      <div className='container-fluid'>
        <div className='row justify-content-md-center'>
         <div className="row">
            <div className="col-fluid">col</div>
          </div>
          <div className="container d-flex justify-content-center">
          <div className="row">
            {/* <div className="col-8">col-8</div>
            <div className="col-4">col-4</div> */}
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ViewBuildsList;
