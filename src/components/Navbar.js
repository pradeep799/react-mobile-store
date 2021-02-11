import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-center">
        <div className="logo">
          <h1>
            <Link to="/" className="logo__link">
              My<span>Logo</span>
            </Link>
          </h1>
        </div>
        <ul className="navbar">
          <li>
            <Link to="/" className="nav__links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/store" className="nav__links">
              Store
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav__links">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
