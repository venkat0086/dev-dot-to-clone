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
      <Route path='/Signup' element= {<Signup />} />
      <Route path='/Login' element= {<Login />} />
    </Routes>
  );
};
