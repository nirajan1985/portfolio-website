import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Certificate from "./components/Certificate/Certificate";
import Skill from "./components/skill/Skill";
import Contact from "./components/contact/Contact";
import Error from "./components/Error";
import Intro from "./components/intro/Intro";
import Project from "./components/project/Project";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Intro /> <Project />,
          </>
        ),
      },
      {
        path: "/certificate",
        element: <Certificate />,
      },
      {
        path: "/skill",
        element: <Skill />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
