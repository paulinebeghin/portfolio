import { AnimatePresence, motion } from "framer-motion";
import { Blob } from "../component/animation/Blob";
import { X } from "lucide-react";
import { LinkNav, LinkNavContact } from "../data/LinkNav";
import { useEffect, useRef } from "react"; // N'oublie pas d'importer ces deux-là

export const BurgerMenu = ({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: () => void }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Détecte le clic sur TOUTE la page
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Si le menu est ouvert ET que le clic n'est PAS dans menuRef (le blob)
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        toggleMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleMenu]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-100 overflow-hidden pointer-events-none" 
        >
          {/* LE CONTENEUR DU MENU (C'est lui qu'on surveille avec menuRef) */}
          <div 
            ref={menuRef}
            className="absolute top-0 right-0 h-full w-75 md:w-112.5 pointer-events-auto"
          >
            {/* 1. LE BLOB (Décoration en fond) */}
            <div className="absolute -top-30 -right-35 w-112.5 h-125 md:-top-20 md:-right-100 md:w-225 md:h-150 z-0 transition-all duration-500">
              <Blob followMouse={false} />
            </div>

            {/* 2. LE CONTENU (Navigation et bouton) */}
            <nav className="relative z-10 flex flex-col items-end top-8 right-8 h-full">
              <button 
                onClick={toggleMenu} 
                className="text-main rounded-full font-bold cursor-pointer mb-10"
              >
                <X size={32} />
              </button>
          
              <div className="grid gap-2 ">
                  <LinkNav/>
                  <p className="text-main font-bold mt-4">Contact</p>
                  <LinkNavContact/>
              </div>
            </nav>
          </div>
          
        </motion.div>
      )}
    </AnimatePresence>
  );
};