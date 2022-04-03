import React, { useState } from "react";
import { FaDev } from "react-icons/fa";
import { RiNotification3Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { Link, Navigate } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../Redux/action";
import "../Styles/_navigate.scss";

const Navigation = (props) => {
  //const [showMenu, setshowMenu] = useState(false);

  const { token } = useSelector((state) => state, shallowEqual);
  //console.log(token);

  const [lobtn, setLobtn] = useState(false);

  const toggle = () => {
    setLobtn(!lobtn);
  };

  const dispatch = useDispatch();

  const logOut = () => {
    setLobtn(!lobtn);
    const action = logoutSuccess("token");
    dispatch(action);
    return <Navigate to={"/"} />;
  };

  return (
    <header className="header">
      <div className="headerContainer">
        <div
          className="headerContainer__hamburgerMenu"
          onClick={() => props.openMenu()}
        ></div>
        <Link to={`/`} className="headerContainer__logo">
          <FaDev size="3.125rem" />
        </Link>

        <div className="headerContainer__searchBox">
          <form>
            <input type="text" placeholder="Search..." aria-label="search" />
          </form>
        </div>

        <div className="headerContainer__right">
          <Link to={`/signup`}>
            <button className="btn">
              {token ? "Create Post" : "Create account"}
            </button>
          </Link>
          <i className="hidden-search">
            <FiSearch />
          </i>
          <button className="i">
            <RiNotification3Line />
          </button>
          {token ? (
            <button className="i" onClick={toggle}>
              <AiOutlineUser />
            </button>
          ) : (
            <Link to={`/Login`}>
              <button className="i">
                <AiOutlineUser />
              </button>
            </Link>
          )}

          {/* <span onClick={toggle}>
            <img src="https://picsum.photos/200" alt="Profile Pictrure" />
          </span> */}
        </div>
      </div>

      <div className={lobtn ? "dropdown-btn" : "dropdown-btn-close"}>
        <p onClick={logOut}>Sign out</p>
      </div>
    </header>
  );
};

export default Navigation;
