import { Link } from "react-router-dom";
import { Button } from "../component/button/Button";

export const LinkNav = () => {
    const links = [
        {
            text: "Voir mes projets",
            link : "/"
        },
        {
            text: "Voir mes centre d'intérêt",
            link : "/personnages"
        },
        {
            text: "En savoir plus",
            link : "/livres"
        },
    ]
   return (
    <nav className="w-full md:w-auto   ">

      <ul >
        {links.map((link, index) => (
          <li key={index}>
            <Button label={link.text} link={link.link} colorCreme={true} horizontalArrow={true} />
          </li>
        ))}
      </ul>
      
    </nav>
  );
}
export const LinkNavContact = () => {
    const links = [
        {
            text: "Mail",
            link : "/"
        },
        {
            text: "GitHub",
            link : "/personnages"
        },
        {
            text: "Instagram",
            link : "/livres"
        },
        
    ]
   return (
    <nav className="w-full md:w-auto   ">
     
      <ul >
        {links.map((link, index) => (
          <li key={index}>
            <Button label={link.text} link={link.link} colorCreme={true} horizontalArrow={true} />
          </li>
        ))}
      </ul>
      
    </nav>
  );
}