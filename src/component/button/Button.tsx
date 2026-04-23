import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ButtonProps {
  label: string;
  horizontalArrow?: boolean;
  colorCreme: boolean;
  personalizedClass?: string;
  link:string;

}
// underline souligne le texte a mettre dans le hoover
export const Button = ({ label, colorCreme, link, horizontalArrow, personalizedClass }: ButtonProps) => {
  return (
    <Link to={link}>
  <button 
    className={ 
      (personalizedClass || (colorCreme ? " text-[#FFCEAC] hover:underline cursor-pointer" : " text-[#2A016A] hover:underline cursor-pointer ")) 
      + " flex items-center justify-center gap-1" 
    } 
  >
    {horizontalArrow ?  <ArrowRight /> : <ArrowDown />}
    <span>{label}</span>
  </button>
</Link>
  );
};