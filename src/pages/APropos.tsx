import { Blob } from "../component/animation/Blob";
import { Button } from "../component/button/Button";

export const APropos = () => {
  return (
    <div className="flex flex-col md:flex-row mt-30 justify-center items-center md:justify-items-normal  gap-20 overflow-visible">
      
      {/* BLOC IMAGE + BLOB */}
      <div className="relative flex items-center justify-center h-87.5 sm:min-h-125">
        
        {/* Le Blob : on utilise 'absolute' mais SANS 'inset-0' pour mieux contrôler sa taille */}
        <div className="absolute z-0 w-75 h-75 sm:w-200 sm:h-200 flex items-center justify-center">
             <Blob followMouse={false} />
        </div>

        {/* L'image : On s'assure qu'elle n'a pas de contraintes de rognage */}
        <img 
          src="/home/portraitHome.svg" 
          alt="Portrait" 
          className="relative z-10 max-w-56 sm:w-96 h-auto block" 
          style={{ filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.1))" }}
        />
      </div>

      {/* BLOC TEXTE */}
      <div className="xs:w-102.75 justify-center items-center text-typo text-center sm:text-left grid gap-5 z-20">
        
        <p className="">
          Moi, c'est Pauline. Mon quotidien se partage entre les lignes de code et les palettes de couleurs. En tant que graphiste et développeuse Full Stack, j'aime créer. Quand je ne suis pas devant un écran, je dessine ou lis des passions qui affûtent mon regard et mon souci du détail. Mon but ? Ne jamais cesser d'apprendre et d'évoluer.
        </p>
        <Button label="curriculum vitae" link="/a-propos" colorCreme={false} horizontalArrow={false}  />
      </div>

    </div>
  );
};