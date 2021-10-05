import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  return (
    <div id="navbar">
      <p>
        <Link to={{ pathname: `/shelf` }}>shelf</Link>
      </p>
      <p>
        <Link to={{ pathname: `/shelves` }}>shelves</Link>
      </p>
      <p>
        <Link to={{ pathname: `/cart` }}>cart</Link>
      </p>
    </div>
  );
}

export default Navbar;