
import { Blob } from "../component/animation/Blob";

import { Button } from "../component/button/Button";
export const Home = () => {
  return (
    // On retire justify-center pour que le contenu puisse s'empiler naturellement vers le bas
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-x-hidden ">
      
      {/* 1. LE BLOB (FOND) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Blob followMouse={true} />
      </div>

      {/* 2. LE CONTENU (Z-10 pour être au dessus) */}
      <div className="relative z-10 flex flex-col items-center w-full p-8 sm:pt-0 sm:min-h-screen sm:justify-center">
        
        {/* PORTRAIT */}
        <img src="home/portraitHome.svg" alt="Portrait" className="w-20 sm:block sm:w-60 h-auto mb-8" />

        {/* --- VERSION DESKTOP (Sur le blob) --- */}
        <div className=" grid items-center gap-5 sm:gap-9 text-center ">
          <div className="text-main mix-blend-difference ">
            <p className="text-2xl font-bold">Je suis Pauline Beghin</p>
            <p>Je suis graphiste & développeur web full stack</p>
          </div>
          <div className="flex flex-col items-center sm:gap-2 ">
            <Button label="Voir mes projets" link="/projets" colorCreme={true} horizontalArrow={true} />
            <Button label="Voir mes centres d'intérêt" link="/centres-d-interet" colorCreme={true} horizontalArrow={true} />
            <Button label="A propos" link="/a-propos" colorCreme={true} horizontalArrow={true} />
          </div>
        </div>

        {/* --- VERSION MOBILE (Sous le blob) --- */}
        {/* mt-60 (ou plus) va pousser ce texte en bas, hors de la zone orange du blob */}
        {/* <div className="flex sm:hidden flex-col items-center gap-9 text-center mt-64 pb-20">
          <div className="text-typo px-6">
            <p className="text-2xl font-bold">Je suis Pauline Beghin</p>
            <p>Je suis graphiste & développeur web full stack</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Button label="Voir mes projets" link="/projets" colorCreme={false} horizontalArrow={true} />
            <Button label="Voir mes centres d'intérêt" link="/centres-d-interet" colorCreme={false} horizontalArrow={true} />
            <Button label="A propos" link="/a-propos" colorCreme={false} horizontalArrow={true} />
          </div>
        </div> */}

      </div>
    </div>
  );
};