"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Logo from "./Logo"; 

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 dark:bg-gray-900 dark:text-gray-300">
      <div className="border-t border-gray-600 my-4 dark:border-gray-700"></div>
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          
        
          <div className="flex justify-center lg:justify-start">
            <h1 className="font-bold text-inherit text-2xl">
              Home<span className="text-red-500">Viviendas</span>
            </h1>
          </div>

         
          <div className="flex flex-col text-center items-center lg:items-center">
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Más de 15 años de trayectoria que nos avalan
            </p>
          </div>

        
          <div className="flex flex-col items-center lg:items-start space-y-6 lg:space-y-0 lg:flex-row lg:justify-center lg:space-x-12">
            <div className="text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start space-y-3">
                <div className="flex items-center space-x-2">
                  <FaPhoneAlt className="text-xl text-gray-700 dark:text-gray-300" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">2664250349</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaPhoneAlt className="text-xl text-gray-700 dark:text-gray-300" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">2664846784</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaEnvelope className="text-xl text-gray-700 dark:text-gray-300" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">info@homeviviendas.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaWhatsapp className="text-xl text-green-400 dark:text-green-300" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">+54 9 2664 250349</span>
                </div>
              </div>
              <div className="flex justify-center lg:justify-start space-x-4 mt-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
                >
                  <FaFacebookF className="text-2xl" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-600"
                >
                  <FaInstagram className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 my-4 dark:border-gray-700"></div>

        <div className="text-center mb-3">
          <p className="text-sm text-gray-700 dark:text-gray-500">
            © HomeViviendas. Todos los derechos reservados. Los precios y descripciones en detalle se encuentran sujetos a cambios.
          </p>
        </div>
        
        <div className="border-t border-gray-600 my-4 dark:border-gray-700"></div>
        
        <div className="text-center">
          <p className="text-sm text-black dark:text-gray-200">
            Diseñado por NJD
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
