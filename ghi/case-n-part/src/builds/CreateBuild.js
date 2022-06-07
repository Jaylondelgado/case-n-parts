import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CpuList from "./CpuFetch";
import GpuList from "./GpuFetch";
import HddList from "./HddsFetch";
import MoboList from "./MoboFetch";
import PsuList from "./PsuFetch";
import RamList from "./RamFetch";

import CpuTable from "./CpuTable";
import GpuTable from "./GpuTable";
import HddTable from "./HddTable";
import PsuTable from "./PsuTable";
import RamTable from "./RamTable";

function CreateBuild() {
  return <CpuTable />;
}

export default CreateBuild;
