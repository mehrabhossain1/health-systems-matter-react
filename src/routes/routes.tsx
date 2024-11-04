import App from "@/App";
import AboutHSM from "@/pages/about/AboutHSM";
import ActivitiesAndApproach from "@/pages/about/ActivitiesAndApproach";
import Testimonials from "@/pages/about/Testimonials";
import VisionMission from "@/pages/about/VisionMission";
import Home from "@/pages/home";
import Overview from "@/pages/resources/Overview";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      // about
      {
        path: "/about/about-hsm",
        element: <AboutHSM />,
      },
      {
        path: "/about/vision-mission",
        element: <VisionMission />,
      },
      {
        path: "/about/activities-approach",
        element: <ActivitiesAndApproach />,
      },
      {
        path: "/about/testimonials",
        element: <Testimonials />,
      },

      // resources
      {
        path: "/resources/overview",
        element: <Overview />,
      },
    ],
  },
]);

export default router;
