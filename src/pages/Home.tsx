 // Le composant que je t'ai donné avant
// import  Blob  from "../component/animation/Blob";
import { Blob } from "../component/animation/Blob";
export const Home = () => {
  return (
    <div className="relative min-h-screen  bg-[#FFCEAC] flex items-center justify-center overflow-hidden">
      
      {/* 1. LE FOND ANIMÉ (Z-INDEX NÉGATIF) */}
      <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
        <Blob/>
      </div>

      {/* 2. LE TEXTE IMMOBILE (Z-INDEX POSITIF) */}
      <div className="relative z-10 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
          Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Abstrait</span>
        </h1>
        <p className="mt-4 text-slate-400 text-lg md:text-xl max-w-md mx-auto">
          Les formes bougent avec votre souris, mais ce message reste gravé dans le marbre.
        </p>
        <button className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-opacity-90 transition">
          Découvrir
        </button>
      </div>

    </div>
  );
};