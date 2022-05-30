import { NavLink } from "react-router-dom";
import { Button, Navbar } from "./static/cnpStyle";
import logo from "./static/logo.png";

const links = [
  { name: "My Builds", path: "/" },
  { name: "Create Builds", path: "/create" },
  { name: "View Builds", path: "/toprated" },
  { name: "Login", path: "/contact" },
];

function Nav() {
  return (
    <Navbar>
      {links.map((link) => (
        <NavLink to={link.path} exact activeClassName="current">
          <Button>{link.name}</Button>
        </NavLink>
      ))}
      <div>
        <img src={logo} alt="Case N Parts" width="350" />
      </div>
    </Navbar>
  );
}

export default Nav;
