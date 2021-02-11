import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Title from "./Title";
export default function Banner() {
  return (
    <header>
      <div className="banner__container">
        <Title title="Welcome to Mobile Store" />
        <Link to="/store" className="btn">
          Shop
        </Link>
      </div>
    </header>
  );
}
