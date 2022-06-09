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
      <div className="row">
        <div className="col">col</div>
        <div className="col">col</div>
        <div className="col">col</div>
        <div className="col">col</div>
      </div>
      <div className="row">
        <div className="col-8">col-8</div>
        <div className="col-4">col-4</div>
      </div>
    </>
  );
}
export default ViewBuildsList;
