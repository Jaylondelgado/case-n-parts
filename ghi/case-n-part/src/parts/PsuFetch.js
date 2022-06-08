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

  return psus;
}

export default PsuList;
