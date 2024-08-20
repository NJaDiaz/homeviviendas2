"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const ofertas = [
  {
    title: "Oferta 1",
    description: "¡No te puedes perder esta oferta increíble!",
    image: "/img/ofertas/oferta1.jpg",
    link: "/oferta1"
  },
  {
    title: "Oferta 2",
    description: "Aprovecha antes de que termine!",
    image: "/img/ofertas/oferta2.jpg",
    link: "/oferta2"
  },
  {
    title: "Oferta 3",
    description: "¡Precios bajos por tiempo limitado!",
    image: "/img/ofertas/oferta3.jpg",
    link: "/oferta3"
  }
];

const Ofertas = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-6">
          No te puedes perder nuestra oferta
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ofertas.map((oferta, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={oferta.image}
                alt={oferta.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{oferta.title}</h3>
                <p className="text-gray-700 mb-4">{oferta.description}</p>
                <a
                  href={oferta.link}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-900 font-semibold"
                >
                  Ver oferta <FaArrowRight className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ofertas;
