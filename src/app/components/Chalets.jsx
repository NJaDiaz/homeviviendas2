"use client";
import React from "react";
import { motion } from "framer-motion";

const chalets = [
  {
    id: 1,
    image: "./img/productos/Chalets/Clasico.jpg",
    title: "Chalet Clásico",
    description: "Diseño tradicional con espacios amplios y confortables, ideal para familias grandes.",
    infoLink: "/chaletClasico"
  },
  {
    id: 2,
    image: "./img/productos/Chalets/Minimalista.jpg",
    title: "Chalet Minimalista",
    description: "Estilo moderno y funcional, con líneas limpias y espacios abiertos.",
    infoLink: "/chaletMinimalista"
  },
  {
    id: 3,
    image: "./img/productos/Chalets/Estancia.jpg",
    title: "Chalet Estancia",
    description: "Combinación de diseño moderno y tecnología avanzada para una vida cómoda y eficiente.",
    infoLink: "/chaletEstancia"
  }
];

const ChaletCard = ({ image, title, description, infoLink }) => {
  return (
    <motion.div
      className="relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
      <a href={infoLink} className="block mt-4 text-center text-blue-500 hover:underline">
        Más Info
      </a>
    </motion.div>
  );
};

const Chalets = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Tipologías de Chalets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {chalets.map(chalet => (
            <ChaletCard
              key={chalet.id}
              image={chalet.image}
              title={chalet.title}
              description={chalet.description}
              infoLink={chalet.infoLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chalets;
