"use client";
import React from "react";

import Link from "next/link";

import Image from "next/image";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Navbar = () => {
  return (
    <div className="w-auto h-24 flex md:justify-end justify-between items-center px-4">
      <SidebarTrigger className="md:hidden" />
      <div className="w-[1000px]  hidden md:block flex justify-end items-center ">
        <Link
          href="/About"
          className="mx-2 ml-8 text-base sm:text-2xl font-semibold poppins-light hover:text-amber-400 hover:border-b-2 border-amber-400"
        >
          About
        </Link>

        <Link
          href="/chatbot"
          className="mx-2 ml-8 text-base sm:text-2xl font-semibold poppins-light hover:text-amber-400 hover:border-b-2 border-amber-400"
        >
          Live chat
        </Link>

        <Link
          href="/KnowledgeHub"
          className="mx-2 ml-8  text-base sm:text-2xl font-semibold poppins-light hover:text-amber-400 hover:border-b-2 border-amber-400"
        >
          Knowledge
        </Link>

        <Link
          href="/Features"
          className="mx-2 ml-8  text-base sm:text-2xl font-semibold poppins-light hover:text-amber-400 hover:border-b-2 border-amber-400"
        >
          Features
        </Link>
        <Link
          href="/career"
          className="mx-2 ml-8  text-base sm:text-2xl font-semibold poppins-light hover:text-amber-400 hover:border-b-2 border-amber-400"
        >
          Career
        </Link>
        <Link
          href="/Services"
          className="mx-2 ml-8  text-base sm:text-2xl font-semibold poppins-light hover:text-amber-400 hover:border-b-2 border-amber-400"
        >
          Pratical Areas
        </Link>
        <Link
          href="/Management"
          className="mx-2 ml-8  text-base sm:text-2xl font-semibold poppins-light hover:text-amber-400 hover:border-b-2 border-amber-400"
        >
          Our Team
        </Link>
      </div>
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
  );
};

export default Navbar;
