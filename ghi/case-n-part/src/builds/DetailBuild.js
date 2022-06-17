import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useApiData from "../parts/ApiFetch";

function DetailBuild() {
  const { id } = useParams();

  const [build, setBuild] = useState();
  const basePath = "http://localhost:8000";

  useEffect(() => {
    const getBuildData = async () => {
      const buildResponse = await fetch(`${basePath}/api/build/${id}`);
      const buildData = await buildResponse.json();
      setBuild(buildData);
    };

    getBuildData();
  }, []);

  return (
    <div className="container-fluid my-5 pt-5">
      {build !== undefined && (
        <div className="row">
          <div className="col">
            <img src={build.picture} alt="pc case" />
          </div>
          <div className="col">
            <div className="row">
              <div className="d-flex flex-column col-8 col-sm-15 align-items-start">
                <h2>{build.Name}</h2>
                <h3>Built by: {build.username}</h3>
                <p>
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#motherboard-data"
                    aria-expanded="false"
                    aria-controls="motherboard-data"
                  >
                    Motherboard
                  </button>
                </p>
                <div className="collapse" id="motherboard-data">
                  <table className="table table-hover table-dark border">
                    <thead>
                      <tr>
                        <th>Brand</th>
                        <th>Socket Type</th>
                        <th>Max Memory</th>
                        <th>Max Memory Per Slot</th>
                        <th>Pci-e Slots</th>
                        <th>Memory Slots</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{build.mobo.brand}</td>
                        <td>{build.mobo.socket_type}</td>
                        <td>{build.mobo.max_memory}</td>
                        <td>{build.mobo.max_memory_per_slot}</td>
                        <td>{build.mobo.pcie_slots}</td>
                        <td>{build.mobo.memory_slots}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#cpu-data"
                    aria-expanded="false"
                    aria-controls="cpu-data"
                  >
                    CPU
                  </button>
                </p>
                <div className="collapse" id="cpu-data">
                  <table className="table table-hover table-dark border">
                    <thead>
                      <tr>
                        <th>Processor</th>
                        <th>Cores</th>
                        <th>Threads</th>
                        <th>Speed</th>
                        <th>Socket Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{build.cpu.processor}</td>
                        <td>{build.cpu.cores}</td>
                        <td>{build.cpu.threads}</td>
                        <td>{build.cpu.speed}</td>
                        <td>{build.cpu.socket_type}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#gpu-data"
                    aria-expanded="false"
                    aria-controls="gpu-data"
                  >
                    GPU
                  </button>
                </p>
                <div className="collapse" id="gpu-data">
                  <table className="table table-hover table-dark border col-md-auto">
                    <thead>
                      <tr>
                        <th>Manufacturer</th>
                        <th>Chipset</th>
                        <th>Core Clock Speed</th>
                        <th>Video Memory</th>
                        <th>Memory Type</th>
                        <th>Height</th>
                        <th>Length</th>
                        <th>Width</th>
                        <th>HDMI Ports</th>
                        <th>Display Ports</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{build.gpu.manufacturer}</td>
                        <td>{build.gpu.chipset}</td>
                        <td>{build.gpu.core_clock_speed}</td>
                        <td>{build.gpu.video_memory}GB</td>
                        <td>{build.gpu.memory_type}</td>
                        <td>{build.gpu.height}</td>
                        <td>{build.gpu.length}</td>
                        <td>{build.gpu.width}</td>
                        <td>{build.gpu.hdmi}</td>
                        <td>{build.gpu.display_port}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#hdd-data"
                    aria-expanded="false"
                    aria-controls="hdd-data"
                  >
                    HDD
                  </button>
                </p>
                <div className="collapse" id="hdd-data">
                  <table className="table table-hover table-dark border">
                    <thead>
                      <tr>
                        <th>Brand</th>
                        <th>Capacity</th>
                        <th>Interface</th>
                        <th>Cache</th>
                        <th>RPM</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{build.hdd.brand}</td>
                        <td>{build.hdd.capacity}</td>
                        <td>{build.hdd.interface}</td>
                        <td>{build.hdd.cache}</td>
                        <td>{build.hdd.rpm}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#ram-data"
                    aria-expanded="false"
                    aria-controls="ram-data"
                  >
                    Ram
                  </button>
                </p>
                <div className="collapse" id="ram-data">
                  <table className="table table-hover table-dark border">
                    <thead>
                      <tr>
                        <th>Brand</th>
                        <th>Memory Type</th>
                        <th>Memory Speed</th>
                        <th>Memory Channels</th>
                        <th>Pin Configuration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{build.ram.brand}</td>
                        <td>{build.ram.memory_type}</td>
                        <td>{build.ram.memory_speed}</td>
                        <td>{build.ram.memory_channels}</td>
                        <td>{build.ram.pin_configuration}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  <button
                    className="btn btn-secondary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#psu-data"
                    aria-expanded="false"
                    aria-controls="psu-data"
                  >
                    PSU
                  </button>
                </p>
                <div className="collapse" id="psu-data">
                  <table className="table table-hover table-dark border">
                    <thead>
                      <tr>
                        <th>Brand</th>
                        <th>Wattage</th>
                        <th>Atx Connector</th>
                        <th>Atx 12v Connector</th>
                        <th>Graphics Connector</th>
                        <th>Molex Connector</th>
                        <th>Sata Connector</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{build.psu.brand}</td>
                        <td>{build.psu.wattage}</td>
                        <td>{build.psu.atx_connector}</td>
                        <td>{build.psu.atx_12v_connector}</td>
                        <td>{build.psu.graphics_connector}</td>
                        <td>{build.psu.molex_connector}</td>
                        <td>{build.psu.sata_connector}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailBuild;
