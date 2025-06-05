"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Heros = () => {
  return (
    <div className="w-full sm:h-screen h-auto text-white flex flex-col overflow-hidden  sm:flex-row">
      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full sm:w-2/3 h-[300px] sm:h-full"
      >
        <Image
          alt="main banner"
          fill
          src="/herosimage.jpg"
          className="object-cover shadow  shadow-2xs object-top-left"
        />
      </motion.div>

      {/* Right Text */}
      <motion.div
        initial={{ x: 200, opacity: 0 }} // Start off-screen to the left
        animate={{ x: 0, opacity: 1 }} // Move to original position
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full sm:w-2/3 bg-white text-black p-10 flex flex-col justify-center items-start"
      >
        <h1 className="text-4xl sm:text-6xl poppins-medium leading-tight mb-4">
          Delivering Excellence in{" "}
          <p className="text-amber-400"> Legal Services</p>
        </h1>
        <p className="text-base sm:text-lg">
          &quot; Ronel Lex Advocates and Consultants – Pioneers in legal
          innovation,
          <br />
          justice, and advocacy&quot;
        </p>
        <Button className="bg-amber-400 rounded-full mt-10 h-16 hover:bg-amber-600 hover:text-white text-xl w-36">
          <Link href="/Contact">Contact Us</Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default Heros;
