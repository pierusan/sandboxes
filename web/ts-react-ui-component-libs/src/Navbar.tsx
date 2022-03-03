import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ links }: { links: [string, string][] }) => (
  <nav className="navbar">
    <ol>
      {links.map(([tabName, linkPath]) => (
        <li key={tabName}>
          <NavLink to={linkPath}>{tabName}</NavLink>
        </li>
      ))}
    </ol>
  </nav>
);

export { Navbar };
