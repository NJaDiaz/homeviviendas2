"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const slides = [
  {
    title: "Bienvenido a tu nuevo hogar",
    description: "Descubre el lugar donde comienzan tus sueños.",
    buttonText: "Síguenos en nuestras redes",
    buttonHref: "#",
    icons: [
      { icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=100083484181892" },
      { icon: FaInstagram, href: "https://www.instagram.com/home.viviendas/" }
    ]
  },
  {
    title: "No dejes pasar esta oportunidad increíble",
    description: "",
    buttonText: "Contacto",
    buttonHref: "/contacto",
    icons: []
  },
  {
    title: "El siguiente cambio puede ser el tuyo",
    description: "",
    buttonText: "Proyectos",
    buttonHref: "/proyectos",
    icons: []
  }
];

const slideVariants = {
  enter: { opacity: 0, x: 100 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 }
};

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('./img/fondos/fondo.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-8 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          initial="enter"
          animate={index === currentSlide ? "center" : "exit"}
          variants={slideVariants}
          transition={{ duration: 1 }}
        >
          <div className="relative z-10 mt-3">
            <h1 className="text-4xl md:text-6xl font-bold">{slide.title}</h1>
            {slide.description && (
              <p className="mt-4 text-lg md:text-xl">{slide.description}</p>
            )}
            <div className="mt-6">
              {slide.icons.length > 0 ? (
                <div className="flex justify-center gap-4">
                  {slide.icons.map((icon, idx) => (
                    <a key={idx} href={icon.href} className="text-white hover:text-gray-300">
                      <icon.icon className="ml-2 text-2xl" />
                    </a>
                  ))}
                </div>
              ) : (
                <a
                  href={slide.buttonHref}
                  className="px-8 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200"
                >
                  {slide.buttonText}
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroCarousel;
