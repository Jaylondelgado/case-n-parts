import React, { useEffect, useState } from "react";

import CpuTable from "../parts/CpuTable";
import GpuList from "../parts/GpuFetch";
import CpuList from "../parts/CpuFetch";
import HddTable from "../parts/HddTable";
import PsuTable from "../parts/PsuTable";
import RamTable from "../parts/RamTable";

import pcCaseBlack from "../images/inner-case/pc-case-with-mobo-black.png";

function CreateBuild() {
  const gpus = GpuList();
  const cpus = CpuList();

  const [gpuChoice, setGpuChoice] = useState([]);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);

  const [gpuState, setGpuState] = useState({
    manufacturer: "",
    chipset: "",
  });
  const [state, setState] = useState({
    color: "",
    size: "",
  });

  const handleGpuClick = e => {
    const selected = e;
    setGpuChoice(selected);
  };

  const handleCpuClick = e => {
    const selected = e;
    console.log("poop", selected);
    setGpuChoice(selected);
  };

  // const [state, setState] = useState({
  //   name: "",
  // });
  // const [successfulSubmit, setSuccessfulSubmit] = useState(false);
  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const manufacturerUrl = "http://localhost:8100/api/build/create/";
  //   const fetchConfig = {
  //     method: "POST",
  //     body: JSON.stringify(state),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   const resposne = await fetch(manufacturerUrl, fetchConfig);

  //   if (resposne.ok) {
  //     setState({
  //       name: "",
  //     });
  //     setSuccessfulSubmit(true);
  //   }
  // };

  useEffect(() => {
    const getColorData = async () => {
      const colorRes = await fetch("http://localhost:8000/api/color/");
      const colorData = await colorRes.json();
      setColors(colorData.colors);
    };
    getColorData();
  }, []);
  useEffect(() => {
    const getSizeData = async () => {
      const sizeRes = await fetch("http://localhost:8000/api/size/");
      const sizeData = await sizeRes.json();
      setSizes(sizeData.sizes);
    };

    getSizeData();
  }, []);

  const handleChange = event => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  return (
    <div className='container-fluid my-5'>
      <div className='test'>
        {gpuChoice.manufacturer}
        {/* {console.log("Picked gpu", "Also jaylon is a bitch", gpuChoice)} */}
      </div>
      <div className='row justify-content-md-center py-4 g-4 mt-4'>
        <div className='col-sm-1'>
          <button
            type='button'
            className='btn btn-primary'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            PSU
          </button>
          <div
            className='modal fade'
            id='exampleModal'
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
                  ></button>
                </div>
                <div className='modal-body bg-secondary'>
                  <PsuTable />
                </div>
                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn btn-secondary'
                    data-bs-dismiss='modal'
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-1'>
          <button
            type='button'
            className='btn btn-primary'
            data-bs-toggle='modal'
            data-bs-target='#exampleModals'
          >
            GPU
          </button>
          <div
            className='modal fade'
            id='exampleModals'
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
                          <>
                            {/* <select
                onChange={handleChange}
                value={choice}
                required
                name="choice"
                id="choice"
              ></select> */}

                            <tr
                              key={gpu["id"]}
                              onClick={() => handleGpuClick(gpu)}
                            >
                              <td>{gpu["manufacturer"]}</td>
                              <td>{gpu["chipset"]}</td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn btn-secondary'
                    data-bs-dismiss='modal'
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-1'>
          <button
            type='button'
            className='btn btn-primary'
            data-bs-toggle='modal'
            data-bs-target='#exampleModaler'
          >
            CPU
          </button>
          <div
            className='modal fade'
            id='exampleModaler'
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
                          <>
                            <tr
                              key={cpu["id"]}
                              onClick={() => handleCpuClick(cpu)}
                            >
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
                </div>
                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn btn-secondary'
                    data-bs-dismiss='modal'
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-1'>
          <button
            type='button'
            className='btn btn-primary'
            data-bs-toggle='modal'
            data-bs-target='#exampleModale'
          >
            HDD
          </button>
          <div
            className='modal fade'
            id='exampleModale'
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
                  <HddTable />
                </div>
                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn btn-secondary'
                    data-bs-dismiss='modal'
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-1'>
          <button
            type='button'
            className='btn btn-primary'
            data-bs-toggle='modal'
            data-bs-target='#exampleModalj'
          >
            RAM
          </button>
          <div
            className='modal fade'
            id='exampleModalj'
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
                  <RamTable />
                </div>
                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn btn-secondary'
                    data-bs-dismiss='modal'
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row justify-content-md-center'>
        <div className='col-md-3 offset-md-3'>
          <img className='img-fluid' src={pcCaseBlack} alt='empty case' />
        </div>

        <div className='col-md-3 offset-md-3 '>
          <select
            onChange={handleChange}
            value={state.colors}
            name='color'
            id='color'
            className='form-select w-75'
            required
          >
            <option value=''>Choose a color</option>
            {colors.map(color => {
              return (
                <option key={color.id} value={color.id}>
                  {color.name}
                </option>
              );
            })}
          </select>
          <select
            onChange={handleChange}
            value={state.sizes}
            name='size'
            id='size'
            className='form-select w-75'
            required
          >
            <option value=''>Choose a size</option>
            {sizes.map(size => {
              return (
                <option key={size.id} value={size.id}>
                  {size.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
}

export default CreateBuild;
