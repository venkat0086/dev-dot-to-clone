import { Routes, Route } from "react-router-dom";
import { VideoSection } from "./Video";
import {About } from "./About";
import { Home } from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import {Contact} from "./Contact";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/videos" element={<VideoSection />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
