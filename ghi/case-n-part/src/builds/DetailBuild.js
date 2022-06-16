import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailBuild() {
  const [build, setBuild] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getBuildData = async () => {
      const buildResponse = await fetch(
        `http://localhost:8000/api/build/${id}`
      );
      const buildData = await buildResponse.json();
      setBuild(buildData);
    };

    getBuildData();
  }, []);

  console.log("build", build);
  return (
    <h1>DetailBuild</h1>
    // <form onSubmit={handleSubmit} id='create-appointment-form'>
    //   {console.log(build)}
    //   <div className='container-fluid my-5'>
    //     <div className='row justify-content-md-center py-4 g-4 mt-4'>
    //       <div className='col-sm-1'>
    //         <button
    //           type='button'
    //           className='btn btn-outline-secondary'
    //           data-bs-toggle='modal'
    //           data-bs-target='#exampleModal'
    //         >
    //           PSU
    //         </button>
    //         <div
    //           className='modal fade'
    //           id='exampleModal'
    //           tabIndex='-1'
    //           aria-labelledby='exampleModalLabel'
    //           aria-hidden='true'
    //         >
    //           <div className='modal-dialog'>
    //             <div className='modal-content'>
    //               <div className='modal-header bg-secondary'>
    //                 <h5 className='modal-title' id='exampleModalLabel'>
    //                   PSU
    //                 </h5>
    //                 <button
    //                   type='button'
    //                   className='btn-close'
    //                   data-bs-dismiss='modal'
    //                   aria-label='Close'
    //                 ></button>{" "}
    //               </div>
    //               <div className='modal-body bg-secondary'>
    //                 {" "}
    //                 <table className='table table-hover table-dark'>
    //                   <thead>
    //                     <tr>
    //                       <th>Brand</th>
    //                       <th>Wattage</th>
    //                     </tr>
    //                   </thead>
    //                   <tbody>
    //                     {psus.map(psu => {
    //                       return (
    //                         <tr
    //                           key={psu.id}
    //                           onClick={() => handlePsuClick(psu)}
    //                           data-bs-dismiss='modal'
    //                         >
    //                           <td>{psu["brand"]}</td>
    //                           <td>{psu["wattage"]}</td>
    //                         </tr>
    //                       );
    //                     })}
    //                   </tbody>
    //                 </table>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className='col-sm-1'>
    //         <button
    //           type='button'
    //           className='btn btn-outline-secondary'
    //           data-bs-toggle='modal'
    //           data-bs-target='#exampleModals'
    //         >
    //           GPU
    //         </button>
    //         <div
    //           className='modal fade'
    //           id='exampleModals'
    //           tabIndex='-1'
    //           aria-labelledby='exampleModalLabel'
    //           aria-hidden='true'
    //         >
    //           <div className='modal-dialog'>
    //             <div className='modal-content'>
    //               <div className='modal-header bg-secondary'>
    //                 <h5 className='modal-title' id='exampleModalLabel'>
    //                   GPU
    //                 </h5>
    //                 <button
    //                   type='button'
    //                   className='btn-close'
    //                   data-bs-dismiss='modal'
    //                   aria-label='Close'
    //                 ></button>
    //               </div>
    //               <div className='modal-body bg-secondary'>
    //                 <table className='table table-hover table-dark'>
    //                   <thead>
    //                     <tr>
    //                       <th>Manufacturer</th>
    //                       <th>Chipset</th>
    //                     </tr>
    //                   </thead>
    //                   <tbody>
    //                     {gpus.map(gpu => {
    //                       return (
    //                         <tr
    //                           key={gpu.id}
    //                           onClick={() => handleGpuClick(gpu)}
    //                           data-bs-dismiss='modal'
    //                         >
    //                           <td>{gpu["manufacturer"]}</td>
    //                           <td>{gpu["chipset"]}</td>
    //                         </tr>
    //                       );
    //                     })}
    //                   </tbody>
    //                 </table>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className='col-sm-1'>
    //         <button
    //           type='button'
    //           className='btn btn-outline-secondary'
    //           data-bs-toggle='modal'
    //           data-bs-target='#exampleModaler'
    //         >
    //           CPU
    //         </button>
    //         <div
    //           className='modal fade'
    //           id='exampleModaler'
    //           tabIndex='-1'
    //           aria-labelledby='exampleModalLabel'
    //           aria-hidden='true'
    //         >
    //           <div className='modal-dialog'>
    //             <div className='modal-content'>
    //               <div className='modal-header bg-secondary'>
    //                 <h5 className='modal-title' id='exampleModalLabel'>
    //                   CPU
    //                 </h5>
    //                 <button
    //                   type='button'
    //                   className='btn-close'
    //                   data-bs-dismiss='modal'
    //                   aria-label='Close'
    //                 ></button>
    //               </div>
    //               <div className='modal-body bg-secondary'>
    //                 <table className='table table-hover table-dark'>
    //                   <thead>
    //                     <tr>
    //                       <th>Processor</th>
    //                       <th>Cores</th>
    //                       <th>Threads</th>
    //                       <th>Speed</th>
    //                     </tr>
    //                   </thead>
    //                   <tbody>
    //                     {cpus.map(cpu => {
    //                       return (
    //                         <tr
    //                           key={cpu.id}
    //                           onClick={() => handleCpuClick(cpu)}
    //                           data-bs-dismiss='modal'
    //                         >
    //                           <td>{cpu["processor"]}</td>
    //                           <td>{cpu["cores"]}</td>
    //                           <td>{cpu["threads"]}</td>
    //                           <td>{cpu["speed"]}</td>
    //                         </tr>
    //                       );
    //                     })}
    //                   </tbody>
    //                 </table>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className='col-sm-1'>
    //         <button
    //           type='button'
    //           className='btn btn-outline-secondary'
    //           data-bs-toggle='modal'
    //           data-bs-target='#exampleModale'
    //         >
    //           HDD
    //         </button>
    //         <div
    //           className='modal fade'
    //           id='exampleModale'
    //           tabIndex='-1'
    //           aria-labelledby='exampleModalLabel'
    //           aria-hidden='true'
    //         >
    //           <div className='modal-dialog'>
    //             <div className='modal-content'>
    //               <div className='modal-header bg-secondary'>
    //                 <h5 className='modal-title' id='exampleModalLabel'>
    //                   HDD
    //                 </h5>
    //                 <button
    //                   type='button'
    //                   className='btn-close'
    //                   data-bs-dismiss='modal'
    //                   aria-label='Close'
    //                 ></button>
    //               </div>
    //               <div className='modal-body bg-secondary'>
    //                 <table className='table table-hover table-dark'>
    //                   <thead>
    //                     <tr>
    //                       <th>Brand</th>
    //                       <th>Capacity</th>
    //                     </tr>
    //                   </thead>
    //                   <tbody>
    //                     {hdds.map(hdd => {
    //                       return (
    //                         <tr
    //                           key={hdd.id}
    //                           onClick={() => handleHddClick(hdd)}
    //                           data-bs-dismiss='modal'
    //                         >
    //                           <td>{hdd["brand"]}</td>
    //                           <td>{hdd["capacity"]}</td>
    //                         </tr>
    //                       );
    //                     })}
    //                   </tbody>
    //                 </table>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className='col-sm-1'>
    //         <button
    //           type='button'
    //           className='btn btn-outline-secondary'
    //           data-bs-toggle='modal'
    //           data-bs-target='#exampleModalj'
    //         >
    //           RAM
    //         </button>
    //         <div
    //           className='modal fade'
    //           id='exampleModalj'
    //           tabIndex='-1'
    //           aria-labelledby='exampleModalLabel'
    //           aria-hidden='true'
    //         >
    //           <div className='modal-dialog'>
    //             <div className='modal-content'>
    //               <div className='modal-header bg-secondary'>
    //                 <h5 className='modal-title' id='exampleModalLabel'>
    //                   RAM
    //                 </h5>
    //                 <button
    //                   type='button'
    //                   className='btn-close'
    //                   data-bs-dismiss='modal'
    //                   aria-label='Close'
    //                 ></button>
    //               </div>
    //               <div className='modal-body bg-secondary'>
    //                 <table className='table table-hover table-dark'>
    //                   <thead>
    //                     <tr>
    //                       <th>Brand</th>
    //                       <th>Memory Speed</th>
    //                     </tr>
    //                   </thead>
    //                   <tbody>
    //                     {rams.map(ram => {
    //                       return (
    //                         <tr
    //                           key={ram.id}
    //                           onClick={() => handleRamClick(ram)}
    //                           data-bs-dismiss='modal'
    //                         >
    //                           <td>{ram["brand"]}</td>
    //                           <td>{ram["memory_speed"]}</td>
    //                         </tr>
    //                       );
    //                     })}
    //                   </tbody>
    //                 </table>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className='row justify-content-md-center'>
    //       <div className='col-md-2 offset-md-3'>
    //         <img src={caseColor} alt='pc case' width='500' />
    //       </div>

    //       <div className='col-md-3 offset-md-3 '>
    //         <input
    //           onChange={name}
    //           value={nameChoice}
    //           placeholder='name'
    //           required
    //           name='name'
    //           id='name'
    //           className='form-control'
    //         />
    //         <select
    //           onChange={handleColorChange}
    //           value={selectedColor}
    //           name='color'
    //           id='color'
    //           className='form-select w-75'
    //           required
    //         >
    //           <option value=''>Choose a color</option>
    //           {colors.map(color => {
    //             return (
    //               <option key={color.id} value={color.id}>
    //                 {color.name}
    //               </option>
    //             );
    //           })}
    //         </select>
    //         <select
    //           onChange={handleSizeChange}
    //           value={selectedSize}
    //           name='size'
    //           id='size'
    //           className='form-select w-75'
    //           required
    //         >
    //           <option value=''>Choose a size</option>
    //           {sizes.map(size => {
    //             return (
    //               <option key={size.id} value={size.id}>
    //                 {size.name}
    //               </option>
    //             );
    //           })}
    //         </select>
    //         <div className='col-md-3 offset-md-3'>
    //           <button
    //             onSubmit={handleSubmit}
    //             id='create-pc-build'
    //             className='btn btn-outline-primary mt-4'
    //           >
    //             Create
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </form>
  );
}

export default DetailBuild;
