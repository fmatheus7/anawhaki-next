import React from "react";
import Galery from "../../components/Galery";
import { gql, useQuery } from "@apollo/client";
import client from "../../apollo-client";
import Link from "next/link";
import Image from "next/image";

// TODO: SWITCH STATIC DATA TO API DATA CALL

const cerimoniesQuery = gql`
  query {
    ceremonies {
      title
      data
      slug
      fotos {
        url
      }
    }
  }
`;

const Cerimonies = () => {
  const { data, error, loading } = useQuery(cerimoniesQuery);

  if (loading)
    return (
      <>
        <p>Loading...</p>
      </>
    );
  if (error)
    return (
      <>
        <p>Oooops... Something went wrong</p>
      </>
    );
  console.log(data);
  const galeryImgs = data.ceremonies.map((ceremony) => ceremony.fotos[0].url);

  return (
    <div className='max-w-7xl mx-auto py-4'>
      <div className='bg-gradient-to-r from-yellow-200 py-2 my-4 rounded-2xl mx-2'>
        <h1 className='font-serif text-2xl font-bold py-2 mx-2 '>Cerimonias</h1>
      </div>
      {/* <Galery width={450} height={450} image={galeryImgs} /> */}
      <div className='ml-4 md:flex'>
        {data.ceremonies.map((cerimonie) => (
          <div key={cerimonie.slug} className='mx-auto'>
            <Link href={`/cerimonies/${cerimonie.slug}`}>
              <div className='mx auto items-center'>
                <h1>{cerimonie.title}</h1>
                <div>
                  <Image
                    src={cerimonie.fotos[0].url}
                    width={150}
                    height={150}
                    alt='/'
                    className='rounded-2xl '
                  />
                </div>
                <p className=''>{cerimonie.data}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cerimonies;
