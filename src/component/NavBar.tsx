import { useState } from "react";
import { BurgerMenu } from "./BurgerMenu";
import { Menu } from 'lucide-react';
import { Link } from "react-router-dom";

    export const NavBar = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
    
      return (
        <div className="w-full">

<div className="relative flex justify-between items-center w-full  ">
    
    <div>
      <Link to="/"><img src="/logo.svg" alt="Logo" className="w-12 h-auto bg-main rounded-full" /></Link>
        
    </div>

    <button 
        onClick={() => setIsMenuOpen(true)}
        className="z-60 rounded-xl text-seconds"
    >
        <Menu />
    </button>

    <BurgerMenu isOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(false)} /> 
</div>
        </div>
          
      );
    };