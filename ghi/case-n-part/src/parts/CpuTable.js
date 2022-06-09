import React from "react";

import CpuList from "./CpuFetch";

function CpuTable() {
  const cpus = CpuList();

  return (
    <table className="table table-hover table-dark">
      <thead>
        <tr>
          <th>Processor</th>
          <th>Cores</th>
          <th>Threads</th>
          <th>Speed</th>
        </tr>
      </thead>
      <tbody>
        {cpus.map((cpu) => {
          return (
            <>
              <tr key={cpu["id"]}>
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

export default CpuTable;
