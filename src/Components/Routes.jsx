import { Routes, Route } from "react-router-dom";
import { VideoSection } from "./Video";
import { Home } from "./Home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/videos" element={<VideoSection />} />
    </Routes>
  );
};
