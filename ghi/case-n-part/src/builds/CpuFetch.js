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

  return (
    <select>
      <option value="">Select a CPU</option>
      {cpus.map((cpu) => {
        return (
          <option key={cpu.id} value={cpu.id}>
            {cpu.processor} {cpu.cores} {cpu.threads} {cpu.speed} {cpu.socket_type}
          </option>
        );
      })}
    </select>
  );
}

export default CpuList;
