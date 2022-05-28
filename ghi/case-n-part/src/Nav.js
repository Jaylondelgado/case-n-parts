import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      {" "}
      <div className="container-fluid" id="work">
        {" "}
        <NavLink className="navbar-brand" to="/">
          {" "}
          Case n Parts{" "}
        </NavLink>{" "}
        <div className="p-2 dropdown">
          {" "}
          <NavLink
            className="btn btn-secondary dropdown-toggle"
            to="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {" "}
            Create Build{" "}
          </NavLink>{" "}
          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            {" "}
            <NavLink className="dropdown-item" to="/manufacturers/">
              {" "}
              Create Build{" "}
            </NavLink>{" "}
          </div>{" "}
        </div>{" "}
        <div className="p-2 dropdown">
          {" "}
          <NavLink
            className="btn btn-secondary dropdown-toggle"
            to="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {" "}
            My Builds{" "}
          </NavLink>{" "}
          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            {" "}
            <NavLink className="dropdown-item" to="/technicians/">
              {" "}
              My Builds{" "}
            </NavLink>{" "}
            <NavLink className="dropdown-item" to="/appointments/">
              {" "}
              User Builds{" "}
            </NavLink>{" "}
          </div>{" "}
        </div>{" "}
        <div className="p-2 dropdown">
          {" "}
          <NavLink
            className="btn btn-secondary dropdown-toggle"
            to="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {" "}
            View Builds{" "}
          </NavLink>{" "}
          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            {" "}
            <NavLink className="dropdown-item" to="/salesperson">
              {" "}
              List Builds{" "}
            </NavLink>{" "}
          </div>{" "}
        </div>{" "}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {" "}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {" "}
            <li className="nav-item"></li>{" "}
          </ul>{" "}
        </div>{" "}
      </div>{" "}
    </nav>
  );
}
export default Nav;
