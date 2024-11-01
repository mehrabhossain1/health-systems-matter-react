import App from "@/App";
import AboutHSM from "@/pages/about/AboutHSM";
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

      // resources
      {
        path: "/resources/overview",
        element: <Overview />,
      },
    ],
  },
]);

export default router;
