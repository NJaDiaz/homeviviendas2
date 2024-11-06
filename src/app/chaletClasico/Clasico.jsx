"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Clasico = () => {
  const images = [
    "/img/clasico/1.jpg",
    "/img/clasico/2.jpg",
    "/img/clasico/3.jpg",
    "/img/clasico/4.jpg",
    "/img/clasico/5.jpg",
    "/img/clasico/6.jpg",
    "/img/clasico/7.jpg",
    "/img/clasico/8.jpg",
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
          Chalet Clásico
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-700 dark:text-gray-200 text-center mb-12"

>
Este encantador chalet es un verdadero tesoro arquitectónico por la rapidez y diseño económico. Su estilo clásico y la elección de materiales de alta calidad lo convierten en un lugar acogedor y lleno de carácter. La estructura de ladrillo visto no solo es estéticamente atractiva, sino también duradera y resistente. Cuenta con cocina/comedor, 1 baño y 1/2 dormitorios
</motion.p>

        
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

export default Clasico;
