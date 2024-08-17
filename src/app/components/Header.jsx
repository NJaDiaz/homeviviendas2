"use client";

import React, { useState } from "react";
import { Navbar } from "@nextui-org/react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Tema from "./Tema";
import NavLinksMobile from "./NavLinksCel";

const Header = () => {
  const [bgColor, setBgColor] = useState("bg-white");

  const toggleBackground = () => {
    setBgColor((prev) => (prev === "bg-white" ? "bg-gray-800" : "bg-white"));
  };

  return (
    <header className={`header-transparent fixed z-50 p-4 w-full ${bgColor}`}>
      <Navbar className="flex justify-between items-center w-full">
        <Logo />
        <NavLinks />
        <NavLinksMobile />
        <Tema className="ml-auto" />
      </Navbar>
    </header>
  );
};

export default Header;
