import React, { useState, useEffect } from "react";

function CpuList() {
  const [cpus, setCpu] = useState([]);

  useEffect(() => {
    const getCpuData = async () => {
      const cpuResponse = await fetch("http://localhost:8000/api/cpus/");
      const cpuData = await cpuResponse.json();
      setCpu(cpuData.cpus);
    };

    getCpuData();
  }, []);

  return cpus;
}

export default CpuList;
