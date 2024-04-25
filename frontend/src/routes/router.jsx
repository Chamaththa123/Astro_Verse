import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout";
import { Login } from "../pages/Login";
import { GuestLayout } from "../components/layouts/GuestLayout";
import { Home } from "../pages/home/Home";
import Profile from "../pages/user/Profile";
import ApodPage from "../pages/apod/ApodPage";
import MrpPage from "../pages/mrp/MrpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/userprofile",
        element: <Profile />,
      },
      {
        path: "/apod",
        element: <ApodPage />,
      },
      {
        path: "/mrp",
        element: <MrpPage />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
