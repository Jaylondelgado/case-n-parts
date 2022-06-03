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

  // const hd = hdds.map((hdd) => {
  //   return (
  //     <option key={hdd.id} value={hdd.id}>
  //       {hdd.capacity} {hdd.interface} {hdd.cache} {hdd.rpm}
  //     </option>
  //   );
  // });

  return (
    <select>
      <option value="">Select a HardDrive</option>
      {hdds.map((hdd) => {
        return (
          <option key={hdd.id} value={hdd.id}>
            {hdd.brand} {hdd.capacity} {hdd.interface} {hdd.cache} {hdd.rpm}
          </option>
        );
      })}
    </select>
  );
}

export default HddList;
