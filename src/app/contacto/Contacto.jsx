"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa';

export const Contacto = () => {
  return (
    <section className=" md:relative py-16 bg-gray-100 dark:bg-gray-900 ">
      <div className="mt-6 container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl font-bold text-gray-800 dark:text-gray-100"
            >
              ¡No dudes en contactarte!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
              Brindamos la mejor calidad en cada uno de nuestros proyectos.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="flex flex-col space-y-3 text-gray-800 dark:text-gray-200">
                <p className="text-lg lg:flex  items-center">
                   <FaPhoneAlt className="mr-2 hidden items-center text-blue-600 dark:text-blue-400"  />
                  <span>Teléfonos:</span>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <a href=""
                  className="flex items-center justify-center lg:justify-start">
                    <FaPhoneAlt className="mr-2 items-center text-blue-600 dark:text-blue-400"  />
                    <strong>2664250349</strong></a>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <a href=""
                  className="flex items-center justify-center lg:justify-start">
                    <FaPhoneAlt className="mr-2 items-center text-blue-600 dark:text-blue-400"  />
                    <strong>2664846784</strong></a>
                </p>
              </div>
              <div className="text-gray-800 dark:text-gray-200">
                <p className="text-lg mb-2">Síguenos para enterarte de cada novedad en:</p>
                <div className="flex justify-center lg:justify-start space-x-4">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
                  >
                    Facebook <FaFacebookF className="ml-2 text-2xl" />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-pink-500 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-600"
                  >
                    Instagram <FaInstagram className="ml-2 text-2xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

        
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-20 lg:block lg:relative lg:w-full lg:h-60  " 
          >
            <img
              src="./img/contacto.jpg"
              alt="Constructora"
              className="rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
