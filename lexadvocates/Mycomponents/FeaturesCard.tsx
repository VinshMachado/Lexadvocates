"use client ";
import React from "react";
import { motion } from "framer-motion";

const FeaturesCard = (Props: any) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="sm:w-96 w-86 p-3 h-[500px] flex flex-col sm:m-5 m-2 justify-center items-center rounded-2xl hover:shadow-amber-700 shadow-gray-500 shadow-sm"
    >
      <img src={Props.image} className="w-28" />
      <h1 className="text-lg font-bold mt-2"> {Props.title}</h1>
      <ul className="list-disc p-4  ml-2 flex flex-col justify-center items-center ">
        <li>{Props.content1}</li>
        <li className="mt-2">{Props.content2}</li>
      </ul>
    </motion.div>
  );
};

export default FeaturesCard;
