import { Link } from 'react-router-dom';

interface Category {
  id: string;
  title: string;
  slug: string;
  imageCategory: string;
  alt: string;
}

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard = ({ category }: CategoryCardProps) => (
  <Link 
    to={`/projets/${category.slug}`} 
    className="group block" // "group" permet d'activer le hover sur l'image
  >
    <div className="overflow-hidden w-64 rounded-2xl ">
      <img 
        src={category.imageCategory} 
        alt={category.alt} 
        
        className="w-full h-auto block object-contain group-hover:scale-110 transition-transform duration-500"
      />
    </div>
  </Link>
);