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

  return (
    <select>
      <option value="">Select your GPU</option>
      {gpus.map((gpu) => {
        return (
          <option key={gpu.id} value={gpu.id}>
            {gpu.manufacturer} {gpu.chipset} {gpu.core_clock_speed} {gpu.video_memory} {gpu.memory_type} {gpu.height} {gpu.length} {gpu.width} {gpu.hdmi} {gpu.display_port}
          </option>
        );
      })}
    </select>
  );
}

export default GpuList;