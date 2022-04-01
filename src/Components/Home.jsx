import { Content } from "./Content";
import { LeftSideBarNavbar } from "./LeftSideNavbar";
import Navigate from "./Navigate";

export const Home = () => {
  return (
    <>
      <Navigate />
      <main className="main-container">
        <LeftSideBarNavbar />
        <Content />
      </main>
    </>
  );
};
