import React from "react";
import { NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { ChevronDown } from "./Icons.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faHouse, faHotel } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

const NavLinks = () => {
  const icons = { 
    chevron: <ChevronDown fill="currentColor" size={16} />,
    houseClassic: <FontAwesomeIcon icon={faHouseChimney} className="text-warning" size="lg" />,
    houseMinimal: <FontAwesomeIcon icon={faHouse} className="text-secondary" size="lg" />,
    houseEstancia: <FontAwesomeIcon icon={faHotel} className="text-primary" size="lg" />,
  };

  const linkVariants = {
    initial: { opacity: 1, scale: 1 },
    hover: { opacity: 0.8, scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <NavbarContent className="hidden sm:flex text-black dark:text-white flex-1 justify-center gap-4">
      <NavbarItem>
        <motion.div
          initial="initial"
          whileHover="hover"
          variants={linkVariants}
        >
          <Link href="/#nosotros" aria-current="page">
            Nosotros
          </Link>
        </motion.div>
      </NavbarItem>
      <NavbarItem>
        <motion.div
          initial="initial"
          whileHover="hover"
          variants={linkVariants}
        >
          <Link href="/#servicios" aria-current="page">
            Servicios
          </Link>
        </motion.div>
      </NavbarItem>
      <Dropdown>
        <NavbarItem className="flex items-center">
          <DropdownTrigger>
            <Button
              disableRipple
              className="p-0 bg-transparent flex items-center space-x-1 data-[hover=true]:bg-transparent"
              endContent={<span className="ml-1">{icons.chevron}</span>}
              radius="sm"
              variant="light"
            >
              Tipologías
            </Button>
          </DropdownTrigger>
        </NavbarItem>
        <DropdownMenu
          aria-label="Productos"
          className="w-[370px] bg-light-mode dark:bg-dark-mode flex flex-col items-center justify-center rounded-xl"
        >
          <DropdownItem startContent={icons.houseClassic}>Chalet Clásico</DropdownItem>
          <DropdownItem startContent={icons.houseMinimal}>Chalet Minimalista</DropdownItem>
          <DropdownItem startContent={icons.houseEstancia}>Chalet Estancia</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavbarItem>
        <motion.div
          initial="initial"
          whileHover="hover"
          variants={linkVariants}
        >
          <Link href="/#proyectos" aria-current="page">
            Proyectos
          </Link>
        </motion.div>
      </NavbarItem>
      <NavbarItem>
        <motion.div
          initial="initial"
          whileHover="hover"
          variants={linkVariants}
        >
          <Link color="foreground" href="/contacto">
            Contacto
          </Link>
        </motion.div>
      </NavbarItem>
    </NavbarContent>
  );
};

export default NavLinks;
