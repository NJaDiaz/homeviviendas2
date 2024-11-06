"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Minimalista = () => {
  const images = [
    "/img/minimalista/8.jpg",
    "/img/minimalista/F1.png",
    "/img/minimalista/t1.jpg",
    "/img/minimalista/t2.jpg",
    "/img/minimalista/t3.jpg",
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
          Chalet Minimalista
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-700 dark:text-gray-200 text-center mb-12"
        >
El modelo cuenta con 2 dormitorios, 2 baños uno de ellos en suite, 1 cocina funcional y salón comedor abierto que ofrece un espacio de convivencia ideal para la familia. Cada centímetro de la casa está optimizado para proporcionar la máxima funcionalidad.
con materiales sostenibles y técnicas de construcción modernas, es una solución habitacional que no compromete la calidad ni el diseño. Su estructura resistente y aislamiento térmico de alta eficiencia garantizan un hogar cálido en invierno y fresco en verano, reduciendo los costos de energía.
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

export default Minimalista;
