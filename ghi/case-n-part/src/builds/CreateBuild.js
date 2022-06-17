import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useApiData from "../parts/ApiFetch";

import black from "../images/inner-case/pc-case-with-mobo-black.png";
import pink from "../images/inner-case/pc-case-with-mobo-pink.png";
import green from "../images/inner-case/pc-case-with-mobo-green.png";

const basePath = "http://localhost:8000";

function CreateBuild() {
  const [nameChoice, setNameChoice] = useState("");
  const [gpuChoice, setGpuChoice] = useState([]);
  const [cpuChoice, setCpuChoice] = useState([]);
  const [psuChoice, setPsuChoice] = useState([]);
  const [ramChoice, setRamChoice] = useState([]);
  const [hddChoice, setHddChoice] = useState([]);
  const [caseColor, setCaseColor] = useState(black);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [casePicture, setCasePicture] = useState("");
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);

  const [build, setBuild] = useState({
    Name: "",
    psuid: "",
    gpuid: "",
    cardcount: 1,
    cpuid: "",
    ramid: "",
    ramcount: 1,
    hddid: "",
    hddcount: 1,
    moboid: 1,
    color: "",
    size: "",
    picture: 3,
  });

  useEffect(() => {
    setBuild({
      ...build,
      Name: nameChoice,
      psuid: psuChoice.id,
      gpuid: gpuChoice.id,
      cpuid: cpuChoice.id,
      ramid: ramChoice.id,
      hddid: hddChoice.id,
      color: Number(selectedColor),
      size: Number(selectedSize),
      picture: casePicture,
    });
  }, [
    nameChoice,
    psuChoice,
    gpuChoice,
    cpuChoice,
    ramChoice,
    hddChoice,
    selectedColor,
    selectedSize,
    casePicture,
  ]);

  const gpus = useApiData(`${basePath}/api/gpus/`, "gpus");
  const cpus = useApiData(`${basePath}/api/cpus/`, "cpus");
  const psus = useApiData(`${basePath}/api/psus/`, "psus");
  const rams = useApiData(`${basePath}/api/rams/`, "rams");
  const hdds = useApiData(`${basePath}/api/hdds`, "hdds");
  const caseImages = useApiData(`${basePath}/api/caseimage`, "caseimages");
  const colors = useApiData(`${basePath}/api/color/`, "colors");
  const sizes = useApiData(`${basePath}/api/size/`, "sizes");
  const mobos = useApiData(`${basePath}/api/mobos`, "mobos");

  useEffect(() => {
    const currentColorImage = colors.includes(selectedColor);
    console.log(currentColorImage);
  }, [selectedColor, colors]);

  const caseColors = {
    black: black,
    green: green,
    pink: pink,
  };

  const handleGpuClick = (gpu) => {
    const selected = gpu;
    setGpuChoice(selected);
  };

  const handleCpuClick = (cpu) => {
    const selected = cpu;
    setCpuChoice(selected);
  };

  const handlePsuClick = (psu) => {
    const selected = psu;
    setPsuChoice(selected);
  };

  const handleRamClick = (ram) => {
    const selected = ram;
    setRamChoice(selected);
  };

  const handleHddClick = (hdd) => {
    const selected = hdd;
    setHddChoice(selected);
  };

  const handleColorChange = (event) => {
    const value = event.target.value;
    setSelectedColor(value);
    if (value === "") {
      setCaseColor(caseColors["black"]);
    } else {
      setCaseColor(caseColors[colors[value - 1].name]);
    }

    let caseColorUrls = caseImages.map((image) => {
      return Object.values(image);
    });

    let caseColorUrl = caseColorUrls.map((colorUrl) => {
      if (colorUrl[1].includes(colors[value - 1].name)) {
        return colorUrl[0];
      }
    });

    const caseFilteredUrls = caseColorUrl.filter((url) => url !== undefined);
    setCasePicture(caseFilteredUrls[0]);
  };

  const name = (event) => {
    setNameChoice(event.target.value);
  };

  const handleSizeChange = (event) => {
    const value = event.target.value;
    setSelectedSize(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const appointmentUrl = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/build/create`;
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(build),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    };
    const response = await fetch(appointmentUrl, fetchConfig);
    if (response.ok) {
      setBuild({
        name: setNameChoice(""),
        psu: setPsuChoice(""),
        gpu: setGpuChoice(""),
        cpu: setCpuChoice(""),
        ram: setRamChoice(""),
        hdd: setHddChoice(""),
        mobo: 1,
        color: setSelectedColor(black),
        size: setSelectedSize(""),
        picture: setCasePicture(""),
      });
      console.log("    chad work", build);
      setSuccessfulSubmit(true);
    }
  };

  let createButton = "btn btn-outline-primary w-100 mt-4";
  let alertClasses = "alert alert-success d-none mb-0";
  let alertContainerClasses = "d-none";

  if (successfulSubmit) {
    createButton = "d-none";
    alertClasses = "alert alert-success mb-3";
    alertContainerClasses = "";
  }

  return (
    <div className="container my-5">
      <div className="row py-5 g-4 mt-4">
        <form onSubmit={handleSubmit} id="create-appointment-form">
          <div className="col-sm-1 my-25"></div>
          <div className="row justify-content-md-center">
            <div className="col-md-auto">
              <img
                className="rounded"
                src={caseColor}
                alt="pc case"
                width="500"
              />
            </div>

            <div className="col-md-auto">
              <input
                onChange={name}
                value={nameChoice}
                placeholder="PC Name"
                required
                name="name"
                id="name"
                className="form-control w-75 mb-2"
              />
              <select
                onChange={handleColorChange}
                value={selectedColor}
                name="color"
                id="color"
                className="form-select w-75 mb-2"
                required
              >
                <option value="">Case color</option>
                {colors.map((color) => {
                  return (
                    <option key={color.id} value={color.id}>
                      {color.name}
                    </option>
                  );
                })}
              </select>
              <select
                onChange={handleSizeChange}
                value={selectedSize}
                name="size"
                id="size"
                className="form-select w-75"
                required
              >
                <option value="">Case size</option>
                {sizes.map((size) => {
                  return (
                    <option key={size.id} value={size.id}>
                      {size.name}
                    </option>
                  );
                })}
              </select>
              <div className="col-sm-1 w-75 pt-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#psuModal"
                >
                  PSU
                </button>
                <div
                  className="modal fade"
                  id="psuModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header bg-secondary">
                        <h5 className="modal-title" id="exampleModalLabel">
                          PSU
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>{" "}
                      </div>
                      <div className="modal-body bg-secondary">
                        {" "}
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
                                <tr
                                  key={psu.id}
                                  onClick={() => handlePsuClick(psu)}
                                  data-bs-dismiss="modal"
                                >
                                  <td>{psu["brand"]}</td>
                                  <td>{psu["wattage"]}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-1 w-75 pt-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#cpuModal"
                >
                  CPU
                </button>
                <div
                  className="modal fade"
                  id="cpuModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header bg-secondary">
                        <h5 className="modal-title" id="exampleModalLabel">
                          CPU
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body bg-secondary">
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
                                <tr
                                  key={cpu.id}
                                  onClick={() => handleCpuClick(cpu)}
                                  data-bs-dismiss="modal"
                                >
                                  <td>{cpu["processor"]}</td>
                                  <td>{cpu["cores"]}</td>
                                  <td>{cpu["threads"]}</td>
                                  <td>{cpu["speed"]}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md w-75 pt-2">
                <div className="btn-group dropup w-100">
                  <button
                    type="button"
                    className="btn btn-outline-secondary w-75"
                    data-bs-toggle="modal"
                    data-bs-target="#gpuModal"
                  >
                    GPU
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary dropdown-toggle dropdown-toggle-split w-25"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu">x</div>
                </div>
                <div
                  className="modal fade"
                  id="gpuModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header bg-secondary">
                        <h5 className="modal-title" id="exampleModalLabel">
                          GPU
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body bg-secondary">
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
                                <tr
                                  key={gpu.id}
                                  onClick={() => handleGpuClick(gpu)}
                                  data-bs-dismiss="modal"
                                >
                                  <td>{gpu["manufacturer"]}</td>
                                  <td>{gpu["chipset"]}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-1 w-75 pt-2">
                <div className="btn-group dropup w-100">
                  <button
                    type="button"
                    className="btn btn-outline-secondary w-75"
                    data-bs-toggle="modal"
                    data-bs-target="#hddModal"
                  >
                    HDD
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary dropdown-toggle dropdown-toggle-split w-25"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu">x</div>
                </div>
                <div
                  className="modal fade"
                  id="hddModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header bg-secondary">
                        <h5 className="modal-title" id="exampleModalLabel">
                          HDD
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body bg-secondary">
                        <table className="table table-hover table-dark">
                          <thead>
                            <tr>
                              <th>Brand</th>
                              <th>Capacity</th>
                            </tr>
                          </thead>
                          <tbody>
                            {hdds.map((hdd) => {
                              return (
                                <tr
                                  key={hdd.id}
                                  onClick={() => handleHddClick(hdd)}
                                  data-bs-dismiss="modal"
                                >
                                  <td>{hdd["brand"]}</td>
                                  <td>{hdd["capacity"]}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-1 w-75 pt-2">
                <div className="btn-group dropup w-100">
                  <button
                    type="button"
                    className="btn btn-outline-secondary w-75"
                    data-bs-toggle="modal"
                    data-bs-target="#ramModal"
                  >
                    RAM
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary dropdown-toggle dropdown-toggle-split w-25"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu">
                    <p>something</p>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="ramModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header bg-secondary">
                        <h5 className="modal-title" id="exampleModalLabel">
                          RAM
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body bg-secondary">
                        <table className="table table-hover table-dark">
                          <thead>
                            <tr>
                              <th>Brand</th>
                              <th>Memory Speed</th>
                            </tr>
                          </thead>
                          <tbody>
                            {rams.map((ram) => {
                              return (
                                <tr
                                  key={ram.id}
                                  onClick={() => handleRamClick(ram)}
                                  data-bs-dismiss="modal"
                                >
                                  <td>{ram["brand"]}</td>
                                  <td>{ram["memory_speed"]}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-sm-1 pt-2 w-50">
                <button
                  onSubmit={handleSubmit}
                  id="create-pc-build"
                  className={createButton}
                >
                  Create
                </button>

                <div className={alertContainerClasses}>
                  <div className={alertClasses} id="success-message">
                    Build created successfully
                  </div>
                  <div className="d-flex justify-content-between">
                    <Link to="/builds/create">
                      <button
                        onClick={() => setSuccessfulSubmit(false)}
                        className="btn btn-outline-primary"
                      >
                        Make new build
                      </button>
                    </Link>
                    <Link to="/builds/mybuilds">
                      <button className="btn btn-outline-primary float-right">
                        View my builds
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateBuild;
