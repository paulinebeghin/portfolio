import { useParams } from "react-router-dom";
import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from "@/ui/components/Carousel"
import {LinkPassionDraw} from "../data/LinkPassionDraw";

export const Draw = () => {

const draw = LinkPassionDraw.find((p) => p.slug === "dessin");

  if (!draw) {
    return <div className="mt-40 text-center">Dessin introuvable</div>;
  }

  return (
    <div className="relative flex flex-col lg:flex-row justify-center mt-30  gap-10">
      
      <div className="w-full lg:w-2/3 "> 
      <Carousel slidesPerView={1} className="">
        <CarouselContent>
          {draw.image.map((imgUrl, index) => (
            <CarouselItem key={index}>
              <div className="flex items-center justify-center"> 
                <img 
                  src={imgUrl} 
                  alt={`${draw.title} - ${index}`} 
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

  </div>
); 
};