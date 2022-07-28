import React from "react";
import SideCard from "./../components/SideCard";
import ayahuasca from "../public/ayahuasca.jpg";

const desc =
  "O Anawhaki é um grupo neo xamanico com uma visão estelar. Nosso intuito com as terapias energéticas, cerimonias com Plantas de Poder, cursos e iniciações é lembrar que somos sementes estelares divinas, que estamos aqui como voluntários cósmicos para ajudar este planeta no processo de evolução espiritual e que, tudo o mais que está a acontecer, faz parte dos ricos aprendizados que passamos para realizar este sagrado e honrado voluntariado cósmico. Procuramos em nosso servir resgatar nas pessoas a consciência plena da saúde, alegria, abundancia e iluminação interior. Somos inspirados pela tradição xamanica do Caminho Vermelho (Mexico), nesta tradição os saberes são passados por iniciações realizadas nas Jornadas Xamanicas, transformando o praticante num Guardião. A didática de aprendizagem durante uma Jornada Xamanica é realizada através de desafios que envolvem concentração, vínculo, aumento da capacidade de resiliência, auto superação e expansão de limitações. Honrar as práticas xamanicas atraves das tradições é uma boa maneira de estarmos profundamente conectados com as energias de cura fisica/ mental/emocional, de despertar dentro de nós os saberes e abundancia advindas dos povos ancestrais. O Anawhaki realizará em breve uma Jornada Xamanica (Busca da Visão e Animal.de Poder). Serão tres dias de intensos e transformadores trabalhos interiores.";

const Retreats = () => {
  return (
    <div className='max-w-7xl mx-auto py-4'>
      <div className='bg-gradient-to-r from-yellow-200 py-2 my-4 rounded-2xl mx-2'>
        <h1 className='font-serif text-2xl font-bold py-2 mx-2 '>
          Shamanic Retreats
        </h1>
      </div>
      <div>
        <SideCard
          title={"Busca pela visão"}
          description={desc}
          img={ayahuasca}
        />
      </div>
    </div>
  );
};

export default Retreats;
