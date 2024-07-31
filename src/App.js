import React from "react";

import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import Project from "./components/project/Project";
import Certificate from "./components/Certificate/Certificate";
import Skill from "./components/skill/Skill";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { createBrowserRouter, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
export default App;
