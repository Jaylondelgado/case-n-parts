import React, { useState, useEffect } from "react";

function GpuList() {
  const [gpus, setGpu] = useState([]);

  useEffect(() => {
    const getGpuData = async () => {
      const gpuResponse = await fetch("http://localhost:8000/api/gpus/");
      const gpuData = await gpuResponse.json();
      setGpu(gpuData.gpus);
    };

    getGpuData();
  }, []);

  return gpus;
}

export default GpuList;
