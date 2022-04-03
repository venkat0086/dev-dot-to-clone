import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div className="f-container">
      <p>
        <span className="dev">DEV Community</span> — A constructive and
        inclusive social network for software developers. With you every step of
        your journey.
      </p>
      <p className="p1">
        Built on <span className="bltxt">Forem</span> — the{" "}
        <span className="bltxt">open source</span> software that powers{" "}
        <span className="bltxt">DEV</span> and other inclusive communities.
      </p>
      <p className="p2">
        Made with love and <span className="bltxt">Ruby on Rails.</span> DEV
        Community © 2016 - 2022.
      </p>
      <img
        className="leaf"
        src="https://image.similarpng.com/thumbnail/2021/09/Green-leaves-logo-on-transparent-background-PNG.png"
        alt=""
      />
    </div>
  );
};

export default Footer;
