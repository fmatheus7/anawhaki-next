import React from "react";
import Image from "next/image";

const SideCard = ({ description, img, title }) => {
  return (
    <div className='max-w-xl'>
      <div className='card lg:card-side bg-base-100 shadow-xl'>
        <figure>
          <Image
            src={img}
            alt='Album'
            className='rounded-xl'
            width={400}
            height={400}
          />
        </figure>
        <div className='card-body tracking-tighter'>
          <h2 className='card-title'>{title}</h2>
          <p className='text-ellipsis leading-normal '>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SideCard;
