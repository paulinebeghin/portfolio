import React, { useState } from "react";
import { Blob } from "../component/animation/Blob";
import { BurgerMenu } from "../component/BurgerMenu";

export const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // La div parente est en "relative"
    <div className="relative min-h-screen  flex items-center justify-center overflow-hidden">
      

      {/* BLOB EN FOND DE PAGE (Home) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Blob followMouse={true} />
      </div>

      {/* TEXTE CENTRAL */}
      <div className="relative z-10 text-center flex flex-col items-center">
         <img src="home/portraitHome.svg" alt="Portrait" className="w-60 h-auto mb-4" />
         <div className="text-[#FFCEAC]">
            <p className="text-2xl ">Je suis Pauline Beghin</p>
            <p>Je suis graphiste & développeur web full stack</p>
         </div>
      </div>
    </div>
  );
};