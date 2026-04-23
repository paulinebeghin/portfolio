import React, { useState, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { useMousePosition } from "./mousePosition";

interface BlobProps {
  followMouse?: boolean; // Nouvelle option
  className?: string;
}

export const Blob: React.FC<BlobProps> = ({ 
  followMouse = true, 
  className = "absolute inset-0" 
}) => {
  const { x, y } = useMousePosition();
  
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1920,
    height: typeof window !== 'undefined' ? window.innerHeight : 1080
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const springConfig = { stiffness: 40, damping: 15 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  useEffect(() => {
    if (followMouse) {
      smoothX.set(x);
      smoothY.set(y);
    }
  }, [x, y, smoothX, smoothY, followMouse]);

  const isMobile = windowSize.width < 768;
  const illustrationScale = isMobile ? 1.7 : 1.1; 
  const amplitude = isMobile ? 30 : 100; 

  // Si followMouse est faux, on force la valeur à 0 (centre)
  const translateX = useTransform(smoothX, [0, windowSize.width], followMouse ? [-amplitude, amplitude] : [0, 0]);
  const translateY = useTransform(smoothY, [0, windowSize.height], followMouse ? [-amplitude / 2, amplitude / 2] : [0, 0]);

  const pathA = "M126.9 -150.9C165.4 -88.4 198.2 -44.2 200.8 2.7C203.5 49.5 176 99 137.5 134C99 169 49.5 189.5 -4.8 194.3C-59.2 199.2 -118.3 188.3 -160.3 153.3C-202.3 118.3 -227.2 59.2 -238.8 -11.7C-250.5 -82.5 -249 -165 -207 -227.5C-165 -290 -82.5 -332.5 -19.1 -313.3C44.2 -294.2 88.4 -213.4 126.9 -150.9";
  const pathB = "M110.9 -130.9C150.4 -70.4 180.2 -30.2 190.8 10.7C201.5 55.5 160 110 120.5 140C80 170 40.5 195.5 -10.8 200.3C-65.2 205.2 -125.3 195.3 -170.3 160.3C-215.3 125.3 -240.2 65.2 -245.8 -5.7C-251.5 -75.5 -230 -150 -190 -210.5C-150 -270 -70.5 -310.5 -10.1 -300.3C50.2 -280.2 70.4 -190.4 110.9 -130.9";

  return (
    <div className={`${className} z-0 flex items-center justify-center pointer-events-none overflow-hidden`}>
      <svg viewBox="0 0 900 600" className="w-full h-full object-contain">
        <g transform="translate(450, 300)"> 
          <motion.path
            fill="#F95602" 
            stroke="#FFCEAC" // Couleur du contour (ex: la couleur de ton fond)
  strokeWidth="5" // Épaisseur du contour
            d={pathA}
            animate={{ d: [pathA, pathB, pathA] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ x: translateX, y: translateY, scale: illustrationScale }}
          />
        </g>
      </svg>
    </div>
  );
};