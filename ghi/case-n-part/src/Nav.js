import { NavLink } from "react-router-dom";
import { Button } from "./cnp-css";

const links = [
  { name: "Case n Parts", path: "/" },
  { name: "My Builds", path: "/builds" },
  { name: "Create Builds", path: "/create" },
  { name: "Top Builds", path: "/toprated" },
];

function Nav() {
  return (
    <nav>
      {links.map((link, index) => (
        <NavLink key={index} to={link.path} exact activeClassName="current">
          <Button>{link.name}</Button>
        </NavLink>
      ))}
    </nav>
  );
}

// function Nav() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//       <div className="container-fluid" id="work">
//         <NavLink stlye={Button} to="/">
//           Case n Parts
//         </NavLink>
//         <div className="p-2 dropdown">
//           <NavLink className="btn btn-secondary dropdown-toggle" to="#">
//             Create Build
//           </NavLink>
//         </div>
//         <div className="p-2 dropdown">
//           <NavLink className="btn btn-secondary dropdown-toggle" to="#">
//             My Builds
//           </NavLink>
//           <div>
//             <NavLink className="dropdown-item" to="/appointments/">
//               User Builds
//             </NavLink>
//           </div>
//         </div>
//         <div className="p-2 dropdown">
//           <NavLink className="btn btn-secondary dropdown-toggle" to="#">
//             View Builds
//           </NavLink>
//           <div>
//             <NavLink className="dropdown-item" to="/salesperson">
//               List Builds
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
export default Nav;
