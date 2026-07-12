import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Compiler from "./pages/Compiler/Compiler";
import Problems from "./pages/Problems/Problems";
import AIReview from "./pages/AIReview/AIReview";
import Profile from "./pages/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
    path: "compiler/:problemId",
    element: <Compiler />,
},
      {
        path: "problems",
        element: <Problems />,
      },
      {
        path: "ai-review",
        element: <AIReview />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;