import React, { setState, useState } from "react";

import GpuList from "./GpuFetch";

function GpuTable() {
  const gpus = GpuList();
  const [choice, setChoice] = useState();
  const [state, setState] = useState({
    manufacturer: "",
    chipset: "",
  });

  const handleClick = (e) => {
    const selected = e;
    console.log("poop", selected);
    setChoice(selected);
  };
  console.log("choice: ", choice);

  // const handleChange = (event) => {
  //   const value = event.target.value;
  //   setState({
  //     ...state,
  //     [event.target.name]: value,
  //   });
  // };

  return (
    <table className="table table-hover table-dark">
      <thead>
        <tr>
          <th>Manufacturer</th>
          <th>Chipset</th>
        </tr>
      </thead>
      <tbody>
        {gpus.map((gpu) => {
          return (
            <>
              {/* <select
                onChange={handleChange}
                value={choice}
                required
                name="choice"
                id="choice"
              ></select> */}

              <tr key={gpu["id"]} onClick={() => handleClick(gpu)}>
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
