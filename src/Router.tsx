import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./Layout";
import { APropos } from "./pages/APropos";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projets",
        element: <Home />,
      },
      {
        path: "/centres-d-interet",
        element: <Home />,
      }, // <-- Vérifie bien cette virgule et cette accolade
      {
        path: "/a-propos",
        element: <APropos />,
      },
    ],
  },
])