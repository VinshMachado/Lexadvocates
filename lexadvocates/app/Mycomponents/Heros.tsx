import React from "react";
import Image from "next/image";

const Heros = () => {
  return (
    <div className="w-full sm:h-screen h-auto text-white flex flex-col sm:flex-row">
      {/* Left Image */}
      <div className="relative w-full sm:w-2/3 h-[300px] sm:h-full">
        <Image
          alt="main banner"
          fill
          src="/StockCake-Lady Justice Statue_174733083844.png"
          className="object-cover object-top-left"
        />
      </div>

      {/* Right Text */}
      <div className="w-full sm:w-2/3 bg-white text-black p-10 flex flex-col justify-center items-start">
        <h1 className="text-4xl sm:text-6xl poppins-medium leading-tight mb-4">
          Delivering Excellence in Legal Services
        </h1>
        <p className="text-base sm:text-lg">
          "Ronel Lex Advocates and Consultants – Pioneers in legal innovation,
          <br />
          justice, and advocacy"
        </p>
      </div>
    </div>
  );
};

export default Heros;
