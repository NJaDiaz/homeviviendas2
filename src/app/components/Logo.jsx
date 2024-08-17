"use client";

import React from "react";
import { NavbarBrand } from "@nextui-org/react";

const Logo = () => (
  <NavbarBrand className="flex-none">
    <a href="./"><h1 className="font-bold text-2xl text-black dark:text-white ">Home<span className="text-red-500">Viviendas</span></h1></a>
  </NavbarBrand>
);

export default Logo;
