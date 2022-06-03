import React, { useState, useEffect } from "react";

function PsuList() {
  const [psus, setPsu] = useState([]);

  useEffect(() => {
    const getPsuData = async () => {
      const psuResponse = await fetch("http://localhost:8000/api/psus/");
      const psuData = await psuResponse.json();
      setPsu(psuData.psus);
    };

    getPsuData();
  }, []);

  return (
    <select>
      <option value="">Select your PSU</option>
      {psus.map((psu) => {
        return (
          <option key={psu.id} value={psu.id}>
            {psu.brand} {psu.wattage} {psu.atx_connector} {psu.atx_12v_connector} {psu.graphics_connector} {psu.molex_connector} {psu.sata_connector} {psu.floppy_connector}
          </option>
        );
      })}
    </select>
  );
}

export default PsuList;