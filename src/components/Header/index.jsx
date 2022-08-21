import React from "react";
import Vector from "../../img/Vector.png";
import "./style.css";
const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={Vector} alt={"Vector"} width="147" height="37" />
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Feauters</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Testimonials</a>
          </li>
          <li>
            <a href="">Help</a>
          </li>
        </ul>
        <div className="sign__options">
          <a className="sign__in" href="">
            Sign In
          </a>
          <button className="sign__up">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
