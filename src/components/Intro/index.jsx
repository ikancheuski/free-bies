import React from "react";
import Vector from "../../img/Intro.png";
import "./style.css";

const Intro = () => {
  return (
    <div className="container">
      <div className="intro__info">
        <h1>
          Want anything to be easy with <span className="h">LaslesVPN.</span>
        </h1>
        <p>
          Provide a network for all your needs with ease and fun using <span className="p">LaslesVPN </span>
        discover interesting features from us.
        </p>
        <button className="get__started">Get Started</button>
      </div>
      <img src={Vector} alt={"Vector"} width="612" height="383" />
    </div>
  );
};
export default Intro;
