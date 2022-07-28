import { locatedError } from "graphql";
import React from "react";
import SideCard from "../components/SideCard";
import HCard from "./../components/HCard";
import rape from "../public/rape.jpg";
import sananga from "../public/sananga.jpg";
import ayahuasca from "../public/ayahuasca.jpg";
// TODO: SWITCH Hcard for the SideCard Component
// TODO: FIX PAGE ASPECT
const Medicines = () => {
  const reike =
    "O Reiki Xamânico é um tipo de Reiki que segue os mesmos preceitos do Reiki Tradicional de Mikao Usui, onde a canalização das energias universais ocorre através do terapeuta e o Reiki é passado através da imposição de mãos para quem está recebendo. No entanto, a técnica se baseia nos ensinamentos ancestrais, onde vivências com os quatro elementos principais da natureza reestabelece o equilíbrio energético, além de melhoras perceptíveis nos campos físico, mental, emocional e espiritual de quem recebe o Reiki Xamânico.";

  return (
    <div className='max-w-7xl mx-auto py-4 min-h-screen'>
      <div className='bg-gradient-to-r from-yellow-200 py-2 my-4 rounded-2xl mx-2'>
        <h1 className='font-serif text-2xl font-bold py-2 mx-2 '>Medicinas</h1>
      </div>
      <div className='sm:flex justify-evenly  space-x-4 mx-auto items-baseline'>
        <div className='mx-4 my-4 sm:mx-0 sm:my-0'>
          <SideCard
            title={"Ayahuasca"}
            description={
              "Ayahuasca, também conhecida como hoasca, daime, iagê, santo-daime e vegetal, é uma bebida enteógena produzida a partir da combinação da videira Banisteriopsis caapi com várias plantas, em particular a Psychotria viridis e a Diplopterys cabrerana."
            }
            img={ayahuasca}
          />
        </div>
        <div className='mx-4 my-4 sm:mx-0 sm:my-0'>
          <SideCard
            title={"Rapé"}
            description={"ayahuasca é uma bebida indígena"}
            img={sananga}
          />
        </div>
        <div className='mx-4 my-4 sm:mx-0 sm:my-0'>
          <SideCard
            title={"Kambô"}
            description={"ayahuasca é uma bebida indígena"}
            img={rape}
          />
        </div>
      </div>
    </div>
  );
};

export default Medicines;
