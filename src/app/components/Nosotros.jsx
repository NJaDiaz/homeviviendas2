"use client";
import React from "react";

const Nosotros = () => {
  return (
    <section id="nosotros" className=" relative overflow-hidden h-full">
      <div className="relative  bg-gray-100 dark:bg-gray-800">
        <div className=" relative p-6 md:p-12 text-black dark:text-white">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <h1 className=" mt-20 lg:mt-6 text-3xl md:text-5xl mb-4 font-bold text-shadow">
              Somos Home<span className="text-red-600">Viviendas</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 ">
              Una empresa constructora con más de 15 años de trayectoria en el mercado, dedicada a la creación de espacios que enriquecen la vida de las personas y las comunidades. Contando con los mejores proveedores y materiales, brindando seguridad a nuestros clientes de ver la ejecución de su obra por etapas, nos destacamos por nuestra capacidad de innovar y adaptarnos a las necesidades cambiantes de nuestros clientes.
            </p>
            <p className="text-lg md:text-xl mb-6 ">
              Nuestra misión es construir no solo casas, sino también sueños, proporcionando soluciones integrales que van desde el diseño arquitectónico hasta la ejecución y entrega de proyectos con llave en mano o terminación media u obra gris. Dos constantes favorables de nuestros servicios son el precio y la rapidez de todos nuestros proyectos. Nos enorgullecemos en cada proyecto terminado, mostrando la seguridad y sostenibilidad.
            </p>
            <p className="text-lg md:text-xl ">
              Cada proyecto es un reflejo de nuestra pasión por el detalle y nuestra búsqueda constante de superar las expectativas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
