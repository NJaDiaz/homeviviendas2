"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

export const Proyectos = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "./img/proyectos/1.jpg",
    "./img/proyectos/2.jpg",
    "./img/proyectos/4.jpg",
    "./img/proyectos/5.jpg",
    "./img/proyectos/6.jpg",
    "./img/proyectos/8.jpg",
    "./img/estancia/3.jpg"
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section id="proyectos"
      className="relative py-20 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl font-bold mb-4"
        >
          Te mostramos algunos de nuestros proyectos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-white text-lg mb-12"
        >
          Consegui tu próxima casa al mejor precio
        </motion.p>

        <div className="w-full max-w-4xl mx-auto relative">
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full z-10 hidden sm:block"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full z-10 hidden sm:block"
          >
            ❯
          </button>
          <div className="overflow-hidden relative" {...handlers}>
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={images[activeIndex]}
                alt={`Slide ${activeIndex}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-96 object-cover rounded-xl 2xl:h-[34rem] 2xl:max-w-7xl"
              />
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              className={`w-4 h-4 rounded-full ${
                i === activeIndex ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
