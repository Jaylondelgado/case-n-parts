import React, { useState, useEffect } from "react";

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
  console.log(builds)

  return (
    <select>
      <option value="">Select a Build</option>
      {builds.map((build) => {
        return (
          <option key={build.id} value={build.id}>
            {build.Name} {build.moboid} {build.cpuid} {build.psuid} {build.Private}
          </option>
        );
      })}
    </select>
  );
}

export default BuildList;