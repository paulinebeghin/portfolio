import { Button } from "../component/button/Button";

export const LinkNav = () => {
    const links = [
        {
            text: "Voir mes projets",
            link : "/projets"
        },
        {
            text: "Voir mes centre d'intérêt",
            link : "/centres-d-interet"
        },
        {
            text: "A propos",
            link : "/a-propos"
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