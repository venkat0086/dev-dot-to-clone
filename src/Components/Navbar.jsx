import React from "react";
import { FaDev } from "react-icons/fa";
import "../Css/Navbar.css";
import { RiNotification3Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="header">
      <div className="h-container">
        <a className="logo" href="#">
          <FaDev size="3.125rem" />
        </a>
      </div>
      <div className="searchbox">
        <form className="form">
          <input type="text" className="s-input" placeholder="Search..." />
          <button className="s-icon">
            <FiSearch />
          </button>
        </form>
      </div>
      <div className="h-options">
        <Link to={`/Signup`}>
          <button className="create">Create account</button>
        </Link>
        <button className="i">
          <RiNotification3Line />
        </button>
        <Link to={`/Login`}>
          <button className="i">
            <AiOutlineUser />
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
