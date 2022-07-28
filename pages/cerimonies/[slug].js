import { useRouter } from "next/router";
import Cerimonies from "./index";
import { gql, useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";

//TODO: FIX
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

const CerimoniesDetails = (props) => {
  const router = useRouter();
  const slug = router.query.slug;
  const { data, error, loading } = useQuery(cerimoniesQuery);
  const imgs = data?.ceremonies.filter(
    (cerimonies) => cerimonies.slug === slug
  );

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

  return (
    <div>
      <div>
        <div className='flex-1 sm:grid grid-cols-5 max-w-7xl mx-auto py-4 gap-4 min-h-full '>
          {imgs.map((photos) =>
            photos.fotos.map((imgs) => (
              <Link
                key={imgs.url}
                href={imgs.url}
                target='_blank'
                className='cursor-pointer'>
                <Image
                  src={imgs.url}
                  width={250}
                  height={250}
                  alt='/'
                  className='cursor-pointer ml-4'
                />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CerimoniesDetails;
