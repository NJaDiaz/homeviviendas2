"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaUser, FaStickyNote } from 'react-icons/fa';

const servicios = [
  "Construcción",
  "Remodelación",
  "Planos",
  "Asesoría",
  "Ofertas"
];

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
    servicio: ""
  });

  const [errors, setErrors] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: ""
  });

  const validate = () => {
    let isValid = true;
    const newErrors = { nombre: "", email: "", telefono: "", servicio: "" };

    if (!formData.nombre || !/^[A-Za-z\s]+$/.test(formData.nombre)) {
      newErrors.nombre = "Nombre es obligatorio y solo puede contener letras.";
      isValid = false;
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email es obligatorio y debe ser una dirección válida.";
      isValid = false;
    }

    if (!formData.telefono || !/^\d+$/.test(formData.telefono)) {
      newErrors.telefono = "Teléfono es obligatorio y solo puede contener números.";
      isValid = false;
    }

    if (!formData.servicio) {
      newErrors.servicio = "Servicio es obligatorio.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
     
      console.log("Form data:", formData);
    }
  };

  return (
    <section className="relative py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
         
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="nombre">
                  Nombre
                </label>
                <div className="flex items-center border rounded-lg shadow-sm dark:border-gray-700">
                  <FaUser className="ml-3 text-gray-500 dark:text-gray-400" />
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border-none rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    placeholder="Nombre completo"
                  />
                </div>
                {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">
                  Email
                </label>
                <div className="flex items-center border rounded-lg shadow-sm dark:border-gray-700">
                  <FaEnvelope className="ml-3 text-gray-500 dark:text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border-none rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    placeholder="Tu correo electrónico"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="telefono">
                  Teléfono
                </label>
                <div className="flex items-center border rounded-lg shadow-sm dark:border-gray-700">
                  <FaPhoneAlt className="ml-3 text-gray-500 dark:text-gray-400" />
                  <input
                    type="text"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border-none rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    placeholder="Número de teléfono"
                  />
                </div>
                {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="mensaje">
                  Mensaje (opcional)
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  rows="4"
                  placeholder="Tu mensaje"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="servicio">
                  Servicio
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                >
                  <option value="">Selecciona un servicio</option>
                  {servicios.map((servicio, index) => (
                    <option key={index} value={servicio}>
                      {servicio}
                    </option>
                  ))}
                </select>
                {errors.servicio && <p className="text-red-500 text-sm mt-1">{errors.servicio}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Enviar
              </button>
            </form>
          </motion.div>

       
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:pl-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              Estamos para ayudarte y brindarte una óptima atención
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Completa el siguiente formulario para que nosotros podamos comunicarnos contigo.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Formulario;
