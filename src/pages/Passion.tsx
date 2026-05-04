
import { CategoryCard } from "../component/Category";
import { LinkPassionCategory } from "../data/LinkPassionCategory";

// 1. Ton interface définit la forme d'un objet "category"
interface CategoryProps {
  id: string;
  title: string;
  slug: string;
  imageCategory: string;
  alt: string;
}

export const Passion = () => {
  return (
    <div className="relative  flex flex-col overflow-x-hidden gap-5 mt-30 ">
     

      <div className="grid gap-10">
        <div className="sm:w-1/2">
        <p className="text-2xl font-semibold text-typo  ">Mes centres d'intérêt</p>
        <p className="text-typo  ">Ma créativité se nourrit de mes passions personnelles, qui sont pour moi de véritables outils de travail. La pratique du dessin et de la photo a affiné mon sens de la composition et du détail, tandis que mon intérêt pour la lecture et l'univers de la musique (K-pop) m'apporte une compréhension pointue des tendances visuelles actuelles. Cette polyvalence me permet d'explorer des univers variés et d'apporter une touche d'originalité à chaque projet.</p>
        </div>
        
        
       
        <div className="flex overflow-x-auto scrollbar-hide  snap-x snap-mandatory pb-4">
    {LinkPassionCategory.map((category: CategoryProps) => (
      <div 
        key={category.id} 
        className="flex-none w-72 snap-center" // flex-none empêche l'image de rétrécir
      >
        <CategoryCard category={category} />
      </div>
    ))}
  </div>
      </div>
    </div>
  );
};