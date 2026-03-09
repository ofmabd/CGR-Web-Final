import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import HRServices from "./pages/HRServices";
import Training from "./pages/Training";
import Careers from "./pages/Careers";
import ResourceHub from "./pages/ResourceHub";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/hr-services",
    Component: HRServices,
  },
  {
    path: "/training",
    Component: Training,
  },
  {
    path: "/careers",
    Component: Careers,
  },
  {
    path: "/resources",
    Component: ResourceHub,
  },
  {
    path: "/contact",
    Component: Contact,
  },
  {
    path: "*",
    Component: Home, // Fallback to home for any unknown routes
  },
]);
