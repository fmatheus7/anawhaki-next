import React from "react";
import Image from "next/image";

const Card = ({ title, img, desc }) => {
  return (
    <div className='container'>
      <div className='flex justify-center mx-4'>
        <div className='flex-1 flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg'>
          <Image
            className=' w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg'
            alt='/'
            src={img}
          />
          <div className='p-6 flex flex-col justify-start'>
            <h5 className='text-gray-900 text-xl font-medium mb-2'>{title}</h5>
            <p className='text-gray-700 text-base mb-4'>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
