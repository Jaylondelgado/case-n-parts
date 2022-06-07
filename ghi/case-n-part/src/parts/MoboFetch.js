import React from "react";
import { useState, useEffect } from "react";

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

  return mobos;
}

export default MoboList;
