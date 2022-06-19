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
      const buildResponse = await fetch(`${basePath}/api/build/${id}`);
      const buildData = await buildResponse.json();
      setBuild(buildData);
    };

    getBuildData();
  }, []);

  return (
    <div className='d-grid gap-4 my-5 p-5'>
      {build !== undefined && (
        <>
          <div className='row justify-content-center'>
            <div className='col-sm-4 order-sm-1 order-2'>
              <div className='card bg-dark border border-primary w-5'>
                <h4 className='card-title text-white p-3'>Motherboard</h4>
                <p className='d-flex flex-column card-text text-white px-4'>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <div className='d-flex flex-column align-items-center w-100 mb-3'>
                        <p className='text-primary p-0 m-0'>Brand</p>
                        <hr className='w-100 p-0 m-1'></hr>
                        <div className='card-text'>{build.mobo.brand}</div>
                      </div>
                      <div className='d-flex flex-column align-items-center w-100 mb-3'>
                        <p className='text-primary p-0 m-0'>Socket Type</p>
                        <hr className='w-100 p-0 m-1'></hr>
                        <div className='card-text'>
                          {build.mobo.socket_type}
                        </div>
                      </div>
                      <div className='d-flex flex-column align-items-center w-100 mb-3'>
                        <p className='text-primary p-0 m-0'>Max Memory</p>
                        <hr className='w-100 p-0 m-1'></hr>
                        <div className='card-text'>{build.mobo.max_memory}</div>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='d-flex flex-column align-items-center w-100 mb-3'>
                        <p className='text-primary text-nowrap p-0 m-0'>
                          Max Memory Per Slot
                        </p>
                        <hr className='w-100 p-0 m-1'></hr>
                        <div className='card-text'>{build.mobo.max_memory}</div>
                      </div>
                      <div className='d-flex flex-column align-items-center w-100 mb-3'>
                        <p className='text-primary p-0 m-0'>Pci-e Slots</p>
                        <hr className='w-100 p-0 m-1'></hr>
                        <div className='card-text'>{build.mobo.pcie_slots}</div>
                      </div>
                      <div className='d-flex flex-column align-items-center w-100 mb-3'>
                        <p className='text-primary p-0 m-0'>Memory Slots</p>
                        <hr className='w-100 p-0 m-1'></hr>
                        <div className='card-text'>
                          {build.mobo.memory_slots}
                        </div>
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
            <div className='col-sm-4 order-sm-2 order-1'>
              <div className='card bg-dark border border-primary w-5'>
                <h5 className='card-title text-white p-3'>{build.Name}</h5>
                <p className='d-flex flex-column card-text text-white px-4'>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <div className='d-flex flex-column align-items-center w-100 mb-3'>
                        <img
                          className='img-fluid'
                          src={build.picture}
                          alt='pc case'
                          width='110'
                        />
                      </div>
                      <div className='d-flex flex-row justify-content-center w-100 '>
                        <span>
                          <Link
                            to={`/builds/detailbuild/${build.id}`}
                            className='btn btn-outline-primary mb-2'
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
                    <div className='col-sm-6'>
                      <div className='d-flex flex-column align-items-center w-100 mb-3'>
                        <p className='text-primary p-0 m-0'>Builder</p>
                        <hr className='w-100 p-0 m-1'></hr>
                        <div className='card-text'>{build.username}</div>
                      </div>
                      <div className='d-flex flex-column align-items-center w-100 mb-3'>
                        <p className='text-primary p-0 m-0'>Color</p>
                        <hr className='w-100 p-0 m-1'></hr>
                        <div className='card-text'>{build.color}</div>
                      </div>
                      <div className='d-flex flex-column align-items-center w-100 mb-3'>
                        <p className='text-primary p-0 m-0'>Size</p>
                        <hr className='w-100 p-0 m-1'></hr>
                        <div className='card-text'>{build.size}</div>
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>

            <div className='col-sm-4 order-sm-2 order-2'>
              <div className='card bg-dark border border-primary w-5'>
                <h5 className='card-title text-white p-3'>CPU</h5>
                <p className='d-flex flex-column card-text text-white px-4'>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <div className='d-flex flex-column align-items-center w-100 mb-3'>
                        <p className='text-primary p-0 m-0'>Processor</p>
                        <hr className='w-100 p-0 m-1'></hr>
                        <div className='card-text'>{build.cpu.processor}</div>
                      </div>
                      <div className='d-flex flex-column align-items-center w-100 mb-3'>
                        <p className='text-primary p-0 m-0'>Cores</p>
                        <hr className='w-100 p-0 m-1'></hr>
                        <div className='card-text'>{build.cpu.cores}</div>
                      </div>
                      <div className='d-flex flex-column align-items-center w-100 mb-3'>
                        <p className='text-primary p-0 m-0'>Threads</p>
                        <hr className='w-100 p-0 m-1'></hr>
                        <div className='card-text'>{build.cpu.threads}</div>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='d-flex flex-column align-items-center w-100 mb-3'>
                        <p className='text-primary text-nowrap p-0 m-0'>
                          Speed
                        </p>
                        <hr className='w-100 p-0 m-1'></hr>
                        <div className='card-text'>{build.cpu.speed}</div>
                      </div>
                      <div className='d-flex flex-column align-items-center w-100 mb-3'>
                        <p className='text-primary p-0 m-0'>Socket Type</p>
                        <hr className='w-100 p-0 m-1'></hr>
                        <div className='card-text'>{build.cpu.socket_type}</div>
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-sm-4'>
              <div className='card bg-dark border border-primary w-5'>
                <h5 className='card-title text-white p-3'>RAM</h5>
                <p className='d-flex flex-column card-text text-white px-4'>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <div className='d-flex flex-column align-items-center w-100 mb-3'>
                        <p className='text-primary p-0 m-0'>Brand</p>
                        <hr className='w-100 p-0 m-1'></hr>
                        <div className='card-text'>{build.ram.brand}</div>
                      </div>
                      <div className='d-flex flex-column align-items-center w-100 mb-3'>
                        <p className='text-primary p-0 m-0'>Memory Type</p>
                        <hr className='w-100 p-0 m-1'></hr>
                        <div className='card-text'>{build.ram.memory_type}</div>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='d-flex flex-column align-items-center w-100 mb-3'>
                        <p className='text-primary p-0 m-0'>Memory Speed</p>
                        <hr className='w-100 p-0 m-1'></hr>
                        <div className='card-text'>
                          {build.ram.memory_speed}
                        </div>
                      </div>
                      <div className='d-flex flex-column align-items-center w-100 mb-3'>
                        <p className='text-primary p-0 m-0'>Memory Channels</p>
                        <hr className='w-100 p-0 m-1'></hr>
                        <div className='card-text'>
                          {build.ram.memory_channels}
                        </div>
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='card bg-dark border border-primary w-5'>
                <h5 className='card-title text-white p-3'>GPU</h5>
                <p className='d-flex flex-column card-text text-white px-4'>
                  <p className='d-flex flex-column card-text text-white px-4'>
                    <div className='row'>
                      <div className='col-sm-6'>
                        <div className='d-flex flex-column align-items-center w-100 mb-3'>
                          <p className='text-primary p-0 m-0'>Manufacturer</p>
                          <hr className='w-100 p-0 m-1'></hr>
                          <div className='card-text'>
                            {build.gpu.manufacturer}
                          </div>
                        </div>
                        <div className='d-flex flex-column align-items-center w-100 mb-3'>
                          <p className='text-primary p-0 m-0'>
                            Core Clock Speed
                          </p>
                          <hr className='w-100 p-0 m-1'></hr>
                          <div className='card-text'>
                            {build.gpu.core_clock_speed}
                          </div>
                        </div>
                        <div className='d-flex flex-column align-items-center w-100 mb-3'>
                          <p className='text-primary p-0 m-0'>Video Memory</p>
                          <hr className='w-100 p-0 m-1'></hr>
                          <div className='card-text'>
                            {build.gpu.video_memory}
                          </div>
                        </div>
                        <div className='d-flex flex-column align-items-center w-100 mb-3'>
                          <p className='text-primary p-0 m-0'>Memory Type</p>
                          <hr className='w-100 p-0 m-1'></hr>
                          <div className='card-text'>
                            {build.gpu.memory_type}
                          </div>
                        </div>
                        <div className='d-flex flex-column align-items-center w-100 mb-3'>
                          <p className='text-primary p-0 m-0'>Display Ports</p>
                          <hr className='w-100 p-0 m-1'></hr>
                          <div className='card-text'>
                            {build.gpu.display_port}
                          </div>
                        </div>
                      </div>
                      <div className='col-sm-6'>
                        <div className='d-flex flex-column align-items-center w-100 mb-3'>
                          <p className='text-primary p-0 m-0'>Chipset</p>
                          <hr className='w-100 p-0 m-1'></hr>
                          <div className='card-text'>{build.gpu.chipset}</div>
                        </div>
                        <div className='d-flex flex-column align-items-center w-100 mb-3'>
                          <p className='text-primary p-0 m-0'>Height</p>
                          <hr className='w-100 p-0 m-1'></hr>
                          <div className='card-text text-nowrap'>
                            {build.gpu.height}
                          </div>
                        </div>
                        <div className='d-flex flex-column align-items-center w-100 mb-3'>
                          <p className='text-primary p-0 m-0'>Length</p>
                          <hr className='w-100 p-0 m-1'></hr>
                          <div className='card-text text-nowrap'>
                            {build.gpu.length}
                          </div>
                        </div>
                        <div className='d-flex flex-column align-items-center w-100 mb-3'>
                          <p className='text-primary p-0 m-0'>Width</p>
                          <hr className='w-100 p-0 m-1'></hr>
                          <div className='card-text'>{build.gpu.width}</div>
                        </div>
                        <div className='d-flex flex-column align-items-center w-100 mb-3'>
                          <p className='text-primary p-0 m-0'>Hdmi Ports</p>
                          <hr className='w-100 p-0 m-1'></hr>
                          <div className='card-text'>{build.gpu.hdmi}</div>
                        </div>
                      </div>
                    </div>
                  </p>
                </p>
              </div>
            </div>

            <div className='col-sm-4'>
              <div className='card bg-dark border border-primary w-5'>
                <h5 className='card-title text-white p-3'>PSU</h5>
                <p className='d-flex flex-column card-text text-white px-4'>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <div className='d-flex flex-column align-items-center w-100 mb-3'>
                        <p className='text-primary p-0 m-0'>Brand</p>
                        <hr className='w-100 p-0 m-1'></hr>
                        <div className='card-text'>{build.psu.brand}</div>
                      </div>
                      <div className='d-flex flex-column align-items-center w-100 mb-3'>
                        <p className='text-primary p-0 m-0'>Wattage</p>
                        <hr className='w-100 p-0 m-1'></hr>
                        <div className='card-text'>{build.psu.wattage}</div>
                      </div>
                      <div className='d-flex flex-column align-items-center w-100 mb-3'>
                        <p className='text-primary p-0 m-0'>Atx Connector</p>
                        <hr className='w-100 p-0 m-1'></hr>
                        <div className='card-text'>
                          {build.psu.atx_12v_connector}
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='d-flex flex-column align-items-center w-100 mb-3'>
                        <p className='text-primary text-nowrap p-0 m-0'>
                          Graphics Connector
                        </p>
                        <hr className='w-100 p-0 m-1'></hr>
                        <div className='card-text'>
                          {build.psu.graphics_connector}
                        </div>
                      </div>
                      <div className='d-flex flex-column align-items-center w-100 mb-3'>
                        <p className='text-primary text-nowrap p-0 m-0'>
                          Molex Connector
                        </p>
                        <hr className='w-100 p-0 m-1'></hr>
                        <div className='card-text'>
                          {build.psu.molex_connector}
                        </div>
                      </div>
                      <div className='d-flex flex-column align-items-center w-100 mb-3'>
                        <p className='text-primary text-nowrap p-0 m-0'>
                          Sata Connector
                        </p>
                        <hr className='w-100 p-0 m-1'></hr>
                        <div className='card-text'>
                          {build.psu.sata_connector}
                        </div>
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DetailBuild;
