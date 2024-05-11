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
import ProfilePage from "./pages/ProfilePage";
import OtherHotlines from "./components/otherHotlines";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
    element: <ProfilePage />,
  },
  {
    path: "/otherhotlines",
    element: <OtherHotlines />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
