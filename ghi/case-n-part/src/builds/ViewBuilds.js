// import React, { useState, useEffect } from "react";
// import { Grid, Cell } from "styled-css-grid";

// function ViewBuildsList() {
//   const [viewBuilds, SetViewBuilds] = useState([]);

//   useEffect(() => {
//     const getCpuData = async () => {
//       const cpuResponse = await fetch("http://localhost:8000/api/caseimage/");
//       const cpuData = await cpuResponse.json();
//       setCpu(cpuData.cpus);
//     };

//     getCpuData();
//   }, []);

//   return cpus;
// }

// export default CpuList;

// function ViewBuilds() {
//   return (
//     <Grid columns={"50px 50px 50px"} justifyContent="space-evenly">
//       <Cell>
//         <img src={"src/static/black-large.jpg"} />
//       </Cell>
//       <Cell>B</Cell>
//       <Cell>C</Cell>
//     </Grid>
//   );
// }
// export default ViewBuilds;
