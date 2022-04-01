import { Content } from "./Content";
import { useState } from "react";
import { LeftSideBarNavbar } from "./LeftSideNavbar";
import Navigate from "./Navigate";
import { RightSidebar } from "./RightSideBar";
import "../App.scss";

export const Home = () => {
  const [mobileMenu, setmobileMenu] = useState(false);

  const toggle = () => {
    setmobileMenu(!mobileMenu);
  };

  return (
    <>
      <Navigate openMenu={toggle} />
      <main className="main-container">
        <LeftSideBarNavbar burgerMenu={mobileMenu} closeMenu={toggle} />
        <Content />
        <RightSidebar />
      </main>
    </>
  );
};
