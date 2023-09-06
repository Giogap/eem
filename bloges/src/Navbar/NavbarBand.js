import React from "react";
import { Link } from "react-router-dom";

const NavbarBand = ({ id }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={`/Biography/${id}`}>Biografía</Link>
          </li>
          <li>
            <Link to={`/Multimedia/${id}`}>Multimedia</Link>
          </li>
          <li>
            <Link to={`/Products/${id}`}>Productos</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavbarBand;
