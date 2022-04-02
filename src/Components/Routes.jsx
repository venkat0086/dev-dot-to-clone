import { Routes, Route } from "react-router-dom";
import { VideoSection } from "./Video";
import { Home } from "./Home";
import Signup from "./Signup";
import Login from "./Login";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/videos" element={<VideoSection />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
