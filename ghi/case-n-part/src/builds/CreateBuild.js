import React, { useState } from "react";
import { Link } from "react-router-dom";

function ManufacturerForm() {
  const [state, setState] = useState({
    name: "",
  });
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);

  let formClasses = "";
  let alertClasses = "alert alert-success d-none mb-0";
  let alertContainerClasses = "d-none";

  const handleSubmit = async (event) => {
    event.preventDefault();

    const manufacturerUrl = "http://localhost:8000/api/createbuild/";
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(manufacturerUrl, fetchConfig);

    if (response.ok) {
      setState({
        name: "",
      });
      setSuccessfulSubmit(true);
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  if (successfulSubmit) {
    formClasses = "d-none";
    alertClasses = "alert alert-success mb-3";
    alertContainerClasses = "";
  }
  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a new Manufacturer</h1>
          <form
            onSubmit={handleSubmit}
            id="create-Build-form"
            className={formClasses}
          >
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                value={state.name}
                placeholder="Build Name"
                required
                name="name"
                id="name"
                className="form-control"
              />
              <label htmlFor="name">Name</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
          <div className={alertContainerClasses}>
            <div className={alertClasses} id="success-message">
              Build created successfully
            </div>
            <div className="d-flex justify-content-between">
              <button
                onClick={() => setSuccessfulSubmit(false)}
                className="btn btn-primary"
              >
                Create another Build
              </button>
              <Link to="/createbuild/">
                <button className="btn btn-primary float-right">
                  View Builds
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManufacturerForm;
