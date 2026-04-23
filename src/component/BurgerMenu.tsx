import { AnimatePresence,  motion } from "framer-motion";
import { Blob } from "../component/animation/Blob";
import { X } from "lucide-react";
import { LinkNav, LinkNavContact } from "../data/LinkNav";


// BurgerMenu.tsx
export const BurgerMenu = ({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-100  overflow-hidden"
        >
          {/* 1. LE BLOB (Décoration en fond) */}
          {/* On le laisse seul dans sa div pointer-events-none */}
          <div className="
            absolute 
            /* Mobile */
            -top-30 -right-35 
            w-112.5 h-125

            /* pc */
            md:-top-20 md:-right-100 
            md:w-225 md:h-150 
            
            pointer-events-none z-0 
            transition-all duration-500
          ">
            <Blob followMouse={false} />
          </div>

          {/* 2. LE CONTENU (Navigation et bouton) */}
          {/* On le met en DEHORS de la div pointer-events-none */}
          <nav className="relative z-10 flex flex-col items-end top-8 right-8 h-full ">
            <button 
              onClick={toggleMenu} 
              className="  text-[#FFCEAC] rounded-full font-bold cursor-pointer"
            >
              <X />
            </button>
        
            <div>
                <LinkNav/>
                <LinkNavContact/>
            </div>
           
          </nav>
          
        </motion.div>
      )}
    </AnimatePresence>
  );
};