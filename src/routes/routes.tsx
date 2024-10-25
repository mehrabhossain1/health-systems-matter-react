import App from "@/App";
import AboutHSM from "@/pages/about/AboutHSM";
import Home from "@/pages/home";

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
      {
        path: "/about/about-hsm",
        element: <AboutHSM />,
      },
    ],
  },
]);

export default router;
