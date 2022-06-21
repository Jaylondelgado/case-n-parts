import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import useApiData from "../parts/ApiFetch";

import black from "../images/inner-case/pc-case-with-mobo-black.png";
import pink from "../images/inner-case/pc-case-with-mobo-pink.png";
import green from "../images/inner-case/pc-case-with-mobo-green.png";

const basePath = "http://localhost:8000";

const caseColors = {
  black,
  green,
  pink,
};

function CreateBuild() {
  const [build, setBuild] = useState({
    Name: "",
    psu: "",
    gpu: "",
    cpu: "",
    hdd: "",
    moboid: 1,
    color: "",
    size: "",
    picture: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);

  useEffect(() => {
    const getBuildData = async () => {
      const buildResponse = await fetch(
        `${process.env.REACT_APP_ACCOUNTS_HOST}/api/build/${id}`,
        {
          credentials: "include",
        }
      );
      const buildData = await buildResponse.json();
      console.log("build data", buildData);
      setBuild(buildData);
    };

    getBuildData();
  }, []);

  const gpus = useApiData(`${basePath}/api/gpus/`, "gpus");
  const cpus = useApiData(`${basePath}/api/cpus/`, "cpus");
  const psus = useApiData(`${basePath}/api/psus/`, "psus");
  const rams = useApiData(`${basePath}/api/rams/`, "rams");
  const hdds = useApiData(`${basePath}/api/hdds`, "hdds");
  const colors = useApiData(`${basePath}/api/color/`, "colors");
  const sizes = useApiData(`${basePath}/api/size/`, "sizes");
  const caseImages = useApiData(`${basePath}/api/caseimage`, "caseimages");
  const mobos = useApiData(`${basePath}/api/mobos`, "mobos");

  const handleGpuClick = gpu => {
    setBuild(build => ({
      ...build,
      gpu,
      // gpu: {
      //   ...gpu,
      //   cardcount: 1,
      // },
    }));
  };

  const handleCpuClick = cpu => {
    setBuild(build => ({
      ...build,
      cpu,
    }));
  };

  const handlePsuClick = psu => {
    setBuild(build => ({
      ...build,
      psu,
    }));
  };

  const handleRamClick = ram => {
    setBuild(build => ({
      ...build,
      ram,
    }));
  };

  const handleHddClick = hdd => {
    setBuild(build => ({
      ...build,
      hdd,
    }));
  };

  const handleColorChange = ({ target: { value: selectedColor } }) => {
    const { id: selectedId, name: selectedName } = colors.find(
      color => color.name === selectedColor
    );

    const picture = caseImages.find(
      caseImage => caseImage.id === selectedId
    ).id;
    setBuild(build => ({
      ...build,
      color: selectedName,
      picture,
    }));
  };

  const handleNameChange = event => {
    setBuild(build => ({
      ...build,
      Name: event.target.value,
    }));
  };

  const handleSizeChange = ({ target: { value: selectedSize } }) => {
    setBuild(build => ({
      ...build,
      size: selectedSize,
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const buildPutData = {
      Name: build.Name,
      psuid: build.psu.id,
      gpuid: build.gpu.id,
      cardcount: 1,
      cpuid: build.cpu.id,
      ramid: build.ram.id,
      ramcount: 1,
      hddid: build.hdd.id,
      hddcount: 1,
      moboid: 1,
      size: sizes.find(size => size.name === build.size).id,
      color: colors.find(color => color.name === build.color).id,
      picture: caseImages.find(image => image.picture.includes(build.color)).id,
      Private: true,
    };

    const buildUrl = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/build/${id}`;
    const fetchConfig = {
      method: "PUT",
      body: JSON.stringify(buildPutData),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    };
    const response = await fetch(buildUrl, fetchConfig);
    if (response.ok) {
      navigate(`/builds/detailbuild/${id}`, { replace: true });
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
    <div className='container my-5'>
      <div className='row py-5 g-4 mt-4'>
        <form onSubmit={handleSubmit} id='create-appointment-form'>
          <div className='col-sm-1 my-25'></div>
          <div className='row justify-content-md-center'>
            <div className='col-md-auto'>
              <img
                className='rounded'
                src={build.color ? caseColors[build.color] : caseColors.black}
                alt='pc case'
                width='500'
              />
            </div>

            <div className='col-md-auto'>
              <input
                onChange={handleNameChange}
                value={build.Name}
                placeholder='PC Name'
                required
                name='name'
                id='name'
                className='form-control w-75 mb-2'
              />
              <select
                onChange={handleColorChange}
                value={build.color}
                name='color'
                id='color'
                className='form-select w-75 mb-2'
                required
              >
                <option value=''>Case color</option>
                {colors.map(color => {
                  return (
                    <option key={color.id} value={color.name}>
                      {color.name}
                    </option>
                  );
                })}
              </select>
              <select
                onChange={handleSizeChange}
                value={build.size}
                name='size'
                id='size'
                className='form-select w-75'
                required
              >
                <option value=''>Case size</option>
                {sizes.map(size => {
                  return (
                    <option key={size.id} value={size.name}>
                      {size.name}
                    </option>
                  );
                })}
              </select>
              <div className='col-sm-1 w-75 pt-2'>
                <button
                  type='button'
                  className='btn btn-outline-secondary w-100'
                  data-bs-toggle='modal'
                  data-bs-target='#psuModal'
                >
                  {build.psu ? `PSU: ${build.psu.wattage}` : "PSU"}
                </button>
                <div
                  className='modal fade'
                  id='psuModal'
                  tabIndex='-1'
                  aria-labelledby='exampleModalLabel'
                  aria-hidden='true'
                >
                  <div className='modal-dialog'>
                    <div className='modal-content'>
                      <div className='modal-header bg-secondary'>
                        <h5 className='modal-title' id='exampleModalLabel'>
                          PSU
                        </h5>
                        <button
                          type='button'
                          className='btn-close'
                          data-bs-dismiss='modal'
                          aria-label='Close'
                        ></button>{" "}
                      </div>
                      <div className='modal-body bg-secondary'>
                        {" "}
                        <table className='table table-hover table-dark'>
                          <thead>
                            <tr>
                              <th>Brand</th>
                              <th>Wattage</th>
                            </tr>
                          </thead>
                          <tbody>
                            {psus.map(psu => {
                              return (
                                <tr
                                  key={psu.id}
                                  onClick={() => handlePsuClick(psu)}
                                  className={
                                    build.psu.id === psu.id
                                      ? "selected-list-item"
                                      : undefined
                                  }
                                  data-bs-dismiss='modal'
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
              <div className='col-sm-1 w-75 pt-2'>
                <button
                  type='button'
                  className='btn btn-outline-secondary w-100'
                  data-bs-toggle='modal'
                  data-bs-target='#cpuModal'
                >
                  {build.cpu ? `CPU: ${build.cpu.processor}` : "CPU"}
                </button>
                <div
                  className='modal fade'
                  id='cpuModal'
                  tabIndex='-1'
                  aria-labelledby='exampleModalLabel'
                  aria-hidden='true'
                >
                  <div className='modal-dialog'>
                    <div className='modal-content'>
                      <div className='modal-header bg-secondary'>
                        <h5 className='modal-title' id='exampleModalLabel'>
                          CPU
                        </h5>
                        <button
                          type='button'
                          className='btn-close'
                          data-bs-dismiss='modal'
                          aria-label='Close'
                        ></button>
                      </div>
                      <div className='modal-body bg-secondary'>
                        <table className='table table-hover table-dark'>
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
                                <tr
                                  key={cpu.id}
                                  onClick={() => handleCpuClick(cpu)}
                                  data-bs-dismiss='modal'
                                  className={
                                    build.cpu.id === cpu.id
                                      ? "selected-list-item"
                                      : undefined
                                  }
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
              <div className='col-md w-75 pt-2'>
                <div className='btn-group dropup w-100'>
                  <button
                    type='button'
                    className='btn btn-outline-secondary w-75'
                    data-bs-toggle='modal'
                    data-bs-target='#gpuModal'
                  >
                    {build.gpu ? `GPU: ${build.gpu.chipset}` : "GPU"}
                  </button>
                  <button
                    type='button'
                    className='btn btn-secondary dropdown-toggle dropdown-toggle-split w-25'
                    data-bs-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <span className='sr-only'>Toggle Dropdown</span>
                  </button>
                  <div className='dropdown-menu'>x</div>
                </div>
                <div
                  className='modal fade'
                  id='gpuModal'
                  tabIndex='-1'
                  aria-labelledby='exampleModalLabel'
                  aria-hidden='true'
                >
                  <div className='modal-dialog'>
                    <div className='modal-content'>
                      <div className='modal-header bg-secondary'>
                        <h5 className='modal-title' id='exampleModalLabel'>
                          GPU
                        </h5>
                        <button
                          type='button'
                          className='btn-close'
                          data-bs-dismiss='modal'
                          aria-label='Close'
                        ></button>
                      </div>
                      <div className='modal-body bg-secondary'>
                        <table className='table table-hover table-dark'>
                          <thead>
                            <tr>
                              <th>Manufacturer</th>
                              <th>Chipset</th>
                            </tr>
                          </thead>
                          <tbody>
                            {gpus.map(gpu => {
                              return (
                                <tr
                                  key={gpu.id}
                                  onClick={() => handleGpuClick(gpu)}
                                  data-bs-dismiss='modal'
                                  className={
                                    build.gpu.id === gpu.id
                                      ? "selected-list-item"
                                      : undefined
                                  }
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

              <div className='col-sm-1 w-75 pt-2'>
                <div className='btn-group dropup w-100'>
                  <button
                    type='button'
                    className='btn btn-outline-secondary w-75'
                    data-bs-toggle='modal'
                    data-bs-target='#hddModal'
                  >
                    {build.hdd ? `HDD: ${build.hdd.capacity}` : "HDD"}
                  </button>
                  <button
                    type='button'
                    className='btn btn-secondary dropdown-toggle dropdown-toggle-split w-25'
                    data-bs-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <span className='sr-only'>Toggle Dropdown</span>
                  </button>
                  <div className='dropdown-menu'>x</div>
                </div>
                <div
                  className='modal fade'
                  id='hddModal'
                  tabIndex='-1'
                  aria-labelledby='exampleModalLabel'
                  aria-hidden='true'
                >
                  <div className='modal-dialog'>
                    <div className='modal-content'>
                      <div className='modal-header bg-secondary'>
                        <h5 className='modal-title' id='exampleModalLabel'>
                          HDD
                        </h5>
                        <button
                          type='button'
                          className='btn-close'
                          data-bs-dismiss='modal'
                          aria-label='Close'
                        ></button>
                      </div>
                      <div className='modal-body bg-secondary'>
                        <table className='table table-hover table-dark'>
                          <thead>
                            <tr>
                              <th>Brand</th>
                              <th>Capacity</th>
                            </tr>
                          </thead>
                          <tbody>
                            {hdds.map(hdd => {
                              return (
                                <tr
                                  key={hdd.id}
                                  onClick={() => handleHddClick(hdd)}
                                  data-bs-dismiss='modal'
                                  className={
                                    build.hdd.id === hdd.id
                                      ? "selected-list-item"
                                      : undefined
                                  }
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
              <div className='col-sm-1 w-75 pt-2'>
                <div className='btn-group dropup w-100'>
                  <button
                    type='button'
                    className='btn btn-outline-secondary w-75'
                    data-bs-toggle='modal'
                    data-bs-target='#ramModal'
                  >
                    {build.ram ? `RAM: ${build.ram.memory_type}` : "RAM"}
                  </button>
                  <button
                    type='button'
                    className='btn btn-secondary dropdown-toggle dropdown-toggle-split w-25'
                    data-bs-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <span className='sr-only'>Toggle Dropdown</span>
                  </button>
                  <div className='dropdown-menu'>
                    <p>something</p>
                  </div>
                </div>
                <div
                  className='modal fade'
                  id='ramModal'
                  tabIndex='-1'
                  aria-labelledby='exampleModalLabel'
                  aria-hidden='true'
                >
                  <div className='modal-dialog'>
                    <div className='modal-content'>
                      <div className='modal-header bg-secondary'>
                        <h5 className='modal-title' id='exampleModalLabel'>
                          RAM
                        </h5>
                        <button
                          type='button'
                          className='btn-close'
                          data-bs-dismiss='modal'
                          aria-label='Close'
                        ></button>
                      </div>
                      <div className='modal-body bg-secondary'>
                        <table className='table table-hover table-dark'>
                          <thead>
                            <tr>
                              <th>Brand</th>
                              <th>Memory Speed</th>
                            </tr>
                          </thead>
                          <tbody>
                            {rams.map(ram => {
                              return (
                                <tr
                                  key={ram.id}
                                  onClick={() => handleRamClick(ram)}
                                  data-bs-dismiss='modal'
                                  className={
                                    build.ram.id === ram.id
                                      ? "selected-list-item"
                                      : undefined
                                  }
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
            <div className='row justify-content-md-center'>
              <div className='col-sm-1 pt-2 w-50'>
                <button
                  onSubmit={handleSubmit}
                  id='create-pc-build'
                  className={createButton}
                >
                  Update
                </button>

                <div className={alertContainerClasses}>
                  <div className={alertClasses} id='success-message'>
                    Build created successfully
                  </div>
                  <div className='d-flex justify-content-between'>
                    <Link to='/builds/create'>
                      <button
                        onClick={() => setSuccessfulSubmit(false)}
                        className='btn btn-outline-primary'
                      >
                        Make new build
                      </button>
                    </Link>
                    <Link to='/builds/mybuilds'>
                      <button className='btn btn-outline-primary float-right'>
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