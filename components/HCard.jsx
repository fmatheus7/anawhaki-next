import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

const HCard = () => {
  return (
    <div className='my-4 mx-4'>
      <div className='flex justify-center space-y-4'>
        <div className='rounded-lg shadow-lg bg-white max-w-sm'>
          <a href='#!' data-mdb-ripple='true' data-mdb-ripple-color='light'>
            <img
              className='rounded-t-lg'
              src='https://mdbootstrap.com/img/new/standard/nature/182.jpg'
              alt=''
            />
          </a>
          <div className='p-6 flex items-center justify-between'>
            <h5 className='text-gray-900 text-xl font-medium mb-2 font-bold '>
              Ayahuasca
            </h5>

            <button type='button'>
              <AiOutlineInfoCircle size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HCard;
