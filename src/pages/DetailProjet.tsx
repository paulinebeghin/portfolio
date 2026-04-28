import { LinkProjetsDev, LinkProjetsGraph } from "../data/LinkCategory";
import { CategoryCard } from "../component/Category";

// 1. Ton interface définit la forme d'un objet "category"
interface DetailProps {
  id: string;
  title: string;
  slug: string;
  imageCategory: string;
  alt: string;
}

export const DetailProjet = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden gap-5 mt-30">
      <div className="grid gap-2">
        <p className="text-2xl font-semibold text-typo">Projets dev web</p>
        
        <div className="flex overflow-x-auto scrollbar-hide  snap-x snap-mandatory pb-4">
    {LinkProjetsDev.map((category: DetailProps) => (
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