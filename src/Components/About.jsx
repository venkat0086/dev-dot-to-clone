import React from "react";

import "../Styles/about.css";
import Navigation from "./Navigate";
import Footer from "./Footer";

export const About = () => {
  return (
    <>
      <Navigation />
      <div className="about_main">
        <h1>About Dev</h1>
        <p>
          DEV is a community of software developers getting together to help one
          another out. The software industry relies on collaboration and
          networked learning. We provide a place for that to happen.
        </p>
        <p>
          DEV is built on <a href="https://www.forem.com/">Forem</a> : open
          source software designed to empower communities. Because our
          application is <a href="https://github.com/forem">open source</a>, you
          can inspect every little detail of the code, or chip in yourself!
          Forem is available for anyone interested in creating similar
          communities in any niche or passion. Visit our meta Forem,{" "}
          <a href="https://forem.dev/"> forem.dev</a> for more information.
        </p>
        <p>
          We believe in transparency and adding value to the ecosystem. We hope
          you enjoy poking around and participating!
        </p>
        <h3>Leadership</h3>
        <img
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--2wDjV5jB--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://res.cloudinary.com/practicaldev/image/fetch/s--S2Ud7coR--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/0r746whbdtl8uvs98uah.JPG"
          alt=""
        />
        <p>
          DEV is led by Forem's co-founders{" "}
          <a href="https://dev.to/ben"> Ben Halpern</a>,{" "}
          <a href="https://dev.to/jess">Jess Lee</a> ,
          <a href="https://dev.to/peter">Peter Frank</a> and ("PB&J").
        </p>
        <h3>Team</h3>
        <img
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--I9EX-h9C--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/twicegd1crfhbxi3m0iz.png"
          alt=""
        />
        <p>
          Our team is distributed around the world. We have no office, but we
          come together online each day to build community and improve the
          software careers of millions.
        </p>
        &nbsp;
        <p>Happy coding ❤️</p>
      </div>
      <Footer />
    </>
  );
};
