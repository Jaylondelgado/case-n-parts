import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CpuList from "./CpuFetch";
import GpuList from "./GpuFetch";
import HddList from "./HddsFetch";
import MoboList from "./MoboFetch";
import PsuList from "./PsuFetch";
import RamList from "./RamFetch";
function CreateBuild() {
  const cpus = CpuList();
  const gpus = GpuList();
  const hdds = HddList();
  const psus = PsuList();
  const ram = RamList();
  const mobos = MoboList();

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
