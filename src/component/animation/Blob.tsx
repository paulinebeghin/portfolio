import React from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { useMousePosition } from "./mousePosition"; 

export const Blob: React.FC = () => {
  const { x, y } = useMousePosition();
  // Config pour un mouvement fluide glisse
  const springConfig = { stiffness: 40, damping: 15 };
  
  const smoothX = useSpring(0, springConfig);
  const smoothY = useSpring(0, springConfig);

  React.useEffect(() => {
    smoothX.set(x);
    smoothY.set(y);
  }, [x, y, smoothX, smoothY]);

  // Déplacement du blob en fonction du curseur
  const translateX = useTransform(smoothX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [-100, 100]);
  const translateY = useTransform(smoothY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [-50, 50]);

  // SVG 
  // base
  const pathA = "M126.9 -150.9C165.4 -88.4 198.2 -44.2 200.8 2.7C203.5 49.5 176 99 137.5 134C99 169 49.5 189.5 -4.8 194.3C-59.2 199.2 -118.3 188.3 -160.3 153.3C-202.3 118.3 -227.2 59.2 -238.8 -11.7C-250.5 -82.5 -249 -165 -207 -227.5C-165 -290 -82.5 -332.5 -19.1 -313.3C44.2 -294.2 88.4 -213.4 126.9 -150.9";

  // Une variante (Forme B) pour le morphing modification valeurs pour créer le mouvement du contour de la form
  const pathB = "M110.9 -130.9C150.4 -70.4 180.2 -30.2 190.8 10.7C201.5 55.5 160 110 120.5 140C80 170 40.5 195.5 -10.8 200.3C-65.2 205.2 -125.3 195.3 -170.3 160.3C-215.3 125.3 -240.2 65.2 -245.8 -5.7C-251.5 -75.5 -230 -150 -190 -210.5C-150 -270 -70.5 -310.5 -10.1 -300.3C50.2 -280.2 70.4 -190.4 110.9 -130.9";

  return (
    <div className="fixed inset-0 -z-10 flex items-center justify-center pointer-events-none">
      <svg 
        viewBox="0 0 900 600" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-screen h-screen "
      >
        {/*garde "g transform" pour que la forme reste centrée comme sur ton original */}
        <g transform="translate(472, 361)">
          <motion.path
            fill="#FFB800" 
            d={pathA}
            animate={{
              d: [pathA, pathB, pathA]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              x: translateX,
              y: translateY,
            }}
          />
        </g>
      </svg>
    </div>
  );
};

export default Blob;