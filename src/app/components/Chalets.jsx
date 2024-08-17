"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const chalets = [
  {
    id: 1,
    image: "./img/productos/Chalets/Clasico.jpg",
    title: "Chalet Clásico",
    description: "Diseño tradicional con espacios amplios y confortables, ideal para familias grandes.",
    infoLink: "/chalets/clasico"
  },
  {
    id: 2,
    image: "./img/productos/Chalets/Minimalista.jpg",
    title: "Chalet Minimalista",
    description: "Estilo moderno y funcional, con líneas limpias y espacios abiertos.",
    infoLink: "/chalets/minimalista"
  },
  {
    id: 3,
    image: "./img/productos/Chalets/Estancia.jpg",
    title: "Chalet Estancia",
    description: "Combinación de diseño moderno y tecnología avanzada para una vida cómoda y eficiente.",
    infoLink: "/chalets/estancia"
  }
];

const ChaletCard = ({ image, title, description, infoLink, id, onClick }) => {
  return (
    <motion.div
      layoutId={id}
      className="relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg cursor-pointer"
      onClick={onClick}
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
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Tipologías de Chalets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {chalets.map(chalet => (
            <ChaletCard
              key={chalet.id}
              id={chalet.id}
              image={chalet.image}
              title={chalet.title}
              description={chalet.description}
              infoLink={chalet.infoLink}
              onClick={() => setSelectedId(chalet.id)}
            />
          ))}
        </div>
        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId}
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
              onClick={() => setSelectedId(null)}
            >
              {chalets.find(chalet => chalet.id === selectedId) && (
                <motion.div
                  className="relative bg-white dark:bg-gray-900 p-6 rounded-lg max-w-4xl h-3/4 sm:max-h-full overflow-auto"
                  onClick={(e) => e.stopPropagation()} 
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedId(null);
                    }}
                    className="absolute top-4 right-4 bg-white text-black p-2 rounded-lg"
                  >
                    X
                  </button>
                  <img
                    src={chalets.find(chalet => chalet.id === selectedId).image}
                    alt={chalets.find(chalet => chalet.id === selectedId).title}
                    className="max-w-full max-h-[80vh] object-contain"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white mt-4">
                    {chalets.find(chalet => chalet.id === selectedId).title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {chalets.find(chalet => chalet.id === selectedId).description}
                  </p>
                  <a
                    href={chalets.find(chalet => chalet.id === selectedId).infoLink}
                    className="block mt-4 text-center text-blue-500 hover:underline"
                  >
                    Más Info
                  </a>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Chalets;
