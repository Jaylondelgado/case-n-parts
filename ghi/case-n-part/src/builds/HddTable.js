import React from "react";

import HddList from "./HddsFetch";

function HddTable() {
  const hdds = HddList();

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Brand</th>
          <th>Capacity</th>
        </tr>
      </thead>
      <tbody>
        {hdds.map(hdd => {
          return (
            <>
              <tr key={hdd["id"]}>
                <td>{hdd["brand"]}</td>
                <td>{hdd["capacity"]}</td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
}

export default HddTable;
