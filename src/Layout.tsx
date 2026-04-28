import { Outlet } from "react-router-dom";
import { NavBar } from "./component/NavBar";

export const Layout = () => {
  return (
    <div className="max-h-screen">

      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 sm:px-20 py-8 mb-20">
        <NavBar />
      </div>
      {/* CONTENU */}
      <main className="w-full px-4 sm:px-20 ">
        <Outlet />
      </main>
    </div>
  )
};