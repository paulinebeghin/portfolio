import { useParams } from "react-router-dom";
import { Carousel } from "@/ui/components/Carousel"
import { LinkDetailProjet } from "../data/LinkDetailProjet";

interface DetailProps {
  id: string;
  title: string;
  slug: string;
  description: string[];
  image: string[];
  lien?: string[];
}

export const DetailProjet = () => {

  const { slug } = useParams<{ slug: string }>();

  const projet = LinkDetailProjet.find((p) => p.slug === slug);


  if (!projet) {
    return <div className="mt-40 text-center">Projet introuvable</div>;
  }

  return (
    <div className="relative min-h-screen flex items-center mt-30 px-4">
        {/* diap */}
        <div>
            <Carousel images={projet.image} />
            <Carousel>  </Carousel>
        </div>

      <div className="text-typo min-w-[300px] ">
        <h1 className="text-2xl font-bold ">{projet.title}</h1>
        
        <div className="grid gap-4 ">
          {projet.description.map((phrase, index) => (
            <p key={index} className="text-lg leading-relaxed">
              {phrase}
            </p>
          ))}
        </div>

        {/* Affichage des images du projet */}
        {/* <div className="grid gap-6">
          {projet.image.map((imgUrl, index) => (
            <img 
              key={index} 
              src={imgUrl} 
              alt={`${projet.title} - ${index}`} 
              className="w-full rounded-2xl shadow-lg"
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};