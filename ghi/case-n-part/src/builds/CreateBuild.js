import React, { useEffect, useState } from "react";

import CpuList from "../parts/CpuFetch";
import GpuList from "../parts/GpuFetch";
import HddList from "../parts/HddsFetch";
import MoboList from "../parts/MoboFetch";
import PsuList from "../parts/PsuFetch";
import RamList from "../parts/RamFetch";

import CpuTable from "../parts/CpuTable";
import GpuTable from "../parts/GpuTable";
import HddTable from "../parts/HddTable";
import PsuTable from "../parts/PsuTable";
import RamTable from "../parts/RamTable";

function CreateBuild() {
  const [state, setState] = useState({
    color: "",
    size: "",
  });
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);

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

  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-sm-1">PSU</div>
        <div className="col-sm-1">GPU</div>
        <div className="col-sm-1">CPU</div>
        <div className="col-sm-1">HDD</div>
        <div className="col-sm-1">RAM</div>
      </div>
      <div className="row justify-content-md-center">
        <div className="col-md-3 offset-md-3">
          <img
            src="https://live.staticflickr.com/65535/52130464139_8c2cbf315a_z.jpg"
            alt="empty case"
          />
        </div>

        <div className="col-md-3 offset-md-3 ">
          <select
            onChange={handleChange}
            value={state.colors}
            name="color"
            id="color"
            className="form-select w-75"
            required
          >
            <option value="">Choose a color</option>
            {colors.map((color) => {
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
            name="color"
            id="color"
            className="form-select w-75"
            required
          >
            <option value="">Choose a size</option>
            {sizes.map((size) => {
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
