import React from "react";

import PsuList from "./PsuFetch";

function PsuTable() {
  const psus = PsuList();

  return (
    <table className="table table-hover table-dark">
      <thead>
        <tr>
          <th>Brand</th>
          <th>Wattage</th>
        </tr>
      </thead>
      <tbody>
        {psus.map((psu) => {
          return (
            <>
              <tr key={psu["id"]}>
                <td>{psu["brand"]}</td>
                <td>{psu["wattage"]}</td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
}

export default PsuTable;
