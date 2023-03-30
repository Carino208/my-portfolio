import React from "react";
import "./index.css";


import { Route, Routes,BrowserRouter} from "react-router-dom";

import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" index={true} element={<Home/>} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </>
  );
}

export default App;
