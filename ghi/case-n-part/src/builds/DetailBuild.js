import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useApiData from "../parts/ApiFetch";

function DetailBuild({ token }) {
  const { id } = useParams();

  const classesIfBuildOwner = "btn btn-outline-primary mb-2";
  const classIfNotBuildOwner = "d-none";

  const [build, setBuild] = useState();
  const basePath = "http://localhost:8000";

  useEffect(() => {
    const getBuildData = async () => {
      const buildResponse = await fetch(
        `${process.env.REACT_APP_ACCOUNTS_HOST}/api/build/${id}`,
        {
          credentials: "include",
        }
      );
      console.log(buildResponse);
      const buildData = await buildResponse.json();
      setBuild(buildData);
    };

    getBuildData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="d-grid gap-4 my-5 p-5">
      {build !== undefined && (
        <>
          <div className="row justify-content-center">
            <div className="col-sm-4 order-sm-1 order-2">
              <div className="card bg-dark border border-primary w-5">
                <h4 className="card-title text-white p-3">Motherboard</h4>
                <div className="d-flex flex-column card-text text-white px-4">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="d-flex flex-column align-items-center w-100 mb-3">
                        <p className="text-primary p-0 m-0">Brand</p>
                        <hr className="w-100 p-0 m-1"></hr>
                        <div className="card-text">{build.mobo.brand}</div>
                      </div>
                      <div className="d-flex flex-column align-items-center w-100 mb-3">
                        <p className="text-primary p-0 m-0">Socket Type</p>
                        <hr className="w-100 p-0 m-1"></hr>
                        <div className="card-text">
                          {build.mobo.socket_type}
                        </div>
                      </div>
                      <div className="d-flex flex-column align-items-center w-100 mb-3">
                        <p className="text-primary p-0 m-0">Max Memory</p>
                        <hr className="w-100 p-0 m-1"></hr>
                        <div className="card-text">{build.mobo.max_memory}</div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex flex-column align-items-center w-100 mb-3">
                        <p className="text-primary text-nowrap p-0 m-0">
                          Max Memory Per Slot
                        </p>
                        <hr className="w-100 p-0 m-1"></hr>
                        <div className="card-text">{build.mobo.max_memory}</div>
                      </div>
                      <div className="d-flex flex-column align-items-center w-100 mb-3">
                        <p className="text-primary p-0 m-0">Pci-e Slots</p>
                        <hr className="w-100 p-0 m-1"></hr>
                        <div className="card-text">{build.mobo.pcie_slots}</div>
                      </div>
                      <div className="d-flex flex-column align-items-center w-100 mb-3">
                        <p className="text-primary p-0 m-0">Memory Slots</p>
                        <hr className="w-100 p-0 m-1"></hr>
                        <div className="card-text">
                          {build.mobo.memory_slots}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 order-sm-2 order-1">
              <div className="card bg-dark border border-primary w-5">
                <h5 className="card-title text-white p-3">{build.Name}</h5>
                <div className="d-flex flex-column card-text text-white px-4">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="d-flex flex-column align-items-center w-100 mb-3">
                        <img
                          className="img-fluid"
                          src={build.picture}
                          alt="pc case"
                          width="110"
                        />
                      </div>
                      <div className="d-flex flex-row justify-content-center w-100 ">
                        <span>
                          <Link
                            to={`/builds/updatebuild/${build.id}`}
                            className="btn btn-outline-primary mb-2"
                          >
                            Update Build
                          </Link>
                          {/* <button className='btn btn-outline-primary'>
                            <i class='bi bi-hand-thumbs-up pe-1'></i>
                            Upvote
                          </button> */}
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex flex-column align-items-center w-100 mb-3">
                        <p className="text-primary p-0 m-0">Builder</p>
                        <hr className="w-100 p-0 m-1"></hr>
                        <div className="card-text">{build.username}</div>
                      </div>
                      <div className="d-flex flex-column align-items-center w-100 mb-3">
                        <p className="text-primary p-0 m-0">Color</p>
                        <hr className="w-100 p-0 m-1"></hr>
                        <div className="card-text">{build.color}</div>
                      </div>
                      <div className="d-flex flex-column align-items-center w-100 mb-3">
                        <p className="text-primary p-0 m-0">Size</p>
                        <hr className="w-100 p-0 m-1"></hr>
                        <div className="card-text">{build.size}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4 order-sm-2 order-2">
              <div className="card bg-dark border border-primary w-5">
                <h5 className="card-title text-white p-3">CPU</h5>
                <div className="d-flex flex-column card-text text-white px-4">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="d-flex flex-column align-items-center w-100 mb-3">
                        <p className="text-primary p-0 m-0">Processor</p>
                        <hr className="w-100 p-0 m-1"></hr>
                        <div className="card-text">{build.cpu.processor}</div>
                      </div>
                      <div className="d-flex flex-column align-items-center w-100 mb-3">
                        <p className="text-primary p-0 m-0">Cores</p>
                        <hr className="w-100 p-0 m-1"></hr>
                        <div className="card-text">{build.cpu.cores}</div>
                      </div>
                      <div className="d-flex flex-column align-items-center w-100 mb-3">
                        <p className="text-primary p-0 m-0">Threads</p>
                        <hr className="w-100 p-0 m-1"></hr>
                        <div className="card-text">{build.cpu.threads}</div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex flex-column align-items-center w-100 mb-3">
                        <p className="text-primary text-nowrap p-0 m-0">
                          Speed
                        </p>
                        <hr className="w-100 p-0 m-1"></hr>
                        <div className="card-text">{build.cpu.speed}</div>
                      </div>
                      <div className="d-flex flex-column align-items-center w-100 mb-3">
                        <p className="text-primary p-0 m-0">Socket Type</p>
                        <hr className="w-100 p-0 m-1"></hr>
                        <div className="card-text">{build.cpu.socket_type}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-4">
              <div className="card bg-dark border border-primary w-5">
                <h5 className="card-title text-white p-3">RAM</h5>
                <div className="d-flex flex-column card-text text-white px-4">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="d-flex flex-column align-items-center w-100 mb-3">
                        <p className="text-primary p-0 m-0">Brand</p>
                        <hr className="w-100 p-0 m-1"></hr>
                        <div className="card-text">{build.ram.brand}</div>
                      </div>
                      <div className="d-flex flex-column align-items-center w-100 mb-3">
                        <p className="text-primary p-0 m-0">Memory Type</p>
                        <hr className="w-100 p-0 m-1"></hr>
                        <div className="card-text">{build.ram.memory_type}</div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex flex-column align-items-center w-100 mb-3">
                        <p className="text-primary p-0 m-0">Memory Speed</p>
                        <hr className="w-100 p-0 m-1"></hr>
                        <div className="card-text">
                          {build.ram.memory_speed}
                        </div>
                      </div>
                      <div className="d-flex flex-column align-items-center w-100 mb-3">
                        <p className="text-primary p-0 m-0">Memory Channels</p>
                        <hr className="w-100 p-0 m-1"></hr>
                        <div className="card-text">
                          {build.ram.memory_channels}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card bg-dark border border-primary w-5">
                <h5 className="card-title text-white p-3">GPU</h5>
                <div className="d-flex flex-column card-text text-white px-4">
                  <div className="d-flex flex-column card-text text-white px-4">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="d-flex flex-column align-items-center w-100 mb-3">
                          <p className="text-primary p-0 m-0">Manufacturer</p>
                          <hr className="w-100 p-0 m-1"></hr>
                          <div className="card-text">
                            {build.gpu.manufacturer}
                          </div>
                        </div>
                        <div className="d-flex flex-column align-items-center w-100 mb-3">
                          <p className="text-primary p-0 m-0">
                            Core Clock Speed
                          </p>
                          <hr className="w-100 p-0 m-1"></hr>
                          <div className="card-text">
                            {build.gpu.core_clock_speed}
                          </div>
                        </div>
                        <div className="d-flex flex-column align-items-center w-100 mb-3">
                          <p className="text-primary p-0 m-0">Video Memory</p>
                          <hr className="w-100 p-0 m-1"></hr>
                          <div className="card-text">
                            {build.gpu.video_memory}
                          </div>
                        </div>
                        <div className="d-flex flex-column align-items-center w-100 mb-3">
                          <p className="text-primary p-0 m-0">Memory Type</p>
                          <hr className="w-100 p-0 m-1"></hr>
                          <div className="card-text">
                            {build.gpu.memory_type}
                          </div>
                        </div>
                        <div className="d-flex flex-column align-items-center w-100 mb-3">
                          <p className="text-primary p-0 m-0">Display Ports</p>
                          <hr className="w-100 p-0 m-1"></hr>
                          <div className="card-text">
                            {build.gpu.display_port}
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="d-flex flex-column align-items-center w-100 mb-3">
                          <p className="text-primary p-0 m-0">Chipset</p>
                          <hr className="w-100 p-0 m-1"></hr>
                          <div className="card-text">{build.gpu.chipset}</div>
                        </div>
                        <div className="d-flex flex-column align-items-center w-100 mb-3">
                          <p className="text-primary p-0 m-0">Height</p>
                          <hr className="w-100 p-0 m-1"></hr>
                          <div className="card-text text-nowrap">
                            {build.gpu.height}
                          </div>
                        </div>
                        <div className="d-flex flex-column align-items-center w-100 mb-3">
                          <p className="text-primary p-0 m-0">Length</p>
                          <hr className="w-100 p-0 m-1"></hr>
                          <div className="card-text text-nowrap">
                            {build.gpu.length}
                          </div>
                        </div>
                        <div className="d-flex flex-column align-items-center w-100 mb-3">
                          <p className="text-primary p-0 m-0">Width</p>
                          <hr className="w-100 p-0 m-1"></hr>
                          <div className="card-text">{build.gpu.width}</div>
                        </div>
                        <div className="d-flex flex-column align-items-center w-100 mb-3">
                          <p className="text-primary p-0 m-0">Hdmi Ports</p>
                          <hr className="w-100 p-0 m-1"></hr>
                          <div className="card-text">{build.gpu.hdmi}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="card bg-dark border border-primary w-5">
                <h5 className="card-title text-white p-3">PSU</h5>
                <div className="d-flex flex-column card-text text-white px-4">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="d-flex flex-column align-items-center w-100 mb-3">
                        <p className="text-primary p-0 m-0">Brand</p>
                        <hr className="w-100 p-0 m-1"></hr>
                        <div className="card-text">{build.psu.brand}</div>
                      </div>
                      <div className="d-flex flex-column align-items-center w-100 mb-3">
                        <p className="text-primary p-0 m-0">Wattage</p>
                        <hr className="w-100 p-0 m-1"></hr>
                        <div className="card-text">{build.psu.wattage}</div>
                      </div>
                      <div className="d-flex flex-column align-items-center w-100 mb-3">
                        <p className="text-primary p-0 m-0">Atx Connector</p>
                        <hr className="w-100 p-0 m-1"></hr>
                        <div className="card-text">
                          {build.psu.atx_12v_connector}
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex flex-column align-items-center w-100 mb-3">
                        <p className="text-primary text-nowrap p-0 m-0">
                          Graphics Connector
                        </p>
                        <hr className="w-100 p-0 m-1"></hr>
                        <div className="card-text">
                          {build.psu.graphics_connector}
                        </div>
                      </div>
                      <div className="d-flex flex-column align-items-center w-100 mb-3">
                        <p className="text-primary text-nowrap p-0 m-0">
                          Molex Connector
                        </p>
                        <hr className="w-100 p-0 m-1"></hr>
                        <div className="card-text">
                          {build.psu.molex_connector}
                        </div>
                      </div>
                      <div className="d-flex flex-column align-items-center w-100 mb-3">
                        <p className="text-primary text-nowrap p-0 m-0">
                          Sata Connector
                        </p>
                        <hr className="w-100 p-0 m-1"></hr>
                        <div className="card-text">
                          {build.psu.sata_connector}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DetailBuild;

// {
/* <div className="container justify-content-md-center my-5 pt-5">
      {build !== undefined && (
        <div className="row d-flex justify-content-center">
          <div className="col-sm">
            <img className="img-fluid" src={build.picture} alt="pc case" />
          </div>
          <div className="col">
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
      )}
    </div> */
// }
