import { Routes, Route } from "react-router-dom";
import { Content } from "./Content";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
    </Routes>
  );
};
