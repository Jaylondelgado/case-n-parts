import React, { useState, useEffect } from "react";

function MoboList() {
  const [mobos, setMobo] = useState([]);

  useEffect(() => {
    const getMoboData = async () => {
      const moboResponse = await fetch("http://localhost:8000/api/mobos/");
      const moboData = await moboResponse.json();
      setMobo(moboData.mobos);
    };

    getMoboData();
  }, []);

  return (
    <select>
      <option value="">Select your Motherboard</option>
      {mobos.map((mobo) => {
        return (
          <option key={mobo.id} value={mobo.id}>
            {mobo.socket_type} {mobo.max_memory} {mobo.max_memory_per_slot} {mobo.pcie_slots} {mobo.memory_slots}
          </option>
        );
      })}
    </select>
  );
}

export default MoboList;
