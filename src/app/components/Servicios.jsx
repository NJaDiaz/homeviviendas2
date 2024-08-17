"use client";
import React from "react";
import { motion } from "framer-motion";
import { Scale, Lock, Activity, Flash, Server, TagUser } from "./Icons.jsx"; 

const servicios = [
  {
    id: 1,
    icon: <Scale className="text-primary" fill="currentColor" size={40} />,
    title: "Construcción",
    description: "Diseño y construcción de todos los diseños personalizados que cumplen con los más altos estándares de calidad."
  },
  {
    id: 2,
    icon: <Lock className="text-secondary" fill="currentColor" size={40} />,
    title: "Seguridad y Garantía",
    description: "Proyectos con alta seguridad y garantía, asegurando la satisfacción total del cliente."
  },
  {
    id: 3,
    icon: <Activity className="text-success" fill="currentColor" size={40} />,
    title: "Diseño Personalizado",
    description: "Servicios de diseño arquitectónico adaptados a las necesidades y gustos del cliente."
  },
  {
    id: 4,
    icon: <Flash className="text-warning" fill="currentColor" size={40} />,
    title: "Creación de Planos",
    description: "Desarrollamos planos detallados y precisos para cada proyecto, asegurando que cada diseño se ajuste a las necesidades y especificaciones del cliente."
  },
  {
    id: 5,
    icon: <Server className="text-info" fill="currentColor" size={40} />,
    title: "Soluciones Integrales",
    description: "Ofrecemos soluciones completas desde el diseño hasta la entrega final del proyecto."
  },
  {
    id: 6,
    icon: <TagUser className="text-danger" fill="currentColor" size={40} />,
    title: "Atención Personalizada",
    description: "Asesoramiento y atención personalizada durante todo el proceso de construcción."
  }
];

const Servicios = () => {
  return (
    <section id="servicios" className=" relative py-16 h-full md:h-full bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('./img/fondos/Nosotros.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className=" relative mt-3 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white dark:text-white">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio) => (
            <motion.div
              key={servicio.id}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4 text-gray-800 dark:text-gray-300">
                {servicio.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {servicio.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {servicio.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
