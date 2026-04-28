import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./Layout";
import { APropos } from "./pages/APropos";
import { Projets } from "./pages/Projets";

export const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/projets",
        element: <Projets/>,
      },
      {
        path: "/centres-d-interet",
        element: <Home/>,
      }, 
      {
        path: "/a-propos",
        element: <APropos/>,
      },
    ],
  },
])