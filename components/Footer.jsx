import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaHome,
  FaPhone,
} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import Link from "next/link";

// TODO: SWITCH FOOTER INFOS FOR REAL ONES

const Footer = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <footer className='text-center lg:text-left bg-gray-100 text-gray-600'>
        <div className='flex justify-center items-center lg:justify-between p-6 border-b border-gray-300'>
          <div className='mr-12 hidden lg:block'>
            <span>Get connected with us on social networks:</span>
          </div>
          <div className='flex justify-center'>
            <a
              href='https://www.facebook.com/ANAWHAKI'
              target='_blank'
              className='mr-6 text-gray-600'>
              <FaFacebook size={30} />
            </a>
            <a
              href='https://www.instagram.com/anawhakineoxamanismo/'
              target='_blank'
              className='mr-6 text-gray-600'>
              <FaInstagram size={30} />
            </a>
            <a
              href='https://web.whatsapp.com/'
              target='_blank'
              className='mr-6 text-gray-600'>
              <FaWhatsapp size={30} />
            </a>
          </div>
        </div>
        <div className='mx-6 py-10 text-center md:text-left'>
          <div className='grid grid-1 grid-cols-2  gap-8'>
            <div className=''>
              <h6 className='uppercase font-semibold mb-4 flex justify-center md:justify-start'>
                Conheça-nos
              </h6>
              <p className='mb-4'>
                <Link href='/retreats' className='text-gray-600'>
                  Retiros
                </Link>
              </p>
              <p className='mb-4'>
                <Link href='/events' className='text-gray-600'>
                  Eventos
                </Link>
              </p>
              <p className='mb-4'>
                <Link href='/events' className='text-gray-600'>
                  Cerimonias
                </Link>
              </p>
              <p className='mb-4'>
                <Link href='/medicines' className='text-gray-600'>
                  Medicinas
                </Link>
              </p>
              <p className='mb-4'>
                <Link href='/services' className='text-gray-600'>
                  Serviços
                </Link>
              </p>
            </div>
            <div className=''>
              <h6 className='uppercase font-semibold mb-4 flex justify-center md:justify-start'>
                Entre em contato
              </h6>
              <p className='flex items-center justify-center md:justify-start mb-4'>
                <FaHome size={20} /> Penafiel - Porto / PORTUGAL
              </p>
              <p className='flex items-center justify-center md:justify-start mb-4'>
                <MdAlternateEmail size={20} /> anawhaki@anawhaki.com
              </p>
              <p className='flex items-center justify-center md:justify-start mb-4'>
                <FaPhone size={20} /> +351 912 123 123
              </p>
              <p className='flex items-center justify-center md:justify-start mb-4'>
                <FaWhatsapp size={20} /> +351 912 123 123
              </p>
            </div>
          </div>
        </div>
        <div className='text-center p-6 bg-gray-200'>
          <span>© 2022 Copyright:</span>
          <a
            className='text-gray-600 font-semibold'
            href='https://fmatheus.vercel.app/'>
            Desing by fMatheus
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
