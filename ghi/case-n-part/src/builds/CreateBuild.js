import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CreateBuild() {
  const [cpus, setCpus] = useState([]);
  const [state, setState] = useState({});

  useEffect(() => {
    const getCpuData = async () => {
      const cpuResponse = await fetch("http://localhost:8000/api/cpus/");
      const cpuData = await cpuResponse.json();
      setCpus(cpuData.cpus);
    };

    getCpuData();
  }, []);

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Processor</th>
          <th>Cores</th>
          <th>Threads</th>
          <th>Speed</th>
        </tr>
      </thead>
      <tbody>
        {cpus.map(cpu => {
          return (
            <>
              <tr>
                <td>{cpu["processor"]}</td>
                <td>{cpu["cores"]}</td>
                <td>{cpu["threads"]}</td>
                <td>{cpu["speed"]}</td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
}

export default CreateBuild;
