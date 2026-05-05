import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Training from "./pages/Training";
import Jobs from "./pages/Jobs";
import ResourceHub from "./pages/ResourceHub";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./pages/About";
import NewHirePortal from "./pages/NewHirePortal";
import ForgetPassword from "./pages/ForgetPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/Services",
    Component: Services,
  },
  {
    path: "/training",
    Component: Training,
  },
  {
    path: "/Jobs",
    Component: Jobs,
  },
  // {
  //   path: "/resources",
  //   Component: ResourceHub,
  // },
  {
    path: "/Signup",
    Component: Signup,
  },
  {
    path: "/Login",
    Component: Login,
  },
  {
    path: "/contact",
    Component: Contact,
  },
  {
    path: "/About",
    Component: About,
  },
  {
    path: "/NewHirePortal",
    Component: NewHirePortal,
  },
  {
    path: "/ForgetPassword",
    Component: ForgetPassword,
  },
  {
    path: "*",
    Component: Home, // Fallback to home for any unknown routes
  },
]);
