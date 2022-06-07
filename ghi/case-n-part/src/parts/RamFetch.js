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

  return rams;
}

export default RamList;
