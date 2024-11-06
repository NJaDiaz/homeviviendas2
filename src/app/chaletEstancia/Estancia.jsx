"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Estancia = () => {
  const images = [
    "/img/estancia/1.jpg",
    "/img/estancia/2.jpg",
    "/img/estancia/5.png",
    "/img/estancia/6.png",
  ];

  const [mainImage, setMainImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleThumbnails, setVisibleThumbnails] = useState(4);

  useEffect(() => {
  
    const updateVisibleThumbnails = () => {
      setVisibleThumbnails(window.innerWidth >= 768 ? 4 : 3);
    };

    updateVisibleThumbnails(); 

  
    window.addEventListener("resize", updateVisibleThumbnails);

    return () => window.removeEventListener("resize", updateVisibleThumbnails);
  }, []);

  const handleImageClick = (index) => {
    setMainImage(images[index]);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % images.length;
        setMainImage(images[newIndex]);
        return newIndex;
      });
    }, 7000);

    return () => clearInterval(interval);
  }, [images]);

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex < images.length - visibleThumbnails) setStartIndex(startIndex + 1);
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="max-w-4xl my-11 mx-auto px-6">
        
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8"
        >
          Chalet Estancia
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-700 dark:text-gray-200 text-center mb-12"
        >
Descubre nuestro exclusivo Chalet Estancia, diseñado para ofrecer el máximo confort y funcionalidad en un entorno espacioso y acogedor. Esta propiedad es ideal para familias que buscan una combinación perfecta de estilo y practicidad. Cocina/Comedor, con acabados de alta calidad se fusionan armoniosamente con el comedor, creando un espacio ideal para compartir momentos. El chalet cuenta con un baño diseñado con materiales de primera calidad y una distribución optimizada para proporcionar comodidad y estilo. Ofrecemos opciones de 2 o 3 dormitorios, cada uno diseñado para maximizar el espacio. La distribución del chalet ha sido cuidadosamente planificada para ofrecer espacios amplios y fluidos.         </motion.p>

        
        <div className="grid gap-4 mb-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <img src={mainImage} alt="Imagen Principal Chalet Estancia" className="w-full h-96 md:h-[700px] object-cover object-center rounded-lg" />
          </motion.div>

          <div className="flex items-center justify-center gap-2">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="px-2 py-1 text-gray-500 dark:text-gray-300 disabled:opacity-50"
            >
              ←
            </button>

            <div className="flex overflow-hidden w-[250px] md:w-[350px]">
              {images.slice(startIndex, startIndex + visibleThumbnails).map((image, index) => (
                <motion.div
                  key={index + startIndex}
                  onClick={() => handleImageClick(index + startIndex)}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer overflow-hidden rounded-lg shadow-sm w-1/3 md:w-1/4 px-1"
                >
                  <img
                    src={image}
                    alt={`Chalet Estancia ${index + startIndex + 1}`}
                    className="h-20 w-full object-cover rounded-lg"
                  />
                </motion.div>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={startIndex >= images.length - visibleThumbnails}
              className="px-2 py-1 text-gray-500 dark:text-gray-300 disabled:opacity-50"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estancia;
