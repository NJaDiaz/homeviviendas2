
"use client";

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = () => {
  const handleClick = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-10 right-4 z-50 p-3 bg-green-500 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition duration-300 ease-in-out"
    >
      <FaWhatsapp size={30} color="white" />
    </div>
  );
};

export default WhatsAppIcon;
