import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CpuList from "../parts/CpuFetch";
import GpuList from "../parts/GpuFetch";
import HddList from "../parts/HddsFetch";
import MoboList from "../parts/MoboFetch";
import PsuList from "../parts/PsuFetch";
import RamList from "../parts/RamFetch";

import CpuTable from "../parts/CpuTable";
import HddTable from "../parts/HddTable";
import PsuTable from "../parts/PsuTable";
import RamTable from "../parts/RamTable";

function CreateBuild() {
  return <CpuTable />;
}

export default CreateBuild;
