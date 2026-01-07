import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import ProjectDetails from "../Pages/ProjectDetails";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
    </Routes>
  );
}

