import { useState } from "react";
import { BurgerMenu } from "./BurgerMenu";
import { Menu } from 'lucide-react';



    export const NavBar = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
    
      return (
        <div>
            <div className="relative">
                <button 
  onClick={() => setIsMenuOpen(true)}
  className="fixed top-8 right-8 z-[60] rounded-xl text-[#F95602] "
>
  <Menu />
</button>
      <BurgerMenu isOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(false)} /> 
            </div>
        </div>
          
      );
    };