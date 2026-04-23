import React, { useState } from "react";
import { Blob } from "../component/animation/Blob";
import { BurgerMenu } from "../component/BurgerMenu";

export const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // La div parente est en "relative"
    <div className="relative min-h-screen bg-[#FFCEAC] flex items-center justify-center overflow-hidden">
      
      {/* BOUTON BURGER (En haut à droite) */}
      {/* <button 
        onClick={() => setIsMenuOpen(true)}
        className="fixed top-8 right-8 z-[60] p-3 rounded-xl bg-[#F95602] text-[#FFCEAC] font-bold"
      >
        Menu
      </button> */}

      {/* LE MENU BURGER */}
      {/* <BurgerMenu isOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(false)} /> */}

      {/* BLOB EN FOND DE PAGE (Home) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Blob followMouse={true} />
      </div>

      {/* TEXTE CENTRAL */}
      <div className="relative z-10 text-center flex flex-col items-center">
         <img src="home/portraitHome.svg" alt="Portrait" className="w-60 h-auto mb-4" />
         <div className="text-[#fab898]">
            <p className="text-2xl ">Je suis Pauline Beghin</p>
            <p>Je suis graphiste & développeur web full stack</p>
         </div>
      </div>
    </div>
  );
};