import React, { useState, useEffect } from "react";

function RamList() {
  const [rams, setRam] = useState([]);

  useEffect(() => {
    const getRamData = async () => {
      const ramResponse = await fetch("http://localhost:8000/api/rams/");
      const ramData = await ramResponse.json();
      setRam(ramData.rams);
    };

    getRamData();
  }, []);

  return (
    <select>
      <option value="">Select your RAM</option>
      {rams.map((ram) => {
        return (
          <option key={ram.id} value={ram.id}>
            {ram.memory_type} {ram.memory_speed} {ram.memory_channels} {ram.pin_configuration}
          </option>
        );
      })}
    </select>
  );
}

export default RamList;
