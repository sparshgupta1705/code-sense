import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";

import router from "./routes";

import { ProblemProvider } from "./context/ProblemContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProblemProvider>
      <RouterProvider router={router} />
    </ProblemProvider>
  </React.StrictMode>
);