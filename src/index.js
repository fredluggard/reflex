import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./style/style.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import ResetPassword from "./pages/ResetPassword";
import AccountPreference from "./pages/AccountPreference";
import OtherHotlines from "./components/otherHotlines";
import HomePage from "./pages/HomePage";
import ResourcesPage from "./pages/ResourcesPage";
import AllMaps from "./pages/AllMaps";
import AmbulanceMap from "./pages/AmbulanceMap";
import FireService from "./pages/FireService";
import PoliceMap from "./pages/PoliceMap";
import FrscMap from "./pages/FrscMap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/resources",
    element: <ResourcesPage />,
  },
  {
    path: "/login",
    element: <SigninPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/resetpassword",
    element: <ResetPassword />,
  },
  {
    path: "/userprofile",
    element: <AccountPreference />,
  },
  {
    path: "/tracking",
    element: <AllMaps />,
  },
  {
    path: "/otherhotlines",
    element: <OtherHotlines />,
  },
  {
    path: "/hospitals",
    element: <AmbulanceMap />,
  },
  {
    path: "/firestations",
    element: <FireService />,
  },
  {
    path: "/policestations",
    element: <PoliceMap />,
  },
  {
    path: "/frsc",
    element: <FrscMap />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
