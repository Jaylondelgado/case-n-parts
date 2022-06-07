import React, { useState, useEffect } from "react";

function HddList() {
  const [hdds, setHdd] = useState([]);

  useEffect(() => {
    const getHddData = async () => {
      const hddResponse = await fetch("http://localhost:8000/api/hdds/");
      const hddData = await hddResponse.json();
      setHdd(hddData.hdds);
    };

    getHddData();
  }, []);

  return hdds;
}

export default HddList;
