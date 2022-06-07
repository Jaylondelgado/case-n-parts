import React from "react";

import GpuList from "./GpuFetch";

function GpuTable() {
  const gpus = GpuList();

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Manufacturer</th>
          <th>Chipset</th>
        </tr>
      </thead>
      <tbody>
        {gpus.map(gpu => {
          return (
            <>
              <tr key={gpu["id"]}>
                <td>{gpu["manufacturer"]}</td>
                <td>{gpu["chipset"]}</td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
}

export default GpuTable;
