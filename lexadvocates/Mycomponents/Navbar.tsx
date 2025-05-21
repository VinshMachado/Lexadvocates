"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full h-24 flex justify-end items-center px-4">
      <div className="w-full flex justify-end items-center ">
        <DropdownMenu>
          <DropdownMenuTrigger className="mx-2 text-base focus:outline-none sm:text-2xl font-semibold poppins-light hover:text-amber-400 hover:border-b-2 border-amber-400">
            About
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            <Link href="/About">
              <DropdownMenuItem className="hover:font-bold hover:text-amber-400">
                About Us
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem className="hover:font-bold hover:text-amber-400">
              Management
            </DropdownMenuItem>
            <Link href="/Features">
              <DropdownMenuItem className="hover:font-bold hover:text-amber-400">
                Features and updates
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem className="hover:font-bold hover:text-amber-400">
              Knowledge Hub
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:font-bold hover:text-amber-400">
              Career
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:font-bold hover:text-amber-400">
              Position
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link
          href="/chatbot"
          className="mx-2 text-base sm:text-2xl font-semibold poppins-light hover:text-amber-400 hover:border-b-2 border-amber-400"
        >
          Chat With AI
        </Link>
        <Link
          href="/Services"
          className="mx-2 text-base sm:text-2xl font-semibold poppins-light hover:text-amber-400 hover:border-b-2 border-amber-400"
        >
          Services
        </Link>

        <div className="ml-4">
          <Link href="/">
            <Image
              src="/envelope.png"
              alt="LOGO"
              width={70}
              height={70}
              className="w-10 sm:w-16 md:w-15 h-auto object-cover object-center"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
