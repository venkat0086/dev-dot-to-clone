import React from "react";
import "../Styles/contact.css";
import Navigation from "./Navigate";
import Footer from "./Footer";

export const Contact = () => {
  return (
    <>
      <Navigation />
      <div className="contact">
        <h2>Contacts</h2>
        <p>DEV Community would love to hear from you!</p>
        <p>
          Email: <a href="mailto:yo@dev.to "> yo@dev.to </a>😁
        </p>
        <p>
          Twitter:{" "}
          <a href="https://twitter.com/thepracticaldev"> @thepracticaldev </a>👻
        </p>
        <p>
          Report a vulnerability:{" "}
          <a href="https://dev.to/security">dev.to/security </a> 🐛
        </p>
        <p>
          To report a bug, please create{" "}
          <a href="https://github.com/forem/forem/issues/new/choose">
            a bug report
          </a>{" "}
          in our open source repository.
        </p>
        <p>
          To request a feature, please{" "}
          <a href="https://github.com/forem/forem/discussions">
            {" "}
            start a new GitHub Discussion
          </a>{" "}
          in the Forem repo!
        </p>
      </div>
      <Footer />
    </>
  );
};
