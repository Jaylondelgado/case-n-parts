import React from "react";

import RamList from "./RamFetch";

function RamTable() {
  const rams = RamList();

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Brand</th>
          <th>Memory Speed</th>
        </tr>
      </thead>
      <tbody>
        {rams.map(ram => {
          return (
            <>
              <tr key={ram["id"]}>
                <td>{ram["brand"]}</td>
                <td>{ram["memory_speed"]}</td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
}

export default RamTable;
