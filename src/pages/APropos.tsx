
import { Blob } from "../component/animation/Blob";

import { Button } from "../component/button/Button";
export const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start sm:justify-center overflow-x-hidden pt-100 sm:pt-10 sm:pt-0">
  
      {/* BLOB EN FOND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Blob followMouse={true} />
      </div>

      {/* 1. PORTRAIT (Toujours visible et centré) */}
      <div className="relative z-10 flex flex-col items-center  sm:pt-10">
        <img src="home/portraitHome.svg" alt="Portrait" className="w-28 sm:w-60 h-auto mb-4" />
      </div>

      {/* 2. BLOC SUR LE BLOB (Desktop - visible seulement si large > 640px) */}
      <div className="hidden sm:flex relative z-10 text-center flex-col gap-9 items-center p-10">
        <div className="text-main">
          <p className="text-2xl font-bold">Je suis Pauline Beghin</p>
          <p>Je suis graphiste & développeur web full stack</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Button label="Voir mes projets" link="/projets" colorCreme={true} horizontalArrow={true} />
          <Button label="Voir mes centres d'intérêt" link="/centres-d-interet" colorCreme={true} horizontalArrow={true} />
          <Button label="A propos" link="/a-propos" colorCreme={true} horizontalArrow={true} />
        </div>
      </div>

      {/* 3. BLOC EN DESSOUS DU BLOB (Mobile - visible si large < 640px) */}
      {/* On utilise mt-32 ou plus pour bien descendre en dessous de la forme orange */}
      <div className="flex sm:hidden flex-col gap-9 z-10 pb-20 mt-40"> 
        <div className="text-typo text-center px-6"> 
          <p className="text-2xl font-bold">Je suis Pauline Beghin</p>
          <p>Je suis graphiste & développeur web full stack</p>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <Button label="Voir mes projets" link="/projets" colorCreme={false} horizontalArrow={true} />
          <Button label="Voir mes centres d'intérêt" link="/centres-d-interet" colorCreme={false} horizontalArrow={true} />
          <Button label="A propos" link="/a-propos" colorCreme={false} horizontalArrow={true} />
        </div>
      </div>

    </div>
  );
};