
import { Blob } from "../component/animation/Blob";

import { Button } from "../component/button/Button";
export const Home = () => {

  return (
    // La div parente est en "relative"
    <div className="relative min-h-screen  flex items-center justify-center overflow-hidden">
      
      {/* BLOB EN FOND DE PAGE (Home) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Blob followMouse={true} />
      </div>

      {/* TEXTE CENTRAL */}
      <div className="relative z-10 text-center flex flex-col gap-4 p-20  items-center">
         <img src="home/portraitHome.svg" alt="Portrait" className="w-28 sm:w-60 sm:h-auto mb-4" />
         <div className="hidden xs:block flex flex-col gap-9 ">
            <div className="text-[#FFCEAC] ">
              <p className="text-2xl ">Je suis Pauline Beghin</p>
              <p>Je suis graphiste & développeur web full stack</p>
          </div>
          <div className="text-center flex flex-col items-center justify-center">
              <Button label="Voir mes projets" link="/projets" colorCreme={true} horizontalArrow={true} />
              <Button label="Voir mes centres d'intérêt" link="/centres-d-interet" colorCreme={true} horizontalArrow={true} />
              <Button label="A propos" link="/a-propos" colorCreme={true} horizontalArrow={true} />
          </div>
         </div>
        
         
      </div>
    </div>
  );
};