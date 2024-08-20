"use client";

import { useState, useEffect } from 'react';

const OfertasFlotante = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    
    setVisible(true);
  }, []);

  const closePopup = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <a href="./Ofertas">
    <div className="fixed z-50 bottom-32 right-4 bg-white p-4 shadow-lg rounded-lg w-72">
      <div className="flex justify-between items-center">
        <h3 className="text-lg text-black font-bold">Conoce nuestras ofertas</h3>
        <button onClick={closePopup} className="text-red-500 font-bold">X</button>
      </div>
      <p className="mt-2 text-sm text-gray-600">
        ¡No te pierdas nuestras ofertas exclusivas!
      </p>
    </div>
    </a>
  );
};

export default OfertasFlotante;
