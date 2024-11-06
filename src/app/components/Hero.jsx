"use client"; 

import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [showSecondaryText, setShowSecondaryText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSecondaryText((prev) => !prev);
    }, 8000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="relative h-screen bg-cover bg-center bg-[url('/img/fondos/fondo.jpg')] flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 text-white px-6"
      >
        {!showSecondaryText ? (
          <motion.div
            key="text1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold">Bienvenido a tu nuevo hogar</h1>
            <p className="text-xl md:text-2xl">Descubre el lugar donde comienzan tus sueños.</p>
            <p className="text-lg">Síguenos en nuestras redes:</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="https://www.facebook.com/profile.php?id=100083484181892" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-2xl hover:text-blue-600 transition duration-300" />
              </a>
              <a href="https://www.instagram.com/home.viviendas/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-pink-500 transition duration-300" />
              </a>
            </div>
            <a href="/contacto" className="inline-block mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300">
              Contacto
            </a>
          </motion.div>
        ) : (
          <motion.div
            key="text2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold">No dejes pasar esta oportunidad increíble</h1>
            <p className="text-xl md:text-2xl">El siguiente cambio puede ser el tuyo.</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="/contacto" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300">
                Contacto
              </a>
              <a href="#proyectos" className="inline-block px-8 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition duration-300">
                Proyectos
              </a>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;
