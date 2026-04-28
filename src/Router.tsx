import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./Layout";
import { APropos } from "./pages/APropos";
import { Projets } from "./pages/Projets";
import { DetailProjet } from "./pages/DetailProjet";

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
        path: "/projets/:slug",
        element: <DetailProjet/>,
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