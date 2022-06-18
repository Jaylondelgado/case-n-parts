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
    <div className='container-fluid my-5 pt-5'>
      {build !== undefined && (
        <>
          <div className='row justify-content-center'>
            <div className='col-sm-4'>
              <div className='card bg-dark border border-primary w-5'>
                <h5 className='card-title text-white p-3'>Motherboard</h5>
                <p className='d-flex flex-column card-text text-white text-left align-items-start px-4'>
                  <span>
                    <p className='fw-bold'>
                      Brand -{" "}
                      <span className='fw-normal'>{build.mobo.brand}</span>
                    </p>
                  </span>
                  <span>
                    <p className='fw-bold'>
                      Socket Type -{" "}
                      <span className='fw-normal'>
                        {build.mobo.socket_type}
                      </span>
                    </p>
                  </span>
                  <span>
                    <p className='fw-bold'>
                      Max Memory -{" "}
                      <span className='fw-normal'>{build.mobo.max_memory}</span>
                    </p>
                  </span>
                  <span>
                    <p className='fw-bold'>
                      Max Memory Per Slot -{" "}
                      <span className='fw-normal'>
                        {build.mobo.max_memory_per_slot}
                      </span>
                    </p>
                  </span>
                  <span>
                    <p className='fw-bold'>
                      Pci-e Slots -{" "}
                      <span className='fw-normal'>{build.mobo.pcie_slots}</span>
                    </p>
                  </span>
                  <span>
                    <p className='fw-bold'>
                      Memory Slots -{" "}
                      <span className='fw-normal'>
                        {build.mobo.memory_slots}
                      </span>
                    </p>
                  </span>
                </p>
              </div>
            </div>
            <div className='col-sm-4'></div>
            <div className='col-sm-4'>
              <div className='card bg-dark border border-primary w-5'>
                <h5 className='card-title text-white p-3'>CPU</h5>
                <p className='d-flex flex-column card-text text-white text-left align-items-start px-4'>
                  <span>
                    <p className='fw-bold'>
                      Processor -{" "}
                      <span className='fw-normal'>{build.cpu.processor}</span>
                    </p>
                  </span>
                  <span>
                    <p className='fw-bold'>
                      Cores -{" "}
                      <span className='fw-normal'>{build.cpu.cores}</span>
                    </p>
                  </span>
                  <span>
                    <p className='fw-bold'>
                      Threads -{" "}
                      <span className='fw-normal'>{build.cpu.threads}</span>
                    </p>
                  </span>
                  <span>
                    <p className='fw-bold'>
                      Speed -{" "}
                      <span className='fw-normal'>{build.cpu.speed}</span>
                    </p>
                  </span>
                  <span>
                    <p className='fw-bold'>
                      Socket Type -{" "}
                      <span className='fw-normal'>{build.cpu.socket_type}</span>
                    </p>
                  </span>
                  <span>
                    <p className='fw-bold'>
                      Memory Slots -{" "}
                      <span className='fw-normal'>
                        {build.mobo.memory_slots}
                      </span>
                    </p>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-sm-4'></div>
            <div className='col-sm-4'>
              <div className='col my-4'>
                <div className='card bg-dark border border-primary w-5'>
                  <h5 className='card-title text-white p-3'>{build.Name}</h5>
                  <p className='d-flex flex-column card-text text-white px-4'>
                    <div className='row justify-content-center'>
                      <div className='col-auto'>
                        <img
                          className='img-fluid'
                          src={build.picture}
                          alt='pc case'
                          width='200'
                        />
                      </div>
                      <div className='d-flex flex-column align-items-start col-auto'>
                        <span>
                          <p className='fw-bold'>
                            By user -{" "}
                            <span className='fw-normal'>{build.username}</span>
                          </p>
                        </span>
                        <span className='text-left'>
                          <p className='fw-bold'>
                            Color -{" "}
                            <span className='fw-normal'>{build.color}</span>
                          </p>
                        </span>
                        <span>
                          <p className='fw-bold'>
                            Size -{" "}
                            <span className='fw-normal'>{build.size}</span>
                          </p>
                        </span>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-4'></div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-sm-4'>
              <div className='card bg-dark border border-primary w-5'>
                <h5 className='card-title text-white p-3'>RAM</h5>
                <p className='d-flex flex-column card-text text-white text-left align-items-start px-4'>
                  <span>
                    <p className='fw-bold'>
                      Brand -{" "}
                      <span className='fw-normal'>{build.ram.brand}</span>
                    </p>
                  </span>
                  <span>
                    <p className='fw-bold'>
                      Memory Type -{" "}
                      <span className='fw-normal'>{build.cpu.memory_type}</span>
                    </p>
                  </span>
                  <span>
                    <p className='fw-bold'>
                      Memory Speed -{" "}
                      <span className='fw-normal'>
                        {build.cpu.memory_speed}
                      </span>
                    </p>
                  </span>
                  <span>
                    <p className='fw-bold'>
                      Memory Channels -{" "}
                      <span className='fw-normal'>
                        {build.cpu.memory_channels}
                      </span>
                    </p>
                  </span>
                </p>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='card bg-dark border border-primary w-5'>
                <h5 className='card-title text-white p-3'>GPU</h5>
                <p className='d-flex flex-column card-text text-white text-left align-items-start px-4'>
                  <span>
                    <p className='fw-bold'>
                      Manufacturer -{" "}
                      <span className='fw-normal'>
                        {build.gpu.manufacturer}
                      </span>
                    </p>
                  </span>
                  <span>
                    <p className='fw-bold'>
                      Chipset -{" "}
                      <span className='fw-normal'>{build.gpu.chipset}</span>
                    </p>
                  </span>
                  <span>
                    <p className='fw-bold'>
                      Core Clock Speed -{" "}
                      <span className='fw-normal'>
                        {build.gpu.core_clock_speed}
                      </span>
                    </p>
                  </span>
                  <span>
                    <p className='fw-bold'>
                      Video Memory -{" "}
                      <span className='fw-normal'>
                        {build.gpu.video_memory}
                      </span>
                    </p>
                  </span>
                  <span>
                    <p className='fw-bold'>
                      Memory Type -{" "}
                      <span className='fw-normal'>{build.gpu.memory_type}</span>
                    </p>
                  </span>
                  <span>
                    <p className='fw-bold'>
                      Height -{" "}
                      <span className='fw-normal'>{build.gpu.height}</span>
                    </p>
                  </span>
                  <span>
                    <p className='fw-bold'>
                      Length -{" "}
                      <span className='fw-normal'>{build.gpu.length}</span>
                    </p>
                  </span>
                  <span>
                    <p className='fw-bold'>
                      Width -{" "}
                      <span className='fw-normal'>{build.gpu.width}</span>
                    </p>
                  </span>
                  <span>
                    <p className='fw-bold'>
                      Hdmi - <span className='fw-normal'>{build.gpu.hdmi}</span>
                    </p>
                  </span>
                  <span>
                    <p className='fw-bold'>
                      Display Port -{" "}
                      <span className='fw-normal'>
                        {build.gpu.display_port}
                      </span>
                    </p>
                  </span>
                </p>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='card bg-dark border border-primary w-5'>
                <h5 className='card-title text-white p-3'>PSU</h5>
                <p className='d-flex flex-column card-text text-white text-left align-items-start px-4'>
                  <span>
                    <p className='fw-bold'>
                      Brand -{" "}
                      <span className='fw-normal'>{build.psu.brand}</span>
                    </p>
                  </span>
                  <span>
                    <p className='fw-bold'>
                      Wattage -{" "}
                      <span className='fw-normal'>{build.psu.wattage}</span>
                    </p>
                  </span>
                  <span>
                    <p className='fw-bold'>
                      Atx Connector -{" "}
                      <span className='fw-normal'>
                        {build.cpu.atx_12v_connector}
                      </span>
                    </p>
                  </span>
                  <span>
                    <p className='fw-bold'>
                      Graphics Connector -{" "}
                      <span className='fw-normal'>
                        {build.cpu.graphics_connector}
                      </span>
                    </p>
                  </span>
                  <span>
                    <p className='fw-bold'>
                      Molex Connector -{" "}
                      <span className='fw-normal'>
                        {build.cpu.molex_connector}
                      </span>
                    </p>
                  </span>
                  <span>
                    <p className='fw-bold'>
                      Sata Connector -{" "}
                      <span className='fw-normal'>
                        {build.mobo.sata_connector}
                      </span>
                    </p>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
    // <div className='container-fluid my-5 pt-5'>
    //   {build !== undefined && (
    //     <div className='row'>
    //       <div className='col'>
    //         <img src={build.picture} alt='pc case' />
    //       </div>
    //       <div className='col'>
    //         <div className='row'>
    //           <div className='d-flex flex-column col-8 col-sm-15 align-items-start'>
    //             <h2>{build.Name}</h2>
    //             <h3>Built by: {build.username}</h3>
    //             <p>
    //               <button
    //                 className='btn btn-secondary'
    //                 type='button'
    //                 data-bs-toggle='collapse'
    //                 data-bs-target='#motherboard-data'
    //                 aria-expanded='false'
    //                 aria-controls='motherboard-data'
    //               >
    //                 Motherboard
    //               </button>
    //             </p>
    //             <div className='collapse' id='motherboard-data'>
    //               <table className='table table-hover table-dark border'>
    //                 <thead>
    //                   <tr>
    //                     <th>Brand</th>
    //                     <th>Socket Type</th>
    //                     <th>Max Memory</th>
    //                     <th>Max Memory Per Slot</th>
    //                     <th>Pci-e Slots</th>
    //                     <th>Memory Slots</th>
    //                   </tr>
    //                 </thead>
    //                 <tbody>
    //                   <tr>
    //                     <td>{build.mobo.brand}</td>
    //                     <td>{build.mobo.socket_type}</td>
    //                     <td>{build.mobo.max_memory}</td>
    //                     <td>{build.mobo.max_memory_per_slot}</td>
    //                     <td>{build.mobo.pcie_slots}</td>
    //                     <td>{build.mobo.memory_slots}</td>
    //                   </tr>
    //                 </tbody>
    //               </table>
    //             </div>
    //             <p>
    //               <button
    //                 className='btn btn-secondary'
    //                 type='button'
    //                 data-bs-toggle='collapse'
    //                 data-bs-target='#cpu-data'
    //                 aria-expanded='false'
    //                 aria-controls='cpu-data'
    //               >
    //                 CPU
    //               </button>
    //             </p>
    //             <div className='collapse' id='cpu-data'>
    //               <table className='table table-hover table-dark border'>
    //                 <thead>
    //                   <tr>
    //                     <th>Processor</th>
    //                     <th>Cores</th>
    //                     <th>Threads</th>
    //                     <th>Speed</th>
    //                     <th>Socket Type</th>
    //                   </tr>
    //                 </thead>
    //                 <tbody>
    //                   <tr>
    //                     <td>{build.cpu.processor}</td>
    //                     <td>{build.cpu.cores}</td>
    //                     <td>{build.cpu.threads}</td>
    //                     <td>{build.cpu.speed}</td>
    //                     <td>{build.cpu.socket_type}</td>
    //                   </tr>
    //                 </tbody>
    //               </table>
    //             </div>
    //             <p>
    //               <button
    //                 className='btn btn-secondary'
    //                 type='button'
    //                 data-bs-toggle='collapse'
    //                 data-bs-target='#gpu-data'
    //                 aria-expanded='false'
    //                 aria-controls='gpu-data'
    //               >
    //                 GPU
    //               </button>
    //             </p>
    //             <div className='collapse' id='gpu-data'>
    //               <table className='table table-hover table-dark border col-md-auto'>
    //                 <thead>
    //                   <tr>
    //                     <th>Manufacturer</th>
    //                     <th>Chipset</th>
    //                     <th>Core Clock Speed</th>
    //                     <th>Video Memory</th>
    //                     <th>Memory Type</th>
    //                     <th>Height</th>
    //                     <th>Length</th>
    //                     <th>Width</th>
    //                     <th>HDMI Ports</th>
    //                     <th>Display Ports</th>
    //                   </tr>
    //                 </thead>
    //                 <tbody>
    //                   <tr>
    //                     <td>{build.gpu.manufacturer}</td>
    //                     <td>{build.gpu.chipset}</td>
    //                     <td>{build.gpu.core_clock_speed}</td>
    //                     <td>{build.gpu.video_memory}GB</td>
    //                     <td>{build.gpu.memory_type}</td>
    //                     <td>{build.gpu.height}</td>
    //                     <td>{build.gpu.length}</td>
    //                     <td>{build.gpu.width}</td>
    //                     <td>{build.gpu.hdmi}</td>
    //                     <td>{build.gpu.display_port}</td>
    //                   </tr>
    //                 </tbody>
    //               </table>
    //             </div>
    //             <p>
    //               <button
    //                 className='btn btn-secondary'
    //                 type='button'
    //                 data-bs-toggle='collapse'
    //                 data-bs-target='#hdd-data'
    //                 aria-expanded='false'
    //                 aria-controls='hdd-data'
    //               >
    //                 HDD
    //               </button>
    //             </p>
    //             <div className='collapse' id='hdd-data'>
    //               <table className='table table-hover table-dark border'>
    //                 <thead>
    //                   <tr>
    //                     <th>Brand</th>
    //                     <th>Capacity</th>
    //                     <th>Interface</th>
    //                     <th>Cache</th>
    //                     <th>RPM</th>
    //                   </tr>
    //                 </thead>
    //                 <tbody>
    //                   <tr>
    //                     <td>{build.hdd.brand}</td>
    //                     <td>{build.hdd.capacity}</td>
    //                     <td>{build.hdd.interface}</td>
    //                     <td>{build.hdd.cache}</td>
    //                     <td>{build.hdd.rpm}</td>
    //                   </tr>
    //                 </tbody>
    //               </table>
    //             </div>
    //             <p>
    //               <button
    //                 className='btn btn-secondary'
    //                 type='button'
    //                 data-bs-toggle='collapse'
    //                 data-bs-target='#ram-data'
    //                 aria-expanded='false'
    //                 aria-controls='ram-data'
    //               >
    //                 Ram
    //               </button>
    //             </p>
    //             <div className='collapse' id='ram-data'>
    //               <table className='table table-hover table-dark border'>
    //                 <thead>
    //                   <tr>
    //                     <th>Brand</th>
    //                     <th>Memory Type</th>
    //                     <th>Memory Speed</th>
    //                     <th>Memory Channels</th>
    //                     <th>Pin Configuration</th>
    //                   </tr>
    //                 </thead>
    //                 <tbody>
    //                   <tr>
    //                     <td>{build.ram.brand}</td>
    //                     <td>{build.ram.memory_type}</td>
    //                     <td>{build.ram.memory_speed}</td>
    //                     <td>{build.ram.memory_channels}</td>
    //                     <td>{build.ram.pin_configuration}</td>
    //                   </tr>
    //                 </tbody>
    //               </table>
    //             </div>
    //             <p>
    //               <button
    //                 className='btn btn-secondary'
    //                 type='button'
    //                 data-bs-toggle='collapse'
    //                 data-bs-target='#psu-data'
    //                 aria-expanded='false'
    //                 aria-controls='psu-data'
    //               >
    //                 PSU
    //               </button>
    //             </p>
    //             <div className='collapse' id='psu-data'>
    //               <table className='table table-hover table-dark border'>
    //                 <thead>
    //                   <tr>
    //                     <th>Brand</th>
    //                     <th>Wattage</th>
    //                     <th>Atx Connector</th>
    //                     <th>Atx 12v Connector</th>
    //                     <th>Graphics Connector</th>
    //                     <th>Molex Connector</th>
    //                     <th>Sata Connector</th>
    //                   </tr>
    //                 </thead>
    //                 <tbody>
    //                   <tr>
    //                     <td>{build.psu.brand}</td>
    //                     <td>{build.psu.wattage}</td>
    //                     <td>{build.psu.atx_connector}</td>
    //                     <td>{build.psu.atx_12v_connector}</td>
    //                     <td>{build.psu.graphics_connector}</td>
    //                     <td>{build.psu.molex_connector}</td>
    //                     <td>{build.psu.sata_connector}</td>
    //                   </tr>
    //                 </tbody>
    //               </table>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
}

export default DetailBuild;
