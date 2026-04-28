import { useParams } from "react-router-dom";
import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from "@/ui/components/Carousel"
import { LinkDetailProjet } from "../data/LinkDetailProjet";

export const DetailProjet = () => {

  const { slug } = useParams<{ slug: string }>();

  const projet = LinkDetailProjet.find((p) => p.slug === slug);


  if (!projet) {
    return <div className="mt-40 text-typo text-center">Projet introuvable</div>;
  }

  return (
    <div className="relative  flex flex-col lg:flex-row  justify-center   mt-30  gap-10">
    
    
    <div className="w-full lg:w-1/2 "> 
      <Carousel slidesPerView={1} className="">
        <CarouselContent>
          {projet.image.map((imgUrl, index) => (
            <CarouselItem key={index}>
              <div className="flex items-center justify-center"> 
                <img 
                  src={imgUrl} 
                  alt={`${projet.title} - ${index}`} 
                  className="w-full h-auto rounded-2xl object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious /> 
        <CarouselNext />
         <CarouselDots />
      </Carousel>
    </div>

    {/* 3. Zone de texte */}
    <div className="text-typo w-full lg:w-1/2 max-w-xl">
      <h1 className="text-2xl font-bold mb-4">{projet.title}</h1>
      <div className="grid gap-4">
        {projet.description.map((phrase, index) => (
          <p key={index} className="">
            {phrase}
          </p>
        ))}
      </div>
    </div>

  </div>
);
 
};