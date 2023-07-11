import { PiSquaresFourFill } from "react-icons/pi";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdAnalytics } from "react-icons/io";
import { SiMicrosoftedge } from "react-icons/si";

import { HomePage } from "./pages";

import type { Route } from "./types";

const ROUTES: Route[] = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    icon: PiSquaresFourFill,
  },
  {
    path: "/invites",
    name: "Job Invites",
    component: HomePage,
    icon: FaEnvelopeOpenText,
  },
  {
    path: "/analytics",
    name: "Analytics",
    component: HomePage,
    icon: IoMdAnalytics,
  },
  {
    path: "/profile",
    name: "My Profile",
    component: HomePage,
    icon: FaUserLarge,
  },
  {
    path: "/explore",
    name: "Explore",
    component: HomePage,
    icon: SiMicrosoftedge,
  },
];

export default ROUTES;
