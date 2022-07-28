import React from "react";
import Image from "next/image";

// TODO: Make a link {Opitional} to external galery
const Galery = ({ image, width, height }) => {
  return (
    <div className='container px-5 py-2 mx-auto lg:pt-12 lg:px-32'>
      <div className='container px-5 py-2 mx-auto lg:pt-12 lg:px-32'>
        <div className='flex flex-wrap -m-1 md:-m-2'>
          {image.map((img, i) => (
            <div key={i} className='flex flex-wrap w-1/3'>
              <div className='w-full p-1 md:p-2'>
                <Image
                  alt='gallery'
                  className=' object-cover object-center w-full h-full rounded-lg'
                  src={img}
                  width={width}
                  height={height}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Galery;
