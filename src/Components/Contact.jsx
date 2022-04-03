import React from "react";
import "../Styles/contact.css";

export const Contact = () => {
  return (
    <div className="contact">
      <h1>Contacts</h1>
      <p>DEV Community would love to hear from you!</p>
      <p>
        Email: <a href=""> yo@dev.to </a>😁
      </p>
      <p>
        Twitter: <a href=""> @thepracticaldev </a>👻
      </p>
      <p>
        Report a vulnerability: <a href="">dev.to/security </a> 🐛
      </p>
      <p>
        To report a bug, please create <a href="">a bug report</a> in our open
        source repository.
      </p>
      <p>
        To request a feature, please{" "}
        <a href=""> start a new GitHub Discussion</a> in the Forem repo!
      </p>
    </div>
  );
};
