"use client";

import React, { useState } from "react";
import { Button, Dropdown, DropdownMenu, DropdownItem, Link } from "@nextui-org/react";
import { ChevronDown } from "./Icons.jsx"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faHouse, faHotel } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from 'react-icons/fa'; 

const NavLinksMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const icons = { 
    chevron: <ChevronDown fill="currentColor" size={16} />,
    houseClassic: <FontAwesomeIcon icon={faHouseChimney} className="text-warning" size="lg" />,
    houseMinimal: <FontAwesomeIcon icon={faHouse} className="text-secondary" size="lg" />,
    houseEstancia: <FontAwesomeIcon icon={faHotel} className="text-primary" size="lg" />,
    hamburger: <FaBars size={24} />
  };

  return (
    <div className="sm:hidden relative">
      <Button
        className="w-full flex items-center justify-between p-4 bg-transparent text-black dark:bg-gray-900 dark:text-gray-100"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menú"
      >
        <span className="flex items-center">
          {icons.hamburger}
        </span>
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '50%' }}
            exit={{ opacity: 0, width: 0 }}
            className="absolute top-16 left-0 w-1/2 bg-gray-800 text-white rounded-lg dark:bg-gray-900 dark:text-gray-100"
          >
            <Dropdown>
              <DropdownMenu
                aria-label="Menú"
                className="flex flex-col items-center p-4 bg-white dark:bg-gray-900"
              >
                <DropdownItem className="w-full text-center py-2">
                  <Link href="./#nosotros" className="text-gray-800 dark:text-gray-100">Nosotros</Link>
                </DropdownItem>
                <DropdownItem className="w-full text-center py-2">
                  <Link href="./#servicios" className="text-gray-800 dark:text-gray-100">Servicios</Link>
                </DropdownItem>
                <DropdownItem className="w-full text-center py-2">
                  <Link href="./#proyectos" className="text-gray-800 dark:text-gray-100">Proyectos</Link>
                </DropdownItem>
                <DropdownItem className="w-full text-center py-2">
                  <Link href="./contacto" className="text-gray-800 dark:text-gray-100">Contacto</Link>
                </DropdownItem>
                <DropdownItem className="w-full text-center py-2">
                  <Button
                    disableRipple
                    className="p-0 bg-transparent flex items-center space-x-1 text-gray-800 dark:text-gray-100"
                    endContent={<span className="ml-1">{icons.chevron}</span>}
                    radius="sm"
                    variant="light"
                    onClick={() => setIsProductsOpen(!isProductsOpen)} 
                  >
                    Tipologías
                  </Button>
                 
                  <AnimatePresence>
                    {isProductsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 w-full bg-gray-200 dark:bg-gray-800"
                      >
                        <DropdownMenu className="p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
                          <DropdownItem className="flex items-center space-x-2">
                            {icons.houseClassic}
                            <span>Chalet Clásico</span>
                          </DropdownItem>
                          <DropdownItem className="flex items-center space-x-2 mt-2">
                            {icons.houseMinimal}
                            <span>Chalet Minimalista</span>
                          </DropdownItem>
                          <DropdownItem className="flex items-center space-x-2 mt-2">
                            {icons.houseEstancia}
                            <span>Chalet Estancia</span>
                          </DropdownItem>
                        </DropdownMenu>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavLinksMobile;
