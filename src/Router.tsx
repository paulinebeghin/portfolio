import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./Layout";

export const router = createBrowserRouter([
  {
    element: <Layout />, 
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/projets",
        element: <Home />
      },
      {
        path: "/centres-d-interet",
        element: <Home />
      },
      {
        path: "/a-propos",
        element: <Home />
      },
     
    ]
  }
])