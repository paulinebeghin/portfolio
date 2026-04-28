import { RouterProvider } from "react-router-dom";
import { router } from "./Router"; // Vérifie que le chemin vers ton fichier Router est bon

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;