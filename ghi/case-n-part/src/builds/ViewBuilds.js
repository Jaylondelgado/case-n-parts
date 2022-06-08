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
      <div class="row">
        <div class="col">col</div>
        <div class="col">col</div>
        <div class="col">col</div>
        <div class="col">col</div>
      </div>
      <div class="row">
        <div class="col-8">col-8</div>
        <div class="col-4">col-4</div>
      </div>
    </>
  );
}
export default ViewBuildsList;
