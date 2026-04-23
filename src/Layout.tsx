import { Outlet } from "react-router-dom";
import { NavBar } from "./component/NavBar";
// import NavBar from "./navbar/NavBar";


export const Layout = () => {
  return (
    <div className="">

      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center  ">
        <NavBar />
      </div>
      {/* CONTENU */}
      <main className="w-full ">
        <Outlet />
      </main>

      {/* FOOTER
      <footer className="w-full flex justify-center">
        <Footer />
      </footer> */}

    </div>
  )
};