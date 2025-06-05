"use client";
import React from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const Aboutus = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1 });
    }
  }, [inView, controls]);
  return (
    <>
      <div
        id="About"
        className=" sm:h-[600px] sm:mt-20 md:mt-20 h-[800px] w-full flex justify-center items-center flex-col"
      >
        {" "}
        <h1 className="text-5xl mb-3 text-amber-400 text-shadow-gray-100  poppins-medium w-full flex justify-center items-center ">
          About Us
        </h1>
        <div className="w-full h-auto  flex flex-wrap justify-center items-center">
          <motion.div
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={controls}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-11/12  sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 h-[180px] sm:h-[240px] md:h-[280px] lg:h-[320px] xl:h-[360px] relative"
          >
            <Image
              src={"/advlogo.jpg"}
              fill
              alt="about"
              className="  object-contain rounded-xl "
            />
          </motion.div>
          <div className="p-5 ml-5 sm:text-[17px] text-[12px] text-center sm:text-left noticia-text-regular  w-full md:w-[700px]  h-[470px] ">
            {" "}
            <p className="poppins-bold sm:mt-5 mt-2  flex justify-center items-center border-b-2 mb-1 ">
              Welcome to Ronel Lex Advocates and Consultants
            </p>
            At{" "}
            <b className="noticia-text-bold text-xs  sm:text-sm ">
              Ronel Lex Advocates and Consultants{" "}
            </b>
            we are committed to providing premier legal services with a focus on
            excellence, integrity, and client satisfaction. Our firm brings
            together a team of highly skilled and experienced legal
            professionals dedicated to delivering tailored solutions across a
            broad spectrum of practice areas. From corporate law and commercial
            litigation to criminal defense, civil disputes, and constitutional
            matters, we offer strategic advice and expert representation
            grounded in deep legal knowledge and practice. As a forward-thinking
            law chamber, we continuously adapt to the evolving legal landscape
            by staying updated with the latest legal reforms and technological
            advancements. Our approach is to combine traditional legal wisdom
            with innovative strategies, ensuring that our clients benefit from
            cutting-edge legal services while maintaining the highest ethical
            standards. Our mission is to uphold justice, protect our clients’
            interests, and foster long-term relationships built on trust and
            transparency. Whether you’re an individual, business, or
            organization, Ronel Lex Advocates and Consultants is here to guide
            you through every legal challenge with professionalism and
            unwavering commitment. Explore our diverse areas of practice, meet
            our team of legal experts, and learn how we can serve your legal
            needs.
          </div>
        </div>
      </div>
    </>
  );
};
