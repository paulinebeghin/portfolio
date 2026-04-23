import { Link } from "react-router-dom";

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

      <ul className={`text-white`}>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.link} className="hover:text-amber-500">
              {link.text}
            </Link>
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

      <ul className={`text-white`}>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.link} className="hover:text-amber-500">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
      
    </nav>
  );
}