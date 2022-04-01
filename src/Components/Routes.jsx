import { Routes, Route } from "react-router-dom";
import { Content } from "./Content";
import { VideoSection } from "./Video";
import { LeftSideBarNavbar } from "./LeftSideNavbar";

export const Router = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Content />} /> */}
      <Route path="/" element={<LeftSideBarNavbar />} />
      <Route path="/videos" element={<VideoSection />} />
    </Routes>
  );
};
